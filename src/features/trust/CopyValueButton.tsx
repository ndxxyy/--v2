"use client";

import { useState } from "react";

import styles from "./TrustPages.module.css";

interface CopyValueButtonProps {
  readonly copyLabel: string;
  readonly copiedLabel: string;
  readonly errorLabel: string;
  readonly value: string;
}

async function copyText(value: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  const copied = document.execCommand("copy");
  input.remove();

  if (!copied) {
    throw new Error("Copy command was not available.");
  }
}

export function CopyValueButton({
  copiedLabel,
  copyLabel,
  errorLabel,
  value,
}: CopyValueButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function handleCopy() {
    try {
      await copyText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  const label =
    status === "copied" ? copiedLabel : status === "error" ? errorLabel : copyLabel;

  return (
    <button className={styles.copyButton} onClick={handleCopy} type="button">
      <span aria-live="polite">{label}</span>
    </button>
  );
}
