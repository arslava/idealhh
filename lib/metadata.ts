import type { Metadata } from "next";
import { slugMap, conditionSlugMap, localizedHref, localizedConditionHref, type Locale } from "./slug-map";

export const SITE_URL = "https://idealhh.com";

export const ALL_LOCALES: Locale[] = ["en", "ru", "es", "ar", "zhHant"];

// hreflang requires real BCP-47 codes, not our internal object-key names —
// zhHant's real tag is "zh-Hant", not "zhHant".
export const HREFLANG_CODE: Record<Locale, string> = {
  en: "en", ru: "ru", es: "es", ar: "ar", zhHant: "zh-Hant",
};

// Confirmed via live fetch: this exact keyword list appears identically
// (in English) on every page across every locale — EN, ES, AR, and
// ZH-HANT pages all emit the same meta-keywords tag, so it's a
// site-wide/global value set once at the theme or SEO-plugin level, not
// customized per page or translated per locale. Reproduced as found, with
// "CDPAP in Brooklyn New York" dropped per standing rule.
const GLOBAL_KEYWORDS = [
  "Home Care",
  "Home Attendant in Brooklyn New York",
  "Caregiver in Brooklyn New York",
  "Nursing Service in Brooklyn New York",
  "Home Care Agency in Brooklyn New York",
  "Home Care Services in Brooklyn New York",
  "Home Health Care Agency in Brooklyn New York",
];

// Confirmed og:image on every fetched page: the site logo, reused as the
// social-preview image site-wide (no dedicated per-page or 1200x630
// raster OG image exists on the live site). Reproducing that as-is, but
// flagging it: an SVG frequently fails to render as a link preview on
// Facebook/LinkedIn/iMessage, which generally expect a raster (PNG/JPG)
// image around 1200x630 — worth commissioning a dedicated OG image.
const OG_IMAGE = { url: `${SITE_URL}/images/logo.svg`, width: 512, height: 162, alt: "Ideal Home Health" };

function ogLocale(locale: Locale): string {
  return locale === "en" ? "en_US"
    : locale === "ru" ? "ru_RU"
    : locale === "es" ? "es_ES"
    : locale === "ar" ? "ar_AR"
    : "zh_TW";
}

/**
 * Builds title/description/canonical/hreflang/keywords/OpenGraph/Twitter
 * for a regular (non-condition) page, keyed by its entry in slug-map.ts.
 * Using the same map that drives LanguageSwitcher guarantees the hreflang
 * alternates always point at real, live-verified URLs — never a guessed
 * same-slug path.
 */
export function buildMetadata({
  key,
  locale,
  title,
  description,
  keywords = GLOBAL_KEYWORDS,
}: {
  key: keyof typeof slugMap;
  locale: Locale;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const canonicalPath = localizedHref(key, locale) ?? "/";
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const languages: Record<string, string> = {};
  ALL_LOCALES.forEach((l) => {
    const href = localizedHref(key, l);
    if (href) languages[HREFLANG_CODE[l]] = `${SITE_URL}${href}`;
  });

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Ideal Home Health",
      locale: ogLocale(locale),
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/**
 * Same as buildMetadata but for a condition detail page, keyed by the
 * canonical EN slug (e.g. "individualized-care"). Locales with no
 * translation (diabetes/stroke in ES, all 13 in AR) are simply omitted
 * from hreflang rather than pointing at a non-existent page.
 */
export function buildConditionMetadata({
  enSlug,
  locale,
  title,
  description,
  keywords = GLOBAL_KEYWORDS,
}: {
  enSlug: keyof typeof conditionSlugMap;
  locale: Locale;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const canonicalPath = localizedConditionHref(enSlug, locale) ?? `/conditions/${enSlug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const languages: Record<string, string> = {};
  ALL_LOCALES.forEach((l) => {
    const href = localizedConditionHref(enSlug, l);
    if (href) languages[HREFLANG_CODE[l]] = `${SITE_URL}${href}`;
  });

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Ideal Home Health",
      locale: ogLocale(locale),
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
