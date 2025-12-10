import { Component, For } from 'solid-js'
import { ProductCard } from './ProductCard'
import type { App } from '../config/apps'

/**
 * Props for the ProductGrid component
 */
interface ProductGridProps {
  /** Array of application objects to display */
  products: App[]
  /** Number of columns in the grid (default: 2) */
  columns?: 2 | 3
}

/**
 * Responsive grid layout for displaying multiple product cards
 *
 * @component
 * @description
 * Renders a grid of ProductCard components from an array of App objects.
 * Supports 2 or 3 column layouts with automatic responsive behavior.
 * Uses SolidJS's `<For>` for efficient list rendering.
 *
 * @param {ProductGridProps} props - Component props
 * @param {App[]} props.products - Array of application data from apps config
 * @param {2 | 3} [props.columns=2] - Grid column count (2 or 3)
 *
 * @features
 * - Responsive grid layout (CSS Grid)
 * - Configurable 2 or 3 column layout
 * - Mobile-first responsive (stacks on small screens)
 * - Efficient rendering with SolidJS `<For>`
 * - Automatic mapping of App data to ProductCard props
 *
 * @example
 * ```tsx
 * import { APPS } from '../config/apps'
 *
 * // Display all apps in 2-column grid
 * <ProductGrid products={APPS} />
 * ```
 *
 * @example
 * ```tsx
 * import { APPS } from '../config/apps'
 *
 * // Display featured apps in 3-column grid
 * const featuredApps = APPS.filter(app => app.featured)
 * <ProductGrid products={featuredApps} columns={3} />
 * ```
 *
 * @example
 * ```tsx
 * // Filter by category
 * const developerTools = APPS.filter(app => app.category === 'developer')
 * <ProductGrid products={developerTools} columns={2} />
 * ```
 *
 * @accessibility
 * - Uses semantic grid layout
 * - Inherits accessibility from ProductCard children
 * - Responsive design for all screen sizes
 *
 * @performance
 * - SolidJS `<For>` provides keyed iteration for efficient updates
 * - Only re-renders cards that change
 * - No unnecessary re-renders on grid resize
 *
 * @see {@link ProductCard} for individual card component
 * @see {@link ../config/apps.ts} for App type definition
 * @see {@link ../styles/utilities.css} for grid classes
 * @see {@link ProductGridProps} for detailed prop types
 */
export const ProductGrid: Component<ProductGridProps> = props => {
  return (
    <div class={`grid-${props.columns || 2}`}>
      <For each={props.products}>
        {app => (
          <ProductCard
            name={app.name}
            tagline={app.tagline}
            description={app.shortDescription}
            href={app.slug}
            audience={app.audience}
            ctaLabel={app.cta}
            ctaSecondaryLabel={app.ctaSecondary}
            ctaSecondaryHref={app.ctaSecondaryHref}
          />
        )}
      </For>
    </div>
  )
}
