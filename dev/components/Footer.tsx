import { Component } from 'solid-js'
import { ForgeSeal } from './ForgeSeal'

/**
 * Site footer component with navigation links and company information
 *
 * @component
 * @description
 * Displays the site-wide footer with organized sections for Products, Company info,
 * and Legal links. Includes copyright notice with dynamic year and SDVOSB certification.
 * Styled with a responsive grid layout that adapts to mobile, tablet, and desktop.
 *
 * @features
 * - Four-column responsive grid layout
 * - Dynamic copyright year (updates automatically)
 * - Quick links to all major site sections
 * - Product directory (Forge Ecosystem apps)
 * - SDVOSB certification prominently displayed
 * - Footer-specific styling via `.footer` class
 *
 * @sections
 * 1. **Company Info** - Business description and veteran ownership
 * 2. **Products** - Links to major applications
 * 3. **Company** - About, Government, Services, Contact
 * 4. **Legal** - Privacy Policy and Terms of Service
 * 5. **Bottom Bar** - Copyright and SDVOSB badge
 *
 * @accessibility
 * - Semantic `<footer>` element
 * - Proper heading hierarchy (h4 for section titles)
 * - List markup for navigation links
 * - Focus-visible states on all links
 *
 * @example
 * ```tsx
 * // Used in App.tsx layout (renders on all pages)
 * <Footer />
 * ```
 *
 * @see {@link ../styles/components.css Footer Styles}
 */
export const Footer: Component = () => {
  /**
   * Current year for copyright notice
   * Updates automatically on January 1st each year
   */
  const currentYear = new Date().getFullYear()

  return (
    <footer class="footer">
      <div class="footer-content container-center max-w-1280">
        <div class="footer-grid">
          <div class="footer-section">
            <div class="footer-brand">
              <ForgeSeal variant="decorative" class="footer-seal" />
              <h4 class="h4">Boswell Digital Solutions</h4>
              <p class="text-sm text-muted">
                Veteran-owned studio delivering governed software products and refactors.
              </p>
              <p class="text-sm text-muted mt-sm">
                Built in Lexington, Kentucky by a U.S. Navy Veteran.
              </p>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="h4">Products</h4>
            <ul class="footer-links">
              <li>
                <a href="/products/vibeforge">VibeForge 1.0</a>
              </li>
              <li>
                <a href="/products">Products overview</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="h4">Company</h4>
            <ul class="footer-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/forge/charter">Forge Charter</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/intake">Engagement Request</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="h4">Legal</h4>
            <ul class="footer-links">
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="text-sm text-muted">
            &copy; {currentYear} Boswell Digital Solutions LLC. All rights reserved.
          </p>
          <p class="text-sm text-muted">Service-Disabled Veteran-Owned Small Business (SDVOSB)</p>
        </div>
      </div>
    </footer>
  )
}
