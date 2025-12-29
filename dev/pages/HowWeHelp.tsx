import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'

const HowWeHelp: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.howWeHelp.title}
        description={META_CONFIG.howWeHelp.description}
        url={META_CONFIG.howWeHelp.url}
        image={META_CONFIG.howWeHelp.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>How We Help</h1>
          <p class="text-lg">Disciplined delivery for websites and custom applications.</p>
        </section>

        <div class="container-center max-w-960">
          <Section title="Opening statement">
            <div class="card">
              <p class="mb-md">
                We help people build and improve websites and custom applications.
              </p>
              <p class="mb-md">
                We prioritize clarity, boundaries, and survivability over speed.
              </p>
              <p>We work best when scope can be made explicit.</p>
            </div>
          </Section>

          <Section title="What we help with">
            <div class="grid-2">
              <div class="card">
                <h2 class="h4">Websites</h2>
                <ul class="list-bulleted">
                  <li>New websites built from scratch</li>
                  <li>Refactors of existing websites</li>
                  <li>Cleanup of legacy or inconsistent systems</li>
                  <li>Documentation-first rebuilds</li>
                  <li>Performance, structure, and reliability improvements</li>
                </ul>
              </div>
              <div class="card">
                <h2 class="h4">Custom applications</h2>
                <ul class="list-bulleted">
                  <li>Internal tools</li>
                  <li>Line-of-business applications</li>
                  <li>Carefully constrained AI-assisted features</li>
                  <li>Prototypes intended to become real systems</li>
                  <li>Refactors of existing custom software</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="How we work">
            <div class="card">
              <ol class="list-numbered">
                <li>Scope and boundary definition</li>
                <li>Build or refactor</li>
                <li>Review</li>
                <li>Acceptance</li>
              </ol>
              <p class="text-sm mt-md">
                Work is checked, tested, and reviewed by a human before release.
              </p>
            </div>
          </Section>

          <Section title="When we're a good fit">
            <div class="card">
              <p class="mb-md">
                We are a good fit when you want clarity, conservative delivery, and a predictable
                path from scope to acceptance.
              </p>
              <p>
                We do not start with assumptions. We start with boundaries and evidence, then
                build what can be supported.
              </p>
            </div>
          </Section>

          <Section title="Public expectations">
            <div class="card">
              <ul class="list-bulleted">
                <li>We don't rush unclear work</li>
                <li>We require a decision-maker</li>
                <li>We don't ship autonomous AI without human review</li>
                <li>We don't take open-ended engagements without defined scope</li>
              </ul>
            </div>
          </Section>

          <Section title="Start an engagement request">
            <div class="card">
              <p class="mb-md">
                If this approach fits, you can submit a short intake request.
              </p>
              <div class="text-center mt-lg">
                <a href="/intake">
                  <button class="btn btn-primary">Start an Engagement Request</button>
                </a>
              </div>
            </div>
          </Section>

          <Section title="Closing statement">
            <div class="card">
              <p>
                We work deliberately and carefully, and we work best with clients who value
                clarity.
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default HowWeHelp
