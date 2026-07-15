# 08 集成测试与发布交接

交接日期：2026-07-16

发布状态：**本地产物已具备部署条件，但尚未推送、未改写远程历史、未执行正式部署。**

## 已实现内容

- 完成首页、图谱目录/分类/详情、医案合规空状态、授权与联系、三语言路径、图片保护、SEO 和 Cloudflare Workers 部署适配的集成。
- 公开图谱只使用 274 张带可见/盲水印的哈希命名 WebP；受保护母版、登记表与备份不在 `public/**` 中。
- 将本地 `artifacts/**` 和 `content-assets/backups/**` 加入 Git/ESLint 排除范围，防止测试产物和受保护备份进入新提交。
- 已将 343 个备份文件从当前 Git 索引中停止跟踪；本地 137 MB 备份文件仍完整保留，未删除、未移动。
- 补齐 favicon、manifest、robots、sitemap、canonical、hreflang、Open Graph、Twitter 分享信息与静态资源缓存/安全头。

## 修改文件

- `.gitignore`
- `eslint.config.mjs`
- `next.config.ts`
- `public/_headers`
- `src/lib/seo.ts`
- `src/app/favicon.ico`
- `src/app/manifest.ts`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/[locale]/**/page.tsx` 中需要页面级 Metadata 的路由
- `src/app/[locale]/layout.tsx`
- `content-assets/backups/20260711-before-user-provided-meridians/**`（仅停止 Git 跟踪，本地保留）
- `docs/handoffs/07-seo-performance.md`
- `docs/handoffs/08-release.md`
- `docs/handoffs/09-version-update.md`

## 构建与测试结果

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过 |
| `npm run lint` | 通过 |
| `git diff --check` | 通过 |
| `npm run atlas:watermark:verify` | 274 / 274 通过；最低置信度 0.909，每位最少 8 个载体 |
| `npm run build` | 通过；211 个页面/元数据入口 |
| `npx opennextjs-cloudflare build` | 通过；生成 Worker 部署包 |
| Wrangler dry-run | 通过；366 个静态资源，Worker gzip 约 1.10 MiB |
| Cloudflare 本地预览 | 主要路由 200，未知作品 404，favicon 200，图谱预览 WebP 200 |

## 桌面与手机验证结果

- 前续交接已完成 1440×900 与 390×844 的首页、图谱、授权和联系页复核，没有发现横向滚动或无效联系表单。
- 图谱大图已验证打开/关闭、点击二次放大、方向键、ESC、焦点返回和单图状态。
- 本轮在 Cloudflare 本地运行时补充验证了简体首页、经络目录、汤剂详情、404、robots、sitemap、favicon 和公开图片响应。

## 仍需提供或人工确认的真实资料

- 是否以 `xiaozhongqiyi.com` 作为唯一正式主域名，以及该域名是否已在当前 Cloudflare 账户中可用。
- 对现有电话、邮箱、微信二维码和社媒账号做一次实际拨号、发信、扫码和账号可达性确认。
- 对含剂型、煎煮、服用、经络和本草文字的图谱完成上线前医学/编辑复核。
- 确认仓库外已有盲水印私钥与追溯登记表的安全备份。

## 已知限制

- 浏览器端的右键、拖拽和复制保护不能阻止截图、开发者工具或自动化抓取；它们只提高普通保存成本。
- Cloudflare CDN/WAF 的热链、频率限制和异常抓取规则未配置，正式部署后再依账户能力设置。
- 公开 GitHub 仓库历史已经包含受保护备份。本轮的停止跟踪只保护新提交，不会清除旧提交和 GitHub 缓存；在获得明确授权后必须单独改写远程历史。

## 发布前检查清单

- [x] 类型检查、Lint、正式构建、Cloudflare 构建与 dry-run
- [x] 公开图谱水印全量验证
- [x] robots、sitemap、canonical、hreflang、分享信息和 favicon
- [x] 本地临时产物和受保护备份排除
- [ ] 在仓库外保留可恢复备份，改写并强制更新 GitHub 上的公开历史
- [ ] 确认正式主域名与 Cloudflare 域名状态
- [ ] 资料所有者完成联系方式、医学文字和最终页面的人工确认
- [x] 创建清理后的本地发布提交
- [ ] 清理远程历史并推送，再执行正式 `npm run deploy`

## 后续任务注意事项

1. 不要在 GitHub Desktop 中直接提交当前所有文件；必须先完成历史清理和变更范围复核。
2. 未获得用户明确同意前，不得执行 force-push、删除远程分支/标签或正式部署。
3. 如使用自定义域名，先以该域名重建 canonical/sitemap 再部署，不要部署后才更换 SEO 主域。
