# 小钟岐医 V2 文件所有权

## 1. 总则

1. 同一时间一个文件只有一个任务所有者。
2. 开始任务前必须读取 `docs/architecture.md`、`docs/content-model.md`、本文件、`DESIGN.md` 和所有已完成前置任务交接。
3. 不修改不属于本任务的文件；确需修改共享文件时，先确认前置任务已完成，并在交接中逐文件说明。
4. 发现目标文件存在未识别改动时停止覆盖，先核对 `git diff` 和最近交接。
5. 旧站目录永远只读，不属于任何 V2 任务的写入范围。
6. `docs/handoffs/<任务编号>-<任务名称>.md` 由对应任务独占。

## 2. 任务所有权矩阵

### 01 项目规划与架构

独占：

- `package.json`、初始 `package-lock.json`
- `next.config.ts`、`tsconfig.json`、`next-env.d.ts`
- `postcss.config.mjs`、`eslint.config.mjs`
- `.gitignore`、`.nvmrc`、`README.md`
- `src/domain/**`
- `src/i18n/config.ts`
- 初始 `src/data/**` 空集合与说明
- 初始 `src/app/**/page.tsx` 路由骨架
- `docs/architecture.md`
- `docs/content-model.md`
- `docs/work-ownership.md`
- `docs/handoffs/01-architecture.md`

临时创建、后续移交：

- `DESIGN.md` 的方向基线，任务 02 接管并扩展。
- `src/app/globals.css` 的最低限度骨架，任务 02 接管。
- locale 布局骨架，任务 03 接管全局框架，任务 07 接管 metadata/i18n 部分。

### 02 视觉系统

独占：

- `DESIGN.md`
- `docs/responsive-spec.md`
- `src/app/globals.css`
- `src/styles/**`
- `src/components/ui/**`
- `src/components/design-system/**`
- Impeccable 的项目级配置和依赖变更
- `docs/handoffs/02-design-system.md`

允许修改共享配置：

- `package.json`、`package-lock.json`：仅安装 Impeccable 或设计系统必需依赖。
- Tailwind CSS 4 的令牌优先写入 CSS；若确需新增配置文件，由 02 独占。

### 03 首页与全局框架

独占：

- `src/components/layout/**`
- `src/features/home/**`
- `src/app/[locale]/page.tsx`
- `src/app/[locale]/layout.tsx` 的 Header、Footer 与页面框架部分
- 首页所需数据选择器，不拥有作品原始数据
- `docs/handoffs/03-home.md`

不得修改：

- `src/data/works.ts`；向任务 04 请求公开选择器或使用其公共入口。
- 任务 07 所有 metadata、sitemap、robots 文件。

### 04 图谱库

独占：

- `src/features/atlas/**`
- `src/app/[locale]/atlas/**`
- `src/data/works.ts`
- `src/data/image-groups.ts`
- `src/data/work-categories.ts`
- `public/images/atlas/**`
- 图谱缩略图生成脚本
- `docs/handoffs/04-atlas.md`

可读取但不得写入：旧站作品数据和图片。

### 05 医案整理

独占：

- `src/features/cases/**`
- `src/app/[locale]/cases/**`
- `src/data/cases.ts`
- `src/data/case-categories.ts`
- `docs/handoffs/05-cases.md`

医案审核证据不得写入公开仓库。

### 06 授权、版权、关于与联系

独占：

- `src/features/trust/**`
- `src/app/[locale]/licensing/**`
- `src/app/[locale]/copyright/**`
- `src/app/[locale]/about/**`
- `src/app/[locale]/contact/**`
- `src/data/license-scenarios.ts`
- `src/data/contacts.ts`
- `src/data/author.ts`
- `public/images/contact/**`
- 经确认的 `public/images/brand/**`
- `docs/handoffs/06-trust-contact.md`

### 07 SEO、多语言与性能

独占：

- `src/i18n/**`，但保留 01 冻结的 locale key
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/[locale]/not-found.tsx`
- `src/app/[locale]/**` 中的 metadata、alternates 和结构化数据部分
- `public/images/social/**`
- `docs/handoffs/07-seo-performance.md`

允许修改共享文件：

- `next.config.ts`：仅图片、字体、性能或发布相关配置。
- 各业务页面：只添加 metadata、语义层级、结构化数据和性能修正，不重新设计。
- `package.json`、锁文件：只删除无效依赖或增加经说明的 SEO/性能必需依赖。

### 08 集成测试与发布

在 01–07 均交接后临时获得全仓库集成修复权，但必须：

- 先读取全部交接。
- 只修复可复现问题，不重新设计。
- 保留内容模型和视觉系统冻结决策。
- 将每项跨任务修复记录在 `docs/handoffs/08-release.md`。

### 09 版本更新：中药小批次

任务 09 只在 01–08 的正式基线之后执行。必须从最新、干净的 `main` 创建独立中药更新分支；默认阶段只允许本地修改和本地验证，不取得推送、PR、Cloudflare 或生产发布权限。

独占或顺序接管：

- `src/data/works.ts`：只新增或修订本批次已审核的中药作品。
- `src/data/image-groups.ts`：只维护本批次中药的真实图片组关系。
- `src/data/atlas-image-assets.generated.ts`：只能由图谱生成脚本更新，禁止手工编辑。
- `scripts/atlas/**`：只修改版本化资产清单、图片生成、增量处理和水印验证直接需要的文件。
- `public/images/atlas/thumbnails/herbs/**`、`public/images/atlas/previews/herbs/**`：只能由审核后的母版和脚本生成。
- `docs/content-model.md`：只有在 `Work` 内容模型真实扩展且代码契约同步变更时才可修改。
- `docs/work-ownership.md`：只增加任务 09 的所有权、批次顺序和权限边界。
- `eslint.config.mjs`：只增加明确的生成目录、工具镜像目录和受保护母版忽略范围。
- `CHANGELOG.md`
- `docs/herb-update-template.md`
- `docs/handoffs/09-version-update.md`

本地受保护输入，可按审核流程导入或读取但不得提交：

- `content-assets/masters/**`
- 任何包含高清母版或私有导入证据的 `content-assets/backups/**`
- `.atlas-watermark-key`
- `.atlas-watermark-registry.json`
- 高清授权交付文件
- 版权证明、医学审校证据、原始创作记录和其他私密证据

不得修改：

- 临证笔记、联系、作者和授权业务数据。
- 与中药更新无关的页面视觉、布局、组件和样式。
- Cloudflare Worker 名称、账户、域名或生产部署配置。
- 旧网站任何文件。

任务 09 每个分支只处理一个小批次，推荐 1–5 味中药。编号体系、药物分类体系和首页精选只有在用户明确确认后才能改变；三语言、版权、医学来源、公开许可或明水印策略任一未通过时，记录保持 `draft`，不得进入公开选择器。

2026-07-13 的“解表药·发散风热药”是用户一次提供并明确要求完整加入本地网页的 13 味完整类别，因此作为一个不可拆分的本地特批批次处理。该例外不改变后续默认的 1–5 味建议，也不开放推送或上线权限；新作品没有用户确认的访客编号时必须省略编号。

## 3. 共享文件变更协议

以下文件是顺序共享，不可并行编辑：

| 文件 | 顺序 |
| --- | --- |
| `package.json` / `package-lock.json` | 01 → 02 → 07 → 08 |
| `src/app/[locale]/layout.tsx` | 01 骨架 → 03 框架 → 07 元数据/语言 → 08 修复 |
| `src/app/globals.css` | 01 骨架 → 02 设计系统 → 08 修复 |
| `next.config.ts` | 01 基础 → 07 性能 → 08 修复 |
| `src/i18n/config.ts` | 01 locale 冻结 → 07 国际化实现 → 08 修复 |
| `eslint.config.mjs` | 01 基础 → 09 仅补充明确忽略范围 |
| `src/data/works.ts` / `src/data/image-groups.ts` | 01 空集合 → 04 图谱基线 → 09 中药批次顺序更新 |
| `src/data/atlas-image-assets.generated.ts` | 04 图谱基线 → 09 仅由脚本生成 |
| `scripts/atlas/**` | 04 图片与水印基线 → 09 版本化清单和小批次流程 |
| `public/images/atlas/thumbnails/herbs/**` / `public/images/atlas/previews/herbs/**` | 04 公开基线 → 09 仅由脚本按批次生成 |
| `docs/content-model.md` | 01 内容契约 → 09 仅在模型真实扩展时同步 |
| `docs/work-ownership.md` | 01 所有权基线 → 09 增加版本更新边界 |

共享文件的后继任务在修改前记录当前状态；如果前置交接不存在，停止实现。

### 3.1 任务 09 批次顺序

任务 09 的共享数据、版本化清单、图谱脚本和生成目录不可由多个批次并行编辑。顺序为：

```text
content/herbs-v1.1（框架）
  → content/herbs-v1.1-batch-01
  → 后续经确认的小批次分支
```

1. 后一批次必须以包含前一批次最终结果的最新基线创建，并先读取前一批次的 09 交接和变更记录。
2. 前一批次尚未完成、仍有未识别改动或未解决冲突时，不开始后一批次的共享文件修改。
3. 批次内可以并行核对互不重叠的资料，但同一文件、同一资产 ID、同一作品 ID、同一路径和同一生成目录在同一时间只有一个所有者。
4. 生成清单和公开图片是同一原子变更；不能由不同批次分别手工合并，也不能只提交其中一部分。
5. `创建预览，不上线` 只开放当前批次的非生产预览；`确认发布 <版本号>` 只开放已明确确认的版本，不能沿用到后续批次。

## 4. 公共入口约定

- feature 只从自己的 `index.ts` 暴露页面需要的组件和选择器。
- 03 首页不得深层导入 04 图谱私有组件；复用视觉时使用 02 的 UI 原语。
- 07 可以包装公共选择器生成 SEO 数据，但不得绕过内容发布过滤。
- `src/domain/**` 的破坏性变更需同步更新 `docs/content-model.md`，并通知所有已开始的下游任务。

## 5. 冲突检查清单

开始写入前：

1. 确认前置交接存在。
2. 检查目标文件是否属于本任务。
3. 检查工作区是否已有同文件改动。
4. 若是共享文件，确认轮到本任务接管。
5. 不确定时停止，不以覆盖方式解决。
