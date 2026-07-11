import type { ReactNode } from "react";

import type { Locale } from "@/i18n/config";

import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SiteRail } from "./SiteRail";
import styles from "./SiteFrame.module.css";

interface SiteFrameProps {
  readonly children: ReactNode;
  readonly locale: Locale;
}

export function SiteFrame({ children, locale }: SiteFrameProps) {
  return (
    <div className={styles.shell}>
      <SiteRail locale={locale} />
      <div className={styles.stage}>
        <SiteHeader locale={locale} />
        <div className={styles.content} id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter locale={locale} />
      </div>
    </div>
  );
}
