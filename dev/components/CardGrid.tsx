import type { Component, JSX } from 'solid-js'

interface CardGridProps {
  children: JSX.Element
  class?: string
}

export const CardGrid: Component<CardGridProps> = props => {
  return <div class={`page-card-grid ${props.class ?? ''}`}>{props.children}</div>
}
