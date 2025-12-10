interface PageMeta {
  title: string
  description: string
  url: string
  ogImage: string
}

interface MetaConfig {
  [key: string]: PageMeta
}

const baseUrl = 'https://boswelldigitalsolutions.com'
const defaultOgImage = `${baseUrl}/og-cover.jpg`

export const META_CONFIG: MetaConfig = {
  home: {
    title: 'Boswell Digital Solutions — Veteran-Owned SaaS Studio',
    description:
      'Building human-centered AI and web software for developers, authors, and public agencies. Veteran-owned, government-grade, AI-powered tools designed from real field and federal experience.',
    url: baseUrl,
    ogImage: defaultOgImage,
  },
  apps: {
    title: 'Applications — Boswell Digital Solutions',
    description:
      'Explore the Forge Ecosystem: AI-powered tools for developers, authors, and public agencies. Built with precision, discipline, and a focus on genuinely helping people.',
    url: `${baseUrl}/apps`,
    ogImage: defaultOgImage,
  },
  services: {
    title: 'Services — Boswell Digital Solutions',
    description:
      'Web development, AI automation, and digital solutions for small businesses. Veteran-owned expertise delivering government-grade quality for commercial clients.',
    url: `${baseUrl}/services`,
    ogImage: defaultOgImage,
  },
  portfolio: {
    title: 'Portfolio — Boswell Digital Solutions',
    description:
      'See our latest projects and case studies showcasing our expertise in web development, AI automation, and digital transformation.',
    url: `${baseUrl}/portfolio`,
    ogImage: defaultOgImage,
  },
  contact: {
    title: 'Contact — Boswell Digital Solutions',
    description:
      'Get in touch with us to discuss your project and digital needs. Located in Lexington, Kentucky. SDVOSB-certified.',
    url: `${baseUrl}/contact`,
    ogImage: defaultOgImage,
  },
  privacy: {
    title: 'Privacy Policy — Boswell Digital Solutions',
    description:
      'Our privacy policy and data protection practices. Learn how we handle and protect your information.',
    url: `${baseUrl}/privacy`,
    ogImage: defaultOgImage,
  },
}

// Organization structured data for home page
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Boswell Digital Solutions LLC',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    'Veteran-owned SaaS studio building human-centered AI and web software for developers, authors, and public agencies.',
  founder: {
    '@type': 'Person',
    name: 'Charles Boswell',
    jobTitle: 'Founder & CEO',
    description: 'U.S. Navy Veteran, Service-Disabled Veteran-Owned Small Business',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lexington',
    addressRegion: 'KY',
    addressCountry: 'US',
  },
  sameAs: [
    // Add social media links when available
  ],
}
