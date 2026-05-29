import type { Component } from 'solid-js'
import { For } from 'solid-js'
import Seo from '../components/Seo'
import { PageShell } from '../components/PageShell'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { QualityMarkBlock } from '../components/QualityMarkBlock'
import { META_CONFIG } from '../config/meta'

const values = [
  {
    title: 'Clarity',
    detail: 'Public status statements are conservative, factual, and tied to documented boundaries.'
  },
  {
    title: 'Governance',
    detail: 'Decisions are human-reviewed, documented, and tied to explicit acceptance criteria.'
  },
  {
    title: 'Endurance',
    detail: 'Products are built to survive real-world pressure, not temporary marketing promises.'
  }
]

const credentials = [
  {
    eyebrow: 'Founder',
    title: 'Charles Boswell',
    subtitle: 'U.S. Navy Veteran & Service-Disabled Veteran-Owned Small Business principal',
    detail:
      'Background includes incident command, contracting oversight, and security management in the public sector.'
  },
  {
    eyebrow: 'Structure',
    title: 'Lexington, Kentucky',
    subtitle: 'SDVOSB entity',
    detail: 'The studio operates under Boswell Digital Solutions LLC with a governed delivery posture.'
  }
]

const About: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.about.title}
        description={META_CONFIG.about.description}
        url={META_CONFIG.about.url}
        image={META_CONFIG.about.ogImage}
      />
      <PageShell>
        <PageHero
          title="About"
          subtitle="Veteran-owned studio focused on governed software delivery."
          description="We document boundaries, state progress conservatively, and treat software as infrastructure."
        />

        <Section title="Operating approach">
          <Card>
            <p class="mb-md">
              We publish conservative product status, explicit boundaries, and clear acceptance checks. Scope is documented before we claim readiness.
            </p>
            <p>
              This public site remains the authoritative surface for product status, shop boundaries, and contact.
            </p>
          </Card>
        </Section>

        <Section class="page-section--border">
          <QualityMarkBlock variant="tiny" inlineHeader={true} />
        </Section>

        <Section title="Values & principles">
          <CardGrid>
            <For each={values}>
              {(value) => <Card title={value.title} subtitle={value.detail} />}
            </For>
          </CardGrid>
        </Section>

        <Section title="Credentials" subtitle="Professional background aligned with public service requirements.">
          <CardGrid>
            <For each={credentials}>
              {(item) => (
                <Card eyebrow={item.eyebrow} title={item.title} subtitle={item.subtitle}>
                  <p>{item.detail}</p>
                </Card>
              )}
            </For>
          </CardGrid>
        </Section>
      </PageShell>
    </>
  )
}

export default About
