# Design QA

## Comparison target

- Source visual truth: `/Users/nidexingxingyanjingya/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/wxid_6d6hd4c437ne22_a0db/temp/RWTemp/2026-07/75f2670e488b046866de2240fbf94c99/0c36aaea0a3ea19d99de228d5ee9f733.png`
- Confirmed brand mark: `/Volumes/钟先生硬盘/02_设计资产与原始素材/版权与水印资质/防盗水印/小钟岐医印章.png`
- Implementation route: `http://127.0.0.1:3000/zh-CN`
- Intended viewports: desktop 1440×900; mobile 390×844
- State: initial page load, mobile menu closed
- Implementation screenshot: unavailable; the in-app Browser denied local-address access under the active enterprise network policy.

## Full-view comparison evidence

Blocked before the first implementation capture. The source image was opened and inspected, but the rendered local route could not be opened by the required in-app Browser. Build output, source code, generated HTML, and asset inspection are not substitutes for browser-rendered visual evidence.

## Focused region comparison evidence

Blocked for the same reason. Logo, hero artwork crops, typography, rail spacing, and mobile reflow could not be visually compared in a browser-rendered implementation screenshot.

## Findings

- [P1] Browser-rendered fidelity cannot be verified
  - Location: homepage at 1440×900 and 390×844.
  - Evidence: source screenshot is available; implementation screenshot is not available because the required browser surface blocks the local URL.
  - Impact: fonts, exact spacing, image crop, above-the-fold density, responsive wrapping, menu behavior, and transparency halos remain visually unverified.
  - Fix: open the running local route in an allowed browser surface, capture both viewports, compare them with the source in the same visual input, then correct any P0/P1/P2 differences.

## Source-led refinement pass 2

The following changes were implemented from the approved composition and real source assets while browser capture remained unavailable:

- Removed the secondary vertical descriptor from the 132px rail so the confirmed seal, wordmark, four catalogue links, and language choices keep the intended breathing room at 900px height.
- Rebalanced the desktop hero from a literal 5/7 split to a 47.5/52.5 composition and reduced its viewport claim so the three catalogue portals enter the first desktop fold more like the approved source.
- Reframed the real Stomach meridian and Cinnamon Twig thumbnails toward their informative right-hand subjects instead of relying on generic centred cropping.
- Removed decorative `01 / 02` artwork numbering from the hero plaques; the titles now behave as direct work labels rather than artificial sequence markers.
- Reworked the three portals into distinct content-led compositions: a real atlas image, the real six-category case index, and a folio carrying the confirmed seal.
- Added the confirmed seal to the footer and simplified the desktop rail hierarchy.

These are implementation facts, not browser-rendered fidelity claims.

## Required fidelity surfaces

- Fonts and typography: encoded in the established Songti/modern sans token system; visually unverified.
- Spacing and layout rhythm: implemented as 132px desktop rail, 76px header, 5/7 hero split, two artwork columns, ruled ledger, and three portal panels; visually unverified.
- Colors and visual tokens: existing porcelain/celadon/ink/xuan/cinnabar tokens retained; Impeccable detector returned no findings.
- Image quality and asset fidelity: confirmed original seal copied byte-for-byte; real Stomach meridian and Cinnamon Twig WebP assets used; browser crop and alpha rendering remain unverified.
- Copy and content: generated HTML confirms real titles, real counts, valid routes, one H1, and no placeholder works or medical claims.

## Comparison history

- Pass 1: capture attempt blocked before an implementation screenshot could be produced. No visual fixes were claimed from browser evidence.
- Pass 2: source-led layout and crop refinement completed; Impeccable detector, TypeScript, project Lint, production build, and three-language static HTML checks passed. Browser capture remained blocked.

## Implementation checklist

1. Capture `/zh-CN` at 1440×900 in an allowed browser.
2. Compare rail width, header height, title scale, artwork crop, ledger height, and portal visibility with the source.
3. Capture at 390×844 and test menu open/close, ESC, focus return, horizontal overflow, and long text.
4. Re-run visual comparison until no actionable P0/P1/P2 differences remain.

previous result: blocked

---

# Design QA — 授权合作参考图布局

## Comparison target

- Source visual truth: `/var/folders/0f/gn9q37813bs1w4js7x_7_0n40000gn/T/codex-clipboard-960f3a9c-ac28-4734-a650-1a5ebcb2c264.png`
- Implementation route: `http://127.0.0.1:3000/zh-CN/licensing`
- Desktop state: 1440×1200, initial page load, first four scenarios visible in one row.
- Mobile state: 390×844, FAQ region with the second item open.
- Desktop implementation screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/licensing-final-1440x1200.png`
- Mobile implementation screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/licensing-faq-open-390x844.png`

## Full-view comparison evidence

- Combined comparison: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/licensing-qa-comparison-cards-final.png`
- The source's four-column desktop comparison grammar is present: tall equal-width entries, a large primary value block, a full-width action, ruled detail groups, and one visually differentiated complex scenario.
- The implementation intentionally keeps the established global rail, header, porcelain-blue hero, Songti headings, and verified brand mark. The source's fluorescent lime is translated to the project's celadon token.
- Six real use scenarios require a second row. The first four remain one desktop row; publishing/commercial and custom creation span two columns each on the second row so their longer conditions stay readable.
- Source pricing, discounts, point meters, model names, and membership controls were not copied because they are not truthful licensing data for this site.

## Focused region comparison evidence

- Combined FAQ comparison: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/licensing-qa-comparison-faq.png`
- The reference's centered FAQ heading, generous separation from the comparison area, thin horizontal rules, concise questions, and single-item expanded state are preserved.
- The implementation uses native `details` / `summary` instead of a decorative imitation. This provides keyboard activation and exposes the expanded state without custom focus management.
- The mobile screenshot confirms the long Chinese answer wraps within the viewport and the surrounding notice remains separated from the accordion.

## Required fidelity surfaces

- Typography: reference hierarchy is matched while retaining the established Songti display and modern sans body pairing.
- Spacing and layout: four desktop columns, two double-width complex entries, two tablet columns, and one mobile column; measured horizontal overflow is zero.
- Colors: xuan-paper surfaces, porcelain rules, ink text, and one celadon emphasis replace the source's unrelated subscription palette.
- Assets: the reference contains no content imagery needed by this page. No placeholder graphics, invented icons, or generated assets were added.
- Copy and data: all six scenarios come from published site data; every scenario remains quote-only and all FAQ answers derive from existing licensing policy.
- Interaction: quote links remain real `mailto:` actions; `work` references remain visible and are included in the generated enquiry; native FAQ items are keyboard and touch operable.

## Comparison history

- Pass 1 — [P2] The original licensing hero delayed the comparison content too far below the first viewport. Fixed by applying the compact hero only on the licensing route.
- Pass 2 — [P2] A three-column desktop grid drifted from the source's comparison rhythm. Fixed with four columns from 72rem and two double-width complex scenarios on the following row.
- Post-fix — 1440×1200 and 390×844 captures show no clipping or horizontal overflow; FAQ open state and English `work` propagation pass.

## Findings

- No actionable P0, P1, or P2 visual differences remain.
- [P3] The native disclosure marker appears before the question instead of at the far right as in the source. This is accepted to preserve browser-native semantics and avoid introducing an unverified decorative asset.
- [P3] The established brand hero and navigation add context above the comparison section that is absent from the cropped reference. This is an intentional product-shell requirement, not a fidelity defect.

previous result: passed

---

# Design QA — 首页「今日时令与开穴」与作品幻灯片

## Comparison target

- Source visual truth: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-source-1440x900.png`
- Annotation scope: user selected the existing desktop hero's complete right half and approved a split composition—left real-work slideshow, right seasonal timing panel.
- Implementation route: `http://127.0.0.1:3221/zh-CN`
- Desktop viewport/state: 1440×900, first real work active, initial page load.
- Mobile viewport/state: 390×844, menu closed; separate capture for the seasonal panel.
- Desktop implementation screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-1440x900-final.png`
- Mobile implementation screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-390x844-final.png`
- Mobile panel screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-panel-390x844-final.png`

## Full-view comparison evidence

- Combined source/implementation comparison: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-seasonal-comparison.png`.
- The implementation preserves the rail, header, brand copy, ledger, first-fold height, real Stomach-meridian artwork and the three catalogue portals. Only the annotated hero-right region changes.
- The original equal artwork pair becomes a deliberate 5/7 composition: one real-work slideshow remains the visual anchor, while the celadon panel carries the live calendar index.
- The panel uses ruled editorial groups rather than rounded cards, nested surfaces, fake controls or decorative textures.

## Focused region comparison evidence

- The desktop combined image makes the changed region readable at matched scale; no additional crop is needed for title, date, five-movement index, method list or slideshow controls.
- The mobile panel capture verifies the focused responsive state: title, date/time, lunar date, double hour, annual movement, governing qi, source qi, four method names and the medical boundary all wrap within 375px content width.
- The mobile first-fold capture verifies the approved order: brand identity, real artwork, then the seasonal panel below; no core content is replaced by the tool.

## Required fidelity surfaces

- Fonts and typography: existing Songti display and modern sans body stacks are retained. Panel headings use established heading tokens; current date/results use Songti; body and controls remain at 16px, with 14px reserved for compact explanatory text.
- Spacing and layout rhythm: matched first-fold height, 5/7 annotated-region split on desktop, single-column mobile flow, 1px catalogue rules, 44px controls and no horizontal overflow at 1440×900 or 390×844.
- Colors and visual tokens: porcelain, celadon, ink and xuan tokens are reused without gradients, glass effects or a new palette. Text remains on high-contrast ink tokens.
- Image quality and asset fidelity: all three slides use existing published WebP thumbnails—Stomach meridian, Cinnamon Twig and Nine Needles. No placeholder, generated or approximate art was introduced.
- Copy and content: Simplified Chinese, Traditional Chinese and English are present. Current calendar values are calculated in China Standard Time. The four point-opening methods are named, while unverified self-needling outputs are deliberately not fabricated.
- Interaction and accessibility: previous, next and three direct slide selectors work; ArrowLeft/ArrowRight switches slides; every control measures at least 44×44px; focus-visible uses the established 3px/3px-offset ring; reduced-motion removes the slide transition.

## Comparison history

- Pass 1: the matched side-by-side comparison found no actionable P0/P1/P2 differences within the user-approved annotation scope. The existing shell and left hero remained visually stable, while the selected right region gained the requested split hierarchy.
- Responsive pass: the 390×844 first-fold and focused panel captures found no clipping, horizontal overflow or compressed two-column panel. English and Traditional Chinese each measured `scrollWidth === clientWidth`.
- Production pass: formal build completed, browser console returned zero page errors, one H1 remained, and 1440/390 layouts both measured zero horizontal overflow.

## Findings

- No actionable P0, P1 or P2 visual differences remain.
- [P3] Exact current-point outputs for Na Zi, Yang Zi, Ling Gui Ba Fa and Fei Teng Ba Fa are not displayed because neither the V2 data nor the read-only old site contains an approved calculation convention. This is an intentional clinical-content boundary, not a visual defect.
- Existing optical spacing and bespoke display sizes outside the annotated region were deliberately preserved to avoid an unrelated homepage redesign.

## Primary interactions tested

- Previous/next wrap across all three real works.
- Direct selectors expose the selected state and switch to the named work.
- ArrowRight advanced from Cinnamon Twig to Nine Needles.
- All carousel controls meet the 44px touch minimum and the keyboard focus ring is visible.
- Live date/time content renders server-side, updates client-side, and avoids hydration layout shift.

previous result: passed

---

# Design QA — 首页精简日历与纵向作品布局

## Comparison target

- Source calendar crop: `/var/folders/0f/gn9q37813bs1w4js7x_7_0n40000gn/T/codex-clipboard-4fc3b13e-9ea7-4bd4-9aa8-97a2383b1bee.png`
- Source artwork/carousel crop: `/var/folders/0f/gn9q37813bs1w4js7x_7_0n40000gn/T/codex-clipboard-12542dc7-1578-4a3f-8d89-070c2ede7f8e.png`
- Implementation route: `http://127.0.0.1:3221/zh-CN`
- Desktop viewport/state: 1440×900, menu closed, first work active, entrance animation complete.
- Mobile viewport/state: 390×844, menu closed, first work active, entrance animation complete.
- Desktop implementation screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-calendar-stacked-1440x900-final.png`
- Mobile implementation screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-calendar-stacked-390x844-final.png`

## Full-view comparison evidence

- Combined source/implementation comparison: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-calendar-stacked-comparison.png`.
- The final right half follows the user's explicit vertical order: compact celadon calendar at the top, full-width real Stomach-meridian artwork below, and one ruled slideshow control strip at the bottom.
- Five-movement, governing/source qi, timing-method and boundary sections from the prior iteration are no longer rendered in the homepage hero.
- The former 5/7 side-by-side split and its near-miss vertical rule are removed, so the right half now reads as one continuous catalogue column.

## Focused region comparison evidence

- The combined comparison keeps both user-provided crops readable next to the rendered desktop result, making calendar fields, vertical artwork plaque, image scale and control-strip placement directly comparable.
- The 390×844 implementation capture verifies that the compact calendar remains legible and that the real artwork begins within the first viewport without horizontal overflow.
- English was checked separately at 390px: `Monday, July 13`, the time, Chinese-calendar label and current double hour remain readable without clipping or overlap.

## Required fidelity surfaces

- Fonts and typography: the source's Songti date/time and modern sans labels are preserved through existing design tokens; the date scales from 24px to the established 36px heading ceiling.
- Spacing and layout rhythm: calendar padding uses 20–32px tokens, content is enclosed by two celadon rules, the artwork consumes the remaining hero height, and the single control strip is 45px rather than the previous 90px double row.
- Colors and visual tokens: only the existing celadon, xuan, ink and rule tokens are used; no gradient, shadow, rounded card or new palette was introduced.
- Image quality and asset fidelity: the published Stomach-meridian WebP remains uncropped with `object-fit: contain`; no placeholder or approximate asset was added.
- Copy and content: only solar date/time, lunar date and current double hour remain visible, exactly matching the user's requested calendar scope. No unverified point-opening output is shown.
- Interaction and accessibility: previous/next buttons and ArrowLeft/ArrowRight retain cyclic switching; both visible buttons remain at least 44px high, labels do not wrap, and reduced motion remains supported.

## Comparison history

- Pass 1 — [P2] The earlier side-by-side artwork/seasonal composition introduced a 14.66px grid-line mismatch and a visually heavy 90px two-row controller. The user also found the overall composition strange.
- User-directed revision — replaced the split with a vertical right column, removed every seasonal section except the compact calendar, moved the artwork below it, and reduced controls to `previous / count / next` in one row.
- Post-fix desktop pass — 1440×900 measured `scrollWidth === clientWidth`, one H1, 45px controls and zero console errors.
- Post-fix mobile/i18n pass — 390×844 Simplified Chinese, Traditional Chinese and English measured no horizontal overflow; English calendar copy remained readable; console returned zero errors.

## Findings

- No actionable P0, P1 or P2 differences remain.
- [P3] The final artwork is wider than the narrow source crop because it now fills the complete right hero column. This is the user's requested structural change and improves the visibility of the real work.
- [P3] Direct numbered slide selectors were removed from the visible controller to preserve one calm, non-wrapping row. The visible count and cyclic previous/next controls still communicate and operate the slideshow.

## Primary interactions tested

- Next advances from the Stomach-meridian work to Cinnamon Twig.
- Previous/next controls measure at least 44px and remain non-wrapping at 390px.
- Keyboard ArrowLeft/ArrowRight handling remains in the carousel region.
- Live date/time renders without hydration error and continues updating every 30 seconds.

previous result: passed

---

# Design QA — 日历紧凑化与导航毛玻璃

## Comparison target

- Source visual truth: current browser annotations for the compact calendar and desktop main navigation, plus the matched before-state capture at `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-layout-alignment-before.png`.
- Implementation route: `http://127.0.0.1:3221/zh-CN`
- Desktop viewport/state: 1295×945 viewport, first work active, menu closed; an additional scrolled state verifies the sticky glass surface over moving page content.
- Desktop implementation screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-compact-calendar-glass-header-1295x945-final.png`
- Scrolled glass screenshot: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-glass-header-scrolled-final.png`

## Full-view comparison evidence

- Matched before/after comparison: `/Users/nidexingxingyanjingya/.codex/visualizations/2026/07/10/019f4b32-f472-71a1-bdba-e74f315d148e/03-home-compact-calendar-glass-header-comparison.png`.
- The implementation preserves the approved vertical order—calendar above artwork—while reducing the calendar to a compact information band.
- Removing the two internal calendar rules and reducing label/value spacing gives more height back to the real artwork without changing its crop or slideshow controls.
- The sticky header uses a restrained translucent xuan-paper surface with blur and saturation; its existing square geometry and bottom catalogue rule remain intact.

## Required fidelity surfaces

- Typography: date/time scale is reduced to a 20–30px responsive range, labels use caption size, and values use the existing compact body size. The display/body font families remain unchanged.
- Spacing: calendar padding is 14–24px, the metadata gap is 16px, and the date line gap is 12px. No new arbitrary card spacing is introduced.
- Rules: the selected calendar's internal top and bottom borders both compute to `0px`; the panel boundary and artwork boundary remain as structural catalogue rules.
- Glass: header background computes to the page color at 82% opacity with `blur(14px) saturate(1.15)`. `prefers-reduced-transparency` receives the solid page background and no blur.
- Responsive behavior: the compact date size clamps to 20px at phone widths, the time remains non-wrapping, and the existing 390px single-column order is unchanged. This iteration only reduces calendar dimensions and does not add width pressure.

## Comparison history

- Pass 1: desktop measurement found the calendar at approximately 136.7px high, with both selected internal rules removed, one H1, no console errors, and `scrollWidth === clientWidth`.
- Pass 2: the scrolled capture confirmed the glass effect is visible but restrained and does not obscure navigation text.
- Static responsive pass: the 390px rules retain two equal metadata columns and a 20px minimum date/time size; no changed selector weakens the 44px mobile navigation control.

## Findings

- No actionable P0, P1 or P2 differences remain in the two Task 03 annotation regions.
- [P3] The blur is intentionally subtle on the page top because the content beneath the sticky header is almost white; it becomes more legible once the page is scrolled.
- The atlas search-field annotation is outside this QA scope because `src/features/atlas/**` belongs exclusively to Task 04.

final result: passed

---

# Design QA — 首页 6 幅精选与每日首图轮换

## 验收范围

- 首页精选从 3 幅扩为 6 幅，但首屏仍只显示一幅，页面高度不增加。
- 每日首图按北京时间稳定轮换；前后按钮保持固定顺序，不自动播放。
- 当前图片只进入对应详情页，不产生随机目标。

## 验收结果

- 1440×900：6 幅均可完整显示，当前计数为 `xx / 06`；页面 1 个 H1，`scrollWidth === clientWidth`。
- 390×844：无横向溢出，上一幅与下一幅均大于 44px；新增汤剂图加载并完整显示。
- 简体、繁体、英文：每日首图一致，均显示 6 幅，无横向溢出。
- 交互：6 幅循环、序号、标题、alt、详情 URL 均一致；ArrowRight 后焦点仍在作品链接。
- 动效：切换只作用于非交互图像容器，`prefers-reduced-motion` 下取消；没有自动播放。

final result: passed
