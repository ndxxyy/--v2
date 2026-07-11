# 01 项目规划与架构交接

## 完成内容

- 创建全新的 Next.js 16.2.10、React 19.2.7、TypeScript 5.9.3、Tailwind CSS 4.3.2 项目基础。
- 冻结 Node.js 24 LTS 与 npm 11 运行基线，生成并验证 `package-lock.json`。
- 建立 `/zh-CN`、`/zh-Hant`、`/en` 三套独立 URL 骨架，根路径永久重定向到 `/zh-CN`。
- 建立首页、图谱总目录、经络/本草/经方分类、图谱详情、医案列表/详情、授权、版权、关于、联系路由骨架。
- 定义作品、图组、分类、医案、授权场景、联系方式、作者资料、版权和多语言类型。
- 建立公开内容发布过滤基础：医案需同时通过发布、匿名化、患者授权和编辑审核；联系方式需已发布且具有真实可达值。
- 创建空数据集合，没有迁移或编造任何作品、医案、资质、联系方式、价格或版权号。
- 规划高清母版、缩略图、公开预览、分享图、品牌素材和联系素材目录。
- 完成旧站只读盘点，区分可迁移候选、禁止迁移内容和待复核字段。
- 冻结 01–08 文件所有权和共享文件接管顺序。
- 创建 01 阶段 `DESIGN.md` 方向基线；完整设计系统明确移交任务 02。

## 修改文件

### 架构与交接

- `docs/architecture.md`
- `docs/content-model.md`
- `docs/work-ownership.md`
- `docs/handoffs/01-architecture.md`
- `DESIGN.md`（01 基线，任务 02 接管）
- `README.md`

### 项目配置

- `package.json`
- `package-lock.json`
- `.nvmrc`
- `.gitignore`
- `next.config.ts`
- `tsconfig.json`
- `next-env.d.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`

### 内容与国际化契约

- `src/domain/content.ts`
- `src/domain/publication.ts`
- `src/i18n/config.ts`
- `src/i18n/server.ts`
- `src/i18n/route-labels.ts`
- `src/data/README.md`
- `src/data/works.ts`
- `src/data/image-groups.ts`
- `src/data/work-categories.ts`
- `src/data/cases.ts`
- `src/data/case-categories.ts`
- `src/data/license-scenarios.ts`
- `src/data/contacts.ts`
- `src/data/author.ts`

### 路由骨架

- `src/app/globals.css`（最低限度样式，任务 02 接管）
- `src/app/(root)/layout.tsx`
- `src/app/(root)/page.tsx`
- `src/app/[locale]/layout.tsx`
- `src/app/[locale]/_components/RouteScaffold.tsx`
- `src/app/[locale]/page.tsx`
- `src/app/[locale]/atlas/**`
- `src/app/[locale]/cases/**`
- `src/app/[locale]/licensing/page.tsx`
- `src/app/[locale]/copyright/page.tsx`
- `src/app/[locale]/about/page.tsx`
- `src/app/[locale]/contact/page.tsx`

### 资源目录

- `content-assets/masters/README.md`
- `public/images/atlas/thumbnails/.gitkeep`
- `public/images/atlas/previews/.gitkeep`
- `public/images/brand/.gitkeep`
- `public/images/contact/.gitkeep`
- `public/images/social/.gitkeep`

## 验证结果

环境：macOS arm64、Node.js 24.15.0、npm 11.12.1。

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过，0 错误 |
| `npm run lint` | 通过，0 错误/警告 |
| `npm run build` | 通过，Next.js 16.2.10 Turbopack 正式构建成功 |
| 路由生成 | 33 个静态页面入口；图谱和医案详情为按需路由骨架 |
| 空数据扫描 | 未发现旧站电话、邮箱、社媒、示例/真实登记号进入 V2 代码 |
| 旧站完整性 | 关键来源文件构建后 SHA-256 与盘点前一致 |

旧站完整性复核：

- `src/data/works.ts`：`f9d8ae3a750ca0e7539ae2f78860e8dcfa081c5ab1d395f74acdeaffcc05e937`
- `src/app/contact/page.tsx`：`3662525bf97e0316c024d4e0af2fbca85ea6493c3d516ed029acf423b758d43f`
- `public/images/contact/wechat-qr.jpg`：`3ea3df68ad1a1baaf0ad3a1597f269541ca5b92b7fd01602c752033241a4844d`

备注：Turbopack 在受限沙箱内因内部进程需要临时端口而失败；以允许该构建进程的正常环境重新运行后成功。这是执行环境权限限制，不是项目构建错误。

## 旧站只读盘点摘要

- 旧站 `public/images/works` 有 113 张作品 JPG：95 张经络图组图片、17 张本草图片、1 张九针图谱。
- 旧数据可识别 14 个有图经络图组、1 个九针作品、17 个有图本草作品。
- 3 个本草条目与 3 个经方条目只有文字、没有对应真实图片，本次未迁移。
- 旧站有品牌印章和微信二维码候选素材，本次未复制。
- 旧站存在电话、邮箱、小红书、抖音资料，本次未复制，必须由任务 06 复核当前有效性。
- 旧数据大量使用示例登记号；仅发现 5 个非示例登记号，必须逐条核验证据后才能展示。
- 旧站没有可验证的医生资质、执业机构、地址、接诊时间或 QQ 资料。
- 旧站在任务 01 开始前已有未提交修改；本任务未接触、未清理这些改动。

## 遗留问题

- `DESIGN.md` 只是方向基线，尚无最终颜色、字体、栅格、组件状态、响应式和动效令牌。
- Impeccable 未安装，符合任务 01 禁止项；任务 02 首次安装必须使用 `--no-hooks`。
- V2 尚无真实业务数据或图片，这是有意的空状态，不是遗漏。
- 没有执行浏览器视觉验收、截图或发布；这些不属于任务 01。
- 详情路由目前只验证路由能力，任务 04/05 必须用真实数据选择器和 404 规则替换骨架。
- 三语言当前仅有路由标题；完整内容映射、Metadata、hreflang、canonical、sitemap 和 robots 属于任务 07。

## 后续任务注意事项

1. 任务 02 开始前读取四份前置文档和本交接；接管 `DESIGN.md` 与 `src/app/globals.css`。
2. 任务 02 使用 Tailwind CSS 4 的 CSS-first 令牌方式，不要按 Tailwind 3 习惯强行创建旧式配置。
3. 任务 03–06 在任务 02 完成交接前不得开始完整页面实现。
4. 任务 04 只读复制经核验的旧站真实图片到 V2；先生成 WebP/AVIF 缩略图，禁止目录页加载 JPG 母版。
5. 任务 04 不得迁移示例登记号、无图文字作品或无法核验的“已登记”状态。
6. 任务 05 当前没有真实医案；保持数据为空并实现合规空状态，不得把作品描述改造成医案。
7. 任务 06 逐项确认联系方式有效性后再写入 `src/data/contacts.ts`；不得恢复旧站不可提交表单。
8. 任务 07 保留 `zh-CN | zh-Hant | en` locale key 和独立 URL 结构，不以客户端文字替换伪装多语言。
9. 任何任务修改 `src/domain/**` 时同步更新 `docs/content-model.md`，并检查所有下游选择器。
10. 旧站始终只读；不要在旧站运行格式化、依赖升级、资源生成或 Git 清理命令。

