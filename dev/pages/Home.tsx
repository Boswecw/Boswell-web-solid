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

          {/* Founder Section */}
          <Section title="About the Founder" subtitle="Military discipline meets modern software engineering">
            <div class="card">
              <p class="mb-md">
                <strong>Charles Boswell</strong> is a U.S. Navy Veteran (Submariner, Dolphins
                qualified) and 16-year U.S. Forest Service veteran who brings incident command,
                federal contracting, and security expertise to modern software engineering.
              </p>
              <p class="mb-md">
                With roles including Type III Incident Commander, Type II Contracting Officer's
                Representative, and Qualified Security Manager, Charles understands government
                requirements not from a textbook, but from years of field experience and federal
                service.
              </p>
              <p class="mb-md">
                He founded Boswell Digital Solutions to build AI-enabled tools that are dependable,
                pragmatic, and designed for real-world use. Every application in the Forge
                Ecosystem reflects this philosophy: clarity over complexity, genuine help over
                hype, and systems people can genuinely depend on.
              </p>
              <div class="text-center mt-lg">
                <a href="/about">
                  <button class="btn btn-outline">Read Full Story</button>
                </a>
              </div>
            </div>
          </Section>

          {/* Why Choose Us */}
          <Section title="Why Choose Boswell Digital Solutions">
            <div class="grid-2">
              <div class="card">
                <h4 class="h4">Federal Experience</h4>
                <p class="text-sm">
                  16+ years of federal service means we understand how agencies actually operate,
                  what compliance really means, and how to build systems that meet mission
                  requirements.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Military Discipline</h4>
                <p class="text-sm">
                  Submarine service taught precision, accountability, and systems thinking—qualities
                  that define our approach to software development and client partnerships.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Small & Responsive</h4>
                <p class="text-sm">
                  Direct access to the founder and principal engineer. No account managers, no
                  bureaucracy—just clear communication and reliable delivery.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Mission-Focused</h4>
                <p class="text-sm">
                  We build for impact, not just revenue. Service-disabled veteran-owned business
                  committed to supporting agencies and organizations that make a difference.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Home
