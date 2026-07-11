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

final result: passed
