import type { Component } from 'solid-js'
import { For } from 'solid-js'
import Seo from '../components/Seo'
import { PageShell } from '../components/PageShell'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { ProductFeature } from '../components/ProductFeature'
import { META_CONFIG } from '../config/meta'

const productFeatures = [
  {
    name: 'VibeForge 1.0',
    status: 'Active Development',
    description:
      'VibeForge 1.0 is in active development under Forge:SMITH governance. It remains scoped to signal refinement, not shipping, and internal systems such as ForgeCommand and Forge:SMITH access are not part of this public release.',
    imageSrc: '/assets/VibeForge-1.webp',
    imageAlt: 'Cinematic VibeForge interface with forge-inspired lighting',
    linkLabel: 'View VibeForge 1.0',
    linkHref: '/products/vibeforge'
  },
  {
    name: 'AuthorForge Research',
    status: 'Governed / Internal',
    description:
      'AuthorForge is a research track for creative tooling that remains internal until documented boundaries and governance align with public release standards.',
    imageSrc: '/assets/AuthorForge.webp',
    imageAlt: 'Atmospheric AuthorForge concept visualization',
    linkLabel: 'Status summary',
    linkHref: '/contact?topic=authorforge',
    secondaryLinkLabel: 'Request updates',
    secondaryLinkHref: '/contact'
  }
]

const Products: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.products.title}
        description={META_CONFIG.products.description}
        url={META_CONFIG.products.url}
        image={META_CONFIG.products.ogImage}
      />
      <PageShell>
        <PageHero
          id="products-hero"
          eyebrow="Product status"
          title="Products"
          subtitle="A conservative, factual view of what is in scope today."
          description="We publish only what is ready for public scrutiny and we flag boundaries clearly so expectations align."
          actions={
            <a class="btn btn-outline" href="/contact">
              Request Product Status
            </a>
          }
        />

        <Section title="Product features" subtitle="Cinematic imagery with restrained status clarity.">
          <For each={productFeatures}>
            {(feature, index) => (
              <ProductFeature
                name={feature.name}
                status={feature.status}
                description={feature.description}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                linkLabel={feature.linkLabel}
                linkHref={feature.linkHref}
                secondaryLinkLabel={feature.secondaryLinkLabel}
                secondaryLinkHref={feature.secondaryLinkHref}
                reverse={index() % 2 === 1}
              />
            )}
          </For>
        </Section>
      </PageShell>
    </>
  )
}

export default Products
