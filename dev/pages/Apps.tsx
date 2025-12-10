import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import { ProductGrid } from '../components/ProductGrid'
import { APPS } from '../config/apps'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

const Apps: Component = () => {
  // Group apps by category
  const developerTools = APPS.filter(app => app.category === 'developer-tools')
  const creativeTools = APPS.filter(app => app.category === 'creative-tools')
  const publicMission = APPS.filter(app => app.category === 'public-mission')

  return (
    <>
      <Seo
        title={META_CONFIG.apps.title}
        description={META_CONFIG.apps.description}
        url={META_CONFIG.apps.url}
        image={META_CONFIG.apps.ogImage}
      />
      <main id="main">
        <div class="hero">
          <h1>The Forge Ecosystem</h1>
          <p>
            AI-powered applications built with precision, discipline, and a focus on genuinely
            helping people.
          </p>
        </div>

        <div class="container-center max-w-1280">
          {developerTools.length > 0 && (
            <Section
              title="Developer Tools"
              subtitle="Build better software with AI-powered development tools."
            >
              <ProductGrid products={developerTools} columns={2} />
            </Section>
          )}

          {creativeTools.length > 0 && (
            <Section
              title="Creative Tools"
              subtitle="Empower your creative work with focused, distraction-free applications."
            >
              <ProductGrid products={creativeTools} columns={2} />
            </Section>
          )}

          {publicMission.length > 0 && (
            <Section
              title="Public Mission"
              subtitle="Technology for ecology, culture, and community service."
            >
              <ProductGrid products={publicMission} columns={2} />
            </Section>
          )}
        </div>
      </main>
    </>
  )
}

export default Apps
