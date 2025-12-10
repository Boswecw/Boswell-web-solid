import type { Component } from 'solid-js'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

const Portfolio: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.portfolio.title}
        description={META_CONFIG.portfolio.description}
        url={META_CONFIG.portfolio.url}
        image={META_CONFIG.portfolio.ogImage}
      />
      <main id="main">
        <section class="portfolio">
          <h1>Our Portfolio</h1>
          <p>Showcasing our latest projects and success stories.</p>
          <div class="project-grid">
            {/* Projects will be added here */}
          </div>
        </section>
      </main>
    </>
  )
}

export default Portfolio

