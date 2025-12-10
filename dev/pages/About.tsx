import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import Seo from '../components/Seo'

const About: Component = () => {
  return (
    <>
      <Seo
        title="About — Boswell Digital Solutions"
        description="Learn about Charles Boswell, U.S. Navy Veteran and founder of Boswell Digital Solutions. Building technology that genuinely helps people."
        url="https://boswelldigitalsolutions.com/about"
        image="https://boswelldigitalsolutions.com/og-cover.jpg"
      />
      <main id="main">
        <div class="hero">
          <h1>About Boswell Digital Solutions</h1>
          <p class="text-lg">
            Building technology that genuinely helps people, with discipline and precision from
            military and federal service.
          </p>
        </div>

        <div class="container-center max-w-960">
          {/* At-a-Glance Section */}
          <Section title="At-a-Glance">
            <div class="grid-2">
              <div class="card">
                <h4 class="h4">Federal Service</h4>
                <p class="text-lg font-semibold">16+ years</p>
                <p class="text-sm text-muted">
                  U.S. Forest Service: Incident Command, Security Management, COR
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Military</h4>
                <p class="text-lg font-semibold">U.S. Navy Veteran</p>
                <p class="text-sm text-muted">
                  Submariner, Dolphins qualified, 10% Service-Disabled
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Expertise</h4>
                <p class="text-lg font-semibold">Systems Architecture</p>
                <p class="text-sm text-muted">
                  Incident Command, COR, Security, AI Integration
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Focus Areas</h4>
                <p class="text-lg font-semibold">AI, Ecology, Tourism</p>
                <p class="text-sm text-muted">
                  Building tools for developers, authors, and public agencies
                </p>
              </div>
            </div>
          </Section>

          {/* Founder Story */}
          <Section title="Founder: Charles Boswell">
            <div class="card">
              <h3 class="h3">From Submarines to Software</h3>
              <p class="mb-md">
                Charles Boswell brings a unique perspective to software development, shaped by
                service in the U.S. Navy submarine force and 16+ years in federal land management.
              </p>

              <h4 class="h4 mt-lg">Background</h4>
              <p class="mb-md">
                Raised on a farm, Charles developed an early understanding of systems and how
                things work together. After earning his Dolphins on submarines in the U.S. Navy, he
                transitioned to ecology and biology research, working as a wildlife technician and
                studying natural systems.
              </p>

              <p class="mb-md">
                His federal career with the U.S. Forest Service spanned incident command, security
                management, and contracting officer representative (COR) roles. This experience
                taught him how to build systems that work under pressure, meet strict requirements,
                and genuinely serve their users.
              </p>

              <h4 class="h4 mt-lg">Philosophy</h4>
              <p class="mb-md">
                "Technology should help people, not replace them. The best tools empower users to
                do what they do best, without getting in the way."
              </p>

              <p class="mb-md">
                This philosophy drives every product in the Forge Ecosystem. Whether it's helping
                developers manage prompts, authors organize manuscripts, or agencies track
                environmental data, the goal is always clarity over complexity, and genuine help
                over hype.
              </p>

              <h4 class="h4 mt-lg">Systems Thinking</h4>
              <p>
                From submarine systems to forest ecosystems, Charles learned that everything is
                connected. Good software reflects this reality: it's resilient, adaptable, and
                built to work within larger systems. Military discipline meets ecological
                thinking—precision with perspective.
              </p>
            </div>
          </Section>

          {/* Mission & Values */}
          <Section title="Mission & Values">
            <div class="grid-2">
              <div class="card">
                <h4 class="h4">Clarity over Hype</h4>
                <p>
                  No buzzwords, no overselling. We build what's needed, explain what it does, and
                  deliver what we promise.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Human-Centered AI</h4>
                <p>
                  AI should amplify human capability, not replace people. We build tools that help
                  users do their best work.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Precision & Discipline</h4>
                <p>
                  Military and federal service taught us to build systems that work reliably under
                  pressure.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Resilience & Adaptability</h4>
                <p>
                  Like natural systems, good software evolves and adapts. We build for long-term
                  success, not quick fixes.
                </p>
              </div>
            </div>
          </Section>

          {/* Contact CTA */}
          <Section>
            <div class="card text-center">
              <h3 class="h3">Work With Us</h3>
              <p class="mt-md mb-md">
                Whether you're a government agency, a commercial business, or an individual with a
                project, we'd like to hear from you.
              </p>
              <a href="/contact">
                <button class="btn btn-primary">Get In Touch</button>
              </a>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default About
