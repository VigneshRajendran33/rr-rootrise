/* =========================================================
   RR ROOTRISE DIGITAL INNOVATIONS
   CENTRAL WEBSITE CONTENT AND CONFIGURATION
   ========================================================= */

export const company = {
  name: "RR RootRise Digital Innovations",
  shortName: "RR RootRise",
  tagline: "Strong Roots. Digital Growth.",
  startedYear: 2026,

  website: "https://rrrootrise.netlify.app",

  email: "rrrootrisedigitalinnovations@gmail.com",
  emailHref: "mailto:rrrootrisedigitalinnovations@gmail.com",

  // Show this location only in Contact page and Footer.
  location: "Coimbatore, Tamil Nadu, India",

  serviceArea: "Serving businesses across India and worldwide.",

  description:
    "RR RootRise Digital Innovations helps businesses build strong digital foundations through professional websites, mobile applications, e-commerce platforms, custom web solutions, design, digital growth and ongoing support.",

  shortDescription:
    "Professional software and digital solutions built around real business goals.",

  mission:
    "To help businesses create clear, reliable and growth-ready digital experiences through practical strategy, design, development and continued support.",

  vision:
    "To become a trusted digital solutions partner for ambitious businesses across India and worldwide.",

  whatsappHref:
    "https://wa.me/917200334187?text=Hello%20RR%20RootRise%2C%20I%20would%20like%20to%20discuss%20a%20project.",
};

/* =========================================================
   BRAND ASSET PATHS
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
   GLOBAL CALL TO ACTION CONTENT
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
   HOME PAGE HERO
   ========================================================= */

export const heroContent = {
  eyebrow: "Software & Digital Solutions",

  title: "Digital Solutions Built for Real Business Growth.",

  description:
    "We create professional websites, mobile applications, e-commerce platforms and custom digital solutions designed around real business needs.",

  supportingText:
    "Strategy, design, development, digital growth and continued support in one reliable partnership.",

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
      "Understanding your business, audience, requirements and long-term digital goals.",
  },
  {
    id: "design",
    number: "02",
    icon: "design",
    title: "Design",
    description:
      "Creating clear, professional and user-focused digital experiences.",
  },
  {
    id: "development",
    number: "03",
    icon: "development",
    title: "Development",
    description:
      "Building responsive, reliable and scalable websites and applications.",
  },
  {
    id: "growth",
    number: "04",
    icon: "growth",
    title: "Growth",
    description:
      "Improving digital visibility, engagement and business opportunities.",
  },
  {
    id: "support",
    number: "05",
    icon: "support",
    title: "Support",
    description:
      "Providing ongoing maintenance, guidance and future improvements.",
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
      "Professional, responsive websites designed to build trust and support real business goals.",

    description:
      "We create modern business websites with clear content structure, professional visual identity, responsive layouts and performance-focused development.",

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
      "User-friendly mobile application experiences designed around customer needs and business workflows.",

    description:
      "We create mobile application solutions that help businesses improve accessibility, customer engagement and everyday digital operations.",

    features: [
      "Business mobile applications",
      "Customer-facing applications",
      "Mobile ordering experiences",
      "Application dashboards",
      "Progressive web applications",
      "Responsive mobile experiences",
    ],
  },

  {
    id: "ecommerce-solutions",
    number: "03",
    icon: "commerce",
    title: "E-commerce Solutions",
    shortTitle: "E-commerce",

    summary:
      "Modern online shopping platforms with smooth product discovery, checkout and order experiences.",

    description:
      "We develop e-commerce solutions that help businesses manage products, customers, payments, orders and delivery workflows.",

    features: [
      "Product catalogues",
      "Search and filtering",
      "Shopping cart",
      "Checkout experience",
      "Payment integration",
      "Customer accounts",
      "Order management",
      "Admin dashboards",
    ],
  },

  {
    id: "custom-web-applications",
    number: "04",
    icon: "application",
    title: "Custom Web Applications",
    shortTitle: "Web Applications",

    summary:
      "Custom web-based systems created to improve business operations and customer experiences.",

    description:
      "We build practical web applications tailored to specific business requirements, internal workflows and operational challenges.",

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
    id: "wordpress-development",
    number: "05",
    icon: "wordpress",
    title: "WordPress Development",
    shortTitle: "WordPress",

    summary:
      "Flexible and manageable WordPress websites for businesses and content-focused brands.",

    description:
      "We create responsive WordPress websites with professional layouts, manageable content and business-focused functionality.",

    features: [
      "Business WordPress websites",
      "Content-managed websites",
      "Landing pages",
      "Blog websites",
      "WordPress redesign",
      "WordPress maintenance",
    ],
  },

  {
    id: "ui-ux-design",
    number: "06",
    icon: "design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",

    summary:
      "Clear and intuitive digital interfaces designed around real users and business objectives.",

    description:
      "We plan and design professional website and application interfaces that improve clarity, usability and visual consistency.",

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
    number: "07",
    icon: "search",
    title: "SEO",
    shortTitle: "SEO",

    summary:
      "Search-friendly website foundations designed to help customers discover your business.",

    description:
      "We improve website structure, metadata, content organisation and performance foundations to support stronger organic visibility.",

    features: [
      "Technical website structure",
      "Page titles and descriptions",
      "Search-friendly content structure",
      "Performance optimisation",
      "Local SEO foundations",
      "Search visibility support",
    ],
  },

  {
    id: "digital-marketing",
    number: "08",
    icon: "marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",

    summary:
      "Practical digital marketing support designed to improve brand reach and business enquiries.",

    description:
      "We help businesses strengthen their online presence through clear strategies, content direction and performance-focused campaigns.",

    features: [
      "Digital strategy",
      "Social media guidance",
      "Campaign planning",
      "Content direction",
      "Audience engagement",
      "Performance monitoring",
    ],
  },

  {
    id: "maintenance-support",
    number: "09",
    icon: "support",
    title: "Maintenance & Support",
    shortTitle: "Support",

    summary:
      "Reliable ongoing support that keeps digital platforms updated and performing effectively.",

    description:
      "We provide continued technical assistance, maintenance and improvements after the initial website or application launch.",

    features: [
      "Content updates",
      "Bug fixing",
      "Performance checks",
      "Security updates",
      "Feature improvements",
      "Technical support",
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
    title: "Retail & E-commerce",
    description:
      "Online stores, product catalogues, customer accounts, order management and digital shopping experiences.",
  },
  {
    id: "food-hospitality",
    icon: "food",
    title: "Food & Hospitality",
    description:
      "Restaurant websites, cloud-kitchen ordering, digital menus, bookings and delivery workflows.",
  },
  {
    id: "professional-services",
    icon: "business",
    title: "Professional Services",
    description:
      "Digital platforms for consultants, agencies, accountants and professional service businesses.",
  },
  {
    id: "education",
    icon: "education",
    title: "Education",
    description:
      "Course websites, student portals, enquiry systems and digital learning experiences.",
  },
  {
    id: "healthcare",
    icon: "healthcare",
    title: "Healthcare",
    description:
      "Professional information websites, appointment experiences and digital platforms for healthcare providers.",
  },
  {
    id: "startups",
    icon: "launch",
    title: "Startups",
    description:
      "Launch-ready websites, applications, dashboards and scalable digital foundations.",
  },
  {
    id: "local-businesses",
    icon: "location",
    title: "Local Businesses",
    description:
      "Professional digital solutions for shops, service providers and growing regional businesses.",
  },
  {
    id: "personal-brands",
    icon: "brand",
    title: "Personal Brands",
    description:
      "Professional websites and digital experiences for creators, consultants and industry experts.",
  },
];

/* =========================================================
   PROJECT APPROACH
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
    id: "plan",
    number: "02",
    title: "Plan",
    description:
      "We define the project scope, content structure, features and delivery direction.",
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    description:
      "We create a professional visual system and user experience aligned with your business.",
  },
  {
    id: "develop",
    number: "04",
    title: "Develop",
    description:
      "We build the solution with responsive layouts, stable functionality and maintainable structure.",
  },
  {
    id: "launch-support",
    number: "05",
    title: "Launch & Support",
    description:
      "We test, refine and launch the solution, then support future updates and improvements.",
  },
];

/* =========================================================
   WHY RR ROOTRISE
   ========================================================= */

export const advantages = [
  {
    id: "business-focused",
    icon: "strategy",
    title: "Business-Focused Planning",
    description:
      "Every project begins with business goals, audience needs and practical requirements.",
  },
  {
    id: "clear-communication",
    icon: "communication",
    title: "Clear Communication",
    description:
      "Project requirements, progress and next steps are communicated clearly.",
  },
  {
    id: "responsive-design",
    icon: "responsive",
    title: "Responsive Experiences",
    description:
      "Digital experiences are designed to work clearly across mobile, tablet and desktop devices.",
  },
  {
    id: "scalable-solutions",
    icon: "scalable",
    title: "Scalable Solutions",
    description:
      "Solutions are structured to support future improvements and changing business requirements.",
  },
  {
    id: "performance",
    icon: "performance",
    title: "Performance Focus",
    description:
      "We focus on efficient assets, reliable functionality and smooth user experiences.",
  },
  {
    id: "long-term-support",
    icon: "support",
    title: "Continued Support",
    description:
      "We provide assistance, maintenance and guidance beyond the initial launch.",
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
    title: "Practical Innovation",
    description:
      "Modern ideas applied to meaningful business requirements.",
  },
  {
    number: "04",
    title: "Business Value",
    description:
      "Every decision should support a useful business outcome.",
  },
  {
    number: "05",
    title: "Long-Term Support",
    description:
      "Building relationships that continue beyond the initial launch.",
  },
];

/* =========================================================
   CONTACT FORM
   ========================================================= */

export const contactFormConfig = {
  formName: "rr-rootrise-project-enquiry",

  title: "Tell Us About Your Project",

  description:
    "Share your business requirement, project idea or current digital challenge. We will review the details and respond through email.",

  submitLabel: "Submit Project Enquiry",

  serviceOptions: services.map((service) => service.title),

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
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/rrrootrise.digital/",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591678246723",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rr-rootrise-digital-innovations/",
  },
  {
    id: "threads",
    label: "Threads",
    href: "https://www.threads.com/@rrrootrise.digital",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/rrrootrise_",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@RRRootRiseDigitalInnovations",
  },
];

/* =========================================================
   FOOTER LINKS
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

export const footerServiceLinks = [
  {
    label: "Website Development",
    path: "/services#website-development",
  },
  {
    label: "Mobile App Development",
    path: "/services#mobile-app-development",
  },
  {
    label: "E-commerce Solutions",
    path: "/services#ecommerce-solutions",
  },
  {
    label: "Custom Web Applications",
    path: "/services#custom-web-applications",
  },
  {
    label: "UI/UX Design",
    path: "/services#ui-ux-design",
  },
  {
    label: "Digital Marketing",
    path: "/services#digital-marketing",
  },
];

export const legalLinks = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    path: "/terms-of-service",
  },
];

/* =========================================================
   PAGE SEO INFORMATION
   ========================================================= */

export const pageMeta = {
  home: {
    title:
      "RR RootRise Digital Innovations | Software & Digital Solutions",

    description:
      "Professional websites, mobile applications, e-commerce platforms, custom web solutions, design and digital growth services for modern businesses.",
  },

  services: {
    title:
      "Software and Digital Services | RR RootRise Digital Innovations",

    description:
      "Explore website development, mobile app development, e-commerce, custom applications, UI/UX design, SEO, digital marketing and support services.",
  },

  industries: {
    title:
      "Industries We Support | RR RootRise Digital Innovations",

    description:
      "Digital solutions for retail, hospitality, professional services, education, healthcare, startups and growing businesses.",
  },

  about: {
    title:
      "About RR RootRise Digital Innovations",

    description:
      "Learn about the mission, vision, principles and business-focused approach behind RR RootRise Digital Innovations.",
  },

  contact: {
    title:
      "Start a Project | RR RootRise Digital Innovations",

    description:
      "Contact RR RootRise Digital Innovations to discuss your website, mobile application, e-commerce or digital business requirement.",
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