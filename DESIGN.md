---
version: "alpha"
name: "青瓷编目"
description: "小钟岐医 V2 的现代中医视觉档案设计系统"
colors:
  porcelain-950: "oklch(0.22 0.035 218)"
  porcelain-900: "oklch(0.29 0.045 218)"
  porcelain-800: "oklch(0.36 0.055 218)"
  porcelain-700: "oklch(0.45 0.065 218)"
  porcelain-500: "oklch(0.60 0.060 218)"
  porcelain-300: "oklch(0.78 0.035 218)"
  porcelain-100: "oklch(0.94 0.018 218)"
  celadon-900: "oklch(0.28 0.030 165)"
  celadon-800: "oklch(0.36 0.040 165)"
  celadon-700: "oklch(0.45 0.050 165)"
  celadon-500: "oklch(0.62 0.055 165)"
  celadon-300: "oklch(0.78 0.045 165)"
  celadon-100: "oklch(0.93 0.024 165)"
  ink-950: "oklch(0.17 0.014 165)"
  ink-900: "oklch(0.24 0.016 165)"
  ink-700: "oklch(0.38 0.017 165)"
  ink-500: "oklch(0.55 0.014 165)"
  ink-300: "oklch(0.76 0.009 165)"
  ink-100: "oklch(0.94 0.004 165)"
  xuan-50: "oklch(0.985 0.004 150)"
  xuan-100: "oklch(0.970 0.006 150)"
  xuan-200: "oklch(0.930 0.008 150)"
  cinnabar-900: "oklch(0.28 0.080 29)"
  cinnabar-800: "oklch(0.36 0.120 29)"
  cinnabar-700: "oklch(0.45 0.150 29)"
  cinnabar-500: "oklch(0.59 0.180 29)"
  cinnabar-300: "oklch(0.75 0.100 29)"
  cinnabar-100: "oklch(0.93 0.035 29)"
  background: "{colors.xuan-50}"
  surface: "white"
  surface-muted: "{colors.xuan-100}"
  text: "{colors.ink-950}"
  text-muted: "{colors.ink-700}"
  border: "{colors.ink-300}"
  primary: "{colors.porcelain-900}"
  primary-hover: "{colors.porcelain-800}"
  accent: "{colors.celadon-700}"
  focus: "{colors.porcelain-700}"
  critical: "{colors.cinnabar-700}"
typography:
  display:
    fontFamily: "Songti SC, STSong, Source Han Serif SC, Noto Serif CJK SC, SimSun, serif"
    fontSize: "88px"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.04em"
  headline-1:
    fontFamily: "Songti SC, STSong, Source Han Serif SC, Noto Serif CJK SC, SimSun, serif"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0.03em"
  headline-2:
    fontFamily: "Songti SC, STSong, Source Han Serif SC, Noto Serif CJK SC, SimSun, serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.04em"
  headline-3:
    fontFamily: "Songti SC, STSong, Source Han Serif SC, Noto Serif CJK SC, SimSun, serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.04em"
  body-large:
    fontFamily: "PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.75
  body-medium:
    fontFamily: "PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  body-small:
    fontFamily: "PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  caption:
    fontFamily: "PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
  hair: "2px"
  soft: "4px"
  dialog: "8px"
  full: "9999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  8: "32px"
  10: "40px"
  12: "48px"
  16: "64px"
  20: "80px"
  24: "96px"
  32: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.xuan-50}"
    rounded: "{rounded.hair}"
    height: "48px"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.hair}"
    height: "48px"
    padding: "12px 20px"
  filter-selected:
    backgroundColor: "{colors.porcelain-100}"
    textColor: "{colors.porcelain-950}"
    borderColor: "{colors.porcelain-700}"
    rounded: "{rounded.hair}"
  notice:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    rounded: "{rounded.soft}"
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    rounded: "{rounded.dialog}"
  brand-mark:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    size: "76px"
  thumbnail:
    backgroundColor: "{colors.xuan-100}"
    borderColor: "{colors.border}"
    rounded: "{rounded.none}"
---

# 小钟岐医 V2 设计系统

## Overview

“青瓷编目”是一个以真实图谱为视觉主角的现代中医档案系统。它借用医学出版物的清楚层级、瓷器编目的克制秩序和自然光下纸本阅读的平静感，但不复制仿古装饰。参考图中的瓷器蓝侧栏、宣纸白大面积留白、宋体标题、细分隔线和朱砂印记构成核心语汇。

场景句：访客在明亮、安静的环境中像翻阅一册现代医学图录一样浏览作品，需要在几秒内辨认分类、作品信息和下一步入口。颜色策略为 **Committed restraint**：大面积无彩纸白承载阅读，瓷器蓝承担约 20–35% 的关键品牌表面，青瓷绿只用于辅助动作与状态，朱砂红保持低频。

真实作品、经审核文字和可用动作始终优先。没有真实资料的字段不显示；状态展示使用明确的加载、空、错误或不可用语义，不用假内容填空。

品牌 Logo 已由用户确认，公开文件为 `public/images/brand/xiao-zhong-qiyi-seal.png`。桌面品牌栏使用 76×76px，手机 Header 使用 36×36px；保持原始朱砂红、透明背景、篆刻边缘与正方比例，不重绘、不拉伸、不裁掉边框，也不把它改成通用圆形图标。Logo 可直接用于瓷器蓝或宣纸白表面，周围至少保留自身宽度 1/6 的净空。

## Colors

- **瓷器蓝 `porcelain`：** 品牌主色。`900` 用于深色品牌面和主按钮，`700` 用于焦点、链接与选中边界，浅阶用于筛选选中和轻量分区。
- **青瓷绿 `celadon`：** 辅助动作与安静的正向提示。不得与瓷器蓝争夺主层级，也不用于低对比正文。
- **墨色 `ink`：** 所有正文和元数据的基础。正文默认 `950`，次要文字最低使用 `700`；不使用浅灰正文营造所谓高级感。
- **宣纸白 `xuan`：** 接近中性的微绿白，不做黄褐、羊皮纸或可见纹理。页面用 `50`，弱分区用 `100`，边界背景用 `200`。
- **朱砂红 `cinnabar`：** 只用于印章语义、危险/错误状态和极少数关键标记；不得大面积铺底或与主 CTA 竞争。

语义映射以 YAML 令牌和 `src/styles/tokens.css` 为准。正文对背景至少 4.5:1，大字至少 3:1；边框、焦点和控件状态同样不能只依赖颜色差异。

## Typography

标题使用中文宋体体系，正文与交互使用现代黑体体系。两者的对比来自笔画和功能，不依赖花哨字形。

- **标题栈：** `Songti SC` → `STSong` → `Source Han Serif SC` → `Noto Serif CJK SC` → `SimSun` → `serif`。
- **正文栈：** `PingFang SC` → `Microsoft YaHei` → `Source Han Sans SC` → `Noto Sans CJK SC` → `system-ui` → `sans-serif`。
- **英文：** 跟随同一功能栈；任务 07 如自托管字体，必须保持宋体/黑体的结构对比与字宽稳定。
- **显示标题：** 桌面最大 88px，手机 44px；字距使用正向 `0.03–0.05em`，不压紧中文字面。
- **正文：** 16px / 1.75 为默认；长文最大 72ch。辅助说明 14px，最低正文 12px 只用于极短元数据。
- **数字与作品编号：** 可使用标题宋体与 `font-variant-numeric: tabular-nums`，不引入等宽字体作为装饰。

所有 H1–H3 使用 `text-wrap: balance`，长文使用 `text-wrap: pretty`。每页只有一个 H1；内容区从 H2 开始。

## Layout

桌面采用 12 栏、平板 8 栏、手机 4 栏的响应式栅格。内容最大宽度 1280px；超宽屏保留外部留白，不无限拉长文字与作品说明。完整断点和信息顺序见 `docs/responsive-spec.md`。

- **桌面 ≥1280px：** 页面边距 48px，栏沟 24px。品牌框架可使用固定宽度侧栏，但业务内容必须保持 12 栏对齐。
- **中屏 768–1279px：** 页面边距 24–32px，8 栏，栏沟 20px。避免把桌面三列机械压缩成窄卡片。
- **手机 <768px：** 页面边距 18px，4 栏，栏沟 16px。品牌价值与真实作品优先，其余说明后置。
- **垂直节奏：** 区块间 64–128px；组件组 24–48px；标签与正文 8–12px。相邻关系越紧密，间距越小。

分区依靠留白、细线、色面和图像裁切建立层级。卡片只用于确有独立边界的对象；目录优先使用有节奏的列表、分栏和作品图像，不建立卡片嵌套。

## Elevation & Depth

默认是平面出版物层级：背景色、1px 分隔线、图像和内容密度承担深度。常规卡片、按钮、筛选和列表不使用投影。

弹窗允许一个克制阴影：`0 8px 24px color-mix(in oklch, var(--color-ink-950) 16%, transparent)`，并配合全屏遮罩。焦点层级不可用阴影替代清晰描边。

层级令牌固定为：基础 `0`、置顶导航 `20`、下拉/浮层 `30`、遮罩 `40`、弹窗 `50`、提示 `60`、工具提示 `70`。禁止 `999`、`9999` 等任意值。

## Shapes

界面以直角和 1px 线框为主，体现图录与编目秩序。按钮、筛选和输入只使用 2px 圆角；提示 4px；弹窗最大 8px。圆形只用于真实的圆形语义，如单一图标按钮；标签不得默认胶囊化。

边框默认 1px。禁止用粗侧边色条装饰提示、卡片或列表；需要强调时使用完整边框、背景色或文字层级。

## Components

### Header

- 桌面：品牌标志/名称、主导航、语言入口形成单行或侧栏 + 顶部导航组合。当前页用 2px 下划线和 `aria-current="page"`，不只依赖颜色。
- 手机：首行只保留品牌、当前语言与菜单按钮，均满足 44px 触控区域。展开后按信息任务分组；关闭、ESC、焦点限制与焦点返回必须完整。
- Header 不在任务 02 实现，任务 03 按本规范落地。

### Footer

- 按图谱、信任说明、联系/语言三组组织；只显示真实可用链接。
- 版权号、机构、地址或社媒缺失时整项隐藏，不留破折号或“待补充”。
- Footer 不做另一套营销导航，不使用卡片容器。

### Buttons

- 高度 48px，最小宽度由内容决定，水平内边距 20px；手机最小触控区 44×44px。
- Primary 为瓷器蓝实底；Secondary 为透明底 + 瓷器蓝 1px 边框；Quiet 为文字动作并保留可见下划线/底边反馈。
- Hover 只调整色阶与 1–2px 位移；Pressed 恢复位移并加深；Disabled 同时降低对比、移除指针并设置 `aria-disabled`/`disabled`。
- Loading 保留原宽度，用真实状态文字替换标签；不使用无限旋转装饰。

### Links

- 正文链接始终有下划线，`text-underline-offset: 0.2em`。导航链接可用当前页下划线而不重复正文样式。
- 外链只有在确实打开新上下文时说明；不要为装饰追加箭头字符。
- 焦点使用 3px 瓷器蓝描边与 3px offset。

### Filters

- 使用语义按钮或表单控件，选中态同时具备背景、边框和 `aria-pressed`/checked 状态。
- 桌面可横向成组，手机允许换行或使用明确的筛选弹层；不得出现无效筛选项。
- 必须显示结果数量与当前条件；清除操作只在条件确实可清除时出现。

### Work entries

- 作品图像是主元素，信息区按标题、类别/编号、简述、可用动作排序。缺少编号、版权或简介时整行不渲染。
- 目录项以细分隔线与图文比例建立节奏，不包入浮动圆角卡片。
- 图片容器固定比例并预留尺寸；标题与动作保持在图像附近，不在图上覆盖大段文字。

### Clinical case summaries

- 文本优先，按标题、分类、经审核摘要、发布日期组织；没有真实公开医案时不渲染假摘要列表。
- 摘要不得出现身份信息、疗效结论、患者见证或诱导性“成功案例”措辞。
- 医案与作品使用不同视觉语法：前者更接近文献索引，后者以图像为核心。

### Notices

- Information、medical-boundary、rights 三种语气，均使用完整 1px 边框和浅色背景。
- 标题直接说明目的，正文最多 72ch。重要边界使用文字明确表达，不只换色。
- 危险/错误才使用朱砂红；普通医学边界默认瓷器蓝或墨色，不制造警报感。

### Dialogs

- 使用原生 `<dialog>` 或具备等价语义和焦点管理的实现。打开后限制焦点，ESC 可关闭，关闭后焦点返回触发器。
- 宽度 `min(640px, calc(100vw - 36px))`；桌面内边距 32px，手机 20px；最大高度 `calc(100dvh - 36px)` 并让内容区滚动。
- 遮罩使用墨色 55% 透明度，不使用背景模糊或玻璃材质。主要动作最多一个，关闭按钮始终可见且可命名。

### Focus, motion and feedback

- 所有键盘焦点统一 3px `focus` 描边，offset 3px；鼠标点击不强制显示焦点圈。
- 状态变化采用 `160ms`；弹层采用 `240ms`；缓动 `cubic-bezier(0.22, 1, 0.36, 1)`。只动画 `opacity`、`transform` 和必要的颜色。
- `prefers-reduced-motion: reduce` 下取消平移、缩放和循环动画，状态立即完成。
- Toast 只用于用户刚完成的短时动作，不能代替页面内错误、授权边界或医学说明。

### Image ratios and loading

- 图谱目录缩略图仅使用 WebP/AVIF，并在数据中提供固定宽高。
- 竖版作品默认 `3:4`，横版图组默认 `4:3`，方形封面仅在真实资源为方形时使用 `1:1`；不得强行把所有作品裁成同一种比例。
- 推荐目录派生尺寸：竖版 480×640（1x）/ 960×1280（2x）；横版 640×480（1x）/ 1280×960（2x）；方形 560×560（1x）/ 1120×1120（2x）。
- 加载占位使用稳定比例的单色宣纸白/浅青瓷色面与轻微透明度脉冲，不用渐变 shimmer。图片加载失败显示文字说明与重试/返回入口，不展示破损图标。
- 详情预览使用经审核的公开预览图，不把母版路径或高清交付 URL 暴露给浏览器。

## Do's and Don'ts

- Do 让真实作品在首页和图谱入口首屏出现。
- Do 用宋体标题、黑体正文、细线与克制色面形成编目秩序。
- Do 让桌面和手机拥有不同的信息优先级，而不是只做等比缩小。
- Do 为 hover、focus-visible、pressed、disabled、loading、empty、error 和 open/closed 定义明确状态。
- Do 隐藏所有没有真实资料支持的字段和控件。
- Don't 大量使用圆角卡片、卡片嵌套、通用三列图标卡片或漂浮阴影。
- Don't 使用渐变光球、玻璃拟态、渐变文字、装饰网格或廉价纸张纹理。
- Don't 使用卷轴、仿古边框、满屏毛笔字、印章堆砌或伪古籍排版。
- Don't 使用低对比度正文、细到难读的字体或只靠颜色表达状态。
- Don't 让首屏只剩口号而没有真实作品。
- Don't 创建假表单、假筛选、假数字、示例登记号、虚构资质或不可达入口。
- Don't 把临证内容包装成治愈案例、患者见证或疗效承诺。
- Don't 为装饰添加无效图标、箭头、切换器、标签或分页。
