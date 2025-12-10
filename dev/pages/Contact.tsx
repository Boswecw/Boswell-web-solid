import type { Component } from 'solid-js'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

const Contact: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.contact.title}
        description={META_CONFIG.contact.description}
        url={META_CONFIG.contact.url}
        image={META_CONFIG.contact.ogImage}
      />
      <main id="main">
        <section class="contact">
          <h1>Get In Touch</h1>
          <p>Let's discuss your project and how we can help.</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Contact

