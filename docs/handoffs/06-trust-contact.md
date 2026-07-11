# 06 授权、版权、关于与联系交接

## 完成内容

- 完成 `/zh-CN`、`/zh-Hant`、`/en` 下的授权合作、版权说明、关于作者、联系与交流四类页面，替换任务 01 路由骨架。
- 建立 `src/features/trust/**` 公共入口、公开数据选择器、页面组件、响应式样式与复制交互。
- 授权合作覆盖六个规定场景：个人学习、诊室展示、课程与讲座、自媒体内容、出版和商业项目、定制创作。
- 六个授权场景全部使用 `pricing.mode: "quote"` 与“获取报价”，未录入或展示固定价格。
- 授权报价通过真实邮箱 `mailto:` 入口发起；邮件主题和正文自动带入场景，并在存在 `work` 查询参数时带入作品编号。
- 授权页和联系页读取可选 `work` 查询参数，清理空白、控制长度后显示作品编号；已在浏览器验证 `XQY-MER-001` 与 `XQY-HERB-HQ-001`。
- 版权页明确区分公开预览与使用授权，说明禁止场景、授权范围、权属与登记字段的核验边界；未展示示例登记号或未核验版权号。
- 关于页迁移旧站可追溯的作者与项目介绍，保持“视觉整理、图形逻辑、持续校对”的内容方向；`credentials` 保持空数组，不展示医师资质、机构或执业地址推断。
- 联系页严格分为 `#consultation` 就诊咨询和 `#learning` 学习交流：
  - 就诊咨询使用真实电话 `tel:` 入口与复制按钮。
  - 学习交流使用真实邮箱 `mailto:`、微信二维码、小红书和抖音账号复制入口。
  - 微信学习群明确说明“添加时备注：入群”。
  - 群规明确禁止远程诊断、公开病历、广告与夸大疗效。
  - 就诊说明明确线上沟通不替代面诊、检查和诊断，不提供远程处方或疗效承诺。
- 没有创建表单；地址、机构、接诊时间、QQ、微信文字账号和价格等无真实资料字段均未渲染。
- 将旧站微信二维码原样复制到 V2；源文件与目标文件 SHA-256 完全一致。
- 页面遵循“青瓷编目”设计系统：瓷器蓝主色面、宋体标题、黑体正文、细线分区、低频朱砂标记，无渐变、玻璃拟态、嵌套卡片或大圆角卡片。
- Impeccable 规则扫描结果为 `[]`，0 条发现。

## 修改文件

### 任务 06 数据

- `src/data/license-scenarios.ts`
- `src/data/contacts.ts`
- `src/data/author.ts`

### 任务 06 功能模块

- `src/features/trust/copy.ts`
- `src/features/trust/selectors.ts`
- `src/features/trust/CopyValueButton.tsx`
- `src/features/trust/TrustPages.tsx`
- `src/features/trust/TrustPages.module.css`
- `src/features/trust/index.ts`

### 任务 06 路由

- `src/app/[locale]/licensing/page.tsx`
- `src/app/[locale]/copyright/page.tsx`
- `src/app/[locale]/about/page.tsx`
- `src/app/[locale]/contact/page.tsx`

### 联系素材与交接

- `public/images/contact/wechat-qr.jpg`
- `docs/handoffs/06-trust-contact.md`

未修改 `src/domain/**`、`src/i18n/**`、全局 Header/Footer、任务 04 图谱文件、任务 05 医案文件、任务 02 令牌或旧站文件。

## 真实资料复核

本任务只从旧站以下可追溯资料迁移电话、邮箱、社媒账号、作者介绍与微信二维码：

- 旧站联系页：`src/app/contact/page.tsx`
- 旧站关于页：`src/app/about/page.tsx`
- 旧站版权页：`src/app/copyright/page.tsx`
- 旧站联系素材：`public/images/contact/wechat-qr.jpg`

复核日期为 2026-07-10。复核含旧站源文件比对、协议格式与二维码资源完整性检查，不包含实际拨号、发信或登录社媒账号的外部可达性测试。

| 文件 | SHA-256 |
| --- | --- |
| 旧站 `src/app/contact/page.tsx` | `3662525bf97e0316c024d4e0af2fbca85ea6493c3d516ed029acf423b758d43f` |
| 旧站 `public/images/contact/wechat-qr.jpg` | `3ea3df68ad1a1baaf0ad3a1597f269541ca5b92b7fd01602c752033241a4844d` |
| V2 `public/images/contact/wechat-qr.jpg` | `3ea3df68ad1a1baaf0ad3a1597f269541ca5b92b7fd01602c752033241a4844d` |
| 旧站 `public/images/brand/xqy-seal.png` | `8deb0c69c89989652ff4c87bd31ca6414f1e1ca7d2b13fdecb9a0ed8bee09989` |

品牌印章虽存在于旧站，但缺少本任务所需的最终公开用途确认，本次未复制到 V2。

## 验证结果

环境：macOS arm64、Node.js 24.15.0、npm 11.12.1、Next.js 16.2.10。

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过，0 错误 |
| 任务 06 定向 ESLint | 通过，0 错误/警告 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 通过，项目代码 0 错误/警告 |
| `npm run lint` | 通过，0 错误；135 条警告全部来自任务 02 安装的 `.agents/skills/impeccable/**` 第三方脚本 |
| `npm run build` | 通过；正式构建、TypeScript、页面数据与 129 个静态页面入口全部完成 |
| Impeccable detector | `[]`，0 条规则发现 |
| 旧站完整性 | 旧站联系页、二维码和品牌印章校验值与前置交接一致 |

正式构建在受限环境内首次停留于 Turbopack 临时端口阶段；按前置交接使用正常构建权限后通过。构建期间任务 04 曾出现短暂路由类型错误，任务 04 完成修复后本任务重新运行 `typecheck` 与正式构建，最终均通过；本任务未越界修改任务 04 文件。

### 浏览器与响应式验收

- 1440×900：验证简体授权页与繁体关于页。
  - 页面各有且只有一个 H1。
  - `clientWidth` 与 `scrollWidth` 均为 1425px，无横向溢出。
  - 授权页正确显示作品编号 `XQY-MER-001`，六个场景全部显示“获取报价”。
  - `mailto:` 报价链接同时包含场景、作品编号与需求提示。
  - 关于页 `<html lang="zh-Hant">`，未发现资质、机构或资格占位区。
- 390×844：验证简体联系页与英文版权页。
  - 经典滚动条占位后 `clientWidth` 与 `scrollWidth` 均为 375px，无横向溢出。
  - 联系页正确显示 `XQY-HERB-HQ-001`、电话、邮箱、二维码、社媒账号与四条群规。
  - 页面表单数量为 0；微信二维码数量为 1；每页 H1 数量为 1。
  - 电话复制按钮点击后显示“已复制”，浏览器剪贴板内容为 `13168639915`。
  - 电话 `tel:+8613168639915` 与邮箱 `mailto:215382805@qq.com` 协议链接正确。
  - 英文版权页 `<html lang="en">`，未发现示例登记号或登记号占位。
- 浏览器控制台未发现任务 06 页面运行错误。

## 遗留问题

- 旧站只提供微信二维码，没有微信文字账号；因此 V2 没有创建“复制微信号”按钮。若后续提供并确认真实微信号，可补入 `ContactChannel.value` 后复用现有复制交互。
- 电话、邮箱、社媒和二维码已按旧站资料复核，但发布前仍建议由资料所有者进行一次实际拨号、发信、扫码和账号可达性确认。
- 没有真实机构、地址、接诊时间、QQ 或可验证资质，相关字段继续隐藏。
- 没有固定授权价格，所有场景继续使用“获取报价”。
- 全局语言切换由任务 03 拥有，目前会保留路径但不保留 `work` 查询参数；任务 07 处理三语言映射时应一并保留查询参数，避免切换语言后丢失作品编号。
- 浏览器开发预览请求 `/favicon.ico` 返回 404；图标与分享素材不属于任务 06，交由任务 07/08 处理。

## 后续任务注意事项

1. 任务 04 从作品详情进入授权或联系页时，使用 `/{locale}/licensing?work=<作品编号>` 或 `/{locale}/contact?work=<作品编号>`；值应使用真实公开作品编号，不传母版路径或内部 ID。
2. 任务 07 添加 Metadata、canonical、语言替代链接时保留页面现有 H1/H2/H3 结构和 `work` 查询参数显示，不重新设计页面。
3. 任务 07 修复全局语言切换时同时保留 pathname、query 和 hash；当前 Header/Footer 只保留 pathname。
4. 任务 08 重新测试电话、邮件、复制、二维码、`#consultation`、`#learning`、作品编号与三语言路径。
5. 联系方式如有任何变更，先更新 `src/data/contacts.ts` 的真实值与复核日期；没有证据的渠道直接隐藏，不留占位。
6. 授权范围和报价仍需人工书面确认，页面不得把邮件发送、报价或预览行为解释为授权已经生效。

## 2026-07-11 授权页参考图布局更新

### 完成内容

- 参考用户提供的方案比较页，将六个真实授权场景改为纵向比较条目：场景说明、报价方式、主要询价入口、询价前需提供的信息与授权生效条件保持固定阅读顺序。
- 桌面宽屏采用首排四列、次排两个双宽复杂场景；平板为两列，手机为单列，均未出现横向滚动。
- “出版和商业项目”使用青瓷强调条标记为“范围需单独确认”，没有使用“推荐”、折扣或其他无法证实的营销标签。
- 新增六条授权常见问题，内容只复述既有真实授权边界；使用原生 `details` / `summary`，支持键盘展开、触控与减少动态效果环境。
- 授权页首屏压缩为较紧凑的目录页引导，使真实授权场景更早进入视口；未改变其他信任页面的首屏。
- 保留真实 `mailto:` 报价入口和 `work` 作品编号带入逻辑，没有新增固定价格、折扣、套餐额度、虚构联系方式或占位数据。

### 修改文件

- `src/features/trust/copy.ts`
- `src/features/trust/TrustPages.tsx`
- `src/features/trust/TrustPages.module.css`
- `design-qa.md`
- `docs/handoffs/06-trust-contact.md`

### 验证结果

- `npm run typecheck`：通过，0 错误。
- `npm run lint -- --ignore-pattern '.agents/**'`：通过，0 错误/警告。
- `npm run build`：通过，Next.js 正式构建完成并生成 129 个静态页面入口。
- Impeccable detector：`[]`，0 条规则发现。
- 简体中文桌面 1440×1200：首排四列，后两个场景次排双宽；页面无横向溢出。
- 简体中文手机 390×844：单列布局，六条问答可展开，展开内容可见且焦点行为由原生控件提供。
- 英文授权页：一个 H1、六条问答、无横向溢出；`work=XQY-MER-001` 可见并进入报价邮件链接。
- 浏览器控制台错误为 0。
- 参考图与实现截图已在同一对照图中复核；最终视觉结论记录于项目根目录 `design-qa.md`。

### 遗留问题与后续注意事项

- 所有授权场景继续使用“获取报价”，真实价格、项目地区、期限和交付规格仍需双方书面确认。
- 发布前由资料所有者实际发信验证邮箱可达性；本次只验证链接协议、主题、正文、场景和作品编号参数。
- 后续 SEO、性能或集成任务不得把比较布局解释为固定套餐，也不得补入示例价格或折扣。
