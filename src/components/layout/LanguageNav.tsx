"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LOCALES, type Locale } from "@/i18n/config";

import { LANGUAGE_NAMES } from "./copy";
import { replaceLocale } from "./navigation";
import styles from "./LanguageNav.module.css";

interface LanguageNavProps {
  readonly locale: Locale;
  readonly label: string;
  readonly vertical?: boolean;
  readonly onNavigate?: () => void;
}

export function LanguageNav({
  label,
  locale,
  onNavigate,
  vertical = false,
}: LanguageNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={label}
      className={`${styles.nav} ${vertical ? styles.vertical : ""}`}
    >
      {LOCALES.map((targetLocale) => (
        <Link
          aria-current={targetLocale === locale ? "page" : undefined}
          className={styles.link}
          href={replaceLocale(pathname, targetLocale)}
          hrefLang={targetLocale}
          key={targetLocale}
          lang={targetLocale}
          onClick={onNavigate}
        >
          {LANGUAGE_NAMES[targetLocale]}
        </Link>
      ))}
    </nav>
  );
}
