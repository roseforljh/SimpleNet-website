export const apkFilename = version => `SimpleNet-${version}-arm32-arm64.apk`;
export const apkUrl = version => `https://github.com/roseforljh/SimpleNet-website/releases/download/v${version}/${apkFilename(version)}`;
export const windowsFilename = version => `SimpleNet-${version}-x64.exe`;
export const windowsUrl = version => `https://github.com/roseforljh/SimpleNet-website/releases/download/v${version}/${windowsFilename(version)}`;

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
  if (asset.abi !== 'arm-universal' || asset.url !== apkUrl(data.version)
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

export function compareVersions(a, b) {
  const x = a.split('.').map(Number), y = b.split('.').map(Number);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}

/** 这份清单最近一次发版的版本，以及这次发了哪些平台（版本等于它的平台）。 */
export function latestPublication(data) {
  const win = windowsRelease(data);
  const version = win && compareVersions(win.version, data.version) > 0 ? win.version : data.version;
  return { version, android: data.version === version, windows: win?.version === version };
}

export async function loadRelease(signal, url = `${import.meta.env.BASE_URL}release.json`) {
  const response = await fetch(url, { cache: 'no-store', signal });
  if (!response.ok) throw new Error('Release unavailable');
  return validateRelease(await response.json());
}
