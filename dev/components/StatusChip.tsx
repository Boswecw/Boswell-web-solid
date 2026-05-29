import type { Component, JSX } from 'solid-js'

interface StatusChipProps {
  children: JSX.Element
  class?: string
}

export const StatusChip: Component<StatusChipProps> = props => {
  return <span class={`status-chip ${props.class ?? ''}`}>{props.children}</span>
}
