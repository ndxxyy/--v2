import {
  ATLAS_ASSETS,
  getAtlasVisibleWatermarkPolicy,
} from "./asset-manifest.mjs";

// 兼容旧导入点；基线只从版本化资产清单派生，不再维护第二份硬编码列表。
export const SOURCE_VISIBLE_IDENTIFIER_BASELINES = Object.freeze(
  Object.fromEntries(
    ATLAS_ASSETS.flatMap((asset) => {
      const policy = getAtlasVisibleWatermarkPolicy(asset.id);

      if (policy.descriptor.applied) {
        return [];
      }

      return [
        [
          asset.id,
          Object.freeze({
            sha256: asset.sourceSha256,
            sourceIdentifier: policy.descriptor.sourceIdentifier,
          }),
        ],
      ];
    }),
  ),
);
