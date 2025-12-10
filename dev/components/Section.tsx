import { Component, JSX } from 'solid-js'

interface SectionProps {
  title?: string
  subtitle?: string
  children: JSX.Element
  id?: string
  class?: string
}

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
