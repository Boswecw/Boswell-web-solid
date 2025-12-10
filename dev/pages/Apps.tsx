import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

/**
 * Forge Ecosystem Apps Page
 *
 * Showcases the interconnected platform of applications designed to expand
 * human capability at the intersection of technology, creativity, and intention.
 *
 * Visual Identity: Forge_Ecosystem_icon.png
 */

const Apps: Component = () => {
  const [showWhyEcosystem, setShowWhyEcosystem] = createSignal(false)
  const [formData, setFormData] = createSignal({ email: '', interest: 'all', message: '' })
  const [submitStatus, setSubmitStatus] = createSignal<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    setSubmitStatus('success')
    // TODO: Implement actual form submission
  }

  return (
    <>
      <Seo
        title={META_CONFIG.apps.title}
        description={META_CONFIG.apps.description}
        url={META_CONFIG.apps.url}
        image={META_CONFIG.apps.ogImage}
      />
      <main id="main">
        {/* Hero Section - The Forge Ecosystem */}
        <div class="hero" style={{ "padding": "var(--space-32) var(--space-md)" }}>
          <div class="text-center">
            <img
              src="/assets/Forge_Ecosystem_icon.png"
              alt="The Forge Ecosystem"
              style={{
                height: '120px',
                width: 'auto',
                margin: '0 auto var(--space-lg)',
                display: 'block',
              }}
            />
            <h1 style={{ "font-size": "var(--font-size-4xl)", "margin-bottom": "var(--space-md)" }}>
              The Forge Ecosystem
            </h1>
            <p class="text-xl font-medium" style={{ "max-width": "800px", "margin": "0 auto var(--space-md)" }}>
              Purpose-built applications designed to work together
            </p>
            <p class="text-lg" style={{ "max-width": "900px", "margin": "0 auto", "line-height": "var(--line-height-relaxed)" }}>
              The Forge Ecosystem is a platform for makers who demand tools that respect their
              autonomy and expand their capability. Each application is independently powerful but
              gains strength through thoughtful integration. This is what an intentional,
              extensible platform looks like.
            </p>
          </div>
        </div>

        <div class="container-center max-w-1280">
          {/* Ecosystem Principles */}
          <Section title="">
            <div class="card">
              <div class="text-center mb-lg">
                <img
                  src="/assets/Forge_Ecosystem_icon.png"
                  alt="Forge Ecosystem"
                  style={{ height: '60px', width: 'auto', margin: '0 auto var(--space-md)', display: 'block' }}
                />
                <h2 class="h2 mb-lg">Built on Three Core Principles</h2>
              </div>
              <div class="grid-3">
                <div class="text-center">
                  <h3 class="h3 mb-sm">Interconnected</h3>
                  <p class="text-sm">
                    Applications work better together. Shared data, unified workflows, ecosystem
                    effects across the platform.
                  </p>
                </div>
                <div class="text-center">
                  <h3 class="h3 mb-sm">Extensible</h3>
                  <p class="text-sm">
                    Community-driven, open architecture. You own your workflow. No lock-in, no
                    rent-seeking.
                  </p>
                </div>
                <div class="text-center">
                  <h3 class="h3 mb-sm">Intentional</h3>
                  <p class="text-sm">
                    Built for human flourishing, not extraction. Values-driven design at every
                    level.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Launch Wave: Four Applications */}
          <Section title="Launch Wave: Four Applications" subtitle="Shipping 2025">
            <div class="grid-2">
              {/* VibeForge */}
              <div class="card">
                <div class="flex" style={{ "align-items": "flex-start", "justify-content": "space-between", "margin-bottom": "var(--space-md)" }}>
                  <h3 class="h3">VibeForge</h3>
                  <span class="badge" style={{ "background": "var(--color-success)", "color": "white", "padding": "var(--space-xs) var(--space-sm)", "border-radius": "var(--border-radius-sm)", "font-size": "var(--font-size-xs)", "font-weight": "var(--font-weight-semibold)" }}>
                    Launching Very Soon
                  </span>
                </div>
                <p class="h4 mb-md" style={{ "font-weight": "var(--font-weight-medium)", "color": "var(--color-text)" }}>
                  Your Thinking Partner for Code and Creation
                </p>
                <p class="mb-md text-sm">
                  Developers need more than syntax completion—they need collaboration, ideation,
                  and ecosystem thinking.
                </p>
                <h4 class="h4 mb-sm">Capabilities</h4>
                <ul class="list-bulleted text-sm mb-lg">
                  <li>AI-assisted brainstorming and code generation</li>
                  <li>Community extension ecosystem for customization</li>
                  <li>Workflow integration with AuthorForge and beyond</li>
                  <li>Built-in collaboration tools for makers</li>
                </ul>
                <div class="flex" style={{ "align-items": "center", "gap": "var(--space-sm)", "margin-bottom": "var(--space-md)" }}>
                  <img src="/assets/Forge_Ecosystem_icon.png" alt="Forge Ecosystem" style={{ height: '20px', width: 'auto' }} />
                  <span class="text-xs text-muted">Part of the Forge Ecosystem</span>
                </div>
                <button class="btn btn-primary">Get Early Access</button>
              </div>

              {/* AuthorForge */}
              <div class="card">
                <div class="flex" style={{ "align-items": "flex-start", "justify-content": "space-between", "margin-bottom": "var(--space-md)" }}>
                  <h3 class="h3">AuthorForge</h3>
                  <span class="badge" style={{ "background": "var(--color-primary)", "color": "white", "padding": "var(--space-xs) var(--space-sm)", "border-radius": "var(--border-radius-sm)", "font-size": "var(--font-size-xs)", "font-weight": "var(--font-weight-semibold)" }}>
                    Coming 2025
                  </span>
                </div>
                <p class="h4 mb-md" style={{ "font-weight": "var(--font-weight-medium)", "color": "var(--color-text)" }}>
                  Structure, Inspiration, and Lore at Your Fingertips
                </p>
                <p class="mb-md text-sm">
                  Writers need systems that don't impose rigid constraints—structure that scales
                  with creativity.
                </p>
                <h4 class="h4 mb-sm">Capabilities</h4>
                <ul class="list-bulleted text-sm mb-md">
                  <li>Story scaffolding and narrative planning</li>
                  <li>Worldbuilding integration and lore automation</li>
                  <li>Character, plot, and scene tracking</li>
                  <li>Community prompts and collaborative storytelling</li>
                </ul>
                <p class="text-xs text-muted mb-md">
                  Designed to integrate with Livy storytelling and creative inspiration tools
                </p>
                <div class="flex" style={{ "align-items": "center", "gap": "var(--space-sm)", "margin-bottom": "var(--space-md)" }}>
                  <img src="/assets/Forge_Ecosystem_icon.png" alt="Forge Ecosystem" style={{ height: '20px', width: 'auto' }} />
                  <span class="text-xs text-muted">Part of the Forge Ecosystem</span>
                </div>
                <button class="btn btn-primary">Join the Waitlist</button>
              </div>

              {/* WebSafe */}
              <div class="card">
                <div class="flex" style={{ "align-items": "flex-start", "justify-content": "space-between", "margin-bottom": "var(--space-md)" }}>
                  <h3 class="h3">WebSafe</h3>
                  <span class="badge" style={{ "background": "var(--color-accent)", "color": "white", "padding": "var(--space-xs) var(--space-sm)", "border-radius": "var(--border-radius-sm)", "font-size": "var(--font-size-xs)", "font-weight": "var(--font-weight-semibold)" }}>
                    Mid-2025 — Free
                  </span>
                </div>
                <p class="h4 mb-md" style={{ "font-weight": "var(--font-weight-medium)", "color": "var(--color-text)" }}>
                  Know What's Real. Stay Safe Online.
                </p>
                <p class="mb-md text-sm">
                  Digital literacy and online safety are public goods. Everyone deserves tools to
                  navigate the internet with confidence.
                </p>
                <h4 class="h4 mb-sm">Capabilities</h4>
                <ul class="list-bulleted text-sm mb-lg">
                  <li>Scam and misinformation detection</li>
                  <li>Bot behavior analysis</li>
                  <li>Educational reports and learning</li>
                  <li>Personal safety intelligence</li>
                </ul>
                <div class="flex" style={{ "align-items": "center", "gap": "var(--space-sm)", "margin-bottom": "var(--space-md)" }}>
                  <img src="/assets/Forge_Ecosystem_icon.png" alt="Forge Ecosystem" style={{ height: '20px', width: 'auto' }} />
                  <span class="text-xs text-muted">Part of the Forge Ecosystem</span>
                </div>
                <button class="btn btn-primary">Sign Up for Launch</button>
              </div>

              {/* MoneyAI */}
              <div class="card">
                <div class="flex" style={{ "align-items": "flex-start", "justify-content": "space-between", "margin-bottom": "var(--space-md)" }}>
                  <h3 class="h3">MoneyAI</h3>
                  <span class="badge" style={{ "background": "var(--color-primary-light)", "color": "white", "padding": "var(--space-xs) var(--space-sm)", "border-radius": "var(--border-radius-sm)", "font-size": "var(--font-size-xs)", "font-weight": "var(--font-weight-semibold)" }}>
                    Late 2025
                  </span>
                </div>
                <p class="h4 mb-md" style={{ "font-weight": "var(--font-weight-medium)", "color": "var(--color-text)" }}>
                  See Where You're Headed, Not Just Where You've Been
                </p>
                <p class="mb-md text-sm">
                  Personal finance should be calm, visual, and predictive—not anxiety-inducing
                  dashboards.
                </p>
                <h4 class="h4 mb-sm">Capabilities</h4>
                <ul class="list-bulleted text-sm mb-lg">
                  <li>Scenario forecasting and "what-if" analysis</li>
                  <li>Visual asset tracking with calm metaphors (rivers, orbits, bubbles)</li>
                  <li>Bill prediction and financial forecasting</li>
                  <li>Beginner-friendly financial education</li>
                </ul>
                <div class="flex" style={{ "align-items": "center", "gap": "var(--space-sm)", "margin-bottom": "var(--space-md)" }}>
                  <img src="/assets/Forge_Ecosystem_icon.png" alt="Forge Ecosystem" style={{ height: '20px', width: 'auto' }} />
                  <span class="text-xs text-muted">Part of the Forge Ecosystem</span>
                </div>
                <button class="btn btn-primary">Notify Me</button>
              </div>
            </div>
          </Section>

          {/* Ecosystem Future */}
          <Section>
            <div class="card">
              <div class="flex" style={{ "align-items": "center", "gap": "var(--space-sm)", "margin-bottom": "var(--space-md)" }}>
                <img src="/assets/Forge_Ecosystem_icon.png" alt="Forge Ecosystem" style={{ height: '30px', width: 'auto' }} />
                <h2 class="h2">Expanding the Ecosystem</h2>
              </div>
              <p class="mb-lg">
                The Forge Ecosystem is built for sustained growth. Currently shipping the first
                wave: VibeForge, AuthorForge, WebSafe, and MoneyAI. In active research and
                development: conservation technology (Leopold), cultural and ecological storytelling
                (Livy), and educational platforms. Each application strengthens the whole.
              </p>

              <h3 class="h3 mb-md">Future Products in Development</h3>
              <div class="grid-2">
                <div class="p-md" style={{ "border-left": "3px solid var(--color-primary)", "background": "var(--color-background-alt)" }}>
                  <h4 class="h4 mb-sm">Leopold</h4>
                  <p class="text-sm text-muted">
                    Wildlife observation, citizen science, and conservation education platform for
                    field teams and agencies.
                  </p>
                </div>
                <div class="p-md" style={{ "border-left": "3px solid var(--color-primary)", "background": "var(--color-background-alt)" }}>
                  <h4 class="h4 mb-sm">Livy</h4>
                  <p class="text-sm text-muted">
                    Historical, cultural, and ecological storytelling platform connecting
                    communities with their heritage.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Why Ecosystem? (Expandable) */}
          <Section>
            <div class="card">
              <button
                class="btn btn-outline"
                style={{ width: '100%', 'text-align': 'left' }}
                onClick={() => setShowWhyEcosystem(!showWhyEcosystem())}
              >
                <div class="flex" style={{ "align-items": "center", "justify-content": "space-between" }}>
                  <span class="h3">Why Ecosystem?</span>
                  <span>{showWhyEcosystem() ? '−' : '+'}</span>
                </div>
              </button>

              {showWhyEcosystem() && (
                <div class="mt-lg">
                  <div class="grid-3">
                    <div>
                      <h4 class="h4 mb-sm">For Creators & Developers</h4>
                      <p class="text-sm">
                        Better tools work together. Extensibility means you own your workflow. No
                        lock-in, no rent-seeking. Just power.
                      </p>
                    </div>
                    <div>
                      <h4 class="h4 mb-sm">For Boswell Digital Solutions</h4>
                      <p class="text-sm">
                        One interconnected platform outperforms scattered point solutions. Shared
                        infrastructure. Ecosystem effects. Sustainable innovation.
                      </p>
                    </div>
                    <div>
                      <h4 class="h4 mb-sm">For the Industry</h4>
                      <p class="text-sm">
                        An alternative to siloed, extractive SaaS. Intentional design.
                        Human-centered values. Open architecture.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Section>

          {/* Join the Forge CTA */}
          <Section>
            <div class="card text-center">
              <div class="mb-lg">
                <img
                  src="/assets/Forge_Ecosystem_icon.png"
                  alt="Join the Forge"
                  style={{ height: '60px', width: 'auto', margin: '0 auto var(--space-md)', display: 'block' }}
                />
                <h2 class="h2 mb-md">Join the Forge</h2>
                <p class="mb-lg">
                  Be among the first to shape the future of the Forge Ecosystem. Get early access
                  to launches, exclusive previews, and community insights.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ "max-width": "600px", "margin": "0 auto" }}>
                {submitStatus() === 'success' && (
                  <div class="alert alert-success mb-md" role="alert">
                    <strong>Welcome to the Forge!</strong> You're on the list.
                  </div>
                )}

                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    value={formData().email}
                    onInput={(e) => setFormData({ ...formData(), email: e.currentTarget.value })}
                  />
                </div>

                <div class="form-group">
                  <label for="interest">Primary Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData().interest}
                    onChange={(e) => setFormData({ ...formData(), interest: e.currentTarget.value })}
                  >
                    <option value="all">All Applications</option>
                    <option value="vibeforge">VibeForge (Developer Tools)</option>
                    <option value="authorforge">AuthorForge (Writing Suite)</option>
                    <option value="websafe">WebSafe (Online Safety)</option>
                    <option value="moneyai">MoneyAI (Personal Finance)</option>
                    <option value="future">Future Products (Leopold, Livy)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Tell us what you're building (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What are you working on? How might the Forge Ecosystem help?"
                    rows="4"
                    value={formData().message}
                    onInput={(e) => setFormData({ ...formData(), message: e.currentTarget.value })}
                  />
                </div>

                <button type="submit" class="btn btn-primary btn-lg">
                  Join the Forge Ecosystem
                </button>
              </form>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Apps
