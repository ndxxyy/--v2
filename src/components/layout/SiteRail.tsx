import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { getRouteLabel, type RouteLabelKey } from "@/i18n/route-labels";

import { SHELL_COPY } from "./copy";
import { LanguageNav } from "./LanguageNav";
import { localizedPath } from "./navigation";
import styles from "./SiteRail.module.css";

const RAIL_LINKS: readonly {
  readonly index: string;
  readonly key: RouteLabelKey;
  readonly path: string;
}[] = [
  { index: "01", key: "atlas", path: "/atlas" },
  { index: "02", key: "cases", path: "/cases" },
  { index: "03", key: "licensing", path: "/licensing" },
  { index: "04", key: "contact", path: "/contact" },
];

export function SiteRail({ locale }: { readonly locale: Locale }) {
  const copy = SHELL_COPY[locale];

  return (
    <aside
      className={`${styles.rail} ${locale === "en" ? styles.railEnglish : ""}`}
      aria-label={copy.brandName}
    >
      <Link className={styles.mark} href={`/${locale}`} aria-label={copy.brandName}>
        <Image
          alt=""
          className={styles.seal}
          height={76}
          priority
          src="/images/brand/xiao-zhong-qiyi-seal.png"
          width={76}
        />
      </Link>
      <div className={styles.brandBlock}>
        <Link
          className={`${styles.wordmark} ${locale === "en" ? styles.wordmarkEnglish : ""}`}
          href={`/${locale}`}
        >
          {copy.brandName}
        </Link>
      </div>
      <nav className={styles.railNav} aria-label={copy.primaryNavigation}>
        <ul>
          {RAIL_LINKS.map((item) => (
            <li key={item.key}>
              <Link className={styles.railLink} href={localizedPath(locale, item.path)}>
                <span className={styles.railIndex}>{item.index}</span>
                <span>{getRouteLabel(locale, item.key)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.railLanguages}>
        <LanguageNav label={copy.languageNavigation} locale={locale} vertical />
      </div>
    </aside>
  );
}
