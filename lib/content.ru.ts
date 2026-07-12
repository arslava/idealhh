// Russian homepage content, extracted verbatim from the WordPress export
// (post_name: ru-home-page). Reuses the same images as the English homepage
// (same WP attachment IDs — 11071, 11084, 11098, 11111, 1150).

export const ruReviewsSection = {
  // Literally in English in the source, even on the Russian page — kept
  // verbatim rather than translated.
  title: "What Our Clients Say: Trusted Home Care in New York",
  reviews: [
    { name: "Шерис Каррауэй", date: "2022-10-26", rating: 5, content: "Это лучшее агентство на сегодняшний день, и я горжусь тем, что выбрал его и буду продолжать с ним сотрудничать еще некоторое время." },
    { name: "Надин Доус", date: "2023-04-24", rating: 5, content: "Персонал, с которым я сталкивался, просто замечательный. Если ваше призвание — помогать людям, то это идеальная компания для работы." },
    { name: "Дениз Хаммондс", date: "2024-01-22", rating: 5, content: "Идеальное домашнее здравоохранение – это лучшее, что может быть 💯.. Я никогда не сталкивалась с таким дружелюбным и приятным агентством.. Все сотрудницы работают просто отлично, но я должна особо отметить двух из них: Юлиану и никого иного, как мисс Паулу. Она взяла быка за рога и прошла через все испытания.. И на протяжении всего этого времени она, как и Юлиана, постоянно сообщала мне о состоянии дел.. Я поняла, что они заверили меня, что все будет хорошо 👍🏾... Они великолепны в том, что делают, и я еще раз хочу поблагодарить их от всего сердца... Прекрасные дамы 🤗" },
    { name: "Дачира Ривера Рамос", date: "2024-02-15", rating: 5, content: "(Перевод Google) Очень внимательный и услужливый персонал, хороший уход и оборудование.\n\n(Оригинал)\n\nMuy atentos y servicial, un buen cuidado y equipo." },
    { name: "Юсеф Эльхалаби", date: "2024-04-26", rating: 5, content: "Замечательные люди, преданные своему делу, очень уважительные, отвечают на все вопросы простым и понятным английским языком, отслеживают каждую деятельность и помогают найти решения и варианты для любых проблем или трудностей, с которыми вы можете столкнуться. Особая благодарность Розмари, Аннабил и Эмили." },
    { name: "Шелби Гонсалес", date: "2024-05-25", rating: 5, content: "Мой опыт был замечательным. Я могу быть прокрастинатором, но они не отпускали меня и помогали мне на протяжении всего пути." },
    { name: "Racquel McDonald", date: "2024-08-10", rating: 5, content: "Ideal Home Health is the best agency have ever work with. There are very professional always answer when you call and help with whatever you need. Always get paid on time they are the best I'm happy working with them ❤️." },
    { name: "Лоррейн Маллен", date: "2024-08-13", rating: 5, content: "Все сотрудники Ideal проявили большое терпение, заботу, отзывчивость, доброжелательность, знания, информативность и готовность помочь мне при поступлении в программу. Эмили, Паула и многие другие сотрудники сделали все возможное, чтобы обеспечить мне беспроблемный переход. Я им искренне благодарен." },
  ],
};

export const ruHomePage = {
  hero: {
    titlePrefix: "Ваше агенство ",
    highlight: "должно быть идеальным",
    titleSuffix: "",
    // Real title field is "Ваше агенство должно быть Ideal" with highlight
    // "должно быть идеальным" — the highlight phrase doesn't literally
    // substring-match the title (translation quirk in the source CMS), so
    // rendered as prefix/suffix around the literal title text instead.
    fullTitle: "Ваше агенство должно быть Ideal",
    description:
      "В Ideal Home Health мы профессионально подходим к выбору помощников по уходу на дому (хоуматенды) в Нью Йорке. Сотрудничая вместе мы достигаем наивысшего уровня независимости, одновременно предоставляя вам услуги самого высокого качества в вашем же доме.",
    primaryButton: { title: "Выбор предоставляем услуг", href: "/ru/careers/#qualifyenroll" },
    secondaryButton: { title: "Зарегестрируйтесь сегодня", href: "/ru/enroll-now" },
  },
  servicesTeaser: [
    {
      title: "Помощники по уходу на дому (Хоуматенды)",
      description:
        "Наши сертифицированные помощники по уходу на дому предлагают заботливый личный уход и помощь в повседневной жизни. Мы помогаем вам сохранить независимость в вашем доме в Нью-Йорке.",
      button: { title: "Узнайте больше", href: "/ru/services/home-health-aide" },
      icon: "heart",
    },
    {
      title: "Медбратья и медсестра",
      description:
        "Наши лицензированные выездные медсестры предоставляют квалифицированную медицинскую помощь на дому в Нью-Йорке, подбирая планы лечения с учетом ваших потребностей.",
      button: { title: "Узнайте больше", href: "/ru/services/visiting-home-nurse" },
      icon: "heart-pulse",
    },
  ],
  whoBenefits: {
    label: "Ideal Home Health",
    title: "Кому выгодна идеальная домашняя медицинская помощь в Нью-Йорке?",
    items: [
      "Пожилые люди, нуждающиеся в помощи для самостоятельной жизни",
      "Лица, восстанавливающиеся после операции или болезни",
      "Пациенты с хроническими заболеваниями (например, инсульт, лечение диабета на дому)",
      "Семьи, нуждающиеся в временном уходе",
    ],
    button: { title: "Зарегистрироваться сейчас", href: "/ru/enroll-now" },
    image: "/images/home-health-care-in-nyc.jpg",
  },
  customPlans: {
    label: "Ideal Home Health",
    title: "Индивидуальный уход на дому в Нью-Йорке: ваши уникальные потребности, наши индивидуальные планы",
    description:
      "Мы специализируемся на различных условиях, а также предлагаем индивидуальные модели ухода, соответствующие вашему образу жизни и потребностям вашей семьи.",
    button: { title: "Ознакомьтесь с нашими услугами", href: "/ru/services/conditions" },
    image: "/images/personalized-home-health-care-new-york.jpg",
  },
  locations: {
    label: "Ideal Home Health",
    title: "Ideal Home Health: с гордостью обслуживаем 5 районов Нью-Йорка",
    description:
      "Для удобства ухаживающих и их семей наши офисы в Нью-Йорке расположены недалеко от дома. Наши обученные специалисты по уходу на дому в каждом из офисов предоставляют профессиональные и эффективные услуги по всему Нью-Йорку, включая Квинс, Бруклин, Манхэттен, Статен-Айленд и Бронкс.",
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
  locationsImage: "/images/Daco_924160.png",
  locationCards: [
    { name: "Brooklyn", address: "2617 East 16th Street, Floor 2, Brooklyn, NY 11235", button: { title: "Brooklyn Services", href: "/locations/brooklyn" } },
    { name: "Bronx", address: "391 East 149th Street, Suite 515, Bronx, NY 10455", button: { title: "Bronx Services", href: "/locations/bronx" } },
  ],
  careers: {
    label: "IDEAL HOME HEALTH",
    title: "Присоединяйтесь к нашей команде специалистов по уходу на дому в Нью-Йорке",
    description:
      "Вы преданный своему делу и отзывчивый медицинский работник, ищете интересную работу в сфере домашнего ухода за больными в Нью-Йорке? Компания Ideal Home Health активно ищет талантливых специалистов для пополнения нашей растущей команды. Откройте для себя благоприятную среду, где ваша страсть к уходу за больными действительно имеет значение.",
    button: { title: "Просмотреть вакансии", href: "/ru/careers" },
    image: "/images/join-ideal-home-health-care-nyc.jpg",
  },
  heroImage: "/images/compassionate-home-health-care-services-nyc.jpg",
  prefooterCta: {
    title: "Готовы узнать больше и получить необходимую помощь?",
    description: "Свяжитесь с нами сегодня чтобы обсудить план по обслуживанию который будет подходить вашей семье.",
    button: { title: "Зарегестрируйтесь сегодня", href: "/ru/enroll-now" },
  },
};

// ============ Remaining core Russian pages ============
// CDPAP mentions removed per standing rule: Services page's embedded CDPAP
// text-image block (was in English even in source), How to Enroll step 3 +
// 1 bullet, Become a Caregiver 1 bullet, Benefits steps step 3.

export const ruAboutUsPage = {
  hero: {
    title: "Об Ideal Home Health",
    description: "В Ideal Home Health, ваша семья — это наша семья. Мы начали наше обслуживание в 2013 году с целью того чтобы оживить неэффективную и старую систему в индустрии по уходу за пожилыми людьми в Нью-Йорке. С фокусом на обслуживание, коммуникации и эффективность, мы нанимаем на работу сотрудников которые стараются улучшить вашу жизнь.",
    // No image on the live page — hero is text-only, full width. The photo
    // that follows in the source markup belongs to the mission section below
    // (508x550 portrait crop matches this codebase's text-image block
    // pattern, not a hero banner).
    primaryButton: { title: "Выбор предоставляем услуг", href: "/ru/services" },
    secondaryButton: { title: "Зарегестрируйтесь сегодня", href: "/ru/enroll-now" },
  },
  mission: {
    label: "IDEAL HOME HEALTH",
    title: "Наша миссия и основные ценности",
    // Source ACF field (text_image_blocks_0_description) is literally in
    // English on the live site, identical to the English page's mission
    // description — never translated. Kept verbatim per "identical to
    // source" rule rather than the paraphrase that was here before.
    description: "Our mission is to provide an exceptional standard of compassionate care that empowers every individual we serve. This mission is guided by our core values: a deep-seated belief that your family is our family, an unwavering commitment to communication and efficiency, and a promise to always act with integrity. By upholding these values, we ensure a higher standard of care that not only meets your physical needs but also supports your emotional and social well-being.",
    image: "/images/compassionate-in-home-care-nyc.jpg",
    button: { title: "Что говорят другие", href: "/ru/about-us/testimonials-reviews" },
  },
  areasServed: {
    label: "Места по обслуживанию",
    title: "Обслуживание всех районов и округов Нью-Йорка",
    description: "Начиная с подвала одного из наших партнеров, в Ideal Home Health работало всего 4 офисных сотрудника в Бруклине. И всего через 5 лет, компания выросла в сообщество из 1500+ человек по всем 5 районам Нью-Йорка.",
    // This second paragraph is rendered in quote marks («»&nbsp;) on the
    // live page — kept as a separate field rather than merged into one
    // paragraph like an earlier pass had it.
    quote: "В дополнение к тому что мы предоставляем услуги по уходу за пожилыми людьми, Ideal Home Health скооперировался с многочисленными коммуникационными центрами, с домами для пристарелых, продовольственными организациями, благотворительностью и общественными организациями чтобы продолжить положительно влиять на соседей в Нью-Йорке.",
    image: "/images/Daco_924160.png",
    // Was missing — live page has a button here before the office cards.
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
  // Was missing entirely — confirmed present and rendered on the live page
  // via direct fetch (source ACF "acf/services" block).
  officeCards: [
    { title: "Brooklyn", subtitle: "Ideal Home Health — офис в Бруклине", address: "2617 East 16th Street, Floor 2, Бруклин, Нью-Йорк, 11235, США", phone: "(718) 517 – 2424", button: { title: "Узнать больше", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "Ideal Home Health — офис в Бронксе", address: "391 East 149th Street, Suite 515, Бронкс, Нью-Йорк, 10455, США", phone: "(718) 517 – 2424", button: { title: "Узнать больше", href: "/locations/bronx" } },
  ],
  // Was missing entirely — confirmed present and rendered on the live page
  // (source ACF "acf/languages" block, 4 slides). Three of the four slides
  // are genuinely in English/Spanish/Chinese in the source, not Russian —
  // this is a multilingual slider showing several languages regardless of
  // which locale page it's on, kept verbatim including the non-Russian slides.
  languages: [
    { title: "Your language and cultural needs are our priority", description: "We speak your language and understand you and your families cultural needs and preferences.", button: { title: "Запишитесь сегодня!", href: "/ru/enroll-now" } },
    { title: "Язык на котором вы говорите и ваши культурные ценности у нас в приоритете", description: "Мы говорим на вашем языке и понимаем вас и ваши культурные ценности и предпочтения.", button: { title: "Запишитесь сегодня!", href: "/ru/enroll-now" } },
    { title: "Sus necesidades de idioma y cultura son nuestra prioridad", description: "Hablamos su idioma y entendemos sus necesidades y preferencias culturales al igual que la de sus familiares.", button: { title: "Запишитесь сегодня!", href: "/ru/enroll-now" } },
    { title: "您的语言和文化需求是我们的首要任务", description: "我们说您的语言，并了解您和您的家人的文化需求和喜好。", button: { title: "Запишитесь сегодня!", href: "/ru/enroll-now" } },
  ],
  // Was missing entirely — confirmed present and rendered on the live page
  // (source ACF "acf/statistics-slideshow" block, 4 stats). Two of the four
  // are genuinely mixed English/Russian in the source (not a translation
  // gap — that's literally what's on the live page).
  statistics: [
    { topTitle: "Мы помогли", featureTopText: "5,000+", featureText: "5000+ пациентам и помощникам по уходу на дому (хоуматенды)", description: "Сначала существования Ideal Home Health" },
    { topTitle: "Мы обслуживаем", featureTopText: "Пациентов с разными религиями", featureText: "many religions", description: "включая католицизм, христианство, мусульманство, индуизм, буддизм, адвентизм, свидетелей Иеговы, евреев и тд." },
    { topTitle: "У нас есть", featureTopText: "Помощники по уходу на дому (хоуматенды) которые говорят на вашем языке", featureText: "speak your language", description: "На более чем 34 языках говорят наши помощники по уходу на дому (хоуматенды)" },
    { topTitle: "At Ideal Home Health", featureTopText: "We understand", featureText: "your cultural needs", description: "servicing patients from over 46 countries." },
  ],
  prefooterCta: {
    title: "У вас есть вопросы?",
    description: "Наши сотрудники готовы обсудить все возможные вопросы которые у вас есть.",
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
    image: "/images/registered-home-nurse-nyc.jpg",
  },
};

export const ruTestimonialsPage = {
  hero: {
    title: "Свидетельства и отзывы",
    description: "Мы гордимся тем что имеем счастливых сотрудников, пациентов и их семей.",
  },
  // Confirmed via live page fetch: these ARE translated into Russian in the
  // source (posts 3957, 3979, 4552 — WPML Russian duplicates of the English
  // testimonial posts). An earlier pass used the English originals instead
  // of finding these translated posts — real content restored below,
  // word-for-word from wp:postmeta (single_testimonial_content).
  testimonials: [
    { author: "Тейшия Б.", role: "Опекун", rating: 5, content: "Я работаю в Ideal Home Health последние два года. Ценю время и усилия координаторов офиса, которые, на мой взгляд, делают больше, чем требуется, чтобы я всегда своевременно обновляла свою документацию и обучение. Оплата здесь также одна из самых высоких, что я получала, и я благодарна за возможность работать здесь." },
    { author: "Лиз П", role: "Пациент", rating: 5, content: "Спасибо. Я так рада, что у меня есть помощь. Моя помощница помогает с лекарствами и утром помогает сделать прическу. Я счастлива, когда могу видеть внуков, а она поддерживает порядок, так как я сама не могу это делать. Сара очень милая, я очень, очень ценю помощь." },
    { author: "Джозеф А.", role: "Член семьи", rating: 5, content: "После того как я переехал из Нью-Йорка, уход за моей мамой стал очень стрессовым для меня и моей сестры. Наличие помощника помогает нам быть уверенными, что она в безопасности, когда мы не можем быть рядом. У нас был потрясающий опыт сотрудничества с Ideal Home Health, они профессиональны и сделали процесс простым." },
  ],
  reviews: [
    { rating: 5, name: "Джессика П.", location: "Бруклин, Нью-Йорк", review: "I was able to register my father in law for an aide very quickly, we were all setup within about a week. Ideal HH staff were great to work with, and the office is 15 minutes from my apartment which was convenient. Overall great service, I highly recommend them if you need a home aide." },
    { rating: 4, name: "Ирсал М.", location: "Бронкс, Нью-Йорк", review: "The pay is very good and they accommodate my time off for religious holidays. I had some challenges with my paperwork to register but overall it has been a good experience and I plan to continue working for Ideal Home Health." },
    { rating: 5, name: "Джордан Х.", location: "Куинс, Нью-Йорк", review: "We needed a caregiver for a special case, my father has dementia in addition to his diabetes and lack of mobility. Ideal Home Health took the time to discuss all the details of his care requirements, and overall we're extremely happy with the level of care he's receiving. While it's difficult to tell, I believe my father is happier now and I'm relieved to know he's safe everyday." },
    { rating: 5, name: "Джон К.", location: "Бронкс, Нью-Йорк", review: "Great company. Makes the whole process simple, we were registered and had care quickly, the whole thing was very easy." },
  ],
  prefooterCta: {
    title: "Готовы больше узнать и получить необходимую помощь?",
    description: "Свяжитесь с нами сегодня чтобы обсудить план по обслуживанию который будет подходить именно вашей семье.",
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
};

export const ruServicesPage = {
  hero: {
    title: "Наши специалисты готовы помочь с вашими индивидуальными потребностями.",
    // Was missing entirely — restored from source (hero_banner_description).
    description: "Наши высококачественные медицинские сотрудники готовы помочь с любой нуждой, большой или маленькой.",
  },
  // CDPAP text-image block removed (was between HHA and Visiting Nurse cards
  // in the source, embedded in English text).
  // Card descriptions below are the literal source text (text_image_blocks
  // ACF fields), which is in English even on the Russian page in the source
  // CMS — identical to the English /services/ page's card text. Previously
  // this held an invented Russian paraphrase instead.
  services: [
    {
      // Was "Помощники по уходу на дому (HHA)" — real live heading is this
      // fuller English one, matching the English-language description.
      title: "Home Health Aides — HHA: Essential Daily Support",
      description: "Our Department of Health certified Home Health Aides (HHAs) offer compassionate assistance with Activities of Daily Living (ADLs). From personal care to medication reminders, our in-home aides in NYC help maintain independence. All HHAs receive rigorous bi-annual training, ensuring top safety standards.",
      button: { title: "Узнайте больше", href: "/ru/services/home-health-aide" },
      image: "/images/home-health-aides-new-york.jpg",
    },
    {
      // Was "Медбратья и медсестра — квалифицированный медицинский уход на
      // дому" — real live heading is this fuller English one.
      title: "Visiting Home Nurse – Expert Skilled Nursing Care at Home",
      description: "Receive skilled nursing care in your New York City home with our licensed Visiting Home Nurses (RNs/LPNs). We offer medication management, wound care, post-operative support, chronic disease management, and more. Our nurses create custom plans of care for your optimal health and recovery.",
      button: { title: "Узнайте больше", href: "/ru/services/visiting-home-nurse" },
      // attachment: shutterstock_1667840344.jpg, confirmed real filename via SQL dump.
      image: "/images/shutterstock_1667840344.jpg",
    },
  ],
  // Title, items, and button are literally in English in the source, even
  // on the Russian page — kept verbatim rather than translated (previous
  // pass translated all of this into Russian).
  whyChoose: {
    title: "Why Choose Ideal Home Health for Your NYC Home Care Needs?",
    items: ["Accredited & Trusted", "Experienced & Compassionate Team", "Personalized & Flexible Plans", "Local NYC Expertise", "Seamless Enrollment"],
    button: { title: "Enroll Now", href: "/ru/enroll-now" },
    // attachment: iStock-866130786.jpg, confirmed real filename from live page.
    image: "/images/iStock-866130786.jpg",
  },
  prefooterCta: {
    title: "Готовы больше узнать и получить необходимую помощь?",
    description: "Свяжитесь с нами сегодня чтобы обсудить план по обслуживанию который будет подходить именно вашей семье.",
    button: { title: "Зарегистрируйся сегодня", href: "/ru/enroll-now" },
  },
};

// Source: page id 1384 (/ru/services/home-health-aide/). Two separate title
// fields exist in the source and were previously conflated — hero_banner_title
// ("Помощники по уходу на дому (Хоуматенды)") is NOT the same field as
// bullets_section_title ("Получите уход там где он больше всего нужен -
// дома."), which belongs to a second text+image section further down the
// page. Fixed below. Image attachment IDs 840, 726, 819 do not appear in
// either the XML export or the SQL dump as media items, so their real
// filenames are unverified — kept as placeholders (flagged) rather than
// guessed.
export const ruHomeHealthAidePage = {
  hero: {
    label: "Обслуживание",
    title: "Помощники по уходу на дому (Хоуматенды)",
    // hero_banner_description verbatim, including source typos
    // ("Mинистерва", "хоматенды") — kept as-is per identical-to-source rule.
    description: "Наши помощники по уходу на дому (хоуматенды) являются сертифицированными специалистами Mинистерва здравоохранения в ваших ежедневных нуждах и состоянии. Все наши сертифицированные хоматенды проходят тренинги 2 раза в год.",
    image: "/images/certified-home-health-aides-new-york.jpg", // attachment id 840 — filename unverified
    primaryButton: { title: "Зарегистрируйся сегодня", href: "/ru/enroll-now" },
    secondaryButton: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
  // Was entirely missing — this is a second, separate text+image section
  // (source ACF field group "bullets_section_*") that sits between the hero
  // and the "How We Help" bullet list.
  gettingCare: {
    title: "Получите уход там где он больше всего нужен — дома.",
    highlight: "дома",
    description: "С Ideal Home Health можно не переживать за родных зная что ваши родные дома с заботливыми и опытными профессионалами которые им помогут.",
    image: "/images/home-health-aide-care-at-home.jpg", // attachment id 726 — filename unverified
  },
  howTheyHelp: {
    title: "Как мы помогаем",
    description: "Наши помощники по уходу на дому (хоуматенды) специально обучены",
    items: [
      "Помогать с ежедневными делами, включая подготовку еды.",
      "Помогать с домашней уборкой и поддержанием гигиены",
      "Следить за приемом лекарств",
      "Следить если есть какие-либо симптомы указанные лечащим врачом",
      "Продвигать независимость и физическую активность дома",
      "Обеспечить заботу и хорошее самочувствие через доброту, командную работу и ставить цели чтобы продолжить жить лучше!",
    ],
  },
  // Was entirely missing (no prefooterCta rendered on this page at all).
  prefooterCta: {
    title: "Готовы больше узнать и получить необходимую помощь?",
    description: "Свяжитесь с нами сегодня чтобы обсудить план по обслуживанию который будет подходить именно вашей семье.",
    button: { title: "Зарегистрируйся сегодня", href: "/ru/enroll-now" },
    image: "/images/prefooter-hha.jpg", // attachment id 819 — filename unverified
  },
};

// Source: page id 1394 (/ru/services/visiting-home-nurse/). Same pattern as
// Home Health Aide — "hero.subtitle" here was actually bullets_section_title,
// a separate section further down the page, not part of the hero banner.
export const ruVisitingHomeNursePage = {
  hero: {
    label: "Обслуживание",
    title: "Медбратья и медсестра",
    description: "Наши дипломированные медбратья и медсестра будут следить за вашими потребностями и состоянием здоровья, чтобы составить для вас индивидуальный план ухода.",
    // attachment id 831 — confirmed real filename via live page.
    image: "/images/shutterstock_1667840344.jpg",
    primaryButton: { title: "Зарегистрируйся сегодня", href: "/ru/enroll-now" },
    secondaryButton: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
  // Was misused as hero.subtitle — actually a separate text+image section
  // (source ACF field group "bullets_section_*").
  qualityCare: {
    title: "Высокий уровень обслуживания от лицензированных медсестер и медбратьев.",
    // attachment id 741 — confirmed real filename via live page.
    image: "/images/iStock-638124036.jpg",
  },
  bullets: {
    // "Квалификацированные" is a typo in the source (correct spelling would
    // be "Квалифицированные") — preserved verbatim per identical-to-source rule.
    listTitle: "Квалификацированные медбратья и медсестра в Ideal Home Health",
    listDescription: "Наши лицензированные специалисты в области здравоохранения могут помочь",
    items: [
      "Разработать вместе с вами план лечения, основанный на рекомендациях вашего врача, ваших собственных предпочтений и образе жизни",
      "Следовать инструкциям по медицинскому уходу в соответствии с указаниями врача",
      "Осматривать жизненно важные функции и медицинское оборудование",
      "Следить за графиком приема лекарств и отслеживать симптомы",
      "Послеоперационный уход и уход за ранами",
    ],
  },
  // Was missing entirely — source has a testimonials carousel block here
  // referencing the same 3 testimonial posts (English content, no Russian
  // translation exists for these in the source).
  testimonials: [
    { author: "Tayshia B.", role: "Caregiver", rating: 5, content: "I've been employed with Ideal Home Health for the past two years. I appreciate the time and efforts of their office coordinators who in my opinion go above and beyond to ensure I'm on top of keeping my documentation and training up to date. The pay is also some of the highest I've received, and I'm thankful to work here." },
    { author: "Joseph A.", role: "Family Member", rating: 5, content: "After I moved out of New York, caring for my mother became very stressful for my sister and I. Having an aide helps us know she's safe when we can't be there. We have had an incredible experience working with Ideal Home Health, they are professional and made the process easy." },
    { author: "Liz P.", role: "Patient", rating: 5, content: "Thank you. I'm so happy to have the help. My aide helps with my medicine, and helps me do my hair in the morning. I'm happy when I can see my grandchildren and she keeps things tidy since I can't do it. Sarah is very nice, I really, really appreciate the help." },
  ],
  // Was missing entirely.
  prefooterCta: {
    title: "Готовы больше узнать и получить необходимую помощь?",
    description: "Свяжитесь с нами сегодня чтобы обсудить план по обслуживанию который будет подходить именно вашей семье.",
    button: { title: "Зарегистрируйся сегодня", href: "/ru/enroll-now" },
    image: "/images/prefooter-vhn.jpg", // attachment id 738 — filename unverified
  },
};

export const ruHowToEnrollPage = {
  hero: {
    title: "Как зарегестрироваться: начать как пациент",
    description: "Наши квалифицированные помощники по уходу на дому (хоуматенды) могут помочь вам справиться с тяжелой болезнью и жить более здоровой и счастливой жизнью.",
  },
  steps: [
    { number: "01.", title: "Свяжитесь с нами", description: "Свяжитесь с нами, чтобы поговорить со специалистом Ideal Home Health, чтобы обсудить ваши потребности." },
    { number: "02.", title: "Мы поможем вам согласовать детали", description: "Мы поможем вам в течение всего процесса на проверку участия в программе Medicaid, назначим проверку со Штата и поможем в заполнении необходимых документов." },
    // CDPAP mention removed: original offered registering a family member
    // as a "CDPAP помощник" — dropped, kept the aide-matching part.
    { number: "03.", title: "Найдите вашего идеального помощника", description: "Мы подберем для вас идеального помощника по уходу на дому (хоуматенда) с учетом вашего состояния и потребностей." },
    { number: "04.", title: "Получите уход там где он больше всего нужен — дома.", description: "Уход за вами может начаться сразу после небольшого количества документов. Это быстрый и легкий процесс." },
  ],
  bullets: {
    title: "Мы упрощаем получение медицинской помощи.",
    // bullets_section_description — was missing entirely. Genuinely in
    // English in the source (no Russian translation exists for this field),
    // kept verbatim per identical-to-source rule.
    description: "Home Health in New York\nWe have several options to assist you based on your level of need, lifestyle and family preferences.",
    listTitle: "Начать работать с Ideal Home Health",
    // bullets_list_description — was missing entirely, also English in source.
    listDescription: "After coordinating the details with your insurance and providers, we work with your family to ensure you'll receive your desired level of care.",
    // CDPAP clause removed from the first bullet ("а также CDPAP помощник").
    items: [
      "У нас есть высококвалифицированные помощники по уходу на дому (хоуматенды) и опытные медсестра и медбратья",
      "Мы работаем с вами, чтобы создать индивидуальную программу на основе вашего состояния",
      "У нас есть помощники, которые говорят на вашем языке и понимают ваши культурные потребности",
      "Мы работаем с понимающими и терпеливыми координаторами, чтобы гарантировать ответы на любые ваши вопросы",
    ],
  },
  prefooterCta: {
    title: "Готовы больше узнать и получить необходимую помощь?",
    description: "Свяжитесь с нами сегодня чтобы обсудить план по обслуживанию который будет подходить именно вашей семье.",
    // Was wrong: button previously said "Свяжитесь с нами" → /contact-us.
    // Source prefooter_cta_button is actually "Зарегистрируйся сегодня" → /enroll-now.
    button: { title: "Зарегистрируйся сегодня", href: "/ru/enroll-now" },
  },
};

export const ruBecomeCaregiverPage = {
  hero: {
    title: "Становление сиделкой Ideal Home Health",
    description: "Свяжитесь с нами, чтобы поговорить с дружелюбным координатором и узнать, как вы можете получать самые высокие зарплаты в компании, которая действительно заботится о своих сотрудниках и пациентах, за которыми они ухаживают.",
    button: { title: "Записаться сейчас", href: "/ru/enroll-now" },
  },
  steps: [
    { number: "01.", title: "Свяжитесь с нами", description: "Свяжитесь с нами, чтобы начать процесс регистрации и подтвердить, что вы подходите." },
    { number: "02.", title: "Заполните заявку", description: "Координатор свяжется с вами, чтобы заполнить простую заявку и собрать важную информацию. На этом этапе потребуется проверка биографии и тест на наркотики." },
    { number: "03.", title: "Получите предложение о работе", description: "Поздравляем! Теперь вы сиделка Ideal Home Health. Мы подберём для вас подходящего пациента." },
    { number: "04.", title: "Начните оказывать помощь.", description: "Начните заботиться о пациентах." },
  ],
  // Was entirely missing — a secondary text+image intro section (source
  // ACF field group "bullets_section_*") between the steps and the bullet
  // list. Description is genuinely in English in the source (no Russian
  // translation exists for this field) — kept verbatim. No image renders
  // on the live page (confirmed via fetch) despite a source image field.
  intro: {
    title: "Мы делаем получение сертификата сиделки простым.",
    description: "Therapy in Brooklyn, New York\nAt Ideal Home Health, we value our staff and offer high wages, training and support to help you succeed.",
  },
  gettingStarted: {
    listTitle: "Начало работы с Ideal Home Health",
    listDescription: "После того как вы свяжетесь с нами и заполните заявку, мы будем работать над тем, чтобы",
    // CDPAP clause removed from the last bullet ("для Хоуматендов, CDPAP и
    // медицинских работников" → "для Хоуматендов и медицинских работников").
    items: [
      "Мы предложим вам пациента, с которым вы будете идеальной командой",
      "Мы предоставляем нужное и своевременное обучение",
      "Мы предоставляем помощь в получении любого оборудования, которое поможет вам оказать любую помощь в оказании услуг",
      "Мы платим одни из самых высоких заработной платы для Хоуматендов и медицинских работников.",
    ],
  },
  prefooterCta: {
    title: "Начните свою карьеру уже сегодня.",
    description: "Свяжитесь с нами, чтобы начать процесс становления сиделкой Ideal Home Health.",
    button: { title: "Записаться сейчас", href: "/ru/enroll-now" },
  },
};

export const ruCareersPage = {
  hero: {
    title: "Карьера",
    subtitle: "Помощник по уходу на дому (HHA) в Бруклине, Нью-Йорк",
    // Was truncated — source ends "...чтобы осуществить вашу мечту уже сегодня!"
    description: "Если вы квалифицированный, заботливый и преданный HHA, RN, LPN или PCA и хотите продолжить карьеру в динамичной, интересной компании, Ideal Home Health — это оптимальное место работы, чтобы осуществить вашу мечту уже сегодня!",
    image: "/images/home-health-caregiver-career.jpg", // attachment id 893 — filename unverified
    button: { title: "Станьте сиделкой", href: "#qualifyenroll" },
  },
  benefits: {
    title: "Начните захватывающую новую карьеру с Ideal Home Health.",
    description: "Свяжитесь с нами сегодня, чтобы поговорить с нашими представителями и начать процесс регистрации.",
    image: "/images/bullets-section-careers.jpg", // attachment id 729 — filename unverified
    listTitle: "Преимущества Ideal",
    // Was missing entirely (bullets_list_description) — short lead-in phrase.
    listDescription: "В Ideal Home Health,",
    items: [
      "Мы понимаем, что баланс работы и личной жизни важен, и предлагаем гибкий график смен, чтобы подстроиться под ваш распорядок.",
      "Мы упрощаем оплату и настраиваем прямое перечисление на ваш банковский счет.",
      "Мы предлагаем щедрый пакет льгот.",
      // Following 3 items were truncated — restored full source sentences.
      "У нас самая удобная рабочая среда с координаторами, которые направляют вас в ближайшее удобное место и всегда на связи, чтобы помочь с любыми вопросами.",
      "Мы полностью преданы нашему персоналу, всегда учитываем его интересы и оказываем поддержку, что отражается в высокой лояльности сотрудников к Ideal Home Health.",
      "Мы обслуживаем этнически разнообразных клиентов, для нас важны билингвальные помощники, и мы приветствуем культурное и этническое разнообразие.",
    ],
  },
  // This entire section was wrong — title and content were mistranslated/
  // fabricated. Real source lives as raw Gutenberg blocks in the page's
  // content:encoded (id="qualifyenroll" section), not in ACF/postmeta, which
  // is why it was missed initially. Real title is "Подхожу ли я?" and there
  // are genuinely two separate qualifying lists on this page — one for
  // people seeking care, one for people wanting to become a caregiver.
  qualify: {
    title: "Подхожу ли я?",
    patientSubtitle: "Чтобы получить уход:",
    patientItems: [
      "Вы имеете право на Medicaid или думаете, что можете иметь?",
      "Вы живёте в Нью-Йорке?",
      "Вам нужна помощь в повседневных делах, таких как готовка, уборка и личный уход?",
    ],
    caregiverSubtitle: "Чтобы заботиться о ком-то:",
    caregiverItems: [
      "Вам 18 лет или больше?",
      "У вас есть разрешение на работу в США?",
      "Хотите зарабатывать более $21.64/час?",
    ],
    formTitle: "Заявка на работу сиделкой",
  },
  // Was missing entirely — source has a "locations" ACF block on this page.
  locations: {
    label: "обслуживаемые районы",
    title: "Обслуживаем все районы и округа Нью-Йорка",
    description: "Для удобства сиделок и ваших семей у нас есть офис рядом с домом. Ideal Home Health предоставляет лучший уход на дому, услуги компаньона, домработницы, терапии и медсестёр во всех пяти районах Нью-Йорка: Куинс, Бруклин, Манхэттен, Статен-Айленд и Бронкс.",
    button: { title: "Свяжитесь с нами", href: "/ru/enroll-now" },
  },
  jobs: {
    sectionTitle: "Список вакансий",
    items: [
      { title: "Помощник по уходу на дому (HHA)", label: "ПОЛНАЯ / ЧАСТИЧНАЯ ЗАНЯТОСТЬ", location: "БРУКЛИН, НЬЮ-ЙОРК", button: { title: "Подробнее", href: "https://www.indeed.com/m/viewjob?jk=7a68356e36b7bd4a&from=native" } },
    ],
  },
};

export const ruConditionsPage = {
  // NOTE: source postmeta has hero_banner_title/description/image fields,
  // but confirmed via live fetch these are orphaned — the actual page goes
  // straight from nav into the card grid, no hero section at all.
  cards: [
    // "хоматенды" is a typo in the source (missing "у") — preserved verbatim.
    // This card's button is uniquely labeled "Диабет" (repeating the title)
    // instead of "Узнайте больше" like every other card — a real quirk.
    { title: "Диабет", description: "Наши квалифицированные хоматенды могут обеспечить надлежащее лечение диабета, чтобы помочь вам жить более счастливой и здоровой жизнью.", slug: "диабет", buttonLabel: "Диабет" },
    { title: "Инсульт", description: "Жизнь после инсульта может стать лучше с помощью помощника, который понимает, что ваше выздоровление является приоритетом номер один.", slug: "инсульт" },
    { title: "Болезнь Альцгеймера / Деменция", description: "Мы обеспечиваем безопасность членов вашей семьи, заботясь о потребности в уходе за памятью, и помогаем им найти комфорт в повседневной жизни.", slug: "alzheimers-dementia" },
    { title: "Эпилепсия", description: "Эпилепсия может произойти мгновенно, мы можем быть рядом, чтобы обеспечить вашу безопасность, когда вам это нужно больше всего.", slug: "эпилепсия" },
    { title: "Предотвращение падений", description: "Предотвращение падений может спасти вашу жизнь, снизить риск потенциальных осложнений и помочь вам сохранить или улучшить свою мобильность.", slug: "предотвращение-падений" },
    { title: "Помощь с ежедневной рутиной", description: "Наши высококвалифицированные помощники по уходу на дому (хоуматенды) окажут вам помощь в повседневной жизни и чтобы вы продолжали заниматься вашим любимым делом.", slug: "помощь-с-ежедневной-рутиной-2" },
    { title: "Болезнь Паркинсона", description: "Наши высококвалифицированные помощники по уходу на дому специализируются по уходу за болезнью Паркинсона, помогая вам добиться наилучшего качества жизни.", slug: "parkinsons" },
    { title: "Артрит", description: "Когда перемещение вызывает у вас боль, мы можем помочь вам заниматься любимым делом с индивидуальным подходом к вашим потребностям.", slug: "артрит" },
    // Grid teaser title genuinely differs from the linked page's own title
    // ("Поможем поднять и перенести") in the source — preserved as-is, both
    // are real source text, just for different contexts (teaser vs. full page).
    { title: "Подъем и перенос", description: "У нас есть обученные специалисты, чтобы безопасно и надежно перемещать пациентов, во избежание ненужных травм и стресса.", slug: "поможем-поднять-и-перенести" },
    { title: "Круглосуточный уход", description: "Если вам нужна круглосуточная помощь, наши опытные помощники по уходу на дому (хоуматенды) могут быть рядом с вами, когда вы в нас больше всего нуждаетесь.", slug: "уход-и-забота-24-7" },
    { title: "Постбольничный уход", description: "После пребывания в больнице наши высококвалифицированные помощники по уходу на дому (хоуматенды) помогут вам соблюдать график выздоровления и как можно быстрее прийти в форму.", slug: "постбольничный-уход" },
    { title: "Уход за пациентами кто использует инвалидные кресла и кто прикован к кровати", description: "Если член вашей семьи прикован к инвалидной коляске или к кровати, доверьтесь нашему высококвалифицированному специалисту, который поможет ему безопасно перемещаться по своему пространству и выполнять повседневные дела.", slug: "опора-для-инвалидного-кресла-кровати" },
    { title: "Индивидуальный уход", description: "Если ваши потребности и состояние требуют специального ухода или внимания, то наши сертифицированные мед.братья и мед.сестра помогут вам и вашей семье разработать индивидуальный план по уходу за вами.", slug: "индивидуальный-уход" },
  ],
  prefooterCta: {
    title: "Готовы больше узнать и получить необходимую помощь?",
    description: "Свяжитесь с нами.",
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
};

export const ruContactUsPage = {
  hero: {
    title: "Свяжитесь с нами",
    highlight: "Эксперты по уходу на дому в Нью-Йорке",
    paragraphs: [
      "Если у вас есть общий запрос, пожалуйста свяжитесь с нами по телефону (718) 517-2424 или заполните форму с вашим сообщением.",
    ],
    links: [
      { prefix: "Если вы хотите стать пациентом или опекуном, ", label: "зарегистрируйтесь сегодня.", href: "/ru/enroll-now" },
      // Was missing entirely — third sentence in contact_banner_title_description.
      { prefix: "Если вы ищете информацию о карьере в Ideal HH, не связанной с опекой пациентов, ", label: "просмотрите наш список вакансий.", href: "/ru/careers" },
    ],
  },
  officeCards: [
    { title: "Бруклин", address: "2617 East 16th Street, Floor 2, Brooklyn, NY 11235", button: { title: "Узнать больше", href: "/locations/brooklyn" } },
    { title: "Бронкс", address: "391 East 149th Street, Suite 515, Bronx, NY 10455", button: { title: "Узнать больше", href: "/locations/bronx" } },
  ],
  prefooterCta: {
    title: "Если вы хотите стать пациентом или опекуном, зарегистрируйтесь сегодня.",
    description: "Зарегестрируйтесь сегодня",
    button: { title: "Зарегестрируйтесь сегодня", href: "/ru/enroll-now" },
    image: "/images/iStock-1181209194.jpg",
  },
};

export const ruEnrollNowPage = {
  hero: {
    label: "Ideal Home Health",
    title: "Зарегистрируйтесь сегодня",
    highlight: "сегодня",
    // Genuinely a small English H1 embedded inside the Russian description
    // field in the source — kept as-is.
    subheading: "Home Health Aide in New York",
    description: "Наши опекуны помогут вам вести более счастливый и здоровый образ жизни. Позвоните нам прямо сейчас, чтобы поговорить с представителем Ideal Home Health и узнать, как мы можем улучшить ваше обслуживание.",
    phone: "(718) 517 - 2424",
  },
  // Source has a genuine copy-paste bug: both the patient and caregiver
  // qualification lists are labeled "Чтобы заботиться о ком-то:" in the
  // original CMS data, and both sit under a single shared title "Имею ли я
  // право?" — there is no second heading ("Готовы стать сиделкой?" was
  // fabricated in a previous pass and has been removed). Preserved as-is to
  // stay faithful to what's actually in the export.
  qualifyTitle: "Имею ли я право?",
  patientSection: {
    subtitle: "Чтобы заботиться о ком-то:",
    questions: [
      "Имеете ли вы право на участие в программе Medicaid или думаете, что можете?",
      "Вы живете в Нью-Йорке?",
      "Вам нужна помощь в повседневных делах, таких как приготовление пищи, уборка и уход за собой?",
    ],
  },
  caregiverSection: {
    subtitle: "Чтобы заботиться о ком-то:",
    questions: ["Вам 18 или больше?", "У вас есть разрешение на работу в США?", "Вы заинтересованы в получении оплаты более $ 21.64 / час?"],
  },
  formSection: { title: "Зарегистрируйтесь сегодня" },
  prefooterCta: {
    title: "Есть вопросы?",
    description: "Свяжитесь с нами сегодня, чтобы поговорить с сострадательным представителем, который ответит на любые ваши вопросы, большие или маленькие.",
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
};

export const ruBenefitsPage = {
  // NOTE: source postmeta also has "home_banner_*" fields (what looked like
  // a second, separate hero banner) — confirmed by fetching the live page
  // directly that these are orphaned data never actually rendered by the
  // current template. Not migrated; including them (as an earlier pass did)
  // added a section that doesn't exist on the real site.
  hero: {
    label: "Ideal Home Health",
    title: "Услуги по уходу на дому, покрываемые программами Medicaid и Medicare",
    // Was truncated — source ends "...доступно для пожилых людей, имеющих
    // право на участие в программах Medicaid и Medicare."
    description: "Воспользуйтесь надежными услугами по уходу на дому в Нью-Йорке, включающими индивидуальную поддержку, помощь с транспортом, легкую уборку, напоминания о приеме лекарств и многое другое — доступно для пожилых людей, имеющих право на участие в программах Medicaid и Medicare.",
    // attachment id 22597 — filename confirmed via SQL dump AND the live
    // page's actual rendered <img> src (wp-content/uploads/2026/06/Rectangle-1.png).
    image: "/images/Rectangle-1.png",
    phone: "(718) 517-2424",
    // Was missing entirely (hero_banner_badges).
    badges: [
      { bold: "220 долларов в месяц", normal: "для подходящих товаров повседневного спроса" },
      { bold: "До 360 долларов в год", normal: "в программе поощрений за здоровый образ жизни" },
      { bold: "Круглосуточная поддержка", normal: "для надежных опекунов" },
    ],
    primaryButton: { title: "Зарегистрироваться сейчас", href: "/ru/enroll-now" },
  },
  qualify: {
    cardTitle: "Вы можете иметь право на участие, если",
    heading: "Сколько стоит уход на дому от компании Ideal Home Health?",
    // Was missing the second paragraph entirely.
    description: "Для многих пожилых жителей Нью-Йорка, отвечающих установленным критериям, услуги по уходу на дому от Ideal Home Health могут быть предоставлены без каких-либо затрат из собственного кармана в рамках программ Medicaid и Medicare.\n\nВместо того чтобы предлагать семьям выбирать пакет услуг с почасовой оплатой, мы сначала проверяем, имеете ли вы или ваш близкий право на получение льгот по уходу на дому, покрываемых страховкой.",
    button: { title: "Проверить, имею ли я право на участие", href: "/ru/enroll-now" },
    items: ["Вам 55 лет или больше", "У вас есть страховка Medicaid и Medicare", "Вы живете в Бруклине, Бронксе, Квинсе, Стэйтен-Айленде или Нью-Йорке", "Вам нужна помощь в повседневных делах"],
  },
  included: {
    title: "Что входит в ваши льготы по уходу на дому?",
    button: { title: "Получите помощь с регистрацией уже сегодня", href: "/ru/enroll-now" },
    items: [
      { title: "Средства личной гигиены", description: "Помощь в принятии ванны, одевании, стирке белья и выполнении повседневных личных дел." },
      { title: "Помощь в переезде", description: "Помощь в поездках на приемы к врачу, по делам и на общественные мероприятия." },
      { title: "Легкая уборка", description: "Приготовление еды, легкая уборка и общение на дому." },
      { title: "Напоминания о приёме лекарств", description: "Ежедневная помощь с напоминаниями о приёме лекарств и их приёмом." },
    ],
  },
  extras: {
    title: "Участники программы, отвечающие установленным критериям, могут получить не только услуги по уходу на дому",
    items: [
      { title: "220 долларов в месяц", description: "На приобретение товаров, необходимых для удовлетворения ваших повседневных потребностей." },
      { title: "До 360 долларов в год", description: "Доступно в рамках программы поощрений за здоровый образ жизни." },
      { title: "Помощь в получении рецептов", description: "Лекарства и помощь фармацевта, которые помогут вам не сбиться с курса." },
      { title: "Бесплатно для участников программ Medicaid и Medicare", description: "Для участников, отвечающих требованиям программы." },
    ],
  },
  steps: {
    title: "С чего начать?",
    button: { title: "Зарегистрируйтесь сейчас", href: "/ru/enroll-now" },
    // CDPAP clause removed from step 3 ("либо поможем вам зарегистрировать
    // ... в качестве лица, осуществляющего уход по программе CDPAP").
    // Steps 1, 2, and 4 were all truncated — restored full source sentences.
    items: [
      { number: "01.", title: "Свяжитесь с нами", description: "Свяжитесь с нами, чтобы обсудить свои потребности со специалистом по работе с клиентами Ideal Home Health, и мы ответим на ваши вопросы и поможем вам сделать первый шаг." },
      { number: "02.", title: "Мы поможем вам согласовать все детали", description: "Мы поможем вам со всем необходимым оформлением документов, включая проверку права на участие в программе Medicaid, запись на государственные обследования и координацию действий с врачами, чтобы упростить весь процесс." },
      { number: "03.", title: "Найдите своего идеального помощника", description: "Мы подберем для вас сертифицированного помощника, который идеально подойдет с учетом вашего конкретного состояния и потребностей." },
      { number: "04.", title: "Получить медицинскую помощь", description: "Ваше индивидуальное обслуживание может начаться сразу же после оформления всех необходимых документов. Это быстрая и простая процедура, призванная обеспечить вам необходимую помощь без лишних задержек." },
    ],
  },
  whyChoose: {
    title: "Почему семьи выбирают Ideal Home Health",
    items: [
      { title: "Непрерывность и доверие", description: "Постоянная долгосрочная забота способствует укреплению доверия со стороны клиентов и их семей." },
      { title: "Круглосуточная поддержка", description: "Помощь доступна круглосуточно, когда вам это нужно." },
      { title: "Культурная и языковая совместимость", description: "Мы уделяем особое внимание подбору для клиентов ухаживающего персонала, который понимает их язык и культуру." },
      { title: "Тщательно проверенные помощники", description: "Все сотрудники, занимающиеся уходом, проходят проверку биографических данных и профессиональную подготовку." },
    ],
  },
  quote: {
    label: "«Заботимся о вас, как о родных».",
    title: "Забота, как в семье",
    // Was truncated — source ends "...даря при этом их близким душевное
    // спокойствие."
    description: "В Ideal Home Health мы подходим к уходу индивидуально. Мы помогаем пожилым людям чувствовать себя в безопасности, получать необходимую поддержку и жить с комфортом в своей семье, даря при этом их близким душевное спокойствие.",
  },
  // Was missing entirely — source has both a "locations" ACF block and a
  // separate "services" (office cards) block on this page.
  locations: {
    label: "Идеальное домашнее здравоохранение",
    title: "Услуги по уходу на дому в Нью-Йорке",
    description: "Компания «Ideal Home Health» предоставляет услуги по уходу на дому для пожилых людей и семей, имеющих на это право, по всему Нью-Йорку.",
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
  officeCards: [
    { title: "Услуги в Бруклине", address: "2617 East 16th Street, Floor 2, Brooklyn, NY 11235", button: { title: "Услуги в Бруклине", href: "/locations/brooklyn" } },
    { title: "Услуги в Бронксе", address: "391 East 149th Street, Suite 515, Bronx, NY 10455", button: { title: "Услуги в Бронксе", href: "/locations/bronx" } },
  ],
  prefooterCta: {
    title: "Узнайте, имеете ли вы право на бесплатный уход на дому",
    description: "Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию и обсудить индивидуальный план ухода на дому, идеально подходящий для вашей семьи в Нью-Йорке.",
    button: { title: "Проверить, имею ли я право на участие", href: "/ru/enroll-now" },
  },
};
