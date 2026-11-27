const githubDownloads = 'https://github.com/roseforljh/SimpleNet-website/releases/download/';
export const apkFilename = version => `SimpleNet-${version}-arm32-arm64.apk`;
export const apkUrl = (version, tag = `v${version}`) => `${githubDownloads}${tag}/${apkFilename(version)}`;
export const windowsFilename = version => `SimpleNet-${version}-x64.exe`;
export const windowsUrl = version => `${githubDownloads}v${version}/${windowsFilename(version)}`;

/** 官网按钮用 CDN；版本清单和发布校验保留 GitHub 原始地址。 */
export const websiteDownloadUrl = url => url.replace(githubDownloads, 'https://download.0penwor1d.com/');

// Google Play 封闭测试入口，官网与 Telegram 机器人共用。
export const PLAY_GROUP_URL = 'https://groups.google.com/g/simplenet-testers';
export const PLAY_TEST_URL = 'https://play.google.com/apps/testing/net.simplenet.app';

const SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

/** 版本号、code、发布时间和更新策略；安卓用顶层字段，Windows 用 windows 块里的同名字段。 */
function checkVersion(data) {
  if (!SEMVER.test(data.version) || !Number.isSafeInteger(data.versionCode) || data.versionCode < 1
    || !Number.isFinite(Date.parse(data.publishedAt))) throw new Error('Invalid release metadata');
  // Old manifests predate the choice and always meant a hard update.
  const mode = data.updateMode ?? 'hard';
  const minimum = data.minSupportedVersionCode ?? (mode === 'hard' ? data.versionCode : undefined);
  if (!['soft', 'hard'].includes(mode) || !Number.isSafeInteger(minimum) || minimum < 1 || minimum > data.versionCode
    || mode === 'hard' && minimum !== data.versionCode) throw new Error('Invalid release update policy');
  return { version: data.version, versionCode: data.versionCode, publishedAt: data.publishedAt,
    updateMode: mode, minSupportedVersionCode: minimum };
}

export function validateRelease(data) {
  if (data?.status === 'unpublished') return { status: 'unpublished', assets: [] };
  if (data?.status !== 'published' || !Array.isArray(data.assets) || data.assets.length !== 1) throw new Error('Invalid release metadata');
  checkVersion(data);
  const asset = data.assets[0];
  if (asset.abi !== 'arm-universal' || asset.url !== apkUrl(data.version, asset.tag)
    || (asset.tag !== undefined && asset.tag !== `android-v${data.version}` && !(typeof asset.tag === 'string' && asset.tag.startsWith('v') && SEMVER.test(asset.tag.slice(1))))
    || JSON.stringify(asset.architectures) !== JSON.stringify(['arm64-v8a', 'armeabi-v7a'])
    || !Number.isSafeInteger(asset.size) || asset.size < 1
    || !/^[a-f0-9]{64}$/.test(asset.sha256)) throw new Error('Invalid universal APK asset');
  if (data.windows !== undefined) {
    const win = data.windows;
    // 旧清单的 windows 块没有自己的版本，跟安卓同版本；分开发版后带完整的版本和更新策略。
    const own = win && win.version !== undefined;
    if (own) checkVersion(win);
    if (!win || win.arch !== 'x64' || win.url !== windowsUrl(own ? win.version : data.version)
      || !Number.isSafeInteger(win.size) || win.size < 1
      || !/^[a-f0-9]{64}$/.test(win.sha256)) throw new Error('Invalid Windows installer asset');
  }
  if (data.publicationTag !== undefined && ![asset.tag ?? `v${data.version}`, windowsTag(data)].includes(data.publicationTag)) {
    throw new Error('Invalid publication tag');
  }
  return data;
}

/** 已校验清单里安卓这一侧的版本与策略。 */
export const androidRelease = data => checkVersion(data);

/** 已校验清单里 Windows 的安装包、版本与策略；旧清单沿用安卓版本。没有 Windows 时为 null。 */
export function windowsRelease(data) {
  const win = data?.windows;
  if (!win) return null;
  const { arch, url, size, sha256 } = win;
  return { arch, url, size, sha256, ...checkVersion(win.version !== undefined ? win : data) };
}

function windowsTag(data) {
  return data.windows ? `v${data.windows.version ?? data.version}` : undefined;
}

function compareVersions(a, b) {
  const x = a.split('.').map(Number), y = b.split('.').map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}

/** 旧清单中版本最大的标签是本次发布；新清单直接记录发布标签，不比较平台版本。 */
export function latestPublication(data) {
  const apkTag = data.assets[0].tag ?? `v${data.version}`;
  const winTag = windowsTag(data);
  const tag = data.publicationTag ?? (winTag && compareVersions(winTag.slice(1), data.version) > 0 ? winTag : apkTag);
  return { tag, android: apkTag === tag, windows: winTag === tag };
}

export async function loadRelease(signal, url = `${import.meta.env.BASE_URL}release.json`) {
  const response = await fetch(url, { cache: 'no-store', signal });
  if (!response.ok) throw new Error('Release unavailable');
  return validateRelease(await response.json());
}
