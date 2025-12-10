import { Component } from 'solid-js'
import { A, useLocation } from '@solidjs/router'

/**
 * Main site navigation header component
 *
 * @component
 * @description
 * Displays the primary navigation bar with links to all main site pages.
 * Automatically highlights the active page link using ARIA attributes for accessibility.
 * Uses SolidJS Router's `<A>` component for client-side navigation without page reloads.
 *
 * @features
 * - Automatic active link detection using current route
 * - ARIA `aria-current="page"` for screen reader accessibility
 * - Client-side navigation (no page refresh)
 * - Responsive styling via CSS (defined in components.css)
 * - Keyboard accessible (tab navigation, focus states)
 *
 * @accessibility
 * - Uses semantic `<header>` and `<nav>` elements
 * - Active page indicated with `aria-current="page"`
 * - Focus-visible states for keyboard navigation
 * - High contrast focus indicators (Service Bronze outline)
 *
 * @example
 * ```tsx
 * // Used in App.tsx layout (renders on all pages)
 * <Header />
 * ```
 *
 * @see {@link https://docs.solidjs.com/solid-router SolidJS Router Documentation}
 * @see {@link ../styles/components.css Navigation Styles}
 */
export const Header: Component = () => {
  const location = useLocation()

  /**
   * Determines if the given path matches the current route
   * @param {string} path - The route path to check
   * @returns {boolean} True if the path matches the current location
   */
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header>
      <div class="header-container">
        <A href="/" class="header-logo" aria-label="Boswell Digital Solutions Home">
          <img src="/assets/sigicon.svg" alt="Boswell Digital Solutions" class="logo-img" />
        </A>
        <nav class="header-nav">
          <A href="/" aria-current={isActive('/') ? 'page' : undefined}>
            Home
          </A>
          <A href="/apps" aria-current={isActive('/apps') ? 'page' : undefined}>
            Apps
          </A>
          <A href="/about" aria-current={isActive('/about') ? 'page' : undefined}>
            About
          </A>
          <A href="/government" aria-current={isActive('/government') ? 'page' : undefined}>
            Government
          </A>
          <A href="/services" aria-current={isActive('/services') ? 'page' : undefined}>
            Services
          </A>
          <A href="/portfolio" aria-current={isActive('/portfolio') ? 'page' : undefined}>
            Portfolio
          </A>
          <A href="/contact" aria-current={isActive('/contact') ? 'page' : undefined}>
            Contact
          </A>
        </nav>
      </div>
    </header>
  )
}
