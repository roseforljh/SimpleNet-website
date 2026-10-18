import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { validateRelease, apkFilename } from './release.mjs';

const repo = process.env.GITHUB_REPOSITORY;
if (repo !== 'roseforljh/SimpleNet-website') throw new Error('Unexpected distribution repository');
const release = validateRelease(JSON.parse(readFileSync('site/release.json', 'utf8')));
if (release.status !== 'published') throw new Error('A published release is required');
const tag = `v${release.version}`;
const asset = release.assets[0];
const filename = apkFilename(release.version);
const args = ['api', `repos/${repo}/releases/tags/${tag}`];
function gh(args) {
  const result = spawnSync('gh', args, { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(`GitHub publication failed: ${result.stderr}`);
  return result.stdout;
}
let current = spawnSync('gh', ['release', 'view', tag, '--repo', repo, '--json', 'isDraft'], { encoding: 'utf8' });
if (existsSync('.release/parts')) {
  const names = readdirSync('.release/parts').sort();
  if (!names.length || names.some((name, i) => name !== `part-${String(i).padStart(3, '0')}`)) throw new Error('Invalid APK transfer parts');
  const bytes = Buffer.concat(names.map(name => readFileSync(`.release/parts/${name}`)));
  if (bytes.length !== asset.size || createHash('sha256').update(bytes).digest('hex') !== asset.sha256) throw new Error('APK transfer integrity mismatch');
  mkdirSync('.release/output', { recursive: true });
  writeFileSync(`.release/output/${filename}`, bytes);
  if (current.status !== 0) {
    gh(['release', 'create', tag, `.release/output/${filename}`, 'site/release.json', '--repo', repo,
      '--draft', '--title', `SimpleNet ${release.version}`, '--notes', 'Official signed Android APK. One download supports ARM32 and ARM64.']);
  } else if (JSON.parse(current.stdout).isDraft) {
    gh(['release', 'upload', tag, `.release/output/${filename}`, 'site/release.json', '--repo', repo, '--clobber']);
  }
  if (spawnSync('gh', ['release', 'view', tag, '--repo', repo, '--json', 'isDraft'], { encoding: 'utf8' }).status === 0) {
    gh(['release', 'edit', tag, '--repo', repo, '--draft=false', '--latest']);
  }
  current = { status: 0, stdout: gh(args) };
}
if (current.status !== 0) throw new Error('The public APK release is missing');
const published = JSON.parse(current.stdout);
const uploaded = published.assets.find(item => item.name === filename);
if (!uploaded || uploaded.size !== asset.size || uploaded.digest !== `sha256:${asset.sha256}`) throw new Error('Public APK digest does not match website metadata');
console.log(`Verified public APK ${filename}: ${asset.sha256}`);
