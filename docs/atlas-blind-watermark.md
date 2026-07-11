# 图谱库盲水印

## 用途与边界

图谱库的缩略图和公开预览图在 WebP 编码前嵌入 `xqy-dct-qim-v2` 频域盲水印。水印绑定品牌“小钟岐医”，并记录不含个人信息的站内资产指纹和图片变体；只有持有本地私钥才能完成认证与归因。

盲水印的输入是 `content-assets/masters/works-watermarked` 中已经审核的 113 张全分辨率母版：

- 95 张严格经络母版是用户提供的网状明水印 JPG，经映射和内容核验后逐字节导入。
- 17 张本草和 1 张九针从干净源逐字节恢复，保留源图已有标识。

公开生成器只缩放母版、嵌入盲水印并编码 WebP，不合成或叠加明水印。95 张经络资产对应的 190 张公开变体记录 `xqy-visible-mesh-v2`、`applied: true`；18 张本草/九针对应的 36 张公开变体记录 `source-visible-preserved-v1`、`applied: false`。明水印导入流程见 `docs/atlas-visible-watermark.md`。

盲水印适合确认“这张公开图是由本站哪件资产派生的”，不会阻止右键保存，也不能单独代替母版、文件哈希、创作过程和授权记录。当前所有访客获得的是同一个资产级指纹，因此不能追溯到某个具体访客。

为兼顾画质和容量，图片中没有逐字写入中文明文，而是嵌入由精确文本“小钟岐医”生成的 3 字节品牌校验码。完整 UTF-8 品牌文本同时参与 v2 的 HMAC 认证；品牌码、版本、资产指纹、图片变体或认证码任一不符，检测器都不会返回品牌。品牌码不能脱离 HMAC、私钥和登记表单独作为抗碰撞证明。

## 实现

- `scripts/atlas/blind-watermark.mjs`：`xqy-dct-qim-v2` 的 DCT/QIM 嵌入、HMAC 认证和盲检测。
- `scripts/atlas/generate-visible-masters.mjs`：将用户提供的 95 张经络明水印图映射、核验并逐字节导入，同时从干净源逐字节恢复 18 张本草/九针。
- `scripts/atlas/generate-images.mjs`：只接受带有效私有导入清单的 `works-watermarked`；在缩放后、WebP 编码前嵌入盲水印，每张编码后立即解码验证，全部成功后再整体发布公开目录与清单。
- `scripts/atlas/verify-watermarks.mjs`：严格对照生成清单验证整库文件集、尺寸、字节数、最终哈希、明水印状态和盲水印，或对单张可疑图片做盲检测。
- `scripts/atlas/watermark-registry.mjs`：维护不公开的追加式指纹登记表；作品改名或下架后，旧指纹仍保留归因关系。
- 首页和图谱页使用原始公开 WebP，不经过 Next.js 图片代理二次转码，避免浏览器拿到的版本丢失水印。

算法跳过大面积纯白和平坦区，优先在有局部纹理的 8×8 区块中嵌入，以减少对白底、细线和中文标注的影响。私钥决定区块位置和载荷认证，不会进入清单或浏览器代码。

v2 载荷为 13 字节（104 位）：3 字节品牌码、1 字节版本、4 字节资产指纹、1 字节图片变体和 4 字节 HMAC 认证码。检测器保留历史 v1 的只读兼容能力；历史 v1 图片不显示品牌，新生成图片统一使用 `xqy-dct-qim-v2`。

## 密钥

首次创建：

```text
npm run atlas:watermark:init
```

默认密钥文件为 `content-assets/masters/.atlas-watermark-key`，已被 `.gitignore` 排除，权限为 `0600`。生成器不会覆盖已有密钥。必须在网站仓库以外再保留一份安全备份；丢失密钥后，无法验证已发布的水印。

追加式指纹登记表为 `content-assets/masters/.atlas-watermark-registry.json`，同样被忽略且权限为 `0600`。登记表按“水印版本 + 指纹”保留历史记录，允许同一资产同时拥有历史 v1 和当前 v2 归因。密钥与登记表必须一起备份；不要从登记表删除已发布记录。

部署环境可以使用 `ATLAS_WATERMARK_KEY` 秘密值，或用 `ATLAS_WATERMARK_KEY_FILE` 指向受保护文件。不要把密钥放入 `public`、前端环境变量或资源清单。

## 生成与验证

公开图必须从已审核的全分辨率母版生成：

```text
npm run atlas:images -- --source "content-assets/masters/works-watermarked"
npm run atlas:watermark:verify
```

检测单张图片：

```text
npm run atlas:watermark:detect -- --image "/path/to/suspected-image.webp"
```

检测成功时会输出品牌“小钟岐医”、站内资产 ID、`thumbnail` / `preview` 变体和置信度。检测不依赖未加水印的原图，但必须拥有正确私钥。错误密钥或认证失败时不会显示品牌，并以失败状态退出。

生成器会先检查母版目录中的 `.atlas-visible-masters.json`，逐张核对路径、SHA-256 和明水印描述。缺少导入清单、母版被替换、数量不是 113，或明水印分类不是 95/18 时均拒绝生成。

## 最终验收

2026-07-11 使用用户提供的经络明水印母版完成整库重生成并验收：

- 113 个资产各生成 `thumbnail` 与 `preview`，共 226 张公开 WebP。
- `xqy-dct-qim-v2` 严格验证通过 `226/226`。
- 明水印状态验证为 `applied: true` 190、`applied: false` 36。
- 每张公开图的路径、角色、品牌、资产指纹、尺寸、字节数和最终 SHA-256 均与生成清单一致。
- 经络公开图只继承用户母版中的网状明水印，没有叠加第二层明水印。

本次替换前的母版与公开资源备份位于：

```text
content-assets/backups/20260711-before-user-provided-meridians
```

历史 v1 检测兼容和追加式登记记录继续保留，不能因本次重生成而删除。

## 已知限制

当前版本主要保护站点实际发布的原尺寸 WebP 文件。强缩放、大幅裁切、透视变形、极端压缩、AI 重绘和打印再拍不保证可检；实测 50% 缩放后无法稳定提取。如果要追溯到某个具体授权对象，需将干净交付文件移出公开目录，再通过服务端按订单或授权记录生成个性化指纹。
