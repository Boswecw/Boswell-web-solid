import { Component } from 'solid-js'

export const Footer: Component = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer class="footer">
      <div class="footer-content container-center max-w-1280">
        <div class="footer-grid">
          <div class="footer-section">
            <h4 class="h4">Boswell Digital Solutions</h4>
            <p class="text-sm text-muted">
              Veteran-owned SaaS studio building human-centered AI and web software.
            </p>
            <p class="text-sm text-muted mt-sm">
              Built in Lexington, Kentucky by a U.S. Navy Veteran.
            </p>
          </div>

          <div class="footer-section">
            <h4 class="h4">Products</h4>
            <ul class="footer-links">
              <li>
                <a href="/apps/vibeforge">VibeForge</a>
              </li>
              <li>
                <a href="/apps/authorforge">AuthorForge</a>
              </li>
              <li>
                <a href="/apps/leopold">Leopold</a>
              </li>
              <li>
                <a href="/apps/livy">Livy</a>
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
                <a href="/government">Government</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
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
