// Real Spanish page titles and nav labels, confirmed directly from the live
// /es/ site (fetched, not just export data). CDPAP nav item ("CDPAP" under
// Servicio) dropped per standing rule.
//
// CORRECTED: routes now use the real live Spanish slugs (verified against
// page-sitemap.xml / conditions-sitemap.xml hreflang alternates), not the
// English-slug substitutes this file used previously. Most pages are
// untranslated slugs (about-us, services, etc. — confirmed on the live
// site), but careers/carreras and its sub-page are real Spanish slugs.
export const navEs = [
  {
    label: "Sobre Nosotros",
    href: "/es/about-us",
    children: [
      { label: "Sobre Nosotros", href: "/es/about-us" },
      { label: "Testimonios & Reseñas", href: "/es/about-us/testimonials-reviews" },
    ],
  },
  {
    label: "Servicio",
    href: "/es/services",
    children: [
      { label: "Condicion", href: "/es/services/conditions" },
      { label: "Asistentes de Salud en el Hogar", href: "/es/services/home-health-aide" },
      { label: "Enfermera Visitante a Domicilio", href: "/es/services/visiting-home-nurse" },
      { label: "Cómo Inscribirse", href: "/es/how-to-enroll" },
    ],
  },
  { label: "Prestaciones de asistencia a domicilio", href: "/es/home-care-benefits" },
  {
    label: "Trabajos",
    href: "/es/carreras",
    children: [
      { label: "Posiciones abiertas", href: "/es/carreras" },
      { label: "Proceso de contratación", href: "/es/carreras/convertirse-en-un-cuidador-de-ideal-home-health" },
    ],
  },
  { label: "Contáctenos", href: "/es/contact-us" },
];

export const siteEs = {
  name: "Ideal Home Health",
  phone: "(718) 517-2424",
  phoneHref: "tel:+17185172424",
  foundedYear: 2013,
  enrollButtonLabel: "Inscríbete hoy",
  enrollHref: "/es/enroll-now",
};
