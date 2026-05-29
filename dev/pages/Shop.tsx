import type { Component } from 'solid-js'
import { For } from 'solid-js'
import Seo from '../components/Seo'
import { PageShell } from '../components/PageShell'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { SHOP_PRODUCTS } from '../config/shop'
import { META_CONFIG } from '../config/meta'

const productImages: Record<string, { src: string; alt: string }> = {
  'forge-prompt-patterns-pack-pro': {
    src: '/assets/VibeForge-1.webp',
    alt: 'VibeForge cinematic forge lighting'
  },
  'governed-refactor-checklist': {
    src: '/assets/AuthorForge.webp',
    alt: 'AuthorForge concept visualization'
  },
  'architecture-review': {
    src: '/assets/Forge_Ecosystem_icon.png',
    alt: 'Forge ecosystem iconography'
  }
}

const Shop: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.shop.title}
        description={META_CONFIG.shop.description}
        url={META_CONFIG.shop.url}
        image={META_CONFIG.shop.ogImage}
      />
      <PageShell>
        <PageHero
          eyebrow="Catalogue"
          title="Shop"
          subtitle="Bounded storefront for limited digital resources and services."
          description="Listings remain limited, explicit, and governed. Each item describes what is included and what it does not grant."
        />

        <Section title="Scope">
          <Card>
            <p class="mb-md">
              The shop surface only lists discrete, bounded items. It does not sell access, authority, or unfinished systems.
            </p>
            <p>
              Each product page spells out boundaries, governance, and delivery posture before any purchase conversation continues.
            </p>
          </Card>
        </Section>

        <Section title="Current listings" subtitle="Product pages describe scope, governance, and terms.">
          <CardGrid>
            <For each={SHOP_PRODUCTS}>
              {(product) => (
                <Card
                  title={product.name}
                  subtitle={product.summary}
                  chip={product.type === 'digital' ? 'Digital' : 'Service'}
                  media={
                    productImages[product.slug] && (
                      <img
                        src={productImages[product.slug].src}
                        alt={productImages[product.slug].alt}
                        loading="lazy"
                      />
                    )
                  }
                  actions={
                    <a class="btn btn-outline" href={`/shop/${product.slug}`}>
                      {product.ctaLabel}
                    </a>
                  }
                >
                  <p class="text-sm text-muted mb-sm">For: {product.forWho}</p>
                  <p class="text-sm text-muted mb-sm">{product.priceNote}</p>
                  <p class="text-sm font-semibold mb-xs">Includes</p>
                  <ul class="list-bulleted">
                    <For each={product.includes}>{(item) => <li>{item}</li>}</For>
                  </ul>
                </Card>
              )}
            </For>
          </CardGrid>
        </Section>
      </PageShell>
    </>
  )
}

export default Shop
