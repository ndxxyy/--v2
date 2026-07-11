"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import type { AtlasCopy } from "./copy";
import { ResilientImage } from "./ResilientImage";
import type { AtlasPublicImage } from "./selectors";
import styles from "./AtlasGallery.module.css";

interface AtlasGalleryProps {
  readonly images: readonly AtlasPublicImage[];
  readonly workTitle: string;
  readonly copy: AtlasCopy["detail"];
}

const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function formatImageCount(template: string, current: number, total: number) {
  return template
    .replace("{current}", String(current))
    .replace("{total}", String(total));
}

function formatSelectImage(template: string, title: string) {
  return template.replace("{title}", title);
}

export function AtlasGallery({ copy, images, workTitle }: AtlasGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isViewerOpen, setViewerOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!isViewerOpen) {
      return;
    }

    const dialog = dialogRef.current;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isViewerOpen]);

  function selectPrevious() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  function selectNext() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  function openViewer(event: MouseEvent<HTMLButtonElement>) {
    openerRef.current = event.currentTarget;
    setViewerOpen(true);
  }

  function closeViewer() {
    const dialog = dialogRef.current;

    if (dialog?.open) {
      dialog.close();
    }

    setViewerOpen(false);
    requestAnimationFrame(() => openerRef.current?.focus());
  }

  function handleDialogKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeViewer();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectNext();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    ).filter((element) => !element.hasAttribute("disabled"));

    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable.at(-1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <section className={styles.gallery} aria-labelledby="atlas-gallery-title">
      <div className={styles.galleryHeading}>
        <div>
          <h2 id="atlas-gallery-title">{copy.galleryLabel}</h2>
          <p aria-live="polite">
            {formatImageCount(copy.imageCount, activeIndex + 1, images.length)}
          </p>
        </div>
        <button className={styles.openViewer} onClick={openViewer} type="button">
          {copy.viewLarge}
        </button>
      </div>

      <figure className={styles.mainFigure}>
        <ResilientImage
          actionLabel={`${copy.viewLarge}：${activeImage.title}`}
          alt={activeImage.alt}
          errorMessage={copy.imageError}
          height={activeImage.preview.height}
          onActivate={openViewer}
          priority
          retryLabel={copy.retryImage}
          sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1279px) 58vw, 48vw"
          src={activeImage.preview.src}
          width={activeImage.preview.width}
        />
        <figcaption>{activeImage.title}</figcaption>
      </figure>

      {images.length > 1 ? (
        <div className={styles.galleryNavigation}>
          <button onClick={selectPrevious} type="button">
            {copy.previous}
          </button>
          <button onClick={selectNext} type="button">
            {copy.next}
          </button>
        </div>
      ) : null}

      {images.length > 1 ? (
        <ul className={styles.thumbnailList} aria-label={copy.thumbnailsLabel}>
          {images.map((image, index) => (
            <li className={styles.thumbnailItem} key={image.id}>
              <div
                className={styles.thumbnailFrame}
                data-selected={index === activeIndex || undefined}
                style={{
                  aspectRatio: `${image.thumbnail.width} / ${image.thumbnail.height}`,
                }}
              >
                <Image
                  alt=""
                  fill
                  sizes="96px"
                  src={image.thumbnail.src}
                  unoptimized
                />
                <button
                  aria-label={formatSelectImage(copy.selectImage, image.title)}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              </div>
              <p aria-hidden="true">{index + 1}</p>
            </li>
          ))}
        </ul>
      ) : null}

      <dialog
        aria-labelledby="atlas-viewer-title"
        className={styles.viewer}
        onCancel={(event) => {
          event.preventDefault();
          closeViewer();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeViewer();
          }
        }}
        onKeyDown={handleDialogKeyDown}
        ref={dialogRef}
      >
        <div className={styles.viewerShell}>
          <header className={styles.viewerHeader}>
            <div>
              <h2 id="atlas-viewer-title">{workTitle}</h2>
              <p aria-live="polite">
                {formatImageCount(copy.imageCount, activeIndex + 1, images.length)} · {activeImage.title}
              </p>
            </div>
            <button
              className={styles.closeViewer}
              onClick={closeViewer}
              ref={closeButtonRef}
              type="button"
            >
              {copy.close}
            </button>
          </header>

          <div className={styles.viewerBody}>
            <div className={styles.viewerImage}>
              <ResilientImage
                alt={activeImage.alt}
                errorMessage={copy.imageError}
                height={activeImage.preview.height}
                retryLabel={copy.retryImage}
                sizes="(max-width: 767px) calc(100vw - 72px), 512px"
                src={activeImage.preview.src}
                width={activeImage.preview.width}
              />
            </div>
          </div>

          <footer className={styles.viewerFooter}>
            {images.length > 1 ? (
              <div className={styles.viewerArrows}>
                <button onClick={selectPrevious} type="button">
                  {copy.previous}
                </button>
                <button onClick={selectNext} type="button">
                  {copy.next}
                </button>
              </div>
            ) : null}
            {images.length > 1 ? (
              <div
                className={styles.viewerThumbnails}
                role="group"
                aria-label={copy.thumbnailsLabel}
              >
                {images.map((image, index) => (
                  <button
                    aria-label={formatSelectImage(copy.selectImage, image.title)}
                    aria-pressed={index === activeIndex}
                    key={image.id}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  >
                    <span>{index + 1}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </footer>
        </div>
      </dialog>
    </section>
  );
}
