import Link from "next/link";
import type { Route } from "next";

import type { Locale } from "@/i18n/config";

import styles from "./AtlasRightsNotice.module.css";

const RIGHTS_COPY = {
  "zh-CN": {
    title: "版权与展示版本",
    intro: "本站图片为“小钟岐医”原创中医视觉作品。当前页面展示的是带版权标识的压缩预览版本，仅用于在线浏览与学习参考。",
    prohibitedTitle: "未经授权不得",
    prohibited: ["下载或批量保存", "二次上传", "商业使用", "作为素材重新分发"],
    workCode: "作品编号",
    workName: "作品名称",
    series: "所属系列",
    status: "授权状态",
    available: "可申请授权",
    versionsTitle: "展示与授权版本",
    versions: [
      ["在线展示版", "带版权标识的压缩预览，仅供浏览与学习参考。"],
      ["学习授权版", "高清学习版本，可用于个人学习与打印自用。"],
      ["正式授权版", "教学、内容传播、诊室展示或商业使用按范围确认。"],
    ],
    whyTitle: "为什么图片需要授权？",
    why: "小钟岐医希望通过开放展示，让更多人了解中医知识；同时通过版权授权机制保护原创创作，使更多高质量中医视觉内容能够持续更新。",
    action: "查看授权方式",
  },
  "zh-Hant": {
    title: "版權與展示版本",
    intro: "本站圖片為「小鐘岐醫」原創中醫視覺作品。目前頁面展示的是帶版權標識的壓縮預覽版本，僅用於線上瀏覽與學習參考。",
    prohibitedTitle: "未經授權不得",
    prohibited: ["下載或批量儲存", "二次上傳", "商業使用", "作為素材重新分發"],
    workCode: "作品編號",
    workName: "作品名稱",
    series: "所屬系列",
    status: "授權狀態",
    available: "可申請授權",
    versionsTitle: "展示與授權版本",
    versions: [
      ["線上展示版", "帶版權標識的壓縮預覽，僅供瀏覽與學習參考。"],
      ["學習授權版", "高清學習版本，可用於個人學習與列印自用。"],
      ["正式授權版", "教學、內容傳播、診室展示或商業使用按範圍確認。"],
    ],
    whyTitle: "為什麼圖片需要授權？",
    why: "小鐘岐醫希望透過開放展示，讓更多人了解中醫知識；同時透過版權授權機制保護原創創作，使更多高品質中醫視覺內容能夠持續更新。",
    action: "查看授權方式",
  },
  en: {
    title: "Copyright and display editions",
    intro: "Images on this site are original Xiao Zhong Qi Yi visual works. This page uses a compressed preview with copyright identification for online viewing and study reference only.",
    prohibitedTitle: "Without permission, do not",
    prohibited: ["Download or bulk-save images", "Re-upload images", "Use images commercially", "Redistribute images as assets"],
    workCode: "Work code",
    workName: "Work name",
    series: "Series",
    status: "Licensing status",
    available: "Licensing available",
    versionsTitle: "Display and licensed editions",
    versions: [
      ["Online display", "A compressed, copyright-marked preview for browsing and study reference."],
      ["Study licence", "A high-resolution study edition for personal learning and printing."],
      ["Formal licence", "Teaching, publishing, clinic display, and commercial use are agreed by scope."],
    ],
    whyTitle: "Why do these images require a licence?",
    why: "Xiao Zhong Qi Yi keeps the collection open for learning while licensing protects original work and supports the continued creation of high-quality Chinese medicine visuals.",
    action: "View licensing options",
  },
} as const satisfies Record<Locale, object>;

interface AtlasRightsNoticeProps {
  readonly code?: string;
  readonly licensingHref: Route;
  readonly locale: Locale;
  readonly series: string;
  readonly title: string;
}

export function AtlasRightsNotice({
  code,
  licensingHref,
  locale,
  series,
  title,
}: AtlasRightsNoticeProps) {
  const copy = RIGHTS_COPY[locale];

  return (
    <section className={styles.section} aria-labelledby="atlas-rights-title">
      <header className={styles.heading}>
        <h2 id="atlas-rights-title">{copy.title}</h2>
        <p>{copy.intro}</p>
      </header>

      <div className={styles.body}>
        <dl className={styles.identity}>
          {code ? <div><dt>{copy.workCode}</dt><dd>{code}</dd></div> : null}
          <div><dt>{copy.workName}</dt><dd>{title}</dd></div>
          <div><dt>{copy.series}</dt><dd>{series}</dd></div>
          <div><dt>{copy.status}</dt><dd>{copy.available}</dd></div>
        </dl>

        <div className={styles.boundary}>
          <h3>{copy.prohibitedTitle}</h3>
          <ul>{copy.prohibited.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>

        <div className={styles.versions}>
          <h3>{copy.versionsTitle}</h3>
          <dl>
            {copy.versions.map(([name, description]) => (
              <div key={name}><dt>{name}</dt><dd>{description}</dd></div>
            ))}
          </dl>
        </div>

        <div className={styles.why}>
          <h3>{copy.whyTitle}</h3>
          <p>{copy.why}</p>
          <Link href={licensingHref}>{copy.action}</Link>
        </div>
      </div>
    </section>
  );
}
