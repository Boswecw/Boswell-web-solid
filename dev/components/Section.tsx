import { Component, JSX } from 'solid-js'

/**
 * Props for the Section component
 */
interface SectionProps {
  /** Optional section heading (h2) */
  title?: string
  /** Optional subtitle text displayed below title */
  subtitle?: string
  /** Content to render inside the section */
  children: JSX.Element
  /** Optional HTML id attribute for anchor links */
  id?: string
  /** Optional additional CSS classes to apply */
  class?: string
}

/**
 * Reusable content section component with optional title and subtitle
 *
 * @component
 * @description
 * A flexible section wrapper that provides consistent layout and styling for content blocks.
 * Automatically includes a header area when title or subtitle props are provided.
 * Commonly used to organize page content into distinct visual sections.
 *
 * @param {SectionProps} props - Component props
 * @param {string} [props.title] - Section heading text (renders as h2)
 * @param {string} [props.subtitle] - Subtitle text below heading
 * @param {JSX.Element} props.children - Section content
 * @param {string} [props.id] - HTML id for anchor linking (e.g., #features)
 * @param {string} [props.class] - Additional CSS classes to merge with base `.section` class
 *
 * @features
 * - Consistent section styling across all pages
 * - Optional header area (title + subtitle)
 * - Flexible content slot (children)
 * - Support for anchor links via id prop
 * - Extensible via custom CSS classes
 *
 * @example
 * ```tsx
 * // Basic section with title
 * <Section title="About Us">
 *   <p>Company description here...</p>
 * </Section>
 * ```
 *
 * @example
 * ```tsx
 * // Section with title, subtitle, and custom id
 * <Section
 *   title="Our Products"
 *   subtitle="Innovative solutions for modern challenges"
 *   id="products"
 * >
 *   <ProductGrid />
 * </Section>
 * ```
 *
 * @example
 * ```tsx
 * // Section with custom classes (no title)
 * <Section class="bg-alt py-2xl">
 *   <div>Custom content without header</div>
 * </Section>
 * ```
 *
 * @accessibility
 * - Semantic `<section>` element
 * - Proper heading hierarchy (h2 for titles)
 * - Optional id for skip links and anchor navigation
 *
 * @see {@link ../styles/components.css Section Styles}
 * @see {@link SectionProps} for detailed prop types
 */
export const Section: Component<SectionProps> = props => {
  return (
    <section class={`section ${props.class || ''}`} id={props.id}>
      {(props.title || props.subtitle) && (
        <div class="section-header">
          {props.title && <h2 class="h2">{props.title}</h2>}
          {props.subtitle && <p class="section-subtitle">{props.subtitle}</p>}
        </div>
      )}
      {props.children}
    </section>
  )
}
