// Real Arabic nav labels and slugs, confirmed directly from the live
// /ar/ site (fetched, not guessed). Unlike RU/ES, AR keeps almost every
// slug identical to English — the one exception is Contact Us, which
// genuinely kept the "-2" suffix live (/ar/contact-us-2/) instead of the
// clean "/contact-us" used elsewhere. CDPAP nav item (present on other
// locales' Services dropdown) not present in AR nav — nothing to drop here.
export const navAr = [
  {
    label: "معلومات عنا",
    href: "/ar/about-us",
    children: [
      { label: "معلومات عنا", href: "/ar/about-us" },
      { label: "الشهادات والمراجعات", href: "/ar/about-us/testimonials-reviews" },
    ],
  },
  {
    label: "الخدمات",
    href: "/ar/services",
    children: [
      { label: "مساعدو الصحة المنزلية", href: "/ar/services/home-health-aide" },
      { label: "ممرضة منزلية زائرة", href: "/ar/services/visiting-home-nurse" },
      { label: "الحالات", href: "/ar/services/conditions" },
      { label: "كيفية التسجيل", href: "/ar/how-to-enroll" },
    ],
  },
  { label: "مزايا الرعاية المنزلية", href: "/ar/home-care-benefits" },
  {
    label: "الوظائف",
    href: "/ar/careers",
    children: [
      { label: "كن مقدم رعاية", href: "/ar/careers/how-it-works-caregivers" },
      // Live source has a second submenu item here genuinely still in
      // English ("Apply as a Caregiver") — kept verbatim; only the href
      // is fixed, since the source links to the un-prefixed
      // "/careers/#qualifyenroll" (missing /ar/).
      { label: "Apply as a Caregiver", href: "/ar/careers/#qualifyenroll" },
    ],
  },
  // Real live slug keeps the "-2" suffix (confirmed via nav on
  // /ar/about-us/): /ar/contact-us-2/, unlike every other locale which
  // normalized to "/contact-us".
  { label: "اتصل بنا", href: "/ar/contact-us-2" },
];

export const siteAr = {
  name: "Ideal Home Health",
  phone: "(718) 517-2424",
  phoneHref: "tel:+17185172424",
  foundedYear: 2013,
  enrollButtonLabel: "سجل اليوم",
  enrollHref: "/ar/enroll-now",
};
