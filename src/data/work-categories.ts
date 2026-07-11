import type { Category, WorkCategoryKey } from "@/domain/content";

export const workCategories: readonly Category<WorkCategoryKey>[] = [
  {
    key: "meridians",
    name: {
      "zh-CN": "经络微探",
      "zh-Hant": "經絡微探",
      en: "Meridian Atlas",
    },
    summary: {
      "zh-CN": "围绕经络循行、穴位结构与取穴线索，整理为清楚可读的视觉图组。",
      "zh-Hant": "圍繞經絡循行、穴位結構與取穴線索，整理為清楚可讀的視覺圖組。",
      en: "Visual plate sets organized around meridian pathways, point structures, and location cues.",
    },
    order: 1,
    publication: { status: "published" },
  },
  {
    key: "herbs",
    name: {
      "zh-CN": "本草金鉴",
      "zh-Hant": "本草金鑑",
      en: "Materia Medica",
    },
    summary: {
      "zh-CN": "以本草形态、性味归经与传统应用线索为核心整理视觉图谱。",
      "zh-Hant": "以本草形態、性味歸經與傳統應用線索為核心整理視覺圖譜。",
      en: "Visual plates organized around materia medica forms, properties, channel entry, and traditional-use notes.",
    },
    order: 2,
    publication: { status: "published" },
  },
  {
    key: "formulas",
    name: {
      "zh-CN": "经方集谱",
      "zh-Hant": "經方集譜",
      en: "Classical Formulas",
    },
    summary: {
      "zh-CN": "用于归档经典方剂的组成、方义与辨证结构；目前没有可公开图像作品。",
      "zh-Hant": "用於歸檔經典方劑的組成、方義與辨證結構；目前沒有可公開圖像作品。",
      en: "An archive for visual studies of classical formula composition and reasoning; no image work is currently public.",
    },
    order: 3,
    publication: { status: "published" },
  },
];
