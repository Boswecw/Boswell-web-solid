export interface App {
  id: string
  name: string
  slug: string
  tagline: string
  shortDescription: string
  fullDescription: string
  audience: string
  category: 'developer-tools' | 'creative-tools' | 'public-mission'
  features: string[]
  cta: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
}

export const APPS: App[] = [
  {
    id: 'vibeforge',
    name: 'VibeForge',
    slug: '/apps/vibeforge',
    tagline: 'AI-powered prompt engineering workbench for developers.',
    shortDescription:
      'Organize, iterate, and integrate prompts across models and projects.',
    fullDescription:
      'VibeForge is a comprehensive prompt engineering workbench designed for developers and AI engineers. Organize your prompts, test across multiple AI models, and integrate seamlessly into your development workflow. Built for teams and solo founders who need systematic prompt management.',
    audience: 'Developers, AI engineers, solo founders',
    category: 'developer-tools',
    features: [
      'Prompt organization and versioning',
      'Multi-model testing (GPT, Claude, etc.)',
      'Integration workflows and API support',
      'Team collaboration features',
    ],
    cta: 'Learn more',
    ctaSecondary: 'Contact for teams',
    ctaSecondaryHref: '/contact',
  },
  {
    id: 'authorforge',
    name: 'AuthorForge',
    slug: '/apps/authorforge',
    tagline: 'Desktop-first writing suite for authors.',
    shortDescription:
      'A distraction-free writing environment with powerful organization tools for novelists and non-fiction authors.',
    fullDescription:
      'AuthorForge is a desktop-first writing application built specifically for authors. Manage complex manuscripts, organize research, track characters and timelines, and write without distractions. Designed with input from working authors who need robust tools without the bloat.',
    audience: 'Novelists, non-fiction authors, screenwriters',
    category: 'creative-tools',
    features: [
      'Distraction-free writing mode',
      'Character and timeline tracking',
      'Research organization',
      'Export to multiple formats',
    ],
    cta: 'Learn more',
    ctaSecondary: 'Download beta',
    ctaSecondaryHref: '/contact',
  },
  {
    id: 'leopold',
    name: 'Leopold',
    slug: '/apps/leopold',
    tagline: 'Ecology and environmental data platform.',
    shortDescription:
      'Field data collection and analysis tools for ecologists, researchers, and natural resource managers.',
    fullDescription:
      'Leopold is named after Aldo Leopold, the father of wildlife ecology. This platform provides field data collection, species tracking, and environmental analysis tools for ecologists, wildlife biologists, and natural resource managers. Built from real field experience to solve real problems.',
    audience: 'Ecologists, wildlife biologists, natural resource managers',
    category: 'public-mission',
    features: [
      'Mobile field data collection',
      'Species and habitat tracking',
      'GIS integration',
      'Compliance and reporting tools',
    ],
    cta: 'Learn more',
    ctaSecondary: 'Contact for agencies',
    ctaSecondaryHref: '/contact',
  },
  {
    id: 'livy',
    name: 'Livy',
    slug: '/apps/livy',
    tagline: 'Historical tourism and cultural knowledge platform.',
    shortDescription:
      'Connect communities with their history through interactive maps, tours, and storytelling tools.',
    fullDescription:
      'Livy helps communities preserve and share their cultural heritage. Create interactive historical tours, connect artifacts to locations, and build engaging narratives that bring local history to life. Perfect for historical societies, tourism boards, and cultural organizations.',
    audience: 'Historical societies, tourism boards, cultural organizations',
    category: 'public-mission',
    features: [
      'Interactive historical maps',
      'Self-guided tour creation',
      'Artifact and location linking',
      'Community storytelling tools',
    ],
    cta: 'Learn more',
    ctaSecondary: 'Contact for organizations',
    ctaSecondaryHref: '/contact',
  },
  {
    id: 'websafe',
    name: 'WebSafe',
    slug: '/apps/websafe',
    tagline: 'Web security and monitoring tools.',
    shortDescription:
      'Simple, effective security monitoring for small businesses and organizations.',
    fullDescription:
      'WebSafe provides straightforward security monitoring and protection for small businesses who need enterprise-grade security without enterprise complexity. Monitor your sites, get alerts, and protect your users with tools designed for clarity and ease of use.',
    audience: 'Small businesses, organizations, agencies',
    category: 'developer-tools',
    features: [
      'Website security monitoring',
      'Automated vulnerability scanning',
      'Real-time alerts',
      'Compliance reporting',
    ],
    cta: 'Learn more',
    ctaSecondary: 'Contact for teams',
    ctaSecondaryHref: '/contact',
  },
  {
    id: 'youcanspell',
    name: 'You Can Spell',
    slug: '/apps/youcanspell',
    tagline: 'Spelling and language learning tools.',
    shortDescription:
      'Adaptive spelling and vocabulary building for students and learners.',
    fullDescription:
      'You Can Spell uses adaptive learning techniques to help students master spelling and vocabulary. Built for educators, parents, and self-directed learners who want effective, engaging language tools that actually work.',
    audience: 'Students, educators, parents',
    category: 'creative-tools',
    features: [
      'Adaptive learning algorithms',
      'Progress tracking and reporting',
      'Customizable word lists',
      'Multi-user support for families/classrooms',
    ],
    cta: 'Learn more',
    ctaSecondary: 'Try free',
    ctaSecondaryHref: '/contact',
  },
]
