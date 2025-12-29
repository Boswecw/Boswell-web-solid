export type ShopProductType = 'digital' | 'service'

export interface ShopProduct {
  slug: string
  name: string
  type: ShopProductType
  summary: string
  priceNote: string
  forWho: string
  includes: string[]
  excludes: string[]
  license: string
  refund: string
  ctaLabel: string
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    slug: 'forge-prompt-patterns-pack-pro',
    name: 'Forge Prompt Patterns Pack (Pro)',
    type: 'digital',
    summary: 'Curated prompt patterns for structured ideation and review workflows.',
    priceNote: 'Digital download. Pricing will be posted when checkout is active.',
    forWho: 'Teams and individuals who need consistent prompt scaffolding.',
    includes: [
      'Downloadable prompt pattern library (PDF + text)',
      'Usage notes and workflow examples',
      'Versioned update notes for revisions',
    ],
    excludes: [
      'Access to internal systems or tooling',
      'Live coaching or custom prompts',
      'Ongoing support beyond documented scope',
    ],
    license: 'Single-organization internal use. Redistribution is not permitted.',
    refund: 'Refunds available within 7 days if the download is unused.',
    ctaLabel: 'Request purchase access',
  },
  {
    slug: 'governed-refactor-checklist',
    name: 'Governed Refactor Checklist',
    type: 'digital',
    summary: 'A step-by-step checklist for staged refactors with acceptance gates.',
    priceNote: 'Digital download. Pricing will be posted when checkout is active.',
    forWho: 'Engineering leads planning scoped refactors with audit visibility.',
    includes: [
      'Printable checklist (PDF)',
      'Reference notes for each stage',
      'Template acceptance checklist',
    ],
    excludes: [
      'Engineering execution services',
      'Custom governance policy drafting',
      'Access to internal governance systems',
    ],
    license: 'Single-project use within one organization.',
    refund: 'Refunds available within 7 days if the download is unused.',
    ctaLabel: 'Request purchase access',
  },
  {
    slug: 'architecture-review',
    name: 'Architecture Review (60–90 min)',
    type: 'service',
    summary: 'Live review session focused on system boundaries and next steps.',
    priceNote: 'Scheduling and pricing provided after request.',
    forWho: 'Teams that need a focused architecture readout and next-step guidance.',
    includes: [
      '60–90 minute review call',
      'Pre-read of provided materials',
      'Written summary of findings and next steps',
    ],
    excludes: [
      'Implementation work or hands-on coding',
      'Ongoing advisory retainers',
      'Access to internal governance systems',
    ],
    license: 'Service engagement; no transfer or resale.',
    refund: 'Cancellations accepted up to 48 hours before the session.',
    ctaLabel: 'Request scheduling',
  },
]
