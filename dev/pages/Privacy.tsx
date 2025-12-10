import type { Component } from 'solid-js'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

const Privacy: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.privacy.title}
        description={META_CONFIG.privacy.description}
        url={META_CONFIG.privacy.url}
        image={META_CONFIG.privacy.ogImage}
      />
      <main id="main">
        <section class="privacy">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <article>
            <h2>Introduction</h2>
            <p>Boswell Digital Solutions LLC ("we" or "us" or "our") operates the boswelldigitalsolutions.com website.</p>
          </article>
          <article>
            <h2>Information Collection and Use</h2>
            <p>We collect information you provide directly to us, such as when you contact us through our website.</p>
          </article>
          <article>
            <h2>Security</h2>
            <p>We take reasonable measures to protect your information from unauthorized access and disclosure.</p>
          </article>
        </section>
      </main>
    </>
  )
}

export default Privacy

