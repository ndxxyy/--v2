import type { Locale } from "@/i18n/config";

export interface AtlasCopy {
  readonly catalog: {
    readonly label: string;
    readonly title: string;
    readonly description: string;
    readonly categoriesLabel: string;
    readonly breadcrumbLabel: string;
    readonly herbTaxonomyLabel: string;
    readonly herbChapterContext: string;
    readonly herbChapterDirectory: string;
    readonly herbChapterBrowse: string;
    readonly herbSectionBrowse: string;
    readonly herbChapterOrdinal: string;
    readonly herbSectionOrdinal: string;
    readonly herbChapterMeta: string;
    readonly herbSectionMeta: string;
    readonly allWorks: string;
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly clearSearch: string;
    readonly filtersLabel: string;
    readonly currentAll: string;
    readonly currentCategory: string;
    readonly currentHerbTaxon: string;
    readonly currentSearch: string;
    readonly resultCount: {
      readonly one: string;
      readonly other: string;
    };
    readonly noResultsTitle: string;
    readonly noResultsDescription: string;
    readonly categoryEmptyTitle: string;
    readonly categoryEmptyDescription: string;
    readonly resetFilters: string;
    readonly loadMore: string;
    readonly showingCount: string;
    readonly viewWork: string;
    readonly codeLabel: string;
    readonly imageError: string;
    readonly retryImage: string;
  };
  readonly detail: {
    readonly back: string;
    readonly backTo: string;
    readonly categoryLabel: string;
    readonly classificationLabel: string;
    readonly codeLabel: string;
    readonly registrationLabel: string;
    readonly previewNoticeTitle: string;
    readonly previewNotice: string;
    readonly licensingAction: string;
    readonly contactAction: string;
    readonly galleryLabel: string;
    readonly viewLarge: string;
    readonly imageCount: string;
    readonly previous: string;
    readonly next: string;
    readonly close: string;
    readonly thumbnailsLabel: string;
    readonly selectImage: string;
    readonly imageError: string;
    readonly retryImage: string;
    readonly relatedTitle: string;
    readonly relatedDescription: string;
    readonly viewRelated: string;
  };
}

export const ATLAS_COPY: Readonly<Record<Locale, AtlasCopy>> = {
  "zh-CN": {
    catalog: {
      label: "图谱编目",
      title: "图谱库",
      description: "按作品编号、名称与分类检索已公开图谱。目录仅载入轻量缩略图，进入详情后再查看完整图组。",
      categoriesLabel: "图谱分类",
      breadcrumbLabel: "当前位置",
      herbTaxonomyLabel: "本草分类层级",
      herbChapterContext: "所在章",
      herbChapterDirectory: "本草总目录",
      herbChapterBrowse: "按章浏览",
      herbSectionBrowse: "本章分节",
      herbChapterOrdinal: "第{count}章",
      herbSectionOrdinal: "第{count}节",
      herbChapterMeta: "{chapters} 个章节 · {works} 件作品",
      herbSectionMeta: "{sections} 个分节 · {works} 件作品",
      allWorks: "全部作品",
      searchLabel: "搜索图谱",
      searchPlaceholder: "输入作品名、编号或关键词",
      clearSearch: "清除搜索",
      filtersLabel: "按分类筛选",
      currentAll: "当前：全部作品",
      currentCategory: "当前分类",
      currentHerbTaxon: "当前本草分类",
      currentSearch: "搜索词",
      resultCount: { one: "{count} 件作品", other: "{count} 件作品" },
      noResultsTitle: "没有符合当前条件的作品",
      noResultsDescription: "可清除搜索词或切换分类，目录不会用示例作品填充结果。",
      categoryEmptyTitle: "本分类暂没有可公开图像作品",
      categoryEmptyDescription: "只有具备真实图像并通过公开检查的作品才会进入目录。",
      resetFilters: "查看全部作品",
      loadMore: "继续显示 {count} 件",
      showingCount: "已显示 {shown} / {total} 件",
      viewWork: "查看图组",
      codeLabel: "作品编号",
      imageError: "缩略图暂时无法显示",
      retryImage: "重试",
    },
    detail: {
      back: "返回图谱库",
      backTo: "返回{name}",
      categoryLabel: "分类",
      classificationLabel: "本草分类",
      codeLabel: "作品编号",
      registrationLabel: "版权登记号",
      previewNoticeTitle: "公开预览说明",
      previewNotice: "页面展示的是公开预览图，用于学习与资料浏览；图谱内容不构成诊断或治疗建议。",
      licensingAction: "了解授权合作",
      contactAction: "咨询此作品",
      galleryLabel: "作品图组",
      viewLarge: "查看大图",
      imageCount: "第 {current} 张，共 {total} 张",
      previous: "上一张",
      next: "下一张",
      close: "关闭大图",
      thumbnailsLabel: "图组缩略图",
      selectImage: "查看：{title}",
      imageError: "图片暂时无法显示",
      retryImage: "重试",
      relatedTitle: "同类图谱",
      relatedDescription: "继续浏览同一分类中的其他公开作品。",
      viewRelated: "查看作品",
    },
  },
  "zh-Hant": {
    catalog: {
      label: "圖譜編目",
      title: "圖譜庫",
      description: "按作品編號、名稱與分類檢索已公開圖譜。目錄只載入輕量縮圖，進入詳情後再查看完整圖組。",
      categoriesLabel: "圖譜分類",
      breadcrumbLabel: "目前位置",
      herbTaxonomyLabel: "本草分類層級",
      herbChapterContext: "所在章",
      herbChapterDirectory: "本草總目錄",
      herbChapterBrowse: "按章瀏覽",
      herbSectionBrowse: "本章分節",
      herbChapterOrdinal: "第{count}章",
      herbSectionOrdinal: "第{count}節",
      herbChapterMeta: "{chapters} 個章節 · {works} 件作品",
      herbSectionMeta: "{sections} 個分節 · {works} 件作品",
      allWorks: "全部作品",
      searchLabel: "搜尋圖譜",
      searchPlaceholder: "輸入作品名、編號或關鍵詞",
      clearSearch: "清除搜尋",
      filtersLabel: "按分類篩選",
      currentAll: "目前：全部作品",
      currentCategory: "目前分類",
      currentHerbTaxon: "目前本草分類",
      currentSearch: "搜尋詞",
      resultCount: { one: "{count} 件作品", other: "{count} 件作品" },
      noResultsTitle: "沒有符合目前條件的作品",
      noResultsDescription: "可清除搜尋詞或切換分類，目錄不會用示例作品填充結果。",
      categoryEmptyTitle: "本分類暫沒有可公開圖像作品",
      categoryEmptyDescription: "只有具備真實圖像並通過公開檢查的作品才會進入目錄。",
      resetFilters: "查看全部作品",
      loadMore: "繼續顯示 {count} 件",
      showingCount: "已顯示 {shown} / {total} 件",
      viewWork: "查看圖組",
      codeLabel: "作品編號",
      imageError: "縮圖暫時無法顯示",
      retryImage: "重試",
    },
    detail: {
      back: "返回圖譜庫",
      backTo: "返回{name}",
      categoryLabel: "分類",
      classificationLabel: "本草分類",
      codeLabel: "作品編號",
      registrationLabel: "版權登記號",
      previewNoticeTitle: "公開預覽說明",
      previewNotice: "頁面展示的是公開預覽圖，用於學習與資料瀏覽；圖譜內容不構成診斷或治療建議。",
      licensingAction: "了解授權合作",
      contactAction: "諮詢此作品",
      galleryLabel: "作品圖組",
      viewLarge: "查看大圖",
      imageCount: "第 {current} 張，共 {total} 張",
      previous: "上一張",
      next: "下一張",
      close: "關閉大圖",
      thumbnailsLabel: "圖組縮圖",
      selectImage: "查看：{title}",
      imageError: "圖片暫時無法顯示",
      retryImage: "重試",
      relatedTitle: "同類圖譜",
      relatedDescription: "繼續瀏覽同一分類中的其他公開作品。",
      viewRelated: "查看作品",
    },
  },
  en: {
    catalog: {
      label: "Atlas catalogue",
      title: "Visual Atlas",
      description: "Search the public collection by title, work code, or category. The catalogue loads lightweight thumbnails; full plate sets open on the detail page.",
      categoriesLabel: "Atlas categories",
      breadcrumbLabel: "Current location",
      herbTaxonomyLabel: "Materia medica hierarchy",
      herbChapterContext: "Current chapter",
      herbChapterDirectory: "Materia medica directory",
      herbChapterBrowse: "Browse by chapter",
      herbSectionBrowse: "Sections in this chapter",
      herbChapterOrdinal: "Chapter {count}",
      herbSectionOrdinal: "Section {count}",
      herbChapterMeta: "{chapters} chapters · {works} works",
      herbSectionMeta: "{sections} sections · {works} works",
      allWorks: "All works",
      searchLabel: "Search the atlas",
      searchPlaceholder: "Enter a title, work code, or keyword",
      clearSearch: "Clear search",
      filtersLabel: "Filter by category",
      currentAll: "Current: all works",
      currentCategory: "Current category",
      currentHerbTaxon: "Current materia medica category",
      currentSearch: "Search term",
      resultCount: { one: "{count} work", other: "{count} works" },
      noResultsTitle: "No works match these conditions",
      noResultsDescription: "Clear the search or choose another category. Sample works are never used to fill the catalogue.",
      categoryEmptyTitle: "No public image works in this category yet",
      categoryEmptyDescription: "Only works with real images that pass the publication check appear in the catalogue.",
      resetFilters: "View all works",
      loadMore: "Show {count} more",
      showingCount: "Showing {shown} of {total}",
      viewWork: "View plate set",
      codeLabel: "Work code",
      imageError: "Thumbnail unavailable",
      retryImage: "Retry",
    },
    detail: {
      back: "Back to the atlas",
      backTo: "Back to {name}",
      categoryLabel: "Category",
      classificationLabel: "Materia medica category",
      codeLabel: "Work code",
      registrationLabel: "Copyright registration",
      previewNoticeTitle: "About this public preview",
      previewNotice: "These public previews are provided for study and reference. Atlas content is not diagnostic or treatment advice.",
      licensingAction: "Explore licensing",
      contactAction: "Ask about this work",
      galleryLabel: "Plate set",
      viewLarge: "Open large view",
      imageCount: "Image {current} of {total}",
      previous: "Previous",
      next: "Next",
      close: "Close large view",
      thumbnailsLabel: "Plate thumbnails",
      selectImage: "View: {title}",
      imageError: "Image unavailable",
      retryImage: "Retry",
      relatedTitle: "Related atlas works",
      relatedDescription: "Continue with other public works in the same category.",
      viewRelated: "View work",
    },
  },
};
