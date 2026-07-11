import type { Locale } from "@/i18n/config";
import type { LicenseScenarioKey } from "@/domain/content";

interface LicensingScenarioCopy {
  readonly value: string;
  readonly action: string;
  readonly conditionLabel: string;
  readonly condition: string;
}

export interface TrustCopy {
  readonly licensing: {
    readonly title: string;
    readonly lede: string;
    readonly context: string;
    readonly scenariosTitle: string;
    readonly scenariosIntro: string;
    readonly quote: string;
    readonly quoteUnavailable: string;
    readonly quoteModeLabel: string;
    readonly requirementsTitle: string;
    readonly scenarioCards: Readonly<Record<LicenseScenarioKey, LicensingScenarioCopy>>;
    readonly scopeReviewLabel: string;
    readonly processTitle: string;
    readonly steps: readonly { readonly title: string; readonly description: string }[];
    readonly boundaryTitle: string;
    readonly boundary: string;
    readonly boundaryRights: string;
    readonly faqTitle: string;
    readonly faqIntro: string;
    readonly faqs: readonly {
      readonly question: string;
      readonly answer: string;
    }[];
    readonly emailSubject: string;
    readonly emailBody: string;
  };
  readonly copyright: {
    readonly title: string;
    readonly lede: string;
    readonly context: string;
    readonly previewTitle: string;
    readonly previewBody: string;
    readonly restrictionsTitle: string;
    readonly restrictions: readonly string[];
    readonly licenseTitle: string;
    readonly licenseBody: string;
    readonly recordsTitle: string;
    readonly recordsBody: string;
    readonly licensingLink: string;
  };
  readonly about: {
    readonly title: string;
    readonly lede: string;
    readonly context: string;
    readonly directionTitle: string;
    readonly directions: readonly { readonly title: string; readonly text: string }[];
    readonly boundaryTitle: string;
    readonly boundary: string;
    readonly atlasLink: string;
    readonly contactLink: string;
  };
  readonly contact: {
    readonly title: string;
    readonly lede: string;
    readonly context: string;
    readonly workLabel: string;
    readonly consultationTitle: string;
    readonly consultationIntro: string;
    readonly consultationBoundaryTitle: string;
    readonly consultationBoundary: string;
    readonly call: string;
    readonly email: string;
    readonly copy: string;
    readonly copyPhone: string;
    readonly copyEmail: string;
    readonly copyAccount: string;
    readonly copied: string;
    readonly copyFailed: string;
    readonly learningTitle: string;
    readonly learningIntro: string;
    readonly emailDescription: string;
    readonly wechatInstruction: string;
    readonly qrAlt: string;
    readonly socialTitle: string;
    readonly socialIntro: string;
    readonly licensingTitle: string;
    readonly licensingIntro: string;
    readonly licensingAction: string;
    readonly groupRulesTitle: string;
    readonly groupRulesIntro: string;
    readonly groupRules: readonly string[];
    readonly channelEmpty: string;
  };
  readonly workReference: {
    readonly title: string;
    readonly description: string;
  };
}

export const TRUST_COPY: Record<Locale, TrustCopy> = {
  "zh-CN": {
    licensing: {
      title: "授权合作",
      lede: "请选择作品与使用场景，我们将根据使用范围、传播渠道、授权期限及交付规格确认合作方案。除另有书面约定外，授权不包含著作权转让。",
      context: "原创图谱 · 规范授权 · 按需合作",
      scenariosTitle: "选择授权用途",
      scenariosIntro: "不同用途对应不同的使用范围与授权条件。以下分类用于初步判断，最终方案以双方确认的授权文件为准。",
      quote: "获取报价",
      quoteUnavailable: "前往联系页",
      quoteModeLabel: "合作方式",
      requirementsTitle: "需要提供",
      scenarioCards: {
        "personal-study": { value: "获取高清版本", action: "查看授权方式", conditionLabel: "授权条件", condition: "仅限本人使用" },
        "clinic-display": { value: "申请展示授权", action: "咨询授权", conditionLabel: "授权条件", condition: "限约定场所使用" },
        "course-lecture": { value: "申请教学授权", action: "咨询授权", conditionLabel: "授权条件", condition: "限约定课程使用" },
        "social-media": { value: "申请媒体授权", action: "咨询授权", conditionLabel: "授权条件", condition: "限约定账号使用" },
        "publishing-commercial": { value: "定制授权方案", action: "提交合作需求", conditionLabel: "授权条件", condition: "以授权文件为准" },
        "custom-creation": { value: "定制项目评估", action: "提交创作需求", conditionLabel: "合作方式", condition: "以项目合同为准" },
      },
      scopeReviewLabel: "需单独评估",
      processTitle: "合作流程",
      steps: [
        { title: "提交需求", description: "提供作品编号、使用场景、传播渠道及所需文件规格。" },
        { title: "确认方案", description: "双方确认授权范围、使用期限、交付内容与合作费用。" },
        { title: "签署并付款", description: "完成授权文件确认及相应款项支付。" },
        { title: "文件交付", description: "按约定提供授权文件、作品文件及必要的使用说明。" },
      ],
      boundaryTitle: "授权与权利说明",
      boundary: "网站预览图仅供浏览与作品选择，不代表已经获得使用许可。授权范围、使用期限、传播渠道、交付规格及费用，以双方最终确认的授权文件为准。未经许可，不得擅自下载、转载、修改、销售或用于商业项目。",
      boundaryRights: "除双方另有书面约定外，所有作品的著作权及相关权利仍归小钟岐医所有。",
      faqTitle: "常见问题",
      faqIntro: "在提交需求前，可以先了解授权范围、交付方式与使用边界。",
      faqs: [
        {
          question: "个人学习与商业使用有什么区别？",
          answer: "个人学习仅限本人收藏、学习参考与非公开研究；公开传播、机构使用、品牌合作或产生商业收益的项目，需要另行确认授权范围。",
        },
        {
          question: "为什么不同项目需要单独报价？",
          answer: "合作费用会根据作品数量、传播渠道、使用期限、授权地区、项目规模和交付规格综合确认。",
        },
        {
          question: "获得授权后，可以修改作品吗？",
          answer: "只有授权文件明确允许的裁切、排版或适配才可以进行；其他修改、演绎或二次创作需要事先确认。",
        },
        {
          question: "网页预览图可以直接下载使用吗？",
          answer: "不可以。网页预览图仅供浏览与作品选择，下载、转载、修改或用于公开项目均需要取得相应许可。",
        },
        {
          question: "授权是否包含PSD或其他源文件？",
          answer: "默认不包含。是否交付 PSD、分层文件或其他源文件，需要根据项目需求、作品条件与交付范围单独约定。",
        },
        {
          question: "授权期限届满后如何续期？",
          answer: "请在期限届满前联系确认原授权范围、继续使用的期限及是否存在渠道或项目变化，再办理续期。",
        },
        {
          question: "发现作品被侵权时如何联系？",
          answer: "请通过联系页面提供侵权页面、账号或商品链接，并尽量附上截图、发现时间与涉及作品编号。",
        },
        {
          question: "如何提交授权或定制需求？",
          answer: "选择最接近的授权用途并提交需求；请附上作品编号、使用场景、传播渠道、期限、文件规格和必要的项目信息。",
        },
      ],
      emailSubject: "图谱授权报价咨询",
      emailBody: "请说明作品编号、使用场景、媒介、范围、期限和所需交付规格。",
    },
    copyright: {
      title: "版权说明",
      lede: "公开展示用于浏览、学习判断与授权沟通，不表示作品已进入公共领域，也不等于开放下载、修改或商业使用。",
      context: "公开预览 · 权利边界 · 书面授权",
      previewTitle: "预览与使用是两件事",
      previewBody: "站内公开图片是浏览预览，不是高清交付文件。保存页面或截图不会改变作品的使用边界。",
      restrictionsTitle: "未经明确授权，请勿",
      restrictions: ["去除标识、修改后再次发布或上传素材平台", "用于商业课程、出版、自媒体运营、商品包装或广告", "转售、转授权、批量抓取或向第三方提供文件"],
      licenseTitle: "授权范围",
      licenseBody: "每次授权只覆盖书面确认的项目、媒介、地区、期限、数量、署名方式与交付规格；范围变化需要重新确认。",
      recordsTitle: "权属与登记信息",
      recordsBody: "具体作品的权属与版权登记状态，以作品详情中已核验并公开的字段为准。未核验的登记号、示例号或推测信息不会在本站展示。",
      licensingLink: "查看授权场景",
    },
    about: {
      title: "关于小钟岐医",
      lede: "一个持续生长的中医视觉图谱与临证笔记项目，尝试用更清晰、直观的方式，整理经络、本草、方剂与临证知识。",
      context: "中医为本 · 视觉为径 · 持续整理",
      directionTitle: "整理与创作",
      directions: [
        { title: "知识梳理", text: "从典籍、教材与相关资料中梳理知识脉络，建立层级清楚、便于查阅的内容结构。" },
        { title: "视觉表达", text: "以图像帮助理解形态、位置与关系，让复杂的中医知识变得更加直观。" },
        { title: "临证记录", text: "整理真实诊疗中的辨证思路与阶段观察，在保护隐私的前提下保留实践所得。" },
        { title: "持续校订", text: "根据资料考证、专业反馈与版本更新不断修订，并保留必要的来源及更新信息。" },
      ],
      boundaryTitle: "阅读说明",
      boundary: "本站内容用于中医知识整理、学习参考与学术交流，不构成针对个人的诊断、处方或治疗建议。具体健康问题，请结合实际情况向具备相应资质的专业人员咨询。",
      atlasLink: "进入图谱库",
      contactLink: "联系小钟岐医",
    },
    contact: {
      title: "联系与交流",
      lede: "请根据就诊联系、学习交流或授权合作等不同需求，选择对应的联系方式。为保护个人隐私，请勿通过公开渠道发送病历、检查单及其他敏感信息。",
      context: "就诊联系 · 内容交流 · 授权合作",
      workLabel: "关联作品编号",
      consultationTitle: "就诊联系",
      consultationIntro: "如需了解出诊安排或预约到诊，可先通过电话联系。电话仅用于确认时间、地点及基本事项，不提供远程诊断与处方服务。",
      consultationBoundaryTitle: "到诊说明",
      consultationBoundary: "中医诊疗需要结合面诊、舌脉及必要的检查资料综合判断。电话沟通仅用于预约与到诊安排，不作为诊断、处方或疗效判断的依据；紧急情况请及时联系当地急救或前往正规医疗机构。",
      call: "拨打电话",
      email: "发送邮件",
      copy: "复制",
      copyPhone: "复制号码",
      copyEmail: "复制邮箱",
      copyAccount: "复制账号",
      copied: "已复制",
      copyFailed: "复制失败，请手动选择",
      learningTitle: "内容与学习交流",
      learningIntro: "欢迎围绕中医图谱、知识整理、视觉创作及网站内容进行交流。合作授权与定制创作，请通过授权合作页面提交具体需求。",
      emailDescription: "适合内容建议、资料勘误及一般交流。",
      wechatInstruction: "如需参与中医学习交流，可添加微信并备注“学习交流”。好友申请将根据实际情况处理。",
      qrAlt: "小钟岐医微信二维码",
      socialTitle: "关注小钟岐医",
      socialIntro: "在小红书与抖音查看中医图谱、知识整理及后续内容更新。",
      licensingTitle: "授权与创作合作",
      licensingIntro: "如需将作品用于诊室展示、课程讲座、自媒体内容、出版物、商品包装或其他商业项目，请前往授权合作页面了解使用范围并提交需求。",
      licensingAction: "查看授权合作",
      groupRulesTitle: "交流说明",
      groupRulesIntro: "为保持专注、友善的交流环境，请共同遵守以下约定：",
      groupRules: ["以中医学习、临床思考和知识整理为主要交流内容", "尊重患者隐私，不公开病历、检查单及可识别的个人信息", "不发布广告、引流信息及未经许可的素材售卖内容", "不进行远程诊断、公开处方或疗效承诺"],
      channelEmpty: "当前没有可公开的联系渠道。",
    },
    workReference: {
      title: "已带入作品编号",
      description: "联系时请保留该编号，便于确认具体作品与使用范围。",
    },
  },
  "zh-Hant": {
    licensing: {
      title: "授權合作",
      lede: "請選擇作品與使用場景，我們將依使用範圍、傳播渠道、授權期限及交付規格確認合作方案。除另有書面約定外，授權不包含著作權轉讓。",
      context: "原創圖譜 · 規範授權 · 按需合作",
      scenariosTitle: "選擇授權用途",
      scenariosIntro: "不同用途對應不同的使用範圍與授權條件。以下分類用於初步判斷，最終方案以雙方確認的授權文件為準。",
      quote: "獲取報價",
      quoteUnavailable: "前往聯絡頁",
      quoteModeLabel: "合作方式",
      requirementsTitle: "需要提供",
      scenarioCards: {
        "personal-study": { value: "獲取高清版本", action: "查看授權方式", conditionLabel: "授權條件", condition: "僅限本人使用" },
        "clinic-display": { value: "申請展示授權", action: "諮詢授權", conditionLabel: "授權條件", condition: "限約定場所使用" },
        "course-lecture": { value: "申請教學授權", action: "諮詢授權", conditionLabel: "授權條件", condition: "限約定課程使用" },
        "social-media": { value: "申請媒體授權", action: "諮詢授權", conditionLabel: "授權條件", condition: "限約定帳號使用" },
        "publishing-commercial": { value: "定製授權方案", action: "提交合作需求", conditionLabel: "授權條件", condition: "以授權文件為準" },
        "custom-creation": { value: "定製項目評估", action: "提交創作需求", conditionLabel: "合作方式", condition: "以項目合同為準" },
      },
      scopeReviewLabel: "需單獨評估",
      processTitle: "合作流程",
      steps: [
        { title: "提交需求", description: "提供作品編號、使用場景、傳播渠道及所需文件規格。" },
        { title: "確認方案", description: "雙方確認授權範圍、使用期限、交付內容與合作費用。" },
        { title: "簽署並付款", description: "完成授權文件確認及相應款項支付。" },
        { title: "文件交付", description: "按約定提供授權文件、作品文件及必要的使用說明。" },
      ],
      boundaryTitle: "授權與權利說明",
      boundary: "網站預覽圖僅供瀏覽與作品選擇，不代表已經獲得使用許可。授權範圍、使用期限、傳播渠道、交付規格及費用，以雙方最終確認的授權文件為準。未經許可，不得擅自下載、轉載、修改、銷售或用於商業項目。",
      boundaryRights: "除雙方另有書面約定外，所有作品的著作權及相關權利仍歸小鐘岐醫所有。",
      faqTitle: "常見問題",
      faqIntro: "提交需求前，可以先瞭解授權範圍、交付方式與使用邊界。",
      faqs: [
        {
          question: "個人學習與商業使用有什麼區別？",
          answer: "個人學習僅限本人收藏、學習參考與非公開研究；公開傳播、機構使用、品牌合作或產生商業收益的項目，需要另行確認授權範圍。",
        },
        {
          question: "為什麼不同項目需要單獨報價？",
          answer: "合作費用會依作品數量、傳播渠道、使用期限、授權地區、項目規模和交付規格綜合確認。",
        },
        {
          question: "獲得授權後，可以修改作品嗎？",
          answer: "只有授權文件明確允許的裁切、排版或適配才可以進行；其他修改、演繹或二次創作需要事先確認。",
        },
        {
          question: "網頁預覽圖可以直接下載使用嗎？",
          answer: "不可以。網頁預覽圖僅供瀏覽與作品選擇，下載、轉載、修改或用於公開項目均需要取得相應許可。",
        },
        {
          question: "授權是否包含 PSD 或其他源文件？",
          answer: "默認不包含。是否交付 PSD、分層文件或其他源文件，需要依項目需求、作品條件與交付範圍單獨約定。",
        },
        {
          question: "授權期限屆滿後如何續期？",
          answer: "請在期限屆滿前聯絡確認原授權範圍、繼續使用的期限及是否存在渠道或項目變化，再辦理續期。",
        },
        {
          question: "發現作品被侵權時如何聯絡？",
          answer: "請透過聯絡頁面提供侵權頁面、帳號或商品連結，並盡量附上截圖、發現時間與涉及作品編號。",
        },
        {
          question: "如何提交授權或定製需求？",
          answer: "選擇最接近的授權用途並提交需求；請附上作品編號、使用場景、傳播渠道、期限、文件規格和必要的項目資訊。",
        },
      ],
      emailSubject: "圖譜授權報價諮詢",
      emailBody: "請說明作品編號、使用場景、媒介、範圍、期限和所需交付規格。",
    },
    copyright: {
      title: "版權說明",
      lede: "公開展示用於瀏覽、學習判斷與授權溝通，不表示作品已進入公共領域，也不等於開放下載、修改或商業使用。",
      context: "公開預覽 · 權利邊界 · 書面授權",
      previewTitle: "預覽與使用是兩件事",
      previewBody: "站內公開圖片是瀏覽預覽，不是高清交付文件。保存頁面或截圖不會改變作品的使用邊界。",
      restrictionsTitle: "未經明確授權，請勿",
      restrictions: ["移除標識、修改後再次發佈或上傳素材平台", "用於商業課程、出版、自媒體營運、商品包裝或廣告", "轉售、轉授權、批量抓取或向第三方提供文件"],
      licenseTitle: "授權範圍",
      licenseBody: "每次授權只覆蓋書面確認的項目、媒介、地區、期限、數量、署名方式與交付規格；範圍變化需要重新確認。",
      recordsTitle: "權屬與登記資訊",
      recordsBody: "具體作品的權屬與版權登記狀態，以作品詳情中已核驗並公開的欄位為準。未核驗的登記號、示例號或推測資訊不會在本站展示。",
      licensingLink: "查看授權場景",
    },
    about: {
      title: "關於小鐘岐醫",
      lede: "一個持續生長的中醫視覺圖譜與臨證筆記項目，嘗試以更清晰、直觀的方式，整理經絡、本草、方劑與臨證知識。",
      context: "中醫為本 · 視覺為徑 · 持續整理",
      directionTitle: "整理與創作",
      directions: [
        { title: "知識梳理", text: "從典籍、教材與相關資料中梳理知識脈絡，建立層級清楚、便於查閱的內容結構。" },
        { title: "視覺表達", text: "以圖像幫助理解形態、位置與關係，讓複雜的中醫知識變得更加直觀。" },
        { title: "臨證記錄", text: "整理真實診療中的辨證思路與階段觀察，在保護私隱的前提下保留實踐所得。" },
        { title: "持續校訂", text: "根據資料考證、專業回饋與版本更新不斷修訂，並保留必要的來源及更新資訊。" },
      ],
      boundaryTitle: "閱讀說明",
      boundary: "本站內容用於中醫知識整理、學習參考與學術交流，不構成針對個人的診斷、處方或治療建議。具體健康問題，請結合實際情況向具備相應資質的專業人員諮詢。",
      atlasLink: "進入圖譜庫",
      contactLink: "聯絡小鐘岐醫",
    },
    contact: {
      title: "聯絡與交流",
      lede: "請依就診聯絡、學習交流或授權合作等不同需求，選擇相應的聯絡方式。為保護個人私隱，請勿透過公開渠道發送病歷、檢查單及其他敏感資訊。",
      context: "就診聯絡 · 內容交流 · 授權合作",
      workLabel: "關聯作品編號",
      consultationTitle: "就診聯絡",
      consultationIntro: "如需瞭解出診安排或預約到診，可先透過電話聯絡。電話僅用於確認時間、地點及基本事項，不提供遠程診斷與處方服務。",
      consultationBoundaryTitle: "到診說明",
      consultationBoundary: "中醫診療需要結合面診、舌脈及必要的檢查資料綜合判斷。電話溝通僅用於預約與到診安排，不作為診斷、處方或療效判斷的依據；緊急情況請及時聯絡當地急救或前往正規醫療機構。",
      call: "撥打電話",
      email: "發送電郵",
      copy: "複製",
      copyPhone: "複製號碼",
      copyEmail: "複製電郵",
      copyAccount: "複製帳號",
      copied: "已複製",
      copyFailed: "複製失敗，請手動選擇",
      learningTitle: "內容與學習交流",
      learningIntro: "歡迎圍繞中醫圖譜、知識整理、視覺創作及網站內容進行交流。合作授權與定製創作，請透過授權合作頁面提交具體需求。",
      emailDescription: "適合內容建議、資料勘誤及一般交流。",
      wechatInstruction: "如需參與中醫學習交流，可添加微信並備註「學習交流」。好友申請將依實際情況處理。",
      qrAlt: "小鐘岐醫微信二維碼",
      socialTitle: "關注小鐘岐醫",
      socialIntro: "在小紅書與抖音查看中醫圖譜、知識整理及後續內容更新。",
      licensingTitle: "授權與創作合作",
      licensingIntro: "如需將作品用於診室展示、課程講座、自媒體內容、出版物、商品包裝或其他商業項目，請前往授權合作頁面瞭解使用範圍並提交需求。",
      licensingAction: "查看授權合作",
      groupRulesTitle: "交流說明",
      groupRulesIntro: "為保持專注、友善的交流環境，請共同遵守以下約定：",
      groupRules: ["以中醫學習、臨床思考和知識整理為主要交流內容", "尊重患者私隱，不公開病歷、檢查單及可識別的個人資訊", "不發佈廣告、引流資訊及未經許可的素材售賣內容", "不進行遠程診斷、公開處方或療效承諾"],
      channelEmpty: "目前沒有可公開的聯絡渠道。",
    },
    workReference: {
      title: "已帶入作品編號",
      description: "聯絡時請保留該編號，便於確認具體作品與使用範圍。",
    },
  },
  en: {
    licensing: {
      title: "Licensing",
      lede: "Choose the work and intended use. We will confirm a proposal based on scope, distribution channels, licence term, and delivery specifications. Unless agreed otherwise in writing, a licence does not transfer copyright.",
      context: "Original atlas · Defined rights · Tailored collaboration",
      scenariosTitle: "Choose a licensing purpose",
      scenariosIntro: "Different uses carry different scopes and conditions. These categories are an initial guide; the final terms are set out in the licensing document confirmed by both parties.",
      quote: "Request a quote",
      quoteUnavailable: "Go to contact",
      quoteModeLabel: "Collaboration route",
      requirementsTitle: "Please provide",
      scenarioCards: {
        "personal-study": { value: "Get a high-resolution copy", action: "View licensing options", conditionLabel: "Licence condition", condition: "Personal use only" },
        "clinic-display": { value: "Request display rights", action: "Enquire about rights", conditionLabel: "Licence condition", condition: "Agreed premises only" },
        "course-lecture": { value: "Request teaching rights", action: "Enquire about rights", conditionLabel: "Licence condition", condition: "Agreed course only" },
        "social-media": { value: "Request media rights", action: "Enquire about rights", conditionLabel: "Licence condition", condition: "Agreed account only" },
        "publishing-commercial": { value: "Tailored licensing plan", action: "Submit a project enquiry", conditionLabel: "Licence condition", condition: "As set out in the licence" },
        "custom-creation": { value: "Commission assessment", action: "Submit a creative brief", conditionLabel: "Collaboration terms", condition: "As set out in the contract" },
      },
      scopeReviewLabel: "Assessed separately",
      processTitle: "Collaboration process",
      steps: [
        { title: "Submit the brief", description: "Provide the work reference, intended use, distribution channels, and required file specifications." },
        { title: "Confirm the proposal", description: "Both parties confirm the rights, term, deliverables, and fee." },
        { title: "Sign and pay", description: "Complete the licensing document and the agreed payment." },
        { title: "Receive the files", description: "We deliver the licensing document, artwork files, and any agreed usage notes." },
      ],
      boundaryTitle: "Licensing and rights",
      boundary: "Website previews are provided only for browsing and work selection; they do not grant permission to use a work. Scope, term, channels, delivery specifications, and fees are governed by the final licensing document. Without permission, do not download, republish, alter, sell, or use a work commercially.",
      boundaryRights: "Unless otherwise agreed in writing, copyright and related rights in every work remain with Xiao Zhong Qi Yi.",
      faqTitle: "Frequently asked questions",
      faqIntro: "Before submitting a brief, review the licensing scope, delivery options, and usage boundaries.",
      faqs: [
        {
          question: "How does personal study differ from commercial use?",
          answer: "Personal study is limited to private collection, reference, and non-public research. Public distribution, institutional use, brand work, or revenue-generating projects require a separately defined licence.",
        },
        {
          question: "Why is each project quoted separately?",
          answer: "Fees depend on the number of works, distribution channels, licence term, territory, project scale, and delivery specifications.",
        },
        {
          question: "Can I alter a work after licensing it?",
          answer: "Only cropping, layout, or adaptation explicitly allowed by the licence is permitted. Other alterations, derivatives, or new creative work require prior agreement.",
        },
        {
          question: "Can I download and use a website preview?",
          answer: "No. Website previews are for browsing and work selection only. Downloading, republication, alteration, or public use requires permission.",
        },
        {
          question: "Does a licence include PSD or other source files?",
          answer: "Not by default. PSD, layered, or other source files must be agreed separately according to the project, the work, and the delivery scope.",
        },
        {
          question: "How do I renew an expired licence?",
          answer: "Contact us before expiry to confirm the existing scope, the new term, and any changes to channels or the project.",
        },
        {
          question: "How do I report suspected infringement?",
          answer: "Use the contact page and include the page, account, or product link, plus screenshots, the discovery date, and the relevant work reference where possible.",
        },
        {
          question: "How do I submit a licensing or commission brief?",
          answer: "Choose the closest licensing purpose and submit the work reference, intended use, channels, term, file specifications, and relevant project information.",
        },
      ],
      emailSubject: "Atlas licensing quotation",
      emailBody: "Please include the work reference, use scenario, media, scope, term, and required deliverables.",
    },
    copyright: {
      title: "Copyright",
      lede: "Public display supports browsing, study decisions, and licensing enquiries. It does not place a work in the public domain or open it for download, alteration, or commercial use.",
      context: "Public preview · Rights boundary · Written permission",
      previewTitle: "Preview is not permission to use",
      previewBody: "Public images on this site are browsing previews, not high-resolution delivery files. Saving a page or screenshot does not change the usage boundary.",
      restrictionsTitle: "Without explicit permission, do not",
      restrictions: ["Remove identifiers, alter and republish a work, or upload it to an asset platform", "Use it in commercial courses, publishing, operated media, packaging, or advertising", "Resell, sublicense, scrape in bulk, or supply files to a third party"],
      licenseTitle: "Licence scope",
      licenseBody: "Each licence covers only the project, media, territory, term, quantity, credit, and delivery specification agreed in writing. A changed scope requires a new agreement.",
      recordsTitle: "Ownership and registration",
      recordsBody: "Ownership and copyright-registration information is shown only when verified for the individual work. Unverified, example, or inferred registration numbers are not published here.",
      licensingLink: "View licensing scenarios",
    },
    about: {
      title: "About Xiao Zhong Qi Yi",
      lede: "An evolving Chinese medicine visual-atlas and clinical-notes project, organising meridians, materia medica, formulae, and clinical knowledge in clearer and more direct forms.",
      context: "Chinese medicine first · Visual pathways · Ongoing work",
      directionTitle: "Organisation and creation",
      directions: [
        { title: "Knowledge organisation", text: "Trace knowledge across classics, textbooks, and related sources, building clear structures for reference." },
        { title: "Visual expression", text: "Use images to clarify form, position, and relationships so complex material becomes more direct." },
        { title: "Clinical records", text: "Organise authentic diagnostic reasoning and staged observations while protecting patient privacy." },
        { title: "Ongoing revision", text: "Revise work through source research, professional feedback, and version updates while retaining necessary provenance." },
      ],
      boundaryTitle: "Reading note",
      boundary: "This site supports Chinese medicine knowledge organisation, study, and academic exchange. It does not provide personal diagnosis, prescriptions, or treatment advice. For individual health concerns, consult an appropriately qualified professional.",
      atlasLink: "Enter the atlas",
      contactLink: "Contact Xiao Zhong Qi Yi",
    },
    contact: {
      title: "Contact and exchange",
      lede: "Choose the appropriate contact route for an appointment, learning exchange, or licensing enquiry. To protect privacy, do not send medical records, test reports, or other sensitive information through public channels.",
      context: "Appointments · Content exchange · Licensing",
      workLabel: "Related work reference",
      consultationTitle: "Appointment contact",
      consultationIntro: "Call to ask about availability or arrange an in-person visit. The phone is only for confirming time, location, and basic arrangements; it does not provide remote diagnosis or prescriptions.",
      consultationBoundaryTitle: "In-person visit note",
      consultationBoundary: "Chinese medicine assessment depends on an in-person consultation, tongue and pulse examination, and any necessary test information. Phone contact is only for appointment arrangements and is not a basis for diagnosis, prescriptions, or outcome assessment. For emergencies, contact local emergency services or an appropriate medical provider.",
      call: "Call",
      email: "Send email",
      copy: "Copy",
      copyPhone: "Copy number",
      copyEmail: "Copy email",
      copyAccount: "Copy account",
      copied: "Copied",
      copyFailed: "Could not copy; select it manually",
      learningTitle: "Content and learning exchange",
      learningIntro: "Exchange ideas about Chinese medicine atlases, knowledge organisation, visual creation, and website content. For licensing and commissioned work, submit a specific brief through the licensing page.",
      emailDescription: "Suitable for content suggestions, corrections, and general exchange.",
      wechatInstruction: "For Chinese medicine learning exchange, add the WeChat account with the note “Learning exchange”. Requests are handled according to current capacity.",
      qrAlt: "Xiao Zhong Qi Yi WeChat QR code",
      socialTitle: "Follow Xiao Zhong Qi Yi",
      socialIntro: "See Chinese medicine atlas work, knowledge organisation, and future updates on Xiaohongshu and Douyin.",
      licensingTitle: "Licensing and commissioned work",
      licensingIntro: "For clinic display, teaching, social content, publishing, packaging, or other commercial projects, review the licensing page and submit the intended use.",
      licensingAction: "View licensing",
      groupRulesTitle: "Exchange guidelines",
      groupRulesIntro: "To keep the exchange focused and respectful, please follow these shared expectations:",
      groupRules: ["Keep discussion focused on Chinese medicine learning, clinical thinking, and knowledge organisation", "Respect patient privacy and do not publish medical records, test reports, or identifiable information", "Do not post advertising, lead-generation messages, or unlicensed asset sales", "Do not provide remote diagnosis, public prescriptions, or promises of efficacy"],
      channelEmpty: "There are currently no public contact channels.",
    },
    workReference: {
      title: "Work reference included",
      description: "Keep this reference in your message so the work and intended scope can be identified.",
    },
  },
};
