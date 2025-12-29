import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'

const VibeForge: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.vibeforge.title}
        description={META_CONFIG.vibeforge.description}
        url={META_CONFIG.vibeforge.url}
        image={META_CONFIG.vibeforge.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>VibeForge 1.0</h1>
          <p class="text-lg">Status, scope, and boundaries for the current release.</p>
        </section>

        <div class="container-center max-w-960">
          <Section title="Status">
            <div class="card">
              <p class="mb-md">
                VibeForge 1.0 is not finished. It is in active development and will be refactored
                via Forge:SMITH.
              </p>
              <p>
                This product does not grant access to ForgeCommand, Forge:SMITH, or internal
                governance systems.
              </p>
            </div>
          </Section>

          <Section title="What it is">
            <div class="card">
              <p>
                VibeForge 1.0 is a focused tool for structured ideation and code-adjacent workflows.
                It prioritizes predictable behavior over broad feature claims.
              </p>
            </div>
          </Section>

          <Section title="Who it is for">
            <div class="card">
              <p>Developers and technical teams that need a bounded, documented workflow aid.</p>
            </div>
          </Section>

          <Section title="What it is not">
            <div class="card">
              <p>
                It is not a general AI platform, not a replacement for engineering judgment, and
                not a gateway to internal governance tooling.
              </p>
            </div>
          </Section>

          <Section title="Request updates">
            <div class="card">
              <p class="mb-md">
                Use the contact form for scoped questions or to request status updates.
              </p>
              <div class="text-center mt-lg">
                <a href="/contact">
                  <button class="btn btn-primary">Contact</button>
                </a>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default VibeForge
