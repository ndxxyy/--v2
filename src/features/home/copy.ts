import type { Locale } from "@/i18n/config";

export interface HomeCopy {
  readonly hero: {
    readonly label: string;
    readonly title: string;
    readonly statement: string;
    readonly description: string;
    readonly primaryAction: string;
    readonly secondaryAction: string;
    readonly featuredLabel: string;
    readonly viewWork: string;
    readonly codeLabel: string;
    readonly carouselLabel: string;
    readonly carouselRole: string;
    readonly previousWork: string;
    readonly nextWork: string;
    readonly chooseWork: string;
    readonly showWork: string;
    readonly emptyTitle: string;
    readonly emptyDescription: string;
  };
  readonly seasonal: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly lunarLabel: string;
    readonly hourLabel: string;
    readonly annualQiTitle: string;
    readonly yearSuffix: string;
    readonly movementLabel: string;
    readonly governingQiLabel: string;
    readonly sourceQiLabel: string;
    readonly methodsTitle: string;
    readonly methodsCaption: string;
    readonly methods: readonly string[];
    readonly boundary: string;
  };
  readonly stats: {
    readonly totalWorks: string;
    readonly meridianWorks: string;
    readonly herbWorks: string;
    readonly imagePlates: string;
  };
  readonly catalog: {
    readonly title: string;
    readonly description: string;
    readonly empty: string;
    readonly viewWork: string;
    readonly viewAll: string;
    readonly categories: readonly {
      readonly title: string;
      readonly description: string;
      readonly path: string;
    }[];
  };
  readonly cases: {
    readonly title: string;
    readonly description: string;
    readonly emptyTitle: string;
    readonly emptyDescription: string;
    readonly action: string;
    readonly viewAll: string;
  };
  readonly directions: {
    readonly title: string;
    readonly description: string;
    readonly items: readonly { readonly title: string; readonly description: string }[];
  };
  readonly licensing: {
    readonly title: string;
    readonly description: string;
    readonly boundary: string;
    readonly action: string;
  };
  readonly contact: {
    readonly title: string;
    readonly description: string;
    readonly consultationTitle: string;
    readonly consultationDescription: string;
    readonly consultationAction: string;
    readonly learningTitle: string;
    readonly learningDescription: string;
    readonly learningAction: string;
  };
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  "zh-CN": {
    hero: {
      label: "现代中医视觉档案",
      title: "小钟岐医",
      statement: "中医可视化图谱与临证笔记",
      description: "汇集中医视觉图谱、临证笔记与本草档案，以清晰的编目与可信的内容，呈现传统医学的知识脉络。",
      primaryAction: "浏览图谱库",
      secondaryAction: "查看就诊说明",
      featuredLabel: "本期精选",
      viewWork: "查看作品详情",
      codeLabel: "作品编号",
      carouselLabel: "首页精选作品",
      carouselRole: "作品幻灯片",
      previousWork: "上一幅",
      nextWork: "下一幅",
      chooseWork: "选择作品",
      showWork: "显示作品",
      emptyTitle: "真实作品，经公开审核后呈现",
      emptyDescription: "当前没有完成公开审核的首页精选图谱。这里不会使用示例图、母版文件或假作品填补版面。",
    },
    seasonal: {
      eyebrow: "今日 · 北京时间",
      title: "今日时令与开穴",
      intro: "以当天历法、干支年与时辰建立清晰索引。",
      lunarLabel: "农历",
      hourLabel: "当前时辰",
      annualQiTitle: "五运六气",
      yearSuffix: "年运气索引",
      movementLabel: "岁运",
      governingQiLabel: "司天",
      sourceQiLabel: "在泉",
      methodsTitle: "时辰开穴法",
      methodsCaption: "不同法门需分别核对计算口径",
      methods: ["纳子法", "养子时刻取穴法", "灵龟八法", "飞腾八法"],
      boundary: "开穴法口径不同，本页仅作历法索引，不提供自助针刺指引；取穴请由专业人员当面判断。",
    },
    stats: {
      totalWorks: "真实作品",
      meridianWorks: "经络与针具",
      herbWorks: "本草图谱",
      imagePlates: "公开图版",
    },
    catalog: {
      title: "图谱精选",
      description: "图谱按经络、本草与经方建立可检索目录；首页只读取已发布且带有 WebP/AVIF 缩略图的真实作品。",
      empty: "当前暂无可公开的精选作品，可先了解图谱的编目方向。",
      viewWork: "查看作品",
      viewAll: "进入图谱库",
      categories: [
        { title: "经络图谱", description: "经络、腧穴与针具相关视觉资料", path: "/atlas/meridians" },
        { title: "本草图谱", description: "本草形态与知识结构的视觉整理", path: "/atlas/herbs" },
        { title: "经方图谱", description: "经方内容的结构化视觉表达", path: "/atlas/formulas" },
      ],
    },
    cases: {
      title: "临证笔记",
      description: "临证内容按文献索引方式整理，公开前必须完成匿名化、患者授权与内容审核。",
      emptyTitle: "当前没有公开医案",
      emptyDescription: "这里将分享已做隐私处理的诊疗记录，帮助您了解常见问题的就诊思路与日常调护方向；具体情况仍需当面咨询。",
      action: "阅读医案",
      viewAll: "了解医案栏目",
    },
    directions: {
      title: "专业方向",
      description: "这里说明站点持续整理的内容方向，不把栏目名称当作资质或疗效证明。",
      items: [
        { title: "中医视觉图谱", description: "围绕经络、本草与经方建立真实作品目录，让图像、分类和作品信息彼此对应。" },
        { title: "临证笔记整理", description: "用克制的文献结构呈现通过公开条件的临证记录，并保留医学信息边界。" },
        { title: "版权与使用边界", description: "区分个人学习、公开传播、课程、出版与商业项目，避免使用场景彼此混淆。" },
      ],
    },
    licensing: {
      title: "授权合作",
      description: "个人学习与公开传播的使用边界不同。课程、出版、自媒体、诊室展示或定制创作需要按具体作品和用途确认。",
      boundary: "根据使用范围授予相应权利，作品著作权仍归小钟岐医所有。",
      action: "了解授权合作",
    },
    contact: {
      title: "联系与交流",
      description: "请选择与真实意图相符的入口；就诊咨询和学习交流不会合并成模糊的通用联系动作。",
      consultationTitle: "就诊咨询",
      consultationDescription: "用于了解就诊说明与已核验的咨询方式。页面不会提供远程诊断或疗效承诺。",
      consultationAction: "查看就诊说明",
      learningTitle: "学习交流",
      learningDescription: "用于图谱学习、内容讨论和学习群说明。公开交流不替代个体诊疗。",
      learningAction: "进入学习交流",
    },
  },
  "zh-Hant": {
    hero: {
      label: "現代中醫視覺檔案",
      title: "小鐘岐醫",
      statement: "中醫視覺圖譜與臨證筆記",
      description: "匯集中醫視覺圖譜、臨證筆記與本草檔案，以清晰的編目與可信的內容，呈現傳統醫學的知識脈絡。",
      primaryAction: "瀏覽圖譜庫",
      secondaryAction: "查看就診說明",
      featuredLabel: "本期精選",
      viewWork: "查看作品詳情",
      codeLabel: "作品編號",
      carouselLabel: "首頁精選作品",
      carouselRole: "作品幻燈片",
      previousWork: "上一幅",
      nextWork: "下一幅",
      chooseWork: "選擇作品",
      showWork: "顯示作品",
      emptyTitle: "真實作品，經公開審核後呈現",
      emptyDescription: "目前沒有完成公開審核的首頁精選圖譜。這裡不會以示例圖、母版檔案或虛構作品填補版面。",
    },
    seasonal: {
      eyebrow: "今日 · 北京時間",
      title: "今日時令與開穴",
      intro: "以當天曆法、干支年與時辰建立清晰索引。",
      lunarLabel: "農曆",
      hourLabel: "目前時辰",
      annualQiTitle: "五運六氣",
      yearSuffix: "年運氣索引",
      movementLabel: "歲運",
      governingQiLabel: "司天",
      sourceQiLabel: "在泉",
      methodsTitle: "時辰開穴法",
      methodsCaption: "不同法門需分別核對計算口徑",
      methods: ["納子法", "養子時刻取穴法", "靈龜八法", "飛騰八法"],
      boundary: "開穴法口徑不同，本頁僅作曆法索引，不提供自助針刺指引；取穴請由專業人員當面判斷。",
    },
    stats: {
      totalWorks: "真實作品",
      meridianWorks: "經絡與針具",
      herbWorks: "本草圖譜",
      imagePlates: "公開圖版",
    },
    catalog: {
      title: "圖譜精選",
      description: "圖譜依經絡、本草與經方建立可檢索目錄；首頁只讀取已發佈且具有 WebP/AVIF 縮圖的真實作品。",
      empty: "目前暫無可公開的精選作品，可先瞭解圖譜的編目方向。",
      viewWork: "查看作品",
      viewAll: "進入圖譜庫",
      categories: [
        { title: "經絡圖譜", description: "經絡、腧穴與針具相關視覺資料", path: "/atlas/meridians" },
        { title: "本草圖譜", description: "本草形態與知識結構的視覺整理", path: "/atlas/herbs" },
        { title: "經方圖譜", description: "經方內容的結構化視覺表達", path: "/atlas/formulas" },
      ],
    },
    cases: {
      title: "臨證筆記",
      description: "臨證內容依文獻索引方式整理，公開前必須完成匿名化、患者授權與內容審核。",
      emptyTitle: "目前沒有公開醫案",
      emptyDescription: "這裡將分享已做隱私處理的診療記錄，幫助您了解常見問題的就診思路與日常調護方向；具體情況仍需當面諮詢。",
      action: "閱讀醫案",
      viewAll: "瞭解醫案欄目",
    },
    directions: {
      title: "專業方向",
      description: "此處說明網站持續整理的內容方向，不把欄目名稱當作資質或療效證明。",
      items: [
        { title: "中醫視覺圖譜", description: "圍繞經絡、本草與經方建立真實作品目錄，讓圖像、分類和作品資訊彼此對應。" },
        { title: "臨證筆記整理", description: "以克制的文獻結構呈現通過公開條件的臨證記錄，並保留醫學資訊邊界。" },
        { title: "版權與使用邊界", description: "區分個人學習、公開傳播、課程、出版與商業項目，避免使用場景彼此混淆。" },
      ],
    },
    licensing: {
      title: "授權合作",
      description: "個人學習與公開傳播的使用邊界不同。課程、出版、自媒體、診室展示或定製創作需要依具體作品和用途確認。",
      boundary: "價格未確認時只提供取得報價入口，不顯示推測價格或示例版權號。",
      action: "瞭解授權與取得報價",
    },
    contact: {
      title: "聯絡與交流",
      description: "請選擇與真實意圖相符的入口；就診諮詢和學習交流不會合併成模糊的通用聯絡動作。",
      consultationTitle: "就診諮詢",
      consultationDescription: "用於瞭解就診說明與已核驗的諮詢方式。頁面不提供遠端診斷或療效承諾。",
      consultationAction: "查看就診說明",
      learningTitle: "學習交流",
      learningDescription: "用於圖譜學習、內容討論和學習群說明。公開交流不替代個別診療。",
      learningAction: "進入學習交流",
    },
  },
  en: {
    hero: {
      label: "A modern visual archive of Chinese medicine",
      title: "Xiao Zhong Qi Yi",
      statement: "Visual atlases and carefully organised clinical notes",
      description: "Authentic work is catalogued by subject, identifier and publication boundary, with clear routes to notes, rights and contact information.",
      primaryAction: "Browse the atlas",
      secondaryAction: "Read consultation information",
      featuredLabel: "Featured work",
      viewWork: "View work details",
      codeLabel: "Work ID",
      carouselLabel: "Featured works on the home page",
      carouselRole: "work carousel",
      previousWork: "Previous",
      nextWork: "Next",
      chooseWork: "Choose a featured work",
      showWork: "Show work",
      emptyTitle: "Authentic work appears only after publication review",
      emptyDescription: "There is currently no featured atlas work cleared for public display. Sample images, master files and invented work are never used to fill the page.",
    },
    seasonal: {
      eyebrow: "Today · China Standard Time",
      title: "Seasonal timing",
      intro: "A concise index of today's calendar, cyclical year and double hour.",
      lunarLabel: "Chinese calendar",
      hourLabel: "Current double hour",
      annualQiTitle: "Five movements and six qi",
      yearSuffix: "year index",
      movementLabel: "Annual movement",
      governingQiLabel: "Governing qi",
      sourceQiLabel: "Qi at the source",
      methodsTitle: "Point-opening methods",
      methodsCaption: "Each method requires its own verified calculation convention",
      methods: ["Na Zi method", "Yang Zi timing", "Ling Gui Ba Fa", "Fei Teng Ba Fa"],
      boundary: "Calculation conventions differ. This page is a calendar index, not a guide to self-needling; point selection requires an in-person professional assessment.",
    },
    stats: {
      totalWorks: "Published works",
      meridianWorks: "Meridians and needles",
      herbWorks: "Materia medica",
      imagePlates: "Public plates",
    },
    catalog: {
      title: "Featured atlas",
      description: "The catalogue is organised around meridians, materia medica and classical formulae. Only published work with a WebP or AVIF thumbnail can appear here.",
      empty: "No featured work is currently public. The catalogue directions are available below.",
      viewWork: "View work",
      viewAll: "Enter the atlas",
      categories: [
        { title: "Meridian atlas", description: "Visual material on meridians, acupoints and needles", path: "/atlas/meridians" },
        { title: "Materia medica atlas", description: "Visual studies of medicinal plants and knowledge structures", path: "/atlas/herbs" },
        { title: "Classical formula atlas", description: "Structured visual interpretations of classical formulae", path: "/atlas/formulas" },
      ],
    },
    cases: {
      title: "Clinical notes",
      description: "Clinical material is organised as a restrained literature index and must pass anonymisation, patient authorisation and editorial review before publication.",
      emptyTitle: "No clinical notes are currently public",
      emptyDescription: "This section will share privacy-protected clinical notes to help visitors understand consultation pathways and everyday care considerations. Individual concerns still require an in-person consultation.",
      action: "Read note",
      viewAll: "About the clinical notes",
    },
    directions: {
      title: "Areas of focus",
      description: "These are the archive's ongoing content directions. They are not presented as credentials or evidence of clinical outcomes.",
      items: [
        { title: "Chinese medicine visual atlases", description: "Authentic works on meridians, materia medica and classical formulae are connected to clear catalogue records." },
        { title: "Clinical-note organisation", description: "Clinical records that meet publication conditions are presented with a restrained documentary structure and explicit medical boundaries." },
        { title: "Rights and usage boundaries", description: "Personal study, public distribution, teaching, publishing and commercial uses are kept distinct." },
      ],
    },
    licensing: {
      title: "Licensing",
      description: "Personal study and public use have different boundaries. Teaching, publishing, social media, clinic display and commissioned work are reviewed against the specific work and intended use.",
      boundary: "When pricing is not confirmed, the site offers a request-for-quote route only. It never shows estimated prices or sample registration numbers.",
      action: "Licensing and quotes",
    },
    contact: {
      title: "Contact and exchange",
      description: "Choose the route that matches your intent. Consultation enquiries and learning exchange are kept clearly separate.",
      consultationTitle: "Consultation enquiries",
      consultationDescription: "For consultation information and verified contact methods. The site does not offer remote diagnosis or promise outcomes.",
      consultationAction: "Read consultation information",
      learningTitle: "Learning exchange",
      learningDescription: "For atlas study, content discussion and learning-group information. Public exchange is not a substitute for individual care.",
      learningAction: "Go to learning exchange",
    },
  },
};
