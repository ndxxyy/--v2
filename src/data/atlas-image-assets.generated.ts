// 此文件由 scripts/atlas/generate-images.mjs 生成，请勿手工编辑。

export interface AtlasGeneratedProvidedMeshWatermark {
  readonly applied: true;
  readonly brand: "小钟岐医";
  readonly color: "#ffffff";
  readonly opacity: 0.5;
  readonly pattern: "tiled";
  readonly provenance: "user-provided-master";
  readonly scheme: "xqy-visible-mesh-v2";
}

export interface AtlasGeneratedPreservedWatermark {
  readonly applied: false;
  readonly brand: "小钟岐医";
  readonly reason: "source-identifier-preserved";
  readonly scheme: "source-visible-preserved-v1";
  readonly sourceIdentifier: "existing-mesh" | "existing-seal";
}

export type AtlasGeneratedVisibleWatermark =
  | AtlasGeneratedProvidedMeshWatermark
  | AtlasGeneratedPreservedWatermark;

export interface AtlasGeneratedPublicWatermark {
  readonly brand: "小钟岐医";
  readonly domain: "xiaozhongqiyi.com";
  readonly opacity: 0.12;
  readonly position: "bottom-right";
  readonly scheme: "xqy-public-corner-v1";
}

export interface AtlasGeneratedImageAsset {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly byteSize: number;
  readonly format: "webp";
  readonly sha256: string;
  readonly visibleWatermark: AtlasGeneratedVisibleWatermark;
  readonly publicWatermark: AtlasGeneratedPublicWatermark;
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
  readonly sourceSha256: string;
}

export const atlasImageEncodingContractFingerprint = "3698bb3b97b90b6504538092f4af31cfd053f32ce65b044b39ddd6ceb653d6f6" as const;

export const atlasImageAssetManifestVersion = 2 as const;

export const atlasImageAssets = {
  "bladder-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/003a27ddf160e1d9ea20778c.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 89606,
      "format": "webp",
      "sha256": "b0869713e610a98a349cd7a50dd7a3d53661bea6f3da98a1a745e8b0a9c69d82",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9860504533902241
    },
    "preview": {
      "src": "/images/atlas/previews/c0c49fc26a4a270fbb58e19f.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 149610,
      "format": "webp",
      "sha256": "64e524c5ee47a4d4c8d01d19e6ead11aadca281c4afbf38274841cef676c1e08",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982839770523593
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "7c94469d"
    },
    "sourceRelativePath": "bladder-meridian/external-route.jpg",
    "sourceSha256": "34ca3ecc233e665fa53e89a39929b94c672cf70f6780219effa753a3b54c38e0"
  },
  "bladder-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/c734cb4461f92dafa289adc0.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 115430,
      "format": "webp",
      "sha256": "1d33c73e392d9edd1bd003bf6247910a01c4a711fe5ddc3f829afcd0c1ec76ab",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9857070647389077
    },
    "preview": {
      "src": "/images/atlas/previews/08f76333a090b3fd60eb786d.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 193376,
      "format": "webp",
      "sha256": "b3ebee0458596d55b6bafc229f50f12b99b8a57335a50c207552e1e903b804bf",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9963514338514338
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "08b68f6a"
    },
    "sourceRelativePath": "bladder-meridian/internal-route.jpg",
    "sourceSha256": "ad5c5dabafa31cced32b3aada45a080c38533ecadbbbe206a6ad4af17044070a"
  },
  "bladder-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/1b71d25cbf631e2ead8c4957.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 103894,
      "format": "webp",
      "sha256": "008c0f9db3a632328c315e03a7665e14fb3f60a0810880070bb0dffbdb17126b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9881219605063587
    },
    "preview": {
      "src": "/images/atlas/previews/03672fcec88b40d11809b5cf.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 169990,
      "format": "webp",
      "sha256": "8f1ff48cc0c3e3b642548309d1113641131f1b3178270689d1167edb4302fbc1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9975686746706424
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "09b5510e"
    },
    "sourceRelativePath": "bladder-meridian/local-points-1.jpg",
    "sourceSha256": "0fe1ef0b2181f5039be8f91433cf3e459ac8bd336154c7ed0ea05a311fc32490"
  },
  "bladder-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/9187e5ef9ca90ae462502b1d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 189458,
      "format": "webp",
      "sha256": "707e27fc91f1c22054d7584377eed635d9de152f2a3ef1bc7f73e319bbfe4ccc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9980530860764851
    },
    "preview": {
      "src": "/images/atlas/previews/14766ffbf012b418984edfbd.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 307736,
      "format": "webp",
      "sha256": "d7dbfec3dba87550df776736545b4ead2004774b1c7b4239e4fb6a054488c2e4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9993161094224925
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "93413d20"
    },
    "sourceRelativePath": "bladder-meridian/local-points-2.jpg",
    "sourceSha256": "ebb4c0efca27d705210bb5d0ddd4a3c09d3d6f79fbe92b98b9e869ad6807ce16"
  },
  "bladder-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/96d91c83c5e8c2a853918cdc.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 193326,
      "format": "webp",
      "sha256": "8de630902a50deb719426fe1ec4ca98d2442da2928fe98c9a1364c4e5a7752a4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9984896012245569
    },
    "preview": {
      "src": "/images/atlas/previews/57f354a94d69a8b349bdb56f.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 322174,
      "format": "webp",
      "sha256": "22f64a62072361fadd44ffbe538f09b9cc29d6ed146b191a9fbb34be8224606d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9996503496503497
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "eb1342e0"
    },
    "sourceRelativePath": "bladder-meridian/local-points-3.jpg",
    "sourceSha256": "096d85f5d06d3f3cdc1da470e623d1220349ffccb997463423f4184120aa3aab"
  },
  "bladder-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/c0c66353a67f4270886d0949.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 259978,
      "format": "webp",
      "sha256": "48a860bfe67fe0c1765263f9906dc9a7501a49242d423a95743dadc7d8dc2b6c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9968126389769737
    },
    "preview": {
      "src": "/images/atlas/previews/7de09a71b06fdb8638c91bbe.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 432428,
      "format": "webp",
      "sha256": "c39ae344e49046134c0398f97222e625e85ff8b236007b3a6865ce76a952f000",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9989106164481769
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f2ff717e"
    },
    "sourceRelativePath": "bladder-meridian/local-points-4.jpg",
    "sourceSha256": "821c727445c498f5949661c616bcdee85e5d554aef8bd4406d8909d0018968cc"
  },
  "bladder-meridian/local-points-4-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/bd97c6e902f9a489469e04ad.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 156618,
      "format": "webp",
      "sha256": "b4632b29dc16c4794075af9dda786c5e0e3804775adfd45ad9b2ec8cff2f9dbe",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9960690966267782
    },
    "preview": {
      "src": "/images/atlas/previews/6c65240bcfa96457f2bf624d.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 265590,
      "format": "webp",
      "sha256": "4a8fdf4857724ea067f64efa987412254285693c2c1dccf339ad169bc3013ba8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9990537240537241
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "48035857"
    },
    "sourceRelativePath": "bladder-meridian/local-points-4-1.jpg",
    "sourceSha256": "2d7fb9f5d8ed43974b051cc30784bc98b37e41d9d101bf6d9fa28020b4f0c490"
  },
  "bladder-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/48984f21e38c5444338d6dbd.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 116620,
      "format": "webp",
      "sha256": "705fd095f5b59fb46e31c81ae6cfbdc2281cf7bf81121af430862f07ab03a24c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9828540542644273
    },
    "preview": {
      "src": "/images/atlas/previews/b9e43a993431553fcffd67af.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 196420,
      "format": "webp",
      "sha256": "7f4deb9fc46403638681f0160e0972989994d81a09f3b1be9132980050a3fd85",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982134479217988
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "79f96920"
    },
    "sourceRelativePath": "bladder-meridian/local-points-5.jpg",
    "sourceSha256": "d44303e9e16c3ff735109ec8e16846c2d5383efe7d318b5971fe3dd182eb6946"
  },
  "bladder-meridian/local-points-6": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/c37f9182442c9be8bd04e964.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 97416,
      "format": "webp",
      "sha256": "fa310378e00072f85357cc7756912706d8447cda642e9bb68fe954c3d6701a9e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9843669661601963
    },
    "preview": {
      "src": "/images/atlas/previews/d7140ba9bc56b064fd3e43cb.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 163732,
      "format": "webp",
      "sha256": "a621ccfcffcdd1c14c23e351d403903465da6637e5463eb1c491392d8d9941b3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.998187611660817
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "fc318cd6"
    },
    "sourceRelativePath": "bladder-meridian/local-points-6.jpg",
    "sourceSha256": "cb6e9632d4f0424aa972dd61f8bbd05ebdd5d1aea50f86df896cbf44f1c32208"
  },
  "bladder-meridian/local-points-7": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/c741f9b91c18f9cecf4b081e.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 79124,
      "format": "webp",
      "sha256": "484355b0c53a750a1be1a0a7745f8505f18b11935777db2e86b9933b459ecadd",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9639272937003229
    },
    "preview": {
      "src": "/images/atlas/previews/65978e5ce26a51772c125cd0.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 132694,
      "format": "webp",
      "sha256": "0a43dd921134c60c86df86e791ca55d3804e814119c549db167913a0d2f357a2",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9952406315090138
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "6134f50f"
    },
    "sourceRelativePath": "bladder-meridian/local-points-7.jpg",
    "sourceSha256": "5c80f07a7e063c90c971eb7d2c5fa20925c3ff694f0672f93ce63f0b5f18cd6c"
  },
  "du-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4657506555b2ddf9adbbede9.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 169318,
      "format": "webp",
      "sha256": "d0f87feb46241424c7eb47462ef6e9abc6247b0eeeac46efc82b74ce76337554",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9933828072099433
    },
    "preview": {
      "src": "/images/atlas/previews/ddbbfdd647cdb7fb2676d310.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 285972,
      "format": "webp",
      "sha256": "829f3467a806d4dd1bd5e2a5a022096e901e63ad29f64f5b2efad8ffc3c53244",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.99834518358274
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "782387ca"
    },
    "sourceRelativePath": "du-meridian/external-route.jpg",
    "sourceSha256": "51b8a9e37658cc1d6c0d2174eba5b20b27e080d9164ecf8ef44d5840e3061edf"
  },
  "du-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/e588c8d26673b83938a98a03.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 174774,
      "format": "webp",
      "sha256": "1648a8432d1bbc20a312a6fae60503e6cc7eb9adad81e63e5da712d8752cd8e0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9905897966353062
    },
    "preview": {
      "src": "/images/atlas/previews/46bc7c7c4b18e78e9aafcd68.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 298692,
      "format": "webp",
      "sha256": "4f2a6cefb1c2c044860ff40aa708539d3c7b669fe9076feab631f1507a86bf31",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982214829105673
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "620ca73d"
    },
    "sourceRelativePath": "du-meridian/internal-route.jpg",
    "sourceSha256": "ab39f37e063e75e7a1b6e16e56bc62fff311ea0942f1a46458fac607221ee2b2"
  },
  "du-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/00e61c30af1473cb26c42788.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 253730,
      "format": "webp",
      "sha256": "79b4f6cbd6a918b20f7719715ebc69ad787cb746f7e42df039976ce99b76a619",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9953810141728509
    },
    "preview": {
      "src": "/images/atlas/previews/5f3b34ec001eb6d8e526375c.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 425974,
      "format": "webp",
      "sha256": "474bc7f778e3f4f2fdfe9c5f532d47b4926a08df9a15b4ef44f556e931c4bb5d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9993263156417227
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1d2e8dee"
    },
    "sourceRelativePath": "du-meridian/local-points-1.jpg",
    "sourceSha256": "ed5d0d1fde376851cc80d51dfba813875019db054d5f1f925a3c80b5d732340e"
  },
  "du-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/624f7c6cc5a2304d16360f16.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 190658,
      "format": "webp",
      "sha256": "e3ca8c695e5886bf5cb3b4bb5b24eaab4e4535592cd39bf92b91acb5e99387ef",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9968060187812705
    },
    "preview": {
      "src": "/images/atlas/previews/182d3fbcd3905deaf176283a.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 319234,
      "format": "webp",
      "sha256": "d488cdf4ea2439471f5669e50a8e15813bfc7d316b03eabcfe0635b75096155c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9994458795764766
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b5d76fd0"
    },
    "sourceRelativePath": "du-meridian/local-points-2.jpg",
    "sourceSha256": "593c9c18aa1653c5ece0ee0c669ca1d9e39503814c90fe9b7dd5214ffda73991"
  },
  "du-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/54b1b44ed131d8c7a3929234.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 187336,
      "format": "webp",
      "sha256": "e3a8a8619ee9cba7b42b81bcf154f389f5d0fbec752e1690d84c4a7b47a0fc4e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9977864219212795
    },
    "preview": {
      "src": "/images/atlas/previews/ee3446c84d7f2ffa679f3c96.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 305974,
      "format": "webp",
      "sha256": "52d1c894281f5231dcb19ca7c0cc7d2ea3f70dcc99cdb812cd9c18fd4d460f87",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9990532751562162
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "45d64e43"
    },
    "sourceRelativePath": "du-meridian/local-points-3.jpg",
    "sourceSha256": "b2c130f3478df36b87b4ee3d621101905c96a443711cc97d2a4fc0653e0b88ec"
  },
  "du-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/589c791e9c40b162e0aba0c9.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 107500,
      "format": "webp",
      "sha256": "290e4924ffecb83e4009185df1716d427713dd23652eb261ada18c101922b512",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9894306660322403
    },
    "preview": {
      "src": "/images/atlas/previews/e4226b8197f8f7957bea71ac.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 176168,
      "format": "webp",
      "sha256": "bba71b865a48d3715c4cd3eda39dd1b72c081d694bbcd304033eb165b979ae0d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9978566266250088
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "92aae56c"
    },
    "sourceRelativePath": "du-meridian/local-points-4.jpg",
    "sourceSha256": "b5b7bc5d3b3f191d128dc11f53ebc23f6b61d065fb7d13b36a463b60e5ed84dc"
  },
  "du-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/dfde70ab4c182cdc2a508af7.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 121358,
      "format": "webp",
      "sha256": "43c78100af74d37e805f9a27f51932bc45869ccbd40113282df31b69707ce5fd",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.99263565119219
    },
    "preview": {
      "src": "/images/atlas/previews/19908d9d99c87332cba17d22.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 212474,
      "format": "webp",
      "sha256": "d2216d285e2b17111555dc59b6b6e36cf347832f8d1b1573c09dcc0beb911411",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9970343039483672
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "2c3e5cc4"
    },
    "sourceRelativePath": "du-meridian/local-points-5.jpg",
    "sourceSha256": "4751321ffee6ebe53444ec62f0a4e65d1e626d820d8958cf995ec5fff5a93cac"
  },
  "formulas/dosage-forms/dan-preparation": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/75c6868fe1c95b5e35a83afa.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 165592,
      "format": "webp",
      "sha256": "d653ce8f068213f155aacbb833d97ae15421fd668c305d091d4b596b5c8da17b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.964612925793123
    },
    "preview": {
      "src": "/images/atlas/previews/c6f3cbea91a57d353ba172d0.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 283926,
      "format": "webp",
      "sha256": "619902a4ad9bda27f6d09819904141fa1b69038f89f96043ba6122dac05cb124",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9951350220450033
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "93abb012"
    },
    "sourceRelativePath": "formulas/dosage-forms/dan-preparation.jpg",
    "sourceSha256": "98cf79cbd3714f7b86d8c9f3dfbc2e7327b85c9a92cd4cd91abf816edd15eb18"
  },
  "formulas/dosage-forms/decoction": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/e4796f618d4eb109f60771a9.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 160586,
      "format": "webp",
      "sha256": "317f135a72a08d294576efeb1f170296d868798dcd1c29bbb0c74053e9c1e0ef",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9432356748732187
    },
    "preview": {
      "src": "/images/atlas/previews/a20173a8e586c78ac2d884a6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 268732,
      "format": "webp",
      "sha256": "d64064e19d8e1dfeb0ecc07f0621abce1ea2e1a96d7d4b0c96694f9755bbeee8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9956614036338839
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "c241e4c4"
    },
    "sourceRelativePath": "formulas/dosage-forms/decoction.jpg",
    "sourceSha256": "741f8fc222d59246188fc760b46dca9371b8d1583f18aaf7167ec379633bad4f"
  },
  "formulas/dosage-forms/distilled-dew": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/2d6aa04d3c9c5b725fe57350.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 165016,
      "format": "webp",
      "sha256": "14eaa111419d6bf8bb60ecd88e1d37cd1c1b3136b1e7d443986d981fc6beca13",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9720401965569322
    },
    "preview": {
      "src": "/images/atlas/previews/46742bba9d352755a05f98a0.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 278026,
      "format": "webp",
      "sha256": "b3936f319fb74e2cb166dda5307ba5c671da4de4b7dc34e7eb800ff93e14e003",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9957482962120506
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "37eea638"
    },
    "sourceRelativePath": "formulas/dosage-forms/distilled-dew.jpg",
    "sourceSha256": "534e52adc230c9e0072e6e6583a1f2084137182fc9fb61c285a3b01ffd6ade9b"
  },
  "formulas/dosage-forms/granule": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/34b4451a07586e2b7b181aae.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 160488,
      "format": "webp",
      "sha256": "37483990f233bccf5c2e71531bf0a05fe52c7c8cf73e410770ceffa4044a3d37",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9413342090365894
    },
    "preview": {
      "src": "/images/atlas/previews/caf0c32586cf24c89c904f02.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 272342,
      "format": "webp",
      "sha256": "875f04c47ff75dfeb9eb2a537f35a9042c652ae0b2bc74b0b355d2961fb45766",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9968043353264917
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e259ccc1"
    },
    "sourceRelativePath": "formulas/dosage-forms/granule.jpg",
    "sourceSha256": "65b93d654d74746126151b304cf4d248f4eb18576167eace4a514a3eec3be7f0"
  },
  "formulas/dosage-forms/home-decoction-decoction-version": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/db77a22b0a2d168f4fc7462f.webp",
      "width": 960,
      "height": 1280,
      "byteSize": 203062,
      "format": "webp",
      "sha256": "eb663c1c6413fc39aeedf5beb61d2c6578362c698ee8e47a4ddada56c6807dca",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9729602199248378
    },
    "preview": {
      "src": "/images/atlas/previews/ace4319690335adad3afa6eb.webp",
      "width": 1080,
      "height": 1440,
      "byteSize": 340098,
      "format": "webp",
      "sha256": "e93fbdd1b4ffa9bc48f4df89eb08b8c417fb3ed493d7e7c7e17b55b6c9ffdba9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9960250411225184
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5f79a8b7"
    },
    "sourceRelativePath": "formulas/dosage-forms/home-decoction-decoction-version.jpg",
    "sourceSha256": "ddbcf9b771c3955a3ad1b3b8707d66c94717b94e7f99c14eacf9ea6774865e20"
  },
  "formulas/dosage-forms/home-decoction-formula-version": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/de43c49ce6b46fd012ceb103.webp",
      "width": 960,
      "height": 1280,
      "byteSize": 201026,
      "format": "webp",
      "sha256": "635df9e893d8e4c0e14eba5e9b79108fc8093b06d501b1ae9ea2d9c127a7a44c",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-seal"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9783204327400851
    },
    "preview": {
      "src": "/images/atlas/previews/620c826705b86879ba89e04a.webp",
      "width": 1080,
      "height": 1440,
      "byteSize": 328476,
      "format": "webp",
      "sha256": "e14fdd6519cd8f66f6361622dd6071721c68cc796686382c9cb3056202c84cf3",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-seal"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9939155081159489
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "86665948"
    },
    "sourceRelativePath": "formulas/dosage-forms/home-decoction-formula-version.jpg",
    "sourceSha256": "66a47e2eec09e23bcf5943e0809fa79607c5fdc231bfaeb1c3e3e783b8e879e7"
  },
  "formulas/dosage-forms/medicinal-tea": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/fb2ec56075aa2ce8d5228d0f.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 178190,
      "format": "webp",
      "sha256": "d3ecc01f209e155d859b073e18323ed5b64b44e2edf069f56db0d5b2973f225f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9722622419198308
    },
    "preview": {
      "src": "/images/atlas/previews/1d89462cde6775811e2b6627.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 311374,
      "format": "webp",
      "sha256": "8432add7dfccc2fc899d60812863b5c8cada8852da8f88910b5ac0a1ecb988a5",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9967381765449191
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "037a64bd"
    },
    "sourceRelativePath": "formulas/dosage-forms/medicinal-tea.jpg",
    "sourceSha256": "95633d0e78287be8d8e822634d9e8feb0c7eb0d52482dda4c63a9eaeda589c19"
  },
  "formulas/dosage-forms/medicinal-wine": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/8282d312452518102e954f80.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 173052,
      "format": "webp",
      "sha256": "ed0ced7a7a489a2b6586c96c05fe52a8b16ed332c6ecf5450b36acfed103ca71",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9716462738867508
    },
    "preview": {
      "src": "/images/atlas/previews/5fbde8e7c3cc4d483bfb762e.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 293752,
      "format": "webp",
      "sha256": "b35f3eba29352b02894c025a3e46dfb18d3c8101b5e034ba891e7630dc754c91",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.994968203615602
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d90e42ef"
    },
    "sourceRelativePath": "formulas/dosage-forms/medicinal-wine.jpg",
    "sourceSha256": "34b4b096bc104f0248d6c83257dbb9e5784c5937f1f88da4ef0b6951ce94b660"
  },
  "formulas/dosage-forms/paste": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/9204167e57374cab2a6a5688.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 144438,
      "format": "webp",
      "sha256": "f5c27cf55dd03d787a05d53267103157867a328a6dc39c861e03eab418518175",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9611274059191915
    },
    "preview": {
      "src": "/images/atlas/previews/d63250636396c077a260e8d3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 253422,
      "format": "webp",
      "sha256": "0566210cdbfd13dcac227d9e285bd950494e09909a73bdd9f3dd9a0fc1f474eb",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9964009144775591
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "fbc4274a"
    },
    "sourceRelativePath": "formulas/dosage-forms/paste.jpg",
    "sourceSha256": "d0ca4835cbe426d5e73acdd52ccda9e7e125e11d096ede8c82936e28c429f2cc"
  },
  "formulas/dosage-forms/pill": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/33464a1cfa48b370f82f92b7.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 149486,
      "format": "webp",
      "sha256": "e178d7468a03c25313a8312f2b3803d57450b83189b7e1615370565c8a54fc34",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9639154339194772
    },
    "preview": {
      "src": "/images/atlas/previews/84fe55407259158dcba043e0.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 255156,
      "format": "webp",
      "sha256": "211c8b6814f5091cdf26e3e49d948ad7e0f1a88ca2261fdf6ef9037c90527c85",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.995687809383867
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "9c535def"
    },
    "sourceRelativePath": "formulas/dosage-forms/pill.jpg",
    "sourceSha256": "53274a6a0932b248ce4aac3a61752437ae9fa68ab1aff4a5529d5e60cbb4bde3"
  },
  "formulas/dosage-forms/powder": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/021abe1c8a32a7bdcd16386f.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 166448,
      "format": "webp",
      "sha256": "f05df094ffc580c5c41927381a6ae324cb3b1a8ceaf20c2f85c95ffde6e1c2ad",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.966242542158522
    },
    "preview": {
      "src": "/images/atlas/previews/5b97ca7ed4541203c60adaeb.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 287306,
      "format": "webp",
      "sha256": "11c494e553a869bd91d954af9fad45219cb18d0e441e21f555c490d6719a582c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9993185046043891
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "dc93ebd5"
    },
    "sourceRelativePath": "formulas/dosage-forms/powder.jpg",
    "sourceSha256": "574309d76de4ce5c80a846f72a32387662f18dadcbdf53fa02d1b7cb7c7fa543"
  },
  "gallbladder-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/7199a2efa9307607c453c8ff.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 107458,
      "format": "webp",
      "sha256": "e50daf28d340f3d07d04be9eb21f3c0b4f386b002cd4655effc62c135c005dce",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9929159169290748
    },
    "preview": {
      "src": "/images/atlas/previews/6c1dfe5dbca5ba3fad148812.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 177088,
      "format": "webp",
      "sha256": "03d6373994c764ae0083be511e274af9ca4ae250d871d0dc98771b5fc58d6331",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9984020266278331
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "70a98c14"
    },
    "sourceRelativePath": "gallbladder-meridian/external-route.jpg",
    "sourceSha256": "6bbb0b66aea2a3cd40e5ae5053f23168b5a0dd68243eda66ce88543fa7f552b2"
  },
  "gallbladder-meridian/external-route-alt": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/24cba863d2ee5ff6ca54e591.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 101786,
      "format": "webp",
      "sha256": "e669c2411655aee191c7297304913bf1b0fa9d903b3dec251301c96a75fe1f04",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9902723292239423
    },
    "preview": {
      "src": "/images/atlas/previews/63829958f20cdf875cd02ece.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 167940,
      "format": "webp",
      "sha256": "3ee0888040e33cfb32f46e845f059320b2a4950367be5a784a47dd4f686cb22b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9962384407817844
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "aeefabfb"
    },
    "sourceRelativePath": "gallbladder-meridian/external-route-alt.jpg",
    "sourceSha256": "154ada3557eef00674c12d7906c462b7443240ea27a7532b77fbe3fd507a6288"
  },
  "gallbladder-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4ac62dde62020102667ae7c1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 181088,
      "format": "webp",
      "sha256": "bd8d09c6abd645f4f578bf4e46050fc1805a9b995e892fdad7c4ff65eb664689",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9949897769363203
    },
    "preview": {
      "src": "/images/atlas/previews/a7df4c5b88e45cc3af4ebfa5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 299134,
      "format": "webp",
      "sha256": "a8ab151c79abdd640a077cdd816173b48e9ff18c71a351029d26dff72fee20d4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.997881404685641
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "3c05a3bc"
    },
    "sourceRelativePath": "gallbladder-meridian/internal-route.jpg",
    "sourceSha256": "b84640ca295e0c38a59266db0978fb163ba8a593fef182f03f4f87d7a98bccce"
  },
  "gallbladder-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/5b1c1b969ff61274c3e79f84.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 142872,
      "format": "webp",
      "sha256": "9dc711953ca78cd7f5b52ae6767e54fc0a15f2defb4d01dddc7ce79cf2bf62de",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.98947428763636
    },
    "preview": {
      "src": "/images/atlas/previews/6dd2eaf31e1995c320a961bd.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 235170,
      "format": "webp",
      "sha256": "54d9edbf5740c12736380440ea9aa1e60cd9faad2e8f685fbae6cf15a3fc41a4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9986789674289673
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f8ac316a"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-1.jpg",
    "sourceSha256": "7f1ae773c5c3a551ad2d7c8640bc786cb9d1fd26b7095445fd667865af5a511a"
  },
  "gallbladder-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/af0e3e119a23e50612a6dccb.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 145752,
      "format": "webp",
      "sha256": "6010de0db8bce3998b9a6e53121eef643cbb6bcfa70a9625b2b6d71133550b02",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9967207881532082
    },
    "preview": {
      "src": "/images/atlas/previews/65c4be5e32f93fa9d0dfdba1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 248766,
      "format": "webp",
      "sha256": "6f8d0f1a2d35d0452b22a7615c4156e4526dde8b7389d4aa1a5febd5cfb7c844",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.998770616619587
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4c661634"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-2.jpg",
    "sourceSha256": "0f77719c8738d41143590a7b380789678aaa2ed7980dc67628b3ff741141b685"
  },
  "gallbladder-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/55b9ecc6aa9597d513edbb84.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 170864,
      "format": "webp",
      "sha256": "07036c08673ec877be8d363fcdd6348f10ea7293dab75851e02434f70c79d2a9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9936402819436178
    },
    "preview": {
      "src": "/images/atlas/previews/710ef36edaf1f615bb10107a.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 290688,
      "format": "webp",
      "sha256": "1190f7c40c495366e2a6ca0ab8b2d2e5153342d4f19ac3c7db32e4f3a0d3eab0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9997435897435897
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e2cfb574"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-3.jpg",
    "sourceSha256": "545c6d053c96bfd5c8c60f8af1530c72f91d54154080eabfb0509e4f2a15fa5d"
  },
  "gallbladder-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/9dcbef6daeb70edbabdb26ca.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 256078,
      "format": "webp",
      "sha256": "e5feafea65eccdf56dd97e907244bf155b9a3d6c88ff0569924c92fb2d5a8670",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9981471939155983
    },
    "preview": {
      "src": "/images/atlas/previews/c83c7126adf5889c05dd8fb7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 419258,
      "format": "webp",
      "sha256": "77546bc5a4af41fa50153e272b238a8c5fc5968c43f04049274130aab7e03332",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.99864797774408
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "258b03ca"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-4.jpg",
    "sourceSha256": "664195179b375ad068fb4d03bc423ee5eddf218bdb734df430ba7bf49f9e2541"
  },
  "gallbladder-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/b789165dd51950ef9e30ecc6.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 90356,
      "format": "webp",
      "sha256": "27b86b0e960b20e3a167830919199d33344585466b194136636646f1f7eed155",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.978474605177371
    },
    "preview": {
      "src": "/images/atlas/previews/98f4b912ba554c75023d768d.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 148166,
      "format": "webp",
      "sha256": "b6a3b1a68e11383facbdce1b694017f96c28907c23afb866f43556bd7389cfcc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9932790770792442
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "8b641a37"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-5.jpg",
    "sourceSha256": "c092616b79f834d7da4a379ac02085f6652c0a77cf095226737521722d10b6af"
  },
  "gallbladder-meridian/local-points-6": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/3d1dc8c8517315279c57fb5a.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 168334,
      "format": "webp",
      "sha256": "afe7b8a824512d1d248031236bf6441332ae282e40cd203360ce347de38b2ab3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9976805357136238
    },
    "preview": {
      "src": "/images/atlas/previews/aff9e27c3129adcf0f3ba137.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 286114,
      "format": "webp",
      "sha256": "7e8bca1ee254b8b75723ff188f1568e32bde7bf85ac6158ac0eb31428c1eed2f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9991547092458734
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ec4a2543"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-6.jpg",
    "sourceSha256": "faa25100467d83b89f80d5605791de817e2838d85f6f0f545178568396a8b517"
  },
  "gallbladder-meridian/local-points-7": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/04a66e66100af5ff6d78025a.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 87780,
      "format": "webp",
      "sha256": "61c09afc040791e2ec540284b26475cd7a6558b22d0ae0862a1a78ae56dc6395",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9808825306799254
    },
    "preview": {
      "src": "/images/atlas/previews/3f90cd862f7730790438b669.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 146432,
      "format": "webp",
      "sha256": "4687647def449de5a9defd5fa4f7457c0cf8a3f05fd393c720eda5d646f46a72",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9974307610124917
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4e8755b4"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-7.jpg",
    "sourceSha256": "5e68a00666d6bc893f74915468c995fe659e0b08024bbeb41c3370d080de2419"
  },
  "gallbladder-meridian/local-points-8": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/6d38b8088415826b6063f324.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 113122,
      "format": "webp",
      "sha256": "dcd139140275397a09c1058f9476c4e70692ad26c8c5fb954373b4fe81114439",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9740793789153137
    },
    "preview": {
      "src": "/images/atlas/previews/4eebc674ffab615be0ac9299.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 189770,
      "format": "webp",
      "sha256": "37eacf05809842272cfddffd7a17360d2394f914a4c9dac7a51d8216ec52dec1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9990621892795807
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1ea3b1c8"
    },
    "sourceRelativePath": "gallbladder-meridian/local-points-8.jpg",
    "sourceSha256": "e8a6e929bde6bfd7e889992be9b2db5c5499d08db30121f5eb7f5a0f6886d80c"
  },
  "heart-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/3572a76017abfb5de3179892.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 84618,
      "format": "webp",
      "sha256": "36ec9b7db0dd3f7d4f9e9e21dced22e90568314bd06dfd510406346cd7750f28",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9795612185571964
    },
    "preview": {
      "src": "/images/atlas/previews/654adca9caf11de155cc037b.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 143432,
      "format": "webp",
      "sha256": "2dea15d94bcf02d7647b4cf37a02d4d240195f4ba7849be0bc1c93b79422e0a9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9947950039891573
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "720b665b"
    },
    "sourceRelativePath": "heart-meridian/external-route.jpg",
    "sourceSha256": "dd1a52b253c69da3d2e78a5461a8dfab898c7433100befd986c64224f0aeca0e"
  },
  "heart-meridian/internal-detail": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/c4f73860af2e54ecea6c1238.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 100158,
      "format": "webp",
      "sha256": "6a8a48b9b592cb3605f90215f483217b67a1b036dc36c33cf11255c0e46bc735",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.991902364540939
    },
    "preview": {
      "src": "/images/atlas/previews/f9634d207c052a5d4d8cde14.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 172762,
      "format": "webp",
      "sha256": "3d92f20c2a464460e720f3971e917009264c455e9a96a6714c3f08762c04c4ae",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9979308257881316
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d3a6694c"
    },
    "sourceRelativePath": "heart-meridian/internal-detail.jpg",
    "sourceSha256": "473093993f46b62f1640933969bc0b04f0dcec51c6a99e2b50c9b331bb16a50b"
  },
  "heart-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/44fe4de66c383579c1be48e5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 100278,
      "format": "webp",
      "sha256": "e5f553008934a6fab75d3c1386d49ad56c210ab82d89108198e1b21bf3d41a92",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9931433007007585
    },
    "preview": {
      "src": "/images/atlas/previews/5293a7f98a3997963f2481e1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 172834,
      "format": "webp",
      "sha256": "466a0b8f92699a234c81ff81270f338d9b4e3207f6cd2325c67631063903adfb",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9978632039152401
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d31f9c76"
    },
    "sourceRelativePath": "heart-meridian/internal-route.jpg",
    "sourceSha256": "04b79881bc82d76a63d83b6395496e517793aa45ae4de209cc8aa4b4e0f24854"
  },
  "heart-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/75ed104759699bdd54051a69.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 48670,
      "format": "webp",
      "sha256": "f8ecf8ffeaa161da3cfd0406bdb93faf9dfaddbdf7d33cfc2e094430bd080a00",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9689086928077811
    },
    "preview": {
      "src": "/images/atlas/previews/06c422f45526a56806478c4f.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 87646,
      "format": "webp",
      "sha256": "4ee4fa9fe9bd5c3d16b375034427776208956dd693f14af07ae307cb4f523053",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9943502704747084
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "9ad67b4e"
    },
    "sourceRelativePath": "heart-meridian/local-points-1.jpg",
    "sourceSha256": "8a91fa30653bc56a1e9704b0109da5defc61f33b7068910ad031b9999d3ecbb9"
  },
  "heart-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/7cc5023d590146b4d3dd1b4f.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 84096,
      "format": "webp",
      "sha256": "d6f88f6e812ab8986b639d6dd343d7de7ec086f2aad3477b02c6871e26a16193",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9881834670744182
    },
    "preview": {
      "src": "/images/atlas/previews/43ebdd34121e0471d8941c6d.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 140522,
      "format": "webp",
      "sha256": "0aa1f8edda82dd4cf76161ab4ae1c53e28c552c1dff6dcb72dd16bbe60052656",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9959113714087189
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1b5c36b9"
    },
    "sourceRelativePath": "heart-meridian/local-points-2.jpg",
    "sourceSha256": "bb56ece4f2ff93fabd80fe895f5230e7a7eed8f8d4b115afbe770a0819188a70"
  },
  "herbs/wind-cold/angelica-dahurica": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/44db16cad2fdfc364d5d99aa.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 151448,
      "format": "webp",
      "sha256": "e40889d836d32841d3f6124222969ad28560d439a7c611b7ce4edbb9e2d2cdb1",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9520997320952352
    },
    "preview": {
      "src": "/images/atlas/previews/3fff6bf30a55e58e68c2c952.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 298316,
      "format": "webp",
      "sha256": "d0cd52949809b6c0b9456654f2d99fd7780639c52d6fae0549da738f654710c7",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9958170729567717
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "09dabe3b"
    },
    "sourceRelativePath": "herbs/wind-cold/angelica-dahurica.jpg",
    "sourceSha256": "2b5c89dbe1b39fe393b8ed0d95258f13fe061a0066f79ae0307bbfbcdb5b4c9b"
  },
  "herbs/wind-cold/asarum": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/2afe83026db1ae3da9b4bd49.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 141450,
      "format": "webp",
      "sha256": "d1b50dc3b2eeeedf2a4aa5f4c68cc74e9cd707ea8bf28ab17193cd600d4c4c1c",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9371548391300965
    },
    "preview": {
      "src": "/images/atlas/previews/4bf618b045ddbddbd9a69170.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 288902,
      "format": "webp",
      "sha256": "cc59295deb226a62c2e01b8c8423bc6e441c62529245031030daa12338479602",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9980069266096389
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "95ac10d4"
    },
    "sourceRelativePath": "herbs/wind-cold/asarum.jpg",
    "sourceSha256": "2b222d89bd7314a3afd5928910d5f82ff04a0b788eec652a0ad61ac8f8cd9797"
  },
  "herbs/wind-cold/centipeda": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/93178c23fa67789cf89a1bd9.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 124296,
      "format": "webp",
      "sha256": "348e80a8d7e2284fb711e13158c3347aebf3d3ac6e1fe763c3714dc84155a96a",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9276202289929525
    },
    "preview": {
      "src": "/images/atlas/previews/b0c4e2b36402b3f5e627bf5a.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 250952,
      "format": "webp",
      "sha256": "fc310ec18023bbd06dd37cfbfc4857535c5724c30a3a2b4b9fbb64297f14fffe",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9961308698574791
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "41554f65"
    },
    "sourceRelativePath": "herbs/wind-cold/centipeda.jpg",
    "sourceSha256": "6947cfdce13195da0b514793dc9d7ec70749d541f29e7c91595bf9fe2ce2417d"
  },
  "herbs/wind-cold/cinnamon-twig": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/81be23666ffe5342c8d1bd26.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 154324,
      "format": "webp",
      "sha256": "7af3dba09ab4536741945063243f73f1ffe95c9185156db2ec6d62de4c6e4bfa",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9531592481394716
    },
    "preview": {
      "src": "/images/atlas/previews/108d66e575a473d8e64c5b4c.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 297086,
      "format": "webp",
      "sha256": "f7a2b36774289bbac7d1f97ee0bd8366f25b8167aab486c0e653669eb4a51ff7",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982185624763336
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4e98feca"
    },
    "sourceRelativePath": "herbs/wind-cold/cinnamon-twig.jpg",
    "sourceSha256": "6e76cf6136daa84bcb91d19c680059dfe77e3726fad85edb7e2a99d8a0f68f27"
  },
  "herbs/wind-cold/coriander": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/1e525a0ae1fcad54724b7c42.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 162124,
      "format": "webp",
      "sha256": "1b560fe996fbe0ae7b9f2fcd01afe3cf5249e18eeae8fd4e9052945717180148",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.944958694529655
    },
    "preview": {
      "src": "/images/atlas/previews/b6884588c7851795d9849fa0.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 314766,
      "format": "webp",
      "sha256": "4d3af38d4244f21712774e32c89d4ee6e1b50ea743879f527c96263f81efc2a5",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9958215555124326
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "eddf43bf"
    },
    "sourceRelativePath": "herbs/wind-cold/coriander.jpg",
    "sourceSha256": "7631d1c761ea0948e7b8758fd29046a920aea22f69d8b69d2966b78b7cba7f59"
  },
  "herbs/wind-cold/ephedra": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/8b4f85e00e820ffe332b0197.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 134736,
      "format": "webp",
      "sha256": "45c890a01433a61f221b40e52b3e6f32a53b028ae670558a2970876372233777",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9323366753032644
    },
    "preview": {
      "src": "/images/atlas/previews/fa59b090012fbd101645b4a6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 265062,
      "format": "webp",
      "sha256": "d6cd7d4c5eda23d2192f434b39e731bf0f9f899ca8e786e701318ade7ce6a633",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9977424776865829
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "faf0694c"
    },
    "sourceRelativePath": "herbs/wind-cold/ephedra.jpg",
    "sourceSha256": "d15cc0de115d408c1c883528964f0e7cb6687fcad8fa3d46678f4807a32ea5ff"
  },
  "herbs/wind-cold/fresh-ginger": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f0d2132527806a6f573ceaa8.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 142646,
      "format": "webp",
      "sha256": "58c0081db60b8c6a9a19a03a985a7196206fb08175db9ef39358a61794fe38dc",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9389973222324005
    },
    "preview": {
      "src": "/images/atlas/previews/ee039232538cb2dfdc075e82.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 292078,
      "format": "webp",
      "sha256": "d9ee2eb7d1496b880fa3c4444d22ca88f0cbc8f428a4145a9c34f212d8197069",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9969154806826305
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1c4e3ac5"
    },
    "sourceRelativePath": "herbs/wind-cold/fresh-ginger.jpg",
    "sourceSha256": "39333b77bdc6ddb701186ed162e5c3f4d0fd156ac0116573c86366de1b2b7a6d"
  },
  "herbs/wind-cold/ligusticum": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/b94b5f5b33d1445dff8f8f30.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 157056,
      "format": "webp",
      "sha256": "d3bf38581b2d5603c1851542db458ca78e23b895711b2e63d632860361373b0f",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9536792982521334
    },
    "preview": {
      "src": "/images/atlas/previews/7606d264e643dac80ed9cc45.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 300922,
      "format": "webp",
      "sha256": "8986d56eedf14ef18eb985332fb5f361bb6ab1a1d5aa0d9db38f3744221e07d0",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9989727479310813
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "72b3f985"
    },
    "sourceRelativePath": "herbs/wind-cold/ligusticum.jpg",
    "sourceSha256": "92f35e16547136fb8371086e00e4dfb088a22801f340f291e9ab5829eedc3ec2"
  },
  "herbs/wind-cold/magnolia-flower": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/51a1783ac236b24047e0850f.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 125294,
      "format": "webp",
      "sha256": "89a2d549584607df9472b0e1cd31ef297d916e69f5095e2f60b97f57eca014ef",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9319404531917104
    },
    "preview": {
      "src": "/images/atlas/previews/18d3b2e093610ba67f953d9d.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 252812,
      "format": "webp",
      "sha256": "8fa7600c7d01725d775a065173433f5ace73bd1e3fc970ad269c9b29ff0edd1f",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.997947376286802
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1b5c47ad"
    },
    "sourceRelativePath": "herbs/wind-cold/magnolia-flower.jpg",
    "sourceSha256": "228d7c4965baabc07fb85208f40c0febd4cf684b6c8213ff12d3c8a32afecdeb"
  },
  "herbs/wind-cold/mosla": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f19ac9cfb74a35b7035d3e22.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 175624,
      "format": "webp",
      "sha256": "eb6e1855847d4eb027e5d9dc35a2cbe6be2807126543e2de9d3c002a664a1f95",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9598912483823975
    },
    "preview": {
      "src": "/images/atlas/previews/21b47e3ea82f2021459fde3e.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 335622,
      "format": "webp",
      "sha256": "a23da2ffae15ddc17ad0c44dc5a37edcd510be5018bfd4cb3ff5933e59ec45d6",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9974651191774988
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "0986fd0f"
    },
    "sourceRelativePath": "herbs/wind-cold/mosla.jpg",
    "sourceSha256": "f292d617ecdbd38debdc904d13c6b8f9f6f46046f9ed21815351d71f97b1eb5f"
  },
  "herbs/wind-cold/notopterygium": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/97a1588d06e58d1f39cdcc63.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 156534,
      "format": "webp",
      "sha256": "44d0734c0be62cb2c7d1023bb8ed542e760a752702eb9b1552100f5c8ddb6b6c",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.961282717514754
    },
    "preview": {
      "src": "/images/atlas/previews/163b7217f82c1cf83bf1f5bb.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 307056,
      "format": "webp",
      "sha256": "0f53307436c1fa03dd17360c154eff83421d44a0a026502a0803c9f6931f6704",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9965414389054305
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f70f3a18"
    },
    "sourceRelativePath": "herbs/wind-cold/notopterygium.jpg",
    "sourceSha256": "01f8349fada030091241310a30481e2ed5fcdfeacd0c9cec1aeeb0e0e47cffe6"
  },
  "herbs/wind-cold/perilla": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/879fe1a1f9e7af37a74ebb2d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 139456,
      "format": "webp",
      "sha256": "51eb19b1c8bc4f9b60c36e009fa5f65e6358d5895925e4e65b1f69767d6b04ef",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9574028724974377
    },
    "preview": {
      "src": "/images/atlas/previews/56e8040dc9ea344166f6d99d.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 279444,
      "format": "webp",
      "sha256": "ea3c19f0731ce8482b5ef7c92458fefda1b5b2bb46a51593aedb2665c376a6ea",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9971151699042646
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "6dbec0b2"
    },
    "sourceRelativePath": "herbs/wind-cold/perilla.jpg",
    "sourceSha256": "f51442ea5ca27dc559f84cb6bc653eca01a9abe795279cc1afdac779ddc73f49"
  },
  "herbs/wind-cold/saposhnikovia": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4f86e782d227d995239a7d5b.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 158456,
      "format": "webp",
      "sha256": "ffbfa953caf671f031b28e2c382265460eeb669a063d4310ea35ef9ad700206c",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.952487794945927
    },
    "preview": {
      "src": "/images/atlas/previews/d29f84f66d663b529d638a72.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 307110,
      "format": "webp",
      "sha256": "22ed3dcb29a0825863414697526a73ce2541652c4e356891bcc788cf522378a6",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9968822569768739
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "fcbf2160"
    },
    "sourceRelativePath": "herbs/wind-cold/saposhnikovia.jpg",
    "sourceSha256": "7d297bf22665599a9d610ef69c16ddf7d355c2bb77bb391940c809687ddee17a"
  },
  "herbs/wind-cold/scallion-stalk": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/b97a2af1dcd6bfc0721bc780.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 111668,
      "format": "webp",
      "sha256": "7ed607dbc7da069a65e5c6bbba41b76ca08920a23d27f7ed562d161fa6a5d815",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9092249762165364
    },
    "preview": {
      "src": "/images/atlas/previews/79c07ccad40598f5b330f71b.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 231668,
      "format": "webp",
      "sha256": "52cba36b14757c347600dba26ff188d49d69511f6d34cabb38d4e555ea60fd62",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.997128812917281
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d2c9916d"
    },
    "sourceRelativePath": "herbs/wind-cold/scallion-stalk.jpg",
    "sourceSha256": "eb158e5fc969bc80d03a2771525eac7f1aa201058dd44fb2d3de76ba33b80e07"
  },
  "herbs/wind-cold/schizonepeta": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/d202b9363fac0e7505d9f5fe.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 176846,
      "format": "webp",
      "sha256": "55619f45aaf8a11f65b5d51d7325013448c50ee120d0b4e738ce4ccfca3076ed",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9750677577145441
    },
    "preview": {
      "src": "/images/atlas/previews/763a40bf65d333df4adbfc8a.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 336778,
      "format": "webp",
      "sha256": "42fc3b659cc3fb2930dc1bfa3a01df02d2556ef0fc5f1981ab94393df564f29f",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9970790948253033
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e275b1f6"
    },
    "sourceRelativePath": "herbs/wind-cold/schizonepeta.jpg",
    "sourceSha256": "9b264eed205de889aaab1d1795afb41ab8183fb4e4338bbadad5f15ee12ca506"
  },
  "herbs/wind-cold/tamarisk": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/9f396b99abd174c40c5417c1.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 179546,
      "format": "webp",
      "sha256": "d8a7a43d783ca3071b7bf36466f35149008323fa2d21d6dcca0f80d0c83a5e5f",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.963674972170349
    },
    "preview": {
      "src": "/images/atlas/previews/d5d891371a2420d1bdb55c0a.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 337964,
      "format": "webp",
      "sha256": "3c96e0ae03d73265e88164c012cd5447b5e60a8f98c81705698c61b23984c7e1",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9969718625952262
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ae0bbbaa"
    },
    "sourceRelativePath": "herbs/wind-cold/tamarisk.jpg",
    "sourceSha256": "c544a8d4dba9a71d43c61db05775777b5557a692244e3b7840bdcca90b90821b"
  },
  "herbs/wind-cold/xanthium": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f1a2d3ca6558a3caf7461b26.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 160024,
      "format": "webp",
      "sha256": "99c994ec2f265e905c73da2fac3d8b53d2d57dd59d7f2699afecb3c0c0dd3841",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9614256722021601
    },
    "preview": {
      "src": "/images/atlas/previews/ceca36fc5d857d9c85a9c76c.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 312352,
      "format": "webp",
      "sha256": "07fb8b2b252e623e9905d8b36f6cedb7c0b29bb836abf46efced76fc30853499",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9968901536502487
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "8974eb93"
    },
    "sourceRelativePath": "herbs/wind-cold/xanthium.jpg",
    "sourceSha256": "3cd24e13a6d899b2bead7bec92f04c27ec6371128c99b1b43b4f266ef217abd8"
  },
  "herbs/wind-heat/arctium-fruit": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/cfc4abad4acc878aa6872d0f.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 150762,
      "format": "webp",
      "sha256": "a06e4410c2fcfd89a380695a2f22f01b7748d99959e96040500bc23375690e47",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.953202856823527
    },
    "preview": {
      "src": "/images/atlas/previews/d66e94169e09e62cf01be176.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 286402,
      "format": "webp",
      "sha256": "831c82838f64c041de54db1e9979a0ff0e8da147d0cd9b201a6f83cd6a2574ab",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9910152936804099
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "83534160"
    },
    "sourceRelativePath": "herbs/wind-heat/arctium-fruit.jpg",
    "sourceSha256": "d1781ecf9888185626aac6ae17ef7344db8f79d17f1a5064410562f362089d1e"
  },
  "herbs/wind-heat/bupleurum-root": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f243cedb597c9012c9821f4e.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 179978,
      "format": "webp",
      "sha256": "338be116afe14bfe730dbe6a41470817ce020bd91268c922204dc186766673b1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9837102872709528
    },
    "preview": {
      "src": "/images/atlas/previews/032b93d8449d6c820b193933.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 329526,
      "format": "webp",
      "sha256": "7cd7a6504c959f8bccc50b1cb2d39c326836b4422d93874c2bc16f0b9228794c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9928770024011855
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "14729518"
    },
    "sourceRelativePath": "herbs/wind-heat/bupleurum-root.jpg",
    "sourceSha256": "43ce88fa9de4f8b3274638f6798ef98b498819cf3b5f628166e32209a6e0172e"
  },
  "herbs/wind-heat/chrysanthemum-flower": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/a313b88e360f3dea4771f41c.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 162942,
      "format": "webp",
      "sha256": "b9cd4e41e1bc871d320d3745dbe3347663082a15f8a27c53e0251be82baf2441",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9680571922295828
    },
    "preview": {
      "src": "/images/atlas/previews/ef4b8cc0adee0013c7dcf241.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 303220,
      "format": "webp",
      "sha256": "4eda13870247a9e433af9aaf364e3628209fafc0ea1cb5d4b49674380e45609b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9924951267601965
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "efa6f8b0"
    },
    "sourceRelativePath": "herbs/wind-heat/chrysanthemum-flower.jpg",
    "sourceSha256": "7d2e73e944abca19e285d9f550390a0c46cb6cd584094bafec7b6e6daf7118c5"
  },
  "herbs/wind-heat/cicada-slough": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/006f33f2185f0483c0416da3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 151374,
      "format": "webp",
      "sha256": "3eab28d480b3ff96ad0e14f69a6fdd1597ea4865432a99a8fe04bed097f2139e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9717986310292454
    },
    "preview": {
      "src": "/images/atlas/previews/bb9aa8f90391b4ecdf27ecbf.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 289658,
      "format": "webp",
      "sha256": "6cf7ed1101a390ad2c58c7caae658aa939abb3317e35bf5e8b63f5f6a122f632",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9934526484063445
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "a61e201d"
    },
    "sourceRelativePath": "herbs/wind-heat/cicada-slough.jpg",
    "sourceSha256": "dfbe07bfd9bfd955092ace3b118774d188cf7792f2e91da28dffb658d6558d71"
  },
  "herbs/wind-heat/cimicifuga-rhizome": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/521ff92c9b766b53118fa855.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 164342,
      "format": "webp",
      "sha256": "62247f4dec829e06c7d608a6041add1f48f3f310bf24f7cdb7d76e65b1d31ecc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9762706571913544
    },
    "preview": {
      "src": "/images/atlas/previews/f0b2af3fb1532b4a19aac8af.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 308758,
      "format": "webp",
      "sha256": "52eabeeb6939c43f0ad6d519401bd7b0471c37a70801030c678311d385ad9c5a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9874692307259075
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "742caffc"
    },
    "sourceRelativePath": "herbs/wind-heat/cimicifuga-rhizome.jpg",
    "sourceSha256": "e76fe498564f68ca3cd918b56b70daa225d39c59ef7a73327365c73743483a58"
  },
  "herbs/wind-heat/duckweed-herb": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/264e5f44a7a72c8a43408d32.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 148174,
      "format": "webp",
      "sha256": "f906aff0fad9c087370c2daca513aa6f79d630539a6e9ac416498336bf0db46c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9576335810223622
    },
    "preview": {
      "src": "/images/atlas/previews/38c28ad44790fcb142425a21.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 287214,
      "format": "webp",
      "sha256": "21e847f8c9cf04829548b9c5517279b08db419c3c06518211aa3d09eaa834a60",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9863376254143942
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "3fe86889"
    },
    "sourceRelativePath": "herbs/wind-heat/duckweed-herb.jpg",
    "sourceSha256": "954220d135d544c6bf13da77dc7baaa50cab7fdb52aa2958d683b61825241726"
  },
  "herbs/wind-heat/equisetum-stem": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/aef69a4aa1983f5c9559c6ef.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 151704,
      "format": "webp",
      "sha256": "f394ff2676cb7f0581f2ca51c0262946c373530bbacec55b56ca6606f7008ed3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9808795505102841
    },
    "preview": {
      "src": "/images/atlas/previews/a1e8a0fa8c4c681b4a3b5f74.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 290546,
      "format": "webp",
      "sha256": "f3572874c5ba6ae8aa71b544f138db158101bb779ce5b42c59f5aeca7050c732",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9939866572175494
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "6a02c290"
    },
    "sourceRelativePath": "herbs/wind-heat/equisetum-stem.jpg",
    "sourceSha256": "1ea8b18c4130bcb24cefeb76840e975cc4bce5388ee29388b514cd0915d8b709"
  },
  "herbs/wind-heat/eriocaulon-flower": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/8c45f48a7b67b746d3166bf8.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 182206,
      "format": "webp",
      "sha256": "f8d3fd6a0afeb2393813cea6ccee6b538f04760dee1e07a3af71bedb9e2dee58",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9823034247371492
    },
    "preview": {
      "src": "/images/atlas/previews/fdec06fb3e2b96873c6c662b.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 335120,
      "format": "webp",
      "sha256": "ab68c48fbe062486fb6ae2e824fb606eb7f86f566cf8d0ea4dd9ea6226655c58",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9914022572459125
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f70a442a"
    },
    "sourceRelativePath": "herbs/wind-heat/eriocaulon-flower.jpg",
    "sourceSha256": "93c62e1d40111fee7db27b193a9ff6fb0f3fefb45900fc7ed6f4d74eba2f271c"
  },
  "herbs/wind-heat/mint-herb": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/d9b649b9154397b6bcb44f8f.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 159426,
      "format": "webp",
      "sha256": "b970473303ae45fc610b5451832addfdf368e025bdb2bc461ae214f54e1cb736",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9741422976161134
    },
    "preview": {
      "src": "/images/atlas/previews/423a79da99510583506bf685.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 299000,
      "format": "webp",
      "sha256": "32339843a2b77307827cdc4dbda1a79998a08d5686f897a6cf0eb320c8a8688a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9881458624356162
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "11ed9687"
    },
    "sourceRelativePath": "herbs/wind-heat/mint-herb.jpg",
    "sourceSha256": "9a82948fb56ebee7c119187da62edf75617dbf7dc87ef5adc02a850b669af7bc"
  },
  "herbs/wind-heat/mulberry-leaf": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/a8b15945e5747a8bc4619291.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 139748,
      "format": "webp",
      "sha256": "c328f4550408021296e0d284d658c28bade22a8d5643d0d410174e55b52e325e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9319294822311258
    },
    "preview": {
      "src": "/images/atlas/previews/b83ef29cff07d435c3800c6f.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 278466,
      "format": "webp",
      "sha256": "459a66cd053abbdb91f5d7204ea3b0e8960eb832f41b749cefdb9454ff75ecb8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.984615570430948
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e95c38af"
    },
    "sourceRelativePath": "herbs/wind-heat/mulberry-leaf.jpg",
    "sourceSha256": "89ce9051367e1424a60cc9d499cf5f6fd6863e734cb39c12fa1df75408063bd9"
  },
  "herbs/wind-heat/prepared-soybean": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/8084d98286abc0259dceabef.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 136848,
      "format": "webp",
      "sha256": "5d86c135c33b2fcaf1b22e4391985fdca844e4de79dda4d7452cfc8a78e3997e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9484133531522567
    },
    "preview": {
      "src": "/images/atlas/previews/d1bc0e4c91267188d7444ee9.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 262938,
      "format": "webp",
      "sha256": "676b6a13b912f3de2d8b7012d8a1b86e95e8748e4b3a4599ed90045141726537",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9979731274746448
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "16688db0"
    },
    "sourceRelativePath": "herbs/wind-heat/prepared-soybean.jpg",
    "sourceSha256": "4663cc7ad196a75d5cd0ab6be1f1808fdbfc0973e9869e5b8c60f0e20e083769"
  },
  "herbs/wind-heat/pueraria-root": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/e449b1019e0baa449a5a3236.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 171302,
      "format": "webp",
      "sha256": "15d3eaf78558a15209d1270c29239e7bbb460a8b055f458e54cdf56b65f6690e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9776073727308137
    },
    "preview": {
      "src": "/images/atlas/previews/f7d40c3f6c05570af7a69de2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 314686,
      "format": "webp",
      "sha256": "d6b4911630f9dde2934f3a547a7770339f2b436982c3cdce6e9326429bc24df7",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9942872026710204
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "732388f5"
    },
    "sourceRelativePath": "herbs/wind-heat/pueraria-root.jpg",
    "sourceSha256": "f10d634cc92147227e103180f38f9480d2d0122f62616a34f6d6b0227deec872"
  },
  "herbs/wind-heat/vitex-fruit": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/fd9d26d136303bf42124c306.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 155384,
      "format": "webp",
      "sha256": "fc46139a045789977b99653a852bbbc9b8f419c05ebdf20601bf4f9a2e621fe3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9880765776591497
    },
    "preview": {
      "src": "/images/atlas/previews/34c3fb1e97764a628dbd5c56.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 295234,
      "format": "webp",
      "sha256": "a130da90135bb369b3d5b830ce2734473b7d3359bdca93e9f8684ef2ac61106b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9919081934756119
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "450b0fe0"
    },
    "sourceRelativePath": "herbs/wind-heat/vitex-fruit.jpg",
    "sourceSha256": "53b9cb5b2be19fc02d7acd92953c54d982d9ecca392db0c2c7b0924603714e83"
  },
  "kidney-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/dd01194bb4870d79779a455b.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 55892,
      "format": "webp",
      "sha256": "d878b01456849ed512487922a6754e4d1ae9f27ab2056d7e0818be1646823e96",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9902414921988034
    },
    "preview": {
      "src": "/images/atlas/previews/c8b2c7d4cc2f4ad6d8c662cd.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 97072,
      "format": "webp",
      "sha256": "281c43065d47cd402a756c0dc9107014a554fc9994ed73ed9297dff13a6ea3a9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9972090729783036
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5f301d31"
    },
    "sourceRelativePath": "kidney-meridian/external-route.jpg",
    "sourceSha256": "f27ee3efbf729fac6900c2e02b6e94aeaa2bb72553f8a18578d2601f5bfcc7a1"
  },
  "kidney-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/a0b34cba3fade3a3a690d3f8.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 99892,
      "format": "webp",
      "sha256": "cbfc7eddb51126bee4c502e6cb7d2dd15d6110735ecf88f38459db751810434b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9908493350643676
    },
    "preview": {
      "src": "/images/atlas/previews/09fc9bd69675d5e7ce3c35bf.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 172740,
      "format": "webp",
      "sha256": "92efcd7333b7964480ea245b959d423860dcff015b2bfdf837fcce2cf2bc7239",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9977400720062662
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "99f262b7"
    },
    "sourceRelativePath": "kidney-meridian/internal-route.jpg",
    "sourceSha256": "f52c7741dfb3e194a3a3957c30388623c918232183f42e3fad2b42bfc38344fa"
  },
  "kidney-meridian/local-anatomy-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/32c50d226a1ab03d2aba5dcb.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 75492,
      "format": "webp",
      "sha256": "d226da4c50d9f3fc33c909504e945c3fe1b00d3b2292a66f9619478a28eae5e9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9875166215027639
    },
    "preview": {
      "src": "/images/atlas/previews/8c65c1f9e4029238bc43e6c2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 131344,
      "format": "webp",
      "sha256": "94ef02b2a98d85b7559fd47653a0a4e7ff21ddd01c023c52f0c9b834d00fe05a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982085622710622
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "a36a4b7e"
    },
    "sourceRelativePath": "kidney-meridian/local-anatomy-1.jpg",
    "sourceSha256": "5de26a5ba6fe755473515c6955b55948d2aa447aed9d8756e73f78acf3684ab1"
  },
  "kidney-meridian/local-anatomy-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/09ba919ae8bee751f9af30d6.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 65972,
      "format": "webp",
      "sha256": "6b90339d9898024083fca1531ddd39d3cf20de1aa2760f823de1313a40ca8f4f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9838550153750331
    },
    "preview": {
      "src": "/images/atlas/previews/f039938d4d85dd86bd47070d.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 110280,
      "format": "webp",
      "sha256": "c44d2ed45ad518ae8c498146cf4e45800da2864291b525986a40ae922591e440",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9980858262108262
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "14b10a29"
    },
    "sourceRelativePath": "kidney-meridian/local-anatomy-2.jpg",
    "sourceSha256": "e5e8eaaf7865edc96c97959c716f5440cce9208ca31f59853f59648d43886203"
  },
  "kidney-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/caf363805b3f7039fa44f108.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 91962,
      "format": "webp",
      "sha256": "9f99dabbbb0127c6d50b7653ce03d9be5c63942137cb0a56fee75e8a11478ec7",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9723024652749847
    },
    "preview": {
      "src": "/images/atlas/previews/fd908463c594b73b39194501.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 151682,
      "format": "webp",
      "sha256": "0d998432e2ae54a05dc425674fef2a7b37d8d5f4b164d93ae0e1004bcfe0e2d8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9989364801864802
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "53b1029f"
    },
    "sourceRelativePath": "kidney-meridian/local-points-3.jpg",
    "sourceSha256": "85e4a778f1286950b3a5fb2ba4c9af0dd297f13c20cee46b3fac632bfa9607fa"
  },
  "kidney-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/735ad797c07b7732b9399e31.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 283846,
      "format": "webp",
      "sha256": "431cf945f23bf5b4b87ad7737201196a6f594b0e7db1597c7cfedb6551600209",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9989320877478772
    },
    "preview": {
      "src": "/images/atlas/previews/0e2bb3bf79d898cb420c90a0.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 458500,
      "format": "webp",
      "sha256": "1fda0072ac95e99b58f269ec551b5f876d01e0acf07394853384451ae6e32931",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 1
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "86432ef7"
    },
    "sourceRelativePath": "kidney-meridian/local-points-4.jpg",
    "sourceSha256": "a482dd400a6f4fb08e64218fec0204d0100e111406d64befdd827043bb628cca"
  },
  "kidney-meridian/surface-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/350508bb37f61e4c0b1c9f86.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 56398,
      "format": "webp",
      "sha256": "0381739213ada94647a13053d11f6cdaff1f527a484cb270458d4e94dc5a17e0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9778143875922632
    },
    "preview": {
      "src": "/images/atlas/previews/a35e6181de3b11fff8520ad4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 98202,
      "format": "webp",
      "sha256": "c67917bd502ad8ab1a3454ad5cd04d2a1289ebccd2cbe85ea4c8474d55523f66",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9972942214790042
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5fdede81"
    },
    "sourceRelativePath": "kidney-meridian/surface-route.jpg",
    "sourceSha256": "75e222994f13c351a3cd07d099a76622d4caf9b02fff82b5f930b47fb17c18e5"
  },
  "large-intestine-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4c6abb06f17cced134fe433d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 113682,
      "format": "webp",
      "sha256": "217e5a2bda83b29f63522a4c5cd801abc390e1e956ca2399d9c6ef77c06a7e01",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9884064268269993
    },
    "preview": {
      "src": "/images/atlas/previews/d0d78c36ddfc1b035ed1e91c.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 191918,
      "format": "webp",
      "sha256": "b690ae47788e5561a37072e2bd22f76ad5f49fbf93638bf2fab8462ac806c59a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9975199052404935
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5e101a99"
    },
    "sourceRelativePath": "large-intestine-meridian/external-route.jpg",
    "sourceSha256": "991d10009ee252eb4d583281061c5c0d4f626b4036d82e7c1050f32789067e21"
  },
  "large-intestine-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/11c9f4ec9e86d4211cbc1931.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 164630,
      "format": "webp",
      "sha256": "eaac2044f03a0533a50218bd5be1270ccb1f8f6b7f24249cfb883a7b8240a8c8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9931272902836726
    },
    "preview": {
      "src": "/images/atlas/previews/134f05762c6b93188aa0c4de.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 279588,
      "format": "webp",
      "sha256": "36c69493d4ca27471013f4da3dbeb742bb332a138ad64948078e482776ef215d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9979687624662811
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "708730e5"
    },
    "sourceRelativePath": "large-intestine-meridian/internal-route.jpg",
    "sourceSha256": "04270d115d0fed7f38afe9e35bfbb9094e2a2ab545b255ed56365b811ba6145d"
  },
  "large-intestine-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f236604217bcc3f82ac25040.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 96900,
      "format": "webp",
      "sha256": "858a17e79292f034e39a9e10f22de5d50cd6887a2738ff1e1c21674795bfdb59",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9944503865699518
    },
    "preview": {
      "src": "/images/atlas/previews/f965377701a0b2fd6955fa2a.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 157986,
      "format": "webp",
      "sha256": "329e56baf7679c78d2b1c7166fcdaf603d1dd5080726dd5429a427406d8aedba",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9987535612535612
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e9d9def9"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-1.jpg",
    "sourceSha256": "cb316b104b7d46de73b0c55ad628c1e2780d32f36186513175ffcaa7164a3653"
  },
  "large-intestine-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/6f151662e8738de11b9e5663.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 79138,
      "format": "webp",
      "sha256": "a818b14e676b981a59a14346f97afea33b5798fb13c0f91b58c32da3e3558f2c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.983387176296804
    },
    "preview": {
      "src": "/images/atlas/previews/36f8264bbb9541f34b0c4365.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 130326,
      "format": "webp",
      "sha256": "8db49f0d8e2802c09d0ae1e33f584afed19e8428066495c35e74a264f1832abb",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9991987179487178
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b4cb493e"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-2.jpg",
    "sourceSha256": "fdf065561dab20491254b98856745855a55274363b3bb2f25ecfe52a5b4cd179"
  },
  "large-intestine-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/052f90e8e1f3832cff14b7a0.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 189024,
      "format": "webp",
      "sha256": "609d3a84954d4455b379de89b77db61ed9734ec8e5fdebb6f597236d58733b52",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9954955849752761
    },
    "preview": {
      "src": "/images/atlas/previews/3c6c8be195c77e6675606bb2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 307908,
      "format": "webp",
      "sha256": "e583d257583406786b8cbfc11998f8d68356e5e7f73f4053c44a11283bce64b3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9990185639043658
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "43f74b71"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-3.jpg",
    "sourceSha256": "1dd8b81cd9bb9a689e9c56499d0c82f62e44b654b3da83691013a0574af6913b"
  },
  "large-intestine-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/b61bbe1ca7b4ec3422642595.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 221336,
      "format": "webp",
      "sha256": "891e969ffa328dd7459339c3f82bd39c449bf113a4e2d9f7ea6b89356aba4cf4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982806634613459
    },
    "preview": {
      "src": "/images/atlas/previews/60dd8b6c913abb6ad070c51d.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 359550,
      "format": "webp",
      "sha256": "4f652a5ccb93cafa8b8c271dbaaef19baabf5fdb924247134fd9cb7f423b0b80",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.999736564805058
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ff336140"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-4.jpg",
    "sourceSha256": "9fead1abd288a83601651e3900b879715fd3258a1f5344ea061cc2f651d3830a"
  },
  "large-intestine-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/289b92b94aa497de0a247d0d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 135558,
      "format": "webp",
      "sha256": "df0b6ba75ed4ba136cebd69716d3d5bb54db9267095c1c281457c8e852ad84d4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9906024879797053
    },
    "preview": {
      "src": "/images/atlas/previews/fb09a096b378e7075d307903.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 226002,
      "format": "webp",
      "sha256": "b4a684771f3d411b7114df9369df36435df37b9bc67dbb7335eed8f5249de630",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9988295693760855
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5abb1112"
    },
    "sourceRelativePath": "large-intestine-meridian/local-points-5.jpg",
    "sourceSha256": "89abb17ac970f14ab643f746bbede302a0a9720d19de01e3c27425460f3743ad"
  },
  "liver-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/2cb069b70e1a485e69b1c117.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 52942,
      "format": "webp",
      "sha256": "84bf8d605e29d77f7c5ecd586e7f89650fa601db127a46347077965da6eaf78f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.980625733089117
    },
    "preview": {
      "src": "/images/atlas/previews/31716b6552af96cf46621f7f.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 90448,
      "format": "webp",
      "sha256": "8c7152d94c2e592b407ea2054d9d85225f932b58a380ffcf52a3ccde4806bf39",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9964853887677775
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "8d0cc0d7"
    },
    "sourceRelativePath": "liver-meridian/external-route.jpg",
    "sourceSha256": "68132be0e542a534f994c387d1d68e2b26e945e01748d17dc0fa212192190e4b"
  },
  "liver-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/b24cee0697ffbc93efe33b5f.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 60472,
      "format": "webp",
      "sha256": "b2e3776e0ecccd692215d4220c6507cc82f6f554928b9d4d2366853d8270d188",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.966419534763505
    },
    "preview": {
      "src": "/images/atlas/previews/9dde899157e2b39afdc4eb07.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 103792,
      "format": "webp",
      "sha256": "3e393fb240bdfef816bc97384a7eb66ca36103e68204aee857d0378267848eb0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9975707163207164
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1a38919a"
    },
    "sourceRelativePath": "liver-meridian/internal-route.jpg",
    "sourceSha256": "6a33d08a1c6a6e0239e0711aaae9f1bafb927c6e933905a2371b8dc7c62aac11"
  },
  "liver-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/2ea71cefc07ef34d0e0c23fc.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 101462,
      "format": "webp",
      "sha256": "33dab130785729782b3b38f3cc4cd5b74d642986996049b6810909bd28e414dc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9924611731229379
    },
    "preview": {
      "src": "/images/atlas/previews/4a63a3f9186fe1b4bc7705e2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 174288,
      "format": "webp",
      "sha256": "f7bdf695f3bb56f494c1fe128ccacfb0f4c02180036ee0ea442dd687e9e04942",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9976844385371713
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "56939f9f"
    },
    "sourceRelativePath": "liver-meridian/local-points-1.jpg",
    "sourceSha256": "c8c3ed76a0cc3ecf994f57dfda6b526fd742167d9f4858bf8d616d991abc473c"
  },
  "liver-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/3d8aae63cf35e69ea286f175.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 87586,
      "format": "webp",
      "sha256": "556c7b861b7070c0f6213d1ff488050a2079f9b46b8abcdb37dcef312b67dd26",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9899398442376875
    },
    "preview": {
      "src": "/images/atlas/previews/cd810873afc1854e38b32a08.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 143598,
      "format": "webp",
      "sha256": "3c6e83d21bc72cf5777c94963f28f2d8516af2edcbff396693ae71513c80fef9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9972650978407558
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "6e4398b0"
    },
    "sourceRelativePath": "liver-meridian/local-points-2.jpg",
    "sourceSha256": "f2c9db22001dfbe900efec3d4a6e6b814967f376814d1d121f7ae3539d7db067"
  },
  "liver-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/1ddd7459bdb423565e066af0.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 123748,
      "format": "webp",
      "sha256": "0e93b22fea1a1d71f91d598363c52f6e4bba3151ae359e00f7e4f3407b4b4150",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9859235147053084
    },
    "preview": {
      "src": "/images/atlas/previews/536beea5951203bca37ae858.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 209594,
      "format": "webp",
      "sha256": "8993638f690557e84be4b02b7b46c776dde9cadb33fe670ccdf6629b9b9e5841",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9987211505196066
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "56cd144d"
    },
    "sourceRelativePath": "liver-meridian/local-points-3.jpg",
    "sourceSha256": "75343238844223dcad8804d4c312b4c6373a1a054d7f3842fa8cea9ad4f31b75"
  },
  "liver-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/564b4552635c58ab3dd309b6.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 210024,
      "format": "webp",
      "sha256": "65f9c27238dcb9a6135ecee9f0422140273e080cf133327601cb94c470c8ff26",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9972539615708662
    },
    "preview": {
      "src": "/images/atlas/previews/4289c8775c89b8dfab3dd616.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 348646,
      "format": "webp",
      "sha256": "80288fea9fbbbea97bb0d974c474fc3138484345f895ec27f16b8086d21fd797",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9990874054113333
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "344e4c59"
    },
    "sourceRelativePath": "liver-meridian/local-points-4.jpg",
    "sourceSha256": "e65bffffc4e3344970cbf001480ee833f5236229ab38fade7231e2f713008219"
  },
  "liver-meridian/surface-internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/59a42679140018139c82655c.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 60572,
      "format": "webp",
      "sha256": "a7cd9433a0dc98e3cfe618ab7305729e14314ffef7aa9ab0394a5f4b05aefbed",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9867805311303763
    },
    "preview": {
      "src": "/images/atlas/previews/25f04669ceeae68d37c0c32a.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 103700,
      "format": "webp",
      "sha256": "0e9e39b41356dbfcb1523aa71882d3bac45a96c54e4c7d8783d0dfa7e1e3b637",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9976820054945055
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b1fe6974"
    },
    "sourceRelativePath": "liver-meridian/surface-internal-route.jpg",
    "sourceSha256": "9f50f4c746b84f4130592c7743ebc0c61bf9129e6d8184dfd5a33d0333348c3e"
  },
  "lung-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/8e73b8b79b154b92fc74dca3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 87718,
      "format": "webp",
      "sha256": "a0f5087fb41ba21e55a402ff68c41238106da60f7f24e6f7411e372c66034717",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9862373285254478
    },
    "preview": {
      "src": "/images/atlas/previews/fc4d51fd7b32bb8657a31a91.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 147290,
      "format": "webp",
      "sha256": "9dbb8ef139f2186583eff323b7bfa8d74f9381d59dfd676018e18438ee001d93",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.992451329616449
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "93f6791c"
    },
    "sourceRelativePath": "lung-meridian/external-route.jpg",
    "sourceSha256": "e9392e45245da4ae761df0442bf5b7019eedada006fb5a703c6e476494be31dd"
  },
  "lung-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/5c34abe7384aa06aedfc1208.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 118814,
      "format": "webp",
      "sha256": "75df946cdfcfaa50844e8bcc24d0bf3046aec3b7e689ecf486163475c5006b15",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9886987517831533
    },
    "preview": {
      "src": "/images/atlas/previews/a93332306f9f19e689dd0eac.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 199780,
      "format": "webp",
      "sha256": "b98eefe89dce6ccbc14a604e37f7c265052aef87af20e6550d3d5537f96c77bc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9973073495132319
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "32cc175a"
    },
    "sourceRelativePath": "lung-meridian/internal-route.jpg",
    "sourceSha256": "bc7eab0e90d5dc75d1c294bc25fc7673c0af966f63df6f009042d764ef6ad92a"
  },
  "lung-meridian/local-points-forearm": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4df2a61ec3caab37b16dfb0d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 83060,
      "format": "webp",
      "sha256": "b1da1b1df8cecd3008f03d6d720cac47725bfb8abd2b5de486db2b6d30759b25",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9898250407388948
    },
    "preview": {
      "src": "/images/atlas/previews/d7f6e0ab2f1778a72259cb50.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 138100,
      "format": "webp",
      "sha256": "457a57d871852c65c716150be2782f8abc2bf80e2131d01e8692810dbc316a3d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9995421245421245
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5e8eb721"
    },
    "sourceRelativePath": "lung-meridian/local-points-forearm.jpg",
    "sourceSha256": "0fb81f05b5f24d4e353493766c5cdf7ac2f458b45a6efdbf50e873328135e8c1"
  },
  "lung-meridian/local-points-shoulder": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4ac86db0b998a133f47fb57d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 148148,
      "format": "webp",
      "sha256": "6b04986c29c5e366d2a07e8d50600b43206b837e653c5f71209c3e83f642355a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.995774140389525
    },
    "preview": {
      "src": "/images/atlas/previews/cd80f315f0b51faa48b1fa24.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 247810,
      "format": "webp",
      "sha256": "b39096d4ea7cf41bdf6830e306c409059c369207e44fdad00c774cbf359daeb0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9981791146894385
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5704d8d2"
    },
    "sourceRelativePath": "lung-meridian/local-points-shoulder.jpg",
    "sourceSha256": "1949ecb0085bf9329cd620ed4a977aef6e00b28c83af95123316b6ceb3ea046a"
  },
  "nine-needles-atlas": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/d08711c2e91fb1899f2e0d71.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 160624,
      "format": "webp",
      "sha256": "7c81cedaf02d52efe9b7301c3dedd1e00e75e52195c3fae9abea9b67ff70f792",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9641805586502419
    },
    "preview": {
      "src": "/images/atlas/previews/197b49fa6aac9ee6bda9e4eb.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 310560,
      "format": "webp",
      "sha256": "089581cfe437903104f87b1e29ed63e5cef974cf948678e3cc0159c222ee020c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9973621600574122
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "3e70b7a4"
    },
    "sourceRelativePath": "nine-needles-atlas.jpg",
    "sourceSha256": "5b72f6c48b82ad673e7502d9b320367384dcbe69e10b06a050294e913373e017"
  },
  "pericardium-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/6cb32b0564b6b02dec8d79bf.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 81078,
      "format": "webp",
      "sha256": "8bfdb946cbe12a57b77b8f0aa05dc01bf4842097dc21732522f159ade9a48c99",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9862970981194764
    },
    "preview": {
      "src": "/images/atlas/previews/8b0c32fdd682259d38e3d280.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 137106,
      "format": "webp",
      "sha256": "e3cb222488e910f144011d7a06c8274c15b93dcf4baeb22b25595a72ca67f14d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982286634460548
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "d75d25f7"
    },
    "sourceRelativePath": "pericardium-meridian/external-route.jpg",
    "sourceSha256": "25a4a5abe489ad8a8ead0dc684da76ce1beb7516f6ab18d141b10bd7b6ebaf39"
  },
  "pericardium-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/648683259d06166b62e9e861.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 97642,
      "format": "webp",
      "sha256": "0ad71d88c29f6eb047bba3d08a354eeab58b470343185b593f1ac45cf603d321",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9924426035306445
    },
    "preview": {
      "src": "/images/atlas/previews/574792cdf7d6151f8147b6c2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 166242,
      "format": "webp",
      "sha256": "d74f0f9b5d03c20c8644b0ede8c14f249d6398a61be93eac1bff4bf97b1d377f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982701509017299
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b24438e0"
    },
    "sourceRelativePath": "pericardium-meridian/internal-route.jpg",
    "sourceSha256": "49ed4bd79135cbe1aeb560811937c1ce7a888b5a799f55f4af3078d0f6d76913"
  },
  "pericardium-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/c99b852a51423f669ee3b17c.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 189792,
      "format": "webp",
      "sha256": "fc72a9d202ec82e5b28763517c2f659b9a1e849dfa8398e2a456a7cb8e6b700b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9979416247236871
    },
    "preview": {
      "src": "/images/atlas/previews/484f6fd33be9960b35352291.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 316602,
      "format": "webp",
      "sha256": "9726026152d2360c10bb1d15b8a405d60fd26b65abcc6bb54dd49e6d7b54c872",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9983812063603167
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "42ccbe8c"
    },
    "sourceRelativePath": "pericardium-meridian/local-points-1.jpg",
    "sourceSha256": "36ec0c399b206bc266d9e9ca1eba385ad3405c76137713a1c155febd7ff8699e"
  },
  "pericardium-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/ca625c2659780f251c313377.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 98414,
      "format": "webp",
      "sha256": "3b0af44b6982596f01beed2903023c62d97a81a05b664c05c412cce9bb429964",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9865285090811806
    },
    "preview": {
      "src": "/images/atlas/previews/cc0af7b50b5b713a5893d149.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 166568,
      "format": "webp",
      "sha256": "f531def710c096e2870e41f4d6025d5fba80f02ae2711d0cf46deb9856a279ea",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9983009071824861
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "3fadadcb"
    },
    "sourceRelativePath": "pericardium-meridian/local-points-2.jpg",
    "sourceSha256": "b9a52c0fc05506c7397c0252760f2b702fb9e9df1a31cac42bc0a6e87be3fb3d"
  },
  "ren-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/a7dedb5f0e1ff60ec18179ce.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 78984,
      "format": "webp",
      "sha256": "4b521c677fc2671ed861dfdfbfd7e7ada46d26dbcbd2988789a178dce7b9c4e2",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9890665232513061
    },
    "preview": {
      "src": "/images/atlas/previews/5dd4b6248048459c63f14122.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 132802,
      "format": "webp",
      "sha256": "42c4c91cbad877c0ced6ffbeb02205833e637e8bddf6201ddb90a07eab5b010c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9993990384615384
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "45d96407"
    },
    "sourceRelativePath": "ren-meridian/external-route.jpg",
    "sourceSha256": "8db8660838049e0a5ebe046836d16fd863c7a116dc2af0791614337d82094858"
  },
  "ren-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4db82a0e3ba99135f6650211.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 80872,
      "format": "webp",
      "sha256": "6215478b67205a4bdc31f593676326f6f69bb9bd92dd01e92133d482ad386152",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9855505963686253
    },
    "preview": {
      "src": "/images/atlas/previews/6458006594ea198c2ad1806b.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 135348,
      "format": "webp",
      "sha256": "3268b4e66ac2e7546b2653ea1a569f02b19eacff7af9b4b73a211f8518e68f3b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.996626682321529
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "cf4a484e"
    },
    "sourceRelativePath": "ren-meridian/internal-route.jpg",
    "sourceSha256": "a84b06963030a88e83eafef7119f22f6a903a2dec50563bab555bb78205f18a0"
  },
  "ren-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f2e2a60fd55e36bfdbe54638.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 77192,
      "format": "webp",
      "sha256": "e554508b184731f042d3cd4a45a0ccaf7d01e8ebf0e12b130e41d8b9f981196d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9757478298036221
    },
    "preview": {
      "src": "/images/atlas/previews/0895474991ffe972099a46a8.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 146934,
      "format": "webp",
      "sha256": "9110cc36664887dbebcef0d89239fb206842012cb80eb3fdd72f67785ee37e6d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9966180020064315
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ffd5fec5"
    },
    "sourceRelativePath": "ren-meridian/local-points-1.jpg",
    "sourceSha256": "dd955b245d4163aceb7f79c8635375d341a11632d7d50cbdecfd4f9ea8a8b0ff"
  },
  "ren-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/3c90aa31f05ca23d9615d38e.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 276968,
      "format": "webp",
      "sha256": "fb27a2fe6a8b978109e10cf64991a041b509dcee50820c7b082ac104a311cbf2",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.998524868056118
    },
    "preview": {
      "src": "/images/atlas/previews/d8e1c68012b2c578e9826d2a.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 448974,
      "format": "webp",
      "sha256": "d257e87e343a79a9c6746ba03f187030f50e5aaa27fbf2ed23f8b4a12c8cdcbb",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9988649900235267
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f176bc82"
    },
    "sourceRelativePath": "ren-meridian/local-points-2.jpg",
    "sourceSha256": "28adf161c40d05f003abf9bb3ce383e9afc613320c4dc37465b6677837fdb109"
  },
  "ren-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/9fe53c14188de0770cd5f4f3.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 141450,
      "format": "webp",
      "sha256": "e8ca28e2e47ea6d30e1f0d042efd917cbbcfa7827ea694e119618210d3fa2292",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9916027142909349
    },
    "preview": {
      "src": "/images/atlas/previews/2db87b6bd662c49ac850f1fc.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 238062,
      "format": "webp",
      "sha256": "fd985eab2af5e62924de6f4a0e4953129e5b582d12fa5ec2f7e8cbb71b47477f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9995629370629371
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "2e97068a"
    },
    "sourceRelativePath": "ren-meridian/local-points-3.jpg",
    "sourceSha256": "2c3a2030d27e917d9047f740bc1197ef96d53b28dae9b96ce6a40bb4d959249e"
  },
  "sanjiao-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/fd4355c56fc5f1748746e6f5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 180940,
      "format": "webp",
      "sha256": "867b05e00c54608d9f6be2fcbfe1923aaa09779af079e1dff7b94bdc25fa70dc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9944619191983939
    },
    "preview": {
      "src": "/images/atlas/previews/30c32a749e93b1ffb34ed837.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 297516,
      "format": "webp",
      "sha256": "6bad2863d2a6ed645aa75cf108c9158d7a70e1061f324b31e5618fd439be0913",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9976762341461849
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "c8362519"
    },
    "sourceRelativePath": "sanjiao-meridian/external-route.jpg",
    "sourceSha256": "351db188fa249e547b38fa7184c687bff42d83f956098d5c85943e9bb3cfbb35"
  },
  "sanjiao-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/0fb4c34d639398f674046f1d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 186528,
      "format": "webp",
      "sha256": "713fb2d0d98140e4a9e69ca752143226bda1688e8e1d036d1b5ba9966dfaa3ae",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9956709813386715
    },
    "preview": {
      "src": "/images/atlas/previews/cd7b59f1363e466320cc2d00.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 313110,
      "format": "webp",
      "sha256": "4f497469688a36003d17e0cc4ae4f231da8f3fddaec52b8897208ab153114964",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9981390288455506
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "08b2343f"
    },
    "sourceRelativePath": "sanjiao-meridian/internal-route.jpg",
    "sourceSha256": "f53cb8fe70f7c2a41cd0eff74e9bddf58cb8185e1ca423135f06a8a12c0b42d7"
  },
  "sanjiao-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/374994b407262a46d7b9358d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 81078,
      "format": "webp",
      "sha256": "dcb0ca1f94ef0970fa84db0b993e5b306fce3eb500da93e7aee05897b2a2fd69",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9738784038344265
    },
    "preview": {
      "src": "/images/atlas/previews/dc896a0a5a880059dc437367.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 137060,
      "format": "webp",
      "sha256": "b20325be56fe90353b429b9bc26d0c9a717fafd0f1bba14628f144d20dadd438",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9985735418427726
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "74d328ed"
    },
    "sourceRelativePath": "sanjiao-meridian/local-points-1.jpg",
    "sourceSha256": "227307f302678d3d57fb88d66d6d58b2dc10de05976be8ec5d4bc4bd6814ba19"
  },
  "sanjiao-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/16caf2704089ea4b5eacfb9d.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 198916,
      "format": "webp",
      "sha256": "ba5a258c235d3be949efa555a3a9fef923884c53c08fbeec9a2f6284eb5a6aca",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9958150726222103
    },
    "preview": {
      "src": "/images/atlas/previews/4ef5dd20ab5ad3c3626d528f.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 334370,
      "format": "webp",
      "sha256": "50fba5345a6f2e2bdb6095d60bf46e259a090fef3fb7a6d5b18ac1491eaca795",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9994383394383395
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "25c83bfe"
    },
    "sourceRelativePath": "sanjiao-meridian/local-points-2.jpg",
    "sourceSha256": "aed4b7a42f2520c5be40abee7e9a35cf7a5ed389f75d5d2e84261153d5c15c3c"
  },
  "sanjiao-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/c4265a0f40bfc9416253adbc.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 133634,
      "format": "webp",
      "sha256": "a937545901a430ba8eaa3964aacc570ab009a18a735645a2f1586ecc5d72750c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9929633559056723
    },
    "preview": {
      "src": "/images/atlas/previews/68ea9a4db25dd28d60cf0f1e.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 220306,
      "format": "webp",
      "sha256": "19f17f912693a8e159479e0814fdc169e6d8ab5d6e97218ee45d757cbbed96d9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 1
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "611962e4"
    },
    "sourceRelativePath": "sanjiao-meridian/local-points-3.jpg",
    "sourceSha256": "8a40b6f92d50ac29dc3d487c69e6db20b118c6f51b9e8b8ace857c0f552ac4b7"
  },
  "small-intestine-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/44b94d867b2294b035cf033b.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 137818,
      "format": "webp",
      "sha256": "3d40d3512cc6c4cf91711600c026c0a6141f4d029f81683b3392f75e3671233f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9960079417164415
    },
    "preview": {
      "src": "/images/atlas/previews/61f32bd45ce334f95bf489fa.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 234962,
      "format": "webp",
      "sha256": "0e82acc1037faf6715dcea767efc6c61a5c4802ecf6d4eaf79df0839116c7067",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9988656995998778
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4f6a00c3"
    },
    "sourceRelativePath": "small-intestine-meridian/external-route.jpg",
    "sourceSha256": "f7b64778263d51383f2100b89f538978096486fad5556a28157d26c075744670"
  },
  "small-intestine-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f58b93302495dbc58c8c55ba.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 163702,
      "format": "webp",
      "sha256": "01af347dc427b180f6d38210967eb844c8961d4c1326c51c1b7532f873a9904d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9920733887083373
    },
    "preview": {
      "src": "/images/atlas/previews/bd0d5f034b014816b06ec0aa.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 272172,
      "format": "webp",
      "sha256": "6ef61893e7fcbbf2df193a86e2e61ec0513e0266bcedb8db78f62d935c0d3860",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9969925010571662
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "f79b3e32"
    },
    "sourceRelativePath": "small-intestine-meridian/internal-route.jpg",
    "sourceSha256": "c1341ec4bbe0a91df9fa29fb831c06c2e03e4c36f596fb715a7b8227fdebb658"
  },
  "small-intestine-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/92bda28784308513d29e086a.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 73352,
      "format": "webp",
      "sha256": "c9a89a524a378ce90bdff1c1d3da96d36bee92483e9755ba6c3d1a088df2ea0b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9842347591059172
    },
    "preview": {
      "src": "/images/atlas/previews/fe284421e962a0f6fc02ecc2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 128758,
      "format": "webp",
      "sha256": "f25d6eed1381fff25d3017b41ec2a83949d87eb03ff79536d7e5a33c7ca6b0bf",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9972596938367418
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "7cce6630"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-1.jpg",
    "sourceSha256": "32bdd6752f280bfa39bcd6d63c66a567f3a3f71c40d795ed7ae4a63c2e8970c1"
  },
  "small-intestine-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/0b884e8f2da7d07ed4dcce10.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 65232,
      "format": "webp",
      "sha256": "4efce57c8cd38619bc74dfeee987a12f6f01146868be300cf39d0e01695670bc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9901508651985341
    },
    "preview": {
      "src": "/images/atlas/previews/59ed1340e0797897ef985cd1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 113382,
      "format": "webp",
      "sha256": "2e0db45dfb9be4c19bb5687ac794091bd9f1e8b78bb06fbaf13bf09125941363",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9992603550295858
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "2bcc8c48"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-2.jpg",
    "sourceSha256": "dc6e72ba898fc328c60ee05df82a68955508f01045d1607ac8655df2f6f22a41"
  },
  "small-intestine-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f3a1864e781c5ec22a67858c.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 45758,
      "format": "webp",
      "sha256": "8d252d35128d31d148b2853c5876e405468438f6e9e4c445bef6d550d670508f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9845491684736778
    },
    "preview": {
      "src": "/images/atlas/previews/722a3e65d447b4d7567c3ef4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 83348,
      "format": "webp",
      "sha256": "34fa271a2fe3bb43f77279d291745c00dddf2d6ecb21f2eca18cd8b56ecbb937",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9971084546084548
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "4c7b6b1d"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-3.jpg",
    "sourceSha256": "9050ab916ed5270d163608633121a090a1a3b420735555f63fac14f847e5a1dc"
  },
  "small-intestine-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/247ad4ed38f42761941936ae.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 95660,
      "format": "webp",
      "sha256": "0f3fce66f7fe823a3caf61b678a51e5cbf0c90ec02cf285a9960663054c790a3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9920511170051304
    },
    "preview": {
      "src": "/images/atlas/previews/8a463b0d2da41107a6ce2832.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 157930,
      "format": "webp",
      "sha256": "08eef8dfc5d6b9bf1e700fa716a0501d86fd89c9705254d3eb0ce46328f080b6",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9983490277607925
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "accb3aa3"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-4.jpg",
    "sourceSha256": "728a0d7c56b4a55079f512516d1256717b92f23608a59eba685a7fc018f853b4"
  },
  "small-intestine-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4be566c9ad5dc24004933e8c.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 138782,
      "format": "webp",
      "sha256": "a4bd73149130091289685182a45150be58c99d23eeb738920dbed1747bc2c772",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9933326587988118
    },
    "preview": {
      "src": "/images/atlas/previews/55edeb815831974472ef2a96.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 230876,
      "format": "webp",
      "sha256": "215e4efbb6d8d8827a50794864070ba3271e927b37be97a2570e9e49eec7a0a8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9987422265382792
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "65c8d120"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-5.jpg",
    "sourceSha256": "01d1226cb1384a344ea65937cceef8182a47e752c554694abff66a8eea14a4d5"
  },
  "small-intestine-meridian/local-points-7": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/d24b61ddaf7855c6e71de780.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 122622,
      "format": "webp",
      "sha256": "7c5900a5657480106d165f39f854b4695045e2cc07e4d97cff21693c7fdfcc8b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9924377316433879
    },
    "preview": {
      "src": "/images/atlas/previews/1607ab390307af7363041039.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 202814,
      "format": "webp",
      "sha256": "62b5d4b88d4cfcb1b53c8fc9b27ae772aa2ed89a23de24876a664da851362480",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9984341657405058
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "7904393e"
    },
    "sourceRelativePath": "small-intestine-meridian/local-points-7.jpg",
    "sourceSha256": "132d4990040bca1e6eda0d775173850178f3c23b4fd10fa1a43458cbcbf170d2"
  },
  "spleen-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/10b86f21a9988c2697949d85.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 55676,
      "format": "webp",
      "sha256": "5883741098aef3dab2e75c58b940ad39b7abca6fc5200956d81ee3990a39c506",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9790358747478065
    },
    "preview": {
      "src": "/images/atlas/previews/b440fc73335f46fddfeb9124.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 93462,
      "format": "webp",
      "sha256": "625099e3818e8708ec0495fd228d046076da39dee0097cc024fafb7098407c39",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9955990647838473
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "ad64e8d9"
    },
    "sourceRelativePath": "spleen-meridian/external-route.jpg",
    "sourceSha256": "4885cda21d7227cafd27a28b30b296f89a5ac19069c7018a4317c17ff2c61b4a"
  },
  "spleen-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/f0dcca312b8664927febcf2a.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 59086,
      "format": "webp",
      "sha256": "0724d9344311f8265e4eec4a4de82e3f625a19708a5d8cbc05f6a5528b803a1b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9766531658013323
    },
    "preview": {
      "src": "/images/atlas/previews/6c6ab23d573ded0c7f468897.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 100088,
      "format": "webp",
      "sha256": "c35b579df94246f7e7ff6813bb2d714b9d406ef82baa79f57e423a117e60b546",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982023411371238
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "1b121b1b"
    },
    "sourceRelativePath": "spleen-meridian/internal-route.jpg",
    "sourceSha256": "12d1a3fb3d5ffc678debc5f06af5631ecb8dca3cc8cb2bf1ae2372a21634e8bc"
  },
  "spleen-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/fd3500181f5b4210e0d567c9.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 95434,
      "format": "webp",
      "sha256": "33867846586c87458835e0a92cf93c842a68bff86bd3da033ee7c73e070e060a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9850722603793904
    },
    "preview": {
      "src": "/images/atlas/previews/9de9671da7adefdf93ce69ad.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 155272,
      "format": "webp",
      "sha256": "a08160f96c04121a2e7176a08396c3fc17587e7100f191e61a4e334bd9920a0c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9961064299860032
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "98e739de"
    },
    "sourceRelativePath": "spleen-meridian/local-points-1.jpg",
    "sourceSha256": "b558dc47dc731176dd43596732f31e70aad41155ec0223990b4ed2919ff1e27a"
  },
  "spleen-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/c777d9c75056b30e9763168c.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 116094,
      "format": "webp",
      "sha256": "fd462b06dd81ae9253f40bdc39f27c50034e8882a3f5b91b75833261712467e7",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9920258338862505
    },
    "preview": {
      "src": "/images/atlas/previews/f3b22ee8ec85f6bf45298b19.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 194340,
      "format": "webp",
      "sha256": "790209db406eb391bc3df0ba59c699f98e24587e3c217945f70f1c047fa67372",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9972559259260119
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "e21a855d"
    },
    "sourceRelativePath": "spleen-meridian/local-points-2.jpg",
    "sourceSha256": "590ae4e8f29799a5895131fc05c0f3b7e47a68b5195dd3685e37ee48af4eb227"
  },
  "spleen-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/4b126b29a5dd4a8e1c551087.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 164324,
      "format": "webp",
      "sha256": "8897fbe6adf306e8d61fd51a2547fd377042ea086b8922cc417d1084a9778b1a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9942637454187071
    },
    "preview": {
      "src": "/images/atlas/previews/a077b3e2d966fb160ed3ebee.webp",
      "width": 1074,
      "height": 1440,
      "byteSize": 270146,
      "format": "webp",
      "sha256": "9d1ce99513f57c662aee7c9ff8cc4ab04e1c12445f8e334286f8e104fe58b9d6",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9979459123900155
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "142f4e08"
    },
    "sourceRelativePath": "spleen-meridian/local-points-3.jpg",
    "sourceSha256": "0b58c07a47c7ef8b0c5394c06e5d4339c73641bbcce6962ddfbb8473f396797d"
  },
  "spleen-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/18b20145e4eda823a05adecb.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 94800,
      "format": "webp",
      "sha256": "5095f0b7c3c8b07fd098f4ab5cda781bd0f120a2bebab8d4712f244c84ab5496",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.993421194190425
    },
    "preview": {
      "src": "/images/atlas/previews/b08abdc13802bfe222bc42a0.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 159190,
      "format": "webp",
      "sha256": "f88ef2312ad824eaefd75211ea92d8785d9e4a85bee826631868c1e7c0874571",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9983997351285729
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5016837f"
    },
    "sourceRelativePath": "spleen-meridian/local-points-4.jpg",
    "sourceSha256": "74112ed91723e77bedf488d10df0b95015d03bd46a83efe01a795105c6207b98"
  },
  "stomach-meridian/external-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/0f6e69ee0315b8b8e403a90a.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 87858,
      "format": "webp",
      "sha256": "cd1840bb940165b08ca079edb5e835ca519d3d9226cb60879f73c46c51dbf810",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9862383986863658
    },
    "preview": {
      "src": "/images/atlas/previews/89a82646dd8c4ba7ee27b6a6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 146586,
      "format": "webp",
      "sha256": "7e62ce415dd1d61e4a4eeefbe623ff04d265f706047676a57ad533a7ef834f94",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.99693647737126
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "41621dfa"
    },
    "sourceRelativePath": "stomach-meridian/external-route.jpg",
    "sourceSha256": "d0de9e83e77addb2d656103af22687cd5cec90c1c7769ac6bee0fa2632aef511"
  },
  "stomach-meridian/internal-route": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/1fe51249ae0460874c905ce5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 103148,
      "format": "webp",
      "sha256": "4ea09e7b70cfd2ca84367f48401f50702ed05c257ab2679c9783c96c3ae6962f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9914122099719928
    },
    "preview": {
      "src": "/images/atlas/previews/e8ea3013afc283b08f981013.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 171728,
      "format": "webp",
      "sha256": "da50bb38c92070387ed2ecc93309bfc27f890d55dbcd605c77b80bade12e8de1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9953159340659341
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "2b8ec1de"
    },
    "sourceRelativePath": "stomach-meridian/internal-route.jpg",
    "sourceSha256": "044b4087d2f73ba38f155815fbca3199d66cba19378344dd213b5390447a5b2c"
  },
  "stomach-meridian/local-points-1": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/b1ca02d0c0c11dc91e3632f5.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 141888,
      "format": "webp",
      "sha256": "14cd76b3b5837426c005613c253112eae23481e37a678564900a8c7529884a14",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9916757370696576
    },
    "preview": {
      "src": "/images/atlas/previews/5c624005728c0dc0f8f93e20.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 234808,
      "format": "webp",
      "sha256": "d138514757c85cdb34b4d03bef3ad706abef7972100fa066ff233cf2d87db4b7",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9970837414424701
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "8f67fadf"
    },
    "sourceRelativePath": "stomach-meridian/local-points-1.jpg",
    "sourceSha256": "e3a0f5f94279198ab092e64f418458893397411d18036aac53ee0217237421c7"
  },
  "stomach-meridian/local-points-2": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/68cc65a3443e6622c9bf73ac.webp",
      "width": 955,
      "height": 1280,
      "byteSize": 140310,
      "format": "webp",
      "sha256": "0ebe78936f2f0be8e2be96186e7fd4c6eb9dbe46a53e4e24d7a529c2b0c3dacd",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9908630345837193
    },
    "preview": {
      "src": "/images/atlas/previews/8c60e07a4caf053e9cf6aee1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 229780,
      "format": "webp",
      "sha256": "9a7fc7394cd05e6b8b8c1e73359c7b6d43fd6c5edd589ba77c2f890a85d7669c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.997863893644905
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "9c38e751"
    },
    "sourceRelativePath": "stomach-meridian/local-points-2.jpg",
    "sourceSha256": "bdaa919b16f0f86109e956e53da9fac4d508cdaafd342e374b7bdff5391a4aef"
  },
  "stomach-meridian/local-points-3": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/975b9c09b2d0265d71a9331f.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 96718,
      "format": "webp",
      "sha256": "d1fa67311a3ea44b54d151579eb1f12a8f47dc3e96c5aacb175a4076f9b81b0f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9964348329732945
    },
    "preview": {
      "src": "/images/atlas/previews/5871fee1ca1f372972f9802c.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 158310,
      "format": "webp",
      "sha256": "b00c807905c6b96908e9169ced2fcbfa8c33307bc4fe67dd992d72a2248619f1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9969546087774959
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "b4bd7866"
    },
    "sourceRelativePath": "stomach-meridian/local-points-3.jpg",
    "sourceSha256": "0edc2f0389f097cd78e3be44beaacb8edd1b657b3088d2aecbaf9f8c64cb7323"
  },
  "stomach-meridian/local-points-4": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/132fd9d61bff542727e0a5e2.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 146816,
      "format": "webp",
      "sha256": "7cd2c2f8f29033b1cdec81a8acca7f94a1763fde162542460a5af3af02099af0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9875392231437127
    },
    "preview": {
      "src": "/images/atlas/previews/54b3f491f6d567f0cab804c6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 244266,
      "format": "webp",
      "sha256": "37dbc9031b861819cffba23e4732319ff9451939eb398c5fec6f4c0f4d278a1d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9981919651894839
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "9e9a4c5d"
    },
    "sourceRelativePath": "stomach-meridian/local-points-4.jpg",
    "sourceSha256": "a79e4ae08a88347c122292d35f8f9428d64f18cf99270896c4ef84d947c4bbb0"
  },
  "stomach-meridian/local-points-5": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/010ff41c021bdb147ee133c4.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 132632,
      "format": "webp",
      "sha256": "647514b0c6df9f2aa57bb1ff79fd02e869636800c6d6220b08dfbb741eea64d7",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.986482764954264
    },
    "preview": {
      "src": "/images/atlas/previews/e255ba93c0c6606fbb2bc489.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 221350,
      "format": "webp",
      "sha256": "ccf24e72a9d368b91b7081c6be3ab8a6189300268f3aca5cc3a78ec9c74f96bc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9986950549450551
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "43e4717f"
    },
    "sourceRelativePath": "stomach-meridian/local-points-5.jpg",
    "sourceSha256": "b49afb49ade2aa6e4a2ff1fa16dec05eca06dfaf11fa23ab4c7d1d5122cb24ab"
  },
  "stomach-meridian/local-points-6": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/6a893d9002e1a31559717918.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 122574,
      "format": "webp",
      "sha256": "0d460a9e6aa5d17977172edf89167236d0a43354baa008717a11e946121309bc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9861717588496852
    },
    "preview": {
      "src": "/images/atlas/previews/05f1d614233197a86a285170.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 204960,
      "format": "webp",
      "sha256": "800f9c0fb27979ec3ed980063689e83f03b07d99d204323c917550bd55ccb738",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9980096962239818
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "0f8f7a5b"
    },
    "sourceRelativePath": "stomach-meridian/local-points-6.jpg",
    "sourceSha256": "2ddbee24d6a8ae5c093e38daac30f673e814207c1ae7d529dd3799b9e0ea7041"
  },
  "stomach-meridian/local-points-7": {
    "thumbnail": {
      "src": "/images/atlas/thumbnails/298cd5fc1206a28da6d7b4a7.webp",
      "width": 956,
      "height": 1280,
      "byteSize": 133272,
      "format": "webp",
      "sha256": "c84b54f67cf6ead2ba2174c532512c3e68c5e218c0748bd788d44a1c85c3a408",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.990071024108482
    },
    "preview": {
      "src": "/images/atlas/previews/c349f8bc3094c7fd0e1a2d84.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 215812,
      "format": "webp",
      "sha256": "0331b7b2a0037a5d2ee8f6ff9d6536293a66b2ba9c888ecce6ab3a2b54ec0c4a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "publicWatermark": {
        "brand": "小钟岐医",
        "domain": "xiaozhongqiyi.com",
        "opacity": 0.12,
        "position": "bottom-right",
        "scheme": "xqy-public-corner-v1"
      },
      "watermarkConfidence": 0.9982875889101661
    },
    "watermark": {
      "brand": "小钟岐医",
      "scheme": "xqy-dct-qim-v2",
      "id": "5793aad9"
    },
    "sourceRelativePath": "stomach-meridian/local-points-7.jpg",
    "sourceSha256": "80658c6f79764ed0cf582f71d8ab10eabd7693d12398c73223224ef1a9382f61"
  }
} as const satisfies Readonly<Record<string, AtlasGeneratedImagePair>>;
