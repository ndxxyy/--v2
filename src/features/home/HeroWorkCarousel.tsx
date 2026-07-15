"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type KeyboardEvent } from "react";

import type { HomeCopy } from "./copy";
import type { HomeWork } from "./selectors";
import styles from "./HomePage.module.css";

interface HeroWorkCarouselProps {
  readonly copy: HomeCopy["hero"];
  readonly initialIndex: number;
  readonly locale: "zh-CN" | "zh-Hant" | "en";
  readonly works: readonly HomeWork[];
}

function normalizeIndex(index: number, itemCount: number): number {
  return itemCount > 0 ? ((index % itemCount) + itemCount) % itemCount : 0;
}

export function HeroWorkCarousel({
  copy,
  initialIndex,
  locale,
  works,
}: HeroWorkCarouselProps) {
  const initialActiveIndex = normalizeIndex(initialIndex, works.length);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const compactArtworkLabel = locale !== "en";
  const labelSeparator = locale === "en" ? ": " : "：";
  const spokenSeparator = locale === "en" ? ", " : "，";

  if (works.length === 0) {
    return (
      <div className={styles.heroEmpty} role="note">
        <h2 className={styles.heroEmptyTitle}>{copy.emptyTitle}</h2>
        <p className={styles.heroEmptyDescription}>{copy.emptyDescription}</p>
      </div>
    );
  }

  const activeWork = works[activeIndex] ?? works[0];
  const activeNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(works.length).padStart(2, "0");
  const previousWork = works[normalizeIndex(activeIndex - 1, works.length)] ?? activeWork;
  const nextWork = works[normalizeIndex(activeIndex + 1, works.length)] ?? activeWork;

  function moveBy(offset: number) {
    setActiveIndex((current) => (current + offset + works.length) % works.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveBy(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveBy(1);
    }
  }

  return (
    <div
      aria-label={copy.carouselLabel}
      aria-roledescription={copy.carouselRole}
      className={styles.heroCarousel}
      onKeyDown={handleKeyDown}
      role="region"
    >
      <Link
        aria-label={`${copy.viewWork}${labelSeparator}${activeWork.title}`}
        className={styles.heroArtwork}
        data-testid="hero-carousel-work"
        data-work={activeWork.id}
        href={activeWork.href}
      >
        <figure className={styles.heroArtworkFigure} key={activeWork.id}>
          <Image
            alt={activeWork.image.alt}
            className={styles.heroArtworkImage}
            height={activeWork.image.height}
            loading="eager"
            priority={activeIndex === initialActiveIndex}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 48vw"
            src={activeWork.image.src}
            unoptimized
            width={activeWork.image.width}
          />
        </figure>
        <div
          className={`${styles.artworkPlaque} ${
            compactArtworkLabel ? styles.artworkPlaqueVertical : ""
          }`}
        >
          <h2
            className={`${styles.artworkTitle} ${
              compactArtworkLabel && activeWork.id === "work-003"
                ? styles.artworkTitleColumns
                : ""
            }`}
          >
            {compactArtworkLabel && activeWork.id === "work-003" ? (
              <>
                <span>{activeWork.title.slice(0, -2)}</span>
                <span>{activeWork.title.slice(-2)}</span>
              </>
            ) : (
              activeWork.title
            )}
          </h2>
        </div>
      </Link>

      <div className={styles.carouselControls}>
        <button
          aria-label={`${copy.previousWork}${labelSeparator}${previousWork.title}`}
          className={styles.carouselStep}
          data-testid="hero-carousel-previous"
          onClick={() => moveBy(-1)}
          type="button"
        >
          {copy.previousWork}
        </button>
        <p aria-atomic="true" aria-live="polite" className={styles.carouselCount}>
          <span className="sr-only">
            {activeWork.title}{spokenSeparator}{activeNumber} / {totalNumber}
          </span>
          <span aria-hidden="true">{activeNumber} / {totalNumber}</span>
        </p>
        <button
          aria-label={`${copy.nextWork}${labelSeparator}${nextWork.title}`}
          className={styles.carouselStep}
          data-testid="hero-carousel-next"
          onClick={() => moveBy(1)}
          type="button"
        >
          {copy.nextWork}
        </button>
      </div>
    </div>
  );
}
