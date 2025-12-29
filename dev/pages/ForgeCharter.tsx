import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'

const ForgeCharter: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.forgeCharter.title}
        description={META_CONFIG.forgeCharter.description}
        url={META_CONFIG.forgeCharter.url}
        image={META_CONFIG.forgeCharter.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>Forge Charter</h1>
          <p class="text-lg">Public commitments for product boundaries and governance intent.</p>
        </section>

        <div class="container-center max-w-960">
          <Section title="Purpose">
            <div class="card">
              <p>
                This charter sets expectations for how products are presented, what is in scope,
                and how changes are communicated.
              </p>
            </div>
          </Section>

          <Section title="Boundaries">
            <div class="card">
              <ul class="list-bulleted">
                <li>No public claims of completion without evidence.</li>
                <li>No implied access to internal governance tooling.</li>
                <li>Shop listings remain limited and clearly scoped.</li>
              </ul>
            </div>
          </Section>

          <Section title="Governance intent">
            <div class="card">
              <p>
                Products are refactored and reviewed through Forge:SMITH as the governing process.
                Updates are posted only when scope and acceptance criteria are clear.
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default ForgeCharter
