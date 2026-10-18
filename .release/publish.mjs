import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateRelease, apkFilename } from './release.mjs';

export function publishRelease({ run = spawnSync, directory = '.', repo = process.env.GITHUB_REPOSITORY } = {}) {
  if (repo !== 'roseforljh/SimpleNet-website') throw new Error('Unexpected distribution repository');
  const file = name => path.resolve(directory, name);
  const release = validateRelease(JSON.parse(readFileSync(file('site/release.json'), 'utf8')));
  if (release.status !== 'published') throw new Error('A published release is required');
  const tag = `v${release.version}`;
  const asset = release.assets[0];
  const filename = apkFilename(release.version);
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
  }
  const current = run('gh', ['release', 'view', tag, '--repo', repo, '--json', 'isDraft'], { encoding: 'utf8' });
  if (existsSync(file('.release/parts'))) {
    const names = readdirSync(file('.release/parts')).sort();
    if (!names.length || names.some((name, i) => name !== `part-${String(i).padStart(3, '0')}`)) throw new Error('Invalid APK transfer parts');
    const bytes = Buffer.concat(names.map(name => readFileSync(file(`.release/parts/${name}`))));
    if (bytes.length !== asset.size || createHash('sha256').update(bytes).digest('hex') !== asset.sha256) throw new Error('APK transfer integrity mismatch');
    mkdirSync(file('.release/output'), { recursive: true });
    writeFileSync(file(`.release/output/${filename}`), bytes);
    if (current.status !== 0) {
      gh(['release', 'create', tag, file(`.release/output/${filename}`), file('site/release.json'), '--repo', repo,
        '--draft', '--title', `SimpleNet ${release.version}`, '--notes', 'Official signed Android APK. One download supports ARM32 and ARM64.']);
    } else if (JSON.parse(current.stdout).isDraft) {
      gh(['release', 'upload', tag, file(`.release/output/${filename}`), file('site/release.json'), '--repo', repo, '--clobber']);
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
  const download = file(`.release/output/downloaded-${filename}`);
  const result = run('curl', ['--fail', '--location', '--silent', '--show-error', '--retry', '3', '--retry-delay', '3', '--retry-all-errors', '--connect-timeout', '15', '--max-time', '180',
    '--output', download, asset.url], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(`Public APK download failed: ${result.stderr}`);
  const downloaded = readFileSync(download);
  if (downloaded.length !== asset.size || createHash('sha256').update(downloaded).digest('hex') !== asset.sha256) {
    throw new Error('Public APK download integrity mismatch');
  }
  console.log(`Verified public APK ${filename}: ${asset.sha256}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) publishRelease();
