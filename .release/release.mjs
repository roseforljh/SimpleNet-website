export const apkFilename = version => `SimpleNet-${version}-arm32-arm64.apk`;
export const apkUrl = version => `https://github.com/roseforljh/SimpleNet-website/releases/download/v${version}/${apkFilename(version)}`;

export function validateRelease(data) {
  if (data?.status === 'unpublished') return { status: 'unpublished', assets: [] };
  if (data?.status !== 'published' || !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(data.version)
    || !Number.isSafeInteger(data.versionCode) || data.versionCode < 1
    || !Array.isArray(data.assets) || data.assets.length !== 1
    || !Number.isFinite(Date.parse(data.publishedAt))) throw new Error('Invalid release metadata');
  const asset = data.assets[0];
  if (asset.abi !== 'arm-universal' || asset.url !== apkUrl(data.version)
    || JSON.stringify(asset.architectures) !== JSON.stringify(['arm64-v8a', 'armeabi-v7a'])
    || !Number.isSafeInteger(asset.size) || asset.size < 1
    || !/^[a-f0-9]{64}$/.test(asset.sha256)) throw new Error('Invalid universal APK asset');
  return data;
}

export async function loadRelease(signal) {
  const response = await fetch(`${import.meta.env.BASE_URL}release.json`, { cache: 'no-store', signal });
  if (!response.ok) throw new Error('Release unavailable');
  return validateRelease(await response.json());
}
