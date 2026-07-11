import type { CaseCategoryKey, Category } from "@/domain/content";

export const caseCategories = [
  {
    key: "internal-medicine",
    name: {
      "zh-CN": "内科",
      "zh-Hant": "內科",
      en: "Internal medicine",
    },
    summary: {
      "zh-CN": "用于归类内科相关的临证记录与辨证整理。",
      "zh-Hant": "用於歸類內科相關的臨證記錄與辨證整理。",
      en: "For reviewed clinical records and pattern-based notes related to internal medicine.",
    },
    order: 10,
    publication: { status: "published" },
  },
  {
    key: "gynecology",
    name: {
      "zh-CN": "妇科",
      "zh-Hant": "婦科",
      en: "Gynaecology",
    },
    summary: {
      "zh-CN": "用于归类妇科相关的临证观察与记录。",
      "zh-Hant": "用於歸類婦科相關的臨證觀察與記錄。",
      en: "For reviewed clinical observations and records related to gynaecology.",
    },
    order: 20,
    publication: { status: "published" },
  },
  {
    key: "pediatrics",
    name: {
      "zh-CN": "儿科",
      "zh-Hant": "兒科",
      en: "Paediatrics",
    },
    summary: {
      "zh-CN": "用于归类儿科相关的临证观察与记录。",
      "zh-Hant": "用於歸類兒科相關的臨證觀察與記錄。",
      en: "For reviewed clinical observations and records related to paediatrics.",
    },
    order: 30,
    publication: { status: "published" },
  },
  {
    key: "acupuncture",
    name: {
      "zh-CN": "针灸",
      "zh-Hant": "針灸",
      en: "Acupuncture",
    },
    summary: {
      "zh-CN": "用于归类针灸相关的临证过程与整理记录。",
      "zh-Hant": "用於歸類針灸相關的臨證過程與整理記錄。",
      en: "For reviewed records concerning acupuncture-related clinical processes.",
    },
    order: 40,
    publication: { status: "published" },
  },
  {
    key: "care-notes",
    name: {
      "zh-CN": "调理随笔",
      "zh-Hant": "調理隨筆",
      en: "Care notes",
    },
    summary: {
      "zh-CN": "用于归类日常调理观察与非个案式临证随笔。",
      "zh-Hant": "用於歸類日常調理觀察與非個案式臨證隨筆。",
      en: "For reviewed observations on everyday care and non-case clinical reflections.",
    },
    order: 50,
    publication: { status: "published" },
  },
  {
    key: "other-clinical-notes",
    name: {
      "zh-CN": "其他临证记录",
      "zh-Hant": "其他臨證記錄",
      en: "Other clinical records",
    },
    summary: {
      "zh-CN": "用于归类不属于上述范围、但已完成审核的临证记录。",
      "zh-Hant": "用於歸類不屬於上述範圍、但已完成審核的臨證記錄。",
      en: "For reviewed clinical records that do not fall within the categories above.",
    },
    order: 60,
    publication: { status: "published" },
  },
] satisfies readonly Category<CaseCategoryKey>[];
