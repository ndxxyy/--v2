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
