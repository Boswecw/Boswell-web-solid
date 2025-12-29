import type { Component } from 'solid-js'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { Section } from '../components/Section'
import { QualityMarkBlock } from '../components/QualityMarkBlock'

const Home: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.home.title}
        description={META_CONFIG.home.description}
        url={META_CONFIG.home.url}
        image={META_CONFIG.home.ogImage}
      />
      <JsonLd />
      <main id="main">
        <section class="hero">
          <h1>Boswell Digital Solutions</h1>
          <p class="text-xl font-medium mt-md">
            A veteran-owned studio delivering governed software products and careful refactors.
          </p>
          <p class="text-lg text-muted mt-sm">
            This site is the public trust surface for product status, boundaries, and contact.
          </p>
        </section>

        <div class="container-center max-w-1280">
          <QualityMarkBlock />
          <Section
            title="What we deliver"
            subtitle="Bounded products and clear delivery commitments."
          >
            <div class="grid-2">
              <div class="card">
                <h4 class="h4">Product delivery</h4>
                <p class="text-sm">
                  Focused software tools with defined scope, documented boundaries, and
                  conservative claims.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Governed refactors</h4>
                <p class="text-sm">
                  Structured refactoring work with clear stages, acceptance checks, and audit
                  visibility.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Architecture reviews</h4>
                <p class="text-sm">
                  Practical guidance for teams that need a stable, defensible system direction.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Support and contact</h4>
                <p class="text-sm">
                  Direct access to the owner for scoped requests and product questions.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Current product focus" subtitle="Status is conservative and factual.">
            <div class="card">
              <p class="mb-md">
                <strong>VibeForge 1.0</strong> is in active development. It is not finished and
                will be refactored via Forge:SMITH.
              </p>
              <p class="mb-md">
                This site is the authoritative reference for what the product does and does not
                include.
              </p>
              <p class="mb-md">
                Use the product page to review scope, boundaries, and current status.
              </p>
              <div class="text-center mt-lg">
                <a href="/products/vibeforge">
                  <button class="btn btn-outline">View VibeForge 1.0</button>
                </a>
              </div>
            </div>
          </Section>

          <Section title="Shop boundaries">
            <div class="card">
              <p class="mb-md">
                The shop provides limited digital resources and services. It does not sell access
                to internal systems or governance tooling.
              </p>
              <div class="text-center mt-lg">
                <a href="/shop">
                  <button class="btn btn-primary">Visit the shop</button>
                </a>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Home
