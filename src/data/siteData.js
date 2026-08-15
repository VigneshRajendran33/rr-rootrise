/* =========================================================
   RR ROOTRISE DIGITAL INNOVATIONS
   CENTRAL WEBSITE CONTENT AND CONFIGURATION
   ========================================================= */

export const company = {
  name: "RR RootRise Digital Innovations",
  shortName: "RR RootRise",
  tagline: "Strong Roots. Digital Growth.",
  startedYear: 2026,

  website: "https://rrrootrise.com",

  email: "info@rrrootrise.com",
  emailHref: "mailto:info@rrrootrise.com",

  phone: "+91 72003 34187",
  phoneDisplay: "7200334187",
  phoneHref: "tel:+917200334187",

  location:
    "RR RootRise Digital Innovations, 2, Kalapatti Main Rd, Periyar Nagar, Nehru Nagar West, Coimbatore, Tamil Nadu 641014, India",

  city: "Coimbatore, Tamil Nadu, India",

  serviceArea:
    "Serving businesses across India and worldwide.",

  description:
    "RR RootRise Digital Innovations is a Coimbatore-based software and digital solutions company helping businesses build modern websites, mobile applications, e-commerce platforms and custom software designed for real business growth.",

  shortDescription:
    "Modern software and digital solutions engineered for growing businesses.",

  mission:
    "To design and engineer reliable digital products that help businesses operate better, strengthen customer experiences and grow with confidence.",

  vision:
    "To build RR RootRise into a trusted technology partner for ambitious businesses across India and global markets.",

  whatsappHref:
    "https://wa.me/917200334187?text=Hello%20RR%20RootRise%2C%20I%20would%20like%20to%20discuss%20a%20project.",

  linkedinHref:
    "https://www.linkedin.com/company/rr-rootrise-digital-innovations/",

  instagramHref:
    "https://www.instagram.com/rr_rootrise/",

  facebookHref:
    "https://www.facebook.com/profile.php?id=61592142296827",

  xHref: "https://x.com/rrrootrise_",

  threadsHref:
    "https://www.threads.com/@rr_rootrise",

  githubHref:
    "https://github.com/rrrootrisedigitalinnovations-cpu",

  mapHref:
    "https://www.google.com/maps/search/?api=1&query=RR%20RootRise%20Digital%20Innovations%2C%202%2C%20Kalapatti%20Main%20Rd%2C%20Periyar%20Nagar%2C%20Nehru%20Nagar%20West%2C%20Coimbatore%2C%20Tamil%20Nadu%20641014",
};

/* =========================================================
   BRAND ASSETS
   ========================================================= */

export const brandAssets = {
  logo: "/images/rr-rootrise-full-logo.png",
  logoSymbol: "/images/rr-rootrise-full-logo.png",
  heroVisual: "/images/hero-visual.webp",
  socialPreview: "/images/social-preview.jpg",
  favicon: "/favicon.png",
};

/* =========================================================
   MAIN NAVIGATION
   ========================================================= */

export const navigation = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },

  {
    id: "services",
    label: "Services",
    path: "/services",
  },

  {
    id: "industries",
    label: "Industries",
    path: "/industries",
  },

  {
    id: "about",
    label: "About",
    path: "/about",
  },

  {
    id: "contact",
    label: "Contact",
    path: "/contact",
  },
];

/* =========================================================
   GLOBAL CALL TO ACTIONS
   ========================================================= */

export const callToActions = {
  primary: {
    label: "Start a Project",
    path: "/contact",
  },

  secondary: {
    label: "Discuss Your Project",
    path: "/contact",
  },

  services: {
    label: "Explore Our Services",
    path: "/services",
  },

  industries: {
    label: "Explore Industries",
    path: "/industries",
  },

  about: {
    label: "Discover Our Approach",
    path: "/about",
  },

  whatsapp: {
    label: "Chat on WhatsApp",
    href: company.whatsappHref,
  },

  email: {
    label: "Send an Email",
    href: company.emailHref,
  },
};

/* =========================================================
   HOME HERO
   ========================================================= */

export const heroContent = {
  eyebrow: "Software & Digital Solutions",

  title:
    "Digital Solutions Built for Real Business Growth.",

  description:
    "We design and engineer modern websites, mobile applications, e-commerce platforms and custom software for ambitious businesses.",

  supportingText:
    "Strategy, design, engineering and digital growth delivered through one reliable technology partnership.",

  primaryAction: callToActions.primary,

  secondaryAction: callToActions.services,
};

/* =========================================================
   SOLUTION PILLARS
   ========================================================= */

export const solutionPillars = [
  {
    id: "strategy",
    number: "01",
    icon: "strategy",
    title: "Strategy",
    description:
      "Understanding business goals, audiences, requirements and long-term digital direction.",
  },

  {
    id: "design",
    number: "02",
    icon: "design",
    title: "Design",
    description:
      "Creating clear, modern and user-focused digital experiences.",
  },

  {
    id: "development",
    number: "03",
    icon: "development",
    title: "Engineering",
    description:
      "Building responsive, reliable and scalable digital products.",
  },

  {
    id: "growth",
    number: "04",
    icon: "growth",
    title: "Growth",
    description:
      "Strengthening digital visibility, engagement and business opportunities.",
  },

  {
    id: "support",
    number: "05",
    icon: "support",
    title: "Partnership",
    description:
      "Supporting long-term digital improvement beyond the initial launch.",
  },
];

/* =========================================================
   SERVICES
   ========================================================= */

export const services = [
  {
    id: "website-development",
    number: "01",
    icon: "website",

    title: "Website Development",
    shortTitle: "Websites",

    summary:
      "Professional, responsive websites engineered to strengthen credibility, generate enquiries and support business growth.",

    description:
      "We design and develop modern business websites with clear information architecture, professional visual systems, responsive layouts, performance-focused development and conversion-ready customer journeys.",

    features: [
      "Corporate and business websites",
      "Service-based websites",
      "Professional landing pages",
      "Website redesign",
      "Responsive development",
      "Custom website functionality",
    ],
  },

  {
    id: "mobile-app-development",
    number: "02",
    icon: "mobile",

    title: "Mobile App Development",
    shortTitle: "Mobile Apps",

    summary:
      "Modern mobile experiences designed around customer journeys, business workflows and long-term scalability.",

    description:
      "We create mobile application experiences that help businesses improve accessibility, customer engagement and digital operations across modern devices.",

    features: [
      "Business mobile applications",
      "Customer-facing applications",
      "Application dashboards",
      "Progressive web applications",
      "Responsive mobile experiences",
      "Workflow-focused app interfaces",
    ],
  },

  {
    id: "ecommerce-solutions",
    number: "03",
    icon: "commerce",

    title: "E-Commerce Development",
    shortTitle: "E-Commerce",

    summary:
      "Commerce experiences built for product discovery, customer journeys and efficient online sales workflows.",

    description:
      "We develop e-commerce solutions that help businesses present products professionally, manage customer journeys and create clear paths from discovery to purchase.",

    features: [
      "Product catalogues",
      "Search and filtering",
      "Shopping cart experiences",
      "Checkout flows",
      "Payment integration",
      "Customer accounts",
      "Order management",
      "Admin dashboards",
    ],
  },

  {
    id: "custom-software",
    number: "04",
    icon: "application",

    title: "Custom Software Solutions",
    shortTitle: "Custom Software",

    summary:
      "Purpose-built digital systems designed around specific business processes, workflows and operational requirements.",

    description:
      "We build custom web-based software, dashboards, portals and workflow systems that help businesses digitise operations and solve practical technology challenges.",

    features: [
      "Admin dashboards",
      "Customer portals",
      "Business portals",
      "Booking systems",
      "Internal management tools",
      "Custom workflow systems",
    ],
  },

  {
    id: "ui-ux-design",
    number: "05",
    icon: "design",

    title: "UI/UX Design",
    shortTitle: "UI/UX Design",

    summary:
      "Clear, modern interfaces designed around users, business goals and consistent digital experiences.",

    description:
      "We plan and design professional website and application interfaces that improve usability, visual clarity, navigation and product consistency.",

    features: [
      "Website interface design",
      "Application interface design",
      "Responsive design systems",
      "User-flow planning",
      "Wireframes",
      "Interface redesign",
    ],
  },

  {
    id: "seo",
    number: "06",
    icon: "search",

    title: "SEO",
    shortTitle: "SEO",

    summary:
      "Search-ready digital foundations created to improve discoverability, technical quality and organic visibility.",

    description:
      "We improve website structure, metadata, content organisation, technical foundations and performance factors that support stronger search visibility.",

    features: [
      "Technical SEO foundations",
      "Page titles and descriptions",
      "Search-friendly content structure",
      "Performance optimisation",
      "Local SEO foundations",
      "Search visibility support",
    ],
  },

  {
    id: "digital-growth",
    number: "07",
    icon: "marketing",

    title: "Digital Growth",
    shortTitle: "Digital Growth",

    summary:
      "Practical digital growth strategies designed to strengthen visibility, engagement and qualified business opportunities.",

    description:
      "We help businesses strengthen their digital presence through structured growth planning, content direction, campaign support and performance-focused improvements.",

    features: [
      "Digital growth strategy",
      "Campaign planning",
      "Content direction",
      "Audience engagement",
      "Conversion-focused improvements",
      "Performance monitoring",
    ],
  },
];

/* =========================================================
   INDUSTRIES
   ========================================================= */

export const industries = [
  {
    id: "retail-ecommerce",
    icon: "commerce",
    title: "Retail & E-Commerce",

    description:
      "Digital commerce platforms, product experiences, customer journeys and order workflows for modern retail businesses.",
  },

  {
    id: "food-hospitality",
    icon: "food",
    title: "Hospitality",

    description:
      "Modern websites, booking experiences, digital menus and customer-facing platforms for hospitality businesses.",
  },

  {
    id: "professional-services",
    icon: "business",
    title: "Professional Services",

    description:
      "Professional digital platforms for consultants, agencies, accounting firms and service-led organisations.",
  },

  {
    id: "education",
    icon: "education",
    title: "Education",

    description:
      "Course websites, institutional platforms, enquiry systems and student-focused digital experiences.",
  },

  {
    id: "healthcare",
    icon: "healthcare",
    title: "Healthcare",

    description:
      "Professional information platforms, appointment experiences and digital solutions for healthcare organisations.",
  },

  {
    id: "real-estate",
    icon: "location",
    title: "Real Estate",

    description:
      "Property discovery platforms, premium listings, enquiry journeys and modern real-estate digital experiences.",
  },

  {
    id: "fitness-wellness",
    icon: "growth",
    title: "Fitness & Wellness",

    description:
      "Digital experiences for gyms, fitness brands, wellness services, memberships and customer engagement.",
  },

  {
    id: "startups",
    icon: "launch",
    title: "Startups & Growing Businesses",

    description:
      "Launch-ready websites, applications, dashboards and scalable digital foundations built for growth.",
  },
];

/* =========================================================
   SELECTED WORK / PORTFOLIO
   ========================================================= */

export const portfolioProjects = [
  {
    id: "tamil-ver",
    number: "01",

    title: "Tamil Ver",

    industry:
      "Culture & Heritage",

    type: "Demo Project",

    description:
      "A content-rich digital experience focused on Tamil heritage, culture and traditional knowledge, presented through a modern responsive interface.",

    capabilities: [
      "Responsive Web Experience",
      "Content Architecture",
      "UI/UX Design",
      "Modern Frontend Development",
    ],

    liveUrl:
      "https://rrrootrisedigitalinnovations-cpu-tamil-ver-project-v3.rrrootrise-portfolio.workers.dev/",
  },

  {
    id: "edunova-academy",
    number: "02",

    title: "EduNova Academy",

    industry: "Education",

    type: "Demo Project",

    description:
      "A modern education platform concept designed around programme discovery, institutional information and student-focused digital journeys.",

    capabilities: [
      "Education Website",
      "Responsive UI",
      "Course Experience",
      "Frontend Development",
    ],

    liveUrl:
      "https://rrrootrisedigitalinnovations-cpu-edunova-academy.rrrootrise-portfolio.workers.dev",
  },

  {
    id: "skynest-luxury-properties",
    number: "03",

    title:
      "SkyNest Luxury Properties",

    industry: "Real Estate",

    type: "Demo Project",

    description:
      "A premium real-estate digital experience created around property discovery, luxury presentation, enquiries and responsive customer journeys.",

    capabilities: [
      "Property Discovery",
      "Luxury UI/UX",
      "Responsive Development",
      "Lead-Focused Experience",
    ],

    liveUrl:
      "https://skynest-luxury.rrrootrise-portfolio.workers.dev/",
  },

  {
    id: "ironforge-fitness",
    number: "04",

    title: "IronForge Fitness",

    industry:
      "Fitness & Wellness",

    type: "Demo Project",

    description:
      "A high-impact fitness website concept built around programmes, memberships, visual communication and conversion-focused calls to action.",

    capabilities: [
      "Fitness Website",
      "Responsive Experience",
      "Conversion-Focused UI",
      "Modern Frontend Development",
    ],

    liveUrl:
      "https://ironforge-fitness.rrrootrise-portfolio.workers.dev/",
  },
];

/* =========================================================
   PROJECT PROCESS
   ========================================================= */

export const processSteps = [
  {
    id: "discover",
    number: "01",
    title: "Discover",

    description:
      "We understand your business, audience, goals, challenges and essential requirements.",
  },

  {
    id: "define",
    number: "02",
    title: "Define",

    description:
      "We define the project scope, structure, functionality and delivery direction.",
  },

  {
    id: "design",
    number: "03",
    title: "Design",

    description:
      "We create a professional visual system and user experience aligned with the business.",
  },

  {
    id: "build",
    number: "04",
    title: "Build",

    description:
      "We engineer the solution with responsive layouts, reliable functionality and maintainable structure.",
  },

  {
    id: "validate",
    number: "05",
    title: "Validate",

    description:
      "We review responsiveness, functionality, performance and overall user experience before launch.",
  },

  {
    id: "launch",
    number: "06",
    title: "Launch",

    description:
      "We deploy the final solution and support a smooth transition into production.",
  },
];

/* =========================================================
   WHY RR ROOTRISE
   ========================================================= */

export const advantages = [
  {
    id: "business-focused",
    icon: "strategy",

    title:
      "Business-Focused Engineering",

    description:
      "Every solution begins with business objectives, user requirements and measurable digital priorities.",
  },

  {
    id: "clear-communication",
    icon: "communication",

    title:
      "Clear Communication",

    description:
      "Project requirements, progress, decisions and next steps are communicated clearly.",
  },

  {
    id: "responsive-design",
    icon: "responsive",

    title:
      "Responsive Experiences",

    description:
      "Digital experiences are designed to perform clearly across mobile, tablet and desktop devices.",
  },

  {
    id: "scalable-solutions",
    icon: "scalable",

    title:
      "Scalable Foundations",

    description:
      "Solutions are structured to support future improvements, features and changing business requirements.",
  },

  {
    id: "performance",
    icon: "performance",

    title:
      "Performance Focus",

    description:
      "We focus on efficient assets, reliable functionality and smooth digital experiences.",
  },

  {
    id: "ownership",
    icon: "support",

    title:
      "Responsible Partnership",

    description:
      "We approach projects with ownership, transparency and a long-term business mindset.",
  },
];

/* =========================================================
   COMPANY PRINCIPLES
   ========================================================= */

export const companyPrinciples = [
  {
    number: "01",

    title: "Clarity",

    description:
      "Clear thinking, communication and digital experiences.",
  },

  {
    number: "02",

    title: "Reliability",

    description:
      "Dependable solutions and responsible project delivery.",
  },

  {
    number: "03",

    title:
      "Practical Innovation",

    description:
      "Modern technology applied to meaningful business requirements.",
  },

  {
    number: "04",

    title: "Business Value",

    description:
      "Every decision should contribute to a useful business outcome.",
  },

  {
    number: "05",

    title: "Ownership",

    description:
      "Taking responsibility for quality, communication and project outcomes.",
  },

  {
    number: "06",

    title: "Partnership",

    description:
      "Building professional relationships designed for long-term growth.",
  },
];

/* =========================================================
   CONTACT FORM
   ========================================================= */

export const contactFormConfig = {
  formName:
    "rr-rootrise-project-enquiry",

  title:
    "Tell Us About Your Project",

  description:
    "Share your business requirement, project idea or current digital challenge. We will review the details and respond through email.",

  submitLabel:
    "Submit Project Enquiry",

  serviceOptions:
    services.map(
      (service) => service.title,
    ),

  successMessage:
    "Thank you. Your project enquiry has been submitted successfully.",

  errorMessage:
    "Your enquiry could not be submitted. Please try again or contact us through email.",

  privacyNote:
    "Your information will only be used to review and respond to your project enquiry.",
};

/* =========================================================
   SOCIAL MEDIA LINKS
   ========================================================= */

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: company.linkedinHref,
  },

  {
    id: "instagram",
    label: "Instagram",
    href: company.instagramHref,
  },

  {
    id: "facebook",
    label: "Facebook",
    href: company.facebookHref,
  },

  {
    id: "threads",
    label: "Threads",
    href: company.threadsHref,
  },

  {
    id: "x",
    label: "X",
    href: company.xHref,
  },
];

/* =========================================================
   FOOTER COMPANY LINKS
   ========================================================= */

export const footerCompanyLinks = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "About",
    path: "/about",
  },

  {
    label: "Industries",
    path: "/industries",
  },

  {
    label: "Contact",
    path: "/contact",
  },
];

/* =========================================================
   FOOTER SERVICE LINKS
   ========================================================= */

export const footerServiceLinks = [
  {
    label:
      "Website Development",

    path:
      "/services#website-development",
  },

  {
    label:
      "Mobile App Development",

    path:
      "/services#mobile-app-development",
  },

  {
    label:
      "E-Commerce Development",

    path:
      "/services#ecommerce-solutions",
  },

  {
    label:
      "Custom Software Solutions",

    path:
      "/services#custom-software",
  },

  {
    label:
      "UI/UX Design",

    path:
      "/services#ui-ux-design",
  },

  {
    label: "SEO",

    path:
      "/services#seo",
  },

  {
    label:
      "Digital Growth",

    path:
      "/services#digital-growth",
  },
];

/* =========================================================
   LEGAL LINKS
   ========================================================= */

export const legalLinks = [
  {
    label:
      "Privacy Policy",

    path:
      "/privacy-policy",
  },

  {
    label:
      "Terms of Service",

    path:
      "/terms-of-service",
  },
];

/* =========================================================
   PAGE SEO
   ========================================================= */

export const pageMeta = {
  home: {
    title:
      "RR RootRise Digital Innovations | Software & Digital Solutions",

    description:
      "Enterprise-ready websites, mobile applications, e-commerce platforms, custom software, UI/UX, SEO and digital growth solutions for modern businesses.",
  },

  services: {
    title:
      "Software & Digital Services | RR RootRise Digital Innovations",

    description:
      "Explore website development, mobile app development, e-commerce, custom software, UI/UX design, SEO and digital growth solutions.",
  },

  industries: {
    title:
      "Industries We Serve | RR RootRise Digital Innovations",

    description:
      "Digital solutions for retail, hospitality, professional services, education, healthcare, real estate, fitness and growing businesses.",
  },

  about: {
    title:
      "About RR RootRise Digital Innovations",

    description:
      "Learn about RR RootRise Digital Innovations, our mission, vision, principles and approach to building reliable digital solutions.",
  },

  contact: {
    title:
      "Start a Project | RR RootRise Digital Innovations",

    description:
      "Contact RR RootRise Digital Innovations to discuss your website, mobile application, e-commerce, custom software or digital growth requirement.",
  },

  privacy: {
    title:
      "Privacy Policy | RR RootRise Digital Innovations",

    description:
      "Read how RR RootRise Digital Innovations handles website enquiries and personal information.",
  },

  terms: {
    title:
      "Terms of Service | RR RootRise Digital Innovations",

    description:
      "Read the website and service enquiry terms for RR RootRise Digital Innovations.",
  },

  notFound: {
    title:
      "Page Not Found | RR RootRise Digital Innovations",

    description:
      "The requested page could not be found.",
  },
};