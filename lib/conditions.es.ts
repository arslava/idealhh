// Spanish condition detail pages, built from live fetches of each real
// /es/conditions/{slug}/ page (not the export). Only 11 of 13 — diabetes
// and stroke have no Spanish translation in the source (confirmed via
// conditions-sitemap.xml: no es hreflang alternate for either).
//
// Heavy code-mixing throughout is genuine to the source, not a translation
// gap on our part — many sections, bullet items, and CTA titles are
// literally in English on these Spanish pages, sometimes with typos
// ("Arthritis" mid-Spanish-sentence, "evantamiento" missing its L,
// "Alzeihmer's"). All kept verbatim rather than corrected.
//
// Hero images: only pages where a live <img> was actually confirmed near
// the hero get a page-specific asset; the rest fall back to the shared EN
// asset for that condition (flagged per entry) pending screenshot
// verification, consistent with how the ES Services pages were handled.

export type EsConditionPage = {
  slug: string; title: string; heroDescription: string; heroImage: string;
  intro: { title: string; description: string };
  bulletsTitle: string; bulletsListDescription: string; bulletsItems: string[];
  hasTestimonials: boolean;
  prefooterTitle: string; prefooterDescription: string;
};

export const esConditionPages: EsConditionPage[] = [
  {
    slug: "cuidado-individualizado",
    title: "Cuidado Individualizado",
    heroDescription: "Si tiene una condición única o un conjunto de necesidades, nuestras enfermeras certificadas pueden trabajar con usted y su familia para elaborar un plan de tratamiento individualizado.",
    heroImage: "/images/individualized-care-plan-new-york-city.jpg", // not confirmed via live fetch — EN fallback
    intro: {
      title: "Las necesidades únicas de su familia.",
      // Genuinely English in the source, including the grammatical slip
      // ("guarantee our you") — preserved verbatim.
      description: "Ideal Home Health can guarantee our you or your family member a faster recovery period and peace of mind for the family members with you personalized plan of care",
    },
    bulletsTitle: "Cómo ayudamos",
    // Same sentence is reused verbatim as the Visiting Home Nurse ES page's
    // section title — a copy-paste quirk in the source, kept as found.
    bulletsListDescription: "Un alto nivel de atención de una enfermera con licencia registrada.",
    bulletsItems: [
      "Trabajar con usted para desarrollar un plan de atención basado en las recomendaciones de su médico, sus preferencias personales y su estilo de vida",
      "Siga las instrucciones de atención médica según las indicaciones de su médico",
      "Trabajaremos con usted y su familia para diseñar un plan alimenticio basado en sus preferencias particulares",
      "Encontraremos un/a cuidador/a que hable su idioma y entienda sus necesidades culturales",
      "Motivando el ejercicio y actividad física tal y como sean prescritos por su fisioterapeuta para ayudar a preservar su función de movilidad.",
      "Ayudando con la limpieza del hogar, lavandería y quitando acumulaciones para asegurar que tenga movilidad libre en su hogar.",
    ],
    hasTestimonials: true,
    // Genuinely just repeats the page title rather than a distinct CTA line — preserved as found.
    prefooterTitle: "Cuidado Individualizado",
    prefooterDescription: "Contáctenos hoy para discutir las necesidades únicas de su familia.",
  },
  {
    slug: "apoyo-al-paciente-en-silla-de-ruedas-encamado",
    title: "Apoyo al paciente en silla de ruedas/encamado",
    heroDescription: "Si su familiar está en silla de ruedas o en cama, confíe en nuestro especialista altamente entrenado para ayudarlo a moverse de manera segura por su espacio y completar las tareas diarias.",
    heroImage: "/images/home-care-for-wheelchair-bound-patients-nyc.jpg", // not confirmed via live fetch — EN fallback
    intro: {
      title: "", // no intro heading on this page — goes straight to the paragraph
      description: "Nuestros/as especialistas altamente capacitados ayudan a manejar los quehaceres y tareas difíciles del día a día, y ayudan a su pariente a terminar tareas a diario para que ellos puedan hacer más cosas que aman",
    },
    bulletsTitle: "Cómo ayudamos",
    bulletsListDescription: "Nuestros/as asistentes están entrenados/as para movilizar pacientes de manera segura para evitar lesiones inecesarias y estrés.",
    bulletsItems: [
      "Asistencia al caminar, con silla de ruedas y transferencias de y hacia la cama utilizando una grúa Hoyer",
      "Mecánicas corporales enfocadas en maniobrar al paciente de la cama a la silla de ruedas",
      "Reposicionando al paciente el la cama para prevenir espasticidad y la formación de úlceras por presión",
      "Asistiendo al paciente con su movimientos para evitar una lesión.",
      "Asistiendole a bañarse y con sus necesidades sanitarias.",
      "Acompañarle a sus citas médicas y en sus encargos",
      "Asistiendole en la preparación de comidas basadas en una dieta específica",
      "Motivando el ejercicio y actividad física tal y como sean prescritos por su fisioterapeuta para ayudar a preservar su función de movilidad.",
      "Ayudando con la limpieza del hogar, lavandería y quitando acumulaciones para asegurar que tenga movilidad libre en su hogar.",
    ],
    hasTestimonials: false, // confirmed absent on this page (unlike the other 10)
    prefooterTitle: "Contactarnos",
    prefooterDescription: "Contactarnos para hablar acerca de sus necesidades familiares únicas",
  },
  {
    slug: "atencion-poshospitalaria",
    title: "Atención poshospitalaria",
    heroDescription: "Después de una estadía en el hospital, nuestros altamente entrenados asistentes de salud en el hogar pueden ayudarlo a seguir su programa de recuperación y mejorar lo más rápido posible.",
    heroImage: "/images/iStock-1027587952.jpg", // confirmed via live fetch
    intro: {
      title: "Después de una estadía en el hospital todavía queda trabajo por hacer en el camino a la recuperación.",
      description: "Con un/a asistente de Ideal Home Health, puede sentirse tranquilo/a de que todo el cuidado posoperatorio o cuidado de hospital que puede manejarse en el entorno del hogar se llevará a cabo de forma que usted pueda recuperarse en el tiempo programado.",
    },
    bulletsTitle: "Cómo ayudamos",
    bulletsListDescription: "Después de que su ser amado sea dado de alta de un hospital, nos aseguramos que usted o el/ella reciba el apoyo preciso que necesita para aumentar sus posibilidades de tener una recuperación completa.",
    bulletsItems: [
      "Gestionar horarios de medicación y asegurarse que usted las tome como fueron prescritas",
      "Asistiendo con los cambios de vendajes y monitoreando el proceso de sanación de su condición tal y como lo prescribio su doctor primario",
      "Asegurar y consistentemente conformarse al plan de cuidado de recuperación desarrollado por el grupo de enfermeras de IdealHH",
      "Acompañarle a sus citas médicas y en sus encargos",
      "Asistiendole en la preparación de comidas basadas en una dieta específica",
      "Ejercicios de rango de movimiento (tal y como fuese prescrito por su doctor primario) y asistencia en el uso adecuado de aparatos de movilidad",
      // Genuinely English in the source — the one bullet that wasn't translated.
      "Assist with household cleaning, laundry, and clutter removal to ensure your home is mobility safe.",
    ],
    hasTestimonials: true,
    prefooterTitle: "Después de una estadía en el hospital, nuestros/as altamente entranados/as asistentes de salud en el hogar pueden ayudarle a seguir su programa de recuperación y mejorar lo más pronto posible.",
    prefooterDescription: "Contactarnos para hablar acerca de sus necesidades familiares únicas",
  },
  {
    slug: "cuidado-residiendo-las-24-horas",
    title: "Cuidado residiendo las 24 horas",
    heroDescription: "Cuando necesite ayuda las 24 horas del día, nuestros experimentados asistentes de salud en el hogar pueden estar a su disposición cuando más nos necesite.",
    heroImage: "/images/24-hour-live-in-care-new-york-city.jpg", // not confirmed via live fetch — EN fallback
    intro: {
      title: "Cuando necesite cuidado permanente, estaremos ahí para ayudar",
      description: "Nuestros/as altamente entranados/as asistentes de salud en el hogar estan disponibles para residir en su hogar y proveer asistencia asegurando que tenga la ayuda que usted necesita, cuando más la necesita.",
    },
    bulletsTitle: "Cómo ayudamos",
    // "cómodo. seguro" — stray period instead of comma in the source, kept as-is.
    bulletsListDescription: "Nuestros/as asistentes de salud en el hogar pueden crear un espacio cómodo. seguro y empático.",
    bulletsItems: [
      "Asistitrle con el manejo de medicamentos y asegurar que los tome tal y como fueron prescritos",
      "Ayudarle al proveer la dieta apropiada y en la preparación de comidas saludables para promover salud total",
      "Motivando el ejercicio y actividad física tal y como sean prescritos por su fisioterapeuta para ayudar a preservar su función de movilidad.",
      "Ayudando con la limpieza del hogar, lavandería y quitando acumulaciones para asegurar que tenga movilidad libre en su hogar.",
      "Acompañarle a sus citas médicas y en sus encargos",
      "Proveer un sentimiendo de paz para usted y su familia, al saber que hay un/a cuidador/a disponible en todas las horas del día.",
    ],
    hasTestimonials: true,
    prefooterTitle: "Cuidado residiendo las 24 horas",
    prefooterDescription: "Contáctenos para hablar con un especialista de servicio al cliente de Ideal Home Health para discutir sus necesidades.",
  },
  {
    slug: "evantamiento-y-transferencia",
    // Lowercase and misspelled ("evantamiento" missing the "L") — this is
    // the literal H1 on the live page, not a typo introduced here.
    title: "evantamiento y transferencia",
    heroDescription: "Contamos con especialistas capacitados para trasladar a los pacientes de forma segura para evitar lesiones y estrés innecesarios.",
    heroImage: "/images/in-home-patient-lifting-and-transferring-nyc.jpg", // not confirmed via live fetch — EN fallback
    intro: {
      title: "Podemos ayudarle con levantamiento y transferencia",
      description: "Para los pacientes encamados, de movilidad limitada o inmóviles quienes requieren transferencia a una instalación médica, tenemos especialistas entrenados/as que pueden ayudar.",
    },
    bulletsTitle: "Cómo ayudamos",
    bulletsListDescription: "Nuestros/as asistentes están entrenados/as para movilizar pacientes de manera segura para evitar lesiones inecesarias y estrés.",
    bulletsItems: [
      "Entrenados/as para usar grúa Hoyer",
      "Transferencias de cama a silla de ruedas, silla o comóda",
      "Reposicionando al paciente el la cama para prevenir espasticidad y la formación de úlceras por presión",
      "Mecánicas corporales enfocadas en maniobrar al paciente de la cama a la silla de ruedas",
      "Asistiendo al paciente con su movimientos para evitar una lesión.",
    ],
    hasTestimonials: true,
    prefooterTitle: "Get the help you need lifting and transferring your loved one.", // genuinely English in source
    prefooterDescription: "Contactarnos para hablar acerca de sus necesidades familiares únicas",
  },
  {
    slug: "artritis",
    title: "Artritis",
    heroDescription: "Cuando la movilidad es dolorosa, podemos ayudarlo a seguir haciendo lo que ama con un cuidado personalizado basado en sus necesidades.",
    heroImage: "/images/in-home-arthritis-care-nyc.jpg", // not confirmed via live fetch — EN fallback
    intro: {
      // "con Arthritis" — English word mid-Spanish-sentence in the source, preserved.
      title: "Podemos ayudarle a regresar a su rutina normal con Arthritis",
      description: "La meta de nuestros/as trabajadores/as de cuidado en el hogar es reducir la cantidad de dolor, aumentar el bienestar y asistirle cuando utiliza aparatos de movilidad.",
    },
    bulletsTitle: "Cómo ayudamos",
    bulletsListDescription: "Our home health aides can assist with:", // genuinely English in source
    bulletsItems: [
      "Asistirle en apegarse a un plan de medicación para alcanzar el mejor resultado preveniendo así nuevos brotes e inflamación.",
      "Asistiendole en la preparación de comidas basadas en una dieta específica",
      "Motivando el ejercicio y actividad física tal y como sean prescritos por su fisioterapeuta/terapista ocupacional para ayudar a preservar su función de movilidad.",
      "Ayudando con la limpieza del hogar, lavandería y quitando acumulaciones para asegurar que tenga movilidad libre en su hogar.",
      "Acompañarle a sus citas médicas y en sus encargos",
    ],
    hasTestimonials: true,
    prefooterTitle: "Podemos ayudarle a regresar a su rutina normal con Arthritis",
    prefooterDescription: "Contáctenos hoy mismo para discutir un plan de cuidado personalizado y adecuado para su familia.",
  },
  {
    slug: "parkinsons",
    title: "Parkinson's",
    heroDescription: "Nuestros/as asistentes de salud en el hogar están entrenados/as para reconocer e identificar los signos y síntomas de la enfermedad de Parkinson's.",
    heroImage: "/images/iStock-1181209194.jpg", // confirmed via live fetch
    intro: {
      title: "Podemos ayudarle a vivir cómodamente con Parkinson's",
      // Duplicates the hero description almost verbatim — a genuine repeat in the source.
      description: "Nuestros/as asistentes de salud en el hogar están entrenados/as para reconocer e identificar los signos y síntomas de la enfermedad de Parkinson's.",
    },
    bulletsTitle: "We can help you live life to the fullest", // genuinely English in source
    bulletsListDescription: "Our home health aides can assist with:", // genuinely English in source
    bulletsItems: [
      "Asistencia con el manejo de temblores en descando, rígidez, lentitud de movimiento y balance débil",
      "Our aide will strictly adhere to your plan of care specifically addressing your conditions and personal needs.",
      "Asistitrle con el manejo de medicamentos y asegurar que los tome tal y como fueron prescritos",
      "Asistiendole en la preparación de comidas basadas en una dieta específica",
      "Motivando el ejercicio y actividad física tal y como sean prescritos por su fisioterapeuta para ayudar a preservar su función de movilidad.",
      "Ayudando con la limpieza del hogar, lavandería y quitando acumulaciones para asegurar que tenga movilidad libre en su hogar.",
      "Acompañarle a sus citas médicas y en sus encargos",
      "Monitor blood pressure and any other condition specific tasks required for your unique needs.",
    ],
    hasTestimonials: true,
    prefooterTitle: "Podemos ayudarle a vivir cómodamente con Parkinson's",
    prefooterDescription: "Contáctenos hoy mismo para discutir un plan de cuidado personalizado y adecuado para su familia.",
  },
  {
    slug: "ayuda-con-las-tareas-diarias",
    title: "Ayuda con las Tareas Diarias",
    heroDescription: "Nuestros asistentes de salud en el hogar pueden ser una mano amiga para garantizar que pueda mantenerse al día con su rutina diaria y seguir haciendo las cosas que ama.",
    heroImage: "/images/help-with-daily-tasks-nyc.jpg", // not confirmed via live fetch — EN fallback
    intro: {
      // Reads like a bullet item rather than a section title, and the
      // description below is copy-pasted verbatim from the 24-hour-care
      // page — both genuine quirks in the source, kept as found.
      title: "Asistiendole en la preparación de comidas basadas en una dieta específica",
      description: "Nuestros/as altamente entranados/as asistentes de salud en el hogar estan disponibles para residir en su hogar y proveer asistencia asegurando que tenga la ayuda que usted necesita, cuando más la necesita.",
    },
    bulletsTitle: "Examples of how we can help", // genuinely English in source
    bulletsListDescription: "Our home health aides can assist with:", // genuinely English in source
    bulletsItems: [
      "Gestionar horarios de medicación y asegurarse que usted las tome como fueron prescritas",
      "Nuestros/as especialistas altamente capacitados ayudan a manejar los quehaceres y tareas difíciles del día a día, y ayudan a su pariente a terminar tareas a diario para que ellos puedan hacer más cosas que aman",
      "Assist with household cleaning, laundry, and clutter removal to ensure your home is mobility safe.",
      // This line is genuinely duplicated back-to-back in the source.
      "Acompañarle a sus citas médicas y en sus encargos",
      "Acompañarle a sus citas médicas y en sus encargos",
      "Monitor blood sugar, blood pressure and any other condition specific tasks required for your unique needs.",
    ],
    hasTestimonials: true,
    prefooterTitle: "Contactarnos para hablar acerca de sus necesidades familiares únicas",
    prefooterDescription: "Contáctenos hoy mismo para discutir un plan de cuidado personalizado y adecuado para su familia.",
  },
  {
    slug: "prevencion-de-caidas",
    title: "Prevención de Caídas",
    heroDescription: "La prevención de caídas puede salvarle la vida, reducir el riesgo de posibles complicaciones y mantenerlo encaminado para mantener o mejorar su movilidad.",
    heroImage: "/images/iStock-866130786.jpg", // confirmed via live fetch
    intro: {
      title: "Feel confident in your mobility that we'll be there as a helping hand.", // genuinely English in source
      description: "A fall can lead to life threatening complications, our specially trained home health aides can be there to ensure your safety.", // genuinely English in source
    },
    bulletsTitle: "Examples of how we can help", // genuinely English in source
    bulletsListDescription: "Our Home care workers are trained and in-serviced on a regular basis to:", // genuinely English in source
    bulletsItems: [
      "Ensure your home is mobility safe, and monitor and adjust your home for safety concerns",
      "Gestionar horarios de medicación y asegurarse que usted las tome como fueron prescritas",
      "Acompañarle a sus citas médicas y en sus encargos",
      "Monitor blood sugar, blood pressure and any other condition specific tasks required for your unique needs.",
      "Nuestros/as especialistas altamente capacitados ayudan a manejar los quehaceres y tareas difíciles del día a día, y ayudan a su pariente a terminar tareas a diario para que ellos puedan hacer más cosas que aman",
      "Provide companionship and assist with daily household tasks.",
    ],
    hasTestimonials: true,
    prefooterTitle: "Ready to learn more and get the help you need preventing falls?", // genuinely English in source
    prefooterDescription: "Contáctenos hoy mismo para discutir un plan de cuidado personalizado y adecuado para su familia.",
  },
  {
    slug: "epilepsia",
    title: "Epilepsia",
    heroDescription: "Los eventos de epilepsia pueden ocurrir rápidamente, podemos estar allí para garantizar su seguridad cuando más la necesite.",
    heroImage: "/images/iStock-1160184427.jpg", // confirmed via live fetch
    intro: {
      title: "Get the help you need to manage Epilepsy.", // genuinely English in source
      // Trailing "/" instead of a period — literal source typo, preserved.
      description: "Our Home Health aides are trained to recognize and identify signs and symptoms of upcoming epilepsy event/",
    },
    bulletsTitle: "Examples of how we can help", // genuinely English in source
    bulletsListDescription: "Our epilepsy care specialists are trained to:", // genuinely English in source
    bulletsItems: [
      "Ensure you are in a safe position during an epilepsy event",
      "Asistitrle con el manejo de medicamentos y asegurar que los tome tal y como fueron prescritos",
      "Work along side with your physician to successfully manage to your epilepsy episodes",
      "Reminders and accompaniment to doctors appointments",
      "Ensure you are provided with first aide steps to ensure you are safe position during a seizure event .",
      "Asistiendole en la preparación de comidas basadas en una dieta específica",
      "Providing and maintaining calm, limited stress environments to decrease seizure events",
    ],
    hasTestimonials: true,
    prefooterTitle: "Ready to learn more and get the help you need to manage your Epilepsy?", // genuinely English in source
    prefooterDescription: "Contáctenos hoy mismo para discutir un plan de cuidado personalizado y adecuado para su familia.",
  },
  {
    slug: "alzheimers-dementia",
    // Left untranslated in the source, matching the untranslated slug.
    title: "Alzheimer's / Dementia",
    heroDescription: "Garantizamos la seguridad de su familiar con necesidades de cuidado de la memoria y lo ayudamos a encontrar comodidad en su rutina diaria.",
    heroImage: "/images/in-home-alzheimers-and-dementia-care-nyc.jpg", // not confirmed via live fetch — EN fallback
    intro: {
      title: "Alzheimer's disease is unpredictable.", // genuinely English in source
      // "Alzeihmer's" typo — literal source spelling, preserved.
      description: "Progressive memory conditions like Alzeihmer's and Dementia can be managed with a caring home health aide.",
    },
    bulletsTitle: "How we can help.", // genuinely English in source
    bulletsListDescription: "Our Home Care workers are trained to recognize all stages of memory deficits.", // genuinely English in source
    bulletsItems: [
      "Daily mobility and fall prevention",
      "Providing caring companionship and a consistent presence so your loved one is never lonely.",
      "Assistance with medication management and ensure you take them as prescribed so dose is never forgotten",
      "Reminders and accompaniment to doctors appointments",
      "Assist you in preparing diet specific meals.",
      "Our home care worker will report and address in change in appetite",
      "Meet your personal care needs but not depriving you from your independence.",
      "Assisting with daily tasks including dressing, toileting, bathing and eating.",
      "A calming presence to be there during even the most disoriented days.",
    ],
    hasTestimonials: true,
    prefooterTitle: "Contactarnos para hablar acerca de sus necesidades familiares únicas",
    prefooterDescription: "Contáctenos hoy mismo para discutir un plan de cuidado personalizado y adecuado para su familia.",
  },
];
