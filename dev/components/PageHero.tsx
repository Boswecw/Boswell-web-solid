import type { Component, JSX } from 'solid-js'

interface PageHeroProps {
  /** Hero identifier for aria attributes */
  id?: string
  /** Optional eyebrow text rendered above the title */
  eyebrow?: string
  /** Primary title (renders as h1) */
  title: string
  /** Supporting tagline text */
  subtitle?: string
  /** Detailed paragraph below the subtitle */
  description?: string
  /** Optional media (image, icon) placed above the text block */
  media?: JSX.Element
  /** Custom actions (buttons/links) rendered at the bottom of the hero text */
  actions?: JSX.Element
  /** Additional CSS classes */
  class?: string
}

export const PageHero: Component<PageHeroProps> = props => {
  const heroId = props.id ?? 'page-hero'
  const headingId = `${heroId}-heading`
  const rawEyebrow = props.eyebrow?.trim() || ''
  const normalizedTitle = props.title.trim().toLowerCase()
  const showEyebrow = rawEyebrow && rawEyebrow.toLowerCase() !== normalizedTitle

  return (
    <section
      class={`page-hero ${props.class ?? ''}`}
      id={props.id}
      aria-labelledby={headingId}
    >
      <div class="page-hero__inner">
        {props.media && <div class="page-hero__media">{props.media}</div>}
        <div class="page-hero__text">
        {showEyebrow && <p class="page-hero__eyebrow">{rawEyebrow}</p>}
          <h1 id={headingId} class="page-hero__title">
            {props.title}
          </h1>
          {props.subtitle && <p class="page-hero__tagline">{props.subtitle}</p>}
          {props.description && <p class="page-hero__description">{props.description}</p>}
          {props.actions && <div class="page-hero__actions">{props.actions}</div>}
        </div>
      </div>
      <div class="page-hero-divider" aria-hidden="true"></div>
    </section>
  )
}
