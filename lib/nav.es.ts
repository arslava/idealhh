// Real Spanish page titles and nav labels, confirmed directly from the live
// /es/ site (fetched, not just export data). CDPAP nav item ("CDPAP" under
// Servicio) dropped per standing rule. Internal routes use English slugs,
// matching the existing /ru/ and /en/ pattern (not the literal Spanish
// WordPress slugs like "/es/carreras/").
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
    href: "/es/careers",
    children: [
      { label: "Posiciones abiertas", href: "/es/careers" },
      { label: "Proceso de contratación", href: "/es/careers/how-it-works-caregivers" },
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
