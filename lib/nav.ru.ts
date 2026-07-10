// Real Russian page titles from the WordPress export, assembled into a nav
// structure (same pattern used for the English nav). Only includes items
// that actually have Russian pages — Locations, Resources, Benefits, and
// FAQ never had Russian translations on the original site, so they're
// omitted here rather than linking to English pages from a Russian menu.
export const navRu = [
  {
    label: "О нас",
    href: "/ru/about-us",
    children: [{ label: "Свидетельства и отзывы", href: "/ru/about-us/testimonials-reviews" }],
  },
  {
    label: "Обслуживание",
    href: "/ru/services",
    children: [
      { label: "Помощники по уходу на дому (Хоуматенды)", href: "/ru/services/home-health-aide" },
      { label: "Медбратья и медсестра", href: "/ru/services/visiting-home-nurse" },
      { label: "Условия", href: "/ru/services/conditions" },
      { label: "Как зарегестрироваться", href: "/ru/how-to-enroll" },
    ],
  },
  { label: "Льготы", href: "/ru/home-care-benefits" },
  {
    label: "Карьера",
    href: "/ru/careers",
    children: [{ label: "Станьте сиделкой", href: "/ru/careers/how-it-works-caregivers" }],
  },
  { label: "Свяжитесь с нами", href: "/ru/contact-us" },
];

export const siteRu = {
  name: "Ideal Home Health",
  phone: "(718) 517-2424",
  phoneHref: "tel:+17185172424",
  foundedYear: 2013,
  enrollButtonLabel: "Зарегистрироваться сейчас",
  enrollHref: "/ru/enroll-now",
};
