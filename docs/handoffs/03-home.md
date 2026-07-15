# 03 首页与全局框架交接

## 完成内容

- 实现三语言共用的全局站点框架：桌面端在 `≥1280px` 使用瓷器蓝品牌侧栏与顶部主导航，中小屏收拢为顶部品牌栏和手机菜单。
- 实现全局 Header、Footer、当前页导航、语言导航和跳到主要内容链接。
- 手机菜单使用原生 `<dialog>`：打开后焦点进入菜单、背景滚动锁定、Tab 焦点保持在弹层内、ESC 与关闭按钮均可关闭，关闭后焦点返回菜单按钮。
- Footer 按“图谱与内容 / 信任与授权 / 联系与语言”组织，只提供当前真实存在的站内路由，不展示机构、地址、社媒、版权号或联系方式占位。
- 将首页替换为完整的“青瓷编目”业务页面，桌面顺序为品牌首屏、图谱精选、医案整理、专业方向、授权合作、联系与交流。
- 手机端通过响应式重排，把专业方向置于医案整理之前；首屏保留品牌身份、价值说明、主要动作和真实精选作品位置。
- 就诊咨询和学习交流使用不同标题、说明与锚点入口，不合并成模糊的通用联系动作。
- 新增首页数据选择器：
  - 图谱只选择 `featured + published`，且必须存在当前语言标题、当前语言替代文本和 WebP/AVIF `thumbnail`。
  - 医案必须通过发布、匿名化、患者授权、编辑审核四重条件，并具有当前语言正文。
  - 选择器只返回首页渲染需要的公开字段，不返回母版路径、证据引用或审核备注。
- 当前作品、图组和医案数据为空，因此首屏与医案区使用合规内容状态；没有复制视觉稿、旧站 JPG、母版文件、示例图、假作品或假医案。
- 首页与框架提供简体、繁体和英文工作文案；语言链接保持当前路径，例如 `/zh-CN/atlas` 可切换到 `/zh-Hant/atlas` 与 `/en/atlas`。
- 完成 320px 支持下限修复：locale 布局在自己的 `<body>` 上使用 `min-width: 0`，避免经典滚动条占宽后产生 15px 横向溢出；没有修改任务 02 拥有的全局样式文件。

## 修改文件

### 全局框架

- `src/components/layout/copy.ts`
- `src/components/layout/navigation.ts`
- `src/components/layout/LanguageNav.tsx`
- `src/components/layout/LanguageNav.module.css`
- `src/components/layout/SiteRail.tsx`
- `src/components/layout/SiteRail.module.css`
- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/SiteHeader.module.css`
- `src/components/layout/SiteFooter.tsx`
- `src/components/layout/SiteFooter.module.css`
- `src/components/layout/SiteFrame.tsx`
- `src/components/layout/SiteFrame.module.css`
- `src/components/layout/index.ts`

### 首页

- `src/features/home/copy.ts`
- `src/features/home/selectors.ts`
- `src/features/home/HomePage.tsx`
- `src/features/home/HomePage.module.css`
- `src/features/home/index.ts`
- `src/app/[locale]/page.tsx`

### 顺序共享文件

- `src/app/[locale]/layout.tsx`：按 01 → 03 顺序接管，仅加入 SiteFrame 与本布局的 `min-w-0`；未添加任务 07 的 metadata、alternates 或结构化数据。

### 交接

- `docs/handoffs/03-home.md`

未修改 `src/data/**`、`src/features/atlas/**`、`src/features/cases/**`、`src/features/trust/**`、`src/app/globals.css`、`src/styles/**`、任务 04–07 页面或旧站文件。

## 验证结果

环境：macOS arm64、Node.js 24.15.0、npm 11.12.1、Next.js 16.2.10。

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过，0 错误 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 通过，项目代码 0 错误/警告 |
| `npm run lint` | 通过，0 错误；135 条警告全部来自任务 02 安装的 `.agents/skills/impeccable/**` 第三方脚本，与前置交接一致 |
| `npm run build` | 通过；33 个静态入口与 2 类按需详情路由生成成功 |
| Impeccable detector | 扫描本任务布局、首页和两个 locale 路由文件，结果 `[]` |
| 浏览器控制台 | 首页简体/英文复核为 0 条 error 日志 |
| 旧站 | 未写入、未复制任务 03 不拥有的素材 |

正式构建在受限沙箱内首次因 Turbopack 内部进程权限停滞；只终止本轮卡住的构建进程后，在正常构建环境连续通过。最终一次正式构建结果为通过。

### 1440×900 桌面复核

- 桌面品牌侧栏、顶部主导航、品牌 H1、价值说明和内容状态同屏。
- 页面只有一个 H1；当前首页导航具有 `aria-current="page"` 与可见下划线。
- 视口内容宽度与 `scrollWidth` 同为 1425px（15px 为系统滚动条占位），没有横向溢出。
- 当前公开作品数据为 0，因此首屏正确显示审核状态，而不是图片或作品占位。
- 生产预览截图不含 Next.js 开发工具控件。

截图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-1440x900.png`

### 390×844 手机复核

- 顶部只保留品牌、当前语言与菜单按钮；桌面导航隐藏。
- 菜单按钮实测 44×44px；页面内容宽度与 `scrollWidth` 同为 375px，没有横向溢出。
- H1 数量为 1；首屏显示品牌价值、两个真实路由动作和合规作品状态。
- 手机视觉顺序实测为专业方向先于医案整理，符合响应式规范。
- 菜单打开后 `<dialog>` 为 open，焦点位于关闭按钮，`body` 与 `html` 的滚动均锁定。
- Shift+Tab 后焦点仍在 dialog 内；ESC 关闭后 dialog 关闭、滚动锁恢复、焦点返回“打开菜单”按钮，`aria-expanded` 恢复为 `false`。
- 图谱子路由只标记“图谱库”为当前内容导航，不再同时误标首页。

截图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-390x844.png`

### 320px 支持下限

- 经典滚动条占位后 `clientWidth` 为 305px，页面 `scrollWidth` 同为 305px，无横向溢出。
- 菜单按钮保持 44×44px。

### 多语言与路径

- `/en` 实测 `<html lang="en">`、H1 为 `Xiao Zhong Qi Yi`、手机菜单可访问名称为 `Open menu`。
- `/zh-CN/atlas` 的语言链接实测为 `/zh-CN/atlas`、`/zh-Hant/atlas`、`/en/atlas`，保持当前内容路径。

## 遗留问题

- 任务 04 尚未迁移真实作品与 WebP/AVIF 缩略图。当前首页不能满足“第一屏呈现真实作品”的最终内容验收，只能显示合规状态；这是数据前置缺失，不是使用假图可解决的问题。
- 任务 05 当前没有公开医案，首页使用合规空状态。任务 05 只有在真实记录完成四重公开条件后，首页才会自动出现医案摘要。
- 授权、关于、版权、联系页面仍是任务 01 骨架，任务 06 完成后首页和 Footer 的入口才具备最终内容。当前没有显示未核验电话、邮箱、二维码或社媒。
- 首页与框架已提供三语言工作文案，任务 07 仍需完成最终术语审校、Metadata、canonical、hreflang、分享信息和完整语言策略。
- 项目目录当前没有 Git 元数据，无法使用 `git status` / `git diff` 识别并发修改。本任务通过前置交接、文件时间和所有权矩阵确认目标文件，且只写入 03 独占路径与轮到 03 接管的 locale layout。
- 全量 Lint 的 135 条第三方警告仍需任务 08 按 02 交接建议处理；本任务没有修改不属于 03 的 `eslint.config.mjs`。

## 后续任务注意事项

1. 任务 04 只需按既有数据契约写入 `src/data/works.ts`、`src/data/image-groups.ts` 和 `src/data/work-categories.ts`；作品满足 `featured + published + 当前语言 alt + WebP/AVIF thumbnail` 后会自动进入首页，首件作品进入首屏，其余进入图谱精选。
2. 任务 04 不要把 JPG 母版、没有公开替代文本的图片或非 `thumbnail` 变体送入首页；首页选择器会主动过滤。
3. 任务 05 的医案只有同时通过发布、匿名化、患者授权、编辑审核并具有当前语言正文时才会进入首页；不要为填充首页修改公开条件。
4. 任务 06 联系页应保留 `#consultation` 与 `#learning` 锚点语义；首页已经分别链接这两个入口。真实渠道缺失时继续隐藏，不创建假表单。
5. 任务 07 可在 `src/app/[locale]/layout.tsx` 接管 metadata 与语言层，但应保留 `SiteFrame`、`lang={locale}` 和 `min-w-0`，不要重新设计导航与首页。
6. 任务 08 浏览器复核时应在任务 04 数据迁移后重新截取首页；届时重点确认首屏真实作品、图片比例、`sizes`、加载优先级和图片失败状态。
7. Impeccable 自动 Hook 仍未启用；本任务仅运行 detector，没有改变 Hook 配置。

---

## 2026-07-13 首页时令面板与作品幻灯片补充交接

### 完成内容

- 按用户对首页首屏右半区的批注，将原两幅并列作品改为“左侧真实作品幻灯片 + 右侧今日时令与开穴”非对称编目布局。
- 作品幻灯片使用 3 件现有已发布真实作品：足阳明胃经图组、桂枝图谱、九针图谱；支持上一幅、下一幅、三项直接选择及左右方向键，不自动播放。
- 时令面板以北京时间实时显示：公历日期、时间、农历日期、当前时辰、干支年、岁运、司天与在泉。
- 面板明确列出纳子法、养子时刻取穴法、灵龟八法、飞腾八法，但没有输出未经核验的当前穴位。旧站只读搜索与 V2 数据均未发现获准复用的计算口径，因此页面将其限定为历法索引，并明确不提供自助针刺指引。
- 增补简体、繁体、英文文案；英文使用较短的 `Seasonal timing` 标题，避免窄屏冗长断行。
- 手机端顺序为品牌身份 → 真实作品幻灯片 → 时令面板 → 首页账册；工具不替代首屏真实作品。
- 首页路由改为按请求动态渲染，以保证服务器首屏日期与客户端一致，并由客户端每 30 秒刷新时间，避免静态构建日期过期和 hydration 布局跳动。
- 轮播控件保持 44×44px 触控下限、3px focus-visible、手动切换和 reduced-motion 无动画状态。

### 修改文件

- `src/features/home/HeroWorkCarousel.tsx`（新增）
- `src/features/home/SeasonalTodayPanel.tsx`（新增）
- `src/features/home/seasonal.ts`（新增）
- `src/features/home/HomePage.tsx`
- `src/features/home/HomePage.module.css`
- `src/features/home/copy.ts`
- `src/features/home/selectors.ts`
- `src/app/[locale]/page.tsx`
- `design-qa.md`
- `docs/handoffs/03-home.md`

没有修改 `src/data/**`、旧站文件、任务 04–07 页面或全局设计令牌。

### 验证结果

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过，0 错误 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 通过，0 错误/警告 |
| `npm run build` | 通过；首页三语言路由按需动态渲染，其余既有路由保持正常 |
| Impeccable layout/type/full detector | 3 次均为 `[]` |
| 1440×900 正式预览 | 1 个 H1；页面 `scrollWidth === clientWidth`；控制台 0 error |
| 390×844 正式预览 | 1 个 H1；375px 内容宽度无横向溢出；控制台 0 error |
| 轮播 | 上一幅/下一幅、直接选择、循环切换、ArrowRight 切换均通过 |
| 可访问性 | 所有 5 个轮播按钮最小高度 44px；焦点环为 3px、offset 3px；reduced-motion 已覆盖 |
| 三语言 | 简体、繁体、英文均渲染；繁体/英文手机宽度均无溢出 |

桌面截图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-1440x900-final.png`

手机首屏：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-390x844-final.png`

手机面板：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-panel-390x844-final.png`

对照图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-comparison.png`

### 遗留问题

- 当前未实现纳子法、养子时刻取穴法、灵龟八法、飞腾八法的具体开穴结果；需要用户确认采用的典籍、流派、日界与时辰边界、真太阳时/北京时间等计算口径，并提供可审校规则后再开发。
- 五运六气当前为“按当前农历干支年”的年运气索引，只展示岁运、司天、在泉，不声称代替完整五运六气排盘或临床判断。
- 首页由静态路由改为动态路由是实时日期的必要成本；任务 07/08 做性能验收时应确认部署环境的动态渲染缓存策略。

### 后续任务注意事项

1. 若继续实现具体开穴结果，必须先建立可版本化的计算口径文档、边界样例和测试用例；不能直接把网络口诀或示例表格写入页面。
2. 新增详细排盘页前需单独冻结路由与任务所有权；当前首页只负责摘要，不应继续堆叠完整专业计算表。
3. 轮播 `heroWorks` 由首页选择器固定挑选已发布作品；更换作品时继续满足当前语言标题、alt 与 WebP/AVIF thumbnail 条件。
4. 任务 07 处理首页缓存与 Metadata 时必须保留实时内容的服务器/客户端一致性，不要把构建时日期固定为“今日”。

---

## 2026-07-13 首页右侧最终布局调整

本节覆盖上一节所述的“作品与完整时令面板并排”方案；上一节保留为迭代记录，不代表当前访客界面。

### 完成内容

- 按用户提供的两个局部参考，将首页右半区改为单一纵向编目列：顶部是精简日历，下面是完整宽度的真实作品幻灯片。
- 日历只保留公历日期、北京时间、农历日期与当前时辰；五运六气年运、司天/在泉、四种开穴方法名称和医学边界说明均不再出现在首页首屏。
- 足阳明胃经作品改为在右侧整列内 `contain` 展示，标题牌与真实图像均保留；桂枝、九针仍可通过幻灯片访问。
- 幻灯片控制区由双行 90px 收为单行约 45px，只显示上一幅、当前序号/总数、下一幅；左右方向键和循环切换继续有效。
- 手机顺序为品牌信息 → 精简日历 → 真实作品；390×844 首屏可以同时看到日历和作品开头。

### 修改文件

- `src/features/home/HomePage.tsx`
- `src/features/home/HomePage.module.css`
- `src/features/home/HeroWorkCarousel.tsx`
- `src/features/home/SeasonalTodayPanel.tsx`
- `design-qa.md`
- `docs/handoffs/03-home.md`

### 验证结果

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 通过 |
| `npm run build` | 通过，177 个既有静态页面生成完成，首页保持动态渲染 |
| Impeccable layout detector | `[]` |
| 1440×900 正式预览 | 1 个 H1；无横向溢出；控制台 0 error；日历在上、作品在下 |
| 390×844 正式预览 | 无横向溢出；按钮高度 ≥44px；日历与作品均进入首屏 |
| 简体/繁体/英文 | 均无横向溢出；英文长日期与时间无可见重叠 |

桌面截图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-calendar-stacked-1440x900-final.png`

手机截图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-calendar-stacked-390x844-final.png`

对照图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-calendar-stacked-comparison.png`

### 后续注意事项

- 首页当前只承担“今日历法摘要”，不再承载完整五运六气或开穴方法索引；如恢复专业计算功能，应另设独立页面并先冻结计算口径。
- 后续更换首幅作品时应继续使用已发布真实缩略图，并检查纵向标题牌在 390px 与 1440px 下的遮挡关系。

---

## 2026-07-13 日历与全局导航批注微调

### 完成内容

- 将首页右上角日历进一步压缩为紧凑信息带：日期与时间缩小，农历/时辰标签和值的字号、行高和间距同步收紧。
- 去除日历内容内部的上下两条横线，保留面板与作品之间、模块与页面之间真正承担结构作用的编目分隔线。
- 为桌面主导航增加克制的透明毛玻璃背景，沿用宣纸白与既有细线；滚动时可分离导航和页面内容，顶部静止状态仍保持安静。
- 为系统“减少透明度”偏好增加纯色背景回退，不依赖模糊效果维持导航可读性。
- 未修改图谱库搜索栏。该批注涉及 `src/features/atlas/**`，属于任务 04 独占范围；为避免覆盖任务 04 的实现，本轮仅记录后续调整要求。

### 修改文件

- `src/features/home/HomePage.module.css`
- `src/components/layout/SiteHeader.module.css`
- `design-qa.md`
- `docs/handoffs/03-home.md`

没有修改 `src/features/atlas/**`、`src/app/[locale]/atlas/**`、旧站文件或全局设计令牌。

### 验证结果

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 通过 |
| `npm run build` | 通过；177 个既有静态页面生成完成，首页保持动态渲染 |
| Impeccable full/layout detector | 均为 `[]` |
| 1295×945 正式预览 | 日历约 136.7px 高；内部上下边框均为 0；1 个 H1；无横向溢出；控制台 0 error |
| 导航滚动状态 | 82% 宣纸色透明背景与约 14px 模糊生效；导航文字保持清楚 |
| 响应式静态复核 | 390px 下日期/时间最小 20px、时间不换行；两列日历字段和既有移动导航结构不变 |

桌面截图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-compact-calendar-glass-header-1295x945-final.png`

导航滚动截图：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-glass-header-scrolled-final.png`

前后对照：`/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-compact-calendar-glass-header-comparison.png`

### 遗留问题与后续任务注意事项

- 任务 04 应将图谱搜索框移到图谱库页标题区域的右上角，并在 390px 下恢复为标题下方全宽排列；调整时保留真实筛选、当前筛选状态和键盘标签关系。
- 毛玻璃在页面顶部因下方背景接近宣纸白而较克制，这是有意的；不要通过增加阴影、渐变或更高饱和度来强化效果。
- 任务 08 应在低端手机上复核 sticky `backdrop-filter` 的滚动合成开销；如出现掉帧，优先降低模糊半径或对小屏使用半透明纯色，不改变导航结构。

---

## 2026-07-14 首页精选扩容与每日轮换

### 完成内容

- 首页精选池由 3 幅扩为 6 幅：足阳明胃经、桂枝、九针、薄荷、汤剂科普和自煎中药指南。
- 使用北京时间日期确定每日首图；同一天刷新保持稳定，上一幅、下一幅仍按固定顺序循环，不自动播放。
- 图片链接始终进入当前作品详情；新增作品完整展示，不随机跳去其他作品。
- 修正前后按钮的无障碍名称，并将切换动画的重建节点下移到非交互图像容器，使图片链接上的键盘焦点不会在切换后丢失。
- 当前首图与后续切换图均按首屏图片加载，避免切换后触发 LCP 懒加载警告。

### 验证结果

| 验证 | 结果 |
| --- | --- |
| 类型检查 / 完整 Lint | 通过 |
| 正式本地构建 | 通过；207 个静态页面，首页保持动态渲染 |
| 6 幅循环与详情链接 | 通过 |
| ArrowRight 焦点保持 | 通过 |
| 1440×900 | 1 个 H1，无横向溢出 |
| 390×844 | 无横向溢出；按钮高度大于 44px |
| 简体 / 繁体 / 英文 | 均为 6 幅且无横向溢出 |

### 发布边界

- 仅本地修改，没有提交、推送、PR、Preview、合并、标签、Release 或部署。
- 每日轮换只影响首图起点，不改变作品排序、图谱库目录或作品详情 URL。
