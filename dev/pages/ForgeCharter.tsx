import type { Component } from 'solid-js'
import Seo from '../components/Seo'
import { PageShell } from '../components/PageShell'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { META_CONFIG } from '../config/meta'

const ForgeCharter: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.forgeCharter.title}
        description={META_CONFIG.forgeCharter.description}
        url={META_CONFIG.forgeCharter.url}
        image={META_CONFIG.forgeCharter.ogImage}
      />
      <PageShell>
        <PageHero
          eyebrow="Governance"
          title="Forge Charter"
          subtitle="Public commitments for product boundaries and governance intent."
          description="This charter documents how product boundaries are communicated, how changes are governed, and how scope is kept explicit."
        />

        <Section title="Purpose">
          <Card>
            <p>
              The Forge Charter sets expectations for how products are presented, what is in scope, and how changes are communicated to the public.
            </p>
          </Card>
        </Section>

        <Section title="Boundaries">
          <Card>
            <ul class="list-bulleted">
              <li>No public claims of completion without documented evidence.</li>
              <li>No implied access to internal governance tooling or authority.</li>
              <li>Shop listings remain limited, scoped, and conservatively presented.</li>
            </ul>
          </Card>
        </Section>

        <Section title="Governance intent">
          <Card>
            <p class="mb-md">
              Products are refactored and reviewed through Forge:SMITH as the governing process. Updates are posted only when scope and acceptance criteria are clear.
            </p>
            <blockquote>
              Decisions are documented, not guessed; transparency means public statements match the stated boundaries.
            </blockquote>
          </Card>
        </Section>
      </PageShell>
    </>
  )
}

export default ForgeCharter
