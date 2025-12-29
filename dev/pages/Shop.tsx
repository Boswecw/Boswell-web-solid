import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'
import { SHOP_PRODUCTS } from '../config/shop'

const Shop: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.shop.title}
        description={META_CONFIG.shop.description}
        url={META_CONFIG.shop.url}
        image={META_CONFIG.shop.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>Shop</h1>
          <p class="text-lg">Bounded storefront for limited digital resources and services.</p>
        </section>

        <div class="container-center max-w-960">
          <Section title="Scope">
            <div class="card">
              <p class="mb-md">
                The shop lists discrete items only. It does not sell access, authority, or
                unfinished systems.
              </p>
              <p>
                This product does not grant access to ForgeCommand, Forge:SMITH, or internal
                governance systems.
              </p>
            </div>
          </Section>

          <Section title="Current listings" subtitle="Product pages link to detailed scope and terms.">
            <div class="grid-2">
              {SHOP_PRODUCTS.map((product) => (
                <div class="card">
                  <h2 class="h4">{product.name}</h2>
                  <p class="text-sm text-muted">{product.summary}</p>
                  <p class="text-sm mt-sm">{product.priceNote}</p>
                  <div class="text-center mt-lg">
                    <a href={`/shop/${product.slug}`}>
                      <button class="btn btn-outline">View details</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Shop
