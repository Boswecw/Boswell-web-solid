import { Component } from 'solid-js'
import { A, useLocation } from '@solidjs/router'

/**
 * Main site navigation header component
 *
 * @component
 * @description
 * Three-column navigation bar with branding logos and centered navigation links.
 * Left: Boswell Digital Solutions logo (non-clickable branding)
 * Center: Navigation links (Home | Apps | Government | About | Contact)
 * Right: Forge Ecosystem icon (non-clickable branding)
 *
 * @features
 * - Three-column layout with balanced spacing
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
 * - Logos marked with role="img" for non-interactive branding
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
        {/* Left: Boswell Digital Solutions logo (non-clickable branding) */}
        <div class="header-logo-left" role="img" aria-label="Boswell Digital Solutions">
          <img src="/assets/sigicon.svg" alt="Boswell Digital Solutions" class="logo-img" />
        </div>

        {/* Center: Navigation links */}
        <nav class="header-nav">
          <A href="/" end activeClass="active" aria-current={isActive('/') ? 'page' : undefined}>
            Home
          </A>
          <A href="/apps" activeClass="active" aria-current={isActive('/apps') ? 'page' : undefined}>
            Apps
          </A>
          <A href="/government" activeClass="active" aria-current={isActive('/government') ? 'page' : undefined}>
            Government
          </A>
          <A href="/about" activeClass="active" aria-current={isActive('/about') ? 'page' : undefined}>
            About
          </A>
          <A href="/contact" activeClass="active" aria-current={isActive('/contact') ? 'page' : undefined}>
            Contact
          </A>
        </nav>

        {/* Right: Forge Ecosystem icon with text (non-clickable branding) */}
        <div class="header-logo-right" role="img" aria-label="Forge Ecosystem">
          <img src="/assets/Forge_Ecosystem_icon.png" alt="Forge Ecosystem" class="forge-icon-img" />
          <span class="forge-text">Forge</span>
        </div>
      </div>
    </header>
  )
}
