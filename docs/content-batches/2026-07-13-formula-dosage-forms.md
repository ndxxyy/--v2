# 1.1 经方集谱批次：剂型区别

批次日期：2026-07-13

状态：**仅本地可见；未提交、未推送、未创建预览、未上线。**

## 1. 用户范围与决定

- 用户提供 11 张已经处理明水印的“方剂 / 剂型区别”JPEG，要求加入暗水印并更新本地网页。
- 本批按 10 件作品、11 张图片整理；两张“自煎中药”归为同一件双图作品。
- 原素材目录只读，所有暗水印与网页尺寸处理都发生在网站的受保护副本和公开派生图上。
- “上传”在本批只表示导入本地网站；推送 GitHub、Cloudflare Preview 和正式上线均须等待用户检查后再次确认。

## 2. 来源与文件检查

受控来图位置：

`/Volumes/钟先生硬盘/02_设计资产与原始素材/版权与水印资质/方剂/剂型区别/jpg(水印)`

- 目录共 11 张可解码 JPEG，SHA-256 全部唯一，也未与原有 126 张母版重复。
- 9 张剂型图为 3584×4800；两张“自煎中药”为 7094×9459。
- 原目录和原文件均未修改；导入前只在仓库外临时目录建立严格的 `formulas/dosage-forms/<slug>.jpg` 映射。
- 10 张源图含用户提供的平铺网状明水印；`中药方剂科普-自煎中药.jpg` 只含可确认的“小钟岐医”印章标识，因此单独按保留既有印章登记，没有冒充网状水印。
- 11 张源图的元数据均含“大附子”作者归属、“不可商用”类版权声明及联系方式。具体联系方式不写入仓库；2026-07-14 用户确认“大附子”就是本人，作者身份冲突已解除，声明继续原样保留。
- 图片包含剂型、煎煮、服用和功效/安全类文字。网站未把这些文字转录为结构化医学资料；正式上线前仍需医学与编辑复核。

## 3. 作品与资产映射

| 作品 ID | 简体标题 | URL slug | 资产 ID | 原文件 | SHA-256 |
| --- | --- | --- | --- | --- | --- |
| `work-131` | 汤剂科普图谱 | `decoction-dosage-form-atlas` | `formulas/dosage-forms/decoction` | `中药剂形科普-汤剂-4K.jpg` | `741f8fc222d59246188fc760b46dca9371b8d1583f18aaf7167ec379633bad4f` |
| `work-132` | 丸剂科普图谱 | `pill-dosage-form-atlas` | `formulas/dosage-forms/pill` | `中药剂形科普-丸剂-4K.jpg` | `53274a6a0932b248ce4aac3a61752437ae9fa68ab1aff4a5529d5e60cbb4bde3` |
| `work-133` | 散剂科普图谱 | `powder-dosage-form-atlas` | `formulas/dosage-forms/powder` | `中药剂形科普-散剂-4K.jpg` | `574309d76de4ce5c80a846f72a32387662f18dadcbdf53fa02d1b7cb7c7fa543` |
| `work-134` | 膏剂科普图谱 | `paste-dosage-form-atlas` | `formulas/dosage-forms/paste` | `中药剂形科普-膏剂-4K.jpg` | `d0ca4835cbe426d5e73acdd52ccda9e7e125e11d096ede8c82936e28c429f2cc` |
| `work-135` | 丹剂科普图谱 | `dan-preparation-dosage-form-atlas` | `formulas/dosage-forms/dan-preparation` | `中药剂形科普-丹剂-4K.jpg` | `98cf79cbd3714f7b86d8c9f3dfbc2e7327b85c9a92cd4cd91abf816edd15eb18` |
| `work-136` | 酒剂科普图谱 | `medicinal-wine-dosage-form-atlas` | `formulas/dosage-forms/medicinal-wine` | `中药剂形科普-酒剂-4K.jpg` | `34b4b096bc104f0248d6c83257dbb9e5784c5937f1f88da4ef0b6951ce94b660` |
| `work-137` | 露剂科普图谱 | `distilled-dew-dosage-form-atlas` | `formulas/dosage-forms/distilled-dew` | `中药剂型科普-露剂-4k.jpg` | `534e52adc230c9e0072e6e6583a1f2084137182fc9fb61c285a3b01ffd6ade9b` |
| `work-138` | 茶剂科普图谱 | `medicinal-tea-dosage-form-atlas` | `formulas/dosage-forms/medicinal-tea` | `中药剂形科普-茶剂-4K.jpg` | `95633d0e78287be8d8e822634d9e8feb0c7eb0d52482dda4c63a9eaeda589c19` |
| `work-139` | 颗粒剂科普图谱 | `granule-dosage-form-atlas` | `formulas/dosage-forms/granule` | `中药剂形科普-颗粒剂-4K.jpg` | `65b93d654d74746126151b304cf4d248f4eb18576167eace4a514a3eec3be7f0` |
| `work-140` | 自煎中药指南 | `home-decoction-guide` | `formulas/dosage-forms/home-decoction-formula-version` | `中药方剂科普-自煎中药.jpg` | `66a47e2eec09e23bcf5943e0809fa79607c5fdc231bfaeb1c3e3e783b8e879e7` |
| `work-140` | 自煎中药指南 | `home-decoction-guide` | `formulas/dosage-forms/home-decoction-decoction-version` | `中药汤剂科普-自煎中药.jpg` | `ddbcf9b771c3955a3ad1b3b8707d66c94717b94e7f99c14eacf9ea6774865e20` |

用户未提供真实访客作品编号，因此不猜测编号；页面只使用稳定内部 ID 与 URL slug。

## 4. 生成与水印

- 母版：126 → 137；新增经方集谱母版 11 张。
- 本地 WebP：252 → 274；新增 11 张 thumbnail 与 11 张 preview。
- 增量生成：重新编码 11 张，验证并复用原有 126 张。
- 原有 126 张母版和 252 张公开 WebP 的 SHA-256 全部保持不变。
- 明水印：10 张继承用户已有网状明水印，1 张保留既有印章，没有叠加第二层。
- 暗水印：沿用既有密钥与 `xqy-dct-qim-v2`，没有创建或轮换密钥。
- 私有登记表：239 → 250 条，只追加本批 11 个 v2 指纹。
- 全库暗水印验证：274/274 通过；最低置信度 0.909；每位最少载体数 7。
- 条件式明水印记录：`applied: true` 236，`applied: false` 38。

## 5. 页面与验证

- “经方集谱”由 0 件增至 10 件；本批仍少于每页 18 件的渐进显示上限，不新增不必要的方剂分类路由。
- 简体、繁体、英文“经方集谱”页面均显示 10 件作品、10 张正常加载的封面。
- “自煎中药指南”详情页显示 2 张图片，上一张/下一张切换和缩略图状态正常。
- 本地浏览器无横向溢出、无控制台错误；页面保留通用医学边界说明。
- 内容联动验证：137 个资产、55 个图组、55 件已发布图谱作品一一对应。
- `npm run typecheck`、`npm run lint`、`npm run build` 与 `npm run atlas:watermark:verify` 均通过；构建生成 207 个静态页面。

## 6. 当前结论

- 本批只完成本地导入、暗水印、内容页和验证；没有提交、推送、PR、Cloudflare Preview 或正式部署。
- 正式上线前至少还需：用户页面确认、医学与编辑复核，以及任务 09 既有的历史母版、SEO 和前置交接阻断处理；本次作者身份确认不等于部署授权。
