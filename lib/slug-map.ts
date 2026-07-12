// Real EN -> RU -> ES path mapping, verified against the live WordPress
// site's sitemap hreflang alternates (page-sitemap.xml, conditions-sitemap.xml)
// and cross-checked against each page's own language-switcher links.
// `null` means that locale has no real translated page for this route
// (confirmed on the live site, not just assumed).
//
// Key = canonical route key (matches the /en/ path minus locale prefix,
// using the *content* slug even where the live EN URL has a legacy suffix
// like "contact-us-2" — see contactUs below).
//
// IMPORTANT: RU is almost entirely English slugs on the live site — only
// two top-level pages and the condition detail pages are actually Cyrillic.
// Do not assume a page needs translating just because it "should" have one.

export type SlugEntry = {
  en: string; // path after /, e.g. "home-care-benefits"
  ru: string | null;
  es: string | null;
};

export const slugMap: Record<string, SlugEntry> = {
  home: { en: "", ru: "", es: "" },
  aboutUs: { en: "about-us", ru: "about-us", es: "about-us" },
  testimonials: {
    en: "about-us/testimonials-reviews",
    ru: "about-us/testimonials-reviews",
    es: "about-us/testimonials-reviews",
  },
  services: { en: "services", ru: "services", es: "services" },
  homeHealthAide: {
    en: "services/home-health-aide",
    ru: "services/home-health-aide",
    es: "services/home-health-aide",
  },
  visitingHomeNurse: {
    en: "services/visiting-home-nurse",
    ru: "services/visiting-home-nurse",
    es: "services/visiting-home-nurse",
  },
  conditionsOverview: {
    en: "services/conditions",
    ru: "services/conditions",
    es: "services/conditions",
  },
  howToEnroll: { en: "how-to-enroll", ru: "how-to-enroll", es: "how-to-enroll" },
  // RU: real Cyrillic slug. ES: same as EN (confirmed, not translated).
  homeCareBenefits: {
    en: "home-care-benefits",
    ru: "льготы-по-уходу-на-дому",
    es: "home-care-benefits",
  },
  // RU/ES: real slug is "careers" / "carreras" respectively (top-level open
  // positions page), not a suffixed variant.
  careers: { en: "careers", ru: "careers", es: "carreras" },
  becomeACaregiver: {
    en: "careers/how-it-works-caregivers",
    ru: "careers/become-a-caregiver",
    es: "carreras/convertirse-en-un-cuidador-de-ideal-home-health",
  },
  // Live WP URL for this page is "/contact-us-2/" (a WP artifact from a
  // page-recreation); the Next app's internal route is the clean
  // "/contact-us" (see app/(en)/contact-us), which is what RU/ES also use.
  contactUs: { en: "contact-us", ru: "contact-us", es: "contact-us" },
  enrollNow: { en: "enroll-now", ru: "enroll-now", es: "enroll-now" },
};

// Condition detail pages: EN slug -> { ru, es } (null = no translation
// exists on the live site for that locale).
export const conditionSlugMap: Record<string, { ru: string | null; es: string | null }> = {
  "individualized-care": { ru: "индивидуальный-уход", es: "cuidado-individualizado" },
  "wheel-chair-bed-bound-support": {
    ru: "опора-для-инвалидного-кресла-кровати",
    es: "apoyo-al-paciente-en-silla-de-ruedas-encamado",
  },
  "post-hospital-care": { ru: "постбольничный-уход", es: "atencion-poshospitalaria" },
  "live-in-24-hour-care": { ru: "уход-и-забота-24-7", es: "cuidado-residiendo-las-24-horas" },
  "lifting-and-transferring": {
    ru: "поможем-поднять-и-перенести",
    es: "evantamiento-y-transferencia",
  },
  arthritis: { ru: "артрит", es: "artritis" },
  parkinsons: { ru: "parkinsons", es: "parkinsons" }, // untranslated in source, both locales
  "help-with-daily-tasks": {
    ru: "помощь-с-ежедневной-рутиной-2",
    es: "ayuda-con-las-tareas-diarias",
  },
  "fall-prevention": { ru: "предотвращение-падений", es: "prevencion-de-caidas" },
  epilepsy: { ru: "эпилепсия", es: "epilepsia" },
  "alzheimers-dementia": { ru: "alzheimers-dementia", es: "alzheimers-dementia" }, // untranslated, both locales
  stroke: { ru: "инсульт", es: null }, // no Spanish translation exists
  diabetes: { ru: "диабет", es: null }, // no Spanish translation exists
};

/** Build the real localized href for a page given its canonical route key and locale. */
export function localizedHref(key: keyof typeof slugMap, locale: "en" | "ru" | "es"): string | null {
  const entry = slugMap[key];
  if (!entry) return null;
  const path = entry[locale];
  if (path === null) return null;
  const prefix = locale === "en" ? "" : `/${locale}`;
  return path ? `${prefix}/${path}` : prefix || "/";
}

/** Build the real localized href for a condition detail page given its EN slug. */
export function localizedConditionHref(enSlug: string, locale: "en" | "ru" | "es"): string | null {
  if (locale === "en") return `/conditions/${enSlug}`;
  const entry = conditionSlugMap[enSlug];
  if (!entry) return null;
  const translated = entry[locale];
  if (translated === null) return null;
  return `/${locale}/conditions/${translated}`;
}
