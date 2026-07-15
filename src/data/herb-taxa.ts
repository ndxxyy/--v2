import type {
  HerbTaxonKey,
  HierarchicalCategory,
} from "@/domain/content";

export const herbTaxa: readonly HierarchicalCategory<HerbTaxonKey>[] = [
  {
    key: "exterior-releasing",
    slug: "exterior-releasing",
    name: {
      "zh-CN": "解表药",
      "zh-Hant": "解表藥",
      en: "Exterior-releasing herbs",
    },
    summary: {
      "zh-CN": "按发散风寒药与发散风热药分节编目，汇集解表药视觉图谱。",
      "zh-Hant": "按發散風寒藥與發散風熱藥分節編目，彙集解表藥視覺圖譜。",
      en: "An illustrated catalogue arranged into wind-cold- and wind-heat-dispersing sections.",
    },
    order: 1,
    publication: { status: "published" },
  },
  {
    key: "wind-cold",
    slug: "wind-cold",
    parentKey: "exterior-releasing",
    name: {
      "zh-CN": "发散风寒药",
      "zh-Hant": "發散風寒藥",
      en: "Wind-cold-dispersing herbs",
    },
    summary: {
      "zh-CN": "解表药第一节，整理现有发散风寒药视觉图谱。",
      "zh-Hant": "解表藥第一節，整理現有發散風寒藥視覺圖譜。",
      en: "The first exterior-releasing section, presenting the existing wind-cold-dispersing herb plates.",
    },
    order: 1,
    publication: { status: "published" },
  },
  {
    key: "wind-heat",
    slug: "wind-heat",
    parentKey: "exterior-releasing",
    name: {
      "zh-CN": "发散风热药",
      "zh-Hant": "發散風熱藥",
      en: "Wind-heat-dispersing herbs",
    },
    summary: {
      "zh-CN": "解表药第二节，整理本次补充的发散风热药视觉图谱。",
      "zh-Hant": "解表藥第二節，整理本次補充的發散風熱藥視覺圖譜。",
      en: "The second exterior-releasing section, presenting the newly added wind-heat-dispersing herb plates.",
    },
    order: 2,
    publication: { status: "published" },
  },
];
