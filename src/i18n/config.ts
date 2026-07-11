export const LOCALES = ["zh-CN", "zh-Hant", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh-CN";

export function isLocale(value: string): value is Locale {
  return LOCALES.some((locale) => locale === value);
}

