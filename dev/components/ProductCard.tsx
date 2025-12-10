import { Component } from 'solid-js'

/**
 * Props for the ProductCard component
 */
interface ProductCardProps {
  /** Product name (displayed as card heading) */
  name: string
  /** Short tagline or slogan */
  tagline: string
  /** Detailed product description */
  description: string
  /** Primary call-to-action link URL */
  href: string
  /** Optional target audience description */
  audience?: string
  /** Optional primary button text (default: "Learn more") */
  ctaLabel?: string
  /** Optional secondary button text (default: "Contact") */
  ctaSecondaryLabel?: string
  /** Optional secondary button link URL (shows button only if provided) */
  ctaSecondaryHref?: string
}

/**
 * Product card component for displaying application information
 *
 * @component
 * @description
 * A styled card component for showcasing products and applications in the Forge Ecosystem.
 * Features a header with name and tagline, description text, optional audience indicator,
 * and up to two call-to-action buttons (primary and secondary).
 *
 * @param {ProductCardProps} props - Component props
 * @param {string} props.name - Product name (e.g., "VibeForge")
 * @param {string} props.tagline - Short tagline (e.g., "AI Prompt Engineering Made Easy")
 * @param {string} props.description - Full product description
 * @param {string} props.href - Primary CTA link (e.g., "/apps/vibeforge")
 * @param {string} [props.audience] - Target users (e.g., "Developers, Writers, Students")
 * @param {string} [props.ctaLabel="Learn more"] - Primary button text
 * @param {string} [props.ctaSecondaryLabel="Contact"] - Secondary button text
 * @param {string} [props.ctaSecondaryHref] - Secondary button link (button hidden if not provided)
 *
 * @features
 * - Responsive card layout with hover effects
 * - Automatic button generation from props
 * - Optional secondary CTA (contact, demo, etc.)
 * - Audience indicator with muted styling
 * - Professional card shadow and border
 *
 * @example
 * ```tsx
 * // Basic product card with single CTA
 * <ProductCard
 *   name="VibeForge"
 *   tagline="AI Prompt Engineering Made Easy"
 *   description="Design, test, and refine AI prompts with real-time feedback."
 *   href="/apps/vibeforge"
 *   audience="Developers, Writers, Content Creators"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Card with custom CTA labels and secondary action
 * <ProductCard
 *   name="AuthorForge"
 *   tagline="Your Complete Writing Suite"
 *   description="Novel planning, character development, and draft management."
 *   href="/apps/authorforge"
 *   audience="Fiction Writers, Novelists"
 *   ctaLabel="Explore Features"
 *   ctaSecondaryLabel="Request Demo"
 *   ctaSecondaryHref="/contact?product=authorforge"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Minimal card (no audience, single CTA)
 * <ProductCard
 *   name="Leopold"
 *   tagline="Discover Nature & History"
 *   description="Interactive platform for ecological and historical exploration."
 *   href="/apps/leopold"
 * />
 * ```
 *
 * @accessibility
 * - Proper heading hierarchy (h3 for product names)
 * - Semantic HTML structure (div.card wrapper)
 * - Focus-visible states on buttons
 * - High contrast text for readability
 *
 * @see {@link ../styles/components.css Card Styles}
 * @see {@link ProductGrid} for grid layout component
 * @see {@link ProductCardProps} for detailed prop types
 */
export const ProductCard: Component<ProductCardProps> = props => {
  return (
    <div class="card">
      <div class="card-header">
        <h3 class="h3">{props.name}</h3>
        {props.tagline && <p class="card-tagline">{props.tagline}</p>}
      </div>
      <p class="card-description">{props.description}</p>
      {props.audience && (
        <p class="card-audience text-muted text-sm">For: {props.audience}</p>
      )}
      <div class="card-actions mt-md flex gap-sm flex-wrap">
        <a href={props.href}>
          <button class="btn btn-primary">{props.ctaLabel || 'Learn more'}</button>
        </a>
        {props.ctaSecondaryHref && (
          <a href={props.ctaSecondaryHref}>
            <button class="btn btn-outline">
              {props.ctaSecondaryLabel || 'Contact'}
            </button>
          </a>
        )}
      </div>
    </div>
  )
}
