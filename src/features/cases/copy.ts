import type { Locale } from "@/i18n/config";

interface CasesCopy {
  readonly title: string;
  readonly description: string;
  readonly principleTitle: string;
  readonly principleDescription: string;
  readonly directoryTitle: string;
  readonly directoryDescription: string;
  readonly emptyTitle: string;
  readonly emptyDescription: string;
  readonly emptyPrivacy: string;
  readonly filterLabel: string;
  readonly allFilter: string;
  readonly currentFilter: (category: string) => string;
  readonly resultCount: (count: number) => string;
  readonly readCase: string;
  readonly browseAtlas: string;
  readonly aboutAuthor: string;
  readonly policyTitle: string;
  readonly policyDescription: string;
  readonly policyItems: readonly {
    readonly title: string;
    readonly description: string;
  }[];
  readonly medicalBoundary: string;
  readonly taxonomyTitle: string;
  readonly taxonomyDescription: string;
  readonly detail: {
    readonly back: string;
    readonly publishedLabel: string;
    readonly categoryLabel: string;
    readonly boundaryTitle: string;
    readonly boundaryDescription: string;
    readonly relatedTitle: string;
    readonly relatedLabel: string;
    readonly consultation: string;
    readonly moreCases: string;
    readonly noticeTitles: Readonly<Record<"information" | "medical-boundary" | "rights", string>>;
  };
}

export const CASES_COPY: Readonly<Record<Locale, CasesCopy>> = {
  "zh-CN": {
    title: "临证笔记",
    description:
      "整理真实诊疗中的辨证思路、处置过程与阶段观察。所有公开内容均经过脱敏与审核，仅作学术交流和经验记录，不构成诊疗建议。",
    principleTitle: "审慎整理，有限公开",
    principleDescription:
      "每篇记录均须完成身份信息脱敏、患者授权、内容审核与发布确认。未满足公开条件的内容，不进入本站目录。",
    directoryTitle: "公开目录",
    directoryDescription: "此处仅收录已经完成整理、脱敏与审核，并获得相应公开授权的真实临证记录。",
    emptyTitle: "临证笔记正在整理中",
    emptyDescription:
      "首批内容仍在进行资料整理、隐私脱敏与医学表述审核，完成全部流程后将在此陆续公开。",
    emptyPrivacy:
      "本栏目不使用虚构案例，也不以患者见证或疗效承诺作为宣传内容。",
    filterLabel: "按临证笔记分类筛选",
    allFilter: "全部",
    currentFilter: (category) => `当前分类：${category}`,
    resultCount: (count) => `共 ${count} 篇公开记录`,
    readCase: "阅读全文",
    browseAtlas: "浏览视觉图谱",
    aboutAuthor: "认识小钟岐医",
    policyTitle: "公开原则",
    policyDescription:
      "真实记录并不等于可以直接公开。每一篇临证笔记，都需要同时满足以下四项基本原则。",
    policyItems: [
      { title: "隐私已经脱敏", description: "删除姓名、联系方式、详细住址、完整出生日期及其他能够识别个人身份的信息。" },
      { title: "已取得公开授权", description: "在充分说明公开范围与使用方式后，取得患者对相关内容的明确授权。" },
      { title: "内容经过审核", description: "核对诊疗过程、医学表述与资料完整性，区分客观记录、个人判断与阶段性观察。" },
      { title: "信息完整可溯", description: "标明整理时间、审核状态与公开日期；涉及后续变化时，对原记录进行补充说明。" },
    ],
    medicalBoundary: "本栏目记录个体诊疗过程，不代表普遍疗效，也不能替代面诊、检查及专业医疗建议。",
    taxonomyTitle: "分类方法",
    taxonomyDescription:
      "分类用于组织未来通过审核的真实内容，不代表当前已有文章，也不构成执业范围、资质或疗效说明。",
    detail: {
      back: "返回医案目录",
      publishedLabel: "发布日期",
      categoryLabel: "分类",
      boundaryTitle: "医学信息边界",
      boundaryDescription:
        "本文仅用于呈现经审核的临证整理，不提供远程诊断，不替代面诊，也不构成疗效承诺。个体情况不同，请通过正式就诊途径获得评估。",
      relatedTitle: "继续了解",
      relatedLabel: "医案相关入口",
      consultation: "查看就诊说明",
      moreCases: "更多医案",
      noticeTitles: {
        information: "内容说明",
        "medical-boundary": "医学信息边界",
        rights: "资料与使用说明",
      },
    },
  },
  "zh-Hant": {
    title: "臨證筆記",
    description:
      "整理真實診療中的辨證思路、處置過程與階段觀察。所有公開內容均經過脫敏與審核，僅作學術交流和經驗記錄，不構成診療建議。",
    principleTitle: "審慎整理，有限公開",
    principleDescription:
      "每篇記錄均須完成身份資訊脫敏、患者授權、內容審核與發佈確認。未符合公開條件的內容，不進入本站目錄。",
    directoryTitle: "公開目錄",
    directoryDescription: "此處僅收錄已完成整理、脫敏與審核，並獲得相應公開授權的真實臨證記錄。",
    emptyTitle: "臨證筆記正在整理中",
    emptyDescription:
      "首批內容仍在進行資料整理、私隱脫敏與醫學表述審核，完成全部流程後將在此陸續公開。",
    emptyPrivacy:
      "本欄目不使用虛構案例，也不以患者見證或療效承諾作為宣傳內容。",
    filterLabel: "依臨證筆記分類篩選",
    allFilter: "全部",
    currentFilter: (category) => `目前分類：${category}`,
    resultCount: (count) => `共 ${count} 篇公開記錄`,
    readCase: "閱讀全文",
    browseAtlas: "瀏覽視覺圖譜",
    aboutAuthor: "認識小鐘岐醫",
    policyTitle: "公開原則",
    policyDescription:
      "真實記錄並不等於可以直接公開。每一篇臨證筆記，都需要同時符合以下四項基本原則。",
    policyItems: [
      { title: "私隱已經脫敏", description: "刪除姓名、聯絡方式、詳細住址、完整出生日期及其他能夠識別個人身份的資訊。" },
      { title: "已取得公開授權", description: "在充分說明公開範圍與使用方式後，取得患者對相關內容的明確授權。" },
      { title: "內容經過審核", description: "核對診療過程、醫學表述與資料完整性，區分客觀記錄、個人判斷與階段性觀察。" },
      { title: "資訊完整可溯", description: "標明整理時間、審核狀態與公開日期；涉及後續變化時，對原記錄進行補充說明。" },
    ],
    medicalBoundary: "本欄目記錄個體診療過程，不代表普遍療效，也不能替代面診、檢查及專業醫療建議。",
    taxonomyTitle: "分類方法",
    taxonomyDescription:
      "分類用於組織未來通過審核的真實內容，不代表目前已有文章，也不構成執業範圍、資質或療效說明。",
    detail: {
      back: "返回醫案目錄",
      publishedLabel: "發佈日期",
      categoryLabel: "分類",
      boundaryTitle: "醫學資訊邊界",
      boundaryDescription:
        "本文僅用於呈現經審核的臨證整理，不提供遠端診斷，不替代面診，也不構成療效承諾。個別情況不同，請透過正式就診途徑獲得評估。",
      relatedTitle: "繼續瞭解",
      relatedLabel: "醫案相關入口",
      consultation: "查看就診說明",
      moreCases: "更多醫案",
      noticeTitles: {
        information: "內容說明",
        "medical-boundary": "醫學資訊邊界",
        rights: "資料與使用說明",
      },
    },
  },
  en: {
    title: "Clinical notes",
    description:
      "Authentic clinical records are organised as a literature index. Public text keeps only what is needed to understand the note and never presents an individual experience as proof of efficacy.",
    principleTitle: "Careful preparation, limited publication",
    principleDescription:
      "Anonymisation, patient authorisation, editorial review and a publication date are all required. A record stays out of the public index until every condition is met.",
    directoryTitle: "Public index",
    directoryDescription:
      "The index contains only authentic records that meet every publication condition and have reviewed text in the current language.",
    emptyTitle: "No clinical notes are currently public",
    emptyDescription:
      "An authentic record can enter this index only after anonymisation, patient authorisation and editorial review are complete and a publication date is confirmed. Sample or invented cases are never used to fill the page.",
    emptyPrivacy:
      "Public notes do not show identity details, original test sheets, recognisable faces, full dates of birth, patient testimonials or promises of efficacy.",
    filterLabel: "Filter clinical notes by category",
    allFilter: "All",
    currentFilter: (category) => `Current category: ${category}`,
    resultCount: (count) => `${count} public ${count === 1 ? "record" : "records"}`,
    readCase: "Read note",
    browseAtlas: "Browse the atlas",
    aboutAuthor: "About the author",
    policyTitle: "Publication conditions",
    policyDescription:
      "These four checks are shared publication gates. They are not decorative labels, and no single status can replace the others.",
    policyItems: [
      { title: "Anonymisation approved", description: "Names, contact details, precise addresses, full dates of birth and other identifying details are removed." },
      { title: "Patient authorisation approved", description: "The record has patient authorisation suitable for public web publication." },
      { title: "Editorial review approved", description: "Medical wording, privacy boundaries and completeness are checked without testimonials or efficacy claims." },
      { title: "Publication information complete", description: "The record is published, the current-language text is reviewed, and a genuine publication date is present." },
    ],
    medicalBoundary: "These notes record individual clinical processes. They do not represent general outcomes or replace an in-person consultation, examination, or professional medical advice.",
    taxonomyTitle: "Classification",
    taxonomyDescription:
      "Categories organise future authentic material that passes review. They do not imply that articles are currently available, nor do they describe credentials, scope of practice or outcomes.",
    detail: {
      back: "Back to clinical notes",
      publishedLabel: "Published",
      categoryLabel: "Category",
      boundaryTitle: "Medical-information boundary",
      boundaryDescription:
        "This reviewed clinical note is provided for information only. It does not offer remote diagnosis, replace an in-person consultation or promise an outcome. Individual circumstances differ; use an appropriate consultation route for assessment.",
      relatedTitle: "Continue",
      relatedLabel: "Related clinical-note links",
      consultation: "Consultation information",
      moreCases: "More clinical notes",
      noticeTitles: {
        information: "Content note",
        "medical-boundary": "Medical-information boundary",
        rights: "Material and usage note",
      },
    },
  },
};
