// Arabic (AR) content, built from live fetches of https://idealhh.com/ar/...
// pages — not from the export. Cross-checked the same way as RU/ES.
//
// SITE COMPROMISE NOTE: search results and at least one live page for this
// domain currently show injected spam/SEO content unrelated to Ideal Home
// Health (gambling sites, "AI business name generator", essay-writing
// services, a suspiciously generic "Ideal Health & Wellness" wellness-brand
// paragraph on the AR homepage that doesn't match the site's actual voice
// or business). This is excluded here rather than "preserved" — it isn't
// genuine site content, it's a compromise/spam-injection artifact. Worth
// flagging to whoever manages the WordPress install.
//
// AR keeps nearly all slugs identical to English (see slug-map.ts) — the
// one confirmed exception is Contact Us, which kept the "-2" suffix live.

export const arReviewsSection = {
  // Genuinely untranslated English heading even on this Arabic page —
  // kept verbatim, matching the identical pattern already found on RU/ES.
  title: "What Our Clients Say: Trusted Home Care in New York",
  reviews: [
    { name: "لورين مولن", date: "2024-08-13", rating: 5, content: "كان الجميع في \u201cIdeal\u201d صبورين للغاية، ومهتمين، ومتعاونين، ولطفاء، وذوي معرفة، ومفيدين، وعلى استعداد للمساعدة في تسهيل دخولي إلى البرنامج. إميلي، بولا والعديد من الموظفين الآخرين بذلوا جهدًا إضافيًا لضمان أن تكون تجربتي سلسة. أنا ممتن حقًا." },
    { name: "راكيل ماكدونالد", date: "2024-08-10", rating: 5, content: "الرعاية الصحية المنزلية المثالية هي أفضل وكالة عملت معها على الإطلاق. إنهم محترفون للغاية، يجيبون دائمًا عندما تتصل ويساعدونك في أي شيء تحتاجه. دائمًا أتلقى راتبي في الوقت المحدد، إنهم الأفضل وأنا سعيدة بالعمل معهم ❤️." },
    { name: "شيلبي غونزاليس", date: "2024-05-25", rating: 5, content: "كانت تجربتي رائعة. قد أكون مماطلاً أحيانًا لكنهم ظلوا يتابعونني وساعدوني طوال الطريق." },
    { name: "يوسف الحلبي", date: "2024-04-26", rating: 5, content: "أناس عظماء، ملتزمون، محترمون للغاية، يجيبون على جميع الأسئلة بإنجليزية بسيطة ومباشرة وسهلة الفهم، يتابعون كل نشاط ويساعدون في إيجاد الحلول والخيارات لأي مشكلة أو صعوبة قد تواجهها. ممتن وشاكر جزيل الشكر لروز ماري، أنابيل وإميلي." },
    // The source itself pastes the Spanish original here (not English) —
    // a WPML "translated by Google" artifact, kept verbatim including the
    // untranslated Spanish line.
    { name: "داشيرا ريفيرا راموس", date: "2024-02-15", rating: 5, content: "(ترجمة بواسطة جوجل) منتبهون جدًا ومتعاونون، رعاية جيدة ومعدات.\n(الأصل)\nMuy atentos y servicial, un buen cuidado y equipo." },
    { name: "دينيس هاموندز", date: "2024-01-22", rating: 5, content: "الرعاية الصحية المنزلية المثالية هي الأفضل 💯.. لم أتعامل من قبل مع وكالة كانت بهذه اللطف والود.. يعملن جميع السيدات بشكل رائع، ولكن هناك اثنتان يجب أن أذكرهما وهن يولليانا والسيدة باولا.. لقد أمسكت بقرون الثور وقادته للنهاية.. وخلال كل ذلك واصلت التواصل معي كما فعلت يولليانا بشأن حالة كل شيء.. ما فهمته منهن هو أنهن طمأنني أن كل شيء سيكون رائعًا 👍🏾… إنهن مبدعات فيما يقمن به، ومرة أخرى أريد أن أشكركن من أعماق قلبي… سيدات جميلات 🤗" },
    // Genuinely just the reviewer's own name repeated as the review body —
    // an empty-review glitch in the source, kept as found rather than
    // fabricating review text that isn't there.
    { name: "نادين دوس", date: "2023-04-24", rating: 5, content: "نادين دوس" },
    { name: "شيريس كارراواي", date: "2022-10-26", rating: 5, content: "هذه هي أفضل وكالة حتى الآن وأنا فخور بأنني اخترتها وسأستمر في التعامل معها لفترة" },
  ],
};

export const arHomePage = {
  hero: {
    title: "Ideal Home Health: خدمات رعاية منزلية مليئة بالرحمة في مدينة نيويورك",
    description: "اختبر خدمات رعاية صحية منزلية إنسانية وعالية الجودة في منزلك مع Ideal Home Health. كوكالة رعاية صحية منزلية معتمدة ورائدة في مدينة نيويورك، نحن ملتزمون بتقديم حلول رعاية منزلية مخصصة تمكّنك من العيش باستقلالية وراحة. سواء كنت بحاجة إلى مساعدة في أنشطة الحياة اليومية أو دعم متخصص، فإن فريقنا المخلص موجود من أجلك. اكتشف الفرق مع Ideal اليوم.",
    primaryButton: { title: "كن مقدم رعاية", href: "/ar/careers/#qualifyenroll" },
    secondaryButton: { title: "قدّم طلبًا للرعاية المنزلية", href: "/ar/enroll-now" },
  },
  heroImage: "/images/compassionate-home-health-care-services-nyc.jpg",
  servicesTeaser: [
    {
      icon: "heart",
      title: "مساعدو الصحة المنزلية للرعاية الشخصية",
      description: "يقدم مساعدونا الصحيون المعتمدون رعاية شخصية مليئة بالرحمة ومساعدة في أنشطة الحياة اليومية. نحن نمكّن الاستقلالية في منزلك في نيويورك.",
      button: { title: "اعرف المزيد", href: "/ar/services/home-health-aide" },
    },
    {
      icon: "heart-pulse",
      title: "ممرضون منزليون خبراء للرعاية الطبية المتخصصة",
      description: "يقدم ممرضونا المرخصون زيارات منزلية مع رعاية طبية متخصصة في منزلك في مدينة نيويورك، مع خطط مخصصة لاحتياجاتك.",
      button: { title: "اعرف المزيد", href: "/ar/services/visiting-home-nurse" },
    },
  ],
  whoBenefits: {
    label: "Ideal Home Health",
    title: "من يستفيد من Ideal Home Health Care في نيويورك؟",
    image: "/images/home-health-care-in-nyc.jpg",
    items: [
      "كبار السن الذين يبحثون عن مساعدة للعيش المستقل",
      "الأفراد الذين يتعافون من الجراحة أو المرض",
      "المرضى الذين يعانون من حالات مزمنة (مثل السكتة الدماغية، رعاية مرضى السكري في المنزل)",
      "العائلات التي تحتاج إلى رعاية استراحة",
    ],
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
  },
  customPlans: {
    label: "Ideal Home Health",
    title: "رعاية منزلية مخصصة في نيويورك: احتياجاتك الفريدة، خططنا الخاصة",
    // Live source has an extra spam-looking paragraph here about a
    // different-sounding entity "Ideal Health & Wellness" (nutrition
    // counseling, fitness plans) — excluded, see file-level note above.
    description: "نقدم خدمات رعاية منزلية في جميع الأحياء الخمسة لمدينة نيويورك، متخصصة في مجموعة متنوعة من الحالات. نحن نقدم نماذج رعاية مخصصة وخدمات مرنة لمساعدي المنازل مصممة خصيصًا لنمط حياة عائلتك الفريد واحتياجاتها عبر نيويورك.",
    image: "/images/personalized-home-health-care-new-york.jpg",
    // Live source links to the shorter "/ar/conditions/" path, which
    // doesn't match this app's routing (conditions overview lives under
    // /services/conditions here, matching every other locale) — routed to
    // the real page instead of a path this app doesn't serve.
    button: { title: "اطّلع على تخصصات الرعاية لدينا", href: "/ar/services/conditions" },
  },
  locations: {
    label: "Ideal Home Health",
    title: "Ideal Home Health: نخدم بفخر الأحياء الخمسة لمدينة نيويورك",
    description: "لراحة مقدم الرعاية والعائلة، تقع مكاتبنا في نيويورك بالقرب من المنازل. يقدم أخصائيو الرعاية المنزلية المدربون لدينا في كل موقع خدمات مهنية وفعالة في جميع أنحاء مدينة نيويورك، بما في ذلك كوينز، بروكلين، مانهاتن، ستاتن آيلاند، وبرونكس.",
    // Live source links to the un-prefixed "/contact-us-2/" (missing
    // /ar/); routed to the real Arabic page instead.
    button: { title: "تواصل معنا", href: "/ar/contact-us-2" },
  },
  locationsImage: "/images/Daco_924160.png",
  // Locations pages (Brooklyn/Bronx) have no Arabic translation on the
  // source site — office cards link to the English location pages, same
  // approach as RU/ES took for other EN-only pages.
  locationCards: [
    { name: "Brooklyn", address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US", button: { title: "Brooklyn Services", href: "/locations/brooklyn" } },
    { name: "Bronx", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US", button: { title: "Bronx Services", href: "/locations/bronx" } },
  ],
  careers: {
    label: "IDEAL HOME HEALTH",
    title: "انضم إلى فريقنا في الرعاية الصحية المنزلية المليئة بالرحمة في نيويورك",
    description: "هل أنت مقدم رعاية مخلص ومليء بالرحمة تبحث عن مسيرة مهنية مجزية في الرعاية الصحية المنزلية في مدينة نيويورك؟ تبحث Ideal Home Health بنشاط عن أفراد موهوبين للانضمام إلى فريقنا المتنامي. اكتشف بيئة داعمة حيث يصنع شغفك بالرعاية فرقًا حقيقيًا.",
    image: "/images/join-ideal-home-health-care-nyc.jpg",
    button: { title: "عرض فرص العمل", href: "/ar/careers" },
  },
  prefooterCta: {
    title: "هل أنت مستعد لإيجاد حل الرعاية الصحية المنزلية المثالي في نيويورك؟",
    description: "اتصل بنا اليوم للحصول على استشارة مجانية ومناقشة خطة رعاية منزلية مخصصة تناسب احتياجات عائلتك في مدينة نيويورك.",
    button: { title: "سجل اليوم", href: "/ar/enroll-now" },
  },
};

// About Us — built from a live fetch of https://idealhh.com/ar/about-us/.
export const arAboutUsPage = {
  hero: {
    title: "رعاية منزلية في بروكلين، نيويورك",
    description: "في Ideal Home Health، عائلتك هي عائلتنا. بدأنا العمل في عام 2013 كوكالة رعاية منزلية في بروكلين، نيويورك بهدف إحياء نظام غير فعال وقديم في صناعة الرعاية المنزلية في نيويورك. مع التركيز على خدمة العملاء والتواصل والكفاءة، نوظف مقدمي رعاية شغوفين بتحسين جودة حياتك.",
    image: "/images/trusted-home-care-agency-new-york-city.jpg", // not confirmed via live fetch — EN fallback
    // Live source links both buttons to "/ur/..." (Urdu prefix) — a
    // genuine bug in the source, not reproduced; routed to the real
    // Arabic pages instead.
    buttons: [
      { title: "عرض الخدمات", href: "/ar/services" },
      { title: "سجل اليوم", href: "/ar/enroll-now" },
    ],
  },
  mission: {
    label: "IDEAL HOME HEALTH",
    title: "مهمتنا وقيمنا الأساسية",
    description: "مهمتنا هي توفير مستوى استثنائي من الرعاية الحانية التي تمكّن كل فرد نخدمه. وتسترشد هذه المهمة بقيمنا الأساسية: إيمان راسخ بأن عائلتك هي عائلتنا، والتزام ثابت بالتواصل والكفاءة، ووعد بالتصرف دائمًا بالنزاهة. من خلال التمسك بهذه القيم، نضمن مستوى أعلى من الرعاية التي لا تلبي احتياجاتك الجسدية فحسب، بل تدعم أيضًا رفاهيتك العاطفية والاجتماعية.",
    image: "/images/compassionate-in-home-care-nyc.jpg",
    // Live source links to the un-prefixed "/about-us/testimonials-reviews"; routed to the real Arabic page.
    button: { title: "ماذا يقول الآخرون", href: "/ar/about-us/testimonials-reviews" },
  },
  areasServed: {
    label: "المناطق المخدومة",
    title: "تخدم جميع أحياء ومقاطعات مدينة نيويورك",
    description: "ابتداءً من قبو منزل أحد الشركاء المؤسسين، بدأت Ideal Home Health كشركة من أربعة أشخاص مقرها بروكلين. في غضون 5 سنوات فقط، نمت لتصبح مجتمعًا يضم أكثر من 1500 شخص موزعين عبر جميع الأحياء الخمسة لمدينة نيويورك. بالإضافة إلى تقديم خدمات الرعاية الصحية المنزلية، دخلت Ideal Home Health في شراكة مع عشرات مراكز المجتمع، ومرافق كبار السن، وبنوك الطعام، والجمعيات الخيرية، والمنظمات المجتمعية لمواصلة إحداث تأثير إيجابي في أحيائنا في نيويورك.",
    image: "/images/Daco_924160.png",
    // Live source links to the un-prefixed "/contact-us-2"; routed to the real Arabic page.
    button: { title: "تواصل معنا", href: "/ar/contact-us-2" },
  },
  // Addresses kept in English, matching the source (not translated) — same
  // pattern already confirmed on RU/ES for this section. No Arabic
  // Locations pages exist, so buttons fall back to the English location pages.
  officeCards: [
    { title: "Brooklyn", subtitle: "Ideal Home Health – Brooklyn Office", address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US", phone: "(718) 517 – 2424", button: { title: "تعرف على المزيد", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "Ideal Home Health – Bronx Office", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US", phone: "(718) 517 – 2424", button: { title: "تعرف على المزيد", href: "/locations/bronx" } },
  ],
  // 4-slide multilingual carousel — same genuine quirk as every other
  // locale, confirmed present on the live /ar/ page too. Notably NONE of
  // the 4 slides are in Arabic (EN/RU/ES/ZH only) — unlike ES, which did
  // get its own slide. Kept as found; only the button labels are
  // localized in the source (Arabic), the slide headline/description text is not.
  languages: [
    { title: "Your language and cultural needs are our priority", description: "We speak your language and understand you and your families cultural needs and preferences.", button: { title: "سجل اليوم!", href: "/ar/enroll-now" } },
    { title: "Язык на котором вы говорите и ваши культурные ценности у нас в приоритете", description: "Мы говорим на вашем языке и понимаем вас и ваши культурные ценности и предпочтения.", button: { title: "سجل اليوم!", href: "/ar/enroll-now" } },
    { title: "Sus necesidades de idioma y cultura son nuestra prioridad", description: "Hablamos su idioma y entendemos sus necesidades y preferencias culturales al igual que la de sus familiares.", button: { title: "سجل اليوم!", href: "/ar/enroll-now" } },
    { title: "您的语言和文化需求是我们的首要任务", description: "我们说您的语言，并了解您和您的家人的文化需求和喜好。", button: { title: "سجل اليوم!", href: "/ar/enroll-now" } },
  ],
  statistics: [
    { topTitle: "لقد ساعدنا", featureTopText: "5,000+", featureText: "مرضى ومقدمي رعاية", description: "منذ بدء Ideal Home Health." },
    { topTitle: "نحن نخدم", featureTopText: "مرضى من", featureText: "ديانات عديدة", description: "بما في ذلك الكاثوليك والمسيحيين والمسلمين والهندوس والبوذيين والأدفنتست وشهود يهوه واليهود وغيرهم." },
    { topTitle: "لدينا", featureTopText: "مقدمو رعاية", featureText: "يتحدثون لغتك", description: "حيث يتحدث مقدمو رعايتنا أكثر من 34 لغة." },
    { topTitle: "في Ideal Home Health", featureTopText: "نحن نفهم", featureText: "احتياجاتك الثقافية", description: "نخدم مرضى من أكثر من 46 دولة." },
  ],
  prefooterCta: {
    title: "هل لديك أي أسئلة؟",
    description: "مندوبونا المتعاطفون متاحون لمناقشة أي أسئلة لديك.",
    // Live source links to "/ur/contact-us/" (Urdu prefix bug again); routed to the real Arabic page.
    button: { title: "تواصل معنا", href: "/ar/contact-us-2" },
    image: "/images/registered-home-nurse-nyc.jpg",
  },
};

// Testimonials & Reviews — built from a live fetch of
// https://idealhh.com/ar/about-us/testimonials-reviews/. Unlike ES (which
// left this page's reviews in English), AR fully translates both the
// testimonials AND the reviews section.
export const arTestimonialsPage = {
  hero: {
    title: "الشهادات والمراجعات",
    description: "نحن نفتخر بوجود مقدمي رعاية ومرضى وعائلات سعداء.",
    // Same genuine quirk already found on ES (a second heading matching
    // the page's meta-description) — but here it IS translated to Arabic,
    // unlike the English string ES left untranslated.
    secondaryHeading: "الرفقة في بروكلين، نيويورك",
  },
  testimonialsLabel: "ما يقوله الآخرون",
  testimonials: [
    { author: "تايشا ب.", role: "مقدمة رعاية", rating: 5, content: "لقد كنت موظفة في Ideal Home Health خلال العامين الماضيين. أقدر وقت وجهود منسقي المكتب لديهم الذين، برأيي، يبذلون جهدًا أكبر من المتوقع لضمان بقائي على اطلاع دائم في تحديث مستنداتي وتدريباتي. الأجر أيضًا من بين الأعلى الذي تلقيته، وأنا ممتنة للعمل هنا.", image: "/images/pexels-tarzine-jackson.jpg" },
    { author: "ليز ب", role: "مريضة", rating: 5, content: "شكراً لكم. أنا سعيدة جداً بالحصول على المساعدة. مساعدتي تساعدني في تناول دوائي، وتساعدني في تصفيف شعري في الصباح. أكون سعيدة عندما أرى أحفادي، وهي تبقي الأمور مرتبة لأنني لا أستطيع القيام بذلك. سارة لطيفة جداً، وأنا حقاً، حقاً أقدّر هذه المساعدة.", image: "/images/iStock-1138669982.jpg" },
    { author: "جوزيف أ.", role: "فرد من العائلة", rating: 5, content: "بعد أن انتقلت من نيويورك، أصبح الاعتناء بوالدتي أمرًا مرهقًا جدًا بالنسبة لأختي ولي. وجود مساعد صحي يساعدنا على الاطمئنان بأنها بأمان عندما لا نستطيع أن نكون معها. لقد كانت لدينا تجربة رائعة مع Ideal Home Health، فهم محترفون وجعلوا العملية سهلة.", image: "/images/iStock-1089410668.jpg" },
  ],
  reviewsLabel: "المراجعات",
  reviews: [
    { rating: 5, name: "جيسيكا ب.", location: "بروكلين، نيويورك", review: "تمكنت من تسجيل والد زوجي لمساعد بسرعة كبيرة، وتم تجهيز كل شيء خلال حوالي أسبوع. كان طاقم Ideal HH رائعًا للعمل معهم، والمكتب يبعد 15 دقيقة فقط عن شقتي مما كان مريحًا. بشكل عام خدمة رائعة، أوصي بهم بشدة إذا كنت بحاجة إلى مساعد منزلي." },
    { rating: 4, name: "إرسال م.", location: "برونكس، نيويورك", review: "الأجر جيد جدًا وهم يراعون إجازاتي في الأعياد الدينية. واجهت بعض التحديات مع أوراق التسجيل الخاصة بي لكن بشكل عام كانت تجربة جيدة وأخطط للاستمرار في العمل مع Ideal Home Health." },
    { rating: 5, name: "جوردان هـ.", location: "كوينز، نيويورك", review: "احتجنا إلى مقدم رعاية لحالة خاصة، فوالدي يعاني من الخرف بالإضافة إلى مرض السكري وقلة الحركة. خصصت Ideal Home Health الوقت لمناقشة جميع تفاصيل متطلباته، وبشكل عام نحن سعداء للغاية بمستوى الرعاية الذي يتلقاه. وعلى الرغم من صعوبة التحديد، أعتقد أن والدي أكثر سعادة الآن وأنا مرتاح لمعرفة أنه آمن كل يوم." },
    { rating: 5, name: "جون ك.", location: "برونكس، نيويورك", review: "شركة رائعة. تجعل العملية كلها بسيطة، فقد تم تسجيلنا وحصلنا على الرعاية بسرعة، كان الأمر برمته سهلًا للغاية." },
  ],
  prefooterCta: {
    title: "هل أنت مستعد لمعرفة المزيد والحصول على المساعدة التي تحتاجها؟",
    description: "اتصل بنا اليوم لمناقشة الاحتياجات الفريدة لعائلتك.",
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg",
  },
};

// Services overview — built from a live fetch of https://idealhh.com/ar/services/.
// CDPAP card present in source (between HHA and Visiting Nurse, linking to
// idealcdpap.com) dropped per standing rule, matching every other locale.
export const arServicesPage = {
  hero: {
    label: "لدينا متخصصون يمكنهم المساعدة في احتياجاتك الفردية.",
    title: "خدمة التمريض في بروكلين، نيويورك",
    description: "بصفتنا وكالة رعاية منزلية في نيويورك، فإن ممرضينا ومساعدينا والمتخصصين المدربين تدريباً عالياً متاحون للمساعدة في أي احتياجات، كبيرة أو صغيرة.",
    // Live source links "اتصل بنا" to "/ar/contact-us/" (no "-2" suffix),
    // which is inconsistent with the real live slug confirmed via nav
    // (/ar/contact-us-2/) — routed to the real working page instead.
    primaryButton: { title: "اتصل بنا", href: "/ar/contact-us-2" },
    secondaryButton: { title: "سجل اليوم", href: "/ar/enroll-now" },
    image: "/images/home-health-care-services-new-york-city.jpg", // not confirmed via live fetch — EN fallback
  },
  // Both cards are genuinely untranslated in the source (English title +
  // description) — kept verbatim, matching the exact same "rigorous
  // bi-annual training" wording already found on the ES version of this page.
  services: [
    {
      title: "Home Health Aides – HHA: Essential Daily Support",
      description: "Our Department of Health certified Home Health Aides (HHAs) offer compassionate assistance with Activities of Daily Living (ADLs). From personal care to medication reminders, our in-home aides in NYC help maintain independence. All HHAs receive rigorous bi-annual training, ensuring top safety standards.",
      button: { title: "اعرف المزيد", href: "/ar/services/home-health-aide" },
      image: "/images/home-health-aides-new-york.jpg", // not confirmed via live fetch — EN fallback
    },
    {
      title: "Visiting Home Nurse – Expert Skilled Nursing Care at Home",
      description: "Receive skilled nursing care in your New York City home with our licensed Visiting Home Nurses (RNs/LPNs). We offer medication management, wound care, post-operative support, chronic disease management, and more. Our nurses create custom plans of care for your optimal health and recovery.",
      button: { title: "اعرف المزيد", href: "/ar/services/visiting-home-nurse" },
      // Confirmed via live fetch — same shared shutterstock asset used on RU/ES.
      image: "/images/shutterstock_1667840344.jpg",
    },
  ],
  whyChoose: {
    title: "Why Choose Ideal Home Health for Your NYC Home Care Needs?", // untranslated in source
    items: ["Accredited & Trusted", "Experienced & Compassionate Team", "Personalized & Flexible Plans", "Local NYC Expertise", "Seamless Enrollment"], // untranslated in source
    button: { title: "Enroll Now", href: "/ar/enroll-now" }, // button label itself is untranslated too
    // Confirmed via live fetch — same asset already found on ES.
    image: "/images/you-can-hire-your-relative-to-care-for-you.jpg",
  },
  prefooterCta: {
    title: "هل أنت مستعد لمعرفة المزيد والحصول على المساعدة التي تحتاجها؟",
    description: "تواصل معنا لمعرفة المزيد حول كيفية دعم خدماتنا لاحتياجات عائلتك الفريدة.",
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
    image: "/images/iStock-866130786.jpg", // confirmed via live fetch
  },
};

// Home Health Aide — built from a live fetch of
// https://idealhh.com/ar/services/home-health-aide/. Fully translated.
export const arHomeHealthAidePage = {
  hero: {
    label: "الخدمات",
    subtitle: "مساعدو الصحة المنزلية",
    // Same generic H1 ("Nursing service in Brooklyn, New York") reused
    // across multiple AR service pages verbatim — a genuine shared-template
    // quirk in the source, not a copy-paste error introduced here.
    title: "خدمة التمريض في بروكلين، نيويورك",
    description: "مساعدونا المنزليون حاصلون على اعتماد من وزارة الصحة كمتخصصين في حالتك واحتياجاتك اليومية. جميع مساعدينا المعتمدين يتلقون تدريباً نصف سنوي في خدمات إنقاذ الحياة والسلامة الحرجة.",
    image: "/images/certified-home-health-aides-nyc.jpg", // not confirmed via live fetch — EN fallback
    primaryButton: { title: "سجل الآن", href: "/ar/enroll-now" },
    // Live source links to "/ar/contact-us/" (no "-2" suffix), inconsistent
    // with the real confirmed slug; routed to the real page instead.
    secondaryButton: { title: "اتصل بنا", href: "/ar/contact-us-2" },
  },
  gettingCare: {
    title: "احصل على الرعاية حيثما تريدها أكثر، في المنزل.",
    highlight: "في المنزل.",
    description: "مع Ideal Home Health، كن مطمئناً أن من تحب سيكون في المنزل مع محترف متمرس ومتعاطف لمساعدته.",
    image: "/images/certified-home-health-aides-new-york.jpg", // not confirmed via live fetch — EN fallback
  },
  howTheyHelp: {
    title: "كيف نساعد",
    intro: "مساعدو Ideal Home Health مدربون تدريباً خاصاً على",
    items: [
      "المساعدة في جميع الأنشطة اليومية، بما في ذلك تحضير الوجبات",
      "المساعدة في الأعمال المنزلية والعناية الشخصية و/أو الحفاظ على النظافة",
      "متابعة جداول الأدوية",
      "مراقبة الأعراض كما يشير إليها طبيبك أو خطة الرعاية الخاصة بك",
      "تعزيز الاستقلالية والنشاط البدني داخل المنزل",
      "تقديم رعاية متعاطفة وتعزيز الرفاهية من خلال اللطف والعمل الجماعي وتحديد الأهداف لمواصلة عيش حياتك بأفضل شكل!",
    ],
  },
  prefooterCta: {
    title: "هل أنت مستعد لمعرفة المزيد والحصول على المساعدة التي تحتاجها؟",
    description: "اتصل بنا لمناقشة متطلبات الرعاية الخاصة بعائلتك.",
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
};

// Visiting Home Nurse — built from a live fetch of
// https://idealhh.com/ar/services/visiting-home-nurse/. Fully translated,
// includes the same 3-testimonial carousel as Testimonials & Reviews.
export const arVisitingHomeNursePage = {
  hero: {
    label: "الخدمات",
    subtitle: "ممرضة منزلية زائرة",
    title: "وكالة الرعاية الصحية المنزلية في نيويورك",
    description: "ممرضاتنا المسجلات سيقمن بمراقبة وتقييم احتياجاتك وحالتك لإنشاء خطة رعاية مخصصة لك.",
    // Confirmed via live fetch — same shared shutterstock asset as Services overview.
    image: "/images/shutterstock_1667840344.jpg",
    buttons: [
      { title: "سجل الآن", href: "/ar/enroll-now" },
      // Live source links to "/ar/contact-us/" (no "-2" suffix); routed to the real page.
      { title: "اتصل بنا", href: "/ar/contact-us-2" },
    ],
  },
  bullets: {
    title: "مستوى عالٍ من الرعاية من ممرضة مسجلة ومرخصة.",
    highlight: "من ممرضة مسجلة ومرخصة.",
    listTitle: "ممرضات ماهرات من Ideal Home Health",
    listDescription: "يمكن لمتخصصينا الصحيين المرخصين المساعدة في",
    items: [
      "العمل معك لتطوير خطة رعاية بناءً على توصيات طبيبك وتفضيلاتك الشخصية ونمط حياتك",
      "اتباع تعليمات الرعاية الطبية كما يوجهك طبيبك",
      "مراقبة العلامات الحيوية والمعدات الطبية",
      "إدارة جدول الأدوية ومراقبة الأعراض",
      "رعاية ما بعد العمليات والجروح",
    ],
    // Confirmed via live fetch.
    image: "/images/iStock-638124036.jpg",
  },
  testimonialsLabel: "ما يقوله الآخرون",
  prefooterCta: {
    title: "هل أنت مستعد لمعرفة المزيد والحصول على المساعدة التي تحتاجها؟",
    description: "اتصل بنا لمناقشة متطلبات رعاية عائلتك الخاصة.",
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
};

// Conditions overview — built from a live fetch of
// https://idealhh.com/ar/services/conditions/. Card blurbs ARE translated,
// but critically: checking the individual condition links (diabetes,
// individualized-care, arthritis — 3 of 13 spot-checked) shows every one
// of them silently serves English content (og:locale: en_US, canonical
// pointing at the English URL) despite being linked here as if a real
// Arabic translation existed. No Arabic condition detail page actually
// exists on the live site. Card links below route to the real English
// pages instead of fabricating Arabic detail content that doesn't exist
// in the source — this matches what actually happens when you click
// through on the live site itself.
export const arConditionsPage = {
  cards: [
    { title: "السكري", description: "يمكن لمساعدينا الصحيين المهرة في المنازل توفير إدارة صحيحة لمرض السكري لمساعدتك على عيش حياة أكثر سعادة وصحة.", href: "/conditions/diabetes", buttonLabel: "السكري" },
    { title: "السكتة الدماغية", description: "يمكن أن تتحسن الحياة بعد السكتة الدماغية بمساعدة مرافق يفهم أن تعافيك هو الأولوية القصوى.", href: "/conditions/stroke" },
    { title: "ألزهايمر / الخرف", description: "نحن نضمن سلامة أحد أفراد عائلتك الذين لديهم احتياجات رعاية الذاكرة ونساعدهم على إيجاد الراحة في روتينهم اليومي.", href: "/conditions/alzheimers-dementia" },
    { title: "الصرع", description: "قد تحدث نوبات الصرع بسرعة، يمكننا أن نكون هناك لضمان سلامتك عندما تحتاج إلينا أكثر.", href: "/conditions/epilepsy" },
    { title: "الوقاية من السقوط", description: "يمكن أن تنقذ الوقاية من السقوط حياتك، حيث تقلل من خطر المضاعفات المحتملة وتبقيك على المسار للحفاظ على أو تحسين حركتك.", href: "/conditions/fall-prevention" },
    { title: "المساعدة في المهام اليومية", description: "يمكن لمساعدينا الصحيين المنزليين أن يكونوا يدًا مساعدة لضمان قدرتك على مواكبة روتينك اليومي والاستمرار في القيام بالأشياء التي تحبها.", href: "/conditions/help-with-daily-tasks" },
    { title: "باركنسون", description: "يَتخصص مساعدونا الصحيون المنزليون المؤهلون تأهيلاً عالياً في رعاية الباركنسون، لمساعدتك على الحصول على أفضل جودة حياة ممكنة.", href: "/conditions/parkinsons" },
    { title: "التهاب المفاصل", description: "عندما تكون الحركة مؤلمة، يمكننا مساعدتك على الاستمرار في القيام بما تحب من خلال رعاية مخصصة بناءً على احتياجاتك.", href: "/conditions/arthritis" },
    { title: "الرفع والنقل", description: "لدينا متخصصون مدربون لنقل المرضى بأمان وأمان لتجنب الإصابة والإجهاد غير الضروري.", href: "/conditions/lifting-and-transferring" },
    { title: "الرعاية على مدار الساعة (إقامة كاملة)", description: "عندما تحتاج إلى مساعدة على مدار الساعة، يمكن لمساعدينا الصحيين المنزليين ذوي الخبرة أن يكونوا بجانبك كلما احتجت إلينا أكثر.", href: "/conditions/live-in-24-hour-care" },
    { title: "الرعاية بعد المستشفى", description: "بعد الإقامة في المستشفى، يمكن لمساعدينا الصحيين المنزليين المدربين تدريباً عالياً مساعدتك في اتباع جدول التعافي الخاص بك والتعافي في أسرع وقت ممكن.", href: "/conditions/post-hospital-care" },
    { title: "دعم الكرسي المتحرك / طريح الفراش", description: "إذا كان أحد أفراد عائلتك يستخدم كرسيًا متحركًا أو طريح الفراش، فثق في أخصائيينا المدربين تدريباً عالياً لمساعدتهم على التحرك بأمان في مساحتهم وإكمال المهام اليومية.", href: "/conditions/wheel-chair-bed-bound-support" },
    { title: "رعاية فردية", description: "إذا كانت لديك حالة فريدة أو مجموعة من الاحتياجات، يمكن لممرضينا المعتمدين العمل معك ومع عائلتك لوضع خطة علاج فردية.", href: "/conditions/individualized-care" },
  ],
  prefooterCta: {
    title: "هل أنت مستعد لمعرفة المزيد والحصول على المساعدة التي تحتاجها؟",
    description: "اتصل بنا اليوم.",
    button: { title: "اتصل بنا", href: "/ar/contact-us-2" },
  },
};

// How to Enroll — built from a live fetch of https://idealhh.com/ar/how-to-enroll/.
// Two CDPAP mentions in the source (step 3, and the first bullet item)
// removed per standing rule, matching every other locale.
export const arHowToEnrollPage = {
  hero: {
    title: "كيفية التسجيل: البدء كمريض",
    description: "يمكن لمساعدينا المنزليين المهرة مساعدتك في التعامل مع مرض صعب والاستمتاع بحياة أكثر سعادة وصحة.",
    image: "/images/how-to-enroll-ideal-home-health-nyc-2.jpg", // not confirmed via live fetch — EN fallback
    button: { title: "سجّل اليوم", href: "/ar/enroll-now" },
  },
  steps: [
    { number: "01.", title: "اتصل بنا", description: "اتصل بنا للتحدث مع أحد المتخصصين في Ideal Home Health لمناقشة احتياجاتك" },
    { number: "02.", title: "نساعدك في تنسيق التفاصيل", description: "نرشدك خلال خطوات التحقق من أهلية Medicaid، وجدولة التقييمات الحكومية والتنسيق مع الأطباء من أجل الأوراق اللازمة" },
    // CDPAP clause dropped per standing rule — source reads "...أو نساعدك
    // في تسجيل أحد أفراد العائلة أو الأصدقاء المؤهلين كمقدم رعاية CDPAP."
    { number: "03.", title: "ابحث عن المساعد المثالي لك", description: "سنطابقك مع المساعد المثالي لحالتك واحتياجاتك." },
    { number: "04.", title: "تلقي الرعاية", description: "يمكن أن تبدأ رعايتك بعد إتمام قدر قليل من الأوراق. إنها عملية سريعة وسهلة." },
  ],
  bullets: {
    title: "نجعل تلقي الرعاية سهلاً.",
    subtitle: "الرعاية الصحية المنزلية في نيويورك",
    description: "لدينا عدة خيارات لمساعدتك بناءً على مستوى احتياجاتك، وأسلوب حياتك وتفضيلات عائلتك.",
    image: "/images/compassionate-caregivers-nyc.jpg", // not confirmed via live fetch — EN fallback
    listTitle: "البدء مع Ideal Home Health",
    listDescription: "بعد تنسيق التفاصيل مع شركة التأمين والمقدّمين، نعمل مع عائلتك لضمان حصولك على مستوى الرعاية الذي ترغب به.",
    items: [
      // CDPAP clause dropped per standing rule — source reads "...تمريضاً
      // ماهراً ومقدمي رعاية CDPAP" with a link to idealcdpap.com.
      "نوفر مساعدين منزليين مؤهلين تأهيلاً عالياً وتمريضاً ماهراً.",
      "نعمل معك لإنشاء برنامج مخصص بناءً على حالتك",
      "لدينا مساعدين يتحدثون لغتك ويفهمون احتياجاتك الثقافية",
      "نوفر منسقين متفهمين وصبورين لضمان الإجابة على أي أسئلة لديك",
    ],
  },
  prefooterCta: {
    title: "هل أنت مستعد لمعرفة المزيد والحصول على المساعدة التي تحتاجها؟",
    description: "اتصل بنا لمناقشة خطة رعاية مخصصة لاحتياجاتك الفريدة.",
    button: { title: "سجّل الآن", href: "/ar/enroll-now" },
    image: "/images/contact-ideal-home-health-care-new-york-city.jpg", // not confirmed via live fetch — EN fallback
  },
};

// Careers (top-level /ar/careers/) — built from a live fetch of
// https://idealhh.com/ar/careers/. Fully translated. CDPAP button (present
// in source next to "Patient Enrollment" above the form) dropped per
// standing rule. Street addresses ARE translated here (unlike some other
// AR pages), kept as found.
export const arCareersPage = {
  hero: {
    label: "الوظائف",
    title: "مساعد صحي منزلي (HHA) في بروكلين، نيويورك",
    description: "إذا كنت مساعد صحي منزلي (HHA) أو ممرضة RN أو LPN أو PCA تتمتع بالمهارة والتعاطف والتفاني وتبحث عن متابعة مسيرتك المهنية في شركة ديناميكية ومثيرة، فإن Ideal Home Health هو مكان العمل الأمثل لتحقيق هذا الحلم اليوم!",
    image: "/images/home-health-caregiver-nyc.jpg", // not confirmed via live fetch — EN fallback
    button: { title: "كن مقدم رعاية", href: "#qualifyenroll" },
  },
  benefits: {
    title: "ابدأ مسيرة مهنية جديدة ومثيرة مع Ideal Home Health.",
    description: "تواصل معنا اليوم للتحدث مع ممثلينا المخصصين لبدء عملية التسجيل الخاصة بك.",
    image: "/images/home-health-caregiver-career.jpg", // not confirmed via live fetch — EN fallback
    listTitle: "مزايا Ideal",
    listDescription: "في Ideal Home Health،",
    items: [
      "نحن ندرك أن التوازن بين العمل والحياة مهم، ونوفر خيارات مناوبة مرنة لتناسب جدولك.",
      "نسهل عملية الدفع ونقوم بإعداد الإيداع المباشر في حسابك البنكي.",
      "نقدم حزمة مزايا سخية.",
      "نوفر بيئة عمل مرنة للغاية مع منسقين يضعونك في أنسب موقع يناسبك ويكونون دائمًا على استعداد لمساعدتك في أي مشكلة.",
      "نحن ملتزمون بالكامل بموظفينا، دائمًا نضع مصلحتهم في الاعتبار في كل خطوة، ونظهر مستوى فريدًا من الثقة والدعم ينعكس في ولاء موظفينا لـ Ideal Home Health.",
      "نخدم عملاء متنوعين عرقيًا، والمساعدون ثنائيو اللغة مهمون بالنسبة لنا، ونرحب بالتنوع الثقافي والعرقي.",
    ],
  },
  qualify: {
    title: "هل أنا مؤهل؟",
    patientSubtitle: "لتلقي الرعاية:",
    patientItems: [
      "هل أنت مؤهل للحصول على Medicaid أو تعتقد أنك قد تكون كذلك؟",
      "هل تعيش في نيويورك؟",
      "هل ترغب في الحصول على مساعدة في الأنشطة اليومية مثل الطهي والتنظيف والرعاية الشخصية؟",
    ],
    caregiverSubtitle: "لرعاية شخص ما:",
    caregiverItems: [
      "هل عمرك 18 عامًا أو أكثر؟",
      "هل لديك تصريح للعمل في الولايات المتحدة؟",
      "هل تهتم بالحصول على أجر يزيد عن 21.64 دولار/ساعة؟",
    ],
    formTitle: "طلب وظيفة مقدم رعاية",
  },
  locations: {
    label: "المناطق المخدومة",
    title: "نخدم جميع مناطق وبلديات مدينة نيويورك",
    description: "لراحة مقدمي الرعاية وعائلتك، لدينا مكتب قريب من المنزل. توفر Ideal Home Health أفضل رعاية بجودة عالية من مساعد منزلي، ورفقة، ومدبرة منزل، وعلاج، وخدمة تمريض في الأحياء الخمسة لمدينة نيويورك، بما في ذلك كوينز وبروكلين ومانهاتن وستاتن آيلاند وبرونكس.",
    // Live source links "تواصل معنا" here to enroll-now (not a contact
    // page) — kept as found, a real (if slightly odd) CTA choice in the source.
    button: { title: "تواصل معنا", href: "/ar/enroll-now" },
  },
  // Street addresses ARE translated here (unlike some other AR pages) — kept as found.
  officeCards: [
    { title: "بروكلين", address: "2617 شرق الشارع 16، الطابق 2، بروكلين، نيويورك 11235", phone: "(718) 517 – 2424" },
    { title: "برونكس", address: "391 شرق الشارع 149، الجناح 515، برونكس، نيويورك 10455", phone: "(718) 517 – 2424" },
  ],
  jobs: {
    sectionTitle: "قائمة الوظائف",
    items: [
      { title: "مساعد صحي منزلي (HHA)", label: "دوام كامل / دوام جزئي", location: "بروكلين، نيويورك", button: { title: "اعرف المزيد", href: "https://www.indeed.com/m/viewjob?jk=7a68356e36b7bd4a&from=native" } },
    ],
  },
};

// Home Care Benefits — built from a live fetch of
// https://idealhh.com/ar/home-care-benefits/ (the June 2026 redesign,
// matching the current EN/ES/RU benefitsPage structure). One CDPAP
// mention in step 3 removed per standing rule. Note: the first badge
// literally reads "22 دولارًا شهريًا" (22 dollars/month) instead of "220"
// — a genuine typo/mistranslation in the live Arabic source (missing a
// zero) — kept as found rather than silently corrected.
export const arBenefitsPage = {
  hero: {
    title: "خدمات الرعاية المنزلية التي يغطيها برنامجا «ميديكيد» و«ميديكير»",
    description: "احصل على رعاية منزلية موثوقة في مدينة نيويورك تشمل الدعم الشخصي، والمساعدة في التنقل، والأعمال المنزلية الخفيفة، والتذكير بتناول الأدوية، وغير ذلك الكثير — وهي متاحة لكبار السن المؤهلين من خلال برنامجي Medicaid وMedicare",
    image: "/images/Rectangle-1.png", // confirmed via live fetch
    phone: "(718) 517-2424",
    badges: [
      // "22 دولارًا" is the literal source text (a typo for "220") — preserved as-is.
      { bold: "22 دولارًا شهريًا", normal: "للمنتجات اليومية المؤهلة" },
      { bold: "ما يصل إلى 360 دولارًا في السنة", normal: "في برنامج مكافآت العافية" },
      { bold: "دعم على مدار الساعة طوال أيام الأسبوع", normal: "للمقدمين الموثوقين للرعاية" },
    ],
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
  },
  qualify: {
    cardTitle: "قد تكون مؤهلاً إذا",
    heading: "كم تبلغ تكلفة الرعاية المنزلية مع شركة «آيديال هوم هيلث»؟",
    description: "بالنسبة للعديد من كبار السن المؤهلين في مدينة نيويورك، قد تتوفر الرعاية المنزلية مع شركة «آيديال هوم هيلث» دون أي تكاليف إضافية من جيبكم الخاص، وذلك من خلال برنامجي «ميديكيد» و«ميديكير».\n\nبدلاً من مطالبة العائلات باختيار باقة رعاية بالساعة، نقوم أولاً بالتحقق مما إذا كنتم أنتم أو أحد أحبائكم مؤهلين للحصول على مزايا الرعاية المنزلية المشمولة بالتغطية.",
    button: { title: "تحقق من أهليتي", href: "/ar/enroll-now" },
    // Mixed grammar (declarative then interrogative) is genuine to the source, kept as found.
    items: [
      "يبلغ عمرك 55 عامًا أو أكثر",
      "أنت مشترك في برنامجي «ميديكيد» و«ميديكير»",
      "هل تعيش في بروكلين أو برونكس أو كوينز أو ستاتن آيلاند أو مدينة نيويورك؟",
      "هل تحتاج إلى مساعدة في الأنشطة اليومية؟",
    ],
  },
  included: {
    title: "ما الذي تشمله مزايا الرعاية المنزلية الخاصة بك؟",
    button: { title: "احصل على المساعدة للتسجيل اليوم", href: "/ar/enroll-now" },
    items: [
      { title: "العناية الشخصية", description: "المساعدة في الاستحمام وارتداء الملابس وغسل الملابس والاحتياجات الشخصية اليومية.", icon: "/images/boxicons_car-filled.png" },
      { title: "المساعدة في مجال النقل", description: "المساعدة في التنقل لحضور المواعيد الطبية والقيام بالمهام اليومية والمشاركة في الأنشطة الاجتماعية.", icon: "/images/boxicons_car-filled-1.png" },
      { title: "أعمال التنظيف الخفيفة", description: "إعداد الوجبات، والتنظيف الخفيف، وتوفير الرفقة في المنزل.", icon: "/images/boxicons_car-filled-2.png" },
      { title: "تذكيرات تناول الأدوية", description: "المساعدة اليومية في تذكير المرضى بتناول الأدوية وإدارتها.", icon: "/images/boxicons_car-filled-3.png" },
    ],
  },
  includedImage: "/images/Frame-11-2.png", // confirmed via live fetch
  extras: {
    title: "قد يحصل الأعضاء المؤهلون على خدمات تتجاوز الرعاية المنزلية",
    items: [
      { title: "الراتب الشهري: 220 دولارًا", description: "للإنفاق على السلع المؤهلة التي تلبي احتياجاتك اليومية.", icon: "/images/Frame-21.png" },
      { title: "ما يصل إلى 360 دولارًا سنويًا", description: "متوفر من خلال برنامج مكافآت العافية.", icon: "/images/Frame-21.png" },
      { title: "دعم الوصفات الطبية", description: "الأدوية ودعم الصيدلي لمساعدتك على الاستمرار في العلاج.", icon: "/images/Frame-21.png" },
      { title: "مجانًا مع برنامجي Medicaid و Medicare", description: "للأعضاء المؤهلين الذين يستوفون شروط البرنامج.", icon: "/images/Frame-21.png" },
    ],
  },
  stepsImage: "/images/photo-test2.png", // confirmed via live fetch
  steps: {
    title: "كيف تبدأ",
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
    items: [
      { number: "01.", title: "اتصل بنا", description: "اتصل بنا للتحدث مع أحد خبراء خدمة العملاء في Ideal Home Health بشأن احتياجاتك، وسنجيب على أسئلتك ونساعدك على اتخاذ الخطوة الأولى" },
      { number: "02.", title: "نساعدك في تنسيق التفاصيل", description: "نحن نساعدك في إنجاز الإجراءات الورقية اللازمة، بما في ذلك التحقق من أهليتك للحصول على برنامج Medicaid، وتحديد مواعيد التقييمات الحكومية، والتنسيق مع الأطباء لتسهيل سير العملية" },
      // CDPAP clause dropped per standing rule — source reads "...أو
      // سنساعدك في تسجيل أحد أفراد العائلة أو الأصدقاء المؤهلين ليكون
      // مقدم رعاية في إطار برنامج CDPAP".
      { number: "03.", title: "اعثر على المساعد المثالي لك", description: "سنقوم بتزويدك بمساعد معتمد يناسب حالتك واحتياجاتك الخاصة بشكل مثالي." },
      { number: "04.", title: "تلقي الرعاية", description: "يمكن أن تبدأ رعايتك الشخصية فور استكمال جميع الإجراءات الورقية اللازمة. إنها عملية سريعة وسهلة مصممة لتزويدك بالمساعدة التي تحتاجها دون تأخير" },
    ],
  },
  whyChoose: {
    title: "لماذا تختار العائلات «إيديال هوم هيلث»؟",
    items: [
      { title: "الاستمرارية والثقة", description: "تساهم الرعاية المستمرة على المدى الطويل في بناء الثقة مع العملاء وأسرهم.", icon: "/images/Frame-1.png" },
      { title: "الدعم على مدار الساعة طوال أيام الأسبوع", description: "تتوفر المساعدة على مدار الساعة متى احتجت إليها.", icon: "/images/Frame-2.png" },
      { title: "التوافق الثقافي واللغوي", description: "نحن نولي أولوية لتزويد العملاء بمقدمي رعاية يفهمون لغتهم وثقافتهم.", icon: "/images/Frame-3.png" },
      { title: "مساعدون خضعوا لفحص دقيق", description: "يخضع مقدمو الرعاية لفحوصات خلفية وتدريب مهني.", icon: "/images/Frame-4.png" },
    ],
  },
  locations: {
    label: "الرعاية الصحية المنزلية المثالية",
    title: "خدمات الرعاية المنزلية في جميع أنحاء مدينة نيويورك",
    description: "تقدم «آيديال هوم هيلث» خدمات الرعاية المنزلية للمسنين والأسر المؤهلة في جميع أنحاء مدينة نيويورك",
    button: { title: "اتصل بنا", href: "/ar/contact-us-2" },
    image: "/images/Daco_924160.png",
  },
  // Addresses NOT translated here (unlike the Careers page) — a genuine
  // inconsistency between pages in the source, preserved as found.
  officeCards: [
    { title: "Brooklyn", subtitle: "Ideal Home Health – Brooklyn Office", address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US", phone: "(718) 517 – 2424", button: { title: "خدمات بروكلين", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "Ideal Home Health – Bronx Office", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US", phone: "(718) 517 – 2424", button: { title: "خدمات برونكس", href: "/locations/bronx" } },
  ],
  quote: {
    label: "«نعتني بك كأحد أفراد العائلة.»",
    title: "رعاية تشعرك بأنك بين أفراد العائلة",
    description: "في «آيديال هوم هيلث»، نقدم رعاية شخصية. نساعد كبار السن على البقاء آمنين ومدعومين ومرتاحين في منازلهم، ونمنح أسرهم راحة البال",
    image: "/images/Frame-11.jpg", // confirmed via live fetch (Frame-11-508x550.jpg variant)
  },
  prefooterCta: {
    title: "اكتشف ما إذا كنت مؤهلاً للحصول على رعاية منزلية مجانية",
    description: "اتصل بنا اليوم للحصول على استشارة مجانية ومناقشة خطة رعاية منزلية مخصصة تناسب احتياجات عائلتك تمامًا في مدينة نيويورك",
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
    image: "/images/Image.jpg", // confirmed via live fetch
  },
};

// Contact Us — built from a live fetch of https://idealhh.com/ar/contact-us-2/.
export const arContactUsPage = {
  hero: {
    title: "مقدم رعاية في بروكلين، نيويورك",
    paragraphs: [
      "إذا كان لديك استفسار عام، لا تتردد في الاتصال بنا على الرقم (718) 517 – 2424 أو عن طريق ملء النموذج برسالتك.",
    ],
    links: [
      { prefix: "إذا كنت ترغب في أن تصبح مريضًا أو مقدم رعاية، ", label: "سجل اليوم.", href: "/ar/enroll-now" },
      { prefix: "إذا كنت تبحث عن معلومات حول وظائف غير متعلقة بالرعاية مع Ideal HH، شاهد ", label: "قائمة الوظائف.", href: "/ar/careers" },
    ],
  },
  // Brooklyn card stays entirely in English (matching the same pattern
  // seen elsewhere: Brooklyn untranslated, Bronx partially translated) —
  // a genuine inconsistency in the source, kept verbatim.
  officeCards: [
    { title: "Brooklyn", subtitle: "Ideal Home Health – Brooklyn Office", address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US", phoneLine: "Phone: (718) 517 – 2424", button: { title: "تعرف على المزيد", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "Ideal Home Health – مكتب برونكس", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, الولايات المتحدة", phoneLine: "الهاتف: (718) 517 – 2424", button: { title: "تعرف على المزيد", href: "/locations/bronx" } },
  ],
  prefooterCta: {
    title: "هل أنت مستعد للتسجيل كمريض أو مقدم رعاية؟",
    description: "تعرف على المزيد حول ما إذا كنت مؤهلاً وسجل اليوم.",
    button: { title: "سجل اليوم", href: "/ar/enroll-now" },
    image: "/images/iStock-1181209194.jpg", // confirmed via live fetch
  },
};

// Enroll Now — built from a live fetch of https://idealhh.com/ar/enroll-now/.
export const arEnrollNowPage = {
  heroTitle: "هل أنا مؤهل؟",
  patientSection: {
    label: "لتلقي الرعاية:",
    questions: [
      "هل أنت مؤهل لبرنامج Medicaid أو تعتقد أنك قد تكون كذلك؟",
      "هل تعيش في نيويورك؟",
      "هل تريد المساعدة في الأنشطة اليومية مثل الطهي والتنظيف والعناية الشخصية؟",
    ],
  },
  caregiverSection: {
    label: "لرعاية شخص ما:",
    questions: [
      "هل عمرك 18 سنة أو أكثر؟",
      "هل لديك تصريح عمل في الولايات المتحدة؟",
      "هل أنت مهتم بالحصول على أجر يزيد عن 21.64 دولار/ساعة؟",
    ],
  },
  formSection: {
    title: "تسجيل المريض",
    note: "This is a Patient Application ONLY", // genuinely English in source, matching other locales
    // Live source links to the un-prefixed "/careers/"; routed to the real Arabic page.
    caregiverButton: { title: "Become a Caregiver", href: "/ar/careers" }, // button label itself untranslated too
  },
  prefooterCta: {
    title: "هل لديك أسئلة؟",
    description: "تواصل معنا اليوم للتحدث مع ممثل متفهم سيجيب على أي أسئلة لديك، سواء كانت كبيرة أو صغيرة.",
    // Live source links to "/ar/contact-us/" (no "-2" suffix); routed to the real page.
    button: { title: "اتصل بنا", href: "/ar/contact-us-2" },
  },
};

// Become a Caregiver — built from a live fetch of
// https://idealhh.com/ar/careers/how-it-works-caregivers/. One CDPAP
// mention removed per standing rule (source reads "...ندفع بعضًا من أعلى
// الأجور المتاحة لمقدمي الرعاية الصحية المنزلية، وcdpap، والممرضين
// المهرة."). The odd "Therapy in Brooklyn, New York"-style mismatched
// subheading is the same genuine shared-template quirk already found on
// the ES version of this page — kept as found, not a copy-paste error introduced here.
export const arBecomeCaregiverPage = {
  hero: {
    title: "أن تصبح مقدم رعاية في Ideal Home Health",
    description: "اتصل بنا للتحدث مع منسق ودود لتتعلم كيف يمكنك الحصول على أعلى الأجور في شركة تهتم حقًا بموظفيها وبالمرضى الذين يعتنون بهم.",
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
  },
  steps: [
    { number: "01.", title: "اتصل بنا", description: "اتصل بنا لبدء عملية التسجيل والتأكد من أنك مؤهل." },
    { number: "02.", title: "أكمل طلبًا", description: "سيتواصل معك منسق لملء طلبنا السهل لجمع معلوماتك المهمة. خلال هذه المرحلة، سيكون مطلوبًا فحص خلفية واختبار مخدرات." },
    { number: "03.", title: "استلم عرض العمل الخاص بك", description: "مبروك! أنت الآن مساعد صحي منزلي في Ideal. سنطابقك مع المريض المثالي." },
    { number: "04.", title: "ابدأ بتقديم الرعاية.", description: "ابدأ بالعناية بالمرضى." },
  ],
  stepsImage: "/images/ideal-home-health-caregiver-application-processing-nyc.jpg", // not confirmed via live fetch — EN fallback
  gettingStarted: {
    title: "نجعل من السهل أن تصبح مساعد صحي منزلي معتمد.",
    subtitle: "العلاج في بروكلين، نيويورك", // genuinely mismatched heading in source, matches the same quirk found on ES
    description: "في Ideal Home Health، نحن نقدر موظفينا ونقدم أجورًا عالية، تدريبًا ودعمًا لمساعدتك على النجاح.",
    listTitle: "البدء مع Ideal Home Health",
    listDescription: "بعد الاتصال بنا وملء الطلب، سنعمل على",
    items: [
      "نضعك مع مريض سيكون مناسبًا لك",
      "نوفر تدريبًا مستمرًا لإبقائك على اطلاع بالمهارات المطلوبة",
      "نوفر منسقين يمكنهم مساعدتك في الحصول على أي معدات أو خدمات ستساعدك على تقديم مستوى أعلى من الرعاية",
      // CDPAP clause dropped per standing rule — source reads "...ندفع
      // بعضًا من أعلى الأجور المتاحة لمقدمي الرعاية الصحية المنزلية،
      // وcdpap، والممرضين المهرة."
      "ندفع بعضًا من أعلى الأجور المتاحة لمقدمي الرعاية الصحية المنزلية والممرضين المهرة.",
    ],
    image: "/images/caregiver-at-ideal-home-health-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
  prefooterCta: {
    title: "ابدأ مسيرتك المهنية اليوم.",
    description: "اتصل بنا لبدء عملية أن تصبح مقدم رعاية في Ideal Home Health.",
    button: { title: "سجل الآن", href: "/ar/enroll-now" },
    image: "/images/ideal-home-health-caregiver-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
};
