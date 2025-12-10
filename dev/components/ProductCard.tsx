import { Component } from 'solid-js'

interface ProductCardProps {
  name: string
  tagline: string
  description: string
  href: string
  audience?: string
  ctaLabel?: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
}

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
