import type { Component } from 'solid-js'
import { For } from 'solid-js'
import Seo from '../components/Seo'
import { PageShell } from '../components/PageShell'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { META_CONFIG } from '../config/meta'

const services = [
  {
    name: 'Websites',
    description: 'New and refactored websites built with clarity, performance, and maintainability in mind.',
    outcomes: [
      'Discovery and scope definition before any code is written',
      'Documentation-first deliverables so teams can audit decisions',
      'Staged handoffs and acceptance checks',
    ],
    ctaLabel: 'Request website work',
    ctaHref: '/contact?topic=websites'
  },
  {
    name: 'Custom applications',
    description: 'Line-of-business systems and internal portals that stay governed, auditable, and human-owned.',
    outcomes: [
      'Domain-focused architecture guided by documented constraints',
      'AI-assisted features treated as tools, never authorities',
      'Governance reviews before each release',
    ],
    ctaLabel: 'Request application work',
    ctaHref: '/contact?topic=applications'
  },
  {
    name: 'Refactors & governance',
    description: 'Survivable refactors, documentation, and tooling audits that respect existing investments.',
    outcomes: [
      'Gap assessments with explicit boundaries',
      'Templated acceptance and review workflows',
      'Ongoing coaching on maintaining clarity after release',
    ],
    ctaLabel: 'Request governance review',
    ctaHref: '/contact?topic=governance'
  }
]

const HowWeHelp: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.howWeHelp.title}
        description={META_CONFIG.howWeHelp.description}
        url={META_CONFIG.howWeHelp.url}
        image={META_CONFIG.howWeHelp.ogImage}
      />
      <PageShell>
        <PageHero
          eyebrow="Services"
          title="How We Help"
          subtitle="Disciplined delivery for websites and custom applications."
          description="We prioritize clarity, boundaries, and survivability while removing guesswork from each engagement."
        />

        <Section title="Opening statement">
          <Card>
            <p class="mb-md">
              We help organizations build and improve websites and custom applications with governed, auditable practices.
            </p>
            <p class="mb-md">
              We work best when scope can be made explicit so every decision has a clear owner and acceptance criterion.
            </p>
            <p>
              We prioritize survivability over speed and document the boundaries before any code is published.
            </p>
          </Card>
        </Section>

        <Section title="Services" subtitle="Each capability is presented with explicit outcomes.">
          <CardGrid>
            <For each={services}>
              {(service) => (
                <Card
                  title={service.name}
                  subtitle={service.description}
                  actions={
                    <a class="btn btn-outline" href={service.ctaHref}>
                      {service.ctaLabel}
                    </a>
                  }
                >
                  <ul class="list-bulleted">
                    <For each={service.outcomes}>{(outcome) => <li>{outcome}</li>}</For>
                  </ul>
                </Card>
              )}
            </For>
          </CardGrid>
        </Section>

        <Section title="How we work">
          <Card>
            <ol class="list-numbered">
              <li>Scope and boundary definition</li>
              <li>Build or refactor</li>
              <li>Review</li>
              <li>Acceptance</li>
            </ol>
            <p class="text-sm mt-md">
              Work is checked, tested, and reviewed by a human before release.
            </p>
          </Card>
        </Section>

        <Section title="When we're a good fit">
          <Card>
            <p class="mb-md">
              We are a good fit when you want clarity, conservative delivery, and a predictable path from scope to acceptance.
            </p>
            <p>
              We do not start with assumptions. We start with boundaries and evidence, then build what can be supported.
            </p>
          </Card>
        </Section>

        <Section title="Public expectations">
          <Card>
            <ul class="list-bulleted">
              <li>We don't rush unclear work</li>
              <li>We require a decision-maker</li>
              <li>We don't ship autonomous AI without human review</li>
              <li>We don't take open-ended engagements without defined scope</li>
            </ul>
          </Card>
        </Section>

        <Section title="Start an engagement request">
          <Card
            actions={
              <a class="btn btn-primary" href="/intake">
                Start an Engagement Request
              </a>
            }
          >
            <p class="mb-md">
              If this approach fits, submit a short intake request so we can review scope, timing, and acceptance needs.
            </p>
          </Card>
        </Section>

        <Section title="Closing statement">
          <Card>
            <p>We work deliberately and carefully, and we work best with clients who value clarity.</p>
          </Card>
        </Section>
      </PageShell>
    </>
  )
}

export default HowWeHelp
