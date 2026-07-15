# 07 SEO、多语言与性能交接

交接日期：2026-07-16

## 完成内容

- 为简体中文、繁体中文和英文的首页、图谱目录、图谱分类、图谱详情、医案、授权、版权、关于与联系页补齐独立标题和描述。
- 新增统一 SEO helper，按页面和语言输出 canonical、`zh-CN` / `zh-Hant` / `en` / `x-default` 替代链接、Open Graph 与 Twitter 分享信息。
- 图谱详情分享图只使用公开的带水印 WebP 预览图，不引用母版、备份或私有路径。
- 新增 `/robots.txt`、`/sitemap.xml` 和 `/manifest.webmanifest`。站点地图覆盖三种语言的静态页、55 件已发布图谱、本草分类路径和合规公开医案，不会把未发布内容列入 sitemap。
- 复用已有真实品牌印章生成站点 favicon，并作为默认站点图标与分享图。
- 为 Cloudflare 静态资源补充基础安全响应头；对文件名含内容指纹的图谱 WebP 启用一年 immutable 缓存，品牌与联系图片使用七天缓存。
- 站点根地址默认使用已存在的 Workers 域名，可通过构建环境变量 `NEXT_PUBLIC_SITE_URL` 切换为已确认的正式自定义域名，无需改页面代码。

## 修改文件

- `src/lib/seo.ts`
- `src/app/[locale]/layout.tsx`
- `src/app/[locale]/page.tsx`
- `src/app/[locale]/about/page.tsx`
- `src/app/[locale]/contact/page.tsx`
- `src/app/[locale]/copyright/page.tsx`
- `src/app/[locale]/licensing/page.tsx`
- `src/app/[locale]/cases/page.tsx`
- `src/app/[locale]/cases/[slug]/page.tsx`
- `src/app/[locale]/atlas/page.tsx`
- `src/app/[locale]/atlas/meridians/page.tsx`
- `src/app/[locale]/atlas/formulas/page.tsx`
- `src/app/[locale]/atlas/herbs/page.tsx`
- `src/app/[locale]/atlas/herbs/[...taxonomy]/page.tsx`
- `src/app/[locale]/atlas/[slug]/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/manifest.ts`
- `src/app/favicon.ico`
- `next.config.ts`
- `public/_headers`
- `docs/handoffs/07-seo-performance.md`

## 验证结果

| 验证 | 结果 |
| --- | --- |
| `npm run typecheck` | 通过 |
| `npm run lint` | 通过 |
| `npm run build` | 通过；Next.js 16.2.10，生成 211 个页面/元数据入口 |
| OpenNext Cloudflare build | 通过；成功生成 `.open-next/worker.js` |
| Cloudflare 本地预览 | 首页、图谱目录、图谱详情均为 200；未知作品为 404 |
| SEO 输出 | `robots.txt`、`sitemap.xml`、canonical、三语言 alternate、Open Graph 与 Twitter 信息均已实测输出 |
| 图标与公开分享图 | favicon、品牌印章与代表图谱预览图均为 200 |
| 响应头 | HTML 与静态图片均输出 `nosniff`、引用来源策略、权限策略与同源嵌入限制；哈希图谱资源输出一年 immutable 缓存 |

## 遗留问题

- 尚未确认 `xiaozhongqiyi.com` 是否已在当前 Cloudflare 账户中完成域名托管。在正式绑定前，canonical 继续指向已知的 `workers.dev` 地址，避免伪造不可达正式域名。
- 尚未新增医案结构化数据；当前没有可公开的真实医案，不应为通过工具验证而虚构 schema 内容。
- 正式发布后应以最终域名再跑一次搜索引擎抓取、分享卡片和 404 验证。

## 后续任务注意事项

1. 绑定自定义域名前，先在 Cloudflare 构建环境设置 `NEXT_PUBLIC_SITE_URL=https://<正式域名>` 并重新部署。
2. 作品 slug、编号或分类路径变更时，必须同步复核 sitemap、canonical、语言替代链接和授权页携带的作品值。
3. 不得将 `content-assets/masters/**`、`content-assets/backups/**` 或水印私钥/登记表用作 Open Graph 图片或公开静态资源。
