"use client";

import Image from "next/image";
import { type MouseEvent, useState } from "react";

import styles from "./ResilientImage.module.css";

interface ResilientImageProps {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly sizes: string;
  readonly priority?: boolean;
  readonly errorMessage: string;
  readonly retryLabel: string;
  readonly imageClassName?: string;
  readonly actionLabel?: string;
  readonly actionPressed?: boolean;
  readonly onActivate?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function ResilientImage(props: ResilientImageProps) {
  return <ResilientImageState key={props.src} {...props} />;
}

function ResilientImageState({
  actionLabel,
  actionPressed,
  alt,
  errorMessage,
  height,
  imageClassName,
  onActivate,
  priority = false,
  retryLabel,
  sizes,
  src,
  width,
}: ResilientImageProps) {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={styles.frame}
      data-loaded={loaded || undefined}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {failed ? (
        <div className={styles.error} role="status">
          <p>{errorMessage}</p>
          <button
            className={styles.retry}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setAttempt((current) => current + 1);
              setFailed(false);
              setLoaded(false);
            }}
            type="button"
          >
            {retryLabel}
          </button>
        </div>
      ) : onActivate && actionLabel ? (
        <button
          aria-label={actionLabel}
          aria-pressed={actionPressed}
          className={styles.action}
          onClick={onActivate}
          type="button"
        >
          <Image
            alt={alt}
            className={`${styles.image} ${imageClassName ?? ""}`}
            draggable={false}
            fill
            key={attempt}
            onError={() => setFailed(true)}
            onLoad={() => setLoaded(true)}
            priority={priority}
            sizes={sizes}
            src={src}
            unoptimized
          />
        </button>
      ) : (
        <Image
          alt={alt}
          className={`${styles.image} ${imageClassName ?? ""}`}
          draggable={false}
          fill
          key={attempt}
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          priority={priority}
          sizes={sizes}
          src={src}
          unoptimized
        />
      )}
    </div>
  );
}
