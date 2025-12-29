import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import { QualityMarkBlock } from '../components/QualityMarkBlock'
import Seo from '../components/Seo'
import { META_CONFIG } from '../config/meta'

const About: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.about.title}
        description={META_CONFIG.about.description}
        url={META_CONFIG.about.url}
        image={META_CONFIG.about.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>About</h1>
          <p class="text-lg">
            Boswell Digital Solutions is a veteran-owned studio focused on governed software
            delivery and careful refactors.
          </p>
        </section>

        <div class="container-center max-w-960">
          <Section title="Operating approach">
            <div class="card">
              <p class="mb-md">
                We publish conservative product status, explicit boundaries, and clear acceptance
                checks. Scope is documented before we claim readiness.
              </p>
              <p>
                This public site is the authoritative surface for product status, shop boundaries,
                and contact.
              </p>
            </div>
          </Section>

          <QualityMarkBlock variant="tiny" inlineHeader={true} />

          <Section title="Founder">
            <div class="card">
              <p class="mb-md">
                Charles Boswell is a U.S. Navy Veteran and former U.S. Forest Service professional.
                His background includes incident command, contracting oversight, and security
                management.
              </p>
              <p>
                The studio is based in Lexington, Kentucky and operates as a Service-Disabled
                Veteran-Owned Small Business (SDVOSB).
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default About
