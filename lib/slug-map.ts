// Real EN -> RU -> ES -> AR -> ZH-HANT path mapping, verified against the
// live WordPress site's sitemap hreflang alternates and cross-checked
// against each page's own language-switcher links. `null` means that
// locale has no real translated page for this route (confirmed on the
// live site, not just assumed).
//
// Key = canonical route key (matches the /en/ path minus locale prefix,
// using the *content* slug even where the live EN URL has a legacy suffix
// like "contact-us-2" — see contactUs below).
//
// IMPORTANT: RU is almost entirely English slugs on the live site — only
// two top-level pages and the condition detail pages are actually
// Cyrillic. AR and ZH-HANT are English slugs across the board except
// Contact Us, which both kept at the live "-2" suffix. Do not assume a
// page needs translating just because it "should" have one.

export type Locale = "en" | "ru" | "es" | "ar" | "zhHant";

// Locale code -> real URL path segment. Only zhHant differs from its own
// object key (the live site uses "/zh-hant/", which isn't a valid JS
// identifier on its own).
export const LOCALE_SEGMENT: Record<Locale, string> = {
  en: "", ru: "ru", es: "es", ar: "ar", zhHant: "zh-hant",
};

export type SlugEntry = {
  en: string; // path after /, e.g. "home-care-benefits"
  ru: string | null;
  es: string | null;
  ar: string | null;
  zhHant: string | null;
};

export const slugMap: Record<string, SlugEntry> = {
  home: { en: "", ru: "", es: "", ar: "", zhHant: "" },
  aboutUs: { en: "about-us", ru: "about-us", es: "about-us", ar: "about-us", zhHant: "about-us" },
  testimonials: {
    en: "about-us/testimonials-reviews",
    ru: "about-us/testimonials-reviews",
    es: "about-us/testimonials-reviews",
    ar: "about-us/testimonials-reviews",
    zhHant: "about-us/testimonials-reviews",
  },
  services: { en: "services", ru: "services", es: "services", ar: "services", zhHant: "services" },
  // ZH-HANT's home-health-aide page exists in WPML (correct zh_TW
  // metadata, nav highlights it) but its body content is genuinely empty
  // — confirmed via two separate live fetches, not a fetch glitch. Set to
  // null so hreflang/switcher correctly fall back to the real English
  // page instead of linking to a blank one.
  homeHealthAide: {
    en: "services/home-health-aide",
    ru: "services/home-health-aide",
    es: "services/home-health-aide",
    ar: "services/home-health-aide",
    zhHant: null,
  },
  visitingHomeNurse: {
    en: "services/visiting-home-nurse",
    ru: "services/visiting-home-nurse",
    es: "services/visiting-home-nurse",
    ar: "services/visiting-home-nurse",
    zhHant: "services/visiting-home-nurse",
  },
  conditionsOverview: {
    en: "services/conditions",
    ru: "services/conditions",
    es: "services/conditions",
    ar: "services/conditions",
    zhHant: "services/conditions",
  },
  howToEnroll: { en: "how-to-enroll", ru: "how-to-enroll", es: "how-to-enroll", ar: "how-to-enroll", zhHant: "how-to-enroll" },
  // RU: real Cyrillic slug. ES/AR/ZH-HANT: same as EN (confirmed, not translated).
  homeCareBenefits: {
    en: "home-care-benefits",
    ru: "льготы-по-уходу-на-дому",
    es: "home-care-benefits",
    ar: "home-care-benefits",
    zhHant: "home-care-benefits",
  },
  // RU/ES: real slug is "careers" / "carreras" respectively (top-level open
  // positions page). AR/ZH-HANT keep the English "careers" slug, confirmed
  // via live nav (not a suffixed/translated variant).
  careers: { en: "careers", ru: "careers", es: "carreras", ar: "careers", zhHant: "careers" },
  becomeACaregiver: {
    en: "careers/how-it-works-caregivers",
    ru: "careers/become-a-caregiver",
    es: "carreras/convertirse-en-un-cuidador-de-ideal-home-health",
    // AR/ZH-HANT keep the English slug too, unlike RU/ES — confirmed via live nav.
    ar: "careers/how-it-works-caregivers",
    zhHant: "careers/how-it-works-caregivers",
  },
  // Live WP URL for this page is "/contact-us-2/" (a WP artifact from a
  // page-recreation); the Next app's internal route is the clean
  // "/contact-us" (see app/(en)/contact-us), which is what RU/ES also use.
  // AR and ZH-HANT are the two locales that actually kept the "-2" suffix
  // on the live site (confirmed via live nav) — real per-locale quirk,
  // not a mistake on our part.
  contactUs: { en: "contact-us", ru: "contact-us", es: "contact-us", ar: "contact-us-2", zhHant: "contact-us-2" },
  enrollNow: { en: "enroll-now", ru: "enroll-now", es: "enroll-now", ar: "enroll-now", zhHant: "enroll-now" },
  // EN-only pages — no RU, ES, AR, or ZH-HANT equivalent exists on the live site.
  blog: { en: "blog", ru: null, es: null, ar: null, zhHant: null },
  legal: { en: "legal", ru: null, es: null, ar: null, zhHant: null },
  privacyPolicy: { en: "privacy-policy", ru: null, es: null, ar: null, zhHant: null },
  tos: { en: "tos", ru: null, es: null, ar: null, zhHant: null },
  locationsIndex: { en: "locations", ru: null, es: null, ar: null, zhHant: null },
  locationBrooklyn: { en: "locations/brooklyn", ru: null, es: null, ar: null, zhHant: null },
  locationBronx: { en: "locations/bronx", ru: null, es: null, ar: null, zhHant: null },
  resourcesIndex: { en: "resources", ru: null, es: null, ar: null, zhHant: null },
  faq: { en: "resources/faq", ru: null, es: null, ar: null, zhHant: null },
  hhaResources: { en: "resources/home-health-aide-resources", ru: null, es: null, ar: null, zhHant: null },
  traditionalCareResources: { en: "resources/traditional-care-patient-resources", ru: null, es: null, ar: null, zhHant: null },
};

// Condition detail pages: EN slug -> { ru, es, ar, zhHant } (null = no
// translation exists on the live site for that locale). AR and ZH-HANT
// are both null across the board — their conditions overview pages link
// to /{locale}/conditions/{slug} for all 13 as if translations existed,
// but spot-checking 3 AR conditions (diabetes, individualized-care,
// arthritis) and 1 ZH-HANT condition (diabetes) showed every one silently
// serves English content (og:locale: en_US, canonical pointing at the
// English URL, language switcher not even offering a translated link) —
// no real Arabic or Traditional Chinese condition page exists on the live
// site despite both overview pages' card blurbs being translated.
export const conditionSlugMap: Record<string, { ru: string | null; es: string | null; ar: string | null; zhHant: string | null }> = {
  "individualized-care": { ru: "индивидуальный-уход", es: "cuidado-individualizado", ar: null, zhHant: null },
  "wheel-chair-bed-bound-support": {
    ru: "опора-для-инвалидного-кресла-кровати",
    es: "apoyo-al-paciente-en-silla-de-ruedas-encamado",
    ar: null,
    zhHant: null,
  },
  "post-hospital-care": { ru: "постбольничный-уход", es: "atencion-poshospitalaria", ar: null, zhHant: null },
  "live-in-24-hour-care": { ru: "уход-и-забота-24-7", es: "cuidado-residiendo-las-24-horas", ar: null, zhHant: null },
  "lifting-and-transferring": {
    ru: "поможем-поднять-и-перенести",
    es: "evantamiento-y-transferencia",
    ar: null,
    zhHant: null,
  },
  arthritis: { ru: "артрит", es: "artritis", ar: null, zhHant: null },
  parkinsons: { ru: "parkinsons", es: "parkinsons", ar: null, zhHant: null }, // untranslated in source, all locales
  "help-with-daily-tasks": {
    ru: "помощь-с-ежедневной-рутиной-2",
    es: "ayuda-con-las-tareas-diarias",
    ar: null,
    zhHant: null,
  },
  "fall-prevention": { ru: "предотвращение-падений", es: "prevencion-de-caidas", ar: null, zhHant: null },
  epilepsy: { ru: "эпилепсия", es: "epilepsia", ar: null, zhHant: null },
  "alzheimers-dementia": { ru: "alzheimers-dementia", es: "alzheimers-dementia", ar: null, zhHant: null }, // untranslated
  stroke: { ru: "инсульт", es: null, ar: null, zhHant: null }, // no Spanish translation exists
  diabetes: { ru: "диабет", es: null, ar: null, zhHant: null }, // no Spanish translation exists
};

/** Build the real localized href for a page given its canonical route key and locale. */
export function localizedHref(key: keyof typeof slugMap, locale: Locale): string | null {
  const entry = slugMap[key];
  if (!entry) return null;
  const path = entry[locale];
  if (path === null) return null;
  const segment = LOCALE_SEGMENT[locale];
  const prefix = segment ? `/${segment}` : "";
  return path ? `${prefix}/${path}` : prefix || "/";
}

/** Build the real localized href for a condition detail page given its EN slug. */
export function localizedConditionHref(enSlug: string, locale: Locale): string | null {
  if (locale === "en") return `/conditions/${enSlug}`;
  const entry = conditionSlugMap[enSlug];
  if (!entry) return null;
  const translated = entry[locale];
  if (translated === null) return null;
  return `/${LOCALE_SEGMENT[locale]}/conditions/${translated}`;
}
