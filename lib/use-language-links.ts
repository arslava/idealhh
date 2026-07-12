"use client";

import { usePathname } from "next/navigation";
import { slugMap, conditionSlugMap, LOCALE_SEGMENT, type SlugEntry, type Locale } from "@/lib/slug-map";

export const LOCALES: Locale[] = ["en", "ru", "es", "ar", "zhHant"];

// Reverse index: internal EN relPath -> its slugMap entry, built once.
// Lets us go from "the EN page currently open" to "what's the real
// RU/ES/AR/ZH-HANT URL for this same page" without assuming any slug
// string is shared.
const byEnPath: Record<string, SlugEntry> = Object.fromEntries(
  Object.values(slugMap).map((entry) => [entry.en, entry])
);

function pathFor(entry: SlugEntry | undefined, locale: Locale): string | null {
  if (!entry) return null;
  const value = entry[locale];
  if (value === null) return null;
  const segment = LOCALE_SEGMENT[locale];
  const prefix = segment ? `/${segment}` : "";
  return value ? `${prefix}/${value}` : prefix || "/";
}

export function useLanguageLinks() {
  const pathname = usePathname() || "/";
  const current: Locale =
    LOCALES.find((l) => {
      if (l === "en") return false;
      const seg = LOCALE_SEGMENT[l];
      return pathname === `/${seg}` || pathname.startsWith(`/${seg}/`);
    }) ?? "en";

  const currentSegment = LOCALE_SEGMENT[current];
  const relPath =
    current === "en" ? pathname.replace(/^\//, "") : pathname.replace(new RegExp(`^/${currentSegment}/?`), "");

  // Is this a condition detail page? Its relPath under the current locale
  // uses that locale's own slug, so we first have to find the EN slug it
  // corresponds to before we can look up the other locales.
  const conditionMatch = relPath.match(/^conditions\/([^/]+)$/);
  let enSlug: string | null = null;
  if (conditionMatch) {
    const localSlug = conditionMatch[1];
    if (current === "en") {
      enSlug = localSlug;
    } else {
      const found = Object.entries(conditionSlugMap).find(([, v]) => v[current] === localSlug);
      enSlug = found ? found[0] : null;
    }
  }

  const hrefFor = (locale: Locale): string => {
    if (enSlug) {
      if (locale === "en") return `/conditions/${enSlug}`;
      const c = conditionSlugMap[enSlug];
      const translated = c?.[locale];
      const segment = LOCALE_SEGMENT[locale];
      return translated ? `/${segment}/conditions/${translated}` : `/${segment}/services/conditions`;
    }
    const enRelPath =
      current === "en"
        ? relPath
        : (() => {
            const found = Object.values(slugMap).find((e) => e[current] === relPath);
            return found?.en ?? null;
          })();
    const entry = enRelPath !== null ? byEnPath[enRelPath] : undefined;
    const segment = LOCALE_SEGMENT[locale];
    return pathFor(entry, locale) ?? (locale === "en" ? (relPath ? `/${relPath}` : "/") : `/${segment}`);
  };

  return {
    current,
    options: LOCALES.map((code) => ({ code, href: hrefFor(code) })),
  } as const;
}
