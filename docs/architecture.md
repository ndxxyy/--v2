# 小钟岐医 V2 技术架构

## 1. 文档状态

- 任务：01 项目规划与架构。
- 冻结日期：2026-07-10。
- 适用目录：`/Volumes/钟先生硬盘/小钟岐医网站-v2`。
- 旧站目录：`/Volumes/钟先生硬盘/小钟岐医个人独立站`，只读资料源，禁止在后续任务中写入。
- 本阶段只建立基础配置、数据契约和路由骨架，不实现完整业务页面。

## 2. 技术选型

| 项目 | 冻结选择 | 说明 |
| --- | --- | --- |
| 应用框架 | Next.js 16.2.10，App Router | 当前稳定分支；使用服务器组件作为默认边界 |
| UI 运行时 | React / React DOM 19.2.7 | 与 Next.js 16.2 兼容的稳定版本 |
| 语言 | TypeScript 5.9.3，strict | 暂不采用刚发布的新主版本，降低工具链兼容风险 |
| 样式 | Tailwind CSS 4.3.2 | 使用 CSS-first 配置；任务 02 冻结设计令牌 |
| 代码检查 | ESLint 9.39.4 + eslint-config-next 16.2.10 | Next.js 16 的构建不代替独立 Lint |
| 包管理 | npm 11 | 提交 `package-lock.json`，禁止混用锁文件 |
| 推荐 Node.js | Node.js 24 LTS | 本机为 24.15.0；项目要求 `>=24 <27` |

选择依据：Next.js 官方安装文档要求 Node.js 20.9 以上；Node.js 官方将 24 标记为 LTS；Next.js 16.3 在盘点时仍为 Preview，因此冻结 16.2 稳定分支。

官方参考：

- https://nextjs.org/docs/app/getting-started/installation
- https://nextjs.org/blog/next-16-2
- https://nodejs.org/en/about/previous-releases
- https://tailwindcss.com/blog/tailwindcss-v4-3
- https://react.dev/versions

## 3. 架构原则

1. 内容先于页面：真实数据进入 `src/data` 前必须符合 `docs/content-model.md`。
2. 三语言使用独立 URL：仅支持 `/zh-CN`、`/zh-Hant`、`/en`；根路径重定向至 `/zh-CN`。
3. 默认服务器组件：只有搜索、筛选、画廊、复制、移动导航等交互边界使用客户端组件。
4. 原图不公开：高清母版存于非 `public` 目录；公开目录只放经过审核的预览、缩略图与分享图。
5. 缺失即隐藏：没有真实资料时不渲染字段，不以横线、假数字、示例登记号或不可用按钮占位。
6. 医案默认不公开：只有同时完成匿名化、授权、审核和发布日期的记录才能进入公开选择器。
7. 任务隔离：文件所有权以 `docs/work-ownership.md` 为准；共享文件按顺序交接。
8. 旧站只做证据源：可迁移真实文字与素材，不复用布局、组件或 CSS。

## 4. 目录边界

```text
src/
  app/                    # 路由、布局、页面级元数据
    (root)/               # 根路径重定向
    [locale]/             # 三语言公共路由树
  components/             # 任务 02 起建立的共享 UI
  domain/                 # 无框架依赖的内容类型与业务约束
  i18n/                   # locale 配置、字典和路径映射
  data/                   # 经审核的站点内容；初始为空
  features/               # 按业务域拆分的选择器与交互
    home/
    atlas/
    cases/
    trust/
  lib/                    # 小型跨域工具，不承载页面内容
public/images/
  atlas/thumbnails/       # 目录页 WebP/AVIF 缩略图
  atlas/previews/         # 详情页公开预览图
  brand/                  # 已核准品牌素材
  contact/                # 已核准二维码等公开联系方式素材
  social/                 # Open Graph / 分享图
content-assets/
  masters/works/          # 高清母版，永不经 public 直接提供
  masters/brand/          # 品牌源文件
docs/
  handoffs/               # 各任务独立交接
```

`content-assets/masters/**` 默认由 `.gitignore` 排除，只保留目录说明文件。若未来采用对象存储，代码只保存受控资源 ID，不把原图 URL 写入公开数据。

## 5. 路由表

下表中的 `{locale}` 仅允许 `zh-CN | zh-Hant | en`。

| 路由 | 页面职责 | 主要任务 |
| --- | --- | --- |
| `/` | 308 重定向到 `/zh-CN` | 01 / 07 |
| `/{locale}` | 首页 | 03 |
| `/{locale}/atlas` | 图谱总目录、搜索与筛选 | 04 |
| `/{locale}/atlas/meridians` | 经络分类 | 04 |
| `/{locale}/atlas/herbs` | 本草分类 | 04 |
| `/{locale}/atlas/formulas` | 经方分类 | 04 |
| `/{locale}/atlas/[slug]` | 图谱详情与大图 | 04 |
| `/{locale}/cases` | 医案目录与分类 | 05 |
| `/{locale}/cases/[slug]` | 合规医案详情 | 05 |
| `/{locale}/licensing` | 授权合作；读取可选 `work` 查询参数 | 06 |
| `/{locale}/copyright` | 版权说明 | 06 |
| `/{locale}/about` | 关于作者 | 06 |
| `/{locale}/contact` | 就诊咨询、学习交流；读取可选 `work` 查询参数 | 06 |
| `/{locale}/not-found` | 本地化 404 | 07 |
| `/sitemap.xml` | 三语言站点地图 | 07 |
| `/robots.txt` | 抓取规则 | 07 |

所有业务路由在 01 阶段只提供最小、可构建骨架。后续任务在自己的目录内替换骨架，不从旧站搬运页面代码。

## 6. 多语言策略

- `src/i18n/config.ts` 是 locale 的唯一代码源。
- 内容记录使用 `LocalizedText`；不得把三语言正文散落在组件条件分支中。
- `zh-CN` 是内容录入的必需语言；`zh-Hant` 与 `en` 未审核前不得回退并伪装为已翻译内容。
- 缺少翻译的记录在对应语言页面隐藏，或明确由后续内容规则决定；任务 07 负责最终策略。
- locale 切换应保持相同实体 slug 和查询参数；不存在的翻译目标回到该语言所属目录页。
- 任务 07 负责 `hreflang`、canonical、Metadata、结构化数据和 sitemap。

## 7. 渲染与数据流

```text
src/data 中的审核记录
  -> 纯函数选择器（按 locale / 状态 / 分类过滤）
  -> 服务器页面组件
  -> 仅把交互必需的最小数据传入客户端组件
```

- 页面不得直接读取旧站文件。
- 页面不得把 `draft`、未授权医案、未核验联系方式或母版路径传给浏览器。
- 搜索首版可在已公开数据上本地执行；数据量明显增长后再评估索引服务，本阶段不引入数据库。
- 本阶段不开发后台管理系统；内容以受版本控制的 TypeScript 数据文件维护。

## 8. 图片与资源管线

### 8.1 资源角色

| 角色 | 目录 | 用途 |
| --- | --- | --- |
| 母版 | `content-assets/masters/works` | 生成派生图；不公开、不提交 |
| 缩略图 | `public/images/atlas/thumbnails` | 目录、分类、首页精选；只用 WebP/AVIF |
| 公开预览 | `public/images/atlas/previews` | 详情与大图浏览；不等同高清交付文件 |
| 分享图 | `public/images/social` | Open Graph、社交分享 |
| 品牌素材 | `public/images/brand` | 印章、标志等经核准素材 |
| 联系素材 | `public/images/contact` | 二维码等已确认公开资料 |

### 8.2 资源要求

- 每个图片变体必须记录宽、高、格式、用途和无障碍文本。
- 目录页禁止加载 JPEG 母版；只加载 WebP/AVIF 缩略图。
- 缩略图和公开预览使用稳定尺寸，避免布局偏移。
- `next/image` 只允许数据模型中已经审核的路径。
- 任务 04 负责生成脚本、派生文件命名、质量参数和迁移清单。
- 版权交付文件不进入网站仓库。

## 9. 模块边界

| 模块 | 可依赖 | 不可依赖 |
| --- | --- | --- |
| `domain` | `i18n` 的类型 | React、Next.js、页面组件 |
| `data` | `domain` | 页面、客户端状态、旧站文件 |
| `features/*` | `domain`、`data`、共享 UI | 其他业务 feature 的内部组件 |
| `components` | 设计令牌、小型工具 | 业务数据文件 |
| `app` | feature 公共入口、i18n | 旧站、母版目录、未审核数据 |

跨模块共享只通过显式导出的类型、选择器或组件入口；禁止从其他 feature 的私有目录深层导入。

## 10. 旧站只读盘点

盘点日期：2026-07-10。盘点只读取文件；旧站在盘点前已存在未提交修改，01 未触碰这些文件。

### 10.1 可作为迁移候选的真实文件

- `public/images/works/`：113 张 JPG。
  - 95 张经络图组图片。
  - 17 张发散风寒本草图片，主要为 3584×4800。
  - 1 张九针图谱。
- `public/images/brand/xqy-seal.png`：品牌印章候选，迁移前仍需确认公开授权和最终用途。
- `public/images/contact/wechat-qr.jpg`：微信二维码候选，任务 06 需再次确认当前有效性。
- `src/data/works.ts`：14 个经络图组、1 个九针条目、17 个有图本草条目，可用于任务 04 的事实核对。
- `src/app/contact/page.tsx`：包含电话、邮箱、小红书、抖音和二维码引用；任务 06 需逐项复核后再迁移。
- `src/app/about/page.tsx` 与版权说明：可作为文字来源候选，不视为医生资质证明。

### 10.2 不得直接迁移或展示

- 旧站布局、组件、CSS、交互实现和页面结构。
- `示例登记号：国作登字-XXXX-XXXX` 及其派生字段。
- 3 个无图本草文字条目和 3 个无图经方文字条目，除非用户补充真实作品并确认内容。
- “已登记”等无法被真实登记号或证据支持的状态。
- 旧站本地展示表单；它不能提交，不得在 V2 伪装成可用表单。
- 任何未在旧站真实资料中出现的机构、地址、接诊时间、资质、QQ、价格或疗效陈述。

### 10.3 待复核事实

- 旧数据中仅发现 5 个非示例版权登记号；任务 04/06 迁移时逐条核验，不进行批量推断。
- 联系方式虽来自旧站，仍可能过期；任务 06 在公开前确认。
- 旧站文本不包含可验证的医生资质、机构或执业地址，因此 V2 不设置这些字段的展示占位。

## 11. 安全、隐私与合规

- 医案模型不保存姓名、身份证、完整出生日期、详细地址、检查单原件、患者面部或可逆匿名标识。
- 医案公开条件由类型和选择器双重限制；记录缺少任一审核字段时不进入公开页面。
- 禁止患者见证、治愈故事、疗效承诺和远程诊断导向。
- 联系与授权入口只使用真实协议链接；不创建无法提交的表单。
- 电话、邮箱、二维码等个人资料只在任务 06 核验后进入 V2 数据文件。

## 12. 验证门槛

每个任务交接前至少运行：

```text
npm run typecheck
npm run lint
npm run build
```

任务 03–08 按任务说明补充浏览器尺寸、键盘、焦点、触控、性能和元数据验证。任务 01 只验证骨架可构建，不进行完整视觉验收或发布。

