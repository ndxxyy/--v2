import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { getRouteLabel } from "@/i18n/route-labels";

import { SHELL_COPY } from "./copy";
import { LanguageNav } from "./LanguageNav";
import { localizedPath } from "./navigation";
import styles from "./SiteFooter.module.css";

export function SiteFooter({ locale }: { readonly locale: Locale }) {
  const copy = SHELL_COPY[locale];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <Image
            alt=""
            className={styles.seal}
            height={58}
            src="/images/brand/xiao-zhong-qiyi-seal.png"
            width={58}
          />
          <div>
            <p className={styles.brandName}>{copy.brandName}</p>
            <p className={styles.intro}>{copy.footerIntro}</p>
          </div>
        </div>
        <div className={styles.groups}>
          <div className={styles.group}>
            <p className={styles.groupTitle}>{copy.footerContent}</p>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href={localizedPath(locale, "/atlas")}>
                  {getRouteLabel(locale, "atlas")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={localizedPath(locale, "/cases")}>
                  {getRouteLabel(locale, "cases")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <p className={styles.groupTitle}>{copy.footerTrust}</p>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href={localizedPath(locale, "/licensing")}>
                  {getRouteLabel(locale, "licensing")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={localizedPath(locale, "/copyright")}>
                  {getRouteLabel(locale, "copyright")}
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={localizedPath(locale, "/about")}>
                  {getRouteLabel(locale, "about")}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <p className={styles.groupTitle}>{copy.footerContact}</p>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} href={localizedPath(locale, "/contact")}>
                  {getRouteLabel(locale, "contact")}
                </Link>
              </li>
            </ul>
            <LanguageNav label={copy.languageNavigation} locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  );
}
