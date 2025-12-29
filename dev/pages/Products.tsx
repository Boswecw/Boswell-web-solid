import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'

const Products: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.products.title}
        description={META_CONFIG.products.description}
        url={META_CONFIG.products.url}
        image={META_CONFIG.products.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>Products</h1>
          <p class="text-lg">A conservative, factual view of what is in scope today.</p>
        </section>

        <div class="container-center max-w-960">
          <Section title="Current product" subtitle="Status and boundaries are explicit.">
            <div class="card">
              <h2 class="h3">VibeForge 1.0</h2>
              <p class="mb-md">
                VibeForge 1.0 is in active development. It is not finished and will be refactored
                via Forge:SMITH.
              </p>
              <p class="mb-md">
                This product does not grant access to ForgeCommand, Forge:SMITH, or internal
                governance systems.
              </p>
              <div class="text-center mt-lg">
                <a href="/products/vibeforge">
                  <button class="btn btn-primary">View VibeForge 1.0</button>
                </a>
              </div>
            </div>
          </Section>

          <Section title="Future listings" subtitle="Additional products will be posted here.">
            <div class="card">
              <p>
                Product listings remain limited and are updated only when scope, boundaries, and
                delivery posture are clear.
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Products
