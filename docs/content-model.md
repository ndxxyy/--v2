# 小钟岐医 V2 内容模型

## 1. 设计目标

本模型服务于静态、可审查的内容仓库。所有公开数据必须可追溯、可隐藏、可本地化，且不能因字段缺失而生成假内容。

代码契约位于 `src/domain/content.ts`，本文是编辑和迁移规则。两者变更必须同步。

## 2. 通用约定

### 2.1 标识

- 内部 `id`：稳定、不可复用的字符串。
- `slug`：小写 ASCII 与连字符；同一实体的三语言 URL 共用 slug。
- `code`：面向访客的作品编号，仅在真实记录存在时填写。
- 删除内容时保留 ID 迁移记录，不让旧 URL 指向另一个实体。

### 2.2 本地化文本

```ts
type Locale = "zh-CN" | "zh-Hant" | "en";
type LocalizedText = Record<Locale, string>;
type LocalizedRichText = Partial<Record<Locale, ContentBlock[]>>;
```

- 标题等必需字段只有在三语言均经确认后才使用 `LocalizedText`。
- 正文允许按语言缺失，但缺失语言不公开该实体详情。
- 不使用自动翻译结果冒充已审核译文。
- 医学术语翻译必须保留审校状态。

### 2.3 发布生命周期

```ts
type PublicationStatus = "draft" | "review" | "published" | "archived";
```

- 只有 `published` 可被公开选择器返回。
- `archived` 保留数据但不进入导航和搜索。
- `review` 不等于获准公开。

## 3. 分类

### 3.1 图谱分类

- `meridians`：经络。
- `herbs`：本草。
- `formulas`：经方。

分类记录包含稳定 key、本地化名称、简介、排序和发布状态。不得使用不存在作品的数量作为装饰。

本草在 `herbs` 下另有可递归分类树，记录位于 `src/data/herb-taxa.ts`。每个节点具有稳定 key、URL slug、可选 `parentKey`、三语言名称、简介、顺序和发布状态。当前层级为：

- `exterior-releasing`：解表药。
  - `wind-cold`：发散风寒药。
  - `wind-heat`：发散风热药。

`parentKey` 必须指向已登记节点，不能指向自身或形成循环。父分类页包含全部后代作品；叶分类页只包含直接归入该叶节点的作品。未来新增清热药、泻火药等门类时继续使用同一树结构，不在组件中硬编码层级。

本草作品只能绑定已发布叶节点；叶节点 `slug` 同时作为 `herbs/<leaf-slug>/...` 的资产路径段。校验器必须从分类树读取这一关系，并拒绝无效 slug、重复路径、缺失父节点、循环、父节点作品绑定和资产路径错配。

### 3.2 医案分类

- `internal-medicine`：内科。
- `gynecology`：妇科。
- `pediatrics`：儿科。
- `acupuncture`：针灸。
- `care-notes`：调理随笔。
- `other-clinical-notes`：其他临证记录。

分类名称来自任务要求，不代表当前已有医案。

## 4. 作品 Work

```ts
interface Work {
  id: string;
  slug: string;
  code?: string;
  category: WorkCategoryKey;
  herbTaxonKey?: HerbTaxonKey;
  title: LocalizedText;
  summary?: Partial<Record<Locale, string>>;
  description?: LocalizedRichText;
  imageGroupId?: string;
  tags: string[];
  featured: boolean;
  rights: RightsRecord;
  licenseScenarioIds: string[];
  publication: PublicationRecord;
}
```

规则：

- `code`、版权号、简介均可缺失；组件对缺失值不渲染。
- `category === "herbs"` 时必须显式填写一个已登记的叶级 `herbTaxonKey`；非本草作品禁止填写此字段。
- 新作品没有经确认的访客编号时省略 `code`，不得按现有编号样式猜测。
- `featured` 只控制选择资格，不能绕过 `published`。
- 没有真实图片的条目不得进入图谱目录，除非产品后来定义了纯文字作品类型。
- 作品内容用于学习与信息整理，不生成诊断或疗效承诺。

## 5. 图组与图片变体

```ts
interface ImageGroup {
  id: string;
  workId: string;
  images: WorkImage[];
}

interface WorkImage {
  id: string;
  role: "cover" | "plate" | "detail";
  title?: Partial<Record<Locale, string>>;
  alt: LocalizedText;
  order: number;
  variants: ImageVariant[];
}

interface ImageVariant {
  kind: "thumbnail" | "preview" | "social";
  src: string;
  width: number;
  height: number;
  format: "webp" | "avif" | "jpg" | "png";
  byteSize?: number;
}
```

- 母版路径不属于公开 `ImageVariant`。
- 目录选择器只返回 `thumbnail` 且格式为 WebP/AVIF。
- 详情可返回 `preview`；高清交付文件由网站外流程处理。
- `alt` 描述图片内容，不堆砌关键词，不把图中无法确认的信息写入描述。
- 宽高是必填项，防止布局偏移。

## 6. 版权与授权

```ts
interface RightsRecord {
  ownership: "unverified" | "author-owned" | "licensed";
  copyrightStatus: "hidden" | "pending" | "registered";
  registrationNumber?: string;
  evidenceRef?: string;
}
```

- `registered` 必须同时有真实 `registrationNumber` 和内部证据引用。
- 示例号、掩码号或推测号不得进入 V2。
- `ownership: unverified` 时不显示版权归属陈述。

授权场景 key：

- `personal-study`：个人学习。
- `clinic-display`：诊室展示。
- `course-lecture`：课程与讲座。
- `social-media`：自媒体内容。
- `publishing-commercial`：出版和商业项目。
- `custom-creation`：定制创作。

```ts
interface LicenseScenario {
  id: LicenseScenarioKey;
  title: LocalizedText;
  summary?: Partial<Record<Locale, string>>;
  terms?: LocalizedRichText;
  pricing: { mode: "quote" } | { mode: "fixed"; amount: number; currency: string };
  publication: PublicationRecord;
}
```

在真实价格确认前只能使用 `mode: "quote"`，页面文案为“获取报价”或经审核的对应翻译。

## 7. 医案 ClinicalCase

```ts
interface ClinicalCase {
  id: string;
  slug: string;
  category: CaseCategoryKey;
  title: LocalizedText;
  summary?: Partial<Record<Locale, string>>;
  content: LocalizedRichText;
  clinicalDate?: { precision: "year" | "month"; value: string };
  anonymization: ReviewRecord;
  patientAuthorization: AuthorizationRecord;
  editorialReview: ReviewRecord;
  publication: PublicationRecord;
}
```

### 7.1 强制公开条件

公开选择器必须同时验证：

1. `publication.status === "published"`。
2. `anonymization.status === "approved"`。
3. `patientAuthorization.status === "approved"`。
4. `editorialReview.status === "approved"`。
5. 当前 locale 有已审核标题与正文。

### 7.2 禁止字段

数据模型不提供以下公开字段：

- 患者姓名、身份证、手机号、详细地址。
- 完整出生日期。
- 可识别面部、原始检查单或病历照片。
- 真实病案号或可逆匿名标识。
- 患者见证、治愈结论、疗效评分。

若内部流程确需保存授权证明，只存不可公开的 `evidenceRef`，实际文件位于仓库外的受控位置。

## 8. 联系方式 ContactProfile

```ts
interface ContactChannel {
  id: string;
  kind: "phone" | "email" | "wechat" | "xiaohongshu" | "douyin";
  audience: ("consultation" | "learning" | "licensing")[];
  label: LocalizedText;
  value?: string;
  href?: string;
  qrImage?: ImageVariant;
  verifiedAt?: string;
  publication: PublicationRecord;
}
```

- 联系页面以 `audience` 分为“就诊咨询”和“学习交流”，授权入口可复用已核验渠道。
- 只有 `published` 且有真实 `value`、`href` 或二维码的渠道才显示。
- 不创建无法提交的表单。
- 地址、机构、接诊时间、QQ 不在当前类型中；真实资料到位后再经架构评审增加。
- 微信学习群说明和群规属于任务 06 的已审核内容，不在 01 阶段预填。

## 9. 作者资料 AuthorProfile

```ts
interface AuthorProfile {
  displayName: LocalizedText;
  biography?: LocalizedRichText;
  credentials: Credential[];
  publication: PublicationRecord;
}
```

`Credential` 必须包含证据引用和审核状态。当前没有可验证资质时，`credentials` 保持空数组，页面不得生成“医师”“任职机构”等推断。

## 10. 内容块

首版使用受限结构，不直接存任意 HTML：

- `paragraph`
- `heading`（只允许内容区 H2/H3）
- `list`
- `notice`
- `image`

渲染器统一转义文本；链接只允许 `https`、`mailto`、`tel` 和站内路径。单页 H1 由页面模板生成，不出现在内容块中。

## 11. 选择器契约

所有公开选择器必须：

- 接收明确 locale。
- 默认只返回 `published`。
- 过滤缺少当前语言必要内容的记录。
- 过滤未核验版权字段和联系方式。
- 对医案执行四重公开条件。
- 不返回母版路径、内部证据引用或审核备注。
- 以稳定 `order`、发布日期或明确字段排序，不依赖文件系统顺序。

## 12. 初始数据状态

任务 01 的 `src/data` 保持空集合。旧站内容仅在对应任务完成真实性与合规复核后迁移：

- 作品与图片：任务 04。
- 医案：任务 05；当前不得假设存在真实医案。
- 授权、作者、版权和联系方式：任务 06。
- 三语言映射与 SEO 文本：任务 07。
