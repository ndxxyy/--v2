import type { LicenseScenarioKey } from "@/domain/content";
import type { Locale } from "@/i18n/config";

interface FeeItem {
  readonly label: string;
  readonly value: string;
}

interface ScenarioPricingCopy {
  readonly method: string;
  readonly fees: readonly FeeItem[];
  readonly uses: readonly string[];
  readonly note: string;
  readonly action: string;
  readonly conditionLabel: string;
  readonly condition: string;
}

interface LicensingPricingCopy {
  readonly referenceFeeTitle: string;
  readonly referenceFeeNote: string;
  readonly supplementTitle: string;
  readonly applicableTitle: string;
  readonly scenarioCards: Readonly<Record<LicenseScenarioKey, ScenarioPricingCopy>>;
  readonly priceNotes: {
    readonly title: string;
    readonly intro: string;
    readonly permissionTypesTitle: string;
    readonly permissionTypes: readonly string[];
    readonly factorsTitle: string;
    readonly factors: readonly string[];
    readonly emphasis: string;
  };
  readonly contactIntro: string;
}

export const LICENSING_PRICING_COPY: Record<Locale, LicensingPricingCopy> = {
  "zh-CN": {
    referenceFeeTitle: "授权参考",
    referenceFeeNote: "实际授权费用将根据使用范围、数量、传播方式及授权期限确认。",
    supplementTitle: "说明",
    applicableTitle: "适用于",
    scenarioCards: {
      "personal-study": {
        method: "获取学习授权",
        fees: [
          { label: "学生学习版", value: "¥49 / 套起" },
          { label: "完整学习版", value: "¥99 / 套起" },
        ],
        uses: ["考研复习", "个人学习", "平板阅读", "打印参考"],
        note: "网站展示图用于在线浏览，高清学习版本用于个人整理和学习。",
        action: "获取学习版本",
        conditionLabel: "授权条件",
        condition: "仅限本人学习使用",
      },
      "clinic-display": {
        method: "申请展示授权",
        fees: [
          { label: "单张展示授权", value: "¥199 / 张起" },
          { label: "多图展示方案", value: "根据展示数量、尺寸及空间需求评估" },
        ],
        uses: ["医馆展示", "诊室墙面", "候诊区科普展示"],
        note: "如涉及大尺寸印刷、展板设计或空间视觉方案，将根据项目需求单独评估。",
        action: "申请展示授权",
        conditionLabel: "授权条件",
        condition: "限定场所使用",
      },
      "course-lecture": {
        method: "申请教学授权",
        fees: [
          { label: "教学授权", value: "¥299 / 张起" },
          { label: "课程图谱包", value: "¥1999 起" },
          { label: "系列课程合作", value: "项目评估" },
        ],
        uses: ["线下授课", "学术讲座", "培训课程", "教学资料"],
        note: "授权范围根据授课人数、课程周期、使用作品数量及传播方式确认。",
        action: "申请教学授权",
        conditionLabel: "授权条件",
        condition: "限定课程使用",
      },
      "social-media": {
        method: "申请内容授权",
        fees: [
          { label: "内容传播授权", value: "¥99–299 / 张" },
          { label: "内容组合授权", value: "¥699 起" },
        ],
        uses: ["微信公众号", "小红书", "抖音", "视频号", "B站科普内容"],
        note: "授权用于内容展示，不包含产品销售、课程售卖、广告投放及第三方转授权。",
        action: "申请内容授权",
        conditionLabel: "授权条件",
        condition: "限定账号使用",
      },
      "publishing-commercial": {
        method: "定制授权方案",
        fees: [
          { label: "商业使用授权", value: "¥999 / 张起" },
          { label: "文创 / 包装 / 出版", value: "项目评估" },
          { label: "独家授权", value: "单独评估" },
        ],
        uses: ["图书出版", "期刊", "文创产品", "商品包装", "品牌宣传"],
        note: "根据发行数量、传播渠道、授权期限、地区范围及是否独家授权综合评估。",
        action: "提交合作需求",
        conditionLabel: "授权条件",
        condition: "以授权文件为准",
      },
      "custom-creation": {
        method: "定制项目评估",
        fees: [
          { label: "定制图谱", value: "¥599 / 张起" },
          { label: "系列定制", value: "项目评估" },
          { label: "排版 / 线稿 / 多尺寸适配", value: "单独评估" },
        ],
        uses: ["中药图谱", "经络图谱", "课程视觉", "文创视觉", "展板设计"],
        note: "根据创作难度、资料整理、修改次数、文件规格及授权范围确认。",
        action: "提交创作需求",
        conditionLabel: "授权条件",
        condition: "以项目合同为准",
      },
    },
    priceNotes: {
      title: "关于授权",
      intro: "小钟岐医图谱采用分级授权体系。",
      permissionTypesTitle: "不同用途对应不同使用权限",
      permissionTypes: ["个人学习", "展示使用", "教学使用", "内容传播", "商业项目"],
      factorsTitle: "授权费用根据以下因素综合确认",
      factors: ["使用范围", "使用数量", "传播渠道", "授权期限", "是否商业用途"],
      emphasis: "小钟岐医不是出售普通图片，而是提供中医视觉资产授权。",
    },
    contactIntro: "请通过下方电话或邮箱提交作品名称或编号、使用场景、传播范围与所需文件规格。网站不会直接收款或自动生成授权，最终范围与费用以双方确认的授权文件为准。",
  },
  "zh-Hant": {
    referenceFeeTitle: "授權參考",
    referenceFeeNote: "實際授權費用將根據使用範圍、數量、傳播方式及授權期限確認。",
    supplementTitle: "說明",
    applicableTitle: "適用於",
    scenarioCards: {
      "personal-study": {
        method: "獲取學習授權",
        fees: [
          { label: "學生學習版", value: "¥49 / 套起" },
          { label: "完整學習版", value: "¥99 / 套起" },
        ],
        uses: ["考研複習", "個人學習", "平板閱讀", "列印參考"],
        note: "網站展示圖用於線上瀏覽，高清學習版本用於個人整理和學習。",
        action: "獲取學習版本",
        conditionLabel: "授權條件",
        condition: "僅限本人學習使用",
      },
      "clinic-display": {
        method: "申請展示授權",
        fees: [
          { label: "單張展示授權", value: "¥199 / 張起" },
          { label: "多圖展示方案", value: "根據展示數量、尺寸及空間需求評估" },
        ],
        uses: ["醫館展示", "診室牆面", "候診區科普展示"],
        note: "如涉及大尺寸印刷、展板設計或空間視覺方案，將根據項目需求單獨評估。",
        action: "申請展示授權",
        conditionLabel: "授權條件",
        condition: "限定場所使用",
      },
      "course-lecture": {
        method: "申請教學授權",
        fees: [
          { label: "教學授權", value: "¥299 / 張起" },
          { label: "課程圖譜包", value: "¥1999 起" },
          { label: "系列課程合作", value: "項目評估" },
        ],
        uses: ["線下授課", "學術講座", "培訓課程", "教學資料"],
        note: "授權範圍根據授課人數、課程週期、使用作品數量及傳播方式確認。",
        action: "申請教學授權",
        conditionLabel: "授權條件",
        condition: "限定課程使用",
      },
      "social-media": {
        method: "申請內容授權",
        fees: [
          { label: "內容傳播授權", value: "¥99–299 / 張" },
          { label: "內容組合授權", value: "¥699 起" },
        ],
        uses: ["微信公眾號", "小紅書", "抖音", "視頻號", "B站科普內容"],
        note: "授權用於內容展示，不包含產品銷售、課程售賣、廣告投放及第三方轉授權。",
        action: "申請內容授權",
        conditionLabel: "授權條件",
        condition: "限定帳號使用",
      },
      "publishing-commercial": {
        method: "定製授權方案",
        fees: [
          { label: "商業使用授權", value: "¥999 / 張起" },
          { label: "文創 / 包裝 / 出版", value: "項目評估" },
          { label: "獨家授權", value: "單獨評估" },
        ],
        uses: ["圖書出版", "期刊", "文創產品", "商品包裝", "品牌宣傳"],
        note: "根據發行數量、傳播渠道、授權期限、地區範圍及是否獨家授權綜合評估。",
        action: "提交合作需求",
        conditionLabel: "授權條件",
        condition: "以授權文件為準",
      },
      "custom-creation": {
        method: "定製項目評估",
        fees: [
          { label: "定製圖譜", value: "¥599 / 張起" },
          { label: "系列定製", value: "項目評估" },
          { label: "排版 / 線稿 / 多尺寸適配", value: "單獨評估" },
        ],
        uses: ["中藥圖譜", "經絡圖譜", "課程視覺", "文創視覺", "展板設計"],
        note: "根據創作難度、資料整理、修改次數、文件規格及授權範圍確認。",
        action: "提交創作需求",
        conditionLabel: "授權條件",
        condition: "以項目合同為準",
      },
    },
    priceNotes: {
      title: "關於授權",
      intro: "小鐘岐醫圖譜採用分級授權體系。",
      permissionTypesTitle: "不同用途對應不同使用權限",
      permissionTypes: ["個人學習", "展示使用", "教學使用", "內容傳播", "商業項目"],
      factorsTitle: "授權費用根據以下因素綜合確認",
      factors: ["使用範圍", "使用數量", "傳播渠道", "授權期限", "是否商業用途"],
      emphasis: "小鐘岐醫不是出售普通圖片，而是提供中醫視覺資產授權。",
    },
    contactIntro: "請透過下方電話或電郵提交作品名稱或編號、使用場景、傳播範圍與所需文件規格。網站不會直接收款或自動生成授權，最終範圍與費用以雙方確認的授權文件為準。",
  },
  en: {
    referenceFeeTitle: "Licence reference",
    referenceFeeNote: "Final licensing fees are confirmed according to scope of use, quantity, distribution method, and licence term.",
    supplementTitle: "Use notes",
    applicableTitle: "Suitable for",
    scenarioCards: {
      "personal-study": {
        method: "Request study rights",
        fees: [
          { label: "Student study edition", value: "From ¥49 / set" },
          { label: "Complete study edition", value: "From ¥99 / set" },
        ],
        uses: ["Exam revision", "Personal study", "Tablet reading", "Printed reference"],
        note: "Website images are for online viewing; high-resolution study versions are for personal organisation and study.",
        action: "Request a study version",
        conditionLabel: "Licence condition",
        condition: "Personal study only",
      },
      "clinic-display": {
        method: "Request display rights",
        fees: [
          { label: "Single-work display licence", value: "From ¥199 / image" },
          { label: "Multi-work display plan", value: "Assessed by quantity, dimensions, and spatial requirements" },
        ],
        uses: ["Chinese medicine practice displays", "Clinic walls", "Patient education areas"],
        note: "Large-format printing, display-board design, and spatial visual planning are assessed against the project requirements.",
        action: "Request display rights",
        conditionLabel: "Licence condition",
        condition: "Limited to the agreed premises",
      },
      "course-lecture": {
        method: "Request teaching rights",
        fees: [
          { label: "Teaching licence", value: "From ¥299 / image" },
          { label: "Course atlas pack", value: "From ¥1,999" },
          { label: "Course-series collaboration", value: "Project assessment" },
        ],
        uses: ["In-person teaching", "Academic lectures", "Training courses", "Teaching materials"],
        note: "Scope is confirmed according to audience size, course duration, number of works, and distribution method.",
        action: "Request teaching rights",
        conditionLabel: "Licence condition",
        condition: "Limited to the agreed course",
      },
      "social-media": {
        method: "Request content rights",
        fees: [
          { label: "Content-distribution licence", value: "¥99–299 / image" },
          { label: "Content bundle licence", value: "From ¥699" },
        ],
        uses: ["WeChat Official Accounts", "Xiaohongshu", "Douyin", "WeChat Channels", "Bilibili educational content"],
        note: "Rights cover content display only. Product sales, paid courses, advertising, and third-party sublicensing are not included.",
        action: "Request content rights",
        conditionLabel: "Licence condition",
        condition: "Limited to the agreed account",
      },
      "publishing-commercial": {
        method: "Tailored licensing plan",
        fees: [
          { label: "Commercial-use licence", value: "From ¥999 / image" },
          { label: "Cultural products / packaging / publishing", value: "Project assessment" },
          { label: "Exclusive licence", value: "Assessed separately" },
        ],
        uses: ["Book publishing", "Journals", "Cultural products", "Product packaging", "Brand communications"],
        note: "Fees are assessed against production quantity, distribution channels, licence term, territory, and exclusivity.",
        action: "Submit a project brief",
        conditionLabel: "Licence condition",
        condition: "As set out in the licensing document",
      },
      "custom-creation": {
        method: "Commission assessment",
        fees: [
          { label: "Commissioned atlas", value: "From ¥599 / image" },
          { label: "Series commission", value: "Project assessment" },
          { label: "Layout / line art / multi-size adaptation", value: "Assessed separately" },
        ],
        uses: ["Materia medica atlases", "Meridian atlases", "Course visuals", "Cultural-product visuals", "Display-board design"],
        note: "Fees are confirmed according to creative complexity, source organisation, revision rounds, file specifications, and licensing scope.",
        action: "Submit a creative brief",
        conditionLabel: "Licence condition",
        condition: "As set out in the project contract",
      },
    },
    priceNotes: {
      title: "About licensing",
      intro: "Xiao Zhong Qi Yi atlases use a tiered licensing system.",
      permissionTypesTitle: "Different uses carry different permissions",
      permissionTypes: ["Personal study", "Display use", "Teaching use", "Content distribution", "Commercial projects"],
      factorsTitle: "Licensing fees are confirmed against",
      factors: ["Scope of use", "Quantity", "Distribution channels", "Licence term", "Commercial status"],
      emphasis: "Xiao Zhong Qi Yi does not sell ordinary images; it licenses Chinese medicine visual assets.",
    },
    contactIntro: "Use the phone or email below to provide the work name or reference, intended use, distribution scope, and required file specifications. The website does not take direct payment or issue an automatic licence; final scope and fees are governed by the licensing document confirmed by both parties.",
  },
};
