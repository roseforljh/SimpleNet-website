export const apkFilename = version => `SimpleNet-${version}-arm32-arm64.apk`;
export const apkUrl = version => `https://github.com/roseforljh/SimpleNet-website/releases/download/v${version}/${apkFilename(version)}`;
export const windowsFilename = version => `SimpleNet-${version}-x64.exe`;
export const windowsUrl = version => `https://github.com/roseforljh/SimpleNet-website/releases/download/v${version}/${windowsFilename(version)}`;

// Google Play 封闭测试入口，官网与 Telegram 机器人共用。
export const PLAY_GROUP_URL = 'https://groups.google.com/g/simplenet-testers';
export const PLAY_TEST_URL = 'https://play.google.com/apps/testing/net.simplenet.app';

export function validateRelease(data) {
  if (data?.status === 'unpublished') return { status: 'unpublished', assets: [] };
  if (data?.status !== 'published' || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(data.version)
    || !Number.isSafeInteger(data.versionCode) || data.versionCode < 1
    || !Array.isArray(data.assets) || data.assets.length !== 1
    || !Number.isFinite(Date.parse(data.publishedAt))) throw new Error('Invalid release metadata');
  // Old manifests predate the choice and always meant a hard update.
  const mode = data.updateMode ?? 'hard';
  const minimum = data.minSupportedVersionCode ?? (mode === 'hard' ? data.versionCode : undefined);
  if (!['soft', 'hard'].includes(mode) || !Number.isSafeInteger(minimum) || minimum < 1 || minimum > data.versionCode
    || mode === 'hard' && minimum !== data.versionCode) throw new Error('Invalid release update policy');
  const asset = data.assets[0];
  if (asset.abi !== 'arm-universal' || asset.url !== apkUrl(data.version)
    || JSON.stringify(asset.architectures) !== JSON.stringify(['arm64-v8a', 'armeabi-v7a'])
    || !Number.isSafeInteger(asset.size) || asset.size < 1
    || !/^[a-f0-9]{64}$/.test(asset.sha256)) throw new Error('Invalid universal APK asset');
  if (data.windows !== undefined) {
    const win = data.windows;
    if (!win || win.arch !== 'x64' || win.url !== windowsUrl(data.version)
      || !Number.isSafeInteger(win.size) || win.size < 1
      || !/^[a-f0-9]{64}$/.test(win.sha256)) throw new Error('Invalid Windows installer asset');
  }
  return data;
}

export async function loadRelease(signal, url = `${import.meta.env.BASE_URL}release.json`) {
  const response = await fetch(url, { cache: 'no-store', signal });
  if (!response.ok) throw new Error('Release unavailable');
  return validateRelease(await response.json());
}
