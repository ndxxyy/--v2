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
      "byteSize": 89108,
      "sha256": "b3b774c726cabb4ceb308e599928a66357ea55a17d6ff225d756c39d0d223f6c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9859863508261216,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 148760,
      "sha256": "26ced3f8b53cf7a1712dff49b37843d89e87809a54062df3871640cd9f473549",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9988495879120879,
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
      "byteSize": 114764,
      "sha256": "f703ab1ad270a93e7202ffeb13c74dd60cc0fc256d719d4c9e946c70a69712f9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9855150125217478,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 192220,
      "sha256": "3bb78f3eed659ae8c1b88214317f6276e0dde24d5692e5b607f0147c2f612a2d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9963095238095239,
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
      "byteSize": 103380,
      "sha256": "3ec539be288cac64a9671a0f1030d2f4d2d3159227bb96664dcadd9b070cb7f0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9888616054767729,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 169056,
      "sha256": "351af9f76dab57557583928b99af0e482087026c5dd360968cd70baa12dbe3ad",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9975686746706424,
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
      "byteSize": 189032,
      "sha256": "7fab3275e0274a17005d7216089fbdfdea74848e076bc9d6c2cf7e08e9c8c168",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9980174861721878,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 306534,
      "sha256": "c2d53db04ff4bbf56f7959151af1c7867d30c02f96da4b4244de884c0314b9b9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9997129735935707,
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
      "byteSize": 193246,
      "sha256": "9d008db8f0bf95623f7f3512a1fe1d18d4d545fa7b6a78391e702ef6388c1c29",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9984896012245569,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 321984,
      "sha256": "7c9da14dc0df7c5afc59cd4a32c7c9e9076ff4cc0960d7d50c78cebe5ceb28da",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9996503496503497,
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
      "byteSize": 156086,
      "sha256": "54704a6233adbf1d8d813ba74d5cf15ff3ca4bf696347f6f1f8f1296f200822a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9960436085799397,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-4-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 264616,
      "sha256": "e832271786372ed8dc7221b03baa8f68f387cf797ff89af090de10c1187a2a42",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9990537240537241,
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
      "byteSize": 260172,
      "sha256": "13bb527f64d8262ab11791433e62b52e3f6e7669d5b8da6865ba6ae7fb17632a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9972637716496633,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 432244,
      "sha256": "9f2b23034b7b6e98896dfa51a0cdb694f6a5d2dd2be33aed1f9e97b5826afb07",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9989106164481769,
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
      "byteSize": 116128,
      "sha256": "b0a94cd9175cc4ac469a89927a2631dc3c1ab508bb54972c5639c3f0e48cc68d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.982673714117473,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 195450,
      "sha256": "e0486c66730b86cd4697dc5a66f8650d2c9118e3c10677acc2b42d2707a74e98",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9982027996553365,
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
      "byteSize": 96926,
      "sha256": "6dd7fb5f85059779c8df80fcb2ea2f238040de9832b69f9ee6f53103ced555ae",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9842535073151196,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 162814,
      "sha256": "ab4be9c38b6d060c4cf1379ae2c0d2699f9d912534d3bbcf0602227593d00f7d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9981731741463794,
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
      "byteSize": 78606,
      "sha256": "69d001b7ad0afced42c839e00e4c3a0de6fdead21e885eeec308467fc9575a95",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9643445080665047,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/bladder-meridian/local-points-7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 131714,
      "sha256": "3b462281f05fd961af1f31d13d9f615d3dcfb9babae97b8ea05022e0274a25af",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9951920689604512,
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
      "byteSize": 168892,
      "sha256": "1b037842ffbd3e14bf1d7de9d2b416f6da0cb156b1d2fde0df9cfe3eea0383f5",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9929837265945423,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 284734,
      "sha256": "7cee849e0b69a75434600d8299e4dc5364af000155728e57f9f855aeaf689f0a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9980922383297949,
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
      "byteSize": 174266,
      "sha256": "dd9ab513164f9b6b4165589098ff0e8c6782357490e01520bcab8e354770341e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9926523040158172,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 298474,
      "sha256": "54d2b5e938c7c3211c2c4520e5cdf216ba2d8250dcaf6a34b54d2bd849790bef",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9965034171287728,
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
      "byteSize": 253676,
      "sha256": "04ead2779f04ab0b2a31175cbf36ee9c9eb7c40d5470cdeaa3a729d243713282",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9953810141728509,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 425820,
      "sha256": "09103d546c299758c381ef8d6b4c2cf9fd18e5642f5d90da234e6e06ae357577",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9993263156417227,
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
      "byteSize": 190590,
      "sha256": "3fd652122de013177b4a7337d5ae812542a93c8395d6cd7614b00f4c3c54301f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9968060187812705,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 318792,
      "sha256": "7de1e148cd78e0192e57892053001b4d1e05370fffeed34b96ad1120a9fb958d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9993633232439202,
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
      "byteSize": 186730,
      "sha256": "0dbba6ae22f6c683b9dd4e2df6a0d43de6565d942b2b143142eb5c2e90b6ec98",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9981883358027831,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 304884,
      "sha256": "056fa6fc4800828b7ff0e12319551754af4d887b1aab53aee2b95cd34ee16c1a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9990532751562162,
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
      "byteSize": 106998,
      "sha256": "455ec5c4255a60bd1eb84b0396010972048e5d39ca8f51cbb7967de475bbfb28",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9899542455689777,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 175208,
      "sha256": "2298bc39cd201f7ef29803d1a8f2af1b491bd710b94b04e731210b215b3fa294",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9984222374847374,
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
      "byteSize": 120870,
      "sha256": "aa05efc2e6d3e24cc2010ac569c7c1a83242f587f131e5014f49c0c36dd71025",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9925995228449379,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/du-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 211550,
      "sha256": "2eba736394797ddb32c7a1fe70dc39684cd0b5c2b1993a01bfcf2085a78b2f77",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9970286842028292,
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
      "byteSize": 101262,
      "sha256": "db07f53e3d65afb97e6fbad4fc3e7c6cd3480cd0f796f98d44de77134e50d0e4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9908420693310339,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/external-route-alt.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 167106,
      "sha256": "6905bd57ed1cc4621b690e066db20ec04ef0e2a7be1a7a9df4bc8c2409bba6c9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9964765360198797,
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
      "byteSize": 106932,
      "sha256": "c12313c07317f759e0c79c9678b1d29bc9cc090939268488854c783177fdf90a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9934974926114569,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 176126,
      "sha256": "9f4dbed5832d1f768e67d7580c8d6ce288465916c7b24f7ae25b5db0d27a7f7c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.998839223839224,
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
      "byteSize": 180514,
      "sha256": "374e1d79899b323005b0aaa8534994378aaef368c453f941a0677247f49a438b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9959918370748986,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 297902,
      "sha256": "bf1571fe974e248d4a56dd4e90f43bef6817a5e4efb64b9f946d780c9fe03a39",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9985255963704239,
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
      "byteSize": 142336,
      "sha256": "0cbe3c02bf8c1a5e1d19de7c24d4a48d7cd13be6ad88ec0fbefad919dbc3878c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9885754582277811,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 234156,
      "sha256": "6448119bfd2526060e9252b26d2ea315bde10b965ad54dafba9fa30142affd27",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9986789674289673,
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
      "byteSize": 145706,
      "sha256": "889e056b8eb726fda05f8379cb05db83498ed1e1b960829a3987dbef4543a146",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9967527683681152,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 248728,
      "sha256": "577f5b326365afc2fd6ef79446875234ee4db0d112e8b40a415690b893b90ed1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.998770616619587,
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
      "byteSize": 170318,
      "sha256": "5b13a646d69d3f33bc4068848e37c40a00b1d70ee95123bde8dd2ff13e8a6d5b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9936104399079616,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 289700,
      "sha256": "00575497ad9b03e339fef0fad6a3ad6f14d33136b8a39639ac1fbda729851be1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9984882038367614,
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
      "byteSize": 255740,
      "sha256": "06ca9a2841d63399e4b0efbefa3a978e8a1c6542405cd1bb52c4369ece493c8f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9981409501593546,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 418568,
      "sha256": "8ffef48896d8442f28f5f67c6e4e3b29c9c41dc6a71c3f6665675569aa44a4b8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9986937947945653,
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
      "byteSize": 89862,
      "sha256": "6ebc64d79b5d4db541e8336d879a9b1918bca291c3ce0036db3899593929032b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9796392160294817,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 147236,
      "sha256": "537024a6a152e3bcc48b923e5005954f1ba68c79fe045016b69411992a17fe34",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9936624211935154,
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
      "byteSize": 167792,
      "sha256": "0d4208eafe0ff85cb71992c26aaebc305affd186a72b02a7d6cb5e0a3b2cd895",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9976703714592736,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 285054,
      "sha256": "5bf653f15916ac8d1527ff4cde279e897d046a2967d9bbeb881bb555c061a9fb",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9991389377019443,
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
      "byteSize": 87274,
      "sha256": "b5daa744c3c39917ec6ed5cdabfe6bac4a859bf5de48beed7c19e722e14af62a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.982570562380273,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 145504,
      "sha256": "543bc0ecbea6c7b160fa0ec2e502146dcd51cb40fc27ea9ec2b759023b134697",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9972377640453013,
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
      "byteSize": 112880,
      "sha256": "dfd8b4222eb94d5ce030b5a11472f2326b1c7cacb17f9447517345758ef918a9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9752298103726506,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/gallbladder-meridian/local-points-8.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 189280,
      "sha256": "fcd4183eb1643ac079c4de1cb68021c387371cf6deec918e2bd12c7ece155ec8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9990621892795807,
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
      "byteSize": 84156,
      "sha256": "bb401419bb8fe3ecee63b16c1bcf55754091fce43fd9853bc736c3ad89eb237e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9800255236926757,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 142496,
      "sha256": "5b657109e4d9b8837c14c623d96bfe0593e6a9cee8aac87e3814687a149bc471",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9953444545386078,
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
      "byteSize": 99670,
      "sha256": "d7a0c1f15bc1f6801c360ba0b6ce414edbffaf65f7b3a55c92859fa7764057d3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9918363568307006,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/internal-detail.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 172058,
      "sha256": "31eaa5fa1e8aefe47debc7998a5a3b635380e9bfea023b5ef195067cb5ef6730",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9981674593132337,
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
      "byteSize": 99784,
      "sha256": "5a1c9f902beb8eeac6514ebee6a95e95269d26953a5086115438134d4fd5317c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9931121887658798,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 171900,
      "sha256": "0809a77d1d36739139763c6280cd57d530800ca3467120220c6c4dd1b1c2bc0f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9978239598597688,
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
      "byteSize": 48324,
      "sha256": "6355ddf376eaeaa19396349f8845d62e58dba6673cafa1c1b96d835a22885d30",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9673905974982121,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 86798,
      "sha256": "65076ae435417c6772ebe0592b2c1ebb4b582cf9912bd9c7cef078ca844fed57",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9928785182673141,
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
      "byteSize": 83586,
      "sha256": "d57a04fb37aef457191f9d244b8d331318e03b061959372db88722b36e7f044a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9897402436311947,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/heart-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 139582,
      "sha256": "db8ab5ebed4cb374f4e8b55a6e3202fe850a25e5a22dbdc87eef5e09110e90fd",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9964311219284693,
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
      "byteSize": 150808,
      "sha256": "0c649b759c4dec0cc29d11599e157f2a96e4e3a0a2c131a06cf537f99be0223f",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9518597929001905,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/angelica-dahurica.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 298134,
      "sha256": "090965306e0dd4de49b21273a093d98dbb180a7f077092b226c9c90bff7bd45f",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9956867215595021,
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
      "byteSize": 141050,
      "sha256": "b8134facf0f79ea1b1d0df299762223a84cfd5131547245c95e3f1072ae1b723",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9372154148098473,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/asarum.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 288048,
      "sha256": "5be39bb8d196589293c8ed5f1cb307d95734df07cb4fe82a20d3de5978fa82ff",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9979939426968406,
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
      "byteSize": 124018,
      "sha256": "1c212bea46ab92b8ebea89a772359a45edbba3058332902e2b148e10a37fe7e3",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9361987327653991,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/centipeda.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 250198,
      "sha256": "009d27052eef08b8abb45098bdc331aa9e820b34d7f7a6b431745aca3d1007cf",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9961210885518466,
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
      "byteSize": 153908,
      "sha256": "8d8e6569bab2fad7c3051fd864a61c8707abe2ff68cf6fd780c5adba31f8148f",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9527884358445353,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/cinnamon-twig.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 296932,
      "sha256": "e46d563262f341482bd68f211bf99f68fc742bf515ade6c8a6193e907d204d32",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9958527936213606,
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
      "byteSize": 161674,
      "sha256": "4edd3dd4e8f7d2c9ae7ce16563cad95a5d2808656dc2b6cbe718e40bf46b7fcd",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9429079348240256,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/coriander.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 313918,
      "sha256": "d44a24f8cdbeecb69e1fbb6c1c9838eb38599dbce8c3beb71d3324b866bb9c33",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9958215555124326,
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
      "byteSize": 134324,
      "sha256": "45afdcdd9478574677b3f96ee564db7647d2f47ad1d023fd6a0874bcc9e67685",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9322906701237094,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/ephedra.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 264292,
      "sha256": "6c2feddadda75547b469bef55363b1c1c4d94c31cf4bea500457ec9721b06dbb",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9977424776865829,
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
      "byteSize": 142246,
      "sha256": "ad8be9bb4d6874dae109658129bd8d4a447112f58dbc6aa8af89c6b309342e3b",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9383534689287217,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/fresh-ginger.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 291224,
      "sha256": "43591252bc56db8fa18eab6c9547825a9eae77e16a154e763d4caf3dd31c227c",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9969105572906103,
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
      "byteSize": 156638,
      "sha256": "714f9ffec4c5582ff22bfafa8a6c2c87a5917a9f9a7e29dac19bd3ade5f9bd12",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9534774085723678,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/ligusticum.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 300098,
      "sha256": "140c905be94c28c50a9969818912de83e85fd32abe6452c889703615fb9be968",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9989727479310813,
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
      "byteSize": 124916,
      "sha256": "a5702834f55c86bc9e670318dc9af8eb9598f4b79ad16e801b04728960f35184",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9319631803522797,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/magnolia-flower.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 252050,
      "sha256": "840fe8f34e25bf0180bac7a8945b247e267e60e0d7e0713fab6bfac4ca0f2f5c",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.997947376286802,
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
      "byteSize": 175186,
      "sha256": "ee3db977dc164a0c5dd7ea59b7374fe7c9089d281fc43f917e69e52d5a98bb43",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9599324103547071,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/mosla.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 334774,
      "sha256": "b5701f6b128d987a9d4d6d6d874ee8b6b7287a3ae5e3aa2a5352d6fcfb3cc5e7",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9974616541740338,
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
      "byteSize": 156122,
      "sha256": "c799d669f879c96f7e72be38dc2d88c5e3dccc58e173e5a85049c486af1d33af",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9606847247905532,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/notopterygium.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 306228,
      "sha256": "19c8472cc0beae3de631821fd93f547bccaa29627fe9ef99ac7986938edfa547",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9965383180405765,
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
      "byteSize": 139062,
      "sha256": "e4c58af5de84f5fb7b539dbb77e42e04944d632e6994976cb060a77941131dc5",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9574357444186189,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/perilla.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 278590,
      "sha256": "9d9f74125de13007345ea163f3465ca82edf70275068c3b9b75b3f75167db0d4",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9971099155957318,
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
      "byteSize": 157574,
      "sha256": "5922e7349d4bb4449b4eae0ef41a343e6cd0b771d35810b1a84b003f7cc045f7",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9432975600347333,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/saposhnikovia.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 306270,
      "sha256": "84a951058eff5b154d1aa005342c12034501bc413a8ecfc1f2ceada2f4ccbdb5",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9968685801752322,
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
      "byteSize": 111272,
      "sha256": "c1c889f924802563f9176c5f57d37a759a6a7f4f634ff6e577a754485ba1aa32",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9088821227277811,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/scallion-stalk.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 230940,
      "sha256": "42cdb492cde16e5769bae39c9e4e4efd57b9a551083d8208168486228b51989b",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.997125347913816,
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
      "byteSize": 176416,
      "sha256": "e1dd9d419ad085d3f57756bcb30a2c9d049e3bbfc6ec3c537588b8d6e6477295",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9752490954317494,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/schizonepeta.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 335406,
      "sha256": "5236aebd57b1ca9b164ac1463a29716e732664b6fc2dd06f555a93e3ab2d5faa",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9944818958332802,
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
      "byteSize": 179096,
      "sha256": "ec937659971d828eed80d8ed47fc6205f847a5b9599b5dc9592f91a45c6adc05",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9637901643683252,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/tamarisk.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 337094,
      "sha256": "7b478eb80a35fdba371ce41d3afcdda63074dccf1590535aae534291cdc475bb",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9969691043093353,
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
      "byteSize": 159926,
      "sha256": "b16bbe85797bfc963af1c24bc4300c0051da56b07db7f41226d84b037b7560e2",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9569263111217127,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/herbs/wind-cold/xanthium.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 310930,
      "sha256": "e73853303b421f534a58bebea8ed2c0aca9c71dbf8252d3302b7e61a0b258018",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-mesh"
      },
      "watermarkConfidence": 0.9989880041186012,
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
      "byteSize": 55444,
      "sha256": "891d19436371fa0da803f2a5126210c6dfad3e22937cddb234a90fa6cd365bbe",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9910427742500854,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 96186,
      "sha256": "2c3c1b917c2ce8788fd16fa0c39547cca70950416684a40c3746b2718641c65d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9972090729783036,
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
      "byteSize": 99578,
      "sha256": "ebd905a6578b7e935ce2d9cb2699583fa10480c6e107f953115549a6bb479206",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9918880111030437,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 172128,
      "sha256": "63b7f4cd7e4f59ee77df7942380597cc39b83f3d8275de649e4b8305100e3ff3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9977400720062662,
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
      "byteSize": 75024,
      "sha256": "94aae688f54cca5fc8abc2279efca412646956c6e15973b1aca2c54692649181",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9874496937887977,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/local-anatomy-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 130430,
      "sha256": "f6b6a886b663211a5de0df195bf134078949cf2a3a91d7c19ac924f8c999e35a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9981891764149828,
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
      "byteSize": 65474,
      "sha256": "25813d4968e934093f682b11aea97e35f0c4d83747421f1307db01a0b609467e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9884609034128264,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/local-anatomy-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 109358,
      "sha256": "4691102f5f3007f1d977b1a619ef90389ca6c76e4f92e297c48348b18632cca6",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9991638795986623,
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
      "byteSize": 91456,
      "sha256": "e11a1c59eec5e5e974bb376527966789e4706ee3109d7261b88fa936b78f18b5",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9732746575018555,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 150880,
      "sha256": "697390a5c91a4c5703644f6c598c5e93cf6de4a01246d3b49d4e20b36feab575",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9988392238392237,
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
      "byteSize": 283674,
      "sha256": "cb2a399875f1f9401a129a3fd2378d450668298b19514c553a0dd1b6548380ff",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9989320877478772,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 458156,
      "sha256": "11aa51be0d88b11b46488131fb8259232dff074e33d6aa9989cb5a3a595835de",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
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
      "byteSize": 55952,
      "sha256": "e60da726c6fd873e7d20515c8a79288cf85a17e27ee2cefe15efc8446868d5a3",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.978713322964883,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/kidney-meridian/surface-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 97476,
      "sha256": "f34eac58a39f23281788e8ec2ce870ec54d1f8c9fa89bdfbc15afd5ddf33cc3d",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.997561315496098,
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
      "byteSize": 113120,
      "sha256": "dd7347ce3cf859851d203aa3dd627c7947ee5a274a1eda7adb6149ee5b4e7b00",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9914211826120215,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 190840,
      "sha256": "b609f17740c348d360b96dc54f1987e54595b2e7d39df527559535294a0f8fdc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9973504636966175,
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
      "byteSize": 165596,
      "sha256": "2b4012cb5b62ff6467f1e034be0ba3e7abaae2e9f56a7122d1cc677e262bce2f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9931411941078735,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 278292,
      "sha256": "2a4deeab2f21f687151eb60f56e38d2fa35947ea5e38b624573945fcccef7220",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9983023243693976,
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
      "byteSize": 96380,
      "sha256": "dbc86d3516d0f70a787eea031e2413dba6349f7143a6fb9ac2d1adae0406efac",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9952295642887847,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 157028,
      "sha256": "293389bec7ff20fd903366f44517ab6a729013e45b44120e1d8a707b2d837465",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9987535612535612,
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
      "byteSize": 78642,
      "sha256": "993e56cd9005411c53eab503240953001901f1e7d75275a69a72e5aff2779ad8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9840662074106177,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 129456,
      "sha256": "d41ac6e2281430d5eed529d14dc0528ab6385a4d4b5b88db42c61d6a19fedab7",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 1,
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
      "byteSize": 188446,
      "sha256": "225f04a1cd8f8f0616188f6392df1ab603d94d07a044da800074b2fb1fd2b2e4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9958541581102047,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 306846,
      "sha256": "cf737cb263f69f687286f8466d2f30536c287d7181543083a0e99fc86ceaa730",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9993055903107954,
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
      "byteSize": 220720,
      "sha256": "3a8604365dc470354b57e73d0693e224a273eb49ae9921b33c0fbe7b2a5e56c0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9985811442305768,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 358464,
      "sha256": "5b3928fdbde8898179a8b5e4e7e2af9c0df865205f387da0131bc7b174785a97",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.999736564805058,
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
      "byteSize": 135020,
      "sha256": "b7fc2a8aaf44bba18f90d1e1db6be856fa29a297da67bcd3e1487d0cfef22477",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9905475800748988,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/large-intestine-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 225044,
      "sha256": "abb6d9667ffd597dc8258ec5383f5e42bd4f902e90339068cee6133b6ccd8922",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.999161134362823,
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
      "byteSize": 52588,
      "sha256": "e9e0cd58254aa9e86393418292809e6d794753988993c424e8831ecdb5686453",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9824305985452982,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 89634,
      "sha256": "2d36d50a9aa351d57343619e5c7575e74afbad40fd630cc252dfe29e47ef3cf8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9964853887677775,
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
      "byteSize": 60020,
      "sha256": "f20955f4e0aeb45ccfc3fb55414e109f32e7e619f1d6195131ff9ee6227046ee",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9747223267391759,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 103042,
      "sha256": "8c1bae12d83f6db136b462f552f33ce414f26f660bdc57e9196a780cf704a9ba",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.999084249084249,
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
      "byteSize": 101048,
      "sha256": "1cc58604c9fbc20c6b742ec5b325b5da92d9ca419a2bf73ff34710df4ee6756f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9931577021562012,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 173354,
      "sha256": "d0fe7efdeb9e67a0977279f7a79413117e56dff0a7691033ee85a45169e7b7f9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9980621857899187,
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
      "byteSize": 87086,
      "sha256": "0c212f0f924c4b079df0dd9cfc8d4a10aac2343febaeea0bcc572b6e642932db",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9922599116037415,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 142686,
      "sha256": "1a81d6672d0b0fe3e1e1311f5554f8fdc1f702194207329787dc004202cbd124",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9983868927125505,
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
      "byteSize": 123220,
      "sha256": "8ea26ba5229fb7ba52c4dd8a9e59bc3c0c6bd838fc976ff75547a279e8599c73",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9858663871290114,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 208656,
      "sha256": "6c6c02082db6654a20e113629606a7a3478e10519efcbedafee6d7e90575d66e",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9987005295429209,
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
      "byteSize": 209458,
      "sha256": "25fc20b982cf30c4348c44082e13e1abd64047dbd214ade9d95f8ae126f2157f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9976098284905939,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 347760,
      "sha256": "c498154c716621a972d351d338cfb95eae89f606e5ddd60e4db3e0142f516107",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9988677480239679,
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
      "byteSize": 60100,
      "sha256": "fa33886ea466b5d3b96e98a154850b55e3ae52265333645bc56675b882c7b3c5",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9874527390394263,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/liver-meridian/surface-internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 102826,
      "sha256": "14aef3a7102dd06daa731e68e2de140e52a9fa580e72a5e6a012c09c86dcf008",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9976820054945055,
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
      "byteSize": 87234,
      "sha256": "2b06f788ed8d0593dfb9b1eeeabfdbec5572d616a285b51f5de0d1618d120c3c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9875407473288664,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/lung-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 146374,
      "sha256": "60f1ee39839c9854bd634337b3e41242e7aa2fc8fa4cf6542feaf07637b4e03f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9936460113714756,
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
      "byteSize": 118320,
      "sha256": "3ddf30987bac017a66872715e3477f1839c23ede6e240c6078b9094b63d9af37",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9873459646372684,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/lung-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 198798,
      "sha256": "8ac3290a7cd0172358ead7e7b070afc98cbb13c00303f8d94dce6bc820f47940",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9973073495132319,
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
      "byteSize": 82564,
      "sha256": "3b34cbbbaf5b2d9e33444ce7208ffb114f4c1a5af227b46e9693dd8ae28ed971",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9920745472987462,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/lung-meridian/local-points-forearm.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 137142,
      "sha256": "c7960a1e9ac8082f83cb729032cbd333ecd7feaa0c85e933e72888496f8579d0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 1,
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
      "byteSize": 147802,
      "sha256": "e5d8387e91dfdb134efd4a71f4e01d9f0c3df1c535f29707c6b95817333ed3b0",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9951541242594002,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/lung-meridian/local-points-shoulder.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 246826,
      "sha256": "1fdad39e55fbdfbf3b1a7abf130fab403f2c2980484135f8092a16ddbb0247b2",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9981642189956345,
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
      "byteSize": 153536,
      "sha256": "3f4ad08aacd4fd3ebb2aca45628e9c35cb2e0a0e6086a25866912b25f99a99ea",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-seal"
      },
      "watermarkConfidence": 0.9459982758655607,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/nine-needles-atlas.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 299930,
      "sha256": "3605044e5b1272e7c973d807eddbaaa497b448501a8e0497d41a8d3843650407",
      "visibleWatermark": {
        "applied": false,
        "brand": "小钟岐医",
        "reason": "source-identifier-preserved",
        "scheme": "source-visible-preserved-v1",
        "sourceIdentifier": "existing-seal"
      },
      "watermarkConfidence": 0.9969951152360627,
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
      "byteSize": 80710,
      "sha256": "bcb425d4cbe3d60fa8b94f73c3a14bc4dd2b462ed47b79d39cfe43f866c85ef7",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.987023648371999,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/pericardium-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 136376,
      "sha256": "70e0d74e4242b4e40e7e135d81a170b03b3934df9f9f06355f3f2b89379c3621",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9982286634460548,
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
      "byteSize": 97520,
      "sha256": "4c3475337a9ff303d132fdc38ddd2724e30eb228187f71d529f49c3a33a6448a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9951141434353775,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/pericardium-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 165522,
      "sha256": "26a310ca8053c7b1744d17708938f915850e42d79fd345b28d2ba201ef807510",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9982701509017299,
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
      "byteSize": 189250,
      "sha256": "df602e9f81a04607bafee9b51bd9039dac9425ead49cac5607e6457da1cc8f65",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9983116042065701,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/pericardium-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 315656,
      "sha256": "c2f447bb3978b8f44f854d98b9740b5fbec1211fa6557dfb4c28fdd356eff3b9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9983812063603167,
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
      "byteSize": 98184,
      "sha256": "41471402b5a9196a8815cdd1522c3599426d93753a041cba54cd44248761953b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9871679558413171,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/pericardium-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 166074,
      "sha256": "cea16fb61a84cc1e2d1a025b32beea52afee5ac577886e2c8db9e38c3f37f622",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9983009071824861,
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
      "byteSize": 78498,
      "sha256": "a3ee36a9d2425f5dbdf2e2e0dc0e5b27673f0efc703416576eb60c12d776ccdd",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.991179856468318,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 131860,
      "sha256": "9d58e555c514b1d6b3644fd700804ed4e87ad9c210375fee39ef087751315719",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.999379652605459,
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
      "byteSize": 80390,
      "sha256": "8f207aa50eaf4011b7eefcc85a2f8a60e558c4c59030559d2cbfc683547af775",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9868222620394332,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 134426,
      "sha256": "4abcd3ea1fe99b9db57fa23e0fa25392242d0ba251554805e5aee159b940e552",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9972677079625546,
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
      "byteSize": 76572,
      "sha256": "8dd11a9606c1fb4164d9f430f074dbbf5a0e4d6b524abe13788673142faf3310",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9794201402387468,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 146064,
      "sha256": "694dd9c26ab1c757d066d22b768bb80962712b2ef863f5649c53f8be5c5a23da",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9970550649434944,
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
      "byteSize": 276802,
      "sha256": "613f84ad8f6a4a1853dd3c827225693b46a8f96685bc7bf4089136e0707434a5",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.998524868056118,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 448544,
      "sha256": "d19a619d42f55f68f98dd61563702ac19c74f8e9c896ea17609be04958b7ac3f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9990731486654203,
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
      "byteSize": 140926,
      "sha256": "e60d205c120a214905143b21d9a4000bb9845df6b4f22d9a3b6d2353cf5ca883",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9929558200296833,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/ren-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 237062,
      "sha256": "5cae6d6d58bf5569ccb7b82f059feaf7a2013a8e19d2e9f941edbff3882a41c8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9995629370629371,
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
      "byteSize": 180376,
      "sha256": "920fe6b856f94e508918bd0ce81314b3443214bd254aa8c51f1a76ce03625668",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9944509711292965,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 296448,
      "sha256": "47000d19e049636c8fd5397fbe1e94b125fd6b38eb7fc118bd277680eda8da1c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9976595904883112,
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
      "byteSize": 186332,
      "sha256": "bbaf38765847e0233009d1f589f2525fc521e66c19518e743b52ca3224b051b2",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9950287494540954,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 312052,
      "sha256": "86b315b5841d4b6853005073d1a3a8b46c25b691a291dce854965aa667cd1407",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9981325538390755,
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
      "byteSize": 80694,
      "sha256": "8d18cfb79f725abcb133d3139b0f44c58010852cd99a9c51ca5b2ba4866963d6",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.976521377849945,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 136120,
      "sha256": "3430e6e1b165344e35ce47f0c843d1f3cc07fee04e78381d292660069d6e7679",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9985735418427726,
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
      "byteSize": 198330,
      "sha256": "97596bc5db607a8e49476ad2d40e5772e324ae73478a2b1ee7365f489cca99ec",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9961524545385395,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 333312,
      "sha256": "56b33bde27185171dbed635a7e6de4aadb598980981914d70f64ca70520ab687",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9994383394383395,
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
      "byteSize": 133092,
      "sha256": "41c6cc1c9f506cb9d46766ca28c4a1463b214c8f49eca7d515f94272e4052bf5",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9929633559056723,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/sanjiao-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 219280,
      "sha256": "be50f6a3652ab025849af4d1b6285e2d78697be1c97542ce6c6176007f38ed68",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 1,
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
      "byteSize": 137320,
      "sha256": "9bd3de8bc53137cfa7314fee74a35185d586a2d020c6182a53acede11871a6ec",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9959678205695928,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 234038,
      "sha256": "32c82144341f808a5ed57fb2440f38263f997c08393d8784c9011567ccbfc538",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9988527233723268,
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
      "byteSize": 163312,
      "sha256": "9795fc80902b40aaf2999d15ae916c7c6738c9b009de4b48d8b555b6e1b84771",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9934517797196448,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 270698,
      "sha256": "0ef347c228cd9b07f86379cd13cf6612a38e0e6a8279a4aad9e1db3bd6d41aba",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9980828304546857,
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
      "byteSize": 72886,
      "sha256": "1a277afd4859c9cac559a2dd834c958103be484aa914804a7878a4f55ce023e5",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9866339515883575,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 126466,
      "sha256": "3837443dbcc26097332153abb1995aae15cb80643da96b1140f2c4a7852444d1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9966050888386355,
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
      "byteSize": 64724,
      "sha256": "4546c85bed9a7b02e01b9f91d9d995f722700b5f858a9e2012307f9e2ac89b42",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9909583179796709,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 112594,
      "sha256": "aef1a2f5fa545556a4ad12959ff0b85932a9f5dc54b70ff12639e95f370ea1d1",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9993131868131868,
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
      "byteSize": 45376,
      "sha256": "14c774577336e476a0d57be2ed7cfaabcb14014ac5058f400eef145ac84639a8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9842113730991178,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 82628,
      "sha256": "c6ad762bcb8c99c769d81a57842d7b2ecc48423c7c15b741a60e446353d84581",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9970509658009659,
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
      "byteSize": 95152,
      "sha256": "65d518d64573424d224fc564ccf7757675ca0dcae036ed3e19371167d8e709ef",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9927379301919436,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 156950,
      "sha256": "4c0f1277c063b548d73d16083523472874bfcbe6ed00f8f113b8e5e5755211ad",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9988687782805429,
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
      "byteSize": 138384,
      "sha256": "407696387b14fd6cb622b9b20a340e20966076c076c20b2e6c135f1a3b9113c2",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9932898762198781,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 230170,
      "sha256": "2d77990f7027e7b5bdadaeb52a5c13c0b4be26b334fd531f373b26952fd758dc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9983925761886289,
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
      "byteSize": 122080,
      "sha256": "3d93255abda4f5d388810b4e7a578fcfa721183a444f9804c5de2aa04eea8fd7",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9911091538045752,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/small-intestine-meridian/local-points-7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 201952,
      "sha256": "d3bce85576d76ca8eadfff176a90371f976077a02362f4488e651f4b9e0a5937",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9980250004377235,
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
      "byteSize": 55230,
      "sha256": "f2896766fb57676ffb38495699dc9ce3518d0549c930276fb741b7d9a2e457fc",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9784158924911185,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 92544,
      "sha256": "1bbb6ebd47753af868adfb19b5b554aaa9b230806c14ba4b0fbc9d8262aa8bd2",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9954692409040233,
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
      "byteSize": 59070,
      "sha256": "7fbf37fb6ae67c79376dbe2860c599baa8d0267a961a55cea61c51e0d115fe8a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9867995786265017,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 99200,
      "sha256": "222ef3053ef1a3b5b07676837028ecc3130ac5a1a52ead3509b185b886ba9949",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9982023411371238,
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
      "byteSize": 94924,
      "sha256": "096a83f2f78f6416f4ffa202f52eacb883c968741b349b110261de2c56d431b8",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.985596625615294,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 154318,
      "sha256": "46b7410e9cdcffddc3a8ac20b6cfc6a10196edfa6794d6335aff04ad3ac771af",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9970638736263737,
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
      "byteSize": 115568,
      "sha256": "a1b2c77ddd6cfaec8df572af3ee0bb4f3669086500f61450deb74266d66c0447",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9927380845985012,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 193374,
      "sha256": "847fa825577195d366aa7d0e41bd52ba8c7c3771956ef2c06952d7598e74d213",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9972559259260119,
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
      "byteSize": 163750,
      "sha256": "a27edb4f21d35002d3a6df32734222f31b03c80e107c6e00070a8619a04b2d98",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9942540329089946,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/local-points-3.webp",
      "width": 1074,
      "height": 1440,
      "byteSize": 269134,
      "sha256": "eba9b1fe7267bdbc4254af63be4deb130f2c706dc88a339952796efb2fb7634c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9979352641235533,
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
      "byteSize": 94288,
      "sha256": "507b3255fd8df7fc12ff800d4e71c60981d9a07909646e20979813a2d5b77c64",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.994542672995486,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/spleen-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 158260,
      "sha256": "d728d443e4b73f6dc5de2866e730a4989818b7208a5c60e1eec62b8d80d1ed01",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9983997351285729,
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
      "byteSize": 87208,
      "sha256": "99df077f8db5b237d56292d34ee630d624387d6a408e53219141b79c2a091d5c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9828594861435334,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/external-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 145402,
      "sha256": "b3f17ea6c51552298c26cb7abf22b227f5b280ea1c0927d82afa7661480c3201",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9975358779706606,
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
      "byteSize": 103344,
      "sha256": "3e85edec59d43be31eeb1c45a5ad1eecfb2601b999d27d056961f7224188e39a",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9947454975579976,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/internal-route.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 170776,
      "sha256": "f1e50bdac61ac6d8409aa6a904ac78cf137136ed30d35726feeaa33b5b8ed501",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9952584452584452,
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
      "byteSize": 141344,
      "sha256": "2c7a19b68c2db13c4f88bdc1c9d52f10e43926cf47e34e756401b647c8553d58",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9915787462468604,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-1.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 233858,
      "sha256": "ce4e56ecb0b2ccc3f8686c321d300a1236b854390e110c6611a7ac44380d0ed9",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.997065556317902,
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
      "byteSize": 139744,
      "sha256": "611c7bce2bd26a5592d81ceacc3d60e12009d23f2a001b651f9282a8a4a0447f",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9912226713924498,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-2.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 228784,
      "sha256": "4122ae131a44cc73fea89ee8532d967b04c059a84d507baf117759d00ac98e16",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9978560443513415,
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
      "byteSize": 96206,
      "sha256": "60f0cf5e27a7178e12685cc147cdaa4fecc91a6996ef21ccd7f45e5205703842",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9971216461601077,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-3.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 157344,
      "sha256": "92ead5248d1e22695dfb93acae4403e938ccc1214ece657f51e665817972978b",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.99784877478843,
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
      "byteSize": 146286,
      "sha256": "46c28e622a55d90cb15860a7e75a91694d4ea11fa006a57d6b53c9d4ec366e62",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9884501742423984,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-4.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 243258,
      "sha256": "1caabe86db5abd877f0a48b5b3885da0c0e61f74f706671b64f304d7f1bea1c5",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9985013103159022,
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
      "byteSize": 132104,
      "sha256": "a644e6fedd8160a8d47ff0a8341e16e1463a9c54062e55b0339d41b13617f911",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9843998510628094,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-5.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 220416,
      "sha256": "8a7411acc61e40297f4af1bc2913a63b511e134b62fe1ca82c9a1308e3add731",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9986950549450551,
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
      "byteSize": 122034,
      "sha256": "711aa53922f935757a95a7e5a1529747d2b46615524f21cf6a78a8493b9dd51c",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9860610145247498,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-6.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 204010,
      "sha256": "0d4da3cbd67325778258cb8a4f6851e67f123f76eac3654bfd87d1422a807d70",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9979875918915327,
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
      "byteSize": 132612,
      "sha256": "3f14c722e2476a254a92815ac2105dc0e9583a2f230105f06e5ad36c20b78164",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9906123645370197,
      "format": "webp"
    },
    "preview": {
      "src": "/images/atlas/previews/stomach-meridian/local-points-7.webp",
      "width": 1075,
      "height": 1440,
      "byteSize": 214810,
      "sha256": "118d063262690b40aec45f1828bd4a1ef3950d3bd85e42b984e71e31622fbbb4",
      "visibleWatermark": {
        "applied": true,
        "brand": "小钟岐医",
        "color": "#ffffff",
        "opacity": 0.5,
        "pattern": "tiled",
        "provenance": "user-provided-master",
        "scheme": "xqy-visible-mesh-v2"
      },
      "watermarkConfidence": 0.9986485164974866,
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
