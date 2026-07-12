// Real Traditional Chinese nav labels and slugs, confirmed directly from
// the live /zh-hant/ site (fetched, not guessed). Like AR, ZH-HANT keeps
// almost every slug identical to English — the one exception is Contact
// Us, which genuinely kept the "-2" suffix live (/zh-hant/contact-us-2/)
// instead of the clean "/contact-us" used elsewhere.
export const navZhHant = [
  {
    label: "關於我們",
    href: "/zh-hant/about-us",
    children: [
      { label: "關於我們", href: "/zh-hant/about-us" },
      { label: "推薦與評論", href: "/zh-hant/about-us/testimonials-reviews" },
    ],
  },
  {
    label: "服務",
    href: "/zh-hant/services",
    children: [
      // The zh-hant version of this page exists in WPML but is genuinely
      // empty (confirmed via live fetch, twice) — linking to the real
      // English page instead of a blank one.
      { label: "家庭護理員", href: "/services/home-health-aide" },
      { label: "到府護理師", href: "/zh-hant/services/visiting-home-nurse" },
      { label: "病況", href: "/zh-hant/services/conditions" },
      { label: "如何註冊", href: "/zh-hant/how-to-enroll" },
    ],
  },
  { label: "居家照護福利", href: "/zh-hant/home-care-benefits" },
  {
    label: "職業機會",
    href: "/zh-hant/careers",
    children: [
      { label: "成為看護人員", href: "/zh-hant/careers/how-it-works-caregivers" },
      // Live source has a second submenu item here genuinely still in
      // English ("Apply as a Caregiver") — kept verbatim; only the href
      // is fixed, since the source links to the un-prefixed
      // "/careers/#qualifyenroll" (missing /zh-hant/).
      { label: "Apply as a Caregiver", href: "/zh-hant/careers/#qualifyenroll" },
    ],
  },
  // Real live slug keeps the "-2" suffix (confirmed via nav on
  // /zh-hant/about-us/): /zh-hant/contact-us-2/, unlike locales that
  // normalized to "/contact-us".
  { label: "聯絡我們", href: "/zh-hant/contact-us-2" },
];

export const siteZhHant = {
  name: "Ideal Home Health",
  phone: "(718) 517-2424",
  phoneHref: "tel:+17185172424",
  foundedYear: 2013,
  enrollButtonLabel: "立即報名",
  enrollHref: "/zh-hant/enroll-now",
};
