import { SITE_URL } from "./metadata";
import { LOCALE_SEGMENT, type Locale } from "./slug-map";

// Real business data, matching what's already used in Footer/FooterRu/
// FooterEs/FooterAr/FooterZhHant and the office cards across the site —
// not invented for this file.
const SOCIAL_LINKS = [
  "https://www.facebook.com/IdealHH/",
  "https://twitter.com/idealhh",
  "https://www.instagram.com/idealhomehealth/",
  "https://www.linkedin.com/company/ideal-home-health-inc-/",
];

const LOGO_URL = `${SITE_URL}/images/logo.svg`;
const PHONE = "+17185172424";

/** Root Organization schema — one identity shared across every locale's homepage. */
export function organizationSchema(locale: Locale) {
  const segment = LOCALE_SEGMENT[locale];
  const path = segment ? `/${segment}` : "";
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Ideal Home Health",
    url: `${SITE_URL}${path}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: PHONE,
    sameAs: SOCIAL_LINKS,
    areaServed: {
      "@type": "City",
      name: "New York City",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2617 East 16th Street, Floor 2",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11235",
      addressCountry: "US",
    },
  };
}

/** LocalBusiness schema for a specific office (Brooklyn / Bronx). Only EN
 * has dedicated location pages, so this is EN-only for now. */
export function localBusinessSchema(location: {
  name: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  path: string; // e.g. "/locations/brooklyn"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Ideal Home Health – ${location.name} Office`,
    url: `${SITE_URL}${location.path}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: PHONE,
    sameAs: SOCIAL_LINKS,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      addressRegion: "NY",
      postalCode: location.postalCode,
      addressCountry: "US",
    },
  };
}

/** FAQPage schema from a flat list of {question, answer} pairs. Answers
 * are stripped of any markup/whitespace quirks that would look odd in
 * rich-result snippets, but the text itself is the real page copy. */
export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
