// Content extracted from the WordPress export (idealhomehealth_WordPress_2026-07-07.xml)
// English content only. All CDPAP program references have been removed per request.

export const site = {
  name: "Ideal Home Health",
  phone: "(718) 517-2424",
  phoneHref: "tel:+17185172424",
  foundedYear: 2013,
  tagline: "Compassionate Home Care Services in New York City",
};

export const nav = [
  {
    label: "About Us",
    href: "/about-us",
    children: [{ label: "Testimonials & Reviews", href: "/about-us/testimonials-reviews" }],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Our Services", href: "/services" },
      { label: "Home Health Aides", href: "/services/home-health-aide" },
      { label: "Visiting Home Nurse", href: "/services/visiting-home-nurse" },
      { label: "Conditions", href: "/services/conditions" },
      { label: "How to Enroll", href: "/how-to-enroll" },
    ],
  },
  { label: "Benefits", href: "/home-care-benefits" },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Our Locations", href: "/locations" },
      { label: "Brooklyn", href: "/locations/brooklyn" },
      { label: "Bronx", href: "/locations/bronx" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Patient & Caregiver Resources", href: "/resources" },
      { label: "FAQ", href: "/resources/faq" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Open Positions", href: "/careers" },
      { label: "Become A Caregiver", href: "/careers/how-it-works-caregivers" },
      { label: "Apply as a Caregiver", href: "/careers/#qualifyenroll" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export const homePage = {
  reviewsSection: {
    title: "What Our Clients Say: Trusted Home Care in New York",
    // Every review below is verbatim from the live source, including
    // grammatical errors, punctuation quirks, and emojis — an earlier pass
    // had "cleaned up" grammar and paraphrased/shortened several of these,
    // which is not an accurate migration.
    reviews: [
      { name: "Sherice Carraway", date: "2022-10-26", rating: 5, content: "This is the best agency so far and I'm proud to have choose them and continue to pursue with them for a while" },
      { name: "Nadine Douse", date: "2023-04-24", rating: 5, content: "Staff that I have encountered is great. If helping people is your calling, this is the Ideal company to work for." },
      { name: "Denise Hammonds", date: "2024-01-22", rating: 5, content: "Ideal home health is the best 💯..I have never been with a agency that was so kind and pleasant..absolutely work so well all the ladies but there is two I must mention and that's Yulliana and none other than Ms.Paula she grab the horns of the bull and road it out.. and through it all she kept communicating as well as Yulliana to me about the status of everything..What I got from it was they assured me everything was going to be great 👍🏾...They are Magnificent at what they do and again I want to thank you from the bottom of my heart...Beautiful ladies 🤗" },
      { name: "Dachira Rivera Ramos", date: "2024-02-15", rating: 5, content: "(Translated by Google) Very attentive and helpful, good care and equipment.\n\n(Original)\n\nMuy atentos y servicial, un buen cuidado y equipo." },
      { name: "Youssef Elhalaby", date: "2024-04-26", rating: 5, content: "Great people, committed, very respectful, answer all questions in a very simple straight understandable English, follow up every single activity and helping finding solutions and options for any issue or difficulty you may face, thankful greatful and special thanks to Rosemary, Annabil and Emily." },
      { name: "Shelby Gonzalez", date: "2024-05-25", rating: 5, content: "My experience was great. I can be a procrastinator but they stayed on me and helped me along the way" },
      { name: "Racquel McDonald", date: "2024-08-10", rating: 5, content: "Ideal Home Health is the best agency have ever work with. There are very professional always answer when you call and help with whatever you need. Always get paid on time they are the best I'm happy working with them ❤️." },
      { name: "Lorraine Mullen", date: "2024-08-13", rating: 5, content: "Everyone at Ideal has been so patient , caring, helpful, kind, knowledgeable, informative and willing to assist in establishing my entry into the program. Emily, Paula and many staff employees have gone above and beyond to help make sure I was able to have a seamless experience. I am truly grateful" },
    ],
  },
  hero: {
    titlePrefix: "Ideal Home Health: ",
    highlight: "Compassionate Home Care Services",
    titleSuffix: " in New York City",
    description:
      "Experience compassionate, high-quality home health care services right in your own home with Ideal Home Health. As a leading accredited home health agency in New York City, we are dedicated to providing personalized in-home care solutions that empower you to live independently and comfortably. Whether you need assistance with daily living activities or specialized support, our dedicated team is here for you. Discover the Ideal difference today.",
    // Real button order per the live site: primary (white/accent) = Become a
    // Caregiver, secondary (solid accent) = Apply for Homecare.
    primaryButton: { title: "Become a Caregiver", href: "/careers/#qualifyenroll" },
    secondaryButton: { title: "Apply for Homecare", href: "/enroll-now" },
  },
  servicesTeaser: [
    {
      title: "Home Health Aides for Personalized Care",
      description:
        "Our Certified Home Health Aides offer compassionate personal care & daily living assistance. We empower independence in your NYC home.",
      button: { title: "Learn More", href: "/services/home-health-aide" },
      icon: "heart",
    },
    {
      title: "Expert Visiting Home Nurses for Skilled Care",
      description:
        "Our licensed Visiting Home Nurses provide skilled medical care at your New York City home, customizing plans for your needs.",
      button: { title: "Learn More", href: "/services/visiting-home-nurse" },
      icon: "heart-pulse",
    },
  ],
  whoBenefits: {
    label: "Ideal Home Health",
    title: "Who Benefits from Ideal Home Health Care in NYC?",
    items: [
      "Seniors seeking independent living assistance",
      "Individuals recovering from surgery or illness",
      "Patients with chronic conditions (e.g., stroke, diabetes care at home)",
      "Families needing respite care",
    ],
    button: { title: "Enroll Now", href: "/enroll-now" },
    image: "/images/home-health-care-in-nyc.jpg",
  },
  customPlans: {
    label: "Ideal Home Health",
    title: "Personalized Home Care in New York: Your Unique Needs, Our Custom Plans",
    subtitle: "Flexible Home Attendant Services & Specialized Care",
    description:
      "Our home care services in all five boroughs of New York City specialize in a diverse range of conditions. We offer custom care models and flexible home attendant services tailored to your family's unique lifestyle and needs across NYC.",
    button: { title: "View Our Care Specialties", href: "/services/conditions" },
    image: "/images/personalized-home-health-care-new-york.jpg",
  },
  locations: {
    label: "Ideal Home Health",
    title: "Ideal Home Health: Proudly Serving New York City's 5 Boroughs",
    description:
      "For caregiver and family convenience, our NYC offices are close to home. Our trained home care specialists at each location provide professional, efficient service throughout New York City, including Queens, Brooklyn, Manhattan, Staten Island, and the Bronx.",
    button: { title: "Get in Touch", href: "/contact-us" },
  },
  careers: {
    label: "IDEAL HOME HEALTH",
    title: "Join Our Compassionate Home Health Care Team in New York",
    description:
      "Are you a dedicated and compassionate caregiver seeking a rewarding career in home health care in New York City? Ideal Home Health is actively seeking talented individuals to join our growing team. Discover a supportive environment where your passion for care truly makes a difference.",
    button: { title: "View Career Opportunities", href: "/careers" },
    image: "/images/join-ideal-home-health-care-nyc.jpg",
  },
  prefooterCta: {
    title: "Ready to Find Your Ideal Home Health Care Solution in NYC?",
    description:
      "Contact us today for a free consultation and discuss a custom home care plan perfectly suited to your family's needs in New York City.",
    button: { title: "Enroll Today", href: "/enroll-now" },
    // attachment: ideal-home-health-care-in-new-york.jpg, confirmed via live page.
    image: "/images/ideal-home-health-care-in-new-york.jpg",
  },
  heroImage: "/images/compassionate-home-health-care-services-nyc.jpg",
  locationsImage: "/images/Daco_924160.png",
};

export const servicesPage = {
  hero: {
    // Was wrong — real live title is below.
    title: "Comprehensive Home Health Care Services in New York City – Tailored to Your Needs",
    // Was missing entirely.
    description: "Ideal Home Health is a leading in-home health care agency in New York, providing high-quality, personalized home care services. Our trained nurses and certified home health aides empower individuals across New York City to live independently and comfortably at home.",
    image: "/images/home-health-care-services-new-york-city.jpg",
    primaryButton: { title: "Contact Us", href: "/contact-us" },
    secondaryButton: { title: "Enroll Today", href: "/enroll-now" },
  },
  // CDPAP card removed per standing rule (source has one between HHA and
  // Visiting Nurse, linking externally to idealcdpap.com).
  services: [
    {
      // Was "Home Health Aides (HHA): Essential Daily Support" — real title
      // uses an em dash, not parentheses.
      title: "Home Health Aides – HHA: Essential Daily Support",
      description:
        "Our Department of Health certified Home Health Aides (HHAs) offer compassionate assistance with Activities of Daily Living (ADLs). From personal care to medication reminders, our in-home aides in NYC help maintain independence. All HHAs receive continuous training, ensuring top safety standards.",
      button: { title: "Learn More", href: "/services/home-health-aide" },
      image: "/images/home-health-aides-new-york.jpg",
    },
    {
      title: "Visiting Home Nurse – Expert Skilled Nursing Care at Home",
      // Was paraphrased — real ending is "...for your optimal health and
      // recovery." not "...tailored to your recovery and health goals."
      description:
        "Receive skilled nursing care in your New York City home with our licensed Visiting Home Nurses (RNs/LPNs). We offer medication management, wound care, post-operative support, chronic disease management, and more. Our nurses create custom plans of care for your optimal health and recovery.",
      button: { title: "Learn More", href: "/services/visiting-home-nurse" },
      image: "/images/visiting-home-nurse-new-york.jpg",
    },
  ],
  whyChoose: {
    title: "Why Choose Ideal Home Health for Your NYC Home Care Needs?",
    items: [
      "Accredited & Trusted",
      "Experienced & Compassionate Team",
      "Personalized & Flexible Plans",
      "Local NYC Expertise",
      "Seamless Enrollment",
    ],
    button: { title: "Enroll Now", href: "/enroll-now" },
    image: "/images/choose-ideal-home-health-care-nyc.jpg",
  },
  // Was missing entirely.
  prefooterCta: {
    title: "Ready to Find Your Ideal Home Health Care Solution in New York City?",
    description: "Discover compassionate support for your family. Contact us today for a free consultation to discuss a custom home care plan tailored to your unique needs in New York City. Let our expertise and empathy guide you.",
    button: { title: "Enroll Now", href: "/enroll-now" },
    image: "/images/ideal-home-health-care-new-york-city.jpg",
  },
};

export const homeHealthAidePage = {
  // Was missing entirely — this is the real hero. What used to be called
  // "hero" below is actually a second section further down the page (same
  // conflation bug found and fixed on the Russian version of this page).
  hero: {
    label: "SERVICES",
    title: "Certified Home Health Aides (HHAs) in New York City",
    subtitle: "Providing Compassionate In-Home Care in All NYC Boroughs",
    description: "Our Department of Health certified Home Health Aides (HHAs) are compassionate professionals trained to assist with your daily needs. We provide in-home care throughout New York City's boroughs, ensuring every client receives personalized attention and the highest standards of safety and care. All our aides receive continuous training in life-saving and safety services.",
    image: "/images/certified-home-health-aides-nyc.jpg",
    primaryButton: { title: "Enroll Now", href: "/enroll-now" },
    secondaryButton: { title: "Contact Us", href: "/contact-us" },
  },
  gettingCare: {
    title: "Receive Compassionate and Skilled Care at Home",
    highlight: "at home",
    description:
      "With Ideal Home Health, you can rest easy knowing your loved one is receiving the support they need to maintain their independence in the comfort of their home. Our certified Home Health Aides are trained to assist with a variety of needs.",
    image: "/images/certified-home-health-aides-new-york.jpg",
  },
  howTheyHelp: {
    title: "How Our Home Health Aides Help",
    items: [
      "Assist with all daily activities, including preparation of meals",
      "Assistance with household chores and personal care and/or hygiene maintenance",
      "Monitoring medication schedules",
      "Observing for symptoms as indicated by your physician or custom plan of care",
      "Promoting independence and physical activity within the home",
      "Providing compassionate care and promoting well being through kindness, teamwork and setting goals to continue living your best life!",
    ],
  },
  // Was missing entirely.
  prefooterCta: {
    title: "Ready to Get the Help You Need?",
    description: "Ready to discuss your family's unique care requirements? Contact us today to learn more about a custom care plan that's right for you.",
    button: { title: "Enroll Now", href: "/enroll-now" },
    image: "/images/home-health-aide-for-families-nyc.jpg",
  },
};

export const locationCards = [
  {
    name: "Brooklyn",
    subtitle: "Ideal Home Health – Brooklyn Office",
    address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US",
    phone: "(718) 517 – 2424",
    button: { title: "Brooklyn Services", href: "/locations/brooklyn" },
  },
  {
    name: "Bronx",
    subtitle: "Ideal Home Health – Bronx Office",
    address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US",
    phone: "(718) 517 – 2424",
    button: { title: "Bronx Services", href: "/locations/bronx" },
  },
];

export const visitingHomeNursePage = {
  hero: {
    label: "SERVICES",
    title: "Visiting Home Nurse",
    subtitle: "Skilled Nursing Care in New York City",
    description:
      "Our licensed registered nurses deliver expert skilled nursing care directly in the comfort of your home. We work closely with you and your physician to create a custom plan of care tailored to your unique medical needs, helping you recover and maintain your health.",
    image: "/images/registered-visiting-home-nurse-nyc.jpg",
    buttons: [
      { title: "Enroll Now", href: "/enroll-now" },
      { title: "Contact Us", href: "/contact-us" },
    ],
  },
  bullets: {
    title: "Expert Care from Our Licensed Visiting Home Nurses",
    highlight: "Licensed Visiting Home Nurses",
    listTitle: "Ideal Home Health Skilled Nurses",
    listDescription:
      "Our team of registered nurses is dedicated to providing specialized, compassionate care that promotes recovery and well-being. We assist with a wide range of medical needs, allowing you to focus on getting better.",
    items: [
      "Work with you to develop a plan of care based around your physician's recommendations, your personal preferences and lifestyle",
      "Follow medical care instructions as directed by your physician",
      "Monitoring of vitals and medical equipment",
      "Manage medication schedule and monitor symptoms",
      "Post-operative and wound care",
    ],
    image: "/images/visiting-home-nurse-care-nyc.jpg",
  },
  prefooterCta: {
    title: "Ready to Get the Skilled Nursing Care You Need?",
    description: "Contact us today to discuss your family's unique medical requirements and find out how our visiting nurses can help.",
    button: { title: "Enroll Now", href: "/enroll-now" },
    image: "/images/visiting-home-nurse-care.jpg",
  },
};

export const careersPage = {
  hero: {
    title: "Start a Rewarding Career in Home Health Care",
    highlight: "Home Health Care",
    subtitle: "Join Our Compassionate Team of HHAs, RNs, & PCAs in New York City",
    description:
      "If you are a skilled, compassionate, and dedicated HHA, RN, LPN, or PCA, you are an essential part of our team. Ideal Home Health is the optimal workplace to build a rewarding home health career in New York City with competitive pay and a supportive work environment.",
    image: "/images/home-health-caregiver-nyc.jpg",
    button: { title: "Become a Caregiver", href: "#qualifyenroll" },
  },
  benefits: {
    title: "Why Choose a Career with Ideal Home Health?",
    highlight: "Career",
    description: "Contact us today to speak with our dedicated representatives to start your registration process.",
    listTitle: "Our Unmatched Caregiver Benefits",
    // Was missing — short lead-in line before the bullet list.
    listIntro: "At Ideal Home Health,",
    image: "/images/home-health-caregiver-career.jpg",
    items: [
      "We understand work life balance is important, and offer flexible shift options to accommodate your schedule.",
      "We make payment easy and setup direct deposit to your bank account.",
      "We offer a generous benefits package",
      "We have the most accommodating work environment with coordinators who place you at the most convenient location that works for you and are always on call to assist with any issues at hand.",
      // Was truncated — real sentence continues below.
      "We are singularly dedicated to our staff, always having their best interest in mind every step of the way and display a unique measure of confidence and support which is reflected in our staff's loyalty to Ideal Home Health.",
      "We serve an ethnically diverse clientele, bi-lingual aides are important to us, and we welcome cultural and ethnic diversity.",
    ],
  },
  // Was missing entirely.
  areasServed: {
    label: "areas served",
    title: "Serving all NYC boroughs and counties",
    description: "For the convenience of our caregivers and clients, we have offices close to home. Ideal Home Health provides the best quality care of home health aide, companionship, housekeeper, therapy, & nursing service in the five boroughs of New York City: Queens, Brooklyn, Manhattan, Staten Island, and the Bronx.",
    button: { title: "Apply as a Caregiver", href: "/careers/#qualifyenroll" },
    image: "/images/Daco_924160.png",
  },
  officeCards: [
    { title: "Brooklyn", address: "2617 East 16th Street, Floor 2, Brooklyn, NY 11235", phone: "(718) 517 – 2424" },
    { title: "Bronx", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455", phone: "(718) 517 – 2424" },
  ],
  // Real content from the original site's #qualifyenroll section on this
  // page: a "Do I qualify?" checklist next to a "Caregiver Job Application"
  // form (WPForms id 3064 originally).
  qualify: {
    title: "Do I qualify?",
    subtitle: "To take care of someone:",
    items: [
      "Are you 18 or over?",
      "Are you authorized to work in the US?",
      "Are you interested in getting paid over $21.64/hr?",
    ],
    formTitle: "Caregiver Job Application",
  },
  jobs: [
    { title: "Home Health Aide (HHA)", label: "FULL-TIME / PART-TIME", location: "BROOKLYN, NY", button: { title: "View Job", href: "https://www.indeed.com/m/viewjob?jk=7a68356e36b7bd4a&from=native" } },
  ],
};

export const becomeCaregiverPage = {
  hero: {
    title: "Join Our Team: Become an Ideal Home Health Caregiver",
    highlight: "Ideal Home Health",
    subtitle: "A Rewarding Career Awaits You at Ideal Home Health",
    description:
      "Are you ready to start a rewarding career helping others in your community? At Ideal Home Health, we value our staff and provide the support you need to succeed. Our team of professionals earns some of the highest wages in the industry for a company that truly cares about its employees and the patients they care for.",
    button: { title: "Apply Now", href: "/careers/#qualifyenroll" },
  },
  steps: [
    { number: "01.", title: "Contact Us", description: "Contact us to speak with a friendly coordinator who will guide you through our simple registration process and confirm you qualify." },
    { number: "02.", title: "Complete an application", description: "A coordinator will be in touch to help you fill out our easy application. A background check and drug screening will be required during this phase." },
    { number: "03.", title: "Receive your employment offer", description: "Congratulations! After a successful interview, you'll receive your employment offer. We'll then work to match you with the ideal patient based on your skills and preferences." },
    { number: "04.", title: "Start providing care.", description: "After completing a small amount of final paperwork, your rewarding career as an Ideal Home Health caregiver can begin immediately!" },
  ],
  stepsImage: "/images/ideal-home-health-caregiver-application-processing-nyc.jpg",
  gettingStarted: {
    title: "We Make Becoming a Certified Home Health Aide Easy",
    highlight: "Certified Home Health Aide",
    description: "At Ideal Home Health, we value our staff by offering high wages, ongoing training, and the support you need to succeed.",
    listTitle: "Getting Started with Ideal Home Health",
    listDescription: "Once you join our team, we will work with you to:",
    // Was missing entirely — only the heading rendered, no bullet list.
    items: [
      "Place you with a patient who will be a successful match.",
      "Provide ongoing training to keep you up-to-date with required skills.",
      "Provide coordinators who can assist you in receiving any equipment or services that will help you provide a higher level of care.",
      "Pay some of the highest wages available for home health aides and skilled nursing caregivers.",
      "Offer flexible scheduling and a supportive work environment.",
    ],
    image: "/images/caregiver-at-ideal-home-health-nyc.jpg",
  },
  prefooterCta: {
    title: "Start Your Home Care Career Today",
    description: "Contact us to start the process of becoming an Ideal Home Health caregiver.",
    button: { title: "Apply Now", href: "/careers/#qualifyenroll" },
    image: "/images/ideal-home-health-caregiver-nyc.jpg",
  },
};

export const conditionsPage = {
  hero: {
    label: "IDEAL HOME HEALTH",
    title: "Specialized Home Care Services for Your Unique Needs",
    highlight: "Your Unique Needs",
    subtitle: "Compassionate, Condition-Specific Care in New York City",
    description: "Live life to the fullest and manage your condition with services that support your routine, lifestyle and individual care requirements.",
    image: "/images/in-home-health-care-nyc.jpg",
    buttons: [
      { title: "Contact Us", href: "/contact-us" },
      { title: "Enroll Today", href: "/enroll-now" },
    ],
  },
  sectionTitle: "Explore Our Specialized Home Care Services",
  cards: [
    { title: "Diabetes", description: "Our skilled home health aides can provide proper diabetes management to help you live a happier, healthier life.", slug: "diabetes" },
    { title: "Stroke", description: "Life after a stroke can get better with the assistance of an aide that understands your recovery is the number one priority.", slug: "stroke" },
    { title: "Alzheimer's / Dementia", description: "We ensure the safety of your family member with memory care needs and help them to find comfort in their daily routine.", slug: "alzheimers-dementia" },
    { title: "Epilepsy", description: "Epilepsy events can happen quickly, we can be there to ensure your safety when you need it most.", slug: "epilepsy" },
    { title: "Fall Prevention", description: "Preventing falls can save your life, reducing the risk of potential complications and keeping you on track to maintain or improve your mobility.", slug: "fall-prevention" },
    { title: "Help with Daily Tasks", description: "Our home health aides can be a helping hand to ensure you can keep up with your daily routine and keep doing the things you love.", slug: "help-with-daily-tasks" },
    { title: "Parkinson's", description: "Our highly qualified home health aides specialize in Parkinson's care, assisting you to have the best quality of life possible.", slug: "parkinsons" },
    { title: "Arthritis", description: "When mobility is painful, we can help you keep doing what you love with custom care based on your needs.", slug: "arthritis" },
    { title: "Lifting & Transferring", description: "We have trained specialists to move patients safely and securely to avoid unnecessary injury and stress.", slug: "lifting-and-transferring" },
    { title: "Live In 24 Hour Care", description: "When you need assistance around the clock, our experienced home health aides can be there for you whenever you need us most.", slug: "live-in-24-hour-care" },
    { title: "Post Hospital Care", description: "After a hospital stay, our highly trained home health aides can help you follow your recovery schedule and get better as quickly as possible.", slug: "post-hospital-care" },
    { title: "Wheel chair / Bed bound support", description: "If your family member is wheel chair or bed bound, trust our highly trained specialist to help them move safely through their space and complete daily tasks.", slug: "wheel-chair-bed-bound-support" },
    { title: "Individualized Care", description: "If you have a unique condition or set of needs, our certified nurses can work with you and your family to come up with an individualized treatment plan.", slug: "individualized-care" },
  ],
  // Was missing entirely — confirmed present on the live page.
  whyChoose: {
    title: "Why Choose Ideal Home Health for Condition-Specific Care?",
    description: "When you or a loved one are managing a specific condition, you need more than just standard care—you need a team that understands your unique challenges. Ideal Home Health offers specialized support to help you live a healthier, more independent life.",
    image: "/images/specialized-home-care-new-york-city.jpg",
    subheading: "Here's how we ensure you get the specialized support you need:",
    items: [
      { title: "Expert, Specialized Staff", description: "Certified Home Health Aides (HHAs) and licensed Visiting Home Nurses." },
      { title: "Customized Care Plans", description: "Tailored to your specific diagnosis, routine, and lifestyle." },
      { title: "Collaborative Approach", description: "In coordination with your Physician and other Healthcare Providers." },
    ],
  },
  // Was missing entirely — confirmed present on the live page.
  howItWorks: {
    title: "Your Path to Better Health: How It Works",
    description: "Getting the personalized care you need is a simple and straightforward process. We're here to guide you every step of the way, so you can focus on what matters most—your health and well-being.",
    image: "/images/personalized-home-care-nyc.jpg",
    subheading: "Here is your path to a custom care plan:",
    steps: [
      { title: "Contact Us", description: "Discuss your needs and medical condition." },
      { title: "Assessment", description: "We work with you and your physician to create a custom care plan." },
      { title: "Receive Care", description: "We match you with a skilled professional to begin services." },
    ],
  },
  prefooterCta: {
    title: "Ready to Find the Right Care for Your Condition?",
    description: "Contact us today to discuss your family's unique needs.",
    button: { title: "Contact Us", href: "/contact-us" },
    // attachment: unique-home-care-nyc.jpg, confirmed via live page.
    image: "/images/unique-home-care-nyc.jpg",
  },
};

export const enrollNowPage = {
  hero: {
    title: "Enroll Now: Qualify for Care or Apply to Join Our Team",
  },
  patientSection: {
    title: "Do You Qualify to Receive Home Care?",
    description: "Ideal Home Health is here to help you live independently. Our compassionate services are designed to support your unique needs. To help determine your needs, please consider answering the following:",
    questions: [
      "Are you eligible for or think you may be eligible for Medicaid?",
      "Do you live in New York?",
      "Do you want assistance with daily activities, such as cooking, cleaning, and health and personal care?",
    ],
    link: { title: "Know more about enrolling as a patient.", href: "/how-to-enroll" },
  },
  caregiverSection: {
    title: "Ready to Become a Caregiver?",
    description: "Are you a compassionate and dedicated individual interested in a rewarding career? Ideal Home Health is actively recruiting caregivers. You may be a great fit if you meet these requirements:",
    questions: [
      "Are you 18 or over?",
      "Are you authorized to work in the U.S.?",
      "Are you interested in competitive pay?",
    ],
  },
  formSection: {
    title: "Patient Enrollment",
    note: "This is a Patient Application ONLY",
    caregiverButton: { title: "Become a Caregiver", href: "/careers" },
  },
  prefooterCta: {
    title: "Have Questions About Enrollment or Careers?",
    description: "Our compassionate representatives are here to help. Contact us today to get personalized answers to any questions you have about home care eligibility or caregiver career opportunities.",
    button: { title: "Contact Us", href: "/contact-us" },
    // Was missing entirely.
    image: "/images/compassionate-representative-ideal-home-health.jpg",
  },
};

export const resourcesIndexPage = {
  hero: {
    title: "Ideal Home Health Patient & Caregiver Resource Center",
    subtitle: "All the Information You Need to Succeed with Home Care",
    description: "Whether you're an existing patient, a home health aide, or just exploring your options, our Resource Center is designed to provide you with all the information you need. Below, you'll find helpful guides, forms, and FAQs for a wide range of topics.",
    button: { title: "Contact Us", href: "/contact-us" },
  },
  patientResources: {
    sectionTitle: "Patient Resources",
    cards: [
      // CDPAP Patients card removed per standing rule.
      {
        title: "Traditional Care Patients",
        description: "If you are a Traditional Care patient or are considering this option, we've included helpful links and answers to frequently asked questions.",
        button: { title: "View Traditional Care Patient Resources", href: "/resources/traditional-care-patient-resources" },
      },
      {
        title: "COVID-19",
        description: "Department of Health (DOH) has recently provided us with a COVID-19 Fact Sheet.",
        button: { title: "View COVID-19 Fact Sheet", href: "https://idealhh.com/wp-content/uploads/2021/01/covid_english.pdf" },
      },
    ],
    note: { prefix: "Not sure what type of patient care you need? Please feel free to ", label: "Contact Us", href: "/contact-us", suffix: " for assistance." },
  },
  caregiverResources: {
    sectionTitle: "Caregiver Resources",
    cards: [
      // CDPAP Caregivers card removed per standing rule.
      {
        title: "Home Health Aides",
        description: "If you are planning to become or are currently a Home Health Aide, we've included common forms, frequently asked questions, and helpful links.",
        button: { title: "View Home Health Aide Resources", href: "/resources/home-health-aide-resources" },
      },
    ],
    note: { prefix: "Not sure what type of caregiver you are? Please feel free to ", label: "Contact Us", href: "/contact-us", suffix: " for assistance." },
  },
  prefooterCta: {
    title: "Ready to Learn More and Get the Help You Need?",
    description: "If you have any questions or are ready to get started, please contact our team.",
    button: { title: "Contact Us", href: "/contact-us" },
    image: "/images/conditions/contact-home-health-care-nyc.jpg",
  },
};

// Q&A content pulled from the WordPress "faq" custom post type (referenced by
// ID from the FAQ page's ACF field). Two CDPAP-specific questions ("What are
// the requirements to apply as a CDPAP caregiver?" and "Where are CDPAP
// services available?") were excluded per request. One answer ("Who can I
// choose to be my caregiver?") originally described both a CDPAP option and a
// traditional-aide option — the CDPAP branch was removed, keeping only the
// traditional-care answer.
export const faqPage = {
  hero: {
    label: "Ideal Home Health",
    title: "Frequently Asked Questions",
    subtitle: "Answers to Your Common Questions About Home Care and Our Services",
    description: "Getting started with home health care can lead to many questions. Here, you'll find clear and concise answers to common questions about our services, the enrollment process, and how we can support you or your loved one.",
    button: { title: "Contact Us", href: "/contact-us" },
  },
  patientQuestions: [
    {
      question: "Am I eligible to receive care?",
      answer: "If you live in New York, have Medicaid and need help with daily tasks, you are likely eligible for care. Contact us today to speak to an Ideal Home Health representative and learn more about your eligibility.",
    },
    {
      question: "Where are Home Health Aide services available?",
      answer: "Home Health Aide services are available to anyone living in the 5 boroughs of New York City, including Manhattan, Brooklyn, Queens, Staten Island and the Bronx.",
    },
    {
      question: "How much does this program cost? Is it free?",
      answer: "Medicaid pays for this program, and the services we provide are included in your coverage. This program is free for all members of Medicaid.",
    },
    {
      question: "Can I switch from another home care agency?",
      answer: "Yes! Ideal Home Health provides top rated service in New York City. Contact us and we will assist you in transferring your care to our experienced team of home health aides and administrative representatives.",
    },
    {
      question: "Who can I choose to be my caregiver?",
      answer: "We will recommend a skilled home health aide that is trained in your specific care requirements.",
    },
  ],
  caregiverQuestions: [
    {
      question: "What are the requirements to apply as a Home Health Aide?",
      answer: "To apply as a home health aide, as part of our complete application process we request a Home Health Aide certificate from a NYC DOH training facility, proof of eligibility to work legally in the US (I-9 Form), your medical history, completion of a background check, and completion of a drug screening.",
    },
    // CDPAP caregiver requirements question removed per standing rule.
  ],
  prefooterCta: {
    title: "Ready to Get Started?",
    description: "If you have a question that isn't answered here or are ready to begin the enrollment process, please contact our team.",
    button: { title: "Contact Us", href: "/contact-us" },
    image: "/images/conditions/enroll-in-home-health-care-nyc.jpg",
  },
};

export const homeHealthAideResourcesPage = {
  hero: { title: "Home Health Aide Resources" },
  forms: [
    { title: "Timesheet", href: "https://idealhh.com/wp-content/uploads/2021/01/4443_001.pdf" },
    { title: "Pre-Employment Requirements [English]", href: "https://idealhh.com/wp-content/uploads/2021/01/4116_001.pdf" },
    { title: "Pre-Employment Requirements [Russian]", href: "https://idealhh.com/wp-content/uploads/2021/01/4117_001.pdf" },
    { title: "Pre-Employment Requirements [Chinese]", href: "https://idealhh.com/wp-content/uploads/2021/01/requirements-chinese.docx" },
    { title: "Pre-Employment Requirements [Spanish]", href: "https://idealhh.com/wp-content/uploads/2021/02/HHA-REQUIREMENTS-1.docx" },
    { title: "TB Form Request", href: "https://idealhh.com/tb-form-request/" },
    { title: "Labor Law Compliance Center [English]", href: "https://idealhh.com/wp-content/uploads/2024/01/New-York-City-English.pdf" },
    { title: "Labor Law Compliance Center [Bilingual]", href: "https://idealhh.com/wp-content/uploads/2024/01/New-York-Bilingual.pdf" },
    { title: "Federal eFile [English]", href: "https://idealhh.com/wp-content/uploads/2024/01/Federal-eFile-English.pdf" },
  ],
};

export const traditionalCareResourcesPage = {
  hero: { title: "Traditional Care Patient Resources" },
  faqIntro: "Here are some common questions from Traditional Care Patients",
  questions: [
    { question: "Can I switch from another home care agency?", answer: "Yes! Ideal Home Health provides top rated service in New York City. Contact us and we will assist you in transferring your care to our experienced team of home health aides and administrative representatives." },
    { question: "How much does this program cost? Is it free?", answer: "Medicaid pays for this program, and the services we provide are included in your coverage. This program is free for all members of Medicaid." },
    { question: "Where are Home Health Aide services available?", answer: "Home Health Aide services are available to anyone living in the 5 boroughs of New York City, including Manhattan, Brooklyn, Queens, Staten Island and the Bronx." },
  ],
  policyLinks: {
    title: "MRT II Policies & Guidance",
    description: "The Medicaid Redesign Team II (MRT II) is a New York State initiative that sets important policies for home care services. Staying informed about these policies and guidelines can help you better understand your care plan and eligibility. We have included links to the official guidance for your reference.",
    items: [
      { description: "MLTC Policy 20.02: Moratorium on Managed Long Term Care Partial Capitation Plans", href: "https://health.ny.gov/health_care/medicaid/redesign/mrt90/mltc_policy/20-02.htm" },
      { description: "MLTC Policy 20.03: Non-emergency Transportation in the Consumer Directed Personal Assistance Program", href: "https://health.ny.gov/health_care/medicaid/redesign/mrt90/mltc_policy/20-03.htm" },
      { description: "LTSS Default Enrollment Notice", href: "https://health.ny.gov/health_care/medicaid/redesign/mrt2/policy/ltss_default_notice.htm" },
      { description: "Non-LTSS Default Enrollment Notice", href: "https://health.ny.gov/health_care/medicaid/redesign/mrt2/policy/non-ltss_default_notice.htm" },
      { description: "Sickle Cell Fact Sheet (English)", href: "https://health.ny.gov/health_care/medicaid/fact_sheets/docs/sicklecell/english.pdf" },
      { description: "Smoking and How You Can Quit (English)", href: "https://health.ny.gov/health_care/medicaid/fact_sheets/docs/smoking/english.pdf" },
      { description: "HIV, PrEP, and You (English)", href: "https://health.ny.gov/health_care/medicaid/fact_sheets/docs/hiv/english.pdf" },
      { description: "Asthma Control and You (English)", href: "https://health.ny.gov/health_care/medicaid/fact_sheets/docs/asthma/english.pdf" },
      { description: "Diabetes, Prevention, and You (English)", href: "https://health.ny.gov/health_care/medicaid/fact_sheets/docs/diabetes/english.pdf" },
      { description: "High Blood Pressure, Prevention, and You (English)", href: "https://health.ny.gov/health_care/medicaid/fact_sheets/docs/hbp/english.pdf" },
    ],
  },
  infoLinks: {
    title: "Informational Links",
    description: "Here are some helpful links from recommended resources on common conditions.",
    items: [
      { description: "Diabetes Care – CDC", href: "https://www.cdc.gov/diabetes/index.html" },
      { description: "Influenza – CDC", href: "https://www.cdc.gov/flu/index.htm" },
      { description: "Healthy Eating for a Healthy Weight – CDC", href: "https://www.cdc.gov/healthyweight/healthy_eating/index.html" },
      { description: "Smoking & Tobacco Use – CDC", href: "https://www.cdc.gov/tobacco/" },
    ],
  },
};

export const testimonialsPage = {
  hero: {
    title: "Testimonials & Reviews",
    subtitle: "Hear What Our Patients, Families, and Caregivers Say",
    description: "The positive feedback from our patients, their families, and our dedicated caregivers is a testament to the compassionate, high-quality care we provide. Read their stories to learn more about the Ideal Home Health difference.",
    // Was missing entirely.
    button: { title: "Contact Us", href: "/contact-us" },
  },
  // Was hardcoded "Testimonials" — real section heading/label below.
  testimonialsLabel: "what others are saying",
  testimonialsTitle: "Trusted Companionship in New York City",
  testimonials: [
    { author: "Joseph A.", role: "Family Member", rating: 5, content: "After I moved out of New York, caring for my mother became very stressful for my sister and I. Having an aide helps us know she's safe when we can't be there. We have had an incredible experience working with Ideal Home Health, they are professional and made the process easy.", image: "/images/iStock-1089410668.jpg" },
    { author: "Liz P.", role: "Patient", rating: 5, content: "Thank you. I'm so happy to have the help. My aide helps with my medicine, and helps me do my hair in the morning. I'm happy when I can see my grandchildren and she keeps things tidy since I can't do it. Sarah is very nice, I really, really appreciate the help.", image: "/images/iStock-1138669982.jpg" },
    { author: "Tayshia B.", role: "Caregiver", rating: 5, content: "I've been employed with Ideal Home Health for the past two years. I appreciate the time and efforts of their office coordinators who in my opinion go above and beyond to ensure I'm on top of keeping my documentation and training up to date. The pay is also some of the highest I've received, and I'm thankful to work here.", image: "/images/pexels-tarzine-jackson.jpg" },
  ],
  reviews: [
    { rating: 5, name: "Jessica P.", location: "Brooklyn, NY", review: "I was able to register my father in law for an aide very quickly, we were all setup within about a week. Ideal HH staff were great to work with, and the office is 15 minutes from my apartment which was convenient. Overall great service, I highly recommend them if you need a home aide." },
    { rating: 4, name: "Irsal M.", location: "Bronx, NY", review: "The pay is very good and they accommodate my time off for religious holidays. I had some challenges with my paperwork to register but overall it has been a good experience and I plan to continue working for Ideal Home Health." },
    { rating: 5, name: "Jordan H.", location: "Queens, NY", review: "We needed a caregiver for a special case, my father has dementia in addition to his diabetes and lack of mobility. Ideal Home Health took the time to discuss all the details of his care requirements, and overall we're extremely happy with the level of care he's receiving. While it's difficult to tell, I believe my father is happier now and I'm relieved to know he's safe everyday." },
    { rating: 5, name: "John K.", location: "Bronx, NY", review: "Great company. Makes the whole process simple, we were registered and had care quickly, the whole thing was very easy." },
  ],
  prefooterCta: {
    title: "Ready to learn more and get the help you need?",
    description: "Contact us today to discuss your family's unique needs.",
    button: { title: "Contact Us", href: "/contact-us" },
    // attachment: contact-ideal-home-health-care-nyc.jpg, confirmed via live page.
    image: "/images/contact-ideal-home-health-care-nyc.jpg",
  },
};

// Two CDPAP mentions removed per request: step 3 originally offered "...or
// assist you with registering an eligible family member or friend as a CDPAP
// caregiver" (dropped, kept the aide-matching part); the bullets list
// originally read "in-home aides, skilled nurses, and CDPAP caregivers"
// (dropped the CDPAP clause).
export const howToEnrollPage = {
  hero: {
    title: "How to Enroll: Getting Started with Ideal Home Health",
    highlight: "Ideal Home Health",
    subtitle: "A Simple Process to Get the Compassionate Care You Deserve",
    description: "Getting started with home health care can seem complicated, but we've made the process simple and straightforward. Our team is here to guide you every step of the way, from understanding your options to getting your care started as quickly as possible.",
    // Was missing entirely.
    image: "/images/how-to-enroll-ideal-home-health-nyc.jpg",
    button: { title: "Enroll Now", href: "/enroll-now" },
  },
  steps: [
    { number: "01.", title: "Contact Us", description: "Contact us to speak with an Ideal Home Health customer specialist about your needs, and we'll answer your questions and help you take the first step." },
    { number: "02.", title: "We Help You Coordinate the Details", description: "We guide you through the necessary paperwork, including checking Medicaid eligibility, scheduling state assessments, and coordinating with doctors to streamline the process." },
    { number: "03.", title: "Find Your Ideal Aide", description: "We'll match you with a certified aide who is the ideal fit for your unique condition and needs." },
    { number: "04.", title: "Receive Care", description: "Your personalized care can begin as soon as all the necessary paperwork is complete. It's a quick and easy process designed to get you the help you need without delay." },
  ],
  bullets: {
    title: "We Make Receiving Care Easy",
    highlight: "Receiving Care Easy",
    subtitle: "Home Health Care in New York City",
    description: "We have several options to assist you based on your level of need, lifestyle and family preferences.",
    // Was missing entirely.
    image: "/images/compassionate-caregivers-nyc.jpg",
    listTitle: "Getting Started with Ideal Home Health",
    listDescription: "After coordinating the details with your insurance and providers, we work with your family to ensure you'll receive your desired level of care.",
    items: [
      "We staff highly qualified in-home aides and skilled nurses.",
      "We work with you to create a custom program based on your condition.",
      "We have aides who speak your language and understand your cultural needs.",
      "We staff compassionate coordinators to ensure all of your questions are answered.",
    ],
  },
  prefooterCta: {
    title: "Ready to Learn More and Get the Help You Need?",
    description: "Contact us to discuss a custom care plan for your unique needs.",
    button: { title: "Contact Us", href: "/contact-us" },
    // Was missing entirely.
    image: "/images/contact-ideal-home-health-care-new-york-city.jpg",
  },
};

export const privacyPolicyPage = {
  hero: { label: "Ideal Home Health", title: "Privacy Policy" },
  intro: "As Required by the Privacy Regulations Promulgated Pursuant to the Health Insurance Portability and Accountability Act of 1996 (HIPAA) THIS NOTICE DESCRIBES HOW HEALTH INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED, AND HOW YOU CAN GET ACCESS TO YOUR IDENTIFIABLE HEALTH INFORMATION. PLEASE REVIEW THIS NOTICE CAREFULLY.",
  effectiveDate: "This Notice is effective as of September 23, 2014.",
  contact: {
    title: "HIPAA Privacy Officer",
    lines: ["Ideal Home Health, Inc", "2617 East 16th Street, 2nd Floor", "Brooklyn, NY 11235", "(718) 517-2424"],
  },
  // Full legal text lives in lib/privacy-policy-text.ts (privacyPolicyParagraphs)
  // — already verified complete and verbatim, confirmed against the live page.
};

export const tosPage = {
  hero: { title: "Terms of Service" },
};

export const benefitsPage = {
  hero: {
    label: "Ideal Home Health",
    // Was wrong — real live title is below.
    title: "Home Care Benefits Covered by Medicaid & Medicare",
    // Was completely different text — real live description is below.
    description: "Get reliable in-home care in NYC with personal support, transportation assistance, light housekeeping, medication reminders, and more — available for eligible seniors through Medicaid and Medicare.",
    // attachment: Rectangle-1.png, confirmed real filename via live page.
    image: "/images/Rectangle-1.png",
    phone: "(718) 517-2424",
    // Was missing entirely. Third item is a genuine grammar quirk in the
    // source ("support for and trusted caregivers") — kept verbatim.
    badges: [
      { bold: "$220 paid monthly", normal: "for eligible everyday items" },
      { bold: "Up to $360/year", normal: "in wellness rewards" },
      { bold: "24/7 support", normal: "for and trusted caregivers" },
    ],
    button: { title: "Check My Eligibility", href: "/enroll-now" },
  },
  qualify: {
    cardTitle: "You May Qualify If",
    heading: "How Much Does Home Care Cost with Ideal Home Health?",
    description: "For many eligible seniors in New York City, in-home care with Ideal Home Health may be available at no out-of-pocket cost through Medicaid and Medicare.\n\nInstead of asking families to choose an hourly care package, we first check whether you or your loved one qualifies for covered home care benefits.",
    button: { title: "Check My Eligibility", href: "/enroll-now" },
    items: [
      "You are 55 or older",
      "You have Medicaid and Medicare",
      "You live in Brooklyn, Bronx, Queens, Staten Island, or NYC",
      "You need help with daily activities",
    ],
  },
  included: {
    title: "What's Included in Your Home Care Benefits?",
    button: { title: "Get Help Enrolling Today", href: "/enroll-now" },
    items: [
      { title: "Personal Care", description: "Help with bathing, dressing, laundry, and daily personal needs.", icon: "/images/boxicons_car-filled.png" },
      { title: "Transportation Assistance", description: "Support with travel to doctor appointments, errands, and social activities.", icon: "/images/boxicons_car-filled-1.png" },
      { title: "Light Housekeeping", description: "Meal preparation, light cleaning, and companionship at home.", icon: "/images/boxicons_car-filled-2.png" },
      { title: "Medication Reminders", description: "Daily assistance with medication reminders and management.", icon: "/images/boxicons_car-filled-3.png" },
    ],
  },
  // Was missing entirely — image between "Included" and "Extras" sections.
  includedImage: "/images/Frame-11-2.png",
  extras: {
    title: "Eligible Members May Receive More Than Home Care",
    items: [
      { title: "$220 Paid Monthly", description: "To spend on eligible items that support your daily needs.", icon: "/images/Frame-21.png" },
      { title: "Up to $360 Per Year", description: "Available through wellness rewards.", icon: "/images/Frame-21.png" },
      { title: "Prescription Support", description: "Medication and pharmacist support to help you stay on track.", icon: "/images/Frame-21.png" },
      { title: "Free with Medicaid and Medicare", description: "For eligible members who meet program requirements.", icon: "/images/Frame-21.png" },
    ],
  },
  // Was missing entirely — image before the "How to Get Started" steps.
  stepsImage: "/images/photo-test2.png",
  // CDPAP mention removed from step 3 (originally offered registering a
  // family member as a CDPAP caregiver as an alternative option).
  steps: {
    title: "How to Get Started?",
    button: { title: "Enroll Now", href: "/enroll-now" },
    items: [
      { number: "01.", title: "Contact Us", description: "Contact us to speak with an Ideal Home Health customer specialist about your needs, and we'll answer your questions and help you take the first step." },
      { number: "02.", title: "We Help You Coordinate the Details", description: "We guide you through the necessary paperwork, including checking Medicaid eligibility, scheduling state assessments, and coordinating with doctors to streamline the process." },
      { number: "03.", title: "Find Your Ideal Aide", description: "We'll match you with a certified aide who is the ideal fit for your unique condition and needs." },
      { number: "04.", title: "Receive Care", description: "Your personalized care can begin as soon as all the necessary paperwork is complete. It's a quick and easy process designed to get you the help you need without delay." },
    ],
  },
  whyChoose: {
    title: "Why Families Choose Ideal Home Health",
    items: [
      { title: "Continuity & Trust", description: "Consistent long-term care builds trust with clients and families.", icon: "/images/Frame-1.png" },
      { title: "24/7 Support", description: "Help is available around the clock when you need it.", icon: "/images/Frame-2.png" },
      { title: "Cultural & Language Match", description: "We prioritize pairing clients with caregivers who understand their language and culture.", icon: "/images/Frame-3.png" },
      { title: "Thoroughly Vetted Aides", description: "Caregivers undergo background checks and professional training.", icon: "/images/Frame-4.png" },
    ],
  },
  // Was missing entirely — a full locations + office-cards section between
  // "Why Choose" and the quote section.
  locations: {
    label: "Ideal Home Health",
    title: "Home Care Services Across New York City",
    description: "Ideal Home Health provides in-home care support for eligible seniors and families across NYC.",
    button: { title: "Get in Touch", href: "/contact-us" },
    image: "/images/Daco_924160.png",
  },
  officeCards: [
    { title: "Brooklyn", subtitle: "Ideal Home Health – Brooklyn Office", address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US", phone: "(718) 517 – 2424", button: { title: "Brooklyn Services", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "Ideal Home Health – Bronx Office", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US", phone: "(718) 517 – 2424", button: { title: "Bronx Services", href: "/locations/bronx" } },
  ],
  quote: {
    label: '"Caring for you like family."',
    title: "Care That Feels Like Family",
    description: "At Ideal Home Health, care is personal. We help seniors stay safe, supported, and comfortable at home while giving families peace of mind.",
    // attachment: Frame-11-508x550.jpg, confirmed real filename via live page.
    image: "/images/Frame-11.jpg",
  },
  prefooterCta: {
    // Was wrong — real live title/button are below.
    title: "Find Out If You Qualify for $0 Home Care",
    description: "Contact us today for a free consultation and discuss a custom home care plan perfectly suited to your family's needs in New York City.",
    button: { title: "Check My Eligibility", href: "/enroll-now" },
    // attachment: Image.jpg, confirmed real filename via live page.
    image: "/images/Image.jpg",
  },
};

export const locations = {
  brooklyn: {
    name: "Brooklyn",
    hero: {
      title: "Compassionate Home Health Care Services in Brooklyn, NY",
      highlight: "Home Health Care Services",
      description:
        "Ideal Home Health is proud to be a trusted home health care agency in Brooklyn, New York. We understand the diverse and vibrant communities that make up this incredible borough. Our dedicated team provides personalized in-home care solutions to residents across Brooklyn's neighborhoods, from historic Brooklyn Heights to the lively streets of Williamsburg and the family-friendly vibe of Park Slope.",
      // Was wrong — real image is below.
      image: "/images/in-home-health-care-brooklyn-nyc.jpg",
      buttons: [
        { title: "Apply for Homecare", href: "/enroll-now" },
        { title: "Become a Caregiver", href: "/careers/#qualifyenroll" },
      ],
    },
    services: [
      {
        title: "Home Health Aides in Brooklyn",
        description:
          "Our Department of Health certified Home Health Aides (HHAs) in Brooklyn provide compassionate personal care and daily living assistance. From support with bathing, dressing, and meal prep to medication reminders and light housekeeping, our Brooklyn HHAs empower residents of neighborhoods like Bay Ridge and Flatbush to maintain independence and comfort at home. They receive ongoing training to ensure the highest quality of care.",
        button: { title: "Learn More About HHAs", href: "/services/home-health-aide" },
      },
      {
        title: "Skilled Visiting Home Nurses Serving Brooklyn",
        description:
          "Receive expert skilled nursing care directly in your Brooklyn home with our licensed Visiting Home Nurses. Our RNs and LPNs deliver a range of medical services, including wound care, medication management, post-operative support, and chronic disease care for residents across Downtown Brooklyn, Greenpoint, and beyond. We develop custom care plans focused on your health and recovery.",
        button: { title: "Learn More About Visiting Nurses", href: "/services/visiting-home-nurse" },
      },
    ],
    whyChoose: {
      title: "Why Brooklyn Families Choose Ideal Home Health",
      intro: "Ideal Home Health is deeply committed to the Brooklyn community. When you choose us, you benefit from:",
      image: "/images/brooklyn-families-choose-ideal-home-health-1.jpg",
      items: [
        { title: "Local Expertise", description: "Our Brooklyn team understands the borough's unique character and resources." },
        { title: "Compassionate Caregivers", description: "Vetted, trained, and dedicated professionals ready to serve your neighborhood." },
        { title: "Tailored Plans", description: "Care customized to your family's specific needs and lifestyle." },
        { title: "Seamless Process", description: "Easy enrollment and guidance through Medicaid and insurance." },
        { title: "Community Connection", description: "Proudly serving Brooklyn residents with a focus on local support." },
      ],
    },
    // Was missing entirely.
    prefooterCta: {
      title: "Ready to Start Your Home Care Journey in Brooklyn?",
      description: "Connecting with Ideal Home Health is simple. Reach out today for a free consultation to discuss your personalized home care options in Brooklyn, NY. We're here to help.",
      button: { title: "Contact Our Brooklyn Team", href: "/contact-us" },
      image: "/images/home-health-care-brooklyn-contact-1.jpg",
    },
  },
  bronx: {
    name: "Bronx",
    hero: {
      title: "Compassionate Home Health Care Services in The Bronx, NY",
      highlight: "Home Health Care Services",
      description:
        "Ideal Home Health is proud to be a trusted home care agency in The Bronx, New York. We are deeply committed to providing personalized care that respects the vibrant culture and communities of the borough. Our dedicated team delivers personalized in-home care solutions to residents throughout all of The Bronx's neighborhoods, from the historic Grand Concourse to the scenic beauty of Riverdale and the bustling heart of Fordham.",
      image: "/images/home-health-care-bronx.jpg",
      buttons: [
        { title: "Apply for Homecare", href: "/enroll-now" },
        { title: "Become a Caregiver", href: "/careers/#qualifyenroll" },
      ],
    },
    services: [
      {
        title: "Certified Home Health Aides (HHA) in The Bronx",
        description:
          "Our Department of Health certified Home Health Aides (HHAs) in The Bronx provide compassionate personal care and daily living assistance. From help with bathing, dressing, and meal prep to medication reminders and light housekeeping, our Bronx HHAs empower residents in neighborhoods like Mott Haven and Pelham Bay to maintain their independence and comfort at home. They receive ongoing training to ensure the highest quality of care.",
        button: { title: "Learn More About HHAs", href: "/services/home-health-aide" },
      },
      {
        title: "Skilled Visiting Home Nurses Serving The Bronx",
        description:
          "Receive expert skilled nursing care directly in your Bronx home with our licensed Visiting Home Nurses. Our RNs and LPNs deliver a range of medical services, including wound care, medication management, post-operative support, and chronic disease care for residents across Riverdale, Fordham, and beyond. We develop custom care plans focused on your health and recovery.",
        button: { title: "Learn More About Visiting Nurses", href: "/services/visiting-home-nurse" },
      },
    ],
    whyChoose: {
      title: "Why Bronx Families Choose Ideal Home Health",
      intro: "Ideal Home Health is deeply committed to the Bronx community. When you choose us, you benefit from:",
      image: "/images/bronx-families-choose-ideal-home-health.jpg",
      items: [
        { title: "Local Expertise", description: "Our Bronx team understands the borough's unique character and resources." },
        { title: "Compassionate Caregivers", description: "Vetted, trained, and dedicated professionals ready to serve your neighborhood." },
        { title: "Tailored Plans", description: "Care customized to your family's specific needs and lifestyle." },
        { title: "Seamless Process", description: "Easy enrollment and guidance through Medicaid and insurance." },
        { title: "Community Connection", description: "Proudly serving Bronx residents with a focus on local support." },
      ],
    },
    // Was missing entirely.
    prefooterCta: {
      title: "Ready to Start Your Home Care Journey in The Bronx?",
      description: "Connecting with Ideal Home Health is simple. Reach out today for a free consultation to discuss your personalized home care options in The Bronx, NY. We're here to help.",
      button: { title: "Contact Our Bronx Office", href: "/contact-us" },
      image: "/images/home-health-care-bronx-contact.jpg",
    },
  },
};

export const locationsIndexPage = {
  hero: {
    title: "Ideal Home Health: Your Local Home Health Care Partner Across New York City",
    highlight: "Local Home Health Care Partner",
    description:
      "At Ideal Home Health, we believe exceptional in-home care should be accessible right in your NYC community. With offices and dedicated teams strategically located across New York City's boroughs —Brooklyn and The Bronx— we're always close to home. Find your local Ideal Home Health office below and connect with our compassionate home care specialists today.",
    image: "/images/map.png",
    button: { title: "Contact Us", href: "/contact-us" },
  },
  cards: [
    {
      title: "Home Care Services in Brooklyn, NY",
      description:
        "Ideal Home Health provides compassionate home health care and personal assistance to residents across Brooklyn, New York. Our local team understands the unique needs of families in neighborhoods like Park Slope, Williamsburg, and Bay Ridge.",
      button: { title: "Learn More", href: "/locations/brooklyn" },
    },
    {
      title: "Home Care Services in The Bronx",
      description:
        "For top-quality home health and personal care in The Bronx, trust Ideal Home Health. Our dedicated caregivers and nurses offer comprehensive support throughout all Bronx neighborhoods, ensuring comfort and independence.",
      button: { title: "Learn More", href: "/locations/bronx" },
    },
  ],
  prefooterCta: {
    title: "Ready to Discuss Your Home Care Needs in NYC?",
    description: "Whether you're exploring options for yourself or a loved one, our team is here to help. Contact us today for a free consultation.",
    button: { title: "Contact Us", href: "/contact-us" },
    image: "/images/in-home-care-nyc.jpg",
  },
};

export const aboutUsPage = {
  hero: {
    title: "About Ideal Home Health",
    subtitle: "Compassionate Home Care in New York City",
    description:
      "At Ideal Home Health, we believe that your family is our family. Founded in 2013, we set out to revitalize the New York home care industry with a focus on customer service, communication, and efficiency. As a leading home care agency in New York City, we are dedicated to hiring caregivers who are passionate about improving your quality of life and empowering independence.",
    image: "/images/trusted-home-care-agency-new-york-city.jpg",
    buttons: [
      { title: "View Services", href: "/services" },
      { title: "Enroll Today", href: "/enroll-now" },
    ],
  },
  mission: {
    label: "IDEAL HOME HEALTH",
    title: "Our Mission & Core Values",
    description:
      "Our mission is to provide an exceptional standard of compassionate care that empowers every individual we serve. This mission is guided by our core values: a deep-seated belief that your family is our family, an unwavering commitment to communication and efficiency, and a promise to always act with integrity. By upholding these values, we ensure a higher standard of care that not only meets your physical needs but also supports your emotional and social well-being.",
    image: "/images/compassionate-in-home-care-nyc.jpg",
    button: { title: "What Others are Saying", href: "/about-us/testimonials-reviews" },
  },
  areasServed: {
    label: "areas served",
    title: "Serving all NYC Boroughs and Counties",
    // Was truncated and merged into one paragraph — source has two distinct
    // paragraphs, and the second one cuts off early in the previous version.
    description:
      "Starting in the home basement of one of our founding partners, Ideal Home Health began as a small company of four people in Brooklyn. In just 5 years, we have grown to a community of 1500+ people, proudly serving all five boroughs of New York City.\n\nIn addition to providing home health services, Ideal Home Health is deeply rooted in our community. We have partnered with dozens of community centers, senior facilities, and charities to make a positive impact on our neighborhoods in New York City.",
    image: "/images/Daco_924160.png",
    // Was missing — button before the office cards.
    button: { title: "Get in Touch", href: "/contact-us" },
  },
  // Was missing entirely — confirmed present and rendered on the live page.
  officeCards: [
    { title: "Brooklyn", subtitle: "Ideal Home Health – Brooklyn Office", address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US", phone: "(718) 517 – 2424", button: { title: "Learn More", href: "/locations/brooklyn" } },
    { title: "Bronx", subtitle: "Ideal Home Health – Bronx Office", address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US", phone: "(718) 517 – 2424", button: { title: "Learn More", href: "/locations/bronx" } },
  ],
  // Was missing entirely — confirmed present and rendered on the live page
  // (a 4-slide multilingual carousel; 3 of 4 slides are genuinely non-English
  // even on the English page in the source — kept verbatim).
  languages: [
    { title: "Your language and cultural needs are our priority", description: "We speak your language and understand you and your families cultural needs and preferences.", button: { title: "Enroll Today!", href: "/enroll-now" } },
    { title: "Язык на котором вы говорите и ваши культурные ценности у нас в приоритете", description: "Мы говорим на вашем языке и понимаем вас и ваши культурные ценности и предпочтения.", button: { title: "Enroll Today!", href: "/enroll-now" } },
    { title: "Sus necesidades de idioma y cultura son nuestra prioridad", description: "Hablamos su idioma y entendemos sus necesidades y preferencias culturales al igual que la de sus familiares.", button: { title: "Enroll Today!", href: "/enroll-now" } },
    { title: "您的语言和文化需求是我们的首要任务", description: "我们说您的语言，并了解您和您的家人的文化需求和喜好。", button: { title: "Enroll Today!", href: "/enroll-now" } },
  ],
  // Was missing entirely — confirmed present and rendered on the live page.
  statistics: [
    { topTitle: "We've helped", featureTopText: "5,000+", featureText: "Patients & Caregivers", description: "Since starting Ideal Home Health." },
    { topTitle: "We service", featureTopText: "Patients of", featureText: "many religions", description: "including Catholic, Christian, Muslim, Hindu, Buddhist, Adventist, Jehovahs Witness, Jewish and more." },
    { topTitle: "We have", featureTopText: "Caregivers that", featureText: "speak your language", description: "with over 34 languages spoken by our caregivers." },
    { topTitle: "At Ideal Home Health", featureTopText: "We understand", featureText: "your cultural needs", description: "servicing patients from over 46 countries." },
  ],
  prefooterCta: {
    title: "Have any questions?",
    description: "Our compassionate representatives are available to discuss any questions you have.",
    button: { title: "Get in Touch", href: "/contact-us" },
    image: "/images/registered-home-nurse-nyc.jpg",
  },
};

export const contactUsPage = {
  hero: {
    title: "Contact Ideal Home Health - Your NYC Home Care Experts",
    highlight: "NYC Home Care Experts",
    paragraphs: [
      "Looking for compassionate home care services in New York City?",
      "We provide home care services in New York City, with Offices in Brooklyn and the Bronx.",
      "Whether you have a general inquiry, want to learn more about our services, or are ready to get started, our team is here to help.",
      "Please feel free to contact us by calling our main office (718) 517 – 2424 or by filling out the form with your message.",
    ],
    links: [
      { prefix: "Interested in becoming a patient or caregiver? ", label: "Enroll Today.", href: "/enroll-now" },
      { prefix: "Looking for non-caregiver careers? ", label: "View Our Job Listings.", href: "/careers" },
    ],
  },
  officeCards: [
    {
      title: "Brooklyn",
      subtitle: "Ideal Home Health – Brooklyn Office",
      address: "2617 East 16th Street, Floor 2, Brooklyn, NY, 11235, US",
      phone: "(718) 517 – 2424",
      button: { title: "Learn More", href: "/locations/brooklyn" },
    },
    {
      title: "Bronx",
      subtitle: "Ideal Home Health – Bronx Office",
      address: "391 East 149th Street, Suite 515, Bronx, NY, 10455, US",
      phone: "(718) 517 – 2424",
      button: { title: "Learn More", href: "/locations/bronx" },
    },
  ],
  prefooterCta: {
    title: "Ready to get started with Ideal Home Health?",
    description: "Discover the compassionate care you deserve. Learn more about our services and enroll as a patient or caregiver today.",
    button: { title: "Enroll Today", href: "/enroll-now" },
    image: "/images/iStock-1181209194.jpg",
  },
};

export const prefooterDefault = {
  title: "Ready to Start Your Home Care Journey?",
  description: "Reach out today for a free consultation to discuss your personalized home care options.",
  button: { title: "Contact Our Team", href: "/contact-us" },
};
