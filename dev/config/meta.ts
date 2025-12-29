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
    title: 'Boswell Digital Solutions — Public Trust Surface',
    description:
      'Veteran-owned studio delivering governed software products, bounded storefronts, and clear delivery commitments.',
    url: baseUrl,
    ogImage: defaultOgImage,
  },
  products: {
    title: 'Products — Boswell Digital Solutions',
    description:
      'Product overview with conservative status statements and explicit boundaries.',
    url: `${baseUrl}/products`,
    ogImage: defaultOgImage,
  },
  vibeforge: {
    title: 'VibeForge 1.0 — Boswell Digital Solutions',
    description:
      'VibeForge 1.0 status, scope, and boundaries. Not finished and governed by Forge:SMITH.',
    url: `${baseUrl}/products/vibeforge`,
    ogImage: defaultOgImage,
  },
  shop: {
    title: 'Shop — Boswell Digital Solutions',
    description:
      'Bounded storefront for limited digital resources and services.',
    url: `${baseUrl}/shop`,
    ogImage: defaultOgImage,
  },
  forgeCharter: {
    title: 'Forge Charter — Boswell Digital Solutions',
    description:
      'Public charter outlining product boundaries, governance intent, and communication standards.',
    url: `${baseUrl}/forge/charter`,
    ogImage: defaultOgImage,
  },
  forgeEcosystem: {
    title: 'Forge Ecosystem — Boswell Digital Solutions',
    description:
      'Overview of the Forge Ecosystem and how the tools work together under human oversight.',
    url: `${baseUrl}/forge/ecosystem`,
    ogImage: defaultOgImage,
  },
  about: {
    title: 'About — Boswell Digital Solutions',
    description:
      'Background, governance stance, and operating approach for Boswell Digital Solutions.',
    url: `${baseUrl}/about`,
    ogImage: defaultOgImage,
  },
  contact: {
    title: 'Contact — Boswell Digital Solutions',
    description:
      'Contact Boswell Digital Solutions for scoped product and service inquiries.',
    url: `${baseUrl}/contact`,
    ogImage: defaultOgImage,
  },
  support: {
    title: 'Support — Boswell Digital Solutions',
    description:
      'Support information, response windows, and how to request help.',
    url: `${baseUrl}/support`,
    ogImage: defaultOgImage,
  },
  howWeHelp: {
    title: 'How We Help — Boswell Digital Solutions',
    description:
      'Disciplined delivery for websites and custom applications with clear scope and human accountability.',
    url: `${baseUrl}/how-we-help`,
    ogImage: defaultOgImage,
  },
  intake: {
    title: 'Engagement Request — Boswell Digital Solutions',
    description:
      'Client intake form for scoped website and application engagements.',
    url: `${baseUrl}/intake`,
    ogImage: defaultOgImage,
  },
  privacy: {
    title: 'Privacy Policy — Boswell Digital Solutions',
    description:
      'Our privacy policy and data protection practices. Learn how we handle and protect your information.',
    url: `${baseUrl}/privacy`,
    ogImage: defaultOgImage,
  },
  terms: {
    title: 'Terms of Service — Boswell Digital Solutions',
    description:
      'Terms of Service for Boswell Digital Solutions LLC. Read our user agreement, service policies, and legal terms.',
    url: `${baseUrl}/terms`,
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
    'Veteran-owned studio delivering governed software products, bounded storefronts, and careful refactors.',
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
