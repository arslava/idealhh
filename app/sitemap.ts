import type { MetadataRoute } from "next";
import {
  slugMap,
  conditionSlugMap,
  localizedHref,
  localizedConditionHref,
} from "@/lib/slug-map";
import { SITE_URL, HREFLANG_CODE, ALL_LOCALES } from "@/lib/metadata";

// Static-export-friendly sitemap: Next generates this into sitemap.xml at
// build time. Every URL and every hreflang alternate is pulled from
// slug-map.ts — the same source of truth LanguageSwitcher and
// buildMetadata()/buildConditionMetadata() already use — so nothing here
// can drift into a guessed or dead URL. Locales with no real translation
// for a given route (`null` in slug-map.ts) are simply omitted, not
// substituted with an English fallback, since a fallback URL under a
// foreign hreflang tag would be wrong.

// Regular (non-condition) pages: EN-only routes get priority left at the
// default; everything else is weighted lightly by how deep it sits.
function priorityFor(key: string): number {
  if (key === "home") return 1;
  if (["aboutUs", "services", "howToEnroll", "enrollNow", "contactUs", "careers"].includes(key)) return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Regular pages, one sitemap entry per locale that actually has a real
  // page for that route (slugMap value !== null).
  for (const key of Object.keys(slugMap) as (keyof typeof slugMap)[]) {
    for (const locale of ALL_LOCALES) {
      const path = localizedHref(key, locale);
      if (path === null) continue;

      const languages: Record<string, string> = {};
      for (const l of ALL_LOCALES) {
        const altPath = localizedHref(key, l);
        if (altPath !== null) languages[HREFLANG_CODE[l]] = `${SITE_URL}${altPath}`;
      }

      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified: now,
        changeFrequency: key === "blog" ? "weekly" : "monthly",
        priority: priorityFor(key),
        alternates: { languages },
      });
    }
  }

  // Condition detail pages: EN always exists; RU/ES/AR/ZH-HANT only when
  // conditionSlugMap has a real (non-null) slug for that locale.
  for (const enSlug of Object.keys(conditionSlugMap)) {
    for (const locale of ALL_LOCALES) {
      const path = localizedConditionHref(enSlug, locale);
      if (path === null) continue;

      const languages: Record<string, string> = {};
      for (const l of ALL_LOCALES) {
        const altPath = localizedConditionHref(enSlug, l);
        if (altPath !== null) languages[HREFLANG_CODE[l]] = `${SITE_URL}${altPath}`;
      }

      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
