# 02 视觉系统交接

## 完成内容

- 将“青瓷编目”视觉稿转化为完整、可执行的设计系统，冻结颜色、字体、字号、行高、间距、栅格、圆角、边框、焦点、动画和层级。
- 新增符合 Impeccable 上下文格式的 `PRODUCT.md`，明确品牌型 Web 站、目标访客、产品目的、定位、转化边界、反模式和无障碍要求。
- 按 DESIGN.md 开放格式扩展 `DESIGN.md`，YAML 令牌与人类可读规范并存。
- 完成瓷器蓝、青瓷绿、墨色、宣纸白、朱砂红的 OKLCH 色阶与语义映射；正文与交互关键组合均通过 AA 以上对比度验证。
- 完成中文宋体标题、现代黑体正文的系统字体栈与 9 级文字层级；当前不引入第三方字体文件。
- 使用 Tailwind CSS 4 CSS-first `@theme` 建立颜色、字体、字号、圆角、间距、容器、比例、阴影和缓动令牌。
- 建立 4/8/12 栏响应式栅格、320px 支持下限、1440×900 与 390×844 验收视口，以及桌面/手机不同的信息顺序。
- 定义 Header、Footer、按钮、链接、筛选、作品条目、医案摘要、提示、弹窗、焦点、动效和反馈规范。
- 冻结图谱 `3:4`、`4:3`、`1:1` 比例、缩略图 1x/2x 尺寸、WebP/AVIF 目录格式和无渐变加载占位策略。
- 实现最小 UI 组件：按钮/链接按钮、正文链接、筛选按钮、作品条目、医案摘要、提示、图像框和原生 `<dialog>` 弹窗。
- 实现 `DesignSystemShowcase` 状态展示组件，覆盖默认、选中、禁用、加载和弹窗开闭状态；按任务边界未新增公开路由或完整业务页面。
- 项目级安装 Impeccable。安装命令使用 npm CLI 3.2.1，安装出的技能元数据版本为 3.9.1；作用域为项目 `.agents`，首次安装明确使用 `--no-hooks`，没有启用或生成 Hook 清单。
- 为 Impeccable Live 写入 Next.js 多根布局配置；CSP 检测结果为无 CSP，未修改 `next.config.ts`。
- 明确禁止大量圆角卡片/嵌套卡片、渐变光球、玻璃拟态、廉价古风纹理、卷轴、仿古边框、满屏毛笔字、低对比正文、无真实作品首屏和装饰性无效控件。

## 修改文件

### 产品与视觉上下文

- `PRODUCT.md`
- `DESIGN.md`
- `.impeccable/live/config.json`
- `.agents/skills/impeccable/**`（项目级安装产物，无 Hook 配置）

### 设计令牌与基础样式

- `src/styles/tokens.css`
- `src/app/globals.css`

### UI 组件与状态展示

- `src/components/ui/cn.ts`
- `src/components/ui/Button.tsx`
- `src/components/ui/TextLink.tsx`
- `src/components/ui/FilterButton.tsx`
- `src/components/ui/ImageFrame.tsx`
- `src/components/ui/WorkEntry.tsx`
- `src/components/ui/ClinicalCaseSummary.tsx`
- `src/components/ui/Notice.tsx`
- `src/components/ui/ModalDialog.tsx`
- `src/components/ui/index.ts`
- `src/components/design-system/DesignSystemShowcase.tsx`
- `src/components/design-system/index.ts`

### 规范与交接

- `docs/responsive-spec.md`
- `docs/handoffs/02-design-system.md`

`package.json` 与 `package-lock.json` 未变化：Impeccable 按官方项目技能安装方式落入 `.agents`，没有增加应用运行时依赖，也没有安装为全局包。

## 验证结果

环境：macOS arm64、Node.js 24.15.0、npm 11.12.1。

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过，0 错误 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 通过，项目代码 0 错误/警告 |
| `npm run lint` | 通过，0 错误；出现 135 条来自 Impeccable 安装目录 `.agents/**` 的第三方脚本警告 |
| `npm run build` | 通过，Next.js 16.2.10 正式构建成功，33 个静态页面入口与 2 个按需详情路由保持正常 |
| Impeccable detector | 扫描 `globals.css`、令牌、UI 与状态展示，结果 `[]`，0 条规则发现 |
| DESIGN 上下文解析 | `PRODUCT.md` 与 `DESIGN.md` 均被 Impeccable 正确识别，register 为 `brand`，platform 为 `web` |
| Tailwind 产物 | 已确认 `text-heading-1`、`aspect-work-portrait`、`rounded-dialog`、`bg-primary`、`py-section` 等自定义类进入正式 CSS |
| Hook 状态 | 未发现 `.codex`、`.claude`、`.github/hooks` 或 `*hook*.json` 配置文件；自动 Hook 未启用 |
| CSP | Impeccable 检测为 `shape: null`，无需修改应用配置 |

关键对比度（OKLCH 转换后按 WCAG 相对亮度计算）：

| 组合 | 对比度 |
| --- | ---: |
| 墨色正文 `ink-950` / 宣纸白 `xuan-50` | 18.29:1 |
| 次要正文 `ink-700` / 宣纸白 `xuan-50` | 9.52:1 |
| 宣纸白 / 瓷器蓝主按钮 `porcelain-900` | 13.36:1 |
| 瓷器蓝链接/焦点 `porcelain-700` / 宣纸白 | 6.97:1 |
| 青瓷绿动作 `celadon-700` / 宣纸白 | 6.95:1 |
| 朱砂关键文字 `cinnabar-700` / 宣纸白 | 7.70:1 |

受限沙箱内的首次构建因 Turbopack 内部进程需要绑定临时端口而失败；允许正常构建进程后通过，与任务 01 的已知环境限制一致，不是 CSS 或组件错误。

旧站未被修改。任务 01 记录的三个旧站校验值复核后保持一致：

- `src/data/works.ts`：`f9d8ae3a750ca0e7539ae2f78860e8dcfa081c5ab1d395f74acdeaffcc05e937`
- `src/app/contact/page.tsx`：`3662525bf97e0316c024d4e0af2fbca85ea6493c3d516ed029acf423b758d43f`
- `public/images/contact/wechat-qr.jpg`：`3ea3df68ad1a1baaf0ad3a1597f269541ca5b92b7fd01602c752033241a4844d`

## 遗留问题

- 当前没有 V2 真实作品图片，按任务边界没有创建示例图或假作品，因此本阶段未对完整业务页面运行浏览器截图或 Impeccable 视觉 critique。
- `DesignSystemShowcase` 是可导入的内部状态展示组件，未挂载公开路由；任务 02 不拥有业务页面路由，避免与任务 03–06 冲突。
- 字体使用跨平台系统栈。任务 07 若决定自托管思源宋体/黑体或其他已授权字体，必须验证三语言字形、加载体积与布局偏移，不得改变宋体标题/黑体正文的既定结构。
- Impeccable 的项目安装目录会被当前 ESLint 配置扫描，导致 `npm run lint` 输出 135 条第三方脚本警告但不报错。02 未修改不属于本任务的 `eslint.config.mjs`；任务 08 获得集成权后可把 `.agents/**` 加入全局忽略。
- 真实缩略图最终质量参数、命名和生成脚本仍属于任务 04；本任务只冻结比例、尺寸和格式规范。

## 后续任务注意事项

1. 共享 UI 只从 `@/components/ui` 导入，不深层依赖其他业务 feature。
2. 任务 03 按 `DESIGN.md` 和 `docs/responsive-spec.md` 实现 Header、Footer、首页与手机导航；桌面品牌侧栏在 `<1280px` 必须收进顶部框架。
3. 任务 03 首页桌面遵循既定 1–6 顺序；手机先显示品牌身份、首件真实作品和图谱动作，再显示专业方向、医案、授权与联系。
4. 任务 04 必须按真实资源选择 `3:4`、`4:3` 或 `1:1`，目录只加载 WebP/AVIF，详情手机端先作品信息后主图。
5. 任务 05 没有真实医案时使用合规空状态，不把 `ClinicalCaseSummary` 用虚构标题填满页面。
6. 任务 06 的 Header/Footer/联系与授权项目只渲染已核实数据；不要为了对齐保留空列或占位字段。
7. 任务 07 如调整字体加载或语义色，只能做性能和三语言兼容修正；不得更换已经冻结的视觉方向。
8. 所有交互沿用 3px `focus-visible`、44px 触控下限、`prefers-reduced-motion` 和语义层级；不要在业务组件内另起一套令牌。
9. 首个包含真实作品的稳定页面完成后，再运行 Impeccable critique；自动 Hook 继续保持关闭，除非用户另行授权。
