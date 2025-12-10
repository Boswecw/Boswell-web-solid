import { Component, For } from 'solid-js'
import { ProductCard } from './ProductCard'
import type { App } from '../config/apps'

interface ProductGridProps {
  products: App[]
  columns?: 2 | 3
}

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
