# 04 图谱库交接

## 完成内容

- 迁移旧站中具备真实图像的 32 件作品：15 件经络/针具作品、17 件本草作品；没有迁移 3 件无图本草和 3 件无图经方文字条目。
- 建立经络、本草、经方三类公开分类；经方分类保留真实的 0 件状态并显示合规空状态，不创建示例作品。
- 实现图谱总目录、三类分类页和 32 件作品详情页，三语言 URL 均可静态生成。
- 实现按标题、作品编号、分类、标签和图组标题的本地搜索，以及按真实分类数据筛选；结果数量、当前分类、当前搜索词和清除动作同步更新。
- 目录首屏直接进入真实作品流；目录项使用图像、标题、分类、真实作品编号和经审核简介，不使用圆角卡片、投影或旧站布局/CSS。
- 详情页在手机端严格先显示返回入口、作品信息、编号、说明和动作，再显示主图与缩略图。
- 实现详情画廊：上一张、下一张、页面缩略图、公开预览图和当前张数。
- 实现原生 `<dialog>` 大图预览：上一张/下一张、编号缩略图、左右方向键、显式 ESC 关闭、Tab 焦点限制、背景滚动锁定及关闭后焦点返回。
- 授权与联系入口均携带真实作品编号，例如 `?work=XQY-MER-LU-001`。
- 作品版权统一设为未核验/隐藏；没有迁移示例登记号，也没有展示旧站中缺少内部证据引用的候选登记号。
- 补充简体、繁体和英文的图谱 UI、作品标题、简介、图组标题与替代文本；任务 07 仍需做最终术语审校。

## 图片管线

- 95 张严格经络母版不再由程序绘制明水印。它们来自用户提供的已加白色半透明网状“小钟岐医”水印 JPG；导入器将中文文件名映射到网站资产路径，逐张核对尺寸和内容相似度后，逐字节复制到 `content-assets/masters/works-watermarked`。
- 17 张本草和 1 张九针从旧站干净源逐字节恢复，移除此前误加的红色角标，同时保留源图已有印章、底纹和元数据。
- 113 张全分辨率母版均记录在私有清单 `content-assets/masters/works-watermarked/.atlas-visible-masters.json`；用户来图与旧站干净源保持只读。
- `scripts/atlas/generate-images.mjs` 只接受带有效私有清单的 `works-watermarked`，逐张核对路径、SHA-256 和明水印描述后生成公开图，不再合成或叠加明水印。
- 113 张母版派生为：
  - 113 张目录 WebP 缩略图，最大 956×1280，共 13.87 MiB。
  - 113 张详情 WebP 公开预览图，最大 1075×1440，共 23.93 MiB。
- 缩略图和公开预览均保持真实 3:4 附近比例，不裁切；每张在 WebP 编码前嵌入 `xqy-dct-qim-v2` 盲水印。
- 自动生成 `src/data/atlas-image-assets.generated.ts`，记录 226 个派生资源的路径、真实宽高、格式、字节数、SHA-256、明水印来源和盲水印置信度。
- `public/images/atlas/**` 仅含公开 WebP 与目录保留文件，不含 JPG/PNG 母版。

导入全分辨率母版：

```text
npm run atlas:watermark:visible:masters -- \
  --incoming "/Volumes/钟先生硬盘/02_设计资产与原始素材/版权与水印资质/针灸/素描经络/总览/jpg(水印)" \
  --clean-source "/Volumes/钟先生硬盘/小钟岐医个人独立站/public/images/works"
```

从已审核母版重新生成并验证公开图：

```text
npm run atlas:images -- --source "content-assets/masters/works-watermarked"
npm run atlas:watermark:verify
```

### 2026-07-11 水印更新

- 95 张用户提供的经络水印原图已完成中文文件名映射、尺寸检查和内容相似度验证，并逐字节导入；`xqy-visible-mesh-v2` 记录其水印样式和 `user-provided-master` 来源，不代表程序再次绘制水印。
- 17 张本草和 1 张九针已从登记的干净源逐字节恢复，方案为 `source-visible-preserved-v1`，未叠加新明水印。
- 全分辨率结果为 95 张用户经络母版和 18 张源标识保留母版，共 113 张；每一张复制后均核对源/目标字节数和 SHA-256。
- 公开结果为 190 张 `applied: true` 与 36 张 `applied: false` 的缩略图/预览图，共 226 张。
- 226 张公开图片均嵌入带“小钟岐医”品牌认证的 `xqy-dct-qim-v2` 盲水印，并已严格验证通过 `226/226`。
- 替换前版本保存在 `content-assets/backups/20260711-before-user-provided-meridians`，用于回滚和审计。
- 详细流程与边界见 `docs/atlas-visible-watermark.md` 和 `docs/atlas-blind-watermark.md`。

## 修改文件

### 路由

- `src/app/[locale]/atlas/page.tsx`
- `src/app/[locale]/atlas/meridians/page.tsx`
- `src/app/[locale]/atlas/herbs/page.tsx`
- `src/app/[locale]/atlas/formulas/page.tsx`
- `src/app/[locale]/atlas/[slug]/page.tsx`

### 图谱功能

- `src/features/atlas/AtlasCatalogPage.tsx`
- `src/features/atlas/AtlasExplorer.tsx`
- `src/features/atlas/AtlasCatalog.module.css`
- `src/features/atlas/AtlasDetailPage.tsx`
- `src/features/atlas/AtlasDetailPage.module.css`
- `src/features/atlas/AtlasGallery.tsx`
- `src/features/atlas/AtlasGallery.module.css`
- `src/features/atlas/ResilientImage.tsx`
- `src/features/atlas/ResilientImage.module.css`
- `src/features/atlas/selectors.ts`
- `src/features/atlas/copy.ts`
- `src/features/atlas/index.ts`

### 数据与生成脚本

- `src/data/works.ts`
- `src/data/image-groups.ts`
- `src/data/work-categories.ts`
- `src/data/atlas-image-assets.generated.ts`
- `scripts/atlas/generate-visible-masters.mjs`
- `scripts/atlas/generate-images.mjs`
- `scripts/atlas/visible-watermark.mjs`
- `scripts/atlas/blind-watermark.mjs`
- `scripts/atlas/verify-watermarks.mjs`
- `content-assets/masters/works-watermarked/**`（113 张全分辨率母版与私有导入清单）
- `content-assets/backups/20260711-before-user-provided-meridians/**`（替换前审计备份）
- `public/images/atlas/thumbnails/**`（113 张 WebP）
- `public/images/atlas/previews/**`（113 张 WebP）

### 交接

- `docs/handoffs/04-atlas.md`

没有修改旧站、`src/domain/**`、全局布局、全局样式、任务 02 UI、任务 03 首页或任务 05–07 文件。

## 验证结果

环境：macOS arm64、Node.js 24.15.0、npm 11.12.1、Next.js 16.2.10。

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 最终代码通过，0 错误 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 最终代码通过，0 错误/警告 |
| Impeccable detector | 扫描图谱 feature 与路由，结果 `[]` |
| `npm run build` | 主体实现和客户端序列化修复后通过；129 个静态页面，含三语言 96 个作品详情路径 |
| 图片格式 | 113 张缩略图与 113 张预览图全部为 WebP |
| 全分辨率母版 | 95 张用户经络水印图逐字节导入；18 张本草/九针从干净源逐字节恢复；总计 113 张 |
| 明水印状态 | `applied: true` 190，`applied: false` 36 |
| 盲水印 | `xqy-dct-qim-v2` 严格验证通过 226/226 |
| 图片清单 | 226 个资源引用，0 个缺失；路径、尺寸、字节数和最终 SHA-256 均通过核对 |
| 版权扫描 | 未发现示例登记号、伪 `registered` 状态或写死登记号 |
| 旧站完整性 | 作品数据和 113 张源图集合哈希与任务开始前一致 |

正式构建通过后的最终两处改动仅为：目录首屏垂直节奏压缩、给大图键盘处理增加显式 ESC 分支。两处修改后 TypeScript、Lint 与 Impeccable detector 再次通过。环境的高权限运行额度随后耗尽，最后一次重复正式构建和刷新截图未能执行；这是本次唯一未完成的重复验证，不是已出现的代码错误。

旧站只读校验：

- `src/data/works.ts`：`f9d8ae3a750ca0e7539ae2f78860e8dcfa081c5ab1d395f74acdeaffcc05e937`
- `public/images/works` 全部文件集合：`5ada3246e1d6af2e8001b48d59a66cfa0eb6b7c1672f2d9ad7b55233dcf3b4a5`

### 浏览器验证

已在生产预览中验证：

- 1440×900：目录 H1 数量为 1，页面 `scrollWidth` 与 `clientWidth` 同为 1425px，无横向溢出；分类计数为 32 / 15 / 17 / 0。
- 搜索“麻黄”真实返回 1 件“麻黄图谱”；清除后恢复 32 件。
- 本草筛选真实返回 17 件，首件为“苍耳子图谱”。
- 390×844：页面 `scrollWidth` 与 `clientWidth` 同为 375px，菜单按钮为 44×44px。
- 390×844 详情：作品信息位于主图之前；H1 数量为 1；联系入口为 `/zh-CN/contact?work=XQY-MER-LU-001`。
- 大图打开后焦点进入“关闭大图”，`body` 与 `html` 均锁定滚动；方向键切换图片；Shift+Tab 后焦点仍在弹窗内。
- 浏览器 WebView 未触发原生 ESC 默认关闭，因此补充了显式 ESC 分支；此项修复后的实时复测需由任务 08 补做。

截图（最终首屏紧凑调整前的验收记录）：

- `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b4e-83d7-7e20-9a17-10229f9c43d1/04-atlas-1440x900.png`
- `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b4e-83d7-7e20-9a17-10229f9c43d1/04-atlas-390x844.png`
- `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b4e-83d7-7e20-9a17-10229f9c43d1/04-atlas-detail-390x844.png`

## 遗留问题

- 需要在高权限运行额度恢复后，针对最终两处微调补跑一次 `npm run build`，重启生产预览，并重新截取目录首屏截图。
- 需要在最终生产预览中复测显式 ESC 关闭后的焦点返回与滚动解锁；实现逻辑、类型和 Lint 已通过。
- 旧站候选版权登记号没有内部 `evidenceRef`，本任务全部隐藏。若未来补齐可核验证据，应由版权/授权任务按内容模型逐条公开，不能批量恢复。
- 旧数据中的本草标题“怪柳图谱”按真实来源保留；若实际应为“柽柳图谱”，需用户确认后再改，不能由开发者自行纠正事实内容。
- 英文和繁体医学术语已提供工作翻译，任务 07 应做最终术语审校，但不得改变作品编号、slug 或图组对应关系。

## 后续任务注意事项

1. 任务 03 首页会自动读取 7 件 `featured + published` 作品；本任务数据已满足 WebP/AVIF 缩略图、当前语言标题和替代文本条件。
2. 任务 06 的授权与联系页面应读取 `work` 查询参数并在页面标题附近显示作品编号；当前图谱入口已经传递编号。
3. 任务 07 可添加 metadata、hreflang、结构化数据和最终术语审校，不得绕过 `selectAtlasCatalog` / `selectAtlasDetail` 的发布与资源过滤。
4. 任务 08 必须补做最终构建和两处实时复测，并在 1440×900、390×844 重新截图；重点检查目录第一屏真实作品、ESC 关闭后的焦点返回和滚动解锁。
5. 不要把 `content-assets/masters/**`、旧站 JPG 或交付级高清文件加入公开目录；详情大图继续使用 `public/images/atlas/previews/**` 中的受控 WebP。
6. 重新生成图片后必须提交生成清单并复核 226 个公开资源引用均存在；不要只替换图片而不更新宽高和字节数。
