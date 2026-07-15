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
      "zh-Hant": "用於個人收藏、學習參考與非公開研究，不包含傳播、轉載及商業使用。",
      en: "For personal collection, study reference, and non-public research. Does not include distribution, republication, or commercial use.",
    },
    terms: {
      "zh-CN": [
        {
          type: "list",
          style: "unordered",
          items: ["作品名称或编号", "所需图片范围", "个人学习用途说明"],
        },
      ],
      "zh-Hant": [
        {
          type: "list",
          style: "unordered",
          items: ["作品名稱或編號", "所需圖片範圍", "個人學習用途說明"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Work name or reference",
            "Required image range",
            "Personal-study purpose",
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
      "zh-Hant": "用於診所、醫館及相關專業空間內的固定展示與患者科普。",
      en: "For fixed display and patient education in clinics, Chinese medicine practices, and related professional spaces.",
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
          items: ["作品編號與展示數量", "使用場所及展示形式", "所需尺寸與文件規格"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Work references and display quantity",
            "Premises and display format",
            "Required dimensions and file specifications",
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
      "zh-Hant": "用於線下授課、學術講座、培訓課程及內部教學材料。",
      en: "For in-person teaching, academic lectures, training courses, and internal teaching materials.",
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
          items: ["課程主題與舉辦單位", "使用作品及展示方式", "授課次數與參與規模"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Course topic and host organisation",
            "Works used and display method",
            "Number of sessions and audience size",
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
      "zh-Hant": "用於公眾號、小紅書、抖音及其他媒體帳號中的科普內容與視覺呈現。",
      en: "For educational content and visual presentation on WeChat Official Accounts, Xiaohongshu, Douyin, and other media accounts.",
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
          items: ["發佈平台與帳號名稱", "使用作品及發佈數量", "內容形式與預計發佈時間", "是否涉及品牌推廣或商業合作"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Publishing platform and account name",
            "Works used and publishing quantity",
            "Content format and expected publication date",
            "Whether brand promotion or commercial cooperation is involved",
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
      "zh-Hant": "用於圖書、期刊、文創產品、商品包裝、品牌宣傳及其他商業項目。",
      en: "For books, journals, cultural products, product packaging, brand promotion, and other commercial projects.",
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
          items: ["項目名稱與合作主體", "使用作品、數量及範圍", "發行數量與傳播渠道", "文件規格與交付要求", "授權地區與使用期限"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Project name and contracting party",
            "Works, quantity, and scope of use",
            "Production quantity and distribution channels",
            "File specifications and delivery requirements",
            "Licensed territory and term",
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
      "zh-Hant": "根據項目主題、內容邊界與交付需求，提供具有「小鐘岐醫」視覺風格的定製創作。",
      en: "Commissioned work in the Xiao Zhong Qi Yi visual style, shaped around the project topic, content boundaries, and delivery requirements.",
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
          items: ["項目背景與創作主題", "內容要求與參考資料", "作品數量與使用渠道", "文件規格與交付時間", "預算範圍與修改需求"],
        },
      ],
      en: [
        {
          type: "list",
          style: "unordered",
          items: [
            "Project background and creative topic",
            "Content requirements and reference material",
            "Number of works and use channels",
            "File specifications and delivery date",
            "Budget range and revision requirements",
          ],
        },
      ],
    },
    pricing: { mode: "quote" },
    publication: { status: "published" },
  },
];
