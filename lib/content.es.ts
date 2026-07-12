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
    button: { title: "View Career Opportunities", href: "/es/carreras" },
    image: "/images/join-ideal-home-health-care-nyc.jpg",
  },
  prefooterCta: {
    title: "¿Listo para aprender más y obtener la ayuda que necesita?",
    description: "Contáctenos hoy mismo para discutir un plan de cuidado personalizado y adecuado para su familia.",
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
  },
};

// About Us — built from a live fetch of https://idealhh.com/es/about-us/,
// cross-checked structurally against the already-verified EN/RU About Us
// pages (same shared images, same 4-slide language carousel quirk).
export const esAboutUsPage = {
  hero: {
    title: "Acerca de Ideal Home Health",
    subtitle: "Cuidado domiciliario compasivo en la ciudad de Nueva York",
    description:
      "En Ideal Home Health, creemos que su familia es nuestra familia. Fundada en 2013, nos propusimos revitalizar el sector del cuidado domiciliario en Nueva York centrándonos en el servicio al cliente, la comunicación y la eficiencia. Como agencia líder de atención domiciliaria en la ciudad de Nueva York, nos dedicamos a contratar cuidadores apasionados por mejorar su calidad de vida y potenciar su independencia.",
    image: "/images/trusted-home-care-agency-new-york-city.jpg",
    buttons: [
      { title: "Ver servicios", href: "/es/services" },
      { title: "Inscríbase hoy mismo", href: "/es/enroll-now" },
    ],
  },
  mission: {
    label: "IDEAL HOME HEALTH",
    title: "Nuestra misión y valores fundamentales",
    description:
      "Nuestra misión es proporcionar un nivel excepcional de atención compasiva que empodere a cada persona a la que atendemos. Esta misión se rige por nuestros valores fundamentales: la profunda convicción de que su familia es nuestra familia, un compromiso inquebrantable con la comunicación y la eficiencia, y la promesa de actuar siempre con integridad. Al defender estos valores, garantizamos un nivel de atención superior que no solo satisface sus necesidades físicas, sino que también favorece su bienestar emocional y social.",
    image: "/images/compassionate-in-home-care-nyc.jpg",
    button: { title: "Lo que dicen los demás", href: "/es/about-us/testimonials-reviews" },
  },
  areasServed: {
    label: "áreas atendidas",
    title: "Prestamos servicio a todos los distritos y condados de la ciudad de Nueva York.",
    description:
      "Comenzando en el sótano de uno de los socios y fundadores, Ideal Home Health comenzó como una compañía de cuatro personas con sede en Brooklyn. En tan solo 5 años, ha crecido a ser una comunidad de más de 1500 personas alrededor de los cinco municipios de la ciudad de Nueva York.\n\nAdemás de proveer servicios de salud en el hogar, Ideal Home Health se ha asociado con docenas de centros comunitarios, instalaciones para personas de la tercera edad, bancos de alimentos, organizaciones benéficas y organizaciones comunitarias para seguir teniendo un impacto positivo en nuestros vecindarios en la cuidad de Nueva York.",
    image: "/images/Daco_924160.png",
    // Live page links to "/es/contact-us-2/" here, but that's a dead legacy
    // slug even in the source nav (nav itself uses "/es/contact-us/") — routing
    // to the real canonical page instead of reproducing the source's broken link.
    button: { title: "Póngase en contacto con nosotros", href: "/es/contact-us" },
  },
  // Phone line kept as raw text per card — the live source mixes English
  // "Phone:" (Brooklyn card) and Spanish "Teléfono:" (Bronx card), a
  // copy-paste inconsistency preserved verbatim rather than normalized.
  officeCards: [
    {
      title: "Brooklyn",
      subtitle: "Ideal Home Health – Brooklyn Office",
      address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US",
      phoneLine: "Phone: (718) 517 – 2424",
      button: { title: "Más información", href: "/es/locations/brooklyn" },
    },
    {
      title: "Bronx",
      subtitle: "Ideal Home Health – Oficina del Bronx",
      address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, EE. UU.",
      phoneLine: "Teléfono: (718) 517 – 2424",
      button: { title: "Más información", href: "/es/locations/bronx" },
    },
  ],
  // 4-slide multilingual carousel — same genuine quirk as EN/RU (slides are
  // shown in their original languages regardless of page locale, confirmed
  // present on the live /es/ page too, not just copied from EN/RU).
  languages: [
    { title: "Your language and cultural needs are our priority", description: "We speak your language and understand you and your families cultural needs and preferences.", button: { title: "Enroll Today!", href: "/es/enroll-now" } },
    { title: "Язык на котором вы говорите и ваши культурные ценности у нас в приоритете", description: "Мы говорим на вашем языке и понимаем вас и ваши культурные ценности и предпочтения.", button: { title: "Enroll Today!", href: "/es/enroll-now" } },
    { title: "Sus necesidades de idioma y cultura son nuestra prioridad", description: "Hablamos su idioma y entendemos sus necesidades y preferencias culturales al igual que la de sus familiares.", button: { title: "Enroll Today!", href: "/es/enroll-now" } },
    { title: "您的语言和文化需求是我们的首要任务", description: "我们说您的语言，并了解您和您的家人的文化需求和喜好。", button: { title: "Enroll Today!", href: "/es/enroll-now" } },
  ],
  statistics: [
    { topTitle: "Hemos ayudado a", featureTopText: "5,000+", featureText: "Pacientes y cuidadores", description: "Desde que comenzó Ideal Home Health." },
    { topTitle: "Prestamos servicio", featureTopText: "Pacientes de", featureText: "muchas religiones", description: "incluyendo católicos, cristianos, musulmánes, hindús, budistas, adventistas, testigo de Jehová, judíos y más." },
    // "hablar tu idioma" (uninflected infinitive rather than "que hablan tu
    // idioma") is how it reads in the source — kept as-is, not corrected.
    { topTitle: "Tenemos", featureTopText: "Cuidadores que", featureText: "hablar tu idioma", description: "con más de 34 idiomas hablados por nuestros cuidadores." },
    { topTitle: "En Ideal Home Health", featureTopText: "Entendemos", featureText: "sus necesidades culturales", description: "atendiendo a pacientes de más de 46 países." },
  ],
  prefooterCta: {
    title: "¿Tienes alguna pregunta?",
    description: "Nuestros representantes están a su disposición para responder cualquier pregunta que tenga.",
    button: { title: "Póngase en contacto con nosotros", href: "/es/contact-us" },
    image: "/images/registered-home-nurse-nyc.jpg",
  },
};

// Testimonials & Reviews — built from a live fetch of
// https://idealhh.com/es/about-us/testimonials-reviews/.
export const esTestimonialsPage = {
  hero: {
    title: "Testimonios & Reseñas",
    description: "Nos enorgullecemos de tener cuidadores, pacientes y familias alegres.",
    // Genuinely untranslated in the source — a second, English-only
    // heading that also matches the page's English meta description.
    // Kept verbatim rather than translated.
    secondaryHeading: "Companionship in Brooklyn, New York",
  },
  testimonialsLabel: "Lo que dicen los demás",
  testimonials: [
    { author: "Tayshia B.", role: "Cuidadora", rating: 5, content: "He estado empleada en Ideal Home Health durante los últimos dos años. Aprecio el tiempo y los esfuerzos de sus coordinadores de oficina que, en mi opinión, van más allá para asegurarse de que mantenga mi documentación y capacitación al día. El pago también es uno de los más altos que he recibido, y estoy agradecida de trabajar aquí.", image: "/images/pexels-tarzine-jackson.jpg" },
    { author: "Liz P", role: "Paciente", rating: 5, content: "Gracias. Estoy tan feliz de tener la ayuda. Mi asistente me ayuda con mi medicina y me ayuda a arreglarme el cabello por la mañana. Estoy feliz cuando puedo ver a mis nietos y ella mantiene todo ordenado ya que yo no puedo hacerlo. Sarah es muy amable, realmente, realmente aprecio la ayuda.", image: "/images/iStock-1138669982.jpg" },
    { author: "Joseph A.", role: "Miembro de la familia", rating: 5, content: "Después de mudarme de Nueva York, cuidar de mi madre se volvió muy estresante para mi hermana y para mí. Tener un asistente nos ayuda a saber que está segura cuando no podemos estar allí. Hemos tenido una experiencia increíble trabajando con Ideal Home Health, son profesionales y hicieron que el proceso fuera fácil.", image: "/images/iStock-1089410668.jpg" },
  ],
  reviewsLabel: "Reseñas",
  // Reviews are genuinely in English in the source even on this Spanish
  // page — only the reviewer's location is translated ("Nueva York"
  // instead of "NY"). Preserved verbatim, not translated.
  reviews: [
    { rating: 5, name: "Jessica P.", location: "Brooklyn, Nueva York", review: "I was able to register my father in law for an aide very quickly, we were all setup within about a week. Ideal HH staff were great to work with, and the office is 15 minutes from my apartment which was convenient. Overall great service, I highly recommend them if you need a home aide." },
    { rating: 4, name: "Irsal M.", location: "Bronx, Nueva York", review: "The pay is very good and they accommodate my time off for religious holidays. I had some challenges with my paperwork to register but overall it has been a good experience and I plan to continue working for Ideal Home Health." },
    { rating: 5, name: "Jordan H.", location: "Queens, Nueva York", review: "We needed a caregiver for a special case, my father has dementia in addition to his diabetes and lack of mobiilty. Ideal Home Health took the time to discuss all the details of his care requirements, and overall we're extremely happy with the level of care he's receiving. While it's difficult to tell, I believe my father is happier now and I'm relieved to know he's safe everyday." },
    { rating: 5, name: "John K.", location: "Bronx, Nueva York", review: "Great company. Makes the whole process simple, we were registered and had care quickly, the whole thing was very easy." },
  ],
  prefooterCta: {
    title: "¿Listo para aprender más y obtener la ayuda que necesita?",
    description: "Contáctenos hoy para discutir las necesidades únicas de su familia.",
    // Live source links to "https://idealhh.com/enroll-now/" (missing the
    // /es/ prefix — a dead link even in the source); routed to the real
    // Spanish page instead of reproducing the broken link.
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg",
  },
};

// Services overview — built from a live fetch of https://idealhh.com/es/services/.
// CDPAP card (present in source, between HHA and Visiting Nurse, linking to
// idealcdpap.com) dropped per standing rule, matching EN.
export const esServicesPage = {
  hero: {
    title: "Contamos con especialistas que pueden ayudarle con sus necesidades individuales.",
    description: "Nuestras enfermeras, cuidadores y profesionales de atención especializada, están altamente entrenados y están disponibles para ayudar con cualquier necesidad, grande o pequeña.",
    // Live source links to non-localized "/contact-us/" and "/enroll-now/"
    // (missing the /es/ prefix — dead links even in the source); routed to
    // the real Spanish pages instead of reproducing the broken links.
    primaryButton: { title: "Contáctenos", href: "/es/contact-us" },
    secondaryButton: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    // Not confirmed via live fetch (no <img> visible near the hero text in
    // the fetched markdown — likely a background-image the fetch doesn't
    // surface). Reusing the shared EN asset as the best-available default;
    // flag for screenshot verification.
    image: "/images/home-health-care-services-new-york-city.jpg",
  },
  // Both cards are genuinely untranslated in the source (English title +
  // description, only the button label "Aprende más" is Spanish) — kept
  // verbatim. Note the HHA description differs slightly from the cached EN
  // copy ("rigorous bi-annual training" vs "continuous training") — this is
  // what's live on the ES page right now, preserved as found rather than
  // reconciled to the EN copy.
  services: [
    {
      title: "Home Health Aides – HHA: Essential Daily Support",
      description: "Our Department of Health certified Home Health Aides (HHAs) offer compassionate assistance with Activities of Daily Living (ADLs). From personal care to medication reminders, our in-home aides in NYC help maintain independence. All HHAs receive rigorous bi-annual training, ensuring top safety standards.",
      button: { title: "Aprende más", href: "/es/services/home-health-aide" },
      // Not confirmed via live fetch — see hero.image note above.
      image: "/images/home-health-aides-new-york.jpg",
    },
    {
      title: "Visiting Home Nurse – Expert Skilled Nursing Care at Home",
      description: "Receive skilled nursing care in your New York City home with our licensed Visiting Home Nurses (RNs/LPNs). We offer medication management, wound care, post-operative support, chronic disease management, and more. Our nurses create custom plans of care for your optimal health and recovery.",
      button: { title: "Aprende más", href: "/es/services/visiting-home-nurse" },
      // Confirmed via live fetch — a different asset than the EN page uses
      // (EN: visiting-home-nurse-new-york.jpg), also used on the RU/ES
      // post-hospital-care condition pages, so a genuinely shared stock photo.
      image: "/images/shutterstock_1667840344.jpg",
    },
  ],
  whyChoose: {
    title: "Why Choose Ideal Home Health for Your NYC Home Care Needs?", // untranslated in source
    items: ["Accredited & Trusted", "Experienced & Compassionate Team", "Personalized & Flexible Plans", "Local NYC Expertise", "Seamless Enrollment"], // untranslated in source
    button: { title: "Enroll Now", href: "/es/enroll-now" }, // button label itself is untranslated too, but href is correctly localized in source
    // Confirmed via live fetch — a different (and thematically odd, CDPAP-ish
    // filename) asset than EN's choose-ideal-home-health-care-nyc.jpg. Kept
    // as found rather than substituted.
    image: "/images/you-can-hire-your-relative-to-care-for-you.jpg",
  },
  prefooterCta: {
    title: "¿Listo para aprender más y obtener la ayuda que necesita?",
    description: "Contáctenos hoy para discutir las necesidades únicas de su familia.",
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg",
  },
};

// Home Health Aide — built from a live fetch of
// https://idealhh.com/es/services/home-health-aide/. Fully translated
// (unlike the Services overview cards, which were untranslated).
export const esHomeHealthAidePage = {
  hero: {
    label: "Servicio",
    title: "Asistentes de salud en el hogar",
    // No separate subtitle line in the source for this page (unlike EN,
    // which has one) — the description follows the H1 directly.
    description: "Nuestros asistentes en el hogar son especialistas en su condición y necesidades diarias que están certificados por el Departamento de Salud. Todos nuestros asistentes certificados en el hogar reciben entrenamiento bi-anual en servicios críticos de seguridad que pueden salvar vidas.",
    // Not confirmed via live fetch (no <img> visible near hero text) —
    // reusing the shared EN asset as best-available default.
    image: "/images/certified-home-health-aides-nyc.jpg",
    // Live source links to non-localized "/enroll-now/" and "/contact-us/"
    // (missing /es/ prefix); routed to the real Spanish pages instead.
    primaryButton: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    secondaryButton: { title: "Contáctenos", href: "/es/contact-us" },
  },
  gettingCare: {
    title: "Reciba atención donde más lo desea, en casa.",
    highlight: "en casa",
    description: "Con Ideal Home Health, descanse tranquilo sabiendo que su ser querido está en casa con un profesional compasivo y calificado para ayudarlos.",
    // Not confirmed via live fetch — see hero.image note above.
    image: "/images/certified-home-health-aides-new-york.jpg",
  },
  howTheyHelp: {
    title: "Cómo ayudamos",
    // Intro sentence before the bullet list — present in the ES source but
    // not in the EN version of this page (EN goes straight from title to
    // bullets). Kept as its own field rather than dropped.
    intro: "Los asistentes de salud en el hogar de Ideal Home Health están especialmente capacitados para",
    items: [
      "Asistir con actividades diarias, incluyendo la preparación de alimentos",
      "Asistencia con las tareas domésticas y el cuidado personal y/o el mantenimiento de la higiene",
      "Monitoreo de los horarios de medicamentos",
      "Observar los síntomas indicados por su médico o plan de cuidado personalizado",
      "Promover la independencia y la actividad física dentro del hogar",
      "¡Proporcionar cuidado compasivo y promover el bienestar a través de la bondad, el trabajo en equipo y establecer metas para seguir viviendo su mejor vida!",
    ],
  },
  prefooterCta: {
    title: "¿Listo para aprender más y obtener la ayuda que necesita?",
    description: "Contáctenos hoy para discutir las necesidades únicas de su familia.",
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg",
  },
};

// Visiting Home Nurse — built from a live fetch of
// https://idealhh.com/es/services/visiting-home-nurse/. Fully translated,
// and (like the EN page) includes a 3-testimonial carousel using the same
// testimonials as the Testimonials & Reviews page — reuse that array
// rather than duplicating the Spanish quotes a second time.
export const esVisitingHomeNursePage = {
  hero: {
    label: "Servicio",
    title: "Enfermera visitante a domicilio",
    // No separate subtitle line in the source (same as Home Health Aide ES page).
    description: "Nuestras enfermeras registradas van a monitorear y evaluar sus necesidades y condiciones para crear un plan de cuidado personalizado para usted.",
    // Confirmed via live fetch — same shared shutterstock asset used on the
    // Services overview page's Visiting Nurse card.
    image: "/images/shutterstock_1667840344.jpg",
    buttons: [
      { title: "Inscríbete hoy", href: "/es/enroll-now" },
      { title: "Contáctenos", href: "/es/contact-us" },
    ],
  },
  bullets: {
    title: "Un alto nivel de atención de una enfermera con licencia registrada.",
    highlight: "una enfermera con licencia registrada.",
    listTitle: "Enfermeras Calificadas de Ideal Home Health",
    listDescription: "Nuestros profesionales de la salud con licencia pueden",
    items: [
      "Trabajar con usted para desarrollar un plan de atención basado en las recomendaciones de su médico, sus preferencias personales y su estilo de vida",
      "Siga las instrucciones de atención médica según las indicaciones de su médico",
      "Seguimiento de los signos vitales y el equipo médico",
      "Manejar el horario de los medicamentos y controlar los síntomas",
      "Cuidado post-operatorio y de heridas",
    ],
    // Confirmed via live fetch.
    image: "/images/iStock-638124036.jpg",
  },
  testimonialsLabel: "Lo que dicen los demás",
  prefooterCta: {
    title: "¿Listo para aprender más y obtener la ayuda que necesita?",
    description: "Contáctenos hoy para discutir las necesidades únicas de su familia.",
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg",
  },
};

// Conditions overview — built from a live fetch of
// https://idealhh.com/es/services/conditions/. Unlike the EN page, the
// live ES page has NO hero/whyChoose/howItWorks sections — it goes
// straight from nav to the card grid, matching the same simpler structure
// already confirmed and built for RU (ruConditionsPage). Card links route
// to the real Spanish condition slugs; Diabetes and Stroke (no Spanish
// translation exists) link to the English pages, matching what the live
// site itself does when a locale has no translated page for a condition.
export const esConditionsPage = {
  cards: [
    { title: "Diabetes", description: "Nuestros asistentes de salud en el hogar calificados pueden brindarle un manejo adecuado de la diabetes para ayudarlo a vivir una vida más feliz y saludable.", href: "/conditions/diabetes", buttonLabel: "Diabetes" },
    { title: "Derrame Cerebral", description: "La vida después de un derrame cerebral puede mejorar con la ayuda de un cuidador que comprenda que su recuperación es la prioridad número uno.", href: "/conditions/stroke" },
    { title: "Alzheimer / Demencia", description: "Garantizamos la seguridad de su familiar con necesidades de cuidado de la memoria y lo ayudamos a encontrar comodidad en su rutina diaria.", href: "/es/conditions/alzheimers-dementia" },
    { title: "Epilepsia", description: "Los eventos de epilepsia pueden ocurrir rápidamente, podemos estar allí para garantizar su seguridad cuando más la necesite.", href: "/es/conditions/epilepsia" },
    { title: "Prevención de Caídas", description: "La prevención de caídas puede salvarle la vida, reducir el riesgo de posibles complicaciones y mantenerlo encaminado para mantener o mejorar su movilidad.", href: "/es/conditions/prevencion-de-caidas" },
    { title: "Ayuda con las Tareas Diarias", description: "Nuestros asistentes de salud en el hogar pueden ser una mano amiga para garantizar que pueda mantenerse al día con su rutina diaria y seguir haciendo las cosas que ama.", href: "/es/conditions/ayuda-con-las-tareas-diarias" },
    { title: "Parkinson", description: "Nuestros asistentes de salud en el hogar altamente calificados se especializan en el cuidado de Parkinsons y lo ayudan a tener la mejor calidad de vida posible.", href: "/es/conditions/parkinsons" },
    { title: "Artritis", description: "Cuando la movilidad es dolorosa, podemos ayudarlo a seguir haciendo lo que ama con un cuidado personalizado basado en sus necesidades.", href: "/es/conditions/artritis" },
    { title: "Elevación y transferencia", description: "Contamos con especialistas capacitados para trasladar a los pacientes de forma segura para evitar lesiones y estrés innecesarios.", href: "/es/conditions/evantamiento-y-transferencia" },
    { title: "Cuidado en Casa las 24 horas", description: "Cuando necesite ayuda las 24 horas del día, nuestros experimentados asistentes de salud en el hogar pueden estar a su disposición cuando más nos necesite.", href: "/es/conditions/cuidado-residiendo-las-24-horas" },
    { title: "Atención poshospitalaria", description: "Después de una estadía en el hospital, nuestros altamente entrenados asistentes de salud en el hogar pueden ayudarlo a seguir su programa de recuperación y mejorar lo más rápido posible.", href: "/es/conditions/atencion-poshospitalaria" },
    { title: "Soporte para silla de ruedas / cama", description: "Si su familiar está en silla de ruedas o en cama, confíe en nuestro especialista altamente entrenado para ayudarlo a moverse de manera segura por su espacio y completar las tareas diarias.", href: "/es/conditions/apoyo-al-paciente-en-silla-de-ruedas-encamado" },
    { title: "Cuidado Individualizado", description: "Si tiene una condición única o un conjunto de necesidades, nuestras enfermeras certificadas pueden trabajar con usted y su familia para elaborar un plan de tratamiento individualizado.", href: "/es/conditions/cuidado-individualizado" },
  ],
  prefooterCta: {
    title: "¿Listo para aprender más y obtener la ayuda que necesita?",
    // Genuinely in English in the source ("Contact us today.") — kept verbatim.
    description: "Contact us today.",
    // Live source links to non-localized "/contact-us/"; routed to the
    // real Spanish page instead of reproducing the broken link.
    button: { title: "Contáctenos", href: "/es/contact-us" },
  },
};

// Contact Us — built from a live fetch of https://idealhh.com/es/contact-us/.
export const esContactUsPage = {
  hero: {
    title: "Contáctenos",
    paragraphs: [
      "Si tiene una consulta general, por favor no dude en contactarnos llamando al (718) 517-2424 o completando el formulario con su mensaje.",
    ],
    links: [
      { prefix: "Si está buscando convertirse en paciente o cuidador, ", label: "inscríbase hoy.", href: "/es/enroll-now" },
      { prefix: "Si está buscando información sobre carreras con Ideal HH que no sean de cuidador, ", label: "vea nuestra lista de trabajos.", href: "/es/carreras" },
    ],
  },
  // Street names are genuinely translated in the source ("Calle Este 16"
  // for "East 16th Street"), not just city/state — preserved as found.
  officeCards: [
    { title: "Brooklyn", address: "2617 Calle Este 16, Piso 2, Brooklyn, Nueva York 11235", phone: "(718) 517 – 2424", button: { title: "Más información", href: "/es/locations/brooklyn" } },
    { title: "Bronx", address: "391 Calle Este 149, Suite 515, Bronx, Nueva York 10455", phone: "(718) 517 – 2424", button: { title: "Más información", href: "/es/locations/bronx" } },
  ],
  prefooterCta: {
    title: "Si está buscando convertirse en paciente o cuidador, inscríbase hoy.",
    description: "inscríbase hoy.",
    // Live source links to non-localized "/enroll-now/"; routed to the real Spanish page instead.
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    image: "/images/iStock-1181209194.jpg", // confirmed via live fetch
  },
};

// Enroll Now — built from a live fetch of https://idealhh.com/es/enroll-now/.
// Simpler structure than the EN page: no per-section title/description
// paragraphs or "know more" link, just the two bolded labels with their
// bullet questions directly underneath.
export const esEnrollNowPage = {
  heroTitle: "¿Califico?",
  patientSection: {
    label: "Para recibir atención:",
    questions: [
      "¿Es usted elegible para Medicaid o cree que puede serlo?",
      "¿Vives en Nueva York?",
      "¿Quiere ayuda con las actividades diarias como cocinar, limpiar y el cuidado personal?",
    ],
  },
  caregiverSection: {
    label: "Cuidar a alguien:",
    questions: [
      "¿Tienes 18 años o más?",
      "¿Está autorizado para trabajar en los Estados Unidos?",
      "¿Está interesado en que le paguen más de $21.64/hora?",
    ],
  },
  formSection: {
    title: "Inscríbase hoy",
    note: "This is a Patient Application ONLY", // genuinely English in source
    // Live source links to non-localized "/careers/"; routed to the real Spanish page instead.
    caregiverButton: { title: "Become a Caregiver", href: "/es/carreras" }, // button label itself is untranslated too
  },
  prefooterCta: {
    title: "¿Tiene preguntas?",
    description: "Contáctenos hoy para hablar con un representante compasivo que responderá cualquier pregunta que tenga, grande o pequeña.",
    button: { title: "Contáctenos", href: "/es/contact-us" },
  },
};

// How to Enroll — built from a live fetch of https://idealhh.com/es/how-to-enroll/.
// Two CDPAP mentions present in the live source (step 3, and the first
// bullet item) removed per standing rule, matching the exact same removal
// already applied to the EN version of this page.
export const esHowToEnrollPage = {
  hero: {
    title: "Cómo Inscribirse: Introducción como Paciente",
    description: "Nuestros cuidadores calificados pueden ayudarlo a manejar una enfermedad difícil y disfrutar de una vida más feliz y saludable.",
    image: "/images/how-to-enroll-ideal-home-health-nyc-2.jpg", // not confirmed via live fetch — EN fallback
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
  },
  steps: [
    { number: "01.", title: "Contáctenos", description: "Contáctenos para hablar con un especialista de servicio al cliente de Ideal Home Health para discutir sus necesidades." },
    { number: "02.", title: "Te ayudamos a coordinar los detalles", description: "Lo guiamos a través de los pasos para verificar la elegibilidad de Medicaid, programar evaluaciones estatales y coordinar con los médicos para el papeleo." },
    // CDPAP clause dropped per standing rule — source reads "...o lo
    // ayudaremos a registrar a un familiar o amigo que sea elegible como
    // cuidador de CDPAP."
    { number: "03.", title: "Encuentra tu cuidadora ideal", description: "Encontraremos la cuidadora ideal para su condición y necesidades." },
    { number: "04.", title: "Reciba cuidado", description: "Su atención puede comenzar después de una pequeña cantidad de papeleo. Es un proceso rápido y sencillo." },
  ],
  bullets: {
    title: "Hacemos que recibir cuidado sea fácil.",
    subtitle: "Home Health in New York", // genuinely English in source
    description: "We have several options to assist you based on your level of need, lifestyle and family preferences.", // genuinely English in source
    image: "/images/compassionate-caregivers-nyc.jpg", // not confirmed via live fetch — EN fallback
    listTitle: "Comenzando con Ideal Home Health",
    listDescription: "After coordinating the details with your insurance and providers, we work with your family to ensure you'll receive your desired level of care.", // genuinely English in source
    items: [
      // CDPAP clause dropped per standing rule — source reads "...cuidadores
      // a domicilio, enfermería especializada y cuidadores de CDPAP."
      "Contamos con personal altamente calificado en cuidadores a domicilio y enfermería especializada.",
      "Trabajamos con usted para crear un programa personalizado basado en su condición.",
      "Contamos con cuidadores que hablan su idioma y comprenden sus necesidades culturales.",
      "Contamos con coordinadores pacientes y comprensivos para garantizar que se responda cualquier pregunta que tenga",
    ],
  },
  prefooterCta: {
    title: "¿Listo para aprender más y obtener la ayuda que necesita?",
    description: "Contáctenos para hablar con un especialista de servicio al cliente de Ideal Home Health para discutir sus necesidades.",
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    image: "/images/contact-ideal-home-health-care-new-york-city.jpg", // not confirmed via live fetch — EN fallback
  },
};

// Home Care Benefits — built from a live fetch of
// https://idealhh.com/es/home-care-benefits/ (the June 2026 redesign,
// matching the current EN benefitsPage structure exactly). One CDPAP
// mention in step 3 removed per standing rule, matching the exact same
// removal already applied to the EN version of this page.
export const esBenefitsPage = {
  hero: {
    label: "Ideal Home Health",
    title: "Prestaciones de atención domiciliaria cubiertas por Medicaid y Medicare",
    description: "Obtenga cuidados a domicilio de confianza en la ciudad de Nueva York, con apoyo personal, ayuda con el transporte, tareas domésticas ligeras, recordatorios para tomar medicamentos y mucho más; disponible para personas mayores que cumplan los requisitos a través de Medicaid y Medicare.",
    image: "/images/Rectangle-1.png", // confirmed via live fetch
    phone: "(718) 517-2424",
    badges: [
      { bold: "220 dólares al mes", normal: "para artículos de uso diario que cumplan los requisitos" },
      { bold: "Hasta 360 dólares al año", normal: "en recompensas de bienestar" },
      // Same slightly-odd grammar as the EN badge ("for and trusted
      // caregivers") — the Spanish reads more like support *for* caregivers
      // than getting one, kept as found rather than smoothed over.
      { bold: "Asistencia las 24 horas del día, los 7 días de la semana", normal: "para cuidadores de confianza" },
    ],
    button: { title: "Enlístate ahora", href: "/es/enroll-now" },
  },
  qualify: {
    cardTitle: "Podría cumplir los requisitos si",
    heading: "¿Cuánto cuesta la asistencia domiciliaria con Ideal Home Health?",
    description: "Para muchas personas mayores de la ciudad de Nueva York que cumplan los requisitos, es posible que puedan recibir asistencia a domicilio con Ideal Home Health sin ningún coste adicional a través de Medicaid y Medicare.\n\nEn lugar de pedir a las familias que elijan un paquete de asistencia por horas, primero comprobamos si usted o su ser querido cumplen los requisitos para recibir prestaciones de asistencia a domicilio cubiertas por el seguro.",
    button: { title: "Verificar si cumplo los requisitos", href: "/es/enroll-now" },
    items: [
      "Tienes 55 años o más",
      "Tienes Medicaid y Medicare",
      "Vives en Brooklyn, el Bronx, Queens, Staten Island o Nueva York",
      "Necesitas ayuda para realizar las actividades cotidianas",
    ],
  },
  included: {
    title: "¿Qué incluyen tus prestaciones de asistencia a domicilio?",
    button: { title: "Pide ayuda para inscribirte hoy mismo", href: "/es/enroll-now" },
    items: [
      { title: "Cuidado personal", description: "Ayuda para el aseo, el vestido, la colada y las necesidades personales diarias.", icon: "/images/boxicons_car-filled.png" },
      { title: "Ayuda para el transporte", description: "Ayuda para desplazarse a las citas médicas, hacer recados y participar en actividades sociales.", icon: "/images/boxicons_car-filled-1.png" },
      { title: "Tareas domésticas ligeras", description: "Preparación de comidas, tareas domésticas ligeras y compañía en el hogar.", icon: "/images/boxicons_car-filled-2.png" },
      { title: "Recordatorios de medicamentos", description: "Asistencia diaria con los recordatorios y la gestión de la medicación.", icon: "/images/boxicons_car-filled-3.png" },
    ],
  },
  includedImage: "/images/Frame-11-2.png", // confirmed via live fetch
  extras: {
    title: "Los miembros que cumplan los requisitos pueden recibir más que solo atención domiciliaria",
    items: [
      { title: "220 $ al mes", description: "Para gastar en artículos elegibles que satisfagan tus necesidades diarias.", icon: "/images/Frame-21.png" },
      { title: "Hasta 360 dólares al año", description: "Disponible a través del programa de recompensas de bienestar.", icon: "/images/Frame-21.png" },
      { title: "Asistencia con recetas médicas", description: "Medicamentos y apoyo farmacéutico para ayudarte a seguir con tu tratamiento.", icon: "/images/Frame-21.png" },
      { title: "Gratis con Medicaid y Medicare", description: "Para los miembros que cumplan los requisitos del programa.", icon: "/images/Frame-21.png" },
    ],
  },
  stepsImage: "/images/photo-test2.png", // confirmed via live fetch
  steps: {
    title: "¿Cómo empezar?",
    button: { title: "Inscríbete ahora", href: "/es/enroll-now" },
    items: [
      { number: "01.", title: "Contáctenos", description: "Contáctenos para hablar con un especialista en atención al cliente de Ideal Home Health sobre sus necesidades, y responderemos a sus preguntas y le ayudaremos a dar el primer paso." },
      { number: "02.", title: "Te ayudamos a coordinar todos los detalles", description: "Te ayudamos con los trámites necesarios, lo que incluye verificar si cumples con los requisitos de Medicaid, programar las evaluaciones estatales y coordinar con los médicos para agilizar el proceso." },
      // CDPAP clause dropped per standing rule — source reads "...o te
      // ayudaremos a inscribir a un familiar o amigo que cumpla los
      // requisitos como cuidador del programa CDPAP."
      { number: "03.", title: "Encuentra a tu asistente ideal", description: "Te asignaremos un asistente certificado que se adapte perfectamente a tu situación y necesidades particulares." },
      { number: "04.", title: "Recibir atención", description: "Tu atención personalizada puede comenzar tan pronto como se complete toda la documentación necesaria. Es un proceso rápido y sencillo diseñado para que recibas la ayuda que necesitas sin demora." },
    ],
  },
  whyChoose: {
    title: "Por qué las familias eligen Ideal Home Health",
    items: [
      { title: "Continuidad y confianza", description: "Una atención constante a largo plazo genera confianza entre los clientes y sus familias.", icon: "/images/Frame-1.png" },
      { title: "Asistencia las 24 horas del día, los 7 días de la semana", description: "Hay ayuda disponible las 24 horas del día, cuando la necesites.", icon: "/images/Frame-2.png" },
      { title: "Compatibilidad cultural y lingüística", description: "Nuestra prioridad es poner en contacto a los clientes con cuidadores que comprendan su idioma y su cultura.", icon: "/images/Frame-3.png" },
      { title: "Asistentes sometidos a un riguroso proceso de selección", description: "Los cuidadores se someten a una verificación de antecedentes y reciben capacitación profesional.", icon: "/images/Frame-4.png" },
    ],
  },
  locations: {
    label: "Ideal Home Health",
    title: "Servicios de atención domiciliaria en toda la ciudad de Nueva York",
    description: "Ideal Home Health ofrece servicios de asistencia a domicilio para personas mayores y familias que cumplan los requisitos en toda la ciudad de Nueva York.",
    // Live source links to "/es/contact-us-2/" (the dead legacy slug);
    // routed to the real canonical page instead.
    button: { title: "Póngase en contacto", href: "/es/contact-us" },
    image: "/images/Daco_924160.png",
  },
  // Addresses here are NOT translated (unlike the Contact Us page, which
  // does translate street names to "Calle Este...") — a genuine
  // inconsistency between pages in the source, preserved as found.
  officeCards: [
    { title: "Brooklyn", subtitle: "Ideal Home Health – Brooklyn Office", address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US", phone: "(718) 517 – 2424", button: { title: "Servicios de Brooklyn", href: "/es/locations/brooklyn" } },
    { title: "Bronx", subtitle: "Ideal Home Health – Bronx Office", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US", phone: "(718) 517 – 2424", button: { title: "Servicios del Bronx", href: "/es/locations/bronx" } },
  ],
  quote: {
    label: "«Te cuidamos como si fueras de la familia».",
    title: "Una atención que te hace sentir como en familia",
    description: "En Ideal Home Health, la atención es personalizada. Ayudamos a las personas mayores a sentirse seguras, cuidadas y cómodas en su hogar, al tiempo que brindamos tranquilidad a sus familias.",
    image: "/images/Frame-11.jpg", // confirmed via live fetch (Frame-11-508x550.jpg variant)
  },
  prefooterCta: {
    title: "Averigüe si cumple los requisitos para recibir asistencia domiciliaria sin costo alguno",
    description: "Contáctenos hoy mismo para una consulta gratuita y analicemos un plan de cuidados a domicilio personalizado que se adapte perfectamente a las necesidades de su familia en la ciudad de Nueva York.",
    button: { title: "Verificar si cumplo los requisitos", href: "/es/enroll-now" },
    image: "/images/Image.jpg", // confirmed via live fetch
  },
};

// Careers (top-level /es/carreras/) — built from a live fetch of
// https://idealhh.com/es/carreras/. CDPAP button (present in source next
// to "Patient Enrollment" above the form) dropped per standing rule.
export const esCareersPage = {
  hero: {
    title: "Asistente de salud en el hogar (HHA) en Brooklyn, New York",
    description: "Si eres un HHA, RN, LPN o PCA capacitado, compasivo y dedicado que busca desarrollar tu carrera en una empresa dinámica y emocionante, Ideal Home Health es el lugar de trabajo óptimo para lograr este sueño hoy mismo.",
    image: "/images/home-health-caregiver-nyc.jpg", // not confirmed via live fetch — EN fallback
    button: { title: "Conviértete en cuidador", href: "#qualifyenroll" },
  },
  benefits: {
    title: "Comienza una nueva y emocionante carrera con Ideal Home Health.",
    description: "Contáctanos hoy para hablar con nuestros representantes dedicados y comenzar tu proceso de registro.",
    image: "/images/home-health-caregiver-career.jpg", // not confirmed via live fetch — EN fallback
    listTitle: "Beneficios de Ideal",
    listDescription: "En Ideal Home Health,",
    items: [
      "Entendemos que el equilibrio entre la vida laboral y personal es importante, y ofrecemos opciones de turnos flexibles para adaptarnos a tu horario.",
      "Hacemos que el pago sea fácil y configuramos el depósito directo en tu cuenta bancaria.",
      "Ofrecemos un generoso paquete de beneficios.",
      "Contamos con el entorno laboral más favorable, con coordinadores que te colocan en la ubicación más conveniente para ti y que siempre están disponibles para ayudarte con cualquier problema.",
      "Estamos dedicados exclusivamente a nuestro personal, siempre teniendo en cuenta sus mejores intereses en cada paso y mostrando una medida única de confianza y apoyo que se refleja en la lealtad de nuestro personal hacia Ideal Home Health.",
      "Atendemos a una clientela étnicamente diversa, los asistentes bilingües son importantes para nosotros, y damos la bienvenida a la diversidad cultural y étnica.",
    ],
  },
  qualify: {
    title: "¿Califico?",
    patientSubtitle: "Para recibir atención:",
    patientItems: [
      "¿Eres elegible para Medicaid o crees que podrías serlo?",
      "¿Vives en Nueva York?",
      "¿Quieres ayuda con actividades diarias como cocinar, limpiar y cuidado personal?",
    ],
    caregiverSubtitle: "Para cuidar de alguien:",
    caregiverItems: [
      "¿Tienes 18 años o más?",
      "¿Estás autorizado para trabajar en los EE.UU.?",
      "¿Te interesa ganar más de $21.64/h?",
    ],
    formTitle: "Solicitud de empleo como cuidador",
  },
  locations: {
    label: "áreas atendidas",
    title: "Atendiendo a todos los distritos y condados de NYC",
    description: "Para la comodidad de los cuidadores y tu familia, tenemos una oficina cerca de casa. Ideal Home Health brinda la mejor atención de calidad en asistencia domiciliaria, compañía, limpieza, terapia y servicios de enfermería en los cinco distritos de la ciudad de Nueva York, incluidos Queens, Brooklyn, Manhattan, Staten Island y el Bronx.",
    // Live source links to /es/enroll-now/ here (not a contact page) — kept as found, it's a real (if slightly odd) CTA choice in the source.
    button: { title: "Ponte en contacto", href: "/es/enroll-now" },
  },
  // Street names translated here too, matching the Contact Us page pattern.
  officeCards: [
    { title: "Brooklyn", address: "2617 Calle Este 16, Piso 2, Brooklyn, Nueva York 11235", phone: "(718) 517 – 2424" },
    { title: "Bronx", address: "391 Calle Este 149, Suite 515, Bronx, Nueva York 10455", phone: "(718) 517 – 2424" },
  ],
  jobs: {
    sectionTitle: "Ofertas de empleo",
    items: [
      { title: "Asistente de salud en el hogar (HHA)", label: "TIEMPO COMPLETO / TIEMPO PARCIAL", location: "BROOKLYN, NY", button: { title: "Más información", href: "https://www.indeed.com/m/viewjob?jk=7a68356e36b7bd4a&from=native" } },
    ],
  },
};

// Become a Caregiver — built from a live fetch of
// https://idealhh.com/es/carreras/convertirse-en-un-cuidador-de-ideal-home-health/.
// Heavily code-mixed (whole sentences genuinely in English, one sentence
// duplicated in both languages back-to-back) — kept verbatim. One CDPAP
// mention in the bullet list removed per standing rule, matching the EN
// version's already-stripped equivalent bullet.
export const esBecomeCaregiverPage = {
  hero: {
    title: "Convertirse en un cuidador de Ideal Home Health",
    description: "Contact us to speak with a friendly coordinator to learn how you can earn the highest wages for a company that truly cares about their employees and the patients they care for.", // genuinely English in source
    button: { title: "Inscríbete Ahora", href: "/es/enroll-now" },
  },
  steps: [
    { number: "01.", title: "Contáctenos", description: "Contáctenos" }, // genuinely just repeats the title in the source
    {
      number: "02.", title: "Complete una solicitud",
      // The final sentence is genuinely duplicated in English right after
      // the Spanish version says the same thing — kept as found.
      description: "Un coordinador se comunicará con usted para completar nuestra solicitud sencilla para recopilar su información importante. Durante esta fase se requerirá una verificación de antecedentes y un examen de drogas. During this phase a background check and drug screening will be required.",
    },
    { number: "03.", title: "Reciba su oferta de empleo", description: "¡Felicidades! Ahora eres un asistente de salud en el hogar de Ideal. Lo emparejaremos con el paciente ideal." },
    // "Comienze" (missing the "c") is the literal source spelling, preserved.
    { number: "04.", title: "Comienze a brindar cuidado.", description: "Comienze a cuidar a los pacientes." },
  ],
  stepsImage: "/images/ideal-home-health-caregiver-application-processing-nyc.jpg", // not confirmed via live fetch — EN fallback
  gettingStarted: {
    title: "Hacemos que convertirse en un asistente de salud en el hogar certificado sea fácil.",
    // Genuinely English and thematically mismatched (about "Therapy") in
    // the source — looks like a real content mixup on the live page
    // itself, not something introduced here.
    subtitle: "Terapia en Brooklyn, Nueva York",
    description: "En Ideal Home Health, valoramos a nuestro personal y ofrecemos salarios altos, formación y apoyo para ayudarle a alcanzar el éxito.",
    listTitle: "Comenzando con Ideal Home Health",
    listDescription: "Después de contactarnos y completar una solicitud, trabajaremos para",
    items: [
      "Colocarlo con un paciente que será una combinación exitosa",
      "Brindar entrenamiento continuo para mantenerlo actualizado con el entrenamiento requerido.",
      "Proporcionar coordinadores que puedan ayudarlo a recibir cualquier equipo o servicio que lo ayude a brindar un mayor nivel de cuidado.",
      // CDPAP clause dropped per standing rule — source reads "...para los
      // asistentes de salud en el hogar, cdpap y enfermería califidada."
      // ("califidada" typo for "calificada" kept as found.)
      "Pague uno de los salarios disponibles más altos para los asistentes de salud en el hogar y enfermería califidada.",
    ],
    image: "/images/caregiver-at-ideal-home-health-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
  prefooterCta: {
    // Both genuinely just repeat the page title / button text in the source.
    title: "Convertirse en un cuidador de Ideal Home Health",
    description: "Inscríbete hoy",
    button: { title: "Inscríbete hoy", href: "/es/enroll-now" },
    image: "/images/ideal-home-health-caregiver-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
};
