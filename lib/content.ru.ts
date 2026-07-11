// Russian homepage content, extracted verbatim from the WordPress export
// (post_name: ru-home-page). Reuses the same images as the English homepage
// (same WP attachment IDs — 11071, 11084, 11098, 11111, 1150).

export const ruReviewsSection = {
  title: "Что говорят наши клиенты: доверие домашнему уходу в Нью-Йорке",
  reviews: [
    { name: "Шерис Каррауэй", date: "2022-10-26", rating: 5, content: "Это лучшее агентство на сегодняшний день, и я горжусь тем, что выбрал его и буду продолжать с ним сотрудничать еще некоторое время." },
    { name: "Надин Доус", date: "2023-04-24", rating: 5, content: "Персонал, с которым я сталкивался, просто замечательный. Если ваше призвание — помогать людям, то это идеальная компания для работы." },
    { name: "Дениз Хаммондс", date: "2024-01-22", rating: 5, content: "Идеальное домашнее здравоохранение — это лучшее, что может быть. Я никогда не сталкивалась с таким дружелюбным и приятным агентством. Особая благодарность Юлиане и мисс Пауле, которые постоянно сообщали мне о состоянии дел и заверили, что все будет хорошо." },
    { name: "Дачира Ривера Рамос", date: "2024-02-15", rating: 5, content: "(Перевод Google) Очень внимательный и услужливый персонал, хороший уход и оборудование." },
    { name: "Юсеф Эльхалаби", date: "2024-04-26", rating: 5, content: "Замечательные люди, преданные своему делу, очень уважительные, отвечают на все вопросы простым и понятным языком. Особая благодарность Розмари, Аннабил и Эмили." },
    { name: "Шелби Гонсалес", date: "2024-05-25", rating: 5, content: "Мой опыт был замечательным. Я могу быть прокрастинатором, но они не отпускали меня и помогали мне на протяжении всего пути." },
    { name: "Racquel McDonald", date: "2024-08-10", rating: 5, content: "Ideal Home Health is the best agency have ever work with. There are very professional always answer when you call and help with whatever you need." },
    { name: "Лоррейн Маллен", date: "2024-08-13", rating: 5, content: "Все сотрудники Ideal проявили большое терпение, заботу, отзывчивость, доброжелательность и готовность помочь мне при поступлении в программу. Я им искренне благодарен." },
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
    { name: "Brooklyn", address: "2617 East 16th Street, Floor 2, Brooklyn, NY 11235", button: { title: "Brooklyn Services", href: "/ru/locations/brooklyn" } },
    { name: "Bronx", address: "391 East 149th Street, Suite 515, Bronx, NY 10455", button: { title: "Bronx Services", href: "/ru/locations/bronx" } },
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
    image: "/images/trusted-home-care-agency-new-york-city.jpg",
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
    description: "Начиная с подвала одного из наших партнеров, в Ideal Home Health работало всего 4 офисных сотрудника в Бруклине. И всего через 5 лет, компания выросла в сообщество из 1500+ человек по всем 5 районам Нью-Йорка. В дополнение к тому что мы предоставляем услуги по уходу за пожилыми людьми, Ideal Home Health скооперировался с многочисленными коммуникационными центрами, с домами для пристарелых, продовольственными организациями, благотворительностью и общественными организациями чтобы продолжить положительно влиять на соседей в Нью-Йорке.",
    image: "/images/Daco_924160.png",
  },
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
  // Was missing entirely from the Russian page — the source "acf/testimonials"
  // block references these same 3 testimonial posts used on the English page.
  // Content is English in the source (no Russian translation exists for
  // these), identical to the EN testimonialsPage.testimonials entries.
  testimonials: [
    { author: "Joseph A.", role: "Family Member", rating: 5, content: "After I moved out of New York, caring for my mother became very stressful for my sister and I. Having an aide helps us know she's safe when we can't be there. We have had an incredible experience working with Ideal Home Health, they are professional and made the process easy." },
    { author: "Liz P.", role: "Patient", rating: 5, content: "Thank you. I'm so happy to have the help. My aide helps with my medicine, and helps me do my hair in the morning. I'm happy when I can see my grandchildren and she keeps things tidy since I can't do it. Sarah is very nice, I really, really appreciate the help." },
    { author: "Tayshia B.", role: "Caregiver", rating: 5, content: "I've been employed with Ideal Home Health for the past two years. I appreciate the time and efforts of their office coordinators who in my opinion go above and beyond to ensure I'm on top of keeping my documentation and training up to date. The pay is also some of the highest I've received, and I'm thankful to work here." },
  ],
  reviews: [
    { rating: 5, name: "Джессика П.", location: "Бруклин, Нью-Йорк", review: "I was able to register my father in law for an aide very quickly, we were all setup within about a week. Ideal HH staff were great to work with, and the office is 15 minutes from my apartment which was convenient." },
    { rating: 4, name: "Ирсал М.", location: "Бронкс, Нью-Йорк", review: "The pay is very good and they accommodate my time off for religious holidays. I had some challenges with my paperwork to register but overall it has been a good experience." },
    { rating: 5, name: "Джордан Х.", location: "Куинс, Нью-Йорк", review: "We needed a caregiver for a special case, my father has dementia in addition to his diabetes and lack of mobility. Ideal Home Health took the time to discuss all the details of his care requirements." },
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
      title: "Помощники по уходу на дому (HHA)",
      description: "Our Department of Health certified Home Health Aides (HHAs) offer compassionate assistance with Activities of Daily Living (ADLs). From personal care to medication reminders, our in-home aides in NYC help maintain independence. All HHAs receive rigorous bi-annual training, ensuring top safety standards.",
      button: { title: "Узнайте больше", href: "/ru/services/home-health-aide" },
      image: "/images/home-health-aides-new-york.jpg",
    },
    {
      title: "Медбратья и медсестра — квалифицированный медицинский уход на дому",
      description: "Receive skilled nursing care in your New York City home with our licensed Visiting Home Nurses (RNs/LPNs). We offer medication management, wound care, post-operative support, chronic disease management, and more. Our nurses create custom plans of care for your optimal health and recovery.",
      button: { title: "Узнайте больше", href: "/ru/services/visiting-home-nurse" },
      image: "/images/visiting-home-nurse-new-york.jpg",
    },
  ],
  whyChoose: {
    title: "Почему стоит выбрать Ideal Home Health для ухода на дому в Нью-Йорке?",
    items: ["Аккредитованы и заслуживают доверия", "Опытная и заботливая команда", "Индивидуальные и гибкие планы", "Местная экспертиза Нью-Йорка", "Беспроблемная регистрация"],
    button: { title: "Зарегистрироваться сейчас", href: "/ru/enroll-now" },
    image: "/images/choose-ideal-home-health-care-nyc.jpg",
  },
};

export const ruHomeHealthAidePage = {
  hero: {
    label: "Обслуживание",
    title: "Получите уход там где он больше всего нужен - дома.",
    highlight: "дома",
    description: "Наши помощники по уходу на дому (хоуматенды) являются сертифицированными специалистами Министерства здравоохранения в ваших ежедневных нуждах и состоянии. Все наши сертифицированные хоуматенды проходят тренинги 2 раза в год.",
    image: "/images/certified-home-health-aides-new-york.jpg",
  },
  howTheyHelp: {
    title: "Как мы помогаем",
    // Was missing entirely — restored from source (bullets_list_description).
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
};

export const ruVisitingHomeNursePage = {
  hero: {
    label: "Обслуживание",
    title: "Медбратья и медсестра",
    subtitle: "Высокий уровень обслуживания от лицензированных медсестер и медбратьев.",
    description: "Наши дипломированные медбратья и медсестра будут следить за вашими потребностями и состоянием здоровья, чтобы составить для вас индивидуальный план ухода.",
    image: "/images/registered-visiting-home-nurse-nyc.jpg",
  },
  bullets: {
    listTitle: "Квалифицированные медбратья и медсестра в Ideal Home Health",
    listDescription: "Наши лицензированные специалисты в области здравоохранения могут помочь",
    items: [
      "Разработать вместе с вами план лечения, основанный на рекомендациях вашего врача, ваших собственных предпочтений и образе жизни",
      "Следовать инструкциям по медицинскому уходу в соответствии с указаниями врача",
      "Осматривать жизненно важные функции и медицинское оборудование",
      "Следить за графиком приема лекарств и отслеживать симптомы",
      "Послеоперационный уход и уход за ранами",
    ],
    image: "/images/visiting-home-nurse-care-nyc.jpg",
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
    { number: "04.", title: "Получите уход там где он больше всего нужен - дома.", description: "Уход за вами может начаться сразу после небольшого количества документов. Это быстрый и легкий процесс." },
  ],
  bullets: {
    title: "Мы упрощаем получение медицинской помощи.",
    listTitle: "Начать работать с Ideal Home Health",
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
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
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
    description: "Если вы квалифицированный, заботливый и преданный HHA, RN, LPN или PCA и хотите продолжить карьеру в динамичной, интересной компании, Ideal Home Health — это оптимальное место для вас.",
    image: "/images/home-health-caregiver-career.jpg",
    button: { title: "Станьте сиделкой", href: "#qualifyenroll" },
  },
  benefits: {
    title: "Начните захватывающую новую карьеру с Ideal Home Health.",
    description: "Свяжитесь с нами сегодня, чтобы поговорить с нашими представителями и начать процесс регистрации.",
    listTitle: "Преимущества Ideal",
    items: [
      "Мы понимаем, что баланс работы и личной жизни важен, и предлагаем гибкий график смен, чтобы подстроиться под ваш распорядок.",
      "Мы упрощаем оплату и настраиваем прямое перечисление на ваш банковский счет.",
      "Мы предлагаем щедрый пакет льгот.",
      "У нас самая удобная рабочая среда с координаторами, которые направляют вас в ближайшее удобное место и всегда на связи.",
      "Мы полностью преданы нашему персоналу, всегда учитываем его интересы и оказываем поддержку.",
      "Мы обслуживаем этнически разнообразных клиентов, для нас важны билингвальные помощники.",
    ],
  },
  qualify: {
    title: "Имею ли я право?",
    subtitle: "Чтобы стать сиделкой:",
    items: ["Вам 18 или больше?", "У вас есть разрешение на работу в США?", "Вы заинтересованы в получении оплаты более $21.64 / час?"],
    formTitle: "Заявка на должность сиделки",
  },
  jobs: [{ title: "Помощник по уходу на дому (HHA)", label: "ПОЛНАЯ / ЧАСТИЧНАЯ ЗАНЯТОСТЬ", location: "БРУКЛИН, НЬЮ-ЙОРК" }],
};

export const ruConditionsPage = {
  hero: {
    title: "Уход не универсален. Мы понимаем, что у вашего состояния есть особые потребности.",
    description: "Живите полной жизнью и управляйте своим состоянием с помощью услуг, которые поддерживают ваш распорядок дня, образ жизни и индивидуальные потребности в уходе.",
    image: "/images/in-home-health-care-nyc.jpg",
  },
  cards: [
    { title: "Диабет", description: "Наши квалифицированные хоуматенды могут обеспечить надлежащее лечение диабета, чтобы помочь вам жить более счастливой и здоровой жизнью.", slug: "diabetes" },
    { title: "Инсульт", description: "Жизнь после инсульта может стать лучше с помощью помощника, который понимает, что ваше выздоровление является приоритетом номер один.", slug: "stroke" },
    { title: "Болезнь Альцгеймера / Деменция", description: "Мы обеспечиваем безопасность членов вашей семьи, заботясь о потребности в уходе за памятью, и помогаем им найти комфорт в повседневной жизни.", slug: "alzheimers-dementia" },
    { title: "Эпилепсия", description: "Эпилепсия может произойти мгновенно, мы можем быть рядом, чтобы обеспечить вашу безопасность, когда вам это нужно больше всего.", slug: "epilepsy" },
    { title: "Предотвращение падений", description: "Предотвращение падений может спасти вашу жизнь, снизить риск потенциальных осложнений и помочь вам сохранить или улучшить свою мобильность.", slug: "fall-prevention" },
    { title: "Помощь с ежедневной рутиной", description: "Наши высококвалифицированные помощники по уходу на дому окажут вам помощь в повседневной жизни, чтобы вы продолжали заниматься любимым делом.", slug: "help-with-daily-tasks" },
    { title: "Болезнь Паркинсона", description: "Наши высококвалифицированные помощники по уходу на дому специализируются по уходу за болезнью Паркинсона, помогая вам добиться наилучшего качества жизни.", slug: "parkinsons" },
    { title: "Артрит", description: "Когда перемещение вызывает у вас боль, мы можем помочь вам заниматься любимым делом с индивидуальным подходом к вашим потребностям.", slug: "arthritis" },
    { title: "Поможем поднять и перенести", description: "У нас есть обученные специалисты, чтобы безопасно и надежно перемещать пациентов, во избежание ненужных травм и стресса.", slug: "lifting-and-transferring" },
    { title: "Уход и забота 24/7", description: "Если вам нужна круглосуточная помощь, наши опытные помощники по уходу на дому могут быть рядом с вами, когда вы в нас больше всего нуждаетесь.", slug: "live-in-24-hour-care" },
    { title: "Постбольничный уход", description: "После пребывания в больнице наши высококвалифицированные помощники по уходу на дому помогут вам соблюдать график выздоровления и как можно быстрее восстановиться.", slug: "post-hospital-care" },
    { title: "Опора для инвалидного кресла / кровати", description: "Если член вашей семьи прикован к инвалидной коляске или к кровати, доверьтесь нашему высококвалифицированному специалисту.", slug: "wheel-chair-bed-bound-support" },
    { title: "Индивидуальный уход", description: "Если ваши потребности и состояние требуют специального ухода или внимания, то наши сертифицированные мед.братья и мед.сестра помогут вам и вашей семье.", slug: "individualized-care" },
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
    ],
  },
  officeCards: [
    { title: "Бруклин", address: "2617 East 16th Street, Floor 2, Brooklyn, NY 11235", button: { title: "Узнать больше", href: "/ru/locations/brooklyn" } },
    { title: "Бронкс", address: "391 East 149th Street, Suite 515, Bronx, NY 10455", button: { title: "Узнать больше", href: "/ru/locations/bronx" } },
  ],
  prefooterCta: {
    title: "Если вы хотите стать пациентом или опекуном, зарегистрируйтесь сегодня.",
    description: "Зарегестрируйтесь сегодня",
    button: { title: "Зарегестрируйтесь сегодня", href: "/ru/enroll-now" },
    image: "/images/iStock-1181209194.jpg",
  },
};

export const ruEnrollNowPage = {
  hero: { title: "Зарегистрируйтесь сегодня" },
  // Source has a genuine copy-paste bug: both the patient and caregiver
  // qualification sections are labeled "Чтобы заботиться о ком-то:" in the
  // original CMS data. Preserved as-is (not corrected) to stay faithful to
  // what's actually in the export.
  patientSection: {
    title: "Имею ли я право?",
    subtitle: "Чтобы заботиться о ком-то:",
    questions: [
      "Имеете ли вы право на участие в программе Medicaid или думаете, что можете?",
      "Вы живете в Нью-Йорке?",
      "Вам нужна помощь в повседневных делах, таких как приготовление пищи, уборка и уход за собой?",
    ],
  },
  caregiverSection: {
    title: "Готовы стать сиделкой?",
    subtitle: "Чтобы заботиться о ком-то:",
    questions: ["Вам 18 или больше?", "У вас есть разрешение на работу в США?", "Вы заинтересованы в получении оплаты более $21.64/час?"],
  },
  formSection: { title: "Зарегистрируйтесь сегодня" },
  prefooterCta: {
    title: "Есть вопросы?",
    description: "Свяжитесь с нами сегодня, чтобы поговорить с сострадательным представителем, который ответит на любые ваши вопросы, большие или маленькие.",
    button: { title: "Свяжитесь с нами", href: "/ru/contact-us" },
  },
};

export const ruBenefitsPage = {
  hero: {
    label: "Ideal Home Health",
    title: "Услуги по уходу на дому, покрываемые программами Medicaid и Medicare",
    description: "Воспользуйтесь надежными услугами по уходу на дому в Нью-Йорке, включающими индивидуальную поддержку, помощь с транспортом, легкую уборку, напоминания о приеме лекарств и многое другое.",
  },
  qualify: {
    cardTitle: "Вы можете иметь право на участие, если",
    heading: "Сколько стоит уход на дому от компании Ideal Home Health?",
    description: "Для многих пожилых жителей Нью-Йорка, отвечающих установленным критериям, услуги по уходу на дому от Ideal Home Health могут быть предоставлены без каких-либо затрат из собственного кармана в рамках программ Medicaid и Medicare.",
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
    items: [
      { number: "01.", title: "Свяжитесь с нами", description: "Свяжитесь с нами, чтобы обсудить свои потребности со специалистом по работе с клиентами Ideal Home Health, и мы поможем вам сделать первый шаг." },
      { number: "02.", title: "Мы поможем вам согласовать все детали", description: "Мы поможем вам со всем необходимым оформлением документов, включая проверку права на участие в программе Medicaid." },
      { number: "03.", title: "Найдите своего идеального помощника", description: "Мы подберем для вас сертифицированного помощника, который идеально подойдет с учетом вашего конкретного состояния и потребностей." },
      { number: "04.", title: "Получить медицинскую помощь", description: "Ваше индивидуальное обслуживание может начаться сразу же после оформления всех необходимых документов." },
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
    description: "В Ideal Home Health мы подходим к уходу индивидуально. Мы помогаем пожилым людям чувствовать себя в безопасности, получать необходимую поддержку и жить с комфортом в своей семье.",
  },
  prefooterCta: {
    title: "Узнайте, имеете ли вы право на бесплатный уход на дому",
    description: "Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию и обсудить индивидуальный план ухода на дому, идеально подходящий для вашей семьи в Нью-Йорке.",
    button: { title: "Проверить, имею ли я право на участие", href: "/ru/enroll-now" },
  },
};
