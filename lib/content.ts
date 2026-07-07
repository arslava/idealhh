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
      { label: "Home Health Aides", href: "/services/home-health-aide" },
      { label: "Visiting Home Nurse", href: "/services/visiting-home-nurse" },
      { label: "Conditions We Support", href: "/services/conditions" },
      { label: "How to Enroll", href: "/how-to-enroll" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    children: [{ label: "Become a Caregiver", href: "/careers/how-it-works-caregivers" }],
  },
  { label: "Locations", href: "/locations" },
  { label: "Contact Us", href: "/contact-us" },
];

export const homePage = {
  hero: {
    titlePrefix: "Ideal Home Health: ",
    highlight: "Compassionate Home Care Services",
    titleSuffix: " in New York City",
    description:
      "Experience compassionate, high-quality home health care services right in your own home with Ideal Home Health. As a leading accredited home health agency in New York City, we are dedicated to providing personalized in-home care solutions that empower you to live independently and comfortably. Whether you need assistance with daily living activities or specialized support, our dedicated team is here for you. Discover the Ideal difference today.",
    // Real button order per the live site: primary (white/accent) = Become a
    // Caregiver, secondary (solid accent) = Apply for Homecare.
    primaryButton: { title: "Become a Caregiver", href: "/careers#qualifyenroll" },
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
      "Patients with chronic conditions, including stroke and diabetes care at home",
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
  },
  heroImage: "/images/compassionate-home-health-care-services-nyc.jpg",
  locationsImage: "/images/Daco_924160.png",
};

export const servicesPage = {
  hero: {
    title: "Our Home Care Services",
  },
  services: [
    {
      title: "Home Health Aides (HHA): Essential Daily Support",
      description:
        "Our Department of Health certified Home Health Aides (HHAs) offer compassionate assistance with Activities of Daily Living (ADLs). From personal care to medication reminders, our in-home aides in NYC help maintain independence. All HHAs receive continuous training, ensuring top safety standards.",
      button: { title: "Learn More", href: "/services/home-health-aide" },
      image: "/images/home-health-aides-new-york.jpg",
    },
    {
      title: "Visiting Home Nurse – Expert Skilled Nursing Care at Home",
      description:
        "Receive skilled nursing care in your New York City home with our licensed Visiting Home Nurses (RNs/LPNs). We offer medication management, wound care, post-operative support, chronic disease management, and more. Our nurses create custom plans tailored to your recovery and health goals.",
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
};

export const homeHealthAidePage = {
  hero: {
    title: "Receive Compassionate and Skilled Care at Home",
    highlight: "at home",
    description:
      "With Ideal Home Health, you can rest easy knowing your loved one is receiving the support they need to maintain their independence in the comfort of their home. Our certified Home Health Aides are trained to assist with a variety of needs.",
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
    image: "/images/certified-home-health-aides-new-york.jpg",
  },
};

export const locationCards = [
  {
    name: "Brooklyn",
    address: "2617 East 16th Street, Floor 2, Brooklyn, NY 11235",
    button: { title: "Brooklyn Services", href: "/locations/brooklyn" },
  },
  {
    name: "Bronx",
    address: "391 East 149th Street, Suite 515, Bronx, NY 10455",
    button: { title: "Bronx Services", href: "/locations/bronx" },
  },
  {
    name: "Manhattan",
    address: "112 W 34th St., 17th floor, New York, NY 10120",
    button: { title: "Manhattan Services", href: "/locations/manhattan" },
  },
];

export const locations = {
  brooklyn: {
    name: "Brooklyn",
    hero: {
      title: "Compassionate Home Health Care Services in Brooklyn, NY",
      highlight: "Home Health Care Services",
      description:
        "Ideal Home Health is proud to be a trusted home health care agency in Brooklyn, New York. We understand the diverse and vibrant community and provide personalized in-home care across every neighborhood.",
      buttons: [
        { title: "Apply for Homecare", href: "/enroll-now" },
        { title: "Become a Caregiver", href: "/careers#qualifyenroll" },
      ],
    },
    // Note: a "CDPAP Program Assistance" entry appeared here in the original
    // 3-item services list and has been removed per request.
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
  },
};

export const prefooterDefault = {
  title: "Ready to Start Your Home Care Journey?",
  description: "Reach out today for a free consultation to discuss your personalized home care options.",
  button: { title: "Contact Our Team", href: "/contact-us" },
};
