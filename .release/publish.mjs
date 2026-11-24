import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateRelease, apkFilename, windowsFilename } from './release.mjs';

export function publishRelease({ run = spawnSync, directory = '.', repo = process.env.GITHUB_REPOSITORY } = {}) {
  if (repo !== 'roseforljh/SimpleNet-website') throw new Error('Unexpected distribution repository');
  const file = name => path.resolve(directory, name);
  const release = validateRelease(JSON.parse(readFileSync(file('site/release.json'), 'utf8')));
  if (release.status !== 'published') throw new Error('A published release is required');
  const tag = `v${release.version}`;
  const asset = release.assets[0];
  const filename = apkFilename(release.version);
  const winAsset = release.windows ?? null;
  const winFilename = winAsset ? windowsFilename(release.version) : null;
  function gh(args) {
    const result = run('gh', args, { encoding: 'utf8' });
    if (result.status !== 0) throw new Error(`GitHub publication failed: ${result.stderr}`);
    return result.stdout;
  }
  function inspect() {
    const info = JSON.parse(gh(['release', 'view', tag, '--repo', repo, '--json', 'databaseId']));
    return JSON.parse(gh(['api', `repos/${repo}/releases/${info.databaseId}`]));
  }
  function verifyUploaded(release) {
    const uploaded = release.assets.find(item => item.name === filename);
    if (!uploaded || uploaded.state !== 'uploaded' || uploaded.size !== asset.size || uploaded.digest !== `sha256:${asset.sha256}`) {
      throw new Error('Public APK digest does not match website metadata');
    }
    if (winAsset && winFilename) {
      const uploadedWin = release.assets.find(item => item.name === winFilename);
      if (!uploadedWin || uploadedWin.state !== 'uploaded' || uploadedWin.size !== winAsset.size || uploadedWin.digest !== `sha256:${winAsset.sha256}`) {
        throw new Error('Public Windows installer digest does not match website metadata');
      }
    }
  }
  function assembleParts(partsDir, expectedSize, expectedSha256, label) {
    const names = readdirSync(partsDir).sort();
    if (!names.length || names.some((name, i) => name !== `part-${String(i).padStart(3, '0')}`)) throw new Error(`Invalid ${label} transfer parts`);
    const bytes = Buffer.concat(names.map(name => readFileSync(path.join(partsDir, name))));
    if (bytes.length !== expectedSize || createHash('sha256').update(bytes).digest('hex') !== expectedSha256) throw new Error(`${label} transfer integrity mismatch`);
    return bytes;
  }
  const current = run('gh', ['release', 'view', tag, '--repo', repo, '--json', 'isDraft'], { encoding: 'utf8' });
  if (existsSync(file('.release/parts'))) {
    const bytes = assembleParts(file('.release/parts'), asset.size, asset.sha256, 'APK');
    mkdirSync(file('.release/output'), { recursive: true });
    writeFileSync(file(`.release/output/${filename}`), bytes);
    const uploadFiles = [file(`.release/output/${filename}`), file('site/release.json')];
    if (winAsset) {
      const windowsParts = file('.release/windows-parts');
      if (!existsSync(windowsParts)) throw new Error('Windows installer transfer is missing');
      const winBytes = assembleParts(windowsParts, winAsset.size, winAsset.sha256, 'Windows installer');
      writeFileSync(file(`.release/output/${winFilename}`), winBytes);
      uploadFiles.push(file(`.release/output/${winFilename}`));
    }
    if (current.status !== 0) {
      gh(['release', 'create', tag, ...uploadFiles, '--repo', repo,
        '--draft', '--title', `SimpleNet ${release.version}`, '--notes', 'Official SimpleNet release for Android (ARM32 + ARM64) and Windows (x64).']);
    } else if (JSON.parse(current.stdout).isDraft) {
      gh(['release', 'upload', tag, ...uploadFiles, '--repo', repo, '--clobber']);
    }
    // Validate the completed upload while the new version is still a private draft.
    const staged = inspect();
    verifyUploaded(staged);
    if (staged.draft) {
      gh(['release', 'edit', tag, '--repo', repo, '--draft=false', '--latest']);
    }
  } else if (current.status !== 0) {
    throw new Error('The public APK release is missing');
  }
  const published = inspect();
  if (published.draft) throw new Error('The public APK release is still a draft');
  verifyUploaded(published);
  // Check the same unauthenticated download URL visitors will use before deploying Pages.
  mkdirSync(file('.release/output'), { recursive: true });
  const verifyDownload = (targetName, targetAsset, label) => {
    const download = file(`.release/output/downloaded-${targetName}`);
    const result = run('curl', ['--fail', '--location', '--silent', '--show-error', '--retry', '3', '--retry-delay', '3', '--retry-all-errors', '--connect-timeout', '15', '--max-time', '180',
      '--output', download, targetAsset.url], { encoding: 'utf8' });
    if (result.status !== 0) throw new Error(`Public ${label} download failed: ${result.stderr}`);
    const downloaded = readFileSync(download);
    if (downloaded.length !== targetAsset.size || createHash('sha256').update(downloaded).digest('hex') !== targetAsset.sha256) {
      throw new Error(`Public ${label} download integrity mismatch`);
    }
    console.log(`Verified public ${label} ${targetName}: ${targetAsset.sha256}`);
  };
  verifyDownload(filename, asset, 'APK');
  if (winAsset && winFilename) {
    verifyDownload(winFilename, winAsset, 'Windows installer');
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) publishRelease();
