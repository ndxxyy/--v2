import { createHmac } from "node:crypto";

export function getPublicAssetToken(assetId, role, key) {
  return createHmac("sha256", key)
    .update("xqy-public-asset-path-v1\0", "utf8")
    .update(role, "utf8")
    .update("\0", "utf8")
    .update(assetId, "utf8")
    .digest("hex")
    .slice(0, 24);
}

export function getPublicAssetFilename(assetId, role, format, key) {
  return `${getPublicAssetToken(assetId, role, key)}.${format}`;
}
