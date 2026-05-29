import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'

const philosophyPoints = [
  'Software as infrastructure, not marketing copy.',
  'Understandable, auditable, maintainable systems.',
  'AI is a tool, never an authority.',
  'Human ownership and responsibility anchor every release.'
]

const pillarData = [
  { title: 'Pressure', detail: 'Built for real-world constraints' },
  { title: 'Craft', detail: 'Deliberate design over shortcuts' },
  { title: 'Endurance', detail: 'Systems meant to last' }
]

const howWeBuildList = [
  'Architecture before implementation',
  'Governance and security from day one',
  'Decisions documented, not guessed',
  'AI-assisted, human-directed workflows',
  'Long-term maintenance considered at design time'
]

const fitFilter = {
  good: ['value clarity and ownership', 'long-term products/systems', 'maintainability matters'],
  not: ['rush jobs without governance', '"just ship it" culture', 'AI-as-magic expectations']
}

const Home: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.home.title}
        description={META_CONFIG.home.description}
        url={META_CONFIG.home.url}
        image={META_CONFIG.home.ogImage}
      />
      <JsonLd />
      <main id="main" class="home-shell">
        <section class="home-hero" aria-labelledby="hero-heading">
          <div class="home-hero__inner">
            <img
              class="home-hero__image"
              src="/forge/assets/forge-wordmark.png"
              alt="Forge wordmark"
              loading="eager"
            />
            <div class="home-hero__text" id="hero-heading">
              <p class="home-hero__tagline">Software built to endure real pressure.</p>
              <a class="btn home-hero__cta" href="#how-we-work">
                How We Work
              </a>
            </div>
          </div>
        </section>
        <div class="home-hero-divider" aria-hidden="true"></div>

        <section class="home-section" aria-labelledby="philosophy-heading">
          <div class="home-section__wrapper">
            <h2 id="philosophy-heading">The Philosophy</h2>
            <div class="home-section__copy">
              <For each={philosophyPoints}>{point => <p>{point}</p>}</For>
            </div>
          </div>
        </section>

        <section class="home-section home-section--border" aria-labelledby="anvil-heading">
          <div class="home-section__wrapper">
            <h2 id="anvil-heading">Why the Anvil</h2>
            <div class="pillar-grid">
              <For each={pillarData}>
                {(pillar) => (
                  <article class="pillar">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.detail}</p>
                  </article>
                )}
              </For>
            </div>
          </div>
        </section>

        <section class="home-section" aria-labelledby="how-we-build-heading" id="how-we-work">
          <div class="home-section__wrapper">
            <h2 id="how-we-build-heading">How We Build</h2>
            <ul class="home-bullet-list">
              <For each={howWeBuildList}>{step => <li>{step}</li>}</For>
            </ul>
          </div>
        </section>

        <section class="home-section home-section--border" aria-labelledby="fit-filter-heading">
          <div class="home-section__wrapper">
            <h2 id="fit-filter-heading">Fit Filter</h2>
            <div class="fit-grid">
              <div>
                <h3>Good Fit</h3>
                <ul>
                  <For each={fitFilter.good}>{item => <li>{item}</li>}</For>
                </ul>
              </div>
              <div>
                <h3>Not a Fit</h3>
                <ul>
                  <For each={fitFilter.not}>{item => <li>{item}</li>}</For>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="closing-cta" aria-labelledby="closing-cta-heading">
          <div class="closing-cta__wrapper">
            <h2 id="closing-cta-heading">If you're looking for a development partner who treats software like infrastructure, not content, we should talk.</h2>
            <a class="btn btn-outline closing-cta__cta" href="/contact">
              Start a Conversation
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
