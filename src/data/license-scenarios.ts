import type { LicenseScenario } from "@/domain/content";

export const licenseScenarios: readonly LicenseScenario[] = [
  {
    id: "personal-study",
    title: {
      "zh-CN": "个人学习",
      "zh-Hant": "個人學習",
      en: "Personal study",
    },
    summary: {
      "zh-CN": "用于个人收藏、学习参考与非公开研究，不包含传播、转载及商业使用。",
      "zh-Hant": "用於個人、非商業的學習筆記與自學材料。",
      en: "For personal, non-commercial study notes and learning materials.",
    },
    terms: {
      "zh-CN": [
        {
          type: "list",
          style: "unordered",
          items: ["作品名称或编号", "所需尺寸与文件规格", "个人学习用途说明"],
        },
      ],
      "zh-Hant": [
        {
          type: "list",
          style: "unordered",
          items: ["說明所需作品", "說明使用載體", "不得轉售或再次分發"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Identify the work required",
            "Describe how it will be used",
            "No resale or redistribution",
          ],
        },
      ],
    },
    pricing: { mode: "quote" },
    publication: { status: "published" },
  },
  {
    id: "clinic-display",
    title: {
      "zh-CN": "诊室展示",
      "zh-Hant": "診室展示",
      en: "Clinic display",
    },
    summary: {
      "zh-CN": "用于诊所、医馆及相关专业空间内的固定展示与患者科普。",
      "zh-Hant": "用於診室、診所或相關空間內的固定展示與溝通輔助。",
      en: "For fixed display and communication support in a clinic or consultation space.",
    },
    terms: {
      "zh-CN": [
        {
          type: "list",
          style: "unordered",
          items: ["作品编号与展示数量", "使用场所及展示形式", "所需尺寸与文件规格"],
        },
      ],
      "zh-Hant": [
        {
          type: "list",
          style: "unordered",
          items: ["說明展示地點與數量", "確認成品尺寸", "不包含二次傳播權限"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "State the display location and quantity",
            "Confirm the finished size",
            "Does not include redistribution rights",
          ],
        },
      ],
    },
    pricing: { mode: "quote" },
    publication: { status: "published" },
  },
  {
    id: "course-lecture",
    title: {
      "zh-CN": "课程与讲座",
      "zh-Hant": "課程與講座",
      en: "Courses and lectures",
    },
    summary: {
      "zh-CN": "用于线下授课、学术讲座、培训课程及内部教学材料。",
      "zh-Hant": "用於課件、講義或講座現場展示，按課程範圍確認授權。",
      en: "For courseware, handouts, or live presentations, licensed to the agreed teaching scope.",
    },
    terms: {
      "zh-CN": [
        {
          type: "list",
          style: "unordered",
          items: ["课程主题与举办单位", "使用作品及展示方式", "授课次数与参与规模"],
        },
      ],
      "zh-Hant": [
        {
          type: "list",
          style: "unordered",
          items: ["說明課程形式與受眾", "說明場次與傳播範圍", "錄播與講義分發另行確認"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Describe the course format and audience",
            "State the number of sessions and distribution scope",
            "Recording and handout distribution require separate agreement",
          ],
        },
      ],
    },
    pricing: { mode: "quote" },
    publication: { status: "published" },
  },
  {
    id: "social-media",
    title: {
      "zh-CN": "自媒体内容",
      "zh-Hant": "自媒體內容",
      en: "Social media content",
    },
    summary: {
      "zh-CN": "用于公众号、小红书、抖音及其他媒体账号中的科普内容与视觉呈现。",
      "zh-Hant": "用於已說明帳號與平台的圖文、影片或科普內容。",
      en: "For posts, videos, or educational content on the agreed account and platform.",
    },
    terms: {
      "zh-CN": [
        {
          type: "list",
          style: "unordered",
          items: ["发布平台与账号名称", "使用作品及发布数量", "内容形式与预计发布时间", "是否涉及品牌推广或商业合作"],
        },
      ],
      "zh-Hant": [
        {
          type: "list",
          style: "unordered",
          items: ["說明發佈平台與帳號", "說明預計發佈次數", "不得上傳至素材平台"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "State the publishing platform and account",
            "State the expected number of posts",
            "No upload to stock-asset platforms",
          ],
        },
      ],
    },
    pricing: { mode: "quote" },
    publication: { status: "published" },
  },
  {
    id: "publishing-commercial",
    title: {
      "zh-CN": "出版与商业项目",
      "zh-Hant": "出版和商業項目",
      en: "Publishing and commercial projects",
    },
    summary: {
      "zh-CN": "用于图书、期刊、文创产品、商品包装、品牌宣传及其他商业项目。",
      "zh-Hant": "用於出版物、品牌內容、商品或其他商業傳播項目。",
      en: "For publications, brand content, products, and other commercial distribution.",
    },
    terms: {
      "zh-CN": [
        {
          type: "list",
          style: "unordered",
          items: ["项目名称与合作主体", "使用作品、数量及范围", "发行数量与传播渠道", "文件规格与交付要求", "授权地区与使用期限"],
        },
      ],
      "zh-Hant": [
        {
          type: "list",
          style: "unordered",
          items: ["說明項目與使用媒介", "說明印量、地區與期限", "交付規格與署名方式書面確認"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Describe the project and media",
            "State print run, territory, and term",
            "Confirm delivery and credit terms in writing",
          ],
        },
      ],
    },
    pricing: { mode: "quote" },
    publication: { status: "published" },
  },
  {
    id: "custom-creation",
    title: {
      "zh-CN": "定制创作",
      "zh-Hant": "定製創作",
      en: "Commissioned work",
    },
    summary: {
      "zh-CN": "根据项目主题、内容边界与交付需求，提供具有“小钟岐医”视觉风格的定制创作。",
      "zh-Hant": "按明確主題、內容邊界和交付要求評估的定製圖譜創作。",
      en: "Commissioned atlas work assessed against a defined topic, content boundary, and deliverable.",
    },
    terms: {
      "zh-CN": [
        {
          type: "list",
          style: "unordered",
          items: ["项目背景与创作主题", "内容要求与参考资料", "作品数量与使用渠道", "文件规格与交付时间", "预算范围与修改需求"],
        },
      ],
      "zh-Hant": [
        {
          type: "list",
          style: "unordered",
          items: ["說明主題與資料基礎", "說明尺寸與交付用途", "排期與修改範圍另行確認"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Describe the topic and source material",
            "State the size and intended use",
            "Schedule and revision scope are agreed separately",
          ],
        },
      ],
    },
    pricing: { mode: "quote" },
    publication: { status: "published" },
  },
];
