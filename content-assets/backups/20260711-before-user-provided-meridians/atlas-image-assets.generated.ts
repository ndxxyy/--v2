// 此文件由 scripts/atlas/generate-images.mjs 生成，请勿手工编辑。

export interface AtlasGeneratedVisibleWatermark {
  readonly assetSha256: string;
  readonly brand: "小钟岐医";
  readonly scheme: "xqy-visible-v1";
  readonly position: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly changedPixelRatio: number;
  readonly meanAbsoluteChange: number;
  readonly encodedMeanAbsoluteChange: number;
  readonly encodedOutsideMeanAbsoluteChange: number;
}

export interface AtlasGeneratedImageAsset {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly byteSize: number;
  readonly format: "webp";
  readonly sha256: string;
  readonly visibleWatermark: AtlasGeneratedVisibleWatermark;
  readonly watermarkConfidence: number;
}

export interface AtlasGeneratedWatermark {
  readonly brand: "小钟岐医";
  readonly scheme: "xqy-dct-qim-v2";
  readonly id: string;
}

export interface AtlasGeneratedImagePair {
  readonly thumbnail: AtlasGeneratedImageAsset;
  readonly preview: AtlasGeneratedImageAsset;
  readonly watermark: AtlasGeneratedWatermark;
  readonly sourceRelativePath: string;
}

export const atlasImageAssets = {
  "bladder-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 94050,
      "sha256": "dd8e301ddbeffdfd4612dac89a25e3e7c8ece809d27a020769132da1cbadea17",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.436627,
        "encodedOutsideMeanAbsoluteChange": 1.107685
      },
      "watermarkConfidence": 0.9722735578577664,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 151410,
      "sha256": "4f089b978362e81075a71f6c723bad294afa91e8b4ae3f09fda121ed91eb83f9",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.170141,
        "encodedOutsideMeanAbsoluteChange": 0.719828
      },
      "watermarkConfidence": 0.9957652879527878,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "7c94469d"
    },
    "sourceRelativePath": "bladder-meridian/external-route.jpg"
  },
  "bladder-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 115892,
      "sha256": "2efb41eb40c9ef2c8273e0b8174fc5f9b2314b25134744a9c915d76659022dcf",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.944154,
        "meanAbsoluteChange": 41.54323,
        "encodedMeanAbsoluteChange": 41.328061,
        "encodedOutsideMeanAbsoluteChange": 1.37192
      },
      "watermarkConfidence": 0.9876951807303374,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 189952,
      "sha256": "d60532f9fa2aae65b2d934b7ed11ac858b3e8c8f3e9349dc0f850fdfe3a9016a",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.950474,
        "meanAbsoluteChange": 41.431381,
        "encodedMeanAbsoluteChange": 41.085386,
        "encodedOutsideMeanAbsoluteChange": 0.858894
      },
      "watermarkConfidence": 0.9965120426695377,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "08b68f6a"
    },
    "sourceRelativePath": "bladder-meridian/internal-route.jpg"
  },
  "bladder-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 108034,
      "sha256": "1fab352f7cd7ca025f4ee1404314eb7f2fdc9a8deccab643fef737347c060988",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.463242,
        "encodedOutsideMeanAbsoluteChange": 1.282167
      },
      "watermarkConfidence": 0.9856527701904241,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 174148,
      "sha256": "a7a37c8f1c538a62b085b9bc5db441267092c5e4957b6320989cc7172282ada5",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.148608,
        "encodedOutsideMeanAbsoluteChange": 0.798699
      },
      "watermarkConfidence": 0.9976762617233023,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "09b5510e"
    },
    "sourceRelativePath": "bladder-meridian/local-points-1.jpg"
  },
  "bladder-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 190634,
      "sha256": "a2b5cfd6c8bad0ce7b5a7889f9c21d7d789bbee5b9b69776c469e2877285264b",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.769524,
        "encodedOutsideMeanAbsoluteChange": 2.065381
      },
      "watermarkConfidence": 0.9972907232639285,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 308124,
      "sha256": "beaeb473e70818a614c1f43093beae3007209437295880872202d19448d5ee79",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.545794,
        "encodedOutsideMeanAbsoluteChange": 1.236434
      },
      "watermarkConfidence": 0.9993524443864003,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "93413d20"
    },
    "sourceRelativePath": "bladder-meridian/local-points-2.jpg"
  },
  "bladder-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 192680,
      "sha256": "4cbff2f64cf5bd1a8a41be385032428e2844627900b00c305ca71d4f9d8be02b",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.762398,
        "encodedOutsideMeanAbsoluteChange": 2.292382
      },
      "watermarkConfidence": 0.9961401006901013,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 321240,
      "sha256": "1748fb1f32ab741742dadc2e52a8f7bffb7f9032fbdde40faffa66b27871b0d3",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.529888,
        "encodedOutsideMeanAbsoluteChange": 1.383946
      },
      "watermarkConfidence": 0.9981888404054396,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "eb1342e0"
    },
    "sourceRelativePath": "bladder-meridian/local-points-3.jpg"
  },
  "bladder-meridian/local-points-4-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/local-points-4-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 156664,
      "sha256": "26e6d55bedeaaf7cab267e787491676aca24a5a32ba7f3f6a07e57d62fe8805d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.616019,
        "encodedOutsideMeanAbsoluteChange": 2.154922
      },
      "watermarkConfidence": 0.9946038317826716,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-4-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 266774,
      "sha256": "e94590bad8f51d52fdea4aef546916aa3a05f65547346a269ead19273518b607",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.514327,
        "encodedOutsideMeanAbsoluteChange": 1.348841
      },
      "watermarkConfidence": 0.9991217865142245,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "48035857"
    },
    "sourceRelativePath": "bladder-meridian/local-points-4-1.jpg"
  },
  "bladder-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 257456,
      "sha256": "e61cc6aee89cb8fc1b5398561d1c592a329af5df07f995df47cbaff4cecc361d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.962478,
        "meanAbsoluteChange": 41.363911,
        "encodedMeanAbsoluteChange": 41.2492,
        "encodedOutsideMeanAbsoluteChange": 2.945671
      },
      "watermarkConfidence": 0.9971417060193974,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 428130,
      "sha256": "3a43dd42d12b69b9a04119b9c79ed5784f18d6997b4c4bbeb83daa6b8475ed91",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.962188,
        "meanAbsoluteChange": 41.601493,
        "encodedMeanAbsoluteChange": 41.350445,
        "encodedOutsideMeanAbsoluteChange": 1.824528
      },
      "watermarkConfidence": 0.9995721742106614,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f2ff717e"
    },
    "sourceRelativePath": "bladder-meridian/local-points-4.jpg"
  },
  "bladder-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/local-points-5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 118354,
      "sha256": "2f06b600556ac1f433ce43d99e2faa24275d3e77fa9d72fd4b566eb2988e4473",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.944045,
        "meanAbsoluteChange": 40.34715,
        "encodedMeanAbsoluteChange": 40.199244,
        "encodedOutsideMeanAbsoluteChange": 1.482233
      },
      "watermarkConfidence": 0.9679039807763866,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 196626,
      "sha256": "c1525ca7702c71d56f99dc5059aa4b218aef3d28a7406617635e4eae3c4854b7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.949699,
        "meanAbsoluteChange": 40.243497,
        "encodedMeanAbsoluteChange": 39.956991,
        "encodedOutsideMeanAbsoluteChange": 0.917366
      },
      "watermarkConfidence": 0.9963651089019548,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "79f96920"
    },
    "sourceRelativePath": "bladder-meridian/local-points-5.jpg"
  },
  "bladder-meridian/local-points-6": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/local-points-6.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 98844,
      "sha256": "7ae15d20d5c54fd13363c7dfe5393ebca37b82846f64cf34b7f9321c834b49ad",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.670121,
        "encodedOutsideMeanAbsoluteChange": 1.27968
      },
      "watermarkConfidence": 0.9778033068297705,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 162574,
      "sha256": "33d1957af265f19687c4122076630975816c9a24bcd7b5ac7a390e4a03d150d6",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.556245,
        "encodedOutsideMeanAbsoluteChange": 0.812078
      },
      "watermarkConfidence": 0.9982781625198538,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "fc318cd6"
    },
    "sourceRelativePath": "bladder-meridian/local-points-6.jpg"
  },
  "bladder-meridian/local-points-7": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bladder-meridian/local-points-7.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 79420,
      "sha256": "a8235fdbbda50777741a79e967b2974ced23b712496e19d949bc36451360a12e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.944154,
        "meanAbsoluteChange": 41.533232,
        "encodedMeanAbsoluteChange": 41.263489,
        "encodedOutsideMeanAbsoluteChange": 1.031014
      },
      "watermarkConfidence": 0.9595672261249661,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 129590,
      "sha256": "5a8f2ce729832b955c64e3882bc49c961f855b3b35d6f11186f20791c5cbd431",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951077,
        "meanAbsoluteChange": 41.445622,
        "encodedMeanAbsoluteChange": 41.035515,
        "encodedOutsideMeanAbsoluteChange": 0.698638
      },
      "watermarkConfidence": 0.9942190115691246,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "6134f50f"
    },
    "sourceRelativePath": "bladder-meridian/local-points-7.jpg"
  },
  "du-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/du-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 168842,
      "sha256": "855b4bcad707c7e8bcc544268e72fa29c1ac896b2790373dc578b2fdb5d4a29d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "east-25",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 296,
        "changedPixelRatio": 0.949935,
        "meanAbsoluteChange": 39.246837,
        "encodedMeanAbsoluteChange": 39.329625,
        "encodedOutsideMeanAbsoluteChange": 2.035785
      },
      "watermarkConfidence": 0.9920294182874413,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 281692,
      "sha256": "30f115724b55a7eaf338a235764d6243ec170a0d70bfb97a39a55c015aaa6e6c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "east-25",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 333,
        "changedPixelRatio": 0.953919,
        "meanAbsoluteChange": 39.216423,
        "encodedMeanAbsoluteChange": 38.977204,
        "encodedOutsideMeanAbsoluteChange": 1.259649
      },
      "watermarkConfidence": 0.9975022828066403,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "782387ca"
    },
    "sourceRelativePath": "du-meridian/external-route.jpg"
  },
  "du-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/du-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 178258,
      "sha256": "4f8d875b1ca84272a5f09e76c2a05ff592cc989a805fd8ce1db690d7a3c51911",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "east-25",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 296,
        "changedPixelRatio": 0.949062,
        "meanAbsoluteChange": 39.281632,
        "encodedMeanAbsoluteChange": 39.407286,
        "encodedOutsideMeanAbsoluteChange": 2.20742
      },
      "watermarkConfidence": 0.9921466271655878,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 298600,
      "sha256": "c4b2ec8a112b5d683f8d7b6657005b46231d5a8de24589abf983869e15daea4e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.955642,
        "meanAbsoluteChange": 38.15679,
        "encodedMeanAbsoluteChange": 37.617628,
        "encodedOutsideMeanAbsoluteChange": 1.381315
      },
      "watermarkConfidence": 0.996991531039966,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "620ca73d"
    },
    "sourceRelativePath": "du-meridian/internal-route.jpg"
  },
  "du-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/du-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 252972,
      "sha256": "c8b6fe2387a4f2cf559808218bc96478d57e784e615dc0150f61795d74b5d7b2",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.962478,
        "meanAbsoluteChange": 41.363911,
        "encodedMeanAbsoluteChange": 41.287558,
        "encodedOutsideMeanAbsoluteChange": 2.928524
      },
      "watermarkConfidence": 0.9980221293318196,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 421860,
      "sha256": "e407ff572b1595c4456712601f1566dcba6d455aaa7216611b5df14a1d6d2f0b",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.962188,
        "meanAbsoluteChange": 41.601493,
        "encodedMeanAbsoluteChange": 41.357738,
        "encodedOutsideMeanAbsoluteChange": 1.811658
      },
      "watermarkConfidence": 0.9993194660299609,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1d2e8dee"
    },
    "sourceRelativePath": "du-meridian/local-points-1.jpg"
  },
  "du-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/du-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 189530,
      "sha256": "42d6894109aa888088c8f6fbf722f3ef1e1e51609a79f443d4bebd9557171ab3",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.826716,
        "encodedOutsideMeanAbsoluteChange": 2.298469
      },
      "watermarkConfidence": 0.9970520796956356,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 317634,
      "sha256": "99ccc354ae19688e1ba924aa1a2781b1cd37789c6dc23f6b6367ae62a232066d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.617944,
        "encodedOutsideMeanAbsoluteChange": 1.390828
      },
      "watermarkConfidence": 0.9987962491472568,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b5d76fd0"
    },
    "sourceRelativePath": "du-meridian/local-points-2.jpg"
  },
  "du-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/du-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 189554,
      "sha256": "10f7aff107c2ed281e7b574b5715b40683eee385825fccf225ca75f3121cf109",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.747964,
        "encodedOutsideMeanAbsoluteChange": 2.058481
      },
      "watermarkConfidence": 0.9966289854534799,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 303458,
      "sha256": "df1e723a1366d64164588e20a7df494b0f87e0fbece605ff4ad16ee9ff8b458e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.575768,
        "encodedOutsideMeanAbsoluteChange": 1.261245
      },
      "watermarkConfidence": 0.9996684350132625,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "45d64e43"
    },
    "sourceRelativePath": "du-meridian/local-points-3.jpg"
  },
  "du-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/du-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 111556,
      "sha256": "4ffc32e8cc2d92bee4d8f0b7d3532214d41c71f5a8d671d23b520c474641ca1f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.370964,
        "encodedOutsideMeanAbsoluteChange": 1.312475
      },
      "watermarkConfidence": 0.9866738583657695,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 179160,
      "sha256": "c9992eb086283cc71bd5979b0128ce65bf53677452f0b0b9822bb817984d761e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.148119,
        "encodedOutsideMeanAbsoluteChange": 0.819421
      },
      "watermarkConfidence": 0.997766078818115,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "92aae56c"
    },
    "sourceRelativePath": "du-meridian/local-points-4.jpg"
  },
  "du-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/du-meridian/local-points-5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 116390,
      "sha256": "f1c7290ad696e8946567c672cb1698b9a461d460216460be60dff6d188fa3c8c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.662122,
        "encodedOutsideMeanAbsoluteChange": 1.872711
      },
      "watermarkConfidence": 0.9805239254225809,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 203902,
      "sha256": "b76632523425acc59213b62d9c4ffbe4b38e46cfa6a3dd3bf09e385ae17c0629",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.530577,
        "encodedOutsideMeanAbsoluteChange": 1.198786
      },
      "watermarkConfidence": 0.9985468478889531,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "2c3e5cc4"
    },
    "sourceRelativePath": "du-meridian/local-points-5.jpg"
  },
  "gallbladder-meridian/external-route-alt": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/external-route-alt.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 108426,
      "sha256": "68a245d44a4862f8b297fb6aca3566a3095bf9554060edb46694b2c658374ff6",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.338787,
        "encodedOutsideMeanAbsoluteChange": 1.245036
      },
      "watermarkConfidence": 0.9801065192841941,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/external-route-alt.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 177572,
      "sha256": "312950dc951d555b0ab3d1f9023a3c578d737b463db5e854046c16c637af03c7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.11493,
        "encodedOutsideMeanAbsoluteChange": 0.794534
      },
      "watermarkConfidence": 0.9994939271255061,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "aeefabfb"
    },
    "sourceRelativePath": "gallbladder-meridian/external-route-alt.jpg"
  },
  "gallbladder-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 110536,
      "sha256": "d69218b0fc172a57de19e243284859e0d68e68d6273736bd07cca8e54c7aa4ae",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.210224,
        "encodedOutsideMeanAbsoluteChange": 1.226748
      },
      "watermarkConfidence": 0.9864551265040284,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 179744,
      "sha256": "e99560c1da77add5eafc594d128df88bea4cac97053082f4cebf204def0796f0",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.152483,
        "encodedOutsideMeanAbsoluteChange": 0.773662
      },
      "watermarkConfidence": 0.9983209450987877,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "70a98c14"
    },
    "sourceRelativePath": "gallbladder-meridian/external-route.jpg"
  },
  "gallbladder-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 192640,
      "sha256": "a7ee8c916a7790f7def51b1c498d795dbd4a6c0c178f59f53251c91611d045b2",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.950262,
        "meanAbsoluteChange": 40.548757,
        "encodedMeanAbsoluteChange": 40.195499,
        "encodedOutsideMeanAbsoluteChange": 2.122945
      },
      "watermarkConfidence": 0.9891021824331336,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 317870,
      "sha256": "d6b984da3ae71ebbc180df919fe8e3f66e9b6892c3735e0e82fd705deb546508",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.955125,
        "meanAbsoluteChange": 40.699081,
        "encodedMeanAbsoluteChange": 40.18441,
        "encodedOutsideMeanAbsoluteChange": 1.344904
      },
      "watermarkConfidence": 0.9959317175678255,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "3c05a3bc"
    },
    "sourceRelativePath": "gallbladder-meridian/internal-route.jpg"
  },
  "gallbladder-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 144776,
      "sha256": "ccdde299d5bcd962765c9153c95b4d633640017531e20befe12667242ec0d8ff",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.944481,
        "meanAbsoluteChange": 41.55112,
        "encodedMeanAbsoluteChange": 41.353439,
        "encodedOutsideMeanAbsoluteChange": 1.584751
      },
      "watermarkConfidence": 0.9897808327245303,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 233078,
      "sha256": "b596a39f614d790a5e925c42e3de51703f949f4e33d01ebe5778fef5b8239b6d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.950991,
        "meanAbsoluteChange": 41.436291,
        "encodedMeanAbsoluteChange": 41.099598,
        "encodedOutsideMeanAbsoluteChange": 0.979239
      },
      "watermarkConfidence": 0.9977386383761977,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f8ac316a"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-1.jpg"
  },
  "gallbladder-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 147992,
      "sha256": "53bf7c968db25f3ed1c46eea0e31b3d1f3f9dfa5e111aa700b4e5a33023f8c5e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.807373,
        "encodedOutsideMeanAbsoluteChange": 1.941391
      },
      "watermarkConfidence": 0.9957362864153739,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 249540,
      "sha256": "248d01e6e3bc91502c807c15f4c6b06759ec683e7b55fcf7f8bc120339cc91c5",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.572897,
        "encodedOutsideMeanAbsoluteChange": 1.200394
      },
      "watermarkConfidence": 0.998914478378764,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4c661634"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-2.jpg"
  },
  "gallbladder-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 169098,
      "sha256": "d4d971e954d925c9eb9afcc369a093acff7cdd592c99b089cc37448c1d14152a",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.72484,
        "encodedOutsideMeanAbsoluteChange": 2.208234
      },
      "watermarkConfidence": 0.9942663140128929,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 285574,
      "sha256": "080a48f98ecda7040f684c020b4eefa50e3f1bffcd9b8790909761e4acf70ec7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.537066,
        "encodedOutsideMeanAbsoluteChange": 1.370599
      },
      "watermarkConfidence": 0.9976015103281876,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e2cfb574"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-3.jpg"
  },
  "gallbladder-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 251564,
      "sha256": "23a1796af4110cc688805a21a3e7be71584815a62253be38063704fb3a4fee04",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.978512,
        "meanAbsoluteChange": 41.027705,
        "encodedMeanAbsoluteChange": 40.733312,
        "encodedOutsideMeanAbsoluteChange": 2.890562
      },
      "watermarkConfidence": 0.9980063260850385,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 411440,
      "sha256": "7d9a293a09ca36a5ba9a49e46f8ff0486e1cc4f7bd3969b4f25143ad5b76890f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.979587,
        "meanAbsoluteChange": 41.110795,
        "encodedMeanAbsoluteChange": 40.694516,
        "encodedOutsideMeanAbsoluteChange": 1.797742
      },
      "watermarkConfidence": 0.99914733084293,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "258b03ca"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-4.jpg"
  },
  "gallbladder-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/local-points-5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 94358,
      "sha256": "2b82fed8456200fbea4dd0828cc1be1cb716829ba6964bffbb9e9aa61e631ddf",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.29443,
        "encodedOutsideMeanAbsoluteChange": 1.079234
      },
      "watermarkConfidence": 0.9673596610306177,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 151838,
      "sha256": "9f270385000f2a927d62205b21cb87ac4b599c4a4dfcfbad8d8b782491250e15",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.138415,
        "encodedOutsideMeanAbsoluteChange": 0.667227
      },
      "watermarkConfidence": 0.9952917991204877,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "8b641a37"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-5.jpg"
  },
  "gallbladder-meridian/local-points-6": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/local-points-6.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 166060,
      "sha256": "f50d6c255441b56d2de7e636becfb9840d4165003c2934e869d8f4d5ee9d4788",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.94808,
        "meanAbsoluteChange": 42.503999,
        "encodedMeanAbsoluteChange": 42.315954,
        "encodedOutsideMeanAbsoluteChange": 2.211536
      },
      "watermarkConfidence": 0.9953320053467151,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 280430,
      "sha256": "06647baa39cdd9145ed02950cd6cdba37efee209312cbc7799afc80477143bc9",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.95323,
        "meanAbsoluteChange": 42.370715,
        "encodedMeanAbsoluteChange": 42.200919,
        "encodedOutsideMeanAbsoluteChange": 1.390102
      },
      "watermarkConfidence": 0.998864212427219,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ec4a2543"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-6.jpg"
  },
  "gallbladder-meridian/local-points-7": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/local-points-7.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 92456,
      "sha256": "484bbc6a6f0a26527b89ef7b6045166bc6aee8e94b692d60836a79706cade46f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.335224,
        "encodedOutsideMeanAbsoluteChange": 1.098615
      },
      "watermarkConfidence": 0.9700028086858167,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 150420,
      "sha256": "67fb9590555a9723a485cef4ece0ab5836d722d1155c19fcf4111d4505e64f8c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.162906,
        "encodedOutsideMeanAbsoluteChange": 0.699627
      },
      "watermarkConfidence": 0.9970623433031635,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4e8755b4"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-7.jpg"
  },
  "gallbladder-meridian/local-points-8": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/gallbladder-meridian/local-points-8.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 113014,
      "sha256": "5d22a0c614c31c5514f45ef04b316d1451d96f83f9a24f512c0556873e73475a",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.615692,
        "encodedMeanAbsoluteChange": 41.212224,
        "encodedOutsideMeanAbsoluteChange": 1.456255
      },
      "watermarkConfidence": 0.9776408291381649,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-8.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 190292,
      "sha256": "32a81d56f7de76fd3b0656966d8c059e3886b089653ef3467dcf50e1773a7902",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.951593,
        "meanAbsoluteChange": 41.505857,
        "encodedMeanAbsoluteChange": 41.056532,
        "encodedOutsideMeanAbsoluteChange": 0.900384
      },
      "watermarkConfidence": 0.9981766060428658,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1ea3b1c8"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-8.jpg"
  },
  "heart-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/heart-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 90604,
      "sha256": "806cd503dafc6a687f07c2f8a96aee72dacd69bc11b0023556cd1a0f2aba7afa",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.408777,
        "encodedOutsideMeanAbsoluteChange": 1.194551
      },
      "watermarkConfidence": 0.9692546562555086,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 149826,
      "sha256": "25c044d421d771e29d111df0d5f720ed07b81d24d59814b2fa4dc575f5b912ae",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.172351,
        "encodedOutsideMeanAbsoluteChange": 0.760851
      },
      "watermarkConfidence": 0.9941039191482606,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "720b665b"
    },
    "sourceRelativePath": "heart-meridian/external-route.jpg"
  },
  "heart-meridian/internal-detail": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/heart-meridian/internal-detail.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 100086,
      "sha256": "20ba31c84d34f2842e452e15a614dbe60361f90ef41d3ccc9c4e003659e3dfae",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.903614,
        "encodedMeanAbsoluteChange": 40.772615,
        "encodedOutsideMeanAbsoluteChange": 1.420849
      },
      "watermarkConfidence": 0.9874914869856758,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/internal-detail.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 167482,
      "sha256": "f0de00ca47b9b3c84d988a1fce50654df00c6e425063ffad2ebd08ddb8c3aded",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.946856,
        "meanAbsoluteChange": 40.785214,
        "encodedMeanAbsoluteChange": 40.560695,
        "encodedOutsideMeanAbsoluteChange": 0.903259
      },
      "watermarkConfidence": 0.9980763772684504,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d3a6694c"
    },
    "sourceRelativePath": "heart-meridian/internal-detail.jpg"
  },
  "heart-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/heart-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 99716,
      "sha256": "b6a061ee458f030668c0de44ebb028ab389427e4018b33389133c1cbc9c88ec7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.903614,
        "encodedMeanAbsoluteChange": 40.800429,
        "encodedOutsideMeanAbsoluteChange": 1.428458
      },
      "watermarkConfidence": 0.9878195051031591,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 167814,
      "sha256": "5be74cb0fd8fef79e80bc1c79940899fa37ecbf3770610e4495950fd924ac374",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.946856,
        "meanAbsoluteChange": 40.785214,
        "encodedMeanAbsoluteChange": 40.560924,
        "encodedOutsideMeanAbsoluteChange": 0.905191
      },
      "watermarkConfidence": 0.9979942470751293,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d31f9c76"
    },
    "sourceRelativePath": "heart-meridian/internal-route.jpg"
  },
  "heart-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/heart-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 53916,
      "sha256": "101672059592c0c7966fa98441195b20301d8963f82f37509f9e2f401eaba2ab",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.10333,
        "encodedOutsideMeanAbsoluteChange": 1.009447
      },
      "watermarkConfidence": 0.9795205071448401,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 98830,
      "sha256": "6220f1db813de3e368887fdb1febe126d4235989ac8eb5908a0f5da710bc4103",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.160006,
        "encodedOutsideMeanAbsoluteChange": 0.690186
      },
      "watermarkConfidence": 0.9936004514427292,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "9ad67b4e"
    },
    "sourceRelativePath": "heart-meridian/local-points-1.jpg"
  },
  "heart-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/heart-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 87916,
      "sha256": "5807d5f5116824024661969d18964a1d30085826e201a77b9daff8f5da5d4347",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.562791,
        "encodedOutsideMeanAbsoluteChange": 1.114109
      },
      "watermarkConfidence": 0.9859365595763104,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 145498,
      "sha256": "bd3327d438c665a1352d0977fdf4eb2df07fa557d67f153d2eb0fe3bc1a79f22",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.155441,
        "encodedOutsideMeanAbsoluteChange": 0.692237
      },
      "watermarkConfidence": 0.9948949118027836,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1b5c36b9"
    },
    "sourceRelativePath": "heart-meridian/local-points-2.jpg"
  },
  "herbs/wind-cold/angelica-dahurica": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/angelica-dahurica.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 153366,
      "sha256": "b37bbed045526e61e97cf0389b1894a3fc4e6da43b440c08c004638423d289ea",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.675465,
        "encodedOutsideMeanAbsoluteChange": 2.900599
      },
      "watermarkConfidence": 0.9521138625503143,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/angelica-dahurica.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 301474,
      "sha256": "80e0a8217d0253b28674632cdcd41ff4d158e1126325c906f1ade9f6e5697156",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.92449,
        "encodedOutsideMeanAbsoluteChange": 2.126146
      },
      "watermarkConfidence": 0.997066602431754,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "09dabe3b"
    },
    "sourceRelativePath": "herbs/wind-cold/angelica-dahurica.jpg"
  },
  "herbs/wind-cold/asarum": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/asarum.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 147570,
      "sha256": "1e8ae3174b61725bff0713e0704342381c4b3793270318e1fe47bc792a68e32b",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997382,
        "meanAbsoluteChange": 40.448044,
        "encodedMeanAbsoluteChange": 39.698589,
        "encodedOutsideMeanAbsoluteChange": 2.813984
      },
      "watermarkConfidence": 0.9479678359060147,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/asarum.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 291398,
      "sha256": "cbc485c8584e8ef3794682d9f46d2075a0147eb0c791cbb6e9be06142413af52",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.508585,
        "encodedMeanAbsoluteChange": 39.887884,
        "encodedOutsideMeanAbsoluteChange": 2.083318
      },
      "watermarkConfidence": 0.9992120247832614,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "95ac10d4"
    },
    "sourceRelativePath": "herbs/wind-cold/asarum.jpg"
  },
  "herbs/wind-cold/centipeda": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/centipeda.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 126360,
      "sha256": "a0f743ab37adbcffed422c238fc67413c3108d0287c070e9818222d538d23a9f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.658122,
        "encodedOutsideMeanAbsoluteChange": 2.645631
      },
      "watermarkConfidence": 0.9286773806713884,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/centipeda.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 254244,
      "sha256": "7048cabc86e06d73ba32da24a58b59941eb7a397f4ecc41bca3a3d316ff67881",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.893167,
        "encodedOutsideMeanAbsoluteChange": 2.008052
      },
      "watermarkConfidence": 0.9970118109981959,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "41554f65"
    },
    "sourceRelativePath": "herbs/wind-cold/centipeda.jpg"
  },
  "herbs/wind-cold/cinnamon-twig": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/cinnamon-twig.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 157828,
      "sha256": "a8ce0d1aa637b25e77d00892812f7c5712b0e5214154c6ab650bcd45f37e4b6d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997382,
        "meanAbsoluteChange": 40.448044,
        "encodedMeanAbsoluteChange": 39.750691,
        "encodedOutsideMeanAbsoluteChange": 2.89869
      },
      "watermarkConfidence": 0.972798231840038,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/cinnamon-twig.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 300112,
      "sha256": "dfb25c4a5b712ed3c6616911179bf7b2adb02c65d0b1b030e968b89418a3d0d7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.508585,
        "encodedMeanAbsoluteChange": 39.926443,
        "encodedOutsideMeanAbsoluteChange": 2.133902
      },
      "watermarkConfidence": 0.9988398856045916,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4e98feca"
    },
    "sourceRelativePath": "herbs/wind-cold/cinnamon-twig.jpg"
  },
  "herbs/wind-cold/coriander": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/coriander.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 163426,
      "sha256": "3847a910a42318fe2e8b85c99de86eeb99f2f732f30a91115560240cf197d2d5",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.775596,
        "encodedOutsideMeanAbsoluteChange": 2.996377
      },
      "watermarkConfidence": 0.9450203554332504,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/coriander.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 317760,
      "sha256": "bc24a7057a6ed15534764ce56f688270dbba6a9b57042ef0171a95e32eebec91",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.890411,
        "encodedOutsideMeanAbsoluteChange": 2.188371
      },
      "watermarkConfidence": 0.9958337583743315,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "eddf43bf"
    },
    "sourceRelativePath": "herbs/wind-cold/coriander.jpg"
  },
  "herbs/wind-cold/ephedra": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/ephedra.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 136878,
      "sha256": "bd736c8240b829bebd6b595c0f3e75cdbe212ca37fb4ce37ca287b2c828af972",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.997382,
        "meanAbsoluteChange": 39.815663,
        "encodedMeanAbsoluteChange": 38.942372,
        "encodedOutsideMeanAbsoluteChange": 2.804082
      },
      "watermarkConfidence": 0.9325949019687136,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/ephedra.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 267394,
      "sha256": "288b1215a21851c614d7787ef88d159271aea177b2c42addb6dde23aa9b8f17e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 39.852196,
        "encodedMeanAbsoluteChange": 39.240942,
        "encodedOutsideMeanAbsoluteChange": 2.085425
      },
      "watermarkConfidence": 0.9974385735698242,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "faf0694c"
    },
    "sourceRelativePath": "herbs/wind-cold/ephedra.jpg"
  },
  "herbs/wind-cold/fresh-ginger": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/fresh-ginger.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 146764,
      "sha256": "adc50c0be627c87a622266690327f5e4d472bac19f5f3d6b852f716a1044bf31",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997382,
        "meanAbsoluteChange": 40.448044,
        "encodedMeanAbsoluteChange": 39.833551,
        "encodedOutsideMeanAbsoluteChange": 2.91093
      },
      "watermarkConfidence": 0.9416624306458737,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/fresh-ginger.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 294504,
      "sha256": "e9bc59628b7f63a2e02fd7a717682d807136bae630f10a28798983d6149e259b",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.508585,
        "encodedMeanAbsoluteChange": 39.897129,
        "encodedOutsideMeanAbsoluteChange": 2.131037
      },
      "watermarkConfidence": 0.9968903380521397,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1c4e3ac5"
    },
    "sourceRelativePath": "herbs/wind-cold/fresh-ginger.jpg"
  },
  "herbs/wind-cold/ligusticum": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/ligusticum.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 158888,
      "sha256": "a010851c80fbb86b810de9b7f3efa1eb0cb7787519023be79c0ed2c33ad22d6c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.847949,
        "encodedOutsideMeanAbsoluteChange": 2.870746
      },
      "watermarkConfidence": 0.953099687280442,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/ligusticum.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 303850,
      "sha256": "9229ed43da06538a95c37d28b953b23b7d5f576f45772cc3163081c5c23f0a8a",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.917026,
        "encodedOutsideMeanAbsoluteChange": 2.102833
      },
      "watermarkConfidence": 0.9983999483834866,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "72b3f985"
    },
    "sourceRelativePath": "herbs/wind-cold/ligusticum.jpg"
  },
  "herbs/wind-cold/magnolia-flower": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/magnolia-flower.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 127608,
      "sha256": "b1114933fc75d3c9ec558ac3cc78c438ea13c86e824c730372e4460bdd72d789",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.730621,
        "encodedOutsideMeanAbsoluteChange": 2.73365
      },
      "watermarkConfidence": 0.9348033722454948,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/magnolia-flower.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 256058,
      "sha256": "1da483eaf804b563d9269794496cb7a863189ed44311a1de18988a5328e45830",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.932415,
        "encodedOutsideMeanAbsoluteChange": 2.053563
      },
      "watermarkConfidence": 0.9958927677867462,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1b5c47ad"
    },
    "sourceRelativePath": "herbs/wind-cold/magnolia-flower.jpg"
  },
  "herbs/wind-cold/mosla": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/mosla.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 179618,
      "sha256": "506a6a926b40d0d0f408af84794a1fc4c8e1fc61867a59065a594d4cb7fb882c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.755272,
        "encodedOutsideMeanAbsoluteChange": 3.044239
      },
      "watermarkConfidence": 0.9718010620036583,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/mosla.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 338626,
      "sha256": "9e59c30a3f3b3591d7f107da3dfd755eb9b73080128f589628e81ad7ba84ede1",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.890899,
        "encodedOutsideMeanAbsoluteChange": 2.211346
      },
      "watermarkConfidence": 0.9974666965037577,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "0986fd0f"
    },
    "sourceRelativePath": "herbs/wind-cold/mosla.jpg"
  },
  "herbs/wind-cold/notopterygium": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/notopterygium.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 160282,
      "sha256": "da9f93f2f891de4908038ace6662a35739304a4ccd65a7cf2f9cd9a8a4f1621a",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.692554,
        "encodedOutsideMeanAbsoluteChange": 3.045725
      },
      "watermarkConfidence": 0.9662075379637807,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/notopterygium.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 304580,
      "sha256": "9f48c3d1a80b355d922eb6f96a2630427b5b6a2e908faab7aca4f1c14d5da862",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.859144,
        "encodedOutsideMeanAbsoluteChange": 2.211446
      },
      "watermarkConfidence": 0.9982110612664052,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f70f3a18"
    },
    "sourceRelativePath": "herbs/wind-cold/notopterygium.jpg"
  },
  "herbs/wind-cold/perilla": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/perilla.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 142514,
      "sha256": "a292556f7b49b708d58cef38dbb7cc8927e2b277b6aa35a2d5e7418f240c263f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.997382,
        "meanAbsoluteChange": 39.815663,
        "encodedMeanAbsoluteChange": 39.043703,
        "encodedOutsideMeanAbsoluteChange": 2.789852
      },
      "watermarkConfidence": 0.9633965384279193,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/perilla.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 282154,
      "sha256": "113529ede5c6bc3833a896d7f86b7d18ce256d5afafdee75b9beddc27abbb8d4",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 39.852196,
        "encodedMeanAbsoluteChange": 39.255785,
        "encodedOutsideMeanAbsoluteChange": 2.068541
      },
      "watermarkConfidence": 0.9964782663117651,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "6dbec0b2"
    },
    "sourceRelativePath": "herbs/wind-cold/perilla.jpg"
  },
  "herbs/wind-cold/saposhnikovia": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/saposhnikovia.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 160568,
      "sha256": "bfdc32ded3578cb20119f9bf2035942f849d8355b773b3b0aaac77336be3accc",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.440263,
        "encodedMeanAbsoluteChange": 39.744292,
        "encodedOutsideMeanAbsoluteChange": 2.928667
      },
      "watermarkConfidence": 0.9509568212365872,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/saposhnikovia.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 309856,
      "sha256": "6509019868b7b615c6b57ef5dd8bb5720afc471ae265e053cf5ec354e522a9ac",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500402,
        "encodedMeanAbsoluteChange": 39.885932,
        "encodedOutsideMeanAbsoluteChange": 2.162956
      },
      "watermarkConfidence": 0.9937097534976994,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "fcbf2160"
    },
    "sourceRelativePath": "herbs/wind-cold/saposhnikovia.jpg"
  },
  "herbs/wind-cold/scallion-stalk": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/scallion-stalk.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 113722,
      "sha256": "44f72430a0344766679cc80ad5a8043ab913b881bc94e6ab86064ca9562c8fec",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.697717,
        "encodedOutsideMeanAbsoluteChange": 2.689273
      },
      "watermarkConfidence": 0.9094778447862292,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/scallion-stalk.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 235200,
      "sha256": "338f670bdc5c81dfd69b4afd50bca0700b115311b1c68b52d4a90aa3ed343628",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.781769,
        "encodedOutsideMeanAbsoluteChange": 2.02842
      },
      "watermarkConfidence": 0.9959133285243097,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d2c9916d"
    },
    "sourceRelativePath": "herbs/wind-cold/scallion-stalk.jpg"
  },
  "herbs/wind-cold/schizonepeta": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/schizonepeta.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 178566,
      "sha256": "5e018a839e8a732e7150065e24d1377af9e64aac9440bb61b502774ea8e8d0e0",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.674484,
        "encodedOutsideMeanAbsoluteChange": 3.038698
      },
      "watermarkConfidence": 0.9744125062306411,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/schizonepeta.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 339190,
      "sha256": "2e6fdd2447e4db1e285357aa25d8a9c76cf48bf2c8123d6546b6208b9f74ae84",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.855814,
        "encodedOutsideMeanAbsoluteChange": 2.217487
      },
      "watermarkConfidence": 0.9958222382713534,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e275b1f6"
    },
    "sourceRelativePath": "herbs/wind-cold/schizonepeta.jpg"
  },
  "herbs/wind-cold/tamarisk": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/tamarisk.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 181482,
      "sha256": "fe117d3b86ebcb8f358b771a78e8409e5582b327d437948040acd567bb2e61cd",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.997382,
        "meanAbsoluteChange": 41.261671,
        "encodedMeanAbsoluteChange": 40.527669,
        "encodedOutsideMeanAbsoluteChange": 3.068294
      },
      "watermarkConfidence": 0.9665782355751898,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/tamarisk.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 341250,
      "sha256": "9ea2b928fa415ea005216768e7d600b051b53eb40a195f07ad6a7eeedd81f9cc",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 41.835056,
        "encodedMeanAbsoluteChange": 41.326328,
        "encodedOutsideMeanAbsoluteChange": 2.215627
      },
      "watermarkConfidence": 0.9966312844961227,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ae0bbbaa"
    },
    "sourceRelativePath": "herbs/wind-cold/tamarisk.jpg"
  },
  "herbs/wind-cold/xanthium": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/herbs/wind-cold/xanthium.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 162176,
      "sha256": "fe80f295157ed462bd157767af6f4fd8137884ca87c298d19c7874ee7a244109",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.997273,
        "meanAbsoluteChange": 40.44179,
        "encodedMeanAbsoluteChange": 39.728476,
        "encodedOutsideMeanAbsoluteChange": 2.928343
      },
      "watermarkConfidence": 0.9602478331344831,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/xanthium.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 315416,
      "sha256": "f112b1c31363f0b40d35311959c14c8ed32b7ac2583f2a5f7b28d8c38d44d863",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 40.500373,
        "encodedMeanAbsoluteChange": 39.863623,
        "encodedOutsideMeanAbsoluteChange": 2.147437
      },
      "watermarkConfidence": 0.9984434147321042,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "8974eb93"
    },
    "sourceRelativePath": "herbs/wind-cold/xanthium.jpg"
  },
  "kidney-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/kidney-meridian/external-route.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 60880,
      "sha256": "95b11b9872e2c8194c710418377eb0a33f5614d9449cfb35c472bbbbbba820cd",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 733,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.359911,
        "encodedOutsideMeanAbsoluteChange": 0.863649
      },
      "watermarkConfidence": 0.9801279169548399,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 104736,
      "sha256": "eae432aef15f2489209b2a925113b70112ee870206c113f9adb152f7d80a68f6",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 40.994373,
        "encodedOutsideMeanAbsoluteChange": 0.571397
      },
      "watermarkConfidence": 0.9975914404223227,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5f301d31"
    },
    "sourceRelativePath": "kidney-meridian/external-route.jpg"
  },
  "kidney-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/kidney-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 104900,
      "sha256": "f714006f22f25c4eaf8bbbfee84af5b26710b17f18059179f6b48795077399c9",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.444081,
        "encodedOutsideMeanAbsoluteChange": 1.525354
      },
      "watermarkConfidence": 0.9832907968449187,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 179632,
      "sha256": "6ef9dd0aacd025fb30213a01ccdf3349dcff4820c2188c4d7132af5c10c337d2",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.142865,
        "encodedOutsideMeanAbsoluteChange": 1.029162
      },
      "watermarkConfidence": 0.9974316410694689,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "99f262b7"
    },
    "sourceRelativePath": "kidney-meridian/internal-route.jpg"
  },
  "kidney-meridian/local-anatomy-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/kidney-meridian/local-anatomy-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 80734,
      "sha256": "707379a05a56d16e7c14d2f1ad2b9011931a6406b539d2d91190a48d48af2820",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.796648,
        "encodedOutsideMeanAbsoluteChange": 1.265987
      },
      "watermarkConfidence": 0.9936078271654155,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/local-anatomy-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 142790,
      "sha256": "8cd32d5145c492e95d06df79202ee96c6292e96b54a2de11e043c888df7f1ac6",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.590927,
        "encodedOutsideMeanAbsoluteChange": 0.803768
      },
      "watermarkConfidence": 0.9980161550706625,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "a36a4b7e"
    },
    "sourceRelativePath": "kidney-meridian/local-anatomy-1.jpg"
  },
  "kidney-meridian/local-anatomy-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/kidney-meridian/local-anatomy-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 69696,
      "sha256": "bba95daba3ca4931cb09acefa323d3b8d839e844c31729144f36266a803573d7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.39696,
        "encodedOutsideMeanAbsoluteChange": 0.877468
      },
      "watermarkConfidence": 0.9823072766664194,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/local-anatomy-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 114172,
      "sha256": "0c37a7571b2f7d0b022af9f6ad04ac0a2d5be0d3f289f4e434c62e1c4f3b1b08",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.173385,
        "encodedOutsideMeanAbsoluteChange": 0.548977
      },
      "watermarkConfidence": 0.9970789014906661,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "14b10a29"
    },
    "sourceRelativePath": "kidney-meridian/local-anatomy-2.jpg"
  },
  "kidney-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/kidney-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 96692,
      "sha256": "cb774720d858882b8104720cc187ff992733d82ca36a89ad9cc8fb75a9472e9e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.516798,
        "encodedOutsideMeanAbsoluteChange": 1.227958
      },
      "watermarkConfidence": 0.9652054169375555,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 157472,
      "sha256": "7beecd1b77f6cbaa0b65ce06200bebca33fd53ff815bdf70cfd0c4a7b6394568",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.139133,
        "encodedOutsideMeanAbsoluteChange": 0.77069
      },
      "watermarkConfidence": 0.9969017094017094,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "53b1029f"
    },
    "sourceRelativePath": "kidney-meridian/local-points-3.jpg"
  },
  "kidney-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/kidney-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 279926,
      "sha256": "32cc774008c03b5bfc16ac9b41a5e570e93ce336c08e86b0ede643fd9455fb8f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 38,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 153,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.992948,
        "meanAbsoluteChange": 48.130604,
        "encodedMeanAbsoluteChange": 47.741715,
        "encodedOutsideMeanAbsoluteChange": 3.086769
      },
      "watermarkConfidence": 0.9988458267304421,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 453660,
      "sha256": "d522361779daa758d972936ac392559ffbe13c843d85e6375f22514ef6256f95",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 43,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 172,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.99324,
        "meanAbsoluteChange": 48.058275,
        "encodedMeanAbsoluteChange": 47.419912,
        "encodedOutsideMeanAbsoluteChange": 1.955084
      },
      "watermarkConfidence": 1,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "86432ef7"
    },
    "sourceRelativePath": "kidney-meridian/local-points-4.jpg"
  },
  "kidney-meridian/surface-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/kidney-meridian/surface-route.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 60686,
      "sha256": "07fe504d6f82de3e03c13abf12357515e9504854298423dd700ee5f5d6fbbe79",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 733,
        "y": 1201,
        "changedPixelRatio": 0.997382,
        "meanAbsoluteChange": 39.22804,
        "encodedMeanAbsoluteChange": 39.198626,
        "encodedOutsideMeanAbsoluteChange": 0.894405
      },
      "watermarkConfidence": 0.9880925860367392,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/surface-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 105130,
      "sha256": "e5cddeb2880df80b87ba670a0f6a214d54277f40ff974c972c03c56357240ba2",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.997244,
        "meanAbsoluteChange": 39.055039,
        "encodedMeanAbsoluteChange": 38.930491,
        "encodedOutsideMeanAbsoluteChange": 0.588305
      },
      "watermarkConfidence": 0.997860576923077,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5fdede81"
    },
    "sourceRelativePath": "kidney-meridian/surface-route.jpg"
  },
  "large-intestine-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/large-intestine-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 117728,
      "sha256": "f0c76147f0377a9a9613d7d2323656b326894acd32a5f81ba4a4666e74b6c12c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.335478,
        "encodedOutsideMeanAbsoluteChange": 1.4664
      },
      "watermarkConfidence": 0.9911416434355877,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 194472,
      "sha256": "c5bd9ba00f9e6ba215ee0a4c47995058f2d80e1e5c520c74d2950093857facdc",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.116566,
        "encodedOutsideMeanAbsoluteChange": 0.916838
      },
      "watermarkConfidence": 0.9969749492943083,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5e101a99"
    },
    "sourceRelativePath": "large-intestine-meridian/external-route.jpg"
  },
  "large-intestine-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/large-intestine-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 166888,
      "sha256": "05c35530a5ccd192ff151fa76f19bf07c6474e1ee883d58b6db7261d97ccb89c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "east-75",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 936,
        "changedPixelRatio": 0.947644,
        "meanAbsoluteChange": 41.986038,
        "encodedMeanAbsoluteChange": 42.012616,
        "encodedOutsideMeanAbsoluteChange": 2.081492
      },
      "watermarkConfidence": 0.9943110293658819,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 276292,
      "sha256": "4b9fd40c6c25d3d0117bba879859220888eecc983cc233187129c504ec2ece28",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "east-75",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1053,
        "changedPixelRatio": 0.952541,
        "meanAbsoluteChange": 41.862848,
        "encodedMeanAbsoluteChange": 41.625179,
        "encodedOutsideMeanAbsoluteChange": 1.313733
      },
      "watermarkConfidence": 0.9971416887623151,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "708730e5"
    },
    "sourceRelativePath": "large-intestine-meridian/internal-route.jpg"
  },
  "large-intestine-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/large-intestine-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 100156,
      "sha256": "17a1a1ff4334a354eb3598774a69fc908da244e66a5711f82fc4d7a9650a5f2e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.665612,
        "encodedMeanAbsoluteChange": 41.560028,
        "encodedOutsideMeanAbsoluteChange": 1.19406
      },
      "watermarkConfidence": 0.9848228239802884,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 162142,
      "sha256": "38e403a91825feaa59be20d860bc8f1f1a88fc813253f8f61f1b6a04d4f7c243",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.550675,
        "encodedMeanAbsoluteChange": 41.159345,
        "encodedOutsideMeanAbsoluteChange": 0.747264
      },
      "watermarkConfidence": 0.9956754472379472,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e9d9def9"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-1.jpg"
  },
  "large-intestine-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/large-intestine-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 81790,
      "sha256": "f7d840d7948587d9ce4044191071541910a0edcbfac98a6555c7c9bfaf47a2b4",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.945026,
        "meanAbsoluteChange": 41.637289,
        "encodedMeanAbsoluteChange": 41.239238,
        "encodedOutsideMeanAbsoluteChange": 0.989614
      },
      "watermarkConfidence": 0.9855941012953973,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 132708,
      "sha256": "f4f18abd4239d8ac29a7941d1c4ab1cf0b9ec2d8716220773faa8dbbd9329681",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.518231,
        "encodedMeanAbsoluteChange": 41.135171,
        "encodedOutsideMeanAbsoluteChange": 0.619831
      },
      "watermarkConfidence": 0.9987386269644335,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b4cb493e"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-2.jpg"
  },
  "large-intestine-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/large-intestine-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 189860,
      "sha256": "d0f6aeb3953f9f4c33808aa5f5d54b53565fafb3983826c5769d674ea9eb97fb",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.363256,
        "encodedOutsideMeanAbsoluteChange": 2.125762
      },
      "watermarkConfidence": 0.9943846082197481,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 308244,
      "sha256": "a2b916933338f6dc0b3d73dea5523091b32c83afdebc666ece9c26464f9882b5",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.139391,
        "encodedOutsideMeanAbsoluteChange": 1.303898
      },
      "watermarkConfidence": 0.9990229266754465,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "43f74b71"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-3.jpg"
  },
  "large-intestine-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/large-intestine-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 222304,
      "sha256": "a545f52158fb19cb5a34b430a31c27b5a3a041e939d70c7a25977fff4c4a5be2",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.364274,
        "encodedOutsideMeanAbsoluteChange": 2.413933
      },
      "watermarkConfidence": 0.9959851713795762,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 359552,
      "sha256": "7e80b607879ebf94af48cf69c7a34c552c33203e578152fa41790cb71417226f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.16615,
        "encodedOutsideMeanAbsoluteChange": 1.479379
      },
      "watermarkConfidence": 0.9983335062042696,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ff336140"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-4.jpg"
  },
  "large-intestine-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/large-intestine-meridian/local-points-5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 136594,
      "sha256": "2600674a91daf089dad85bd2ff8e4fe304fd8e04e654dbb121e1a564b7822fd8",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.944481,
        "meanAbsoluteChange": 41.556319,
        "encodedMeanAbsoluteChange": 41.434773,
        "encodedOutsideMeanAbsoluteChange": 1.589814
      },
      "watermarkConfidence": 0.9877991671499224,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 223548,
      "sha256": "e3fc24deafb349806a9b009c9f8337e30aa088af726da2c31be31fb87ba3df30",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.951077,
        "meanAbsoluteChange": 41.443353,
        "encodedMeanAbsoluteChange": 41.076227,
        "encodedOutsideMeanAbsoluteChange": 0.966406
      },
      "watermarkConfidence": 0.9977552815429429,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5abb1112"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-5.jpg"
  },
  "liver-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/liver-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 57986,
      "sha256": "18c9246d399ce7e0ad8d35c2f87e448e7981bc60db1208be1ebff6fea8983d3d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.944154,
        "meanAbsoluteChange": 41.601658,
        "encodedMeanAbsoluteChange": 41.34944,
        "encodedOutsideMeanAbsoluteChange": 0.852397
      },
      "watermarkConfidence": 0.9722463561176711,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 97676,
      "sha256": "d2e6196872680f150553d7ce4d71d48fe8ebb674fb46539d14889a1e2b2cf345",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.951335,
        "meanAbsoluteChange": 41.486678,
        "encodedMeanAbsoluteChange": 41.138013,
        "encodedOutsideMeanAbsoluteChange": 0.574436
      },
      "watermarkConfidence": 0.9931180661443819,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "8d0cc0d7"
    },
    "sourceRelativePath": "liver-meridian/external-route.jpg"
  },
  "liver-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/liver-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 64436,
      "sha256": "7a19129fad7a6f661190e82820ba0b95f6934e1b375002ac9a0929a682612b66",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.225313,
        "encodedOutsideMeanAbsoluteChange": 0.85474
      },
      "watermarkConfidence": 0.9698262545166696,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 107998,
      "sha256": "5286664533b3760d6a27b0caa96fe6f94fa57a578b65ce6db4dceb28409d55a9",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.159518,
        "encodedOutsideMeanAbsoluteChange": 0.547038
      },
      "watermarkConfidence": 0.9956065088757396,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1a38919a"
    },
    "sourceRelativePath": "liver-meridian/internal-route.jpg"
  },
  "liver-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/liver-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 102912,
      "sha256": "76808cea95bc4f8f0ec2894831397083644f23a35cab2ffff2a9848704e8b9e9",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.452734,
        "encodedOutsideMeanAbsoluteChange": 1.412713
      },
      "watermarkConfidence": 0.9881079624872342,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 173660,
      "sha256": "62d1bd7d2664c98024cabb3804d692b99d2a216851f9d983a5dd12acc660db44",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.150474,
        "encodedOutsideMeanAbsoluteChange": 0.914157
      },
      "watermarkConfidence": 0.9958162298638522,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "56939f9f"
    },
    "sourceRelativePath": "liver-meridian/local-points-1.jpg"
  },
  "liver-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/liver-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 91714,
      "sha256": "02eeac961d91b03d3c9312a5f2b81f623ae954da07bdcf2a2a61581d605fb397",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.257272,
        "encodedOutsideMeanAbsoluteChange": 1.033419
      },
      "watermarkConfidence": 0.9858060456417772,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 147318,
      "sha256": "51feac09983f8feee8cad9166a9f44833455f1c6d23100a11deaa534443d44fb",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.173098,
        "encodedOutsideMeanAbsoluteChange": 0.643661
      },
      "watermarkConfidence": 0.9979635370260369,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "6e4398b0"
    },
    "sourceRelativePath": "liver-meridian/local-points-2.jpg"
  },
  "liver-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/liver-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 123730,
      "sha256": "557ebcdfe16c163300ceee309d7a7d533b133468b98bc650972f0a3f0320c414",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.893761,
        "encodedMeanAbsoluteChange": 40.876854,
        "encodedOutsideMeanAbsoluteChange": 1.654671
      },
      "watermarkConfidence": 0.9809993932808889,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 210010,
      "sha256": "97afe41f8f54874e88aec392036de7eb22c2810a2f071335aad680f29d666094",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946856,
        "meanAbsoluteChange": 40.778582,
        "encodedMeanAbsoluteChange": 40.580907,
        "encodedOutsideMeanAbsoluteChange": 1.01956
      },
      "watermarkConfidence": 0.9976463719001976,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "56cd144d"
    },
    "sourceRelativePath": "liver-meridian/local-points-3.jpg"
  },
  "liver-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/liver-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 210170,
      "sha256": "31e53b100a983d2261bb30765cd55061b2057664414607cf0a35ed6ad21a299e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.774796,
        "encodedOutsideMeanAbsoluteChange": 2.386546
      },
      "watermarkConfidence": 0.9965981389415102,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 344840,
      "sha256": "02ef6b944210551759d358947e23e34dcb71f1d98bd3e68200acb96b4cb583f0",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.567672,
        "encodedOutsideMeanAbsoluteChange": 1.491957
      },
      "watermarkConfidence": 0.9991394280384218,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "344e4c59"
    },
    "sourceRelativePath": "liver-meridian/local-points-4.jpg"
  },
  "liver-meridian/surface-internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/liver-meridian/surface-internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 64670,
      "sha256": "2123b1309bb5f3788465a7c365c7ed3b7c399582d889c1c9e1004f4648b66c48",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.473531,
        "encodedOutsideMeanAbsoluteChange": 0.853268
      },
      "watermarkConfidence": 0.9858500053967789,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/surface-internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 108028,
      "sha256": "235679c4b253c360a61b8d7b13b384aa9732d15eeaf804aba6fc8a0cceb3f9ee",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.208929,
        "encodedOutsideMeanAbsoluteChange": 0.550319
      },
      "watermarkConfidence": 0.9960067873303168,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b1fe6974"
    },
    "sourceRelativePath": "liver-meridian/surface-internal-route.jpg"
  },
  "lung-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/lung-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 93244,
      "sha256": "a39358a85b64396326d75d3a2796b2b5f25dc3492a483a4ad20975af155b9346",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.482184,
        "encodedOutsideMeanAbsoluteChange": 1.069025
      },
      "watermarkConfidence": 0.979872960316935,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/lung-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 151890,
      "sha256": "75598b828a147505a2bde3fa9332648a8c4185ecba4a2b9c41b0e66b8ca00798",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.113953,
        "encodedOutsideMeanAbsoluteChange": 0.694659
      },
      "watermarkConfidence": 0.9967209793616442,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "93f6791c"
    },
    "sourceRelativePath": "lung-meridian/external-route.jpg"
  },
  "lung-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/lung-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 120942,
      "sha256": "0415f82e348f4c8b5b48d5944a543155903042bbbf3e6a7e11b158d242c5ae3e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.372019,
        "encodedOutsideMeanAbsoluteChange": 1.426449
      },
      "watermarkConfidence": 0.9875383787876033,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/lung-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 198682,
      "sha256": "2bf15f8fedb5059deee48cdb58a6ba5c5f7886406531b9e6092ce90a15dc2182",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.181826,
        "encodedOutsideMeanAbsoluteChange": 0.896655
      },
      "watermarkConfidence": 0.9967280092819012,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "32cc175a"
    },
    "sourceRelativePath": "lung-meridian/internal-route.jpg"
  },
  "lung-meridian/local-points-forearm": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/lung-meridian/local-points-forearm.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 84600,
      "sha256": "1c03b6608c733f073d77ef07cee0a3ddcf1b5d1c6473c3e79534a90ade874e9b",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.264689,
        "encodedOutsideMeanAbsoluteChange": 1.146427
      },
      "watermarkConfidence": 0.9907952788262153,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/lung-meridian/local-points-forearm.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 136260,
      "sha256": "8edbd6fceb73d9ffc643876a42e80e9617e32fbd14291d2d578479317c0d3ff1",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.555498,
        "encodedMeanAbsoluteChange": 41.07973,
        "encodedOutsideMeanAbsoluteChange": 0.738584
      },
      "watermarkConfidence": 0.9979823367771427,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5e8eb721"
    },
    "sourceRelativePath": "lung-meridian/local-points-forearm.jpg"
  },
  "lung-meridian/local-points-shoulder": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/lung-meridian/local-points-shoulder.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 144572,
      "sha256": "a478bb94b9df1f013c07ffd42e3586eab3979a7bfa731e1dd70b79c526a6df4d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.94339,
        "meanAbsoluteChange": 41.236475,
        "encodedMeanAbsoluteChange": 40.959897,
        "encodedOutsideMeanAbsoluteChange": 1.974617
      },
      "watermarkConfidence": 0.9892103782197198,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/lung-meridian/local-points-shoulder.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 239042,
      "sha256": "f1acbed9eeadcd64e02eeb5f2e08c51b07ff2dc43e8dc1b6961235cf6c5f2556",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.949096,
        "meanAbsoluteChange": 41.120557,
        "encodedMeanAbsoluteChange": 40.824433,
        "encodedOutsideMeanAbsoluteChange": 1.239901
      },
      "watermarkConfidence": 0.9969945445438757,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5704d8d2"
    },
    "sourceRelativePath": "lung-meridian/local-points-shoulder.jpg"
  },
  "nine-needles-atlas": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/nine-needles-atlas.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 153908,
      "sha256": "1f191dcd45ddabe0d76395010fd397c1f5dca2894528dad6b97d892be183a3eb",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 30,
        "position": "south-center",
        "scheme": "xqy-visible-v1",
        "width": 96,
        "x": 430,
        "y": 1219,
        "changedPixelRatio": 0.998611,
        "meanAbsoluteChange": 54.168981,
        "encodedMeanAbsoluteChange": 53.041551,
        "encodedOutsideMeanAbsoluteChange": 3.024529
      },
      "watermarkConfidence": 0.9459982758655607,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/nine-needles-atlas.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 300484,
      "sha256": "2be69ac4b4ea6d576078376117ab4d0f549a051e313796342d205f442e9b85ab",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 30,
        "position": "south-center",
        "scheme": "xqy-visible-v1",
        "width": 108,
        "x": 484,
        "y": 1376,
        "changedPixelRatio": 0.998765,
        "meanAbsoluteChange": 54.185185,
        "encodedMeanAbsoluteChange": 53.419753,
        "encodedOutsideMeanAbsoluteChange": 2.287588
      },
      "watermarkConfidence": 0.9970631218715406,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "3e70b7a4"
    },
    "sourceRelativePath": "nine-needles-atlas.jpg"
  },
  "pericardium-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/pericardium-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 86266,
      "sha256": "2260577400e99c87e1182963b74e3000ea9837a20f9dcceab5c23c4324b61f5e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.504508,
        "encodedOutsideMeanAbsoluteChange": 1.06029
      },
      "watermarkConfidence": 0.9762967734947732,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/pericardium-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 141044,
      "sha256": "7347f37c6a6b4da373a7f7454747579b73b34a68777e5e33a057064cf2903b41",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.155958,
        "encodedOutsideMeanAbsoluteChange": 0.691099
      },
      "watermarkConfidence": 0.9926820967043406,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d75d25f7"
    },
    "sourceRelativePath": "pericardium-meridian/external-route.jpg"
  },
  "pericardium-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/pericardium-meridian/internal-route.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 99672,
      "sha256": "3618c49db400d730af7ed16f9d38d47a89872e881301f5964ae01d5782303ba7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.66234,
        "encodedMeanAbsoluteChange": 41.432155,
        "encodedOutsideMeanAbsoluteChange": 1.305912
      },
      "watermarkConfidence": 0.9895950080848895,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/pericardium-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 166076,
      "sha256": "39e9a227765e16e92257fe511e36d8acec7e10e9fbe5fc90877828baa11d5955",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.95168,
        "meanAbsoluteChange": 41.548091,
        "encodedMeanAbsoluteChange": 41.150876,
        "encodedOutsideMeanAbsoluteChange": 0.828087
      },
      "watermarkConfidence": 0.9966799858373745,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b24438e0"
    },
    "sourceRelativePath": "pericardium-meridian/internal-route.jpg"
  },
  "pericardium-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/pericardium-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 190340,
      "sha256": "f4e16d2562bd8b35a3ec1b415b31ca62f8823249be64cb46ebe56b7330e32d73",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.988547,
        "meanAbsoluteChange": 40.556792,
        "encodedMeanAbsoluteChange": 40.476876,
        "encodedOutsideMeanAbsoluteChange": 2.458203
      },
      "watermarkConfidence": 0.9976439362428373,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/pericardium-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 317808,
      "sha256": "969a732d44bf95f8f5412f7ca98c1e4793974319f68ca9b3d87db3831e892155",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.990439,
        "meanAbsoluteChange": 40.465518,
        "encodedMeanAbsoluteChange": 40.276687,
        "encodedOutsideMeanAbsoluteChange": 1.556021
      },
      "watermarkConfidence": 0.9988672778326205,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "42ccbe8c"
    },
    "sourceRelativePath": "pericardium-meridian/local-points-1.jpg"
  },
  "pericardium-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/pericardium-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 103684,
      "sha256": "2011bf0870c829b411cfb4d8d9025864637d9bf06323e9a95da24a387355ba4a",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.662231,
        "encodedOutsideMeanAbsoluteChange": 1.354606
      },
      "watermarkConfidence": 0.9823828898740884,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/pericardium-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 172220,
      "sha256": "156d088cbc90b36c30aaf62f71d648678dc908a2f046dabc18380185ba76590c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.510709,
        "encodedOutsideMeanAbsoluteChange": 0.85297
      },
      "watermarkConfidence": 0.9978820771619685,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "3fadadcb"
    },
    "sourceRelativePath": "pericardium-meridian/local-points-2.jpg"
  },
  "ren-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/ren-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 83572,
      "sha256": "a2b21dd02179f016f0742710dcd3c0315a49d5687cbdb1ce76e22f4d6b997fdc",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.230148,
        "encodedOutsideMeanAbsoluteChange": 1.014619
      },
      "watermarkConfidence": 0.977576944108274,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 137630,
      "sha256": "7b360e65ce49418ac3b7198be9b1b9add82eb2fced410789bce5a2e2682858d7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.067356,
        "encodedOutsideMeanAbsoluteChange": 0.641688
      },
      "watermarkConfidence": 0.9962402101308752,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "45d96407"
    },
    "sourceRelativePath": "ren-meridian/external-route.jpg"
  },
  "ren-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/ren-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 85728,
      "sha256": "c99de3cc92b6e668c8ebd016a867c9c8f13539dfe32dbb642d6c31fb404d914b",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.113365,
        "encodedOutsideMeanAbsoluteChange": 1.03316
      },
      "watermarkConfidence": 0.972722129777694,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 141154,
      "sha256": "b70eb94ec8447f9c4a56defd2d680ae90208f3d1bbb4d428a7651df869f8911c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.144129,
        "encodedOutsideMeanAbsoluteChange": 0.649274
      },
      "watermarkConfidence": 0.9973886231578539,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "cf4a484e"
    },
    "sourceRelativePath": "ren-meridian/internal-route.jpg"
  },
  "ren-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/ren-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 68464,
      "sha256": "9c069eee4e33e06b26bb889ba148f46488fb272cca092a080ded453dd0d1a3e4",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.367328,
        "encodedOutsideMeanAbsoluteChange": 1.500607
      },
      "watermarkConfidence": 0.8891931009857035,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 124310,
      "sha256": "dcaf4a339bcc30d8ed359d29dc2661a21892bb351f2f794bb12a30529c0ab0c1",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.122394,
        "encodedOutsideMeanAbsoluteChange": 1.092644
      },
      "watermarkConfidence": 0.9939066363419424,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ffd5fec5"
    },
    "sourceRelativePath": "ren-meridian/local-points-1.jpg"
  },
  "ren-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/ren-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 273662,
      "sha256": "5112c76c1bd7e6d4044a26e7d85d4729ad71fed70eedf86147de2a904fd3a8cd",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.993128,
        "meanAbsoluteChange": 51.197571,
        "encodedMeanAbsoluteChange": 50.965605,
        "encodedOutsideMeanAbsoluteChange": 3.063936
      },
      "watermarkConfidence": 0.9989527629233511,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 445522,
      "sha256": "1dcec65153c14588933c61c734bc97824f3c343ba891004fbb8000e339934059",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.993454,
        "meanAbsoluteChange": 51.27439,
        "encodedMeanAbsoluteChange": 50.977663,
        "encodedOutsideMeanAbsoluteChange": 1.943437
      },
      "watermarkConfidence": 0.9998132935026138,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f176bc82"
    },
    "sourceRelativePath": "ren-meridian/local-points-2.jpg"
  },
  "ren-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/ren-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 141980,
      "sha256": "0fb5f7e10bf26b8160b1d99ccae16adbf2a0b402c5e4670d42dc9c312263f761",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.469132,
        "encodedOutsideMeanAbsoluteChange": 1.817332
      },
      "watermarkConfidence": 0.9920777732324425,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 236590,
      "sha256": "cc125344da23ab31825ac2aaf334cbd07b200516f6a0205ead690ff06586a9cd",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.143009,
        "encodedOutsideMeanAbsoluteChange": 1.126817
      },
      "watermarkConfidence": 0.9991448768622682,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "2e97068a"
    },
    "sourceRelativePath": "ren-meridian/local-points-3.jpg"
  },
  "sanjiao-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/sanjiao-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 179896,
      "sha256": "984c35dfd5b8c590ffb935baaa8339ba5686d95d8da96095f0f6522b1278fa8f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.891761,
        "encodedMeanAbsoluteChange": 40.636307,
        "encodedOutsideMeanAbsoluteChange": 2.11825
      },
      "watermarkConfidence": 0.997152455128096,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 298398,
      "sha256": "2e8a13d9815ef01ac542680aec2ccb73175ff11e78abb632ca92ededc1f1e3b8",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.499541,
        "encodedOutsideMeanAbsoluteChange": 1.283417
      },
      "watermarkConfidence": 0.9974457752854899,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "c8362519"
    },
    "sourceRelativePath": "sanjiao-meridian/external-route.jpg"
  },
  "sanjiao-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/sanjiao-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 187018,
      "sha256": "a8a52e96993769d35d0eb0d5c96114b7f9500991dc3aa0296cf309e8c3944943",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.891761,
        "encodedMeanAbsoluteChange": 40.798393,
        "encodedOutsideMeanAbsoluteChange": 2.153476
      },
      "watermarkConfidence": 0.9960414374026836,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 307406,
      "sha256": "1ba04570a782341142dda368db044950cfbe9793c7629b170d06040a00d1f961",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.480362,
        "encodedOutsideMeanAbsoluteChange": 1.317697
      },
      "watermarkConfidence": 0.9985829675651605,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "08b2343f"
    },
    "sourceRelativePath": "sanjiao-meridian/internal-route.jpg"
  },
  "sanjiao-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/sanjiao-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 84392,
      "sha256": "dfc888bd4691e23e98ccc3fe96a59fec2909c59945bd08dea2ee98792aa80b83",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.87969,
        "encodedOutsideMeanAbsoluteChange": 1.098997
      },
      "watermarkConfidence": 0.9764423807497395,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 140308,
      "sha256": "eea3d98e4844396b03bccff9d96d0ed24464667fc17fae360d251faa7533e227",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.513063,
        "encodedOutsideMeanAbsoluteChange": 0.717508
      },
      "watermarkConfidence": 0.99855360328715,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "74d328ed"
    },
    "sourceRelativePath": "sanjiao-meridian/local-points-1.jpg"
  },
  "sanjiao-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/sanjiao-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 198916,
      "sha256": "63e8770018b1411163e12f2610730270aa400824a3c4553751cfba0a2998e007",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.763853,
        "encodedOutsideMeanAbsoluteChange": 2.41073
      },
      "watermarkConfidence": 0.9978532299700356,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 329940,
      "sha256": "0fadd5b817ee65bcf671e2c0950b5eec6b9934341032b05d6d63f2919052658f",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.541344,
        "encodedOutsideMeanAbsoluteChange": 1.503511
      },
      "watermarkConfidence": 0.9988557371869392,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "25c83bfe"
    },
    "sourceRelativePath": "sanjiao-meridian/local-points-2.jpg"
  },
  "sanjiao-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/sanjiao-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 138540,
      "sha256": "87ebc7b81cb86720a91e58e680bd9396f7d486f7043a5c2ea2c216b017a7bce1",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.382344,
        "encodedOutsideMeanAbsoluteChange": 1.516139
      },
      "watermarkConfidence": 0.985997168652714,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 223408,
      "sha256": "b97ed7f03edbfa84ac4c22d2c05ad537a4d0c688f9e12d40cd00d2e16de0a608",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.158398,
        "encodedOutsideMeanAbsoluteChange": 0.942878
      },
      "watermarkConfidence": 0.9986340048840048,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "611962e4"
    },
    "sourceRelativePath": "sanjiao-meridian/local-points-3.jpg"
  },
  "small-intestine-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/small-intestine-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 136580,
      "sha256": "eb881cceeb2f0ba5d05b6e43b3a2953bfec3f348a7f0aaa042fe93e61ebdd873",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.949062,
        "meanAbsoluteChange": 42.304974,
        "encodedMeanAbsoluteChange": 42.077589,
        "encodedOutsideMeanAbsoluteChange": 1.776874
      },
      "watermarkConfidence": 0.9831263800989608,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 231350,
      "sha256": "4d76e8fcb318f3b15542aaa16fd8c5734537507ff00fbc3eebb6748434490f57",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.952541,
        "meanAbsoluteChange": 42.223026,
        "encodedMeanAbsoluteChange": 41.943325,
        "encodedOutsideMeanAbsoluteChange": 1.102503
      },
      "watermarkConfidence": 0.9989144783787641,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4f6a00c3"
    },
    "sourceRelativePath": "small-intestine-meridian/external-route.jpg"
  },
  "small-intestine-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/small-intestine-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 162112,
      "sha256": "0c2565038aeac89abdc3a63cd4c2ca0dd183c865224be0d70a1e789bf1f4bb6e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.948953,
        "meanAbsoluteChange": 42.47444,
        "encodedMeanAbsoluteChange": 42.432155,
        "encodedOutsideMeanAbsoluteChange": 2.002102
      },
      "watermarkConfidence": 0.9910573603747207,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 268402,
      "sha256": "af54891d9cbb8d588707232405d621fbb0f882432103cb6233319f23a7cf1e33",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.952369,
        "meanAbsoluteChange": 42.352598,
        "encodedMeanAbsoluteChange": 42.12851,
        "encodedOutsideMeanAbsoluteChange": 1.248524
      },
      "watermarkConfidence": 0.9986991035324906,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f79b3e32"
    },
    "sourceRelativePath": "small-intestine-meridian/internal-route.jpg"
  },
  "small-intestine-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/small-intestine-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 77432,
      "sha256": "4c4f2b7e4717e404d56f170c10db100ada83937390940e14842fbe6476ed8196",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.669539,
        "encodedMeanAbsoluteChange": 41.280868,
        "encodedOutsideMeanAbsoluteChange": 1.18731
      },
      "watermarkConfidence": 0.9880484124478859,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 133902,
      "sha256": "afb208584bcdb3bd1ef42c16e776602233c965db5de4a8fa2626c3bb4e98a259",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.554895,
        "encodedMeanAbsoluteChange": 41.156331,
        "encodedOutsideMeanAbsoluteChange": 0.75305
      },
      "watermarkConfidence": 0.9973510558069381,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "7cce6630"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-1.jpg"
  },
  "small-intestine-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/small-intestine-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 67596,
      "sha256": "c9049c0835c3ce9dd6cc2e533815e5c80763ae9804bfd0203f5d67113d54e768",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.944808,
        "meanAbsoluteChange": 41.574753,
        "encodedMeanAbsoluteChange": 41.309337,
        "encodedOutsideMeanAbsoluteChange": 1.061918
      },
      "watermarkConfidence": 0.978255819366123,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 116764,
      "sha256": "a2b19dfc91c93361bd787c9863b0a4c1ee6d71654ac57860d153938ae4c966ac",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.951249,
        "meanAbsoluteChange": 41.462791,
        "encodedMeanAbsoluteChange": 41.136807,
        "encodedOutsideMeanAbsoluteChange": 0.652781
      },
      "watermarkConfidence": 1,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "2bcc8c48"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-2.jpg"
  },
  "small-intestine-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/small-intestine-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 51674,
      "sha256": "345b10849ab125af64147523bf2d747ea11f24bd9a6e90a09fce3c7f26abc220",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.442845,
        "encodedOutsideMeanAbsoluteChange": 1.002382
      },
      "watermarkConfidence": 0.975227290882422,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 94258,
      "sha256": "e693ad5ba41350ba2ace431491887b2aae82eb74def3c0ce150167a0db3f44e5",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.155527,
        "encodedOutsideMeanAbsoluteChange": 0.69115
      },
      "watermarkConfidence": 0.9941399949796856,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4c7b6b1d"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-3.jpg"
  },
  "small-intestine-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/small-intestine-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 98652,
      "sha256": "cabd325bd12e966abe80f3f39ac297a76d1bb1d2a7d3fd0b0d560861a9a0abe9",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.361984,
        "encodedOutsideMeanAbsoluteChange": 1.147445
      },
      "watermarkConfidence": 0.9873265969152663,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 160156,
      "sha256": "ed40daa40eba8831d3dfbd18060bd8a57fcf992e32b5bd4860d09ae702c0427d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.118432,
        "encodedOutsideMeanAbsoluteChange": 0.707629
      },
      "watermarkConfidence": 0.9982251171767301,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "accb3aa3"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-4.jpg"
  },
  "small-intestine-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/small-intestine-meridian/local-points-5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 137658,
      "sha256": "0db2fb187ae1e2c61cd3ebfe945291ca68e7402c5c7e5a18d5acefd959e24d83",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.943826,
        "meanAbsoluteChange": 41.541303,
        "encodedMeanAbsoluteChange": 41.376709,
        "encodedOutsideMeanAbsoluteChange": 1.733265
      },
      "watermarkConfidence": 0.9894711389230783,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 225426,
      "sha256": "3a2ce2a8fe3cb5effe41e32b72ddad9a347c3e432cc3a963dbeacf0b9fbca1db",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.950646,
        "meanAbsoluteChange": 41.429285,
        "encodedMeanAbsoluteChange": 41.085673,
        "encodedOutsideMeanAbsoluteChange": 1.076706
      },
      "watermarkConfidence": 0.9975722501544263,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "65c8d120"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-5.jpg"
  },
  "small-intestine-meridian/local-points-7": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/small-intestine-meridian/local-points-7.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 125422,
      "sha256": "4d700de58ccd0616b68b764cdeda54c61af49ac16c24ca712f9bdc73e0913c0c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 733,
        "y": 31,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.795339,
        "encodedOutsideMeanAbsoluteChange": 1.526555
      },
      "watermarkConfidence": 0.988103169159585,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 203236,
      "sha256": "ad467b877e8a5b42528aaa1f5895c36304d16e9a926003b6a8b8cb4ab68a439d",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.610365,
        "encodedOutsideMeanAbsoluteChange": 0.953495
      },
      "watermarkConfidence": 0.998848481240122,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "7904393e"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-7.jpg"
  },
  "spleen-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/spleen-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 60916,
      "sha256": "61797b26527c54f21552e50686e9842a3fe54c31e0cf96c9162e0b1f0ff55023",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.996401,
        "meanAbsoluteChange": 40.323371,
        "encodedMeanAbsoluteChange": 40.06919,
        "encodedOutsideMeanAbsoluteChange": 1.159734
      },
      "watermarkConfidence": 0.961034802227063,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 100572,
      "sha256": "979c1bdeded39a846497b0b016ebd8750bf2ec04900c92cc7846795aafbd3aa9",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.995693,
        "meanAbsoluteChange": 40.202354,
        "encodedMeanAbsoluteChange": 39.940511,
        "encodedOutsideMeanAbsoluteChange": 0.8726
      },
      "watermarkConfidence": 0.9937893508723002,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ad64e8d9"
    },
    "sourceRelativePath": "spleen-meridian/external-route.jpg"
  },
  "spleen-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/spleen-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 64704,
      "sha256": "4564eee5e036e4349ea6c8ecd0c5d7cdce22398b7e1a72e2677315f148303837",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.94459,
        "meanAbsoluteChange": 41.654668,
        "encodedMeanAbsoluteChange": 41.233202,
        "encodedOutsideMeanAbsoluteChange": 1.042014
      },
      "watermarkConfidence": 0.982675731585604,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 107420,
      "sha256": "d6423ec7eb2c83cb74cdc52bf3e556297d94e353b75597193bd5cda46e8a25dc",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.540396,
        "encodedMeanAbsoluteChange": 41.118834,
        "encodedOutsideMeanAbsoluteChange": 0.752457
      },
      "watermarkConfidence": 0.9958837636722252,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1b121b1b"
    },
    "sourceRelativePath": "spleen-meridian/internal-route.jpg"
  },
  "spleen-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/spleen-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 99180,
      "sha256": "aaa18e6145428327ba9067228a693c10f1b3e7122820d123a95dafb367d078e5",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.289885,
        "encodedOutsideMeanAbsoluteChange": 1.091739
      },
      "watermarkConfidence": 0.9784790655539435,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 158554,
      "sha256": "b3474d04e0dd230bb26c65c922ff0345591ca4fd8c2c0dee2c8cc35c84a18966",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.155326,
        "encodedOutsideMeanAbsoluteChange": 0.690321
      },
      "watermarkConfidence": 0.9972196389137178,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "98e739de"
    },
    "sourceRelativePath": "spleen-meridian/local-points-1.jpg"
  },
  "spleen-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/spleen-meridian/local-points-2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 115900,
      "sha256": "aaf0f746f6d393faece39238d046f665521e5f2f46d30c45b0da877772a9dd96",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.94219,
        "meanAbsoluteChange": 40.969386,
        "encodedMeanAbsoluteChange": 40.666121,
        "encodedOutsideMeanAbsoluteChange": 1.483678
      },
      "watermarkConfidence": 0.9901334302426285,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 190404,
      "sha256": "b4a3250cbc91c4a55880ee852ecf9176ec48284a5bda7defce39cd1166378ad2",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.94789,
        "meanAbsoluteChange": 40.853144,
        "encodedMeanAbsoluteChange": 40.564025,
        "encodedOutsideMeanAbsoluteChange": 0.916406
      },
      "watermarkConfidence": 0.9972315871379459,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e21a855d"
    },
    "sourceRelativePath": "spleen-meridian/local-points-2.jpg"
  },
  "spleen-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/spleen-meridian/local-points-3.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 162384,
      "sha256": "238cd8db03b0b641616bc531b5283f563d71eb98f72e8765230128e3d49bcb30",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 733,
        "y": 31,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.248218,
        "encodedOutsideMeanAbsoluteChange": 1.899219
      },
      "watermarkConfidence": 0.9879653513718198,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/local-points-3.webp",
      "width": 1074,
      "height": 1440,
      "byteSize": 263234,
      "sha256": "f55d978a0055946a8180ba0903b95d695f418c44b596a50cac50faa064af5f85",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 825,
        "y": 34,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.181568,
        "encodedOutsideMeanAbsoluteChange": 1.223397
      },
      "watermarkConfidence": 0.9977473047785548,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "142f4e08"
    },
    "sourceRelativePath": "spleen-meridian/local-points-3.jpg"
  },
  "spleen-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/spleen-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 100762,
      "sha256": "dd63994a4f5aa4c3207aeb5404e0602f1291157bd9457238e6696a39f0ec6eef",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.280359,
        "encodedOutsideMeanAbsoluteChange": 1.33071
      },
      "watermarkConfidence": 0.9897248842157931,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 169286,
      "sha256": "ce6a0fc6fc71d7506bbd03b13b00998db7781cf7c1e3a729fe2e7387fccb04b5",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.141286,
        "encodedOutsideMeanAbsoluteChange": 0.832545
      },
      "watermarkConfidence": 0.9984775756834579,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5016837f"
    },
    "sourceRelativePath": "spleen-meridian/local-points-4.jpg"
  },
  "stomach-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/external-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 92576,
      "sha256": "ae9ce3b9ed32a5553b59a38ee6b5a492ce1cc1ab04503b078a0537e2a5560fc0",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 31,
        "changedPixelRatio": 0.944699,
        "meanAbsoluteChange": 41.625836,
        "encodedMeanAbsoluteChange": 41.510908,
        "encodedOutsideMeanAbsoluteChange": 1.107672
      },
      "watermarkConfidence": 0.9834037893872144,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 150324,
      "sha256": "e6b04fbe653e5047619fae8c6ee75cb0cffff7bd81c0cc6fdef05668b6b83846",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 34,
        "changedPixelRatio": 0.951593,
        "meanAbsoluteChange": 41.511829,
        "encodedMeanAbsoluteChange": 41.14298,
        "encodedOutsideMeanAbsoluteChange": 0.703164
      },
      "watermarkConfidence": 0.9945340298652159,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "41621dfa"
    },
    "sourceRelativePath": "stomach-meridian/external-route.jpg"
  },
  "stomach-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/internal-route.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 103670,
      "sha256": "8087b9f6e3530ce5e1bf491876cf5ed794a4698755667725db692c4f4653651c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 1201,
        "changedPixelRatio": 0.94219,
        "meanAbsoluteChange": 41.130381,
        "encodedMeanAbsoluteChange": 40.772542,
        "encodedOutsideMeanAbsoluteChange": 1.244917
      },
      "watermarkConfidence": 0.9804663700436209,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 169186,
      "sha256": "7e511d01564c12559cf22e0895c07f9297bd52e526177fe607ad47fedd62e40c",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 1352,
        "changedPixelRatio": 0.948234,
        "meanAbsoluteChange": 41.024404,
        "encodedMeanAbsoluteChange": 40.694172,
        "encodedOutsideMeanAbsoluteChange": 0.774159
      },
      "watermarkConfidence": 0.9952783493561623,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "2b8ec1de"
    },
    "sourceRelativePath": "stomach-meridian/internal-route.jpg"
  },
  "stomach-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/local-points-1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 143416,
      "sha256": "12cb3e62f4f3a6ee1ad8890ceae7a99d7a2a7fa509a809281999cccefaef42c3",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 31,
        "y": 31,
        "changedPixelRatio": 0.944481,
        "meanAbsoluteChange": 41.561773,
        "encodedMeanAbsoluteChange": 41.335406,
        "encodedOutsideMeanAbsoluteChange": 1.632013
      },
      "watermarkConfidence": 0.9897526865890856,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 231986,
      "sha256": "3ca3bee62e2a4a0598b1c90aea3be5a1ecaded7b548c6d37ad920c8876adae80",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "northwest",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 34,
        "y": 34,
        "changedPixelRatio": 0.950991,
        "meanAbsoluteChange": 41.444358,
        "encodedMeanAbsoluteChange": 41.059661,
        "encodedOutsideMeanAbsoluteChange": 1.002373
      },
      "watermarkConfidence": 0.9974527544366502,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "8f67fadf"
    },
    "sourceRelativePath": "stomach-meridian/local-points-1.jpg"
  },
  "stomach-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/local-points-2.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 140886,
      "sha256": "5e7bad032a9e4eb4cf597ef4e7d453c3c877ddcd079a2c85d31ece60259e8ae7",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 733,
        "y": 1201,
        "changedPixelRatio": 0.940881,
        "meanAbsoluteChange": 40.892307,
        "encodedMeanAbsoluteChange": 40.9363,
        "encodedOutsideMeanAbsoluteChange": 1.564815
      },
      "watermarkConfidence": 0.9863307598557041,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 227986,
      "sha256": "4d64b76fc413a3c41dcb74529736dd04cae90026afb3e087822ec39c83d8a8ff",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.946598,
        "meanAbsoluteChange": 40.77439,
        "encodedMeanAbsoluteChange": 40.486937,
        "encodedOutsideMeanAbsoluteChange": 0.96307
      },
      "watermarkConfidence": 0.9985762389608545,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "9c38e751"
    },
    "sourceRelativePath": "stomach-meridian/local-points-2.jpg"
  },
  "stomach-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/local-points-3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 102254,
      "sha256": "4e411eb7fc0352f6831e01b37c120a12a094f8b29983d9d9a7a8a7af7fbb1fb6",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.279378,
        "encodedOutsideMeanAbsoluteChange": 1.155339
      },
      "watermarkConfidence": 0.9838714448641572,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 164842,
      "sha256": "69c1d83f2a3e1c39aa6d14058e31b9f38cce14678eb7238af2ae2958db1aa506",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.140942,
        "encodedOutsideMeanAbsoluteChange": 0.714084
      },
      "watermarkConfidence": 0.9985435322041213,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b4bd7866"
    },
    "sourceRelativePath": "stomach-meridian/local-points-3.jpg"
  },
  "stomach-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/local-points-4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 146740,
      "sha256": "3504c0df2c2c183b41d3b434b83fb1c28307986ee7a56edc63e9147c6a377fe1",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.63838,
        "encodedMeanAbsoluteChange": 41.293521,
        "encodedOutsideMeanAbsoluteChange": 1.739688
      },
      "watermarkConfidence": 0.9870032236148786,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 239292,
      "sha256": "e6c7d3237e9305e1d21bd0d75e01d21d7c8c4359840a90925985637bb0086a8e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951249,
        "meanAbsoluteChange": 41.526414,
        "encodedMeanAbsoluteChange": 41.087138,
        "encodedOutsideMeanAbsoluteChange": 1.086803
      },
      "watermarkConfidence": 0.9974961788748211,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "9e9a4c5d"
    },
    "sourceRelativePath": "stomach-meridian/local-points-4.jpg"
  },
  "stomach-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/local-points-5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 132648,
      "sha256": "886812ab070dbc2458de39d3412b9472bfd96ea17141bd0e03cf0982041bf0ca",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.942081,
        "meanAbsoluteChange": 40.99371,
        "encodedMeanAbsoluteChange": 40.688809,
        "encodedOutsideMeanAbsoluteChange": 1.588127
      },
      "watermarkConfidence": 0.982638668538616,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 217318,
      "sha256": "b84d2ce680fa77a880c425691465451b293be965267ed20e1488cbfd9661144e",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.94789,
        "meanAbsoluteChange": 40.882458,
        "encodedMeanAbsoluteChange": 40.663221,
        "encodedOutsideMeanAbsoluteChange": 0.979448
      },
      "watermarkConfidence": 0.9985540923040924,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "43e4717f"
    },
    "sourceRelativePath": "stomach-meridian/local-points-5.jpg"
  },
  "stomach-meridian/local-points-6": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/local-points-6.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 123712,
      "sha256": "d8c2443ef0b73c99b49cedb780ae1a036b0c8b94e96e65265aab77a673318749",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "east-75",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 936,
        "changedPixelRatio": 0.941318,
        "meanAbsoluteChange": 41.051338,
        "encodedMeanAbsoluteChange": 41.089551,
        "encodedOutsideMeanAbsoluteChange": 1.548216
      },
      "watermarkConfidence": 0.9895244090607569,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 205838,
      "sha256": "99178e1893845ba4c94a668be64238b2b5ca4bb534950866f8a9ce91e3d040b1",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "east-75",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1053,
        "changedPixelRatio": 0.947976,
        "meanAbsoluteChange": 40.940597,
        "encodedMeanAbsoluteChange": 40.745679,
        "encodedOutsideMeanAbsoluteChange": 0.93023
      },
      "watermarkConfidence": 0.9973487567591341,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "0f8f7a5b"
    },
    "sourceRelativePath": "stomach-meridian/local-points-6.jpg"
  },
  "stomach-meridian/local-points-7": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/stomach-meridian/local-points-7.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 136968,
      "sha256": "b79913b39b95d69fffc529fe132c08a161128e16ee09d309fd62904563275226",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 48,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 191,
        "x": 734,
        "y": 1201,
        "changedPixelRatio": 0.945135,
        "meanAbsoluteChange": 41.670921,
        "encodedMeanAbsoluteChange": 41.38918,
        "encodedOutsideMeanAbsoluteChange": 1.454327
      },
      "watermarkConfidence": 0.9834553084328392,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 219806,
      "sha256": "b31c45a1a98418831c2bc86751eb9c97be9399cdc8ccab3696fc72598cec3c55",
      "visibleWatermark": {
        "assetSha256": "603811ff7206865dade6bdb70b6c8e0eede93b613bf0c00bc383a7a420a32ba8",
        "brand": "小钟岐医",
        "height": 54,
        "position": "southeast",
        "scheme": "xqy-visible-v1",
        "width": 215,
        "x": 826,
        "y": 1352,
        "changedPixelRatio": 0.951766,
        "meanAbsoluteChange": 41.556388,
        "encodedMeanAbsoluteChange": 41.153316,
        "encodedOutsideMeanAbsoluteChange": 0.897256
      },
      "watermarkConfidence": 0.9966172923315781,
      "format": "webp"
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5793aad9"
    },
    "sourceRelativePath": "stomach-meridian/local-points-7.jpg"
  }
} as const satisfies Readonly<Record<string, AtlasGeneratedImagePair>>;
