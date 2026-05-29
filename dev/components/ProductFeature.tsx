import type { Component } from 'solid-js'
import { StatusChip } from './StatusChip'

interface ProductFeatureProps {
  name: string
  status: string
  description: string
  imageSrc: string
  imageAlt: string
  linkLabel: string
  linkHref: string
  secondaryLinkLabel?: string
  secondaryLinkHref?: string
  reverse?: boolean
}

export const ProductFeature: Component<ProductFeatureProps> = props => {
  const layoutClass = props.reverse ? ' product-feature--reverse' : ''

  // Keeps imagery and copy aligned in a two-column spread on desktop, stacking on small screens.
  return (
    <article class={`product-feature${layoutClass}`}>
      <figure class="product-feature__media">
        <img src={props.imageSrc} alt={props.imageAlt} loading="lazy" />
      </figure>
      <div class="product-feature__content">
        <header class="product-feature__header">
          <h3 class="product-feature__title">{props.name}</h3>
          <StatusChip class="product-feature__chip">{props.status}</StatusChip>
        </header>
        <p class="product-feature__description">{props.description}</p>
        <div class="product-feature__actions">
          <a class="btn btn-primary" href={props.linkHref}>
            {props.linkLabel}
          </a>
          {props.secondaryLinkHref && props.secondaryLinkLabel && (
            <a class="btn btn-outline" href={props.secondaryLinkHref}>
              {props.secondaryLinkLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
