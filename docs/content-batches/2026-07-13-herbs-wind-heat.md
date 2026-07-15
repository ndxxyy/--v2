# 1.1 本草批次：解表药·发散风热药

批次日期：2026-07-13

状态：**仅本地可见；未推送、未创建预览、未上线。**

## 1. 用户范围与决定

- 用户提供 13 张“第二节 发散风热药”水印 JPEG，并说明解表药资料已经完整。
- 用户要求在“本草金鉴”下建立“解表药”，为后续清热药、泻火药等门类保留扩展结构。
- 用户明确要求原图明水印保持不变，并给本地公开派生图加入暗水印。
- 本轮授权边界仅为更新本地网页；上线必须等待用户检查并再次确认。
- 用户一次提供完整类别，因此本批次按 13 味特批一次导入，不拆分为 1–5 味。

## 2. 来源与文件检查

受控来图位置：

`/Volumes/钟先生硬盘/02_设计资产与原始素材/版权与水印资质/中药/宋代中药插画/1、解表药/第二节 发散风热药/jpg（水印版）`

- 目录包含 13 张 JPEG 和 1 个 `.DS_Store`；隐藏文件未导入。
- 13 张图片均为 3584×4800、sRGB、3 通道、EXIF orientation 1，可正常解码。
- 13 个 SHA-256 均唯一，未与既有 113 张母版重复。
- 原文件夹未修改；导入前在仓库外临时目录建立严格的 `herbs/wind-heat/<slug>.jpg` 映射。
- 13 张总览均已核对版式和已有品牌标识；代表大图另行检查。明水印按 `user-provided-watermarked` / `provided-mesh` 继承，不重复叠加。

## 3. 分类与文字边界

分类路径：`本草金鉴 → 解表药 → 发散风热药`。

目录展示按“章 → 节 → 作品”分层：节页只展示当前所在章及本章同级分节，不将整棵本草目录同时展开。本草总目录桌面端使用双列章节索引，作品超过 18 件时分批显示。

既有 17 味本草显式归入：`本草金鉴 → 解表药 → 发散风寒药`。

新作品只写入文件名能确认的药名、用户确认的分类和目录性简介。没有从图片转录或推断性味、归经、功效、主治、剂量或个体医疗建议。英文题名使用拼音；正式上线前由用户最终确认三语言显示文字。

用户未提供新作品的访客编号。页面省略编号，不生成 `XQY-HERB-WH-*` 等猜测值。
授权与联系入口对无编号作品带入本地化标题，不把内部 `work-*` ID 用作访客关联值或冒充作品编号；搜索索引包含稳定 slug 词元。

## 4. 作品与资产映射

| 作品 ID | 简体标题 | URL slug | 资产 ID | 原文件 | SHA-256 |
| --- | --- | --- | --- | --- | --- |
| `work-118` | 薄荷图谱 | `mint-herb-atlas` | `herbs/wind-heat/mint-herb` | `薄荷 拷贝.jpg` | `9a82948fb56ebee7c119187da62edf75617dbf7dc87ef5adc02a850b669af7bc` |
| `work-119` | 牛蒡子图谱 | `arctium-fruit-herb-atlas` | `herbs/wind-heat/arctium-fruit` | `牛蒡子 拷贝.jpg` | `d1781ecf9888185626aac6ae17ef7344db8f79d17f1a5064410562f362089d1e` |
| `work-120` | 蝉蜕图谱 | `cicada-slough-herb-atlas` | `herbs/wind-heat/cicada-slough` | `蝉蜕 拷贝.jpg` | `dfbe07bfd9bfd955092ace3b118774d188cf7792f2e91da28dffb658d6558d71` |
| `work-121` | 桑叶图谱 | `mulberry-leaf-herb-atlas` | `herbs/wind-heat/mulberry-leaf` | `桑叶 拷贝.jpg` | `89ce9051367e1424a60cc9d499cf5f6fd6863e734cb39c12fa1df75408063bd9` |
| `work-122` | 菊花图谱 | `chrysanthemum-flower-herb-atlas` | `herbs/wind-heat/chrysanthemum-flower` | `菊花 拷贝.jpg` | `7d2e73e944abca19e285d9f550390a0c46cb6cd584094bafec7b6e6daf7118c5` |
| `work-123` | 蔓荆子图谱 | `vitex-fruit-herb-atlas` | `herbs/wind-heat/vitex-fruit` | `蔓荆子 拷贝.jpg` | `53b9cb5b2be19fc02d7acd92953c54d982d9ecca392db0c2c7b0924603714e83` |
| `work-124` | 柴胡图谱 | `bupleurum-root-herb-atlas` | `herbs/wind-heat/bupleurum-root` | `柴胡 拷贝.jpg` | `43ce88fa9de4f8b3274638f6798ef98b498819cf3b5f628166e32209a6e0172e` |
| `work-125` | 升麻图谱 | `cimicifuga-rhizome-herb-atlas` | `herbs/wind-heat/cimicifuga-rhizome` | `升麻 拷贝.jpg` | `e76fe498564f68ca3cd918b56b70daa225d39c59ef7a73327365c73743483a58` |
| `work-126` | 葛根图谱 | `pueraria-root-herb-atlas` | `herbs/wind-heat/pueraria-root` | `葛根 拷贝.jpg` | `f10d634cc92147227e103180f38f9480d2d0122f62616a34f6d6b0227deec872` |
| `work-127` | 淡豆豉图谱 | `prepared-soybean-herb-atlas` | `herbs/wind-heat/prepared-soybean` | `淡豆豉 拷贝.jpg` | `4663cc7ad196a75d5cd0ab6be1f1808fdbfc0973e9869e5b8c60f0e20e083769` |
| `work-128` | 浮萍图谱 | `duckweed-herb-atlas` | `herbs/wind-heat/duckweed-herb` | `浮萍 拷贝.jpg` | `954220d135d544c6bf13da77dc7baaa50cab7fdb52aa2958d683b61825241726` |
| `work-129` | 木贼图谱 | `equisetum-stem-herb-atlas` | `herbs/wind-heat/equisetum-stem` | `木贼 拷贝.jpg` | `1ea8b18c4130bcb24cefeb76840e975cc4bce5388ee29388b514cd0915d8b709` |
| `work-130` | 谷精草图谱 | `eriocaulon-flower-herb-atlas` | `herbs/wind-heat/eriocaulon-flower` | `谷精草 拷贝.jpg` | `93c62e1d40111fee7db27b193a9ff6fb0f3fefb45900fc7ed6f4d74eba2f271c` |

## 5. 生成与水印

- 母版：113 → 126；本草母版：17 → 30。
- 本地 WebP 变体：226 → 252；新增 13 张 thumbnail 与 13 张 preview。
- 增量生成：重新编码 13 张，验证并复用 113 张。
- 明水印：继承用户已有水印，不叠加第二层。
- 暗水印：沿用既有密钥与 `xqy-dct-qim-v2`，没有创建或轮换密钥。
- 私有登记表：v1 113 + v2 126 = 239 条，只追加本批次 13 个 v2 指纹。
- 全库暗水印验证：252/252 通过；最低置信度 0.909；每位最少载体数 7。
- 条件式明水印记录：`applied: true` 216，`applied: false` 36。

## 6. 当前结论

- 13 味已进入本地分类页与详情页，旧 17 味 URL 不变。
- 1440×900 与 390×844 真实浏览器视图均已复核，无横向溢出；“继续显示”已实测可从 18 件展开至 30 件。
- 图片、密钥、登记表和私有证据边界保持不变；母版不进入 `public` 或 Git。
- 没有推送、PR、Cloudflare Preview 或正式部署。
- 正式上线仍受仓库历史母版暴露、SEO 路由缺失及用户最终页面确认等既有阻断约束。
