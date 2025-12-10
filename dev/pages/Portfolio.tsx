import type { Component } from 'solid-js'
import { Section } from '../components/Section'
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
        <div class="hero">
          <h1>Our Portfolio</h1>
          <p class="text-lg">
            Showcasing real-world projects, success stories, and the impact of our work.
          </p>
        </div>

        <div class="container-center max-w-960">
          <Section title="Featured Projects">
            <div class="card text-center">
              <h3 class="h3">Portfolio Coming Soon</h3>
              <p class="mt-md mb-md text-lg">
                We're currently documenting case studies and project highlights. Check back soon to see our work in action.
              </p>
              <p class="text-sm text-muted">
                In the meantime, explore the{' '}
                <a href="/apps" class="text-primary">
                  Forge Ecosystem applications
                </a>
                {' '}or{' '}
                <a href="/contact" class="text-primary">
                  contact us
                </a>
                {' '}to discuss your project.
              </p>
            </div>
          </Section>

          <Section title="What We Build">
            <div class="grid-2">
              <div class="card">
                <h4 class="h4">SaaS Applications</h4>
                <p class="text-sm">
                  Custom web applications for developers, authors, agencies, and businesses—built with modern frameworks and cloud-native architecture.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">AI-Powered Tools</h4>
                <p class="text-sm">
                  Intelligent automation and workflow optimization solutions that amplify human capability with artificial intelligence.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Government Systems</h4>
                <p class="text-sm">
                  Section 508-compliant platforms for federal, state, and local agencies—environmental data, GIS integration, and compliance tools.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Data Platforms</h4>
                <p class="text-sm">
                  Field data collection, analysis, and visualization systems for ecology, tourism, and public mission organizations.
                </p>
              </div>
            </div>
          </Section>

          <Section>
            <div class="card text-center">
              <h3 class="h3">Let's Build Together</h3>
              <p class="mt-md mb-md">
                Ready to start your project? We'd like to hear about your goals and how we can help achieve them.
              </p>
              <a href="/contact">
                <button class="btn btn-primary">Discuss Your Project</button>
              </a>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Portfolio

