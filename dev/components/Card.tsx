import type { Component, JSX } from 'solid-js'
import { StatusChip } from './StatusChip'

interface CardProps {
  /** Optional media content (image, icon, etc.) */
  media?: JSX.Element
  /** Optional muted text shown above the title */
  eyebrow?: string
  /** Primary heading for the card */
  title?: string
  /** Secondary heading or tagline */
  subtitle?: string
  /** Optional status label rendered opposite the heading */
  chip?: string
  /** Actionable content or CTA buttons */
  actions?: JSX.Element
  /** CSS class overrides */
  class?: string
  /** Card body */
  children: JSX.Element
}

export const Card: Component<CardProps> = props => {
  const hasHeader = Boolean(props.eyebrow || props.title || props.subtitle || props.chip)

  return (
    <article class={`page-card ${props.class ?? ''}`}>
      {props.media && <figure class="page-card__media">{props.media}</figure>}
      {hasHeader && (
        <header class="page-card__header">
          <div class="page-card__header-content">
            {props.eyebrow && <p class="page-card__eyebrow">{props.eyebrow}</p>}
            {props.title && <h3 class="page-card__title">{props.title}</h3>}
            {props.subtitle && <p class="page-card__subtitle">{props.subtitle}</p>}
          </div>
          {props.chip && <StatusChip class="page-card__chip">{props.chip}</StatusChip>}
        </header>
      )}
      <div class="page-card__body">{props.children}</div>
      {props.actions && <div class="page-card__actions">{props.actions}</div>}
    </article>
  )
}
