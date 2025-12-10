import type { Component } from 'solid-js'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

const Services: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.services.title}
        description={META_CONFIG.services.description}
        url={META_CONFIG.services.url}
        image={META_CONFIG.services.ogImage}
      />
      <main id="main">
        <section class="services">
          <h1>Our Services</h1>
          <div class="service-grid">
            <article>
              <h2>Web Development</h2>
              <p>Fast, modern websites built with the latest technologies.</p>
            </article>
            <article>
              <h2>AI Automation</h2>
              <p>Streamline your business with intelligent automation solutions.</p>
            </article>
            <article>
              <h2>Digital Strategy</h2>
              <p>Strategic guidance for your digital transformation.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default Services

