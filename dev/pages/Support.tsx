import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'

const Support: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.support.title}
        description={META_CONFIG.support.description}
        url={META_CONFIG.support.url}
        image={META_CONFIG.support.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>Support</h1>
          <p class="text-lg">Request help for scoped products and services.</p>
        </section>

        <div class="container-center max-w-960">
          <Section title="Support scope">
            <div class="card">
              <p>
                Support covers documented products, shop purchases, and active engagements. Requests
                outside scope may be redirected to general contact.
              </p>
            </div>
          </Section>

          <Section title="Response window">
            <div class="card">
              <p>Typical response time is within two business days.</p>
            </div>
          </Section>

          <Section title="Contact">
            <div class="card">
              <p class="mb-md">
                Use the contact form and include relevant order or project details.
              </p>
              <div class="text-center mt-lg">
                <a href="/contact">
                  <button class="btn btn-primary">Contact support</button>
                </a>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Support
