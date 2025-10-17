/**
 * Centralized configuration for the application
 * All hardcoded values should be defined here for easy maintenance
 */

export const config = {
  // Business Information
  business: {
    name: "Boswell Digital Solutions LLC",
    owner: "Charles Boswell",
    email: "charlesboswell@boswelldigitalsolutions.com",
    phone: "(859) 436-7304",
    location: "Lexington, Kentucky",
    website: "https://boswelldigitalsolutions.com",
  },

  // Social & External Links
  social: {
    github: "https://github.com/CharlesWBoswell",
    linkedin: "https://www.linkedin.com/in/charles-boswell-0057b1340",
  },

  // Images & Assets
  assets: {
    logo: "https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/siglogo.webp?alt=media&token=43e15d27-e6fa-4f0-b7c4-2972b1c1d03a",
    profileImage: "https://storage.googleapis.com/boswellwebdevsolutionsllc/75C2B6B4-7539-4C70-BB2E-D97E39E038D5.JPG",
  },

  // SEO Defaults
  seo: {
    defaultTitle: "Boswell Digital Solutions LLC",
    defaultDescription: "Veteran-owned digital solutions company in Lexington, KY. Custom React websites, AI integration, and business automation. Starting at $750.",
    defaultKeywords: "digital solutions, react developer, lexington ky, veteran owned business, custom websites, AI integration",
    defaultImage: "https://storage.googleapis.com/boswellwebdevsolutionsllc/75C2B6B4-7539-4C70-BB2E-D97E39E038D5.JPG",
  },

  // Service Packages
  packages: {
    starter: {
      id: "starter",
      name: "Starter Website",
      price: "$900 – $1,500",
      description: "Clean, fast, custom-coded site for portfolios and small businesses.",
      pages: "1–3",
      revisions: "3",
      timeline: "1–2 weeks",
      popular: false,
    },
    business: {
      id: "business",
      name: "Business Website",
      price: "$1,800 – $3,500",
      description: "Marketing site with content tools, integrations, and room to grow.",
      pages: "4–7",
      revisions: "5",
      timeline: "2–3 weeks",
      popular: true,
    },
    ecommerce: {
      id: "ecommerce",
      name: "eCommerce Website",
      price: "$3,000 – $6,000+",
      description: "Modern storefront with secure checkout, inventory, and order management.",
      pages: "5–10+",
      revisions: "Unlimited",
      timeline: "3–5 weeks",
      popular: false,
    },
  },
} as const;

