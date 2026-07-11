# UI 优化交接（2026-07-11）

## 完成内容

- 使用项目级 Impeccable 上下文重新核对品牌站定位，并根据用户提供的成品截图刷新整体首页构图。
- 将用户确认的“小钟岐医印章.png”原样复制为公开品牌 Logo，源文件与 V2 文件 SHA-256 完全一致。
- 桌面品牌栏改为 132px 宽的瓷器蓝编目栏，加入真实印章、竖排品牌名、四个真实栏目入口和三语言导航。
- 手机 Header 使用真实印章与品牌名，保留既有可访问菜单、ESC、焦点限制和关闭后焦点返回实现。
- 首页首屏改为 5/7 分栏：左侧品牌、说明、真实统计和医案分类索引；右侧使用真实“足阳明胃经图组”和“桂枝图谱”组成双作品主视觉。
- 统计全部由公开数据计算：32 件真实作品、15 件经络与针具、17 件本草、113 张公开图版。
- 首屏后按成品稿建立图谱精选、医案整理、授权合作三块编目入口，继续保留精选作品、专业方向和联系交流的完整下游内容。
- 更新 `PRODUCT.md` 的现有证明与 `DESIGN.md` 的 Logo 使用规范，没有重做已冻结的颜色、字体和组件系统。
- 没有编造医案、资质、价格、版权号、疗效、机构或联系方式；旧网站保持只读。

### 第二轮 UI 优化

- 精简桌面侧栏，移除挤压导航的第二列竖排说明，让真实印章、品牌名、四个栏目与三语言入口在 900px 高度下拥有稳定节奏。
- 将桌面首屏调整为 47.5/52.5 的内容与作品比例，并降低首屏对整屏高度的占用，使三块编目入口能更早进入桌面首屏。
- 分别为真实胃经图和桂枝图校准右侧主体裁切，避免通用居中裁切削弱作品识别度。
- 移除作品标题牌中的装饰性 `01 / 02`，保留直接、可理解的真实作品标题。
- 将三块入口从纯文字色面提升为内容化构图：真实图谱图像、六类真实医案分类索引、带真实印章的授权册页。
- Footer 加入用户确认的真实印章，延续首尾品牌识别。
- 桌面门户改为三列；平板改为两列加一条通栏授权入口；手机隐藏辅助装饰，保持文字与真实动作优先。

## 修改文件

- `PRODUCT.md`
- `DESIGN.md`
- `public/images/brand/xiao-zhong-qiyi-seal.png`
- `src/components/layout/SiteFrame.module.css`
- `src/components/layout/SiteRail.tsx`
- `src/components/layout/SiteRail.module.css`
- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/SiteHeader.module.css`
- `src/components/layout/SiteFooter.tsx`
- `src/components/layout/SiteFooter.module.css`
- `src/features/home/selectors.ts`
- `src/features/home/copy.ts`
- `src/features/home/HomePage.tsx`
- `src/features/home/HomePage.module.css`
- `design-qa.md`
- `docs/handoffs/ui-refresh-2026-07-11.md`

## 验证结果

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过，0 错误 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 通过，0 错误/警告 |
| `npm run build` | 通过，Next.js 生成 129 个页面入口 |
| Impeccable detector | 结果 `[]` |
| Logo 完整性 | 源文件与公开文件 SHA-256 均为 `8deb0c69c89989652ff4c87bd31ca6414f1e1ca7d2b13fdecb9a0ed8bee09989` |
| 静态 HTML | 三语言首页均包含真实 Logo、胃经/桂枝主视觉、32/15/17/113 统计和有效路径 |
| 浏览器截图 | 被当前内置浏览器的本地地址访问策略阻断，未声称通过；详见 `design-qa.md` |

第二轮复核补充：

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过，0 错误 |
| `npm run lint -- --ignore-pattern '.agents/**'` | 通过，0 错误/警告 |
| `npm run build` | 通过，Next.js 生成 129 个页面入口 |
| Impeccable detector | 第二轮修改文件扫描结果仍为 `[]` |
| 三语言静态 HTML | `/zh-CN`、`/zh-Hant`、`/en` 均有且只有一个 H1，并包含真实 Logo、胃经图、桂枝图和对应语言内容 |

## 遗留问题

- 必须在允许访问本地预览的浏览器中补做 1440×900 与 390×844 截图比较；本轮 `design-qa.md` 的最终结果为 `blocked`。
- 浏览器视觉验证前，不应把具体图片裁切、Logo 透明边缘和手机首屏密度描述为已最终验收。
- 正式页面已经构建成功；剩余工作是视觉复核与必要的间距/裁切微调，不是功能或数据缺失。
- 当前应用内浏览器仍无法附着本地预览窗口；第二轮没有将源代码推断描述为截图验收。

## 后续注意事项

1. 不要用截图本身替代真实作品；首页当前使用的是任务 04 迁入的真实 WebP 图谱。
2. 不要重新绘制或随意滤色品牌印章；使用 `public/images/brand/xiao-zhong-qiyi-seal.png`。
3. 浏览器复核时优先检查 Logo 在瓷器蓝上的透明背景、两张主视觉的 `object-fit: cover` 裁切和英文标题换行。
4. 若要进一步贴近成品稿，只调整首页与布局文件，不改变图谱、医案和信任页面的数据公开条件。
