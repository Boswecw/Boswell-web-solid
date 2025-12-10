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
  launchStatus?: 'launching-very-soon' | 'coming-2025' | 'mid-2025' | 'late-2025' | 'future'
  launchBadge?: string
  launchPriority?: number
}

export const APPS: App[] = [
  {
    id: 'vibeforge',
    name: 'VibeForge',
    slug: '/apps/vibeforge',
    tagline: 'Your Thinking Partner for Code and Creation',
    shortDescription:
      'Developers need more than syntax completion—they need collaboration, ideation, and ecosystem thinking.',
    fullDescription:
      'VibeForge is your thinking partner for code and creation. AI-assisted brainstorming, code generation, and workflow integration designed for developers who need more than just autocomplete. Built for makers who demand tools that respect their autonomy.',
    audience: 'Developers, AI engineers, solo founders',
    category: 'developer-tools',
    features: [
      'AI-assisted brainstorming and code generation',
      'Community extension ecosystem for customization',
      'Workflow integration with AuthorForge and beyond',
      'Built-in collaboration tools for makers',
    ],
    cta: 'Get Early Access',
    launchStatus: 'launching-very-soon',
    launchBadge: 'Launching Very Soon',
    launchPriority: 1,
  },
  {
    id: 'authorforge',
    name: 'AuthorForge',
    slug: '/apps/authorforge',
    tagline: 'Structure, Inspiration, and Lore at Your Fingertips',
    shortDescription:
      "Writers need systems that don't impose rigid constraints—structure that scales with creativity.",
    fullDescription:
      'AuthorForge is a writing suite designed for authors who need structure without constraints. Story scaffolding, worldbuilding integration, character tracking, and collaborative storytelling tools. Designed to integrate with Livy storytelling and creative inspiration tools.',
    audience: 'Novelists, non-fiction authors, screenwriters',
    category: 'creative-tools',
    features: [
      'Story scaffolding and narrative planning',
      'Worldbuilding integration and lore automation',
      'Character, plot, and scene tracking',
      'Community prompts and collaborative storytelling',
    ],
    cta: 'Join the Waitlist',
    launchStatus: 'coming-2025',
    launchBadge: 'Coming 2025',
    launchPriority: 2,
  },
  {
    id: 'leopold',
    name: 'Leopold',
    slug: '/apps/leopold',
    tagline: 'Wildlife observation, citizen science, and conservation education',
    shortDescription:
      'Wildlife observation, citizen science, and conservation education platform for field teams and agencies.',
    fullDescription:
      'Leopold is named after Aldo Leopold, the father of wildlife ecology. This platform provides field data collection, species tracking, and environmental analysis tools for ecologists, wildlife biologists, and natural resource managers. Built from real field experience to solve real problems.',
    audience: 'Ecologists, wildlife biologists, natural resource managers, field teams',
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
    launchStatus: 'future',
    launchPriority: 5,
  },
  {
    id: 'livy',
    name: 'Livy',
    slug: '/apps/livy',
    tagline: 'Historical, cultural, and ecological storytelling platform',
    shortDescription:
      'Historical, cultural, and ecological storytelling platform connecting communities with their heritage.',
    fullDescription:
      'Livy helps communities preserve and share their cultural heritage. Create interactive historical tours, connect artifacts to locations, and build engaging narratives that bring local history to life. Perfect for historical societies, tourism boards, and cultural organizations.',
    audience: 'Historical societies, tourism boards, cultural organizations, communities',
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
    launchStatus: 'future',
    launchPriority: 6,
  },
  {
    id: 'websafe',
    name: 'WebSafe',
    slug: '/apps/websafe',
    tagline: "Know What's Real. Stay Safe Online.",
    shortDescription:
      'Digital literacy and online safety are public goods. Everyone deserves tools to navigate the internet with confidence.',
    fullDescription:
      'WebSafe provides digital literacy and online safety tools for everyone. Scam detection, misinformation analysis, bot behavior detection, and educational reports. Digital safety should be accessible to all, not just the tech-savvy.',
    audience: 'Everyone, families, small businesses, organizations',
    category: 'developer-tools',
    features: [
      'Scam and misinformation detection',
      'Bot behavior analysis',
      'Educational reports and learning',
      'Personal safety intelligence',
    ],
    cta: 'Sign Up for Launch',
    launchStatus: 'mid-2025',
    launchBadge: 'Mid-2025 — Free',
    launchPriority: 3,
  },
  {
    id: 'moneyai',
    name: 'MoneyAI',
    slug: '/apps/moneyai',
    tagline: "See Where You're Headed, Not Just Where You've Been",
    shortDescription:
      'Personal finance should be calm, visual, and predictive—not anxiety-inducing dashboards.',
    fullDescription:
      "MoneyAI is a predictive personal finance platform that helps you see where you're headed, not just where you've been. Scenario forecasting, visual asset tracking with calm metaphors, bill prediction, and beginner-friendly financial education.",
    audience: 'Everyone, families, individuals planning their financial future',
    category: 'creative-tools',
    features: [
      'Scenario forecasting and "what-if" analysis',
      'Visual asset tracking with calm metaphors (rivers, orbits, bubbles)',
      'Bill prediction and financial forecasting',
      'Beginner-friendly financial education',
    ],
    cta: 'Notify Me',
    launchStatus: 'late-2025',
    launchBadge: 'Late 2025',
    launchPriority: 4,
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
