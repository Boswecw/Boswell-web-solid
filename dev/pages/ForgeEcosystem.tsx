import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { QualityMarkBlock } from '../components/QualityMarkBlock'
import { META_CONFIG } from '../config/meta'

const ForgeEcosystem: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.forgeEcosystem.title}
        description={META_CONFIG.forgeEcosystem.description}
        url={META_CONFIG.forgeEcosystem.url}
        image={META_CONFIG.forgeEcosystem.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>Forge Ecosystem</h1>
          <p class="text-lg">
            A collection of tools designed to keep AI safe, useful, and understandable.
          </p>
        </section>

        <div class="container-center max-w-960">
          <QualityMarkBlock />

          <Section title="Ecosystem overview">
            <div class="card">
              <p>
                The Forge Ecosystem brings information in, stores it with provenance, and applies
                controlled AI assistance under human oversight.
              </p>
            </div>
          </Section>

          <Section title="Systems">
            <div class="grid-2">
              <div class="card">
                <h3 class="h4">RAKE</h3>
                <p class="text-sm">
                  Brings information into the system and cleans it up so it can be used
                  responsibly.
                </p>
              </div>
              <div class="card">
                <h3 class="h4">DATAFORGE</h3>
                <p class="text-sm">
                  Stores information in an organized, searchable way and tracks where answers come
                  from.
                </p>
              </div>
              <div class="card">
                <h3 class="h4">CORTEX</h3>
                <p class="text-sm">
                  Helps people find files, documents, and past work quickly.
                </p>
              </div>
              <div class="card">
                <h3 class="h4">NEUROFORGE</h3>
                <p class="text-sm">
                  Controls how AI is used, what it can see, and the rules it must follow.
                </p>
              </div>
              <div class="card">
                <h3 class="h4">FORGEAGENTS</h3>
                <p class="text-sm">
                  Task-focused AI assistants with clear jobs, clear limits, and stop controls.
                </p>
              </div>
              <div class="card">
                <h3 class="h4">FORGE:SMITH</h3>
                <p class="text-sm mb-sm">Internal / Private</p>
                <p class="text-sm">
                  Internal AI development workflow that follows standards, tests its work, and
                  proves results before anything ships. Not publicly available.
                </p>
              </div>
              <div class="card">
                <h3 class="h4">FORGE COMMAND</h3>
                <p class="text-sm mb-sm">Internal / Private</p>
                <p class="text-sm">
                  Human control center where approvals happen, logs are reviewed, and oversight is
                  maintained. Not publicly available.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Contact">
            <div class="card">
              <p class="mb-md">
                For enterprise inquiries or ecosystem questions, use the contact form.
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

export default ForgeEcosystem
