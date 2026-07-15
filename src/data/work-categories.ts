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
      "zh-CN": "围绕经典方剂、常见剂型与煎服知识，整理为清楚可读的视觉图谱。",
      "zh-Hant": "圍繞經典方劑、常見劑型與煎服知識，整理為清楚可讀的視覺圖譜。",
      en: "Visual plates organized around classical formulas, common dosage forms, and preparation guidance.",
    },
    order: 3,
    publication: { status: "published" },
  },
];
