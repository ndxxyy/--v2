# 08 图片版权保护交接

## 完成内容

- 将公开图像调用收束为“缩略图 / 预览图”两级：图库目录只加载轻量 WebP 缩略图，详情和大图查看只使用受控 WebP 预览图；全分辨率母版继续留在非公开的 `content-assets/masters/**`，未加入网页源码或 `public/**`。
- 公开图片路径改为由私有密钥派生的 24 位十六进制文件名，不再在网址中暴露作品英文名、分类目录或 `high` / `original` 等语义。
- 137 张母版重新生成 274 个公开变体。每个公开变体统一加入右下角低透明度版权标识“小钟岐医 / xiaozhongqiyi.com”，并继续保留既有 `xqy-dct-qim-v2` 盲水印。
- 增加图谱图片专用的基础保护：阻止右键菜单、图片拖拽和针对图片的简单复制；同时保留正文选择、手机滚动、键盘焦点、图片替代文本和大图浏览。
- 详情页新增“版权与展示版本”说明，明确未经授权不得批量保存、二次上传、商业使用或素材化分发，并区分在线展示版、学习授权版和正式授权版。
- 详情页新增“为什么图片需要授权？”说明和携带作品编号的授权入口。
- 真实作品编号继续显示；没有已确认编号的新图谱保持隐藏，没有生成占位编号。数据模型没有真实创建时间，因此未显示创建时间。
- 未恢复此前已删除的 PSD / 源文件说明。

## 修改文件

### 资源生成与验证

- `scripts/atlas/public-asset-path.mjs`
- `scripts/atlas/asset-manifest.json`
- `scripts/atlas/asset-manifest.mjs`
- `scripts/atlas/generate-images.mjs`
- `scripts/atlas/verify-watermarks.mjs`
- `src/data/atlas-image-assets.generated.ts`
- `public/images/atlas/thumbnails/**`
- `public/images/atlas/previews/**`

### 页面与交互

- `src/components/layout/MediaProtectionGuard.tsx`
- `src/components/layout/SiteFrame.tsx`
- `src/app/globals.css`
- `src/features/atlas/ResilientImage.tsx`
- `src/features/atlas/AtlasDetailPage.tsx`
- `src/features/atlas/AtlasRightsNotice.tsx`
- `src/features/atlas/AtlasRightsNotice.module.css`
- `docs/handoffs/08-anti-piracy.md`

## 验证结果

| 验证 | 结果 |
| --- | --- |
| 图片生成 | 137 张母版生成 274 个公开 WebP 变体；生成阶段 274 / 274 通过盲水印自检 |
| `npm run atlas:watermark:verify` | 274 / 274 通过；最低置信度 0.909，最低载荷投票数 8 |
| 角落版权标识 | 对汤剂预览图右下角原尺寸裁切检查，品牌名与域名均可辨识，未遮挡主要医学内容 |
| `npm run typecheck` | 通过，0 错误 |
| 定向 ESLint | 页面、保护组件及图片脚本通过，0 错误或警告 |
| `git diff --check` | 通过 |
| Impeccable detector | `[]`，0 条规则发现 |
| 图库目录浏览器检查 | 首屏 18 张图全部来自 `/images/atlas/thumbnails/<24位标识>.webp`，0 张预览图提前加载 |
| 详情页浏览器检查 | 使用 `/images/atlas/previews/<24位标识>.webp`；源码未出现母版路径；版权说明、三种版本与授权原因均显示 |
| 真实编号 | 肺经详情显示 `XQY-MER-LU-001`；没有编号的汤剂详情隐藏编号 |
| 基础图片属性 | 公开图像 `draggable="false"`，禁止选择样式生效；保护监听器只匹配图谱图片及其媒体控件 |
| 右键实测 | 在汤剂公开预览图上发送右键操作，页面未弹出保存图片菜单；页面结构和正常浏览未改变 |
| 大图体验 | 弹窗正常打开，图片点击后 `aria-pressed` 由 `false` 变为 `true`；关闭后弹窗消失且页面滚动恢复 |
| 桌面布局 | 1411×1324 下版权说明对齐，页面无横向溢出，每页一个 H1 |

## 遗留问题与边界

- 浏览器端禁止右键、拖拽和简单复制只能提高普通保存成本，无法阻止截图、开发者工具、自动化浏览器或对公开预览地址的直接请求；页面文案没有承诺绝对防盗。
- 当前项目是本地静态资源架构，没有已配置的 CDN、WAF 或边缘限速策略。本任务没有虚构 CDN 能力；正式部署时可再按实际托管平台增加访问频率限制、热链控制和异常抓取日志。
- 水印采用克制的低透明度角落标识，不覆盖主体内容。对极浅色背景仍可见，但不会达到密集平铺水印的阻挡强度，这是阅读体验与取证标识之间的有意取舍。
- 当前 in-app 浏览器视口为 1411×1324，无法在本轮内改成 390×844；移动规则已保持单列、可换行和无固定宽度，仍建议发布验收时在真实 390×844 设备视口补一张截图。
- 未单独运行正式构建：本地 3016 开发预览仍在使用同一 `.next` 目录，避免构建过程干扰用户正在查看的网页。本轮 TypeScript、定向 Lint、资源验证及实时浏览器检查均已通过。

## 后续任务注意事项

1. 新增或替换作品图片时必须通过 `npm run atlas:images -- --source content-assets/masters/works-watermarked` 重新生成，不能把母版直接复制到 `public/**`。
2. 生成后必须运行 `npm run atlas:watermark:verify`；公开文件名、角落版权标识、盲水印、尺寸、哈希和清单需要一起更新。
3. 不要把作品 slug、药名、`original`、`high` 或母版文件名重新放进公开图片路径。
4. 若补充真实作品编号或创建时间，应先进入内容模型并通过资料确认；页面会继续隐藏不存在的字段。
5. 部署侧若增加 CDN / WAF，应以不妨碍正常学习浏览、搜索引擎抓取公开页面和无障碍访问为前提，不要加入频繁弹窗或整页右键封锁。
