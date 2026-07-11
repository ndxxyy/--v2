# 受保护母版目录

高清作品母版、品牌源文件、盲水印密钥和归因登记表不得放入 `public`，也不提交到版本库。

## 当前图谱母版

`works-watermarked/` 保存 113 张已审核的全分辨率图谱母版：

- 95 张严格经络图来自用户提供的已加网状“小钟岐医”水印 JPG。导入器完成中文文件名映射、尺寸检查和内容相似度验证后逐字节复制，不重新编码，也不再次合成明水印。清单方案为 `xqy-visible-mesh-v2`，来源为 `user-provided-master`。
- 17 张本草和 1 张九针从旧站干净源逐字节恢复，保留原图已有印章、底纹和元数据，不新增网状水印。清单方案为 `source-visible-preserved-v1`。

私有导入清单为 `works-watermarked/.atlas-visible-masters.json`。它用于核对 113 张母版的路径、来源、尺寸、哈希和明水印状态，不得删除或放入公开目录。

导入命令：

```text
npm run atlas:watermark:visible:masters -- \
  --incoming "/Volumes/钟先生硬盘/02_设计资产与原始素材/版权与水印资质/针灸/素描经络/总览/jpg(水印)" \
  --clean-source "/Volumes/钟先生硬盘/小钟岐医个人独立站/public/images/works"
```

公开缩略图和预览图必须从该已审核目录生成：

```text
npm run atlas:images -- --source "content-assets/masters/works-watermarked"
npm run atlas:watermark:verify
```

公开生成器不会叠加第二层明水印；它从母版缩放并嵌入 `xqy-dct-qim-v2` 盲水印。最终已验收 226/226 张公开 WebP，明水印清单为 `applied: true` 190、`applied: false` 36。

替换前版本保存在 `content-assets/backups/20260711-before-user-provided-meridians`，仅用于回滚和审计，不得放入 `public`。

## 密钥与归因记录

图谱盲水印密钥默认保存为 `.atlas-watermark-key`，追加式归因表为 `.atlas-watermark-registry.json`。两个文件均被 Git 忽略，必须在项目之外另存安全备份；密钥不得进入浏览器代码、公开清单或前端环境变量。

详细流程见 `docs/atlas-visible-watermark.md` 和 `docs/atlas-blind-watermark.md`。
