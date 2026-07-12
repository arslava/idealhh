// Spanish homepage content, extracted verbatim from the WordPress export
// (post_name: es-home-page) and cross-checked word-for-word against the
// live page. Several fields are genuinely in English in the source, even
// on the Spanish page — kept verbatim rather than translated, exactly as
// confirmed by the live fetch.

export const esReviewsSection = {
  // Literally in English in the source, even on the Spanish page.
  title: "What Our Clients Say: Trusted Home Care in New York",
  reviews: [
    { name: "Sherice Carraway", date: "2022-10-26", rating: 5, content: "Esta es la mejor agencia hasta ahora y estoy orgulloso de haberlos elegido y de seguir trabajando con ellos por un tiempo" },
    { name: "Nadine Douse", date: "2023-04-24", rating: 5, content: "El personal con el que me he encontrado es excelente. Si ayudar a las personas es tu vocación, esta es la empresa ideal para trabajar." },
    { name: "Denise Hammonds", date: "2024-01-22", rating: 5, content: "Ideal Home Health es lo mejor 💯.. Nunca había estado con una agencia tan amable y agradable.. Todas las damas trabajan muy bien, pero debo mencionar a dos: Yulliana y la señora Paula.. Ella tomó el toro por los cuernos y lo manejó hasta el final.. Y durante todo ese tiempo, tanto ella como Yulliana se comunicaban conmigo sobre el estado de todo.. Lo que entendí es que me aseguraron que todo iba a estar genial 👍🏾… Son magníficas en lo que hacen y nuevamente quiero darles las gracias de todo corazón… Hermosas damas 🤗" },
    { name: "Dachira Rivera Ramos", date: "2024-02-15", rating: 5, content: "(Traducido por Google) Muy atentos y serviciales, buen cuidado y equipo.\n\n(Original)\n\nMuy atentos y servicial, un buen cuidado y equipo." },
    { name: "Youssef Elhalaby", date: "2024-04-26", rating: 5, content: "Grandes personas, comprometidas, muy respetuosas, responden a todas las preguntas en un inglés muy sencillo, claro y comprensible, hacen seguimiento de cada actividad y ayudan a encontrar soluciones y opciones para cualquier problema o dificultad que puedas enfrentar. Agradecido y un especial agradecimiento a Rosemary, Annabil y Emily." },
    { name: "Shelby González", date: "2024-05-25", rating: 5, content: "Mi experiencia fue excelente. A veces soy procrastinador, pero ellos me acompañaron y me ayudaron en todo el proceso." },
    { name: "Racquel McDonald", date: "2024-08-10", rating: 5, content: "Ideal Home Health es la mejor agencia con la que he trabajado. Son muy profesionales, siempre contestan cuando llamas y ayudan con lo que necesites. Siempre pagan a tiempo, son los mejores y estoy feliz de trabajar con ellos ❤️." },
    { name: "Lorraine Mullen", date: "2024-08-13", rating: 5, content: "Todos en Ideal han sido muy pacientes, atentos, serviciales, amables, conocedores, informativos y dispuestos a ayudarme a integrarme en el programa. Emily, Paula y muchos empleados más hicieron un esfuerzo extra para asegurar que mi experiencia fuera fluida. Estoy verdaderamente agradecida." },
  ],
};

export const esHomePage = {
  hero: {
    // Highlight phrase genuinely is a literal substring of the title here
    // (unlike the Russian version, where it wasn't) — safe to render as a
    // real prefix/highlight split.
    titlePrefix: "La atención médica en el hogar ",
    highlight: "debe ser Ideal.",
    titleSuffix: "",
    description: "En Ideal Home Health, nos dedicamos a brindar atención profesional y compasiva y empleamos cuidadores de atención médica domiciliaria de la más alta calidad en Nueva York. Juntos, colaboramos para lograr su más alto nivel de independencia mientras le brindamos la mejor atención de calidad disponible, en la ubicación ideal - en casa.",
    primaryButton: { title: "Ver Servicios", href: "/es/services" },
    secondaryButton: { title: "Inscríbete hoy", href: "/es/enroll-now" },
  },
  heroImage: "/images/compassionate-home-health-care-services-nyc.jpg",
  servicesTeaser: [
    {
      title: "Asistentes de salud en el hogar",
      // Literally in English in the source.
      description: "Our Certified Home Health Aides offer compassionate personal care & daily living assistance. We empower independence in your NYC home.",
      button: { title: "Aprende más", href: "/es/services/home-health-aide" },
      icon: "heart",
    },
    {
      title: "Enfermera visitante a domicilio",
      // Literally in English in the source.
      description: "Our licensed Visiting Home Nurses provide skilled medical care at your New York City home, customizing plans for your needs.",
      button: { title: "Aprende más", href: "/es/services/visiting-home-nurse" },
      icon: "heart-pulse",
    },
  ],
  // Title and items are literally in English in the source.
  whoBenefits: {
    label: "Ideal Home Health",
    title: "Who Benefits from Ideal Home Health Care in NYC?",
    items: [
      "Seniors seeking independent living assistance",
      "Individuals recovering from surgery or illness",
      "Patients with chronic conditions (e.g., stroke, diabetes care at home)",
      "Families needing respite care",
    ],
    button: { title: "Enroll Now", href: "/es/enroll-now" },
    image: "/images/home-health-care-in-nyc.jpg",
  },
  // Title is literally in English in the source; description is Spanish.
  customPlans: {
    label: "Ideal Home Health",
    title: "Personalized Home Care in New York: Your Unique Needs, Our Custom Plans",
    description: "Nos especializamos en una variedad de condiciones y también ofrecemos modelos de atención personalizados que se adaptan al estilo de vida y las necesidades de su familia.",
    button: { title: "Vea nuestras Especialidades", href: "/es/services/conditions" },
    image: "/images/personalized-home-health-care-new-york.jpg",
  },
  // Title and description are literally in English in the source.
  locations: {
    label: "Ideal Home Health",
    title: "Ideal Home Health: Proudly Serving New York City's 5 Boroughs",
    description: "For caregiver and family convenience, our NYC offices are close to home. Our trained home care specialists at each location provide professional, efficient service throughout New York City, including Queens, Brooklyn, Manhattan, Staten Island, and the Bronx.",
    button: { title: "Póngase en contacto", href: "/es/contact-us" },
  },
  locationsImage: "/images/Daco_924160.png",
  locationCards: [
    { name: "Brooklyn", address: "2617 East 16th Street, Floor 2, Brooklyn, NY 11235", button: { title: "Brooklyn Services", href: "/locations/brooklyn" } },
    { name: "Bronx", address: "391 East 149th Street, Suite 515, Bronx, NY 10455", button: { title: "Bronx Services", href: "/locations/bronx" } },
  ],
  // Title, description, and button are literally in English in the source.
  careers: {
    label: "IDEAL HOME HEALTH",
    title: "Join Our Compassionate Home Health Care Team in New York",
    description: "Are you a dedicated and compassionate caregiver seeking a rewarding career in home health care in New York City? Ideal Home Health is actively seeking talented individuals to join our growing team. Discover a supportive environment where your passion for care truly makes a difference.",
    button: { title: "View Career Opportunities", href: "/es/careers" },
    image: "/images/join-ideal-home-health-care-nyc.jpg",
  },
  prefooterCta: {
    title: "¿Listo para aprender más y obtener la ayuda que necesita?",
    description: "Contáctenos hoy mismo para discutir un plan de cuidado personalizado y adecuado para su familia.",
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
  },
};
