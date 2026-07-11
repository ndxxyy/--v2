"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/i18n/config";
import { getRouteLabel } from "@/i18n/route-labels";

import { LANGUAGE_NAMES, SHELL_COPY } from "./copy";
import { LanguageNav } from "./LanguageNav";
import {
  CONTENT_NAV_ITEMS,
  isCurrentPath,
  localizedPath,
  PRIMARY_NAV_ITEMS,
  TRUST_NAV_ITEMS,
  type NavigationItem,
} from "./navigation";
import styles from "./SiteHeader.module.css";

export function SiteHeader({ locale }: { readonly locale: Locale }) {
  const copy = SHELL_COPY[locale];
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const bodyOverflowRef = useRef("");
  const htmlOverflowRef = useRef("");
  const [menuOpen, setMenuOpen] = useState(false);

  function unlockPage() {
    document.body.style.overflow = bodyOverflowRef.current;
    document.documentElement.style.overflow = htmlOverflowRef.current;
  }

  function openMenu() {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open) {
      return;
    }

    bodyOverflowRef.current = document.body.style.overflow;
    htmlOverflowRef.current = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    setMenuOpen(true);
    dialog.showModal();
  }

  function closeMenu() {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
  }

  function handleClosed() {
    unlockPage();
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = bodyOverflowRef.current;
      document.documentElement.style.overflow = htmlOverflowRef.current;
    };
  }, []);

  function renderMenuItems(items: readonly NavigationItem[]) {
    return items.map((item) => {
      const href = localizedPath(locale, item.path);

      return (
        <li key={item.key}>
          <Link
            aria-current={isCurrentPath(pathname, href) ? "page" : undefined}
            className={styles.menuLink}
            href={href}
            onClick={closeMenu}
          >
            {getRouteLabel(locale, item.key)}
          </Link>
        </li>
      );
    });
  }

  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        {copy.skipToContent}
      </a>
      <header className={styles.header}>
        <div className={styles.mobileBar}>
          <Link className={styles.brand} href={`/${locale}`}>
            <Image
              alt=""
              className={styles.brandSeal}
              height={36}
              priority
              src="/images/brand/xiao-zhong-qiyi-seal.png"
              width={36}
            />
            <span>{copy.brandName}</span>
          </Link>
          <span className={styles.currentLanguage} aria-label={copy.currentLanguage}>
            {LANGUAGE_NAMES[locale]}
          </span>
          <button
            aria-controls="mobile-site-menu"
            aria-expanded={menuOpen}
            aria-label={copy.openMenu}
            className={styles.menuButton}
            onClick={openMenu}
            ref={menuButtonRef}
            type="button"
          >
            <span aria-hidden="true" className={styles.menuIcon} />
          </button>
        </div>

        <nav className={styles.desktopNav} aria-label={copy.primaryNavigation}>
          <ul className={styles.desktopList}>
            {PRIMARY_NAV_ITEMS.map((item) => {
              const href = localizedPath(locale, item.path);

              return (
                <li key={item.key}>
                  <Link
                    aria-current={isCurrentPath(pathname, href) ? "page" : undefined}
                    className={styles.desktopLink}
                    href={href}
                  >
                    {getRouteLabel(locale, item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <dialog
        aria-labelledby="mobile-site-menu-title"
        className={styles.dialog}
        id="mobile-site-menu"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClose={handleClosed}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeMenu();
          }
        }}
        ref={dialogRef}
      >
        <div className={styles.dialogHeader}>
          <p className={styles.dialogTitle} id="mobile-site-menu-title">
            {copy.brandName}
          </p>
          <button
            aria-label={copy.closeMenu}
            autoFocus
            className={styles.closeButton}
            onClick={closeMenu}
            type="button"
          >
            <span aria-hidden="true" className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.dialogBody}>
          <div className={styles.menuGroups}>
            <nav aria-labelledby="mobile-content-group">
              <p className={styles.menuGroupTitle} id="mobile-content-group">
                {copy.contentGroup}
              </p>
              <ul className={styles.menuList}>{renderMenuItems(CONTENT_NAV_ITEMS)}</ul>
            </nav>
            <nav aria-labelledby="mobile-trust-group">
              <p className={styles.menuGroupTitle} id="mobile-trust-group">
                {copy.trustGroup}
              </p>
              <ul className={styles.menuList}>{renderMenuItems(TRUST_NAV_ITEMS)}</ul>
            </nav>
          </div>
          <LanguageNav
            label={copy.languageNavigation}
            locale={locale}
            onNavigate={closeMenu}
          />
        </div>
      </dialog>
    </>
  );
}
