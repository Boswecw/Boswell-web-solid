import { Component, JSX } from 'solid-js'

/**
 * Shared section wrapper that mirrors the Home page rhythm.
 */
interface SectionProps {
  /** Optional h2 heading text */
  title?: string
  /** Optional descriptive subtitle below the heading */
  subtitle?: string
  /** Section body content */
  children: JSX.Element
  /** Anchor id for intra-page links */
  id?: string
  /** Additional CSS classes appended to the section */
  class?: string
}

/**
 * Reusable section that enforces the page-system layout (max-width wrapper,
 * consistent gap, and header treatment).
 *
 * @see {@link ../styles/page-system.css}
 */
export const Section: Component<SectionProps> = props => {
  return (
    <section class={`page-section ${props.class || ''}`} id={props.id}>
      <div class="page-section__wrapper">
        {(props.title || props.subtitle) && (
          <header class="page-section__header">
            {props.title && <h2 class="page-section__title">{props.title}</h2>}
            {props.subtitle && <p class="page-section__subtitle">{props.subtitle}</p>}
          </header>
        )}
        <div class="page-section__content">{props.children}</div>
      </div>
    </section>
  )
}
