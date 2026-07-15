"use client";

import { useEffect } from "react";

const PROTECTED_IMAGE_SELECTOR =
  'img[src*="/images/atlas/"], img[src*="%2Fimages%2Fatlas%2F"]';

function isProtectedImageContext(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  if (target.matches(PROTECTED_IMAGE_SELECTOR)) {
    return true;
  }

  const mediaOwner = target.closest("button, a, picture, figure");
  return Boolean(mediaOwner?.querySelector(PROTECTED_IMAGE_SELECTOR));
}

export function MediaProtectionGuard() {
  useEffect(() => {
    const preventProtectedImageAction = (event: Event) => {
      if (
        isProtectedImageContext(event.target) ||
        isProtectedImageContext(document.activeElement)
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventProtectedImageAction, true);
    document.addEventListener("dragstart", preventProtectedImageAction, true);
    document.addEventListener("copy", preventProtectedImageAction, true);

    return () => {
      document.removeEventListener("contextmenu", preventProtectedImageAction, true);
      document.removeEventListener("dragstart", preventProtectedImageAction, true);
      document.removeEventListener("copy", preventProtectedImageAction, true);
    };
  }, []);

  return null;
}
