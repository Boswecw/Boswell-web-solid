import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import { ProductGrid } from '../components/ProductGrid'
import { APPS } from '../config/apps'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'

const Home: Component = () => {
  // Show featured apps (developer tools) on home page
  const featuredApps = APPS.filter(app => app.category === 'developer-tools').slice(0, 3)

  return (
    <>
      <Seo
        title={META_CONFIG.home.title}
        description={META_CONFIG.home.description}
        url={META_CONFIG.home.url}
        image={META_CONFIG.home.ogImage}
      />
      <JsonLd />
      <main id="main">
        <section class="hero">
          <h1>Boswell Digital Solutions</h1>
          <p class="text-xl font-medium mt-md">
            Building human-centered AI and web software for developers, authors, and public
            agencies.
          </p>
          <p class="text-lg text-muted mt-sm">
            Veteran-owned, government-grade, AI-powered tools — designed from real field and
            federal experience.
          </p>
        </section>

        <div class="container-center max-w-1280">
          <Section
            title="Applications"
            subtitle="Tools for developers, authors, and public agencies."
          >
            <ProductGrid products={featuredApps} columns={3} />
            <div class="text-center mt-xl">
              <a href="/apps">
                <button class="btn btn-primary">View All Applications</button>
              </a>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Home

