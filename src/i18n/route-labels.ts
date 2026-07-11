import type { Locale } from "./config";

export type RouteLabelKey =
  | "home"
  | "atlas"
  | "meridians"
  | "herbs"
  | "formulas"
  | "atlasDetail"
  | "cases"
  | "caseDetail"
  | "licensing"
  | "copyright"
  | "about"
  | "contact";

const ROUTE_LABELS: Record<RouteLabelKey, Record<Locale, string>> = {
  home: { "zh-CN": "小钟岐医", "zh-Hant": "小鐘岐醫", en: "Xiao Zhong Qi Yi" },
  atlas: { "zh-CN": "图谱库", "zh-Hant": "圖譜庫", en: "Atlas" },
  meridians: { "zh-CN": "经络图谱", "zh-Hant": "經絡圖譜", en: "Meridian Atlas" },
  herbs: { "zh-CN": "本草图谱", "zh-Hant": "本草圖譜", en: "Materia Medica Atlas" },
  formulas: { "zh-CN": "经方图谱", "zh-Hant": "經方圖譜", en: "Classical Formula Atlas" },
  atlasDetail: { "zh-CN": "图谱详情", "zh-Hant": "圖譜詳情", en: "Atlas Detail" },
  cases: { "zh-CN": "临证笔记", "zh-Hant": "臨證筆記", en: "Clinical Notes" },
  caseDetail: { "zh-CN": "临证笔记详情", "zh-Hant": "臨證筆記詳情", en: "Clinical Note" },
  licensing: { "zh-CN": "授权合作", "zh-Hant": "授權合作", en: "Licensing" },
  copyright: { "zh-CN": "版权说明", "zh-Hant": "版權說明", en: "Copyright" },
  about: { "zh-CN": "关于作者", "zh-Hant": "關於作者", en: "About" },
  contact: { "zh-CN": "联系与交流", "zh-Hant": "聯絡與交流", en: "Contact" },
};

export function getRouteLabel(locale: Locale, key: RouteLabelKey): string {
  return ROUTE_LABELS[key][locale];
}
