// Real Russian page titles and nav_menu_item labels from the WordPress
// export (post_type nav_menu_item, matched by _menu_item_object_id to the
// actual Russian page IDs — not guessed or reused from the English nav).
// CDPAP nav item (obj id 1433, "CDPAP" menu label) dropped per standing rule.
export const navRu = [
  {
    label: "О нас",
    href: "/ru/about-us",
    children: [
      { label: "О нас", href: "/ru/about-us" },
      { label: "Свидетельства и отзывы", href: "/ru/about-us/testimonials-reviews" },
    ],
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
  // Was "Льготы" — real nav_menu_item label is "Льготы по уходу".
  // Real live slug is Cyrillic: /ru/льготы-по-уходу-на-дому/ (was wrongly
  // using the English "/ru/home-care-benefits" slug).
  { label: "Льготы по уходу", href: "/ru/льготы-по-уходу-на-дому" },
  {
    // Was "Карьера" — real nav_menu_item label is "Вакансии".
    label: "Вакансии",
    href: "/ru/careers",
    children: [
      // Was "Станьте сиделкой" — real label is "Процесс найма".
      // Real live slug is /ru/careers/become-a-caregiver/ (was wrongly
      // reusing the English "how-it-works-caregivers" slug).
      { label: "Процесс найма", href: "/ru/careers/become-a-caregiver" },
      // Was missing — a second real submenu item ("Открытые позиции") that
      // links back to the careers page itself in the source.
      { label: "Открытые позиции", href: "/ru/careers" },
    ],
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
