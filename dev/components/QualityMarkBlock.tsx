import type { Component } from 'solid-js'
import { ForgeSeal } from './ForgeSeal'
import { FORGE_CONFIG } from '../config/forge'

interface QualityMarkBlockProps {
  variant?: 'tagline' | 'tiny'
  inlineHeader?: boolean
}

export const QualityMarkBlock: Component<QualityMarkBlockProps> = (props) => {
  const variant = () => props.variant || 'tagline'
  const inlineHeader = () => props.inlineHeader || false

  return (
    <section class="forge-quality">
      {!inlineHeader() && (
        <div class="forge-quality__seal">
          <ForgeSeal variant={variant()} certified={FORGE_CONFIG.certified} />
        </div>
      )}
      <div class="card forge-quality__content">
        {inlineHeader() ? (
          <div class="quality-header">
            <ForgeSeal variant="tiny" certified={FORGE_CONFIG.certified} />
            <h2 class="h3">What the Anvil Mark Means</h2>
          </div>
        ) : (
          <h2 class="h3">What the Anvil Mark Means</h2>
        )}
        <p class="mb-md">
          The anvil is a promise. When it appears, the work has been checked, tested, and approved
          by a human before release.
        </p>
        <p class="mb-md">
          The mark signals that the work passed governed reviews, documentation, and acceptance checks,
          ensuring it can be audited and maintained instead of being rushed out the door.
        </p>
        <ul class="list-bulleted mb-md">
          <li>Defined rules and safety boundaries</li>
          <li>Tested instead of assumed</li>
          <li>Results can be explained later</li>
          <li>Reviewed and approved by a human</li>
        </ul>
        <p class="text-sm">
          If you see the anvil, it means the work was forged carefully—not rushed, not guessed, and
          not shipped on hope.
        </p>
      </div>
    </section>
  )
}
