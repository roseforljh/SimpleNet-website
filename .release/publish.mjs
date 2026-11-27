import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateRelease, windowsRelease, latestPublication, apkFilename, windowsFilename } from './release.mjs';

export function publishRelease({ run = spawnSync, directory = '.', repo = process.env.GITHUB_REPOSITORY } = {}) {
  if (repo !== 'roseforljh/SimpleNet-website') throw new Error('Unexpected distribution repository');
  const file = name => path.resolve(directory, name);
  const release = validateRelease(JSON.parse(readFileSync(file('site/release.json'), 'utf8')));
  if (release.status !== 'published') throw new Error('A published release is required');
  // 安卓和 Windows 分开发版：这次发版的版本号就是标签；没发的平台安装包留在它自己的旧标签里。
  const latest = latestPublication(release);
  const tag = `v${latest.version}`;
  const win = windowsRelease(release);
  const platforms = [
    { label: 'APK', parts: '.release/parts', asset: release.assets[0], filename: apkFilename(release.version), fresh: latest.android },
    ...(win ? [{ label: 'Windows installer', parts: '.release/windows-parts', asset: win, filename: windowsFilename(win.version), fresh: latest.windows }] : []),
  ];
  const fresh = platforms.filter(item => item.fresh);
  function gh(args) {
    const result = run('gh', args, { encoding: 'utf8' });
    if (result.status !== 0) throw new Error(`GitHub publication failed: ${result.stderr}`);
    return result.stdout;
  }
  function inspect() {
    const info = JSON.parse(gh(['release', 'view', tag, '--repo', repo, '--json', 'databaseId']));
    return JSON.parse(gh(['api', `repos/${repo}/releases/${info.databaseId}`]));
  }
  function verifyUploaded(published) {
    for (const { label, asset, filename } of fresh) {
      const uploaded = published.assets.find(item => item.name === filename);
      if (!uploaded || uploaded.state !== 'uploaded' || uploaded.size !== asset.size || uploaded.digest !== `sha256:${asset.sha256}`) {
        throw new Error(`Public ${label} digest does not match website metadata`);
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
  if (platforms.some(item => existsSync(file(item.parts)))) {
    mkdirSync(file('.release/output'), { recursive: true });
    const uploadFiles = fresh.map(({ label, parts, asset, filename }) => {
      if (!existsSync(file(parts))) throw new Error(`${label} transfer is missing`);
      writeFileSync(file(`.release/output/${filename}`), assembleParts(file(parts), asset.size, asset.sha256, label));
      return file(`.release/output/${filename}`);
    });
    uploadFiles.push(file('site/release.json'));
    if (current.status !== 0) {
      gh(['release', 'create', tag, ...uploadFiles, '--repo', repo,
        '--draft', '--title', `SimpleNet ${latest.version}`, '--notes', `Official SimpleNet ${latest.version} for ${fresh.map(item => item.label === 'APK' ? 'Android (ARM32 + ARM64)' : 'Windows (x64)').join(' and ')}.`]);
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
  // Check the same unauthenticated download URLs visitors will use before deploying Pages: both platforms, each at its own tag.
  mkdirSync(file('.release/output'), { recursive: true });
  for (const { label, asset, filename } of platforms) {
    const download = file(`.release/output/downloaded-${filename}`);
    const result = run('curl', ['--fail', '--location', '--silent', '--show-error', '--retry', '3', '--retry-delay', '3', '--retry-all-errors', '--connect-timeout', '15', '--max-time', '180',
      '--output', download, asset.url], { encoding: 'utf8' });
    if (result.status !== 0) throw new Error(`Public ${label} download failed: ${result.stderr}`);
    const downloaded = readFileSync(download);
    if (downloaded.length !== asset.size || createHash('sha256').update(downloaded).digest('hex') !== asset.sha256) {
      throw new Error(`Public ${label} download integrity mismatch`);
    }
    console.log(`Verified public ${label} ${filename}: ${asset.sha256}`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) publishRelease();
