// Traditional Chinese (zh-hant) content, built from live fetches of
// https://idealhh.com/zh-hant/... pages — not from the export. Cross-checked
// the same way as RU/ES/AR. ZH-HANT keeps nearly all slugs identical to
// English (see slug-map.ts) — the one confirmed exception is Contact Us,
// which kept the live "-2" suffix (/zh-hant/contact-us-2/), matching AR.

export const zhHantReviewsSection = {
  // Genuinely untranslated English heading even on this Traditional
  // Chinese page — kept verbatim, matching the identical pattern already
  // found on RU/ES/AR.
  title: "What Our Clients Say: Trusted Home Care in New York",
  // Reviewer names are transliterated to Chinese here (unlike EN, which
  // keeps Latin names) — genuinely translated, not something introduced here.
  reviews: [
    { name: "洛琳·穆倫", date: "2024-08-13", rating: 5, content: "Ideal 的每一位員工都非常有耐心、關懷、樂於助人、友善、知識淵博、資訊豐富，並且願意協助我順利加入該計畫。Emily、Paula 和許多員工更是不遺餘力，確保我的體驗順暢無阻。我由衷地感激。" },
    { name: "拉奎爾·麥克唐納", date: "2024-08-10", rating: 5, content: "理想家庭健康公司是我合作過的最好的機構。他們非常專業，總是接聽電話並幫助解決任何需求。工資總是準時發放，他們是最棒的，我很高興能和他們一起工作 ❤️。" },
    { name: "謝爾比·岡薩雷斯", date: "2024-05-25", rating: 5, content: "我的體驗非常好。我有時會拖延，但他們一直督促我，並一路幫助我。" },
    { name: "優素福·埃爾哈拉比", date: "2024-04-26", rating: 5, content: "很棒的人們，敬業、非常尊重他人，用非常簡單直白、容易理解的英語回答所有問題，跟進每一個活動，並幫助尋找任何問題或困難的解決方案和選項。心懷感激，特別感謝羅斯瑪麗、安娜比爾和艾米莉。" },
    // The source itself pastes the Spanish original here (not English) —
    // a WPML "translated by Google" artifact, kept verbatim including the
    // untranslated Spanish line, matching the same pattern found on AR.
    { name: "達奇拉·里維拉·拉莫斯", date: "2024-02-15", rating: 5, content: "（谷歌翻譯）非常細心且樂於助人，照顧和設備都很好。\n（原文）\nMuy atentos y servicial, un buen cuidado y equipo." },
    { name: "丹妮絲·哈蒙茲", date: "2024-01-22", rating: 5, content: "理想家庭護理是最棒的 💯.. 我從未遇過一家如此親切又愉快的機構.. 所有女士都合作得非常好，但我必須特別提到兩位，就是尤利安娜和葆拉女士.. 她迎難而上，堅持到底.. 在整個過程中，她和尤利安娜一樣，不斷與我溝通所有進展.. 她們讓我相信一切都會非常好 👍🏾… 她們在自己的工作中十分出色，再次由衷感謝你們… 美麗的女士們 🤗" },
    { name: "娜丁·道斯", date: "2023-04-24", rating: 5, content: "我遇到的員工都很棒。如果幫助他人是你的使命，那麼這是一家理想的公司。" },
    { name: "謝里斯·卡拉韋", date: "2022-10-26", rating: 5, content: "這是迄今為止最好的機構，我很自豪選擇了他們，並將繼續與他們合作一段時間" },
  ],
};

export const zhHantHomePage = {
  hero: {
    title: "Ideal Home Health：紐約市富有愛心的居家護理服務",
    description: "在您家中親身體驗 Ideal Home Health 帶來的富有愛心且高品質的居家護理服務。作為紐約市領先的認證居家護理機構，我們致力於提供個性化的居家護理方案，幫助您獨立且舒適地生活。無論您需要日常生活協助或專業護理，我們敬業的團隊隨時為您服務。今天就來發現 Ideal 的不同之處。",
    primaryButton: { title: "成為護理員", href: "/zh-hant/careers/#qualifyenroll" },
    secondaryButton: { title: "申請居家護理", href: "/zh-hant/enroll-now" },
  },
  heroImage: "/images/compassionate-home-health-care-services-nyc.jpg",
  servicesTeaser: [
    {
      icon: "heart",
      title: "個人化照護的家庭護理助理",
      description: "我們的認證家庭護理助理提供貼心的個人照護與日常生活協助。我們幫助您在紐約的家中保持獨立。",
      button: { title: "了解更多", href: "/zh-hant/services/home-health-aide" },
    },
    {
      icon: "heart-pulse",
      title: "專業居家訪視護士",
      description: "我們的持證訪視護士在您位於紐約市的家中提供專業醫療護理，並根據您的需求制定個人化計劃。",
      button: { title: "了解更多", href: "/zh-hant/services/visiting-home-nurse" },
    },
  ],
  whoBenefits: {
    label: "Ideal Home Health",
    title: "誰能從 Ideal 的紐約居家護理服務中受益？",
    image: "/images/home-health-care-in-nyc.jpg",
    items: [
      "需要獨立生活協助的長者",
      "術後或病後康復人士",
      "慢性病患者（如中風、糖尿病居家護理）",
      "需要喘息服務的家庭",
    ],
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
  },
  customPlans: {
    label: "Ideal Home Health",
    title: "紐約的個性化居家護理：您的獨特需求，我們的專屬計劃",
    subtitle: "彈性的居家陪護服務與專業照護",
    description: "我們在紐約市五大行政區提供的居家護理服務涵蓋各類需求。我們提供量身訂做的護理模式與彈性的居家陪護服務，符合您家庭獨特的生活方式與需求。",
    image: "/images/personalized-home-health-care-new-york.jpg",
    // Live source links to the shorter "/zh-hant/conditions/" path, which
    // doesn't match this app's routing (conditions overview lives under
    // /services/conditions here, matching every other locale) — routed to
    // the real page instead of a path this app doesn't serve.
    button: { title: "查看我們的專科護理", href: "/zh-hant/services/conditions" },
  },
  locations: {
    label: "Ideal Home Health",
    title: "Ideal Home Health：自豪地服務紐約市五大行政區",
    description: "為了照護員與家庭的便利，我們在紐約市的辦公室都設在鄰近地區。我們在各地的專業護理人員為整個紐約市（包括皇后區、布魯克林、曼哈頓、史泰登島及布朗克斯）提供高效專業的服務。",
    // Live source links to the un-prefixed "/contact-us-2/" (missing
    // /zh-hant/); routed to the real page instead.
    button: { title: "聯絡我們", href: "/zh-hant/contact-us-2" },
  },
  locationsImage: "/images/Daco_924160.png",
  // Locations pages (Brooklyn/Bronx) have no Traditional Chinese
  // translation on the source site — office cards link to the English
  // location pages, same approach as RU/ES/AR took for other EN-only pages.
  locationCards: [
    { name: "Brooklyn", address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US", button: { title: "Brooklyn Services", href: "/locations/brooklyn" } },
    { name: "Bronx", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US", button: { title: "Bronx Services", href: "/locations/bronx" } },
  ],
  careers: {
    label: "IDEAL HOME HEALTH",
    title: "加入我們在紐約的富有愛心居家護理團隊",
    description: "您是一位專注且有愛心的照護者，並正在尋找在紐約市居家護理領域的有意義職涯嗎？Ideal Home Health 正積極招募有才華的人士加入我們成長中的團隊。在這裡，您會發現一個支持性的環境，讓您對照護的熱情真正發揮影響力。",
    image: "/images/join-ideal-home-health-care-nyc.jpg",
    button: { title: "查看職涯機會", href: "/zh-hant/careers" },
  },
  prefooterCta: {
    title: "準備好在紐約找到理想的居家護理方案了嗎？",
    description: "立即聯繫我們，獲取免費諮詢，並討論完全符合您家庭需求的專屬護理計劃。",
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
  },
};

// About Us — built from a live fetch of https://idealhh.com/zh-hant/about-us/.
export const zhHantAboutUsPage = {
  hero: {
    title: "紐約布魯克林的居家護理",
    description: "在 Ideal Home Health，您的家人就是我們的家人。我們於 2013 年在紐約布魯克林作為一家居家護理機構開始運營，目標是振興紐約居家護理行業中效率低下且過時的系統。專注於客戶服務、溝通和效率，我們聘請熱衷於提升您生活品質的護理人員。",
    image: "/images/trusted-home-care-agency-new-york-city.jpg", // not confirmed via live fetch — EN fallback
    buttons: [
      { title: "查看服務", href: "/zh-hant/services" },
      { title: "立即註冊", href: "/zh-hant/enroll-now" },
    ],
  },
  mission: {
    label: "IDEAL HOME HEALTH",
    title: "我們的使命與核心價值觀",
    description: "我們的使命是提供卓越的關懷照護標準，賦予每位服務對象力量。這項使命由核心價值引領：深植於心的信念——您的家人就是我們的家人；對溝通與效率的堅定承諾；以及始終秉持誠信行事的誓言。秉持這些價值觀，我們確保提供更高標準的照護服務，不僅滿足您的生理需求，更支持您的情感與社交福祉。",
    image: "/images/compassionate-in-home-care-nyc.jpg",
    // Live source links to the un-prefixed "/about-us/testimonials-reviews/"; routed to the real page.
    button: { title: "他人如何評價", href: "/zh-hant/about-us/testimonials-reviews" },
  },
  areasServed: {
    label: "服務地區",
    title: "服務範圍涵蓋紐約市所有行政區及郡縣",
    description: "Ideal Home Health 起步於一位創始合夥人的住宅地下室，最初僅有四名員工，總部位於布魯克林。短短五年內，公司已成長為擁有 1500 多名成員的社群，遍佈紐約市五大行政區。\n\n除了提供居家護理服務，Ideal Home Health 還與數十家社區中心、養老設施、食物銀行、慈善機構和社區組織合作，持續為紐約社區帶來積極影響。",
    image: "/images/Daco_924160.png",
    button: { title: "聯絡我們", href: "/zh-hant/contact-us-2" },
  },
  // Brooklyn card is more fully translated than Bronx here (opposite of
  // the pattern seen on other locales' pages) — a genuine per-page
  // inconsistency in the source, kept as found.
  officeCards: [
    { title: "Brooklyn", subtitle: "理想居家健康照護 – 布魯克林辦公室", address: "東16街2617號，2樓，布魯克林, 紐約州, 11235，美國", phone: "電話：(718) 517 – 2424", button: { title: "了解更多", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "理想居家健康照護 – 布朗克斯辦公室", address: "東149街391號，Suite 515，Bronx, NY, 10455，US", phone: "Phone: (718) 517 – 2424", button: { title: "了解更多", href: "/locations/bronx" } },
  ],
  // 4-slide multilingual carousel — same genuine quirk as every other
  // locale. On THIS page the 4th slide (normally static Simplified
  // Chinese on other locales' pages) is genuinely rendered in Traditional
  // Chinese, matching the page's own locale — a real, confirmed WPML
  // behavior specific to zh-hant, not something introduced here.
  languages: [
    { title: "Your language and cultural needs are our priority", description: "We speak your language and understand you and your families cultural needs and preferences.", button: { title: "立即註冊！", href: "/zh-hant/enroll-now" } },
    { title: "Язык на котором вы говорите и ваши культурные ценности у нас в приоритете", description: "Мы говорим на вашем языке и понимаем вас и ваши культурные ценности и предпочтения.", button: { title: "立即註冊！", href: "/zh-hant/enroll-now" } },
    { title: "Sus necesidades de idioma y cultura son nuestra prioridad", description: "Hablamos su idioma y entendemos sus necesidades y preferencias culturales al igual que la de sus familiares.", button: { title: "立即註冊！", href: "/zh-hant/enroll-now" } },
    { title: "您的語言和文化需求是我們的首要任務", description: "我們會說您的語言，並了解您和您的家人的文化需求和喜好。", button: { title: "立即註冊！", href: "/zh-hant/enroll-now" } },
  ],
  statistics: [
    { topTitle: "我們已經幫助了", featureTopText: "5,000+", featureText: "病患與護理人員", description: "自 Ideal Home Health 創立以來。" },
    { topTitle: "我們服務", featureTopText: "病患來自", featureText: "多種宗教", description: "包括天主教、基督教、伊斯蘭教、印度教、佛教、基督復臨安息日會、耶和華見證人、猶太教等。" },
    { topTitle: "我們有", featureTopText: "護理人員能夠", featureText: "說您的語言", description: "我們的護理人員掌握超過 34 種語言。" },
    { topTitle: "在 Ideal Home Health", featureTopText: "我們理解", featureText: "您的文化需求", description: "我們為來自 46 個以上國家的病患提供服務。" },
  ],
  prefooterCta: {
    title: "有任何問題嗎？",
    description: "我們富有同情心的代表隨時可以討論您提出的任何問題。",
    // Live source links to "/zh-hant/contact-us/" (no "-2" suffix); routed to the real page.
    button: { title: "聯絡我們", href: "/zh-hant/contact-us-2" },
    image: "/images/registered-home-nurse-nyc.jpg",
  },
};

// Testimonials & Reviews — built from a live fetch of
// https://idealhh.com/zh-hant/about-us/testimonials-reviews/. Like the
// homepage reviews, fully translated including transliterated reviewer names.
export const zhHantTestimonialsPage = {
  hero: {
    title: "推薦與評論",
    description: "我們以擁有快樂的護理人員、病人和家庭而自豪。",
    // The live source's secondary heading has a genuine, visible rendering
    // glitch — a stray `",` fragment appears right after the heading text
    // on the actual page (matching an identical artifact in this page's
    // raw meta-description field: "紐約布魯克林的陪伴服務 &quot;,"). This
    // looks like an unescaped snippet that leaked into both the heading
    // and the meta tag. Kept exactly as rendered rather than cleaned up,
    // per word-for-word fidelity.
    secondaryHeading: '紐約布魯克林的陪伴服務 ",',
  },
  testimonialsLabel: "其他人怎麼說",
  testimonials: [
    { author: "Tayshia B.", role: "照護人員", rating: 5, content: "我在 Ideal Home Health 已經工作了兩年。我很感謝他們的辦公室協調員，他們在我看來總是竭盡所能，確保我能及時完成文件和培訓。這裡的薪資也是我領過最高的之一，我很慶幸能在這裡工作。", image: "/images/pexels-tarzine-jackson.jpg" },
    { author: "Liz P", role: "病患", rating: 5, content: "謝謝。我很高興能得到幫助。我的助手幫我吃藥，早上也幫我弄頭髮。當我能見到孫子們時，我很開心，而她會保持整潔，因為我自己做不到。Sarah 非常好，我真的、真的很感激這些幫助。", image: "/images/iStock-1138669982.jpg" },
    { author: "Joseph A.", role: "家庭成員", rating: 5, content: "自從我搬離紐約後，照顧母親對我和妹妹來說變得非常有壓力。有一位護理員讓我們放心，即使我們無法在場，她也很安全。我們與 Ideal Home Health 合作的經驗非常棒，他們很專業，並且讓整個過程變得簡單。", image: "/images/iStock-1089410668.jpg" },
  ],
  reviewsLabel: "評論",
  reviews: [
    { rating: 5, name: "潔西卡·P", location: "紐約布魯克林區", review: "我能夠很快地為我的公公註冊到一位護理員，我們大約一週內就全部安排好了。Ideal HH 的員工合作起來非常愉快，辦公室距離我公寓只有 15 分鐘，這非常方便。總體來說服務很好，如果您需要家庭護理員，我強烈推薦他們。" },
    { rating: 4, name: "伊爾薩爾·M", location: "紐約布朗克斯區", review: "薪資很好，他們也能配合我在宗教節日的休假。註冊時我的文件有些挑戰，但總體來說這是一個很好的經歷，我計劃繼續為 Ideal Home Health 工作。" },
    { rating: 5, name: "喬丹·H", location: "紐約皇后區", review: "我們需要一位特別的護理員，我父親除了糖尿病和行動不便外，還患有失智症。Ideal Home Health 花時間詳細討論了他護理需求的所有細節，總體而言我們對他所接受的照護水準非常滿意。雖然很難判斷，但我相信父親現在更快樂了，而我也很欣慰每天知道他是安全的。" },
    { rating: 5, name: "約翰·K", location: "紐約布朗克斯區", review: "很棒的公司。讓整個流程變得簡單，我們很快就完成了註冊並獲得了照護，一切都非常容易。" },
  ],
  prefooterCta: {
    title: "準備好了解更多並獲得您需要的幫助了嗎？",
    description: "今天就聯繫我們，討論您家庭的特殊需求。",
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
};

// Services overview — built from a live fetch of https://idealhh.com/zh-hant/services/.
// CDPAP card present in source (between HHA and Visiting Nurse, linking to
// idealcdpap.com) dropped per standing rule, matching every other locale.
export const zhHantServicesPage = {
  hero: {
    label: "我們有專家可以協助您的個人需求。",
    title: "紐約布魯克林的護理服務",
    description: "作為紐約的居家護理機構，我們受過高度培訓的護士、護理員和專業護理人員隨時為您的大小需求提供幫助。",
    // Live source links "聯絡我們" to "/zh-hant/contact-us/" (no "-2"
    // suffix), inconsistent with the real live slug confirmed via nav
    // (/zh-hant/contact-us-2/) — routed to the real working page instead.
    primaryButton: { title: "聯絡我們", href: "/zh-hant/contact-us-2" },
    secondaryButton: { title: "立即報名", href: "/zh-hant/enroll-now" },
    image: "/images/home-health-care-services-new-york-city.jpg", // not confirmed via live fetch — EN fallback
  },
  // Both cards are genuinely untranslated in the source (English title +
  // description) — kept verbatim, matching the exact same "rigorous
  // bi-annual training" wording already found on ES/AR versions of this page.
  services: [
    {
      title: "Home Health Aides – HHA: Essential Daily Support",
      description: "Our Department of Health certified Home Health Aides (HHAs) offer compassionate assistance with Activities of Daily Living (ADLs). From personal care to medication reminders, our in-home aides in NYC help maintain independence. All HHAs receive rigorous bi-annual training, ensuring top safety standards.",
      button: { title: "了解更多", href: "/zh-hant/services/home-health-aide" },
      image: "/images/home-health-aides-new-york.jpg", // not confirmed via live fetch — EN fallback
    },
    {
      title: "Visiting Home Nurse – Expert Skilled Nursing Care at Home",
      description: "Receive skilled nursing care in your New York City home with our licensed Visiting Home Nurses (RNs/LPNs). We offer medication management, wound care, post-operative support, chronic disease management, and more. Our nurses create custom plans of care for your optimal health and recovery.",
      button: { title: "了解更多", href: "/zh-hant/services/visiting-home-nurse" },
      // Confirmed via live fetch — same shared shutterstock asset as RU/ES/AR.
      image: "/images/shutterstock_1667840344.jpg",
    },
  ],
  whyChoose: {
    title: "Why Choose Ideal Home Health for Your NYC Home Care Needs?", // untranslated in source
    items: ["Accredited & Trusted", "Experienced & Compassionate Team", "Personalized & Flexible Plans", "Local NYC Expertise", "Seamless Enrollment"], // untranslated in source
    button: { title: "Enroll Now", href: "/zh-hant/enroll-now" }, // button label itself untranslated too
    // Confirmed via live fetch — same asset already found on ES/AR.
    image: "/images/you-can-hire-your-relative-to-care-for-you.jpg",
  },
  prefooterCta: {
    title: "準備好了解更多並獲得您所需的幫助了嗎？",
    description: "聯絡我們以了解更多關於我們的服務如何支持您家庭的獨特需求。",
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
    image: "/images/iStock-866130786.jpg", // confirmed via live fetch
  },
};

// Visiting Home Nurse — built from a live fetch of
// https://idealhh.com/zh-hant/services/visiting-home-nurse/. Fully
// translated, includes the same 3-testimonial carousel as Testimonials & Reviews.
export const zhHantVisitingHomeNursePage = {
  hero: {
    label: "服務",
    subtitle: "到府護理師",
    title: "紐約的居家護理機構",
    description: "我們的註冊護理師將監測並評估您的需求和狀況，為您制定個人化的護理計劃。",
    // Confirmed via live fetch — same shared shutterstock asset as RU/ES/AR/ZH-HANT services overview.
    image: "/images/shutterstock_1667840344.jpg",
    buttons: [
      { title: "立即註冊", href: "/zh-hant/enroll-now" },
      // Live source links to "/zh-hant/contact-us/" (no "-2" suffix); routed to the real page.
      { title: "聯絡我們", href: "/zh-hant/contact-us-2" },
    ],
  },
  bullets: {
    title: "由持牌註冊護理師提供高水準的照護。",
    listTitle: "Ideal Home Health 專業護理師",
    listDescription: "我們的持牌健康專業人員可以協助",
    items: [
      "依據您的醫師建議、個人偏好與生活方式，與您共同制定護理計劃",
      "按照醫師指示執行醫療護理",
      "監測生命體徵與醫療設備",
      "管理用藥時間表並監控症狀",
      "術後及傷口護理",
    ],
    // Confirmed via live fetch.
    image: "/images/iStock-638124036.jpg",
  },
  testimonialsLabel: "其他人怎麼說",
  prefooterCta: {
    title: "準備好了解更多並獲得您需要的幫助了嗎？",
    description: "請聯繫我們，討論您家庭的特殊護理需求。",
    button: { title: "立即註冊", href: "/zh-hant/enroll-now" },
    image: "/images/contact-ideal-home-health-care-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
};

// Conditions overview — built from a live fetch of
// https://idealhh.com/zh-hant/services/conditions/. Card blurbs ARE
// translated, but the individual condition links (spot-checked diabetes)
// silently serve English content (og:locale: en_US, canonical pointing at
// English, language switcher doesn't even offer a zh-hant link) — no real
// Traditional Chinese condition detail page exists on the live site.
// Routed to the real English pages instead of fabricating translated
// detail content that doesn't exist in the source.
export const zhHantConditionsPage = {
  cards: [
    { title: "糖尿病", description: "我們專業的居家護理助理能提供正確的糖尿病管理，幫助您過上更快樂、更健康的生活。", href: "/conditions/diabetes", buttonLabel: "糖尿病" },
    { title: "中風", description: "中風後的生活能夠改善，藉由一位理解您的康復是首要任務的助理協助。", href: "/conditions/stroke" },
    { title: "阿茲海默症 / 失智症", description: "我們確保有記憶照護需求的家人安全，並幫助他們在日常生活中找到安適感。", href: "/conditions/alzheimers-dementia" },
    { title: "癲癇", description: "癲癇發作可能突然發生，我們能在您最需要的時候守護您的安全。", href: "/conditions/epilepsy" },
    { title: "防跌倒", description: "預防跌倒能挽救生命，降低潛在併發症的風險，並幫助您維持或改善行動力。", href: "/conditions/fall-prevention" },
    { title: "日常任務協助", description: "我們的居家護理助理能伸出援手，確保您能跟上日常作息並繼續做您熱愛的事情。", href: "/conditions/help-with-daily-tasks" },
    { title: "帕金森氏症", description: "我們高素質的居家護理助理專精於帕金森氏症照護，協助您擁有最佳生活品質。", href: "/conditions/parkinsons" },
    { title: "關節炎", description: "當行動伴隨疼痛時，我們能根據您的需求提供客製化照護，讓您持續做自己熱愛的事情。", href: "/conditions/arthritis" },
    { title: "搬運與轉移", description: "我們有受過專業訓練的專員，能安全穩妥地移動病患，避免不必要的傷害與壓力。", href: "/conditions/lifting-and-transferring" },
    { title: "24小時全日照護", description: "當您需要全天候協助時，我們經驗豐富的居家護理助理能隨時為您服務。", href: "/conditions/live-in-24-hour-care" },
    { title: "出院後照護", description: "出院後，我們受過高訓的居家護理助理能協助您遵循康復計畫，並盡快恢復健康。", href: "/conditions/post-hospital-care" },
    { title: "輪椅 / 臥床支援", description: "若您的家人需要使用輪椅或臥床，我們專業訓練的專員能幫助他們在空間中安全移動並完成日常任務。", href: "/conditions/wheel-chair-bed-bound-support" },
    { title: "個人化照護", description: "若您有特殊病況或需求，我們的合格護理人員能與您及家人合作，制定個人化治療計畫。", href: "/conditions/individualized-care" },
  ],
  prefooterCta: {
    title: "準備好了解更多並獲得您需要的協助了嗎？",
    description: "立即聯絡我們。",
    // Live source links to "/zh-hant/contact-us/" (no "-2" suffix); routed to the real page.
    button: { title: "聯絡我們", href: "/zh-hant/contact-us-2" },
  },
};

// How to Enroll — built from a live fetch of https://idealhh.com/zh-hant/how-to-enroll/.
// Two CDPAP mentions in the source (step 3, and the first bullet item)
// removed per standing rule, matching every other locale.
export const zhHantHowToEnrollPage = {
  hero: {
    title: "如何註冊：成為病患的第一步",
    description: "我們的專業居家護理員可以幫助您管理困難的疾病，享受更快樂、更健康的生活。",
    image: "/images/how-to-enroll-ideal-home-health-nyc-2.jpg", // not confirmed via live fetch — EN fallback
    button: { title: "今天註冊", href: "/zh-hant/enroll-now" },
  },
  steps: [
    { number: "01.", title: "聯繫我們", description: "請聯繫我們，與 Ideal Home Health 的客服專員討論您的需求" },
    { number: "02.", title: "我們協助您處理細節", description: "我們指導您完成檢查醫療補助資格、安排州評估，以及與醫生協調文件的步驟" },
    // CDPAP clause dropped per standing rule — source reads "...或協助您
    // 將符合資格的家庭成員或朋友登記為 CDPAP 照護者。"
    { number: "03.", title: "找到您的理想護理員", description: "我們將根據您的狀況和需求，為您配對合適的護理員。" },
    { number: "04.", title: "接受護理", description: "完成少量文件後，您的護理即可開始。這是一個快速而簡單的過程。" },
  ],
  bullets: {
    title: "我們讓接受護理變得簡單。",
    subtitle: "紐約的居家護理",
    description: "我們根據您的需求程度、生活方式和家庭偏好，提供多種協助選項。",
    image: "/images/compassionate-caregivers-nyc.jpg", // not confirmed via live fetch — EN fallback
    listTitle: "開始與 Ideal Home Health 合作",
    listDescription: "在與您的保險和醫療提供者協調細節後，我們會與您的家庭合作，以確保您能獲得所需的護理水準。",
    items: [
      // CDPAP clause dropped per standing rule — source reads "...居家護理
      // 員、專業護理和 CDPAP 照護者" with a link to idealcdpap.com.
      "我們配備高素質的居家護理員和專業護理。",
      "我們根據您的狀況與您一起制定個人化方案",
      "我們有會講您語言並理解您文化需求的護理員",
      "我們配備理解並有耐心的協調員，確保您的任何問題都能得到解答",
    ],
  },
  prefooterCta: {
    title: "準備好了解更多並獲得您需要的幫助了嗎？",
    description: "聯繫我們，討論符合您獨特需求的個人化護理計劃。",
    button: { title: "立即註冊", href: "/zh-hant/enroll-now" },
    image: "/images/contact-ideal-home-health-care-new-york-city.jpg", // not confirmed via live fetch — EN fallback
  },
};

// Home Care Benefits — built from a live fetch of
// https://idealhh.com/zh-hant/home-care-benefits/ (the June 2026 redesign,
// matching the current EN/ES/RU/AR benefitsPage structure). One CDPAP
// mention in step 3 removed per standing rule.
export const zhHantBenefitsPage = {
  hero: {
    title: "Medicaid 與 Medicare 承保的居家照護福利",
    description: "在紐約市獲得可靠的居家照護服務，內容包含個人照護、交通協助、輕度家務、用藥提醒等——符合資格的長者可透過醫療補助（Medicaid）及聯邦醫療保險（Medicare）申請此服務。",
    image: "/images/Rectangle-1.png", // confirmed via live fetch
    phone: "(718) 517-2424",
    badges: [
      { bold: "每月支付 220 美元", normal: "適用於符合資格的日常用品" },
      { bold: "每年最高可達 360 美元", normal: "在健康獎勵計劃中" },
      { bold: "全年無休的支援服務", normal: "為值得信賴的照護者" },
    ],
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
  },
  qualify: {
    cardTitle: "如果您符合以下條件，您可能有資格",
    heading: "透過 Ideal Home Health 接受居家照護的費用是多少？",
    description: "對於紐約市許多符合資格的長者而言，透過「理想居家健康」（Ideal Home Health）提供的居家照護服務，可透過醫療補助（Medicaid）及聯邦醫療保險（Medicare）獲得，且無需自掏腰包支付費用。\n\n我們不會要求家屬選擇按小時計費的照護方案，而是會先確認您或您的親人是否符合領取受保障的居家照護福利資格。",
    button: { title: "查看我的資格", href: "/zh-hant/enroll-now" },
    items: [
      "您年滿 55 歲",
      "您擁有醫療補助（Medicaid）和聯邦醫療保險（Medicare）",
      "您住在布魯克林、布朗克斯、皇后區、史坦頓島或紐約市",
      "您在日常活動上需要協助",
    ],
  },
  included: {
    title: "您的居家照護福利包含哪些內容？",
    button: { title: "立即獲取註冊協助", href: "/zh-hant/enroll-now" },
    items: [
      { title: "個人護理", description: "協助沐浴、穿衣、洗衣及日常個人照護。", icon: "/images/boxicons_car-filled.png" },
      { title: "交通補助", description: "協助安排前往就醫、辦事及參加社交活動的交通。", icon: "/images/boxicons_car-filled-1.png" },
      { title: "輕度家務", description: "在家協助準備餐點、進行簡易清潔，以及陪伴。", icon: "/images/boxicons_car-filled-2.png" },
      { title: "用藥提醒", description: "每日協助提醒服藥及藥物管理。", icon: "/images/boxicons_car-filled-3.png" },
    ],
  },
  includedImage: "/images/Frame-11-2.png", // confirmed via live fetch
  extras: {
    title: "符合資格的會員可能獲得的服務不僅限於居家照護",
    items: [
      { title: "每月支付 220 美元", description: "用於購買符合資格且能滿足您日常需求的物品。", icon: "/images/Frame-21.png" },
      { title: "每年最高可達 360 美元", description: "可透過健康獎勵計畫獲得。", icon: "/images/Frame-21.png" },
      { title: "處方支援", description: "藥物與藥師的支援，助您持續按時服藥。", icon: "/images/Frame-21.png" },
      { title: "持有 Medicaid 或 Medicare 者可免費使用", description: "適用於符合計畫資格的會員。", icon: "/images/Frame-21.png" },
    ],
  },
  stepsImage: "/images/photo-test2.png", // confirmed via live fetch
  steps: {
    title: "如何開始？",
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
    items: [
      { number: "01.", title: "聯絡我們", description: "請聯絡我們，與 Ideal Home Health 的客戶專員討論您的需求，我們將為您解答疑問，並協助您踏出第一步。" },
      { number: "02.", title: "我們協助您統籌各項細節", description: "我們將協助您處理必要的文件手續，包括確認醫療補助（Medicaid）的資格、安排州政府評估，以及與醫師協調，以簡化整個流程。" },
      // CDPAP clause dropped per standing rule — source reads "...或者協助
      // 您將符合資格的家人或朋友登記為 CDPAP 照顧者。"
      { number: "03.", title: "尋找您的理想助手", description: "我們將為您配對一位經認證的護理員，該護理員將最符合您的獨特狀況與需求。" },
      { number: "04.", title: "接受照護", description: "只要完成所有必要的文件手續，您的個人化照護服務即可立即展開。這是一個快速簡便的流程，旨在讓您能無須等待，立即獲得所需的協助。" },
    ],
  },
  whyChoose: {
    title: "為什麼家庭會選擇「理想居家護理」",
    items: [
      { title: "延續性與信任", description: "一貫且長期的照護能與客戶及其家屬建立信任關係。", icon: "/images/Frame-1.png" },
      { title: "全年無休支援", description: "當您需要時，我們提供全天候的協助。", icon: "/images/Frame-2.png" },
      { title: "文化與語言契合度", description: "我們優先安排客戶與了解其語言及文化的照護人員配對。", icon: "/images/Frame-3.png" },
      { title: "經過嚴格審查的幕僚", description: "照護人員均經過背景調查及專業培訓。", icon: "/images/Frame-4.png" },
    ],
  },
  locations: {
    label: "理想居家健康",
    title: "紐約市各地的居家照護服務",
    description: "「理想居家健康」為紐約市符合資格的長者及家庭提供居家照護支援。",
    button: { title: "聯絡我們", href: "/zh-hant/contact-us-2" },
    image: "/images/Daco_924160.png",
  },
  // Brooklyn card: street translated but floor stays English; Bronx card
  // fully English except street — same partial-translation inconsistency
  // pattern already found elsewhere, kept as found.
  officeCards: [
    { title: "Brooklyn", subtitle: "理想居家健康 – 布魯克林辦公室", address: "東16街2617號, Floor 2, Brooklyn, NY, 11235, US", phone: "(718) 517 – 2424", button: { title: "布魯克林服務", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "理想居家健康 – 布朗克斯辦公室", address: "東149街391號, Suite 515, Bronx, NY, 10455, US", phone: "(718) 517 – 2424", button: { title: "布朗克斯服務", href: "/locations/bronx" } },
  ],
  quote: {
    label: "「像家人一樣關懷您。」",
    title: "宛如家一般的關懷",
    description: "在「理想居家照護」，我們提供量身訂製的照護服務。我們協助長者在家中安全、受支持且舒適地生活，同時讓家屬安心無憂。",
    image: "/images/Frame-11.jpg", // confirmed via live fetch (Frame-11-508x550.jpg variant)
  },
  prefooterCta: {
    title: "了解您是否符合免費居家照護的資格",
    description: "立即聯絡我們，預約免費諮詢，共同商討一套完全符合您在紐約市家庭需求的客製化居家照護方案。",
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
    image: "/images/Image.jpg", // confirmed via live fetch
  },
};

// Contact Us — built from a live fetch of https://idealhh.com/zh-hant/contact-us-2/.
export const zhHantContactUsPage = {
  hero: {
    // Genuinely English in the source — an untranslated H1 (matches the
    // same pattern of untranslated generic headings seen elsewhere).
    title: "Caregiver in Brooklyn, New York",
    paragraphs: [
      "如果您有一般查詢，請隨時致電 (718) 517 – 2424 或填寫表單並留言。",
    ],
    links: [
      { prefix: "如果您希望成為患者或護理人員，", label: "立即註冊。", href: "/zh-hant/enroll-now" },
      { prefix: "如果您正在尋找 Ideal HH 的非護理職位資訊，請查看我們的", label: "職缺列表。", href: "/zh-hant/careers" },
    ],
  },
  // Both office cards are fully translated here (unlike some other pages
  // where Brooklyn/Bronx get inconsistent partial translation) — kept as found.
  officeCards: [
    { title: "Brooklyn", subtitle: "理想居家健康照護 – 布魯克林辦公室", address: "東16街2617號，2樓，布魯克林, 紐約州, 11235，美國", phoneLine: "電話：(718) 517 – 2424", button: { title: "了解更多", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "理想居家健康 – 布朗克斯辦公室", address: "東149街391號，515室，布朗克斯區, 紐約州, 10455，美國", phoneLine: "電話：(718) 517 – 2424", button: { title: "了解更多", href: "/locations/bronx" } },
  ],
  prefooterCta: {
    title: "準備好註冊成為患者或護理人員了嗎？",
    description: "了解更多您是否符合資格，並立即註冊。",
    button: { title: "立即註冊", href: "/zh-hant/enroll-now" },
    image: "/images/iStock-1181209194.jpg", // confirmed via live fetch
  },
};

// Enroll Now — built from a live fetch of https://idealhh.com/zh-hant/enroll-now/.
export const zhHantEnrollNowPage = {
  heroTitle: "我符合資格嗎？",
  patientSection: {
    label: "接受照護：",
    questions: [
      "您是否符合或可能符合醫療補助資格？",
      "您是否居住在紐約？",
      "您是否需要日常活動的協助，如烹飪、清潔和個人護理？",
    ],
  },
  caregiverSection: {
    label: "照護他人：",
    questions: [
      "您是否年滿18歲？",
      "您是否被授權在美國工作？",
      "您是否有興趣獲得超過每小時21.64美元的薪酬？",
    ],
  },
  formSection: {
    title: "病人報名",
    note: "This is a Patient Application ONLY", // genuinely English in source, matching other locales
    // Live source links to the un-prefixed "/careers/"; routed to the real page.
    caregiverButton: { title: "Become a Caregiver", href: "/zh-hant/careers" }, // button label itself untranslated too
  },
  prefooterCta: {
    title: "有問題嗎？",
    description: "今天就聯繫我們，與富有同情心的代表交談，他們將回答您所有的問題，不論大小。",
    // Live source links to "/zh-hant/contact-us/" (no "-2" suffix); routed to the real page.
    button: { title: "聯繫我們", href: "/zh-hant/contact-us-2" },
  },
};

// Careers (top-level /zh-hant/careers/) — built from a live fetch of
// https://idealhh.com/zh-hant/careers/. CDPAP button (present in source
// next to "Patient Enrollment" above the form) dropped per standing rule.
export const zhHantCareersPage = {
  hero: {
    title: "家庭護理助理 (HHA) — 紐約布魯克林",
    description: "如果您是一名有技能、富有同情心且敬業的 HHA、RN、LPN 或 PCA，希望在一個充滿活力和令人興奮的公司發展職業生涯，Ideal Home Health 是幫助您實現夢想的最佳工作場所！",
    image: "/images/home-health-caregiver-nyc.jpg", // not confirmed via live fetch — EN fallback
    button: { title: "成為照護者", href: "#qualifyenroll" },
  },
  benefits: {
    title: "在 Ideal Home Health 開始一份令人振奮的新職業。",
    description: "今天就聯繫我們專業的代表開始您的註冊流程。",
    image: "/images/home-health-caregiver-career.jpg", // not confirmed via live fetch — EN fallback
    listTitle: "理想福利",
    listDescription: "在 Ideal Home Health，",
    items: [
      "我們理解工作與生活的平衡很重要，並提供靈活的班次選擇以配合您的時間安排。",
      "我們讓支付更簡單，並設置直接存入您的銀行帳戶。",
      "我們提供慷慨的福利方案。",
      "我們擁有最便利的工作環境，協調員會將您安排在最適合您的地點，並隨時待命協助處理任何問題。",
      "我們專注於員工，每一步都以他們的最佳利益為重，並展現出獨特的信任與支持，這也體現在員工對 Ideal Home Health 的忠誠上。",
      "我們服務於多元族裔的客戶群，雙語助理對我們非常重要，我們歡迎文化和種族的多樣性。",
    ],
  },
  qualify: {
    title: "我符合資格嗎？",
    patientSubtitle: "要獲得照護：",
    patientItems: [
      "您是否符合醫療補助 (Medicaid) 資格，或認為自己可能符合？",
      "您是否居住在紐約？",
      "您是否需要日常活動上的協助，例如烹飪、清潔和個人護理？",
    ],
    caregiverSubtitle: "要照顧他人：",
    caregiverItems: [
      "您是否年滿 18 歲？",
      "您是否被授權在美國工作？",
      "您是否有興趣每小時賺取超過 21.64 美元？",
    ],
    formTitle: "照護者工作申請",
  },
  locations: {
    label: "服務地區",
    title: "服務所有紐約市行政區與縣",
    description: "為了照護者和您的家人方便，我們在您家附近設有辦公室。Ideal Home Health 在紐約市五個行政區提供最優質的家庭助理、陪護、清潔、治療和護理服務，包括皇后區、布魯克林、曼哈頓、史泰登島和布朗克斯。",
    // Live source links "聯絡我們" here to enroll-now (not a contact
    // page) — kept as found, a real (if slightly odd) CTA choice in the source.
    button: { title: "聯絡我們", href: "/zh-hant/enroll-now" },
  },
  officeCards: [
    { title: "布魯克林", address: "2617 東16街, 2樓, 布魯克林，紐約 11235", phone: "(718) 517 – 2424" },
    { title: "布朗克斯", address: "391 東149街, 515室, 布朗克斯，紐約 10455", phone: "(718) 517 – 2424" },
  ],
  jobs: {
    sectionTitle: "職缺清單",
    items: [
      { title: "家庭護理助理 (HHA)", label: "全職 / 兼職", location: "布魯克林，紐約州", button: { title: "了解更多", href: "https://www.indeed.com/m/viewjob?jk=7a68356e36b7bd4a&from=native" } },
    ],
  },
};

// Become a Caregiver — built from a live fetch of
// https://idealhh.com/zh-hant/careers/how-it-works-caregivers/. One CDPAP
// mention removed per standing rule. The odd "Therapy in Brooklyn, New
// York"-style mismatched subheading is the same genuine shared-template
// quirk already found on ES/AR versions of this page — kept as found.
export const zhHantBecomeCaregiverPage = {
  hero: {
    title: "成為 Ideal Home Health 看護人員",
    description: "聯繫我們，與親切的協調員交談，了解如何在真正關心員工及患者的公司中獲得最高薪資。",
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
  },
  steps: [
    { number: "01.", title: "聯繫我們", description: "聯繫我們以開始註冊流程並確認您是否符合資格。" },
    { number: "02.", title: "完成申請", description: "協調員將聯繫您填寫我們簡單的申請表以收集重要資訊。在此階段將需要進行背景調查和藥物檢測。" },
    { number: "03.", title: "收到工作邀約", description: "恭喜！您現在是一名 Ideal 家庭護理助理。我們會為您匹配合適的患者。" },
    { number: "04.", title: "開始提供照護。", description: "開始照顧患者。" },
  ],
  stepsImage: "/images/ideal-home-health-caregiver-application-processing-nyc.jpg", // not confirmed via live fetch — EN fallback
  gettingStarted: {
    title: "我們讓成為認證家庭護理助理變得簡單。",
    subtitle: "紐約布魯克林的治療服務", // genuinely mismatched heading in source, matches the same quirk found on ES/AR
    description: "在 Ideal Home Health，我們重視員工，並提供高薪、培訓與支持，幫助您成功。",
    listTitle: "開始與 Ideal Home Health 合作",
    listDescription: "在聯繫我們並完成申請後，我們將致力於",
    items: [
      "為您安排合適的患者配對",
      "提供持續培訓，讓您保持必要技能的最新狀態",
      "提供協調員協助您獲取任何有助於提升照護品質的設備或服務",
      // CDPAP mention dropped per standing rule — source reads "...家庭護
      // 理助理、cdpap 和專業護理人員可獲得的最高薪資之一。"
      "支付家庭護理助理和專業護理人員可獲得的最高薪資之一。",
    ],
    image: "/images/caregiver-at-ideal-home-health-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
  prefooterCta: {
    title: "立即開始您的職涯。",
    description: "聯繫我們，開始成為 Ideal Home Health 看護人員的流程。",
    button: { title: "立即報名", href: "/zh-hant/enroll-now" },
    image: "/images/ideal-home-health-caregiver-nyc.jpg", // not confirmed via live fetch — EN fallback
  },
};
