import type {
  ImageGroup,
  LocalizedText,
  WorkImage,
} from "@/domain/content";

import {
  atlasImageAssets,
  type AtlasGeneratedImagePair,
} from "./atlas-image-assets.generated";
import { works } from "./works";

interface ImageDefinition {
  readonly key: string;
  readonly title?: LocalizedText;
}

interface GroupDefinition {
  readonly workId: string;
  readonly images: readonly ImageDefinition[];
}

const assets: Readonly<Record<string, AtlasGeneratedImagePair>> = atlasImageAssets;

function label(zhCN: string, zhHant: string, en: string): LocalizedText {
  return { "zh-CN": zhCN, "zh-Hant": zhHant, en };
}

const common = {
  external: label("体外经络循行", "體外經絡循行", "External meridian pathway"),
  internal: label("体内经络循行", "體內經絡循行", "Internal meridian pathway"),
};

function localPoint(zhCN: string, zhHant: string, en: string): LocalizedText {
  return label(`${zhCN}局部穴位`, `${zhHant}局部穴位`, `Local points: ${en}`);
}

function image(key: string, title?: LocalizedText): ImageDefinition {
  return { key, title };
}

const groupDefinitions: readonly GroupDefinition[] = [
  {
    workId: "work-001",
    images: [
      image("lung-meridian/external-route", common.external),
      image("lung-meridian/internal-route", common.internal),
      image(
        "lung-meridian/local-points-shoulder",
        localPoint("肩胸上臂", "肩胸上臂", "shoulder, chest, and upper arm"),
      ),
      image(
        "lung-meridian/local-points-forearm",
        localPoint("前臂腕掌", "前臂腕掌", "forearm, wrist, and palm"),
      ),
    ],
  },
  {
    workId: "work-002",
    images: [
      image("large-intestine-meridian/external-route", common.external),
      image("large-intestine-meridian/internal-route", common.internal),
      image("large-intestine-meridian/local-points-1", localPoint("手腕", "手腕", "hand and wrist")),
      image("large-intestine-meridian/local-points-2", localPoint("前臂", "前臂", "forearm")),
      image("large-intestine-meridian/local-points-3", localPoint("肘臂", "肘臂", "elbow and arm")),
      image("large-intestine-meridian/local-points-4", localPoint("肩颈", "肩頸", "shoulder and neck")),
      image("large-intestine-meridian/local-points-5", localPoint("面部", "面部", "face")),
    ],
  },
  {
    workId: "work-003",
    images: [
      image("stomach-meridian/external-route", common.external),
      image("stomach-meridian/internal-route", common.internal),
      image("stomach-meridian/local-points-1", localPoint("面部", "面部", "face")),
      image("stomach-meridian/local-points-2", localPoint("侧头面", "側頭面", "lateral head and face")),
      image("stomach-meridian/local-points-3", localPoint("颈前", "頸前", "anterior neck")),
      image("stomach-meridian/local-points-4", localPoint("胸腹", "胸腹", "chest and abdomen")),
      image("stomach-meridian/local-points-5", localPoint("髋膝", "髖膝", "hip and knee")),
      image("stomach-meridian/local-points-6", localPoint("小腿", "小腿", "lower leg")),
      image("stomach-meridian/local-points-7", localPoint("足背", "足背", "dorsum of the foot")),
    ],
  },
  {
    workId: "work-004",
    images: [
      image("spleen-meridian/external-route", common.external),
      image("spleen-meridian/internal-route", common.internal),
      image("spleen-meridian/local-points-1", localPoint("足踝", "足踝", "foot and ankle")),
      image("spleen-meridian/local-points-2", localPoint("髋腿", "髖腿", "hip and leg")),
      image("spleen-meridian/local-points-3", localPoint("胸腹", "胸腹", "chest and abdomen")),
      image("spleen-meridian/local-points-4", localPoint("胁肋", "脅肋", "flank and ribs")),
    ],
  },
  {
    workId: "work-005",
    images: [
      image("heart-meridian/external-route", common.external),
      image("heart-meridian/internal-route", common.internal),
      image("heart-meridian/internal-detail", label("体内联系详图", "體內聯繫詳圖", "Detailed internal connections")),
      image("heart-meridian/local-points-1", localPoint("腋臂", "腋臂", "axilla and arm")),
      image("heart-meridian/local-points-2", localPoint("腕掌", "腕掌", "wrist and palm")),
    ],
  },
  {
    workId: "work-006",
    images: [
      image("small-intestine-meridian/external-route", common.external),
      image("small-intestine-meridian/internal-route", common.internal),
      image("small-intestine-meridian/local-points-1", localPoint("手掌", "手掌", "hand")),
      image("small-intestine-meridian/local-points-2", localPoint("肘腕段", "肘腕段", "elbow-to-wrist segment")),
      image("small-intestine-meridian/local-points-3", localPoint("肘臂段", "肘臂段", "elbow and arm segment")),
      image("small-intestine-meridian/local-points-4", localPoint("颈项段", "頸項段", "neck segment")),
      image("small-intestine-meridian/local-points-5", localPoint("肩背段", "肩背段", "shoulder and back segment")),
      image("small-intestine-meridian/local-points-7", localPoint("面部", "面部", "face")),
    ],
  },
  {
    workId: "work-007",
    images: [
      image("bladder-meridian/external-route", common.external),
      image("bladder-meridian/internal-route", common.internal),
      image("bladder-meridian/local-points-1", localPoint("头面", "頭面", "head and face")),
      image("bladder-meridian/local-points-2", localPoint("头顶部", "頭頂部", "vertex")),
      image("bladder-meridian/local-points-3", localPoint("肩背", "肩背", "shoulder and back")),
      image("bladder-meridian/local-points-4", localPoint("背腰", "背腰", "back and lumbar region")),
      image("bladder-meridian/local-points-4-1", localPoint("骶臀", "骶臀", "sacrum and buttock")),
      image("bladder-meridian/local-points-5", localPoint("臀腿", "臀腿", "buttock and leg")),
      image("bladder-meridian/local-points-6", localPoint("小腿", "小腿", "lower leg")),
      image("bladder-meridian/local-points-7", localPoint("足踝", "足踝", "foot and ankle")),
    ],
  },
  {
    workId: "work-008",
    images: [
      image("kidney-meridian/external-route", common.external),
      image("kidney-meridian/internal-route", common.internal),
      image("kidney-meridian/surface-route", label("体表循行", "體表循行", "Surface pathway")),
      image("kidney-meridian/local-anatomy-1", label("足踝局部解剖", "足踝局部解剖", "Local anatomy: foot and ankle")),
      image("kidney-meridian/local-anatomy-2", label("胸腹局部解剖", "胸腹局部解剖", "Local anatomy: chest and abdomen")),
      image("kidney-meridian/local-points-3", localPoint("下肢", "下肢", "lower limb")),
      image("kidney-meridian/local-points-4", localPoint("胸腹", "胸腹", "chest and abdomen")),
    ],
  },
  {
    workId: "work-009",
    images: [
      image("pericardium-meridian/external-route", common.external),
      image("pericardium-meridian/internal-route", common.internal),
      image("pericardium-meridian/local-points-1", localPoint("上臂", "上臂", "upper arm")),
      image("pericardium-meridian/local-points-2", localPoint("前臂掌部", "前臂掌部", "forearm and palm")),
    ],
  },
  {
    workId: "work-010",
    images: [
      image("sanjiao-meridian/external-route", common.external),
      image("sanjiao-meridian/internal-route", common.internal),
      image("sanjiao-meridian/local-points-1", localPoint("手臂", "手臂", "hand and arm")),
      image("sanjiao-meridian/local-points-2", localPoint("肩颈", "肩頸", "shoulder and neck")),
      image("sanjiao-meridian/local-points-3", localPoint("耳周", "耳周", "around the ear")),
    ],
  },
  {
    workId: "work-011",
    images: [
      image("gallbladder-meridian/external-route", common.external),
      image("gallbladder-meridian/external-route-alt", label("体外经络循行侧览", "體外經絡循行側覽", "Lateral view of the external pathway")),
      image("gallbladder-meridian/internal-route", common.internal),
      image("gallbladder-meridian/local-points-1", localPoint("头面", "頭面", "head and face")),
      image("gallbladder-meridian/local-points-2", localPoint("侧头", "側頭", "lateral head")),
      image("gallbladder-meridian/local-points-3", localPoint("肩颈", "肩頸", "shoulder and neck")),
      image("gallbladder-meridian/local-points-4", localPoint("胁肋", "脅肋", "flank and ribs")),
      image("gallbladder-meridian/local-points-5", localPoint("髋腿", "髖腿", "hip and leg")),
      image("gallbladder-meridian/local-points-6", localPoint("小腿", "小腿", "lower leg")),
      image("gallbladder-meridian/local-points-7", localPoint("足部", "足部", "foot")),
      image("gallbladder-meridian/local-points-8", localPoint("足踝", "足踝", "foot and ankle")),
    ],
  },
  {
    workId: "work-012",
    images: [
      image("liver-meridian/external-route", common.external),
      image("liver-meridian/internal-route", common.internal),
      image("liver-meridian/surface-internal-route", label("体表体内合参", "體表體內合參", "Combined surface and internal pathways")),
      image("liver-meridian/local-points-1", localPoint("足部", "足部", "foot")),
      image("liver-meridian/local-points-2", localPoint("小腿", "小腿", "lower leg")),
      image("liver-meridian/local-points-3", localPoint("腹股沟", "腹股溝", "groin")),
      image("liver-meridian/local-points-4", localPoint("胸胁", "胸脅", "chest and flank")),
    ],
  },
  {
    workId: "work-013",
    images: [
      image("ren-meridian/external-route", common.external),
      image("ren-meridian/internal-route", common.internal),
      image("ren-meridian/local-points-1", localPoint("下腹", "下腹", "lower abdomen")),
      image("ren-meridian/local-points-2", localPoint("胸腹", "胸腹", "chest and abdomen")),
      image("ren-meridian/local-points-3", localPoint("咽喉面部", "咽喉面部", "throat and face")),
    ],
  },
  {
    workId: "work-014",
    images: [
      image("du-meridian/external-route", common.external),
      image("du-meridian/internal-route", common.internal),
      image("du-meridian/local-points-1", localPoint("腰骶", "腰骶", "lumbar and sacral region")),
      image("du-meridian/local-points-2", localPoint("背部", "背部", "back")),
      image("du-meridian/local-points-3", localPoint("项背", "項背", "nape and upper back")),
      image("du-meridian/local-points-4", localPoint("头顶部", "頭頂部", "vertex")),
      image("du-meridian/local-points-5", localPoint("面部", "面部", "face")),
    ],
  },
  { workId: "work-015", images: [image("nine-needles-atlas")] },
  { workId: "work-101", images: [image("herbs/wind-cold/xanthium")] },
  { workId: "work-102", images: [image("herbs/wind-cold/angelica-dahurica")] },
  { workId: "work-103", images: [image("herbs/wind-cold/scallion-stalk")] },
  { workId: "work-104", images: [image("herbs/wind-cold/centipeda")] },
  { workId: "work-105", images: [image("herbs/wind-cold/saposhnikovia")] },
  { workId: "work-106", images: [image("herbs/wind-cold/ligusticum")] },
  { workId: "work-107", images: [image("herbs/wind-cold/tamarisk")] },
  { workId: "work-108", images: [image("herbs/wind-cold/cinnamon-twig")] },
  { workId: "work-109", images: [image("herbs/wind-cold/coriander")] },
  { workId: "work-110", images: [image("herbs/wind-cold/schizonepeta")] },
  { workId: "work-111", images: [image("herbs/wind-cold/ephedra")] },
  { workId: "work-112", images: [image("herbs/wind-cold/notopterygium")] },
  { workId: "work-113", images: [image("herbs/wind-cold/fresh-ginger")] },
  { workId: "work-114", images: [image("herbs/wind-cold/asarum")] },
  { workId: "work-115", images: [image("herbs/wind-cold/mosla")] },
  { workId: "work-116", images: [image("herbs/wind-cold/magnolia-flower")] },
  { workId: "work-117", images: [image("herbs/wind-cold/perilla")] },
];

function buildWorkImage(
  definition: ImageDefinition,
  workTitle: LocalizedText,
  index: number,
): WorkImage {
  const asset = assets[definition.key];

  if (!asset) {
    throw new Error(`缺少图谱派生资源：${definition.key}`);
  }

  const imageTitle = definition.title ?? workTitle;
  const alt = definition.title
    ? label(
        `${workTitle["zh-CN"]}：${imageTitle["zh-CN"]}`,
        `${workTitle["zh-Hant"]}：${imageTitle["zh-Hant"]}`,
        `${workTitle.en}: ${imageTitle.en}`,
      )
    : workTitle;

  return {
    id: `${definition.key.replaceAll("/", "-")}-image`,
    role: index === 0 ? "cover" : "plate",
    title: imageTitle,
    alt,
    order: index + 1,
    variants: [
      { kind: "thumbnail", ...asset.thumbnail },
      { kind: "preview", ...asset.preview },
    ],
  };
}

export const imageGroups: readonly ImageGroup[] = groupDefinitions.map(
  (definition) => {
    const work = works.find((candidate) => candidate.id === definition.workId);

    if (!work) {
      throw new Error(`图组引用了不存在的作品：${definition.workId}`);
    }

    return {
      id: `images-${definition.workId}`,
      workId: definition.workId,
      images: definition.images.map((item, index) =>
        buildWorkImage(item, work.title, index),
      ),
    };
  },
);
