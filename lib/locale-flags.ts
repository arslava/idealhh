import type { Locale } from "./slug-map";

// ISO 3166-1 alpha-2 codes used to render a representative flag per site
// locale, via flagcdn.com's free SVG flag set. A language isn't a
// country, so these are the conventional choices most multilingual sites
// use (not a claim about where speakers live): US for English, Spain for
// Spanish, Saudi Arabia for Arabic (msa/no single "Arabic" flag exists),
// Taiwan for Traditional Chinese since that's the locale this site
// actually targets (zh-Hant, not zh-Hans/mainland Simplified).
export const LOCALE_FLAG: Record<Locale, string> = {
  en: "us",
  ru: "ru",
  es: "es",
  ar: "sa",
  zhHant: "tw",
};

// Short on-brand label shown next to the flag in compact triggers.
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  es: "ES",
  ar: "AR",
  zhHant: "繁中",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  es: "Español",
  ar: "العربية",
  zhHant: "繁體中文",
};
