import type { Locale } from "@/i18n/config";

interface ShellCopy {
  readonly brandName: string;
  readonly brandDescription: string;
  readonly skipToContent: string;
  readonly primaryNavigation: string;
  readonly languageNavigation: string;
  readonly currentLanguage: string;
  readonly openMenu: string;
  readonly closeMenu: string;
  readonly contentGroup: string;
  readonly trustGroup: string;
  readonly footerIntro: string;
  readonly footerContent: string;
  readonly footerTrust: string;
  readonly footerContact: string;
}

export const LANGUAGE_NAMES: Record<Locale, string> = {
  "zh-CN": "简体",
  "zh-Hant": "繁體",
  en: "EN",
};

export const SHELL_COPY: Record<Locale, ShellCopy> = {
  "zh-CN": {
    brandName: "小钟岐医",
    brandDescription: "中医视觉图谱与临证笔记档案",
    skipToContent: "跳到主要内容",
    primaryNavigation: "主要导航",
    languageNavigation: "选择语言",
    currentLanguage: "当前语言：简体中文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    contentGroup: "内容浏览",
    trustGroup: "说明与联系",
    footerIntro: "持续整理经络、本草、方剂与临证知识的中医视觉档案。",
    footerContent: "图谱与内容",
    footerTrust: "信任与授权",
    footerContact: "联系与语言",
  },
  "zh-Hant": {
    brandName: "小鐘岐醫",
    brandDescription: "中醫視覺圖譜與臨證筆記檔案",
    skipToContent: "跳到主要內容",
    primaryNavigation: "主要導覽",
    languageNavigation: "選擇語言",
    currentLanguage: "目前語言：繁體中文",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    contentGroup: "內容瀏覽",
    trustGroup: "說明與聯絡",
    footerIntro: "持續整理經絡、本草、方劑與臨證知識的中醫視覺檔案。",
    footerContent: "圖譜與內容",
    footerTrust: "信任與授權",
    footerContact: "聯絡與語言",
  },
  en: {
    brandName: "Xiao Zhong Qi Yi",
    brandDescription: "A visual atlas and clinical-notes archive of Chinese medicine",
    skipToContent: "Skip to main content",
    primaryNavigation: "Primary navigation",
    languageNavigation: "Choose language",
    currentLanguage: "Current language: English",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contentGroup: "Browse content",
    trustGroup: "Information and contact",
    footerIntro: "A Chinese medicine visual archive continually organising meridians, materia medica, formulae, and clinical knowledge.",
    footerContent: "Atlas and notes",
    footerTrust: "Trust and licensing",
    footerContact: "Contact and language",
  },
};
