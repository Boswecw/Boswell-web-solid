import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { IntakeForm } from '../components/IntakeForm'
import { META_CONFIG } from '../config/meta'

const Intake: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.intake.title}
        description={META_CONFIG.intake.description}
        url={META_CONFIG.intake.url}
        image={META_CONFIG.intake.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>Engagement Request</h1>
          <p class="text-lg">A short screening form to protect clarity on both sides.</p>
        </section>

        <div class="container-center max-w-960">
          <Section title="Before you start">
            <div class="card">
              <p class="mb-md">
                This intake form helps define scope and determine fit. It keeps expectations clear
                before any work begins.
              </p>
              <p class="text-sm">We will reply if this is a fit.</p>
            </div>
          </Section>

          <Section title="Engagement request">
            <div class="card">
              <IntakeForm />
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Intake
