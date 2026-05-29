import type { Component, JSX } from 'solid-js'

interface PageShellProps {
  children: JSX.Element
  class?: string
}

/**
 * Page shell that mirrors the Home page canvas (dark background + spacing).
 */
export const PageShell: Component<PageShellProps> = props => {
  return (
    <main id="main" class={`page-shell ${props.class ?? ''}`}>
      {props.children}
    </main>
  )
}
