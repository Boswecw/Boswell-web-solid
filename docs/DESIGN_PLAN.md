# Boswell Digital Solutions — Website Design Plan (Updated)
## Comprehensive Implementation Roadmap

**Last Updated:** December 2025  
**Status:** Ready for Development  
**Priority Sequence:** 5-Phase Implementation Plan

---

## PHASE 1: Architecture & Component Extraction (Weeks 1–2)

### 1.1 Centralize App Metadata

**Objective:** Single source of truth for all app data. Eliminate copy drift across home, /apps, and individual product pages.

**Implementation:**
```typescript
// src/config/apps.ts
export const APPS = [
  {
    id: "vibeforge",
    name: "VibeForge",
    slug: "/apps/vibeforge",
    tagline: "AI-powered prompt engineering workbench for developers.",
    shortDescription: "Organize, iterate, and integrate prompts across models and projects.",
    fullDescription: "[extended description for product page]",
    audience: "Developers, AI engineers, solo founders",
    category: "developer-tools",
    features: ["Prompt organization", "Multi-model testing", "Integration workflows"],
    cta: "Learn more",
    ctaSecondary: "Contact for teams"
  },
  {
    id: "authorforge",
    name: "AuthorForge",
    slug: "/apps/authorforge",
    tagline: "Desktop-first writing suite for authors.",
    shortDescription: "Plan, draft, revise, and worldbuild with AI that stays under your control.",
    fullDescription: "[extended description]",
    audience: "Fiction authors, series writers",
    category: "creative-tools",
    features: ["Scene planning", "Character development", "Worldbuilding tools"],
    cta: "Learn more",
    ctaSecondary: "Download"
  },
  {
    id: "leopold",
    name: "Leopold",
    slug: "/apps/leopold",
    tagline: "Ecology and environmental data platform.",
    shortDescription: "[description]",
    audience: "Environmental researchers, agencies",
    category: "public-mission",
  },
  {
    id: "livy",
    name: "Livy",
    slug: "/apps/livy",
    tagline: "Historical tourism and cultural knowledge platform.",
    shortDescription: "[description]",
    audience: "Tourism boards, historians, communities",
    category: "public-mission",
  },
];
```

**Deployment Points:**
- Home page apps section (map APPS)
- /apps grid (map APPS, group by category)
- Individual product pages (fetch by slug)
- Navigation/footer (enumerate app links)

**Benefit:** Future apps added once, displayed everywhere automatically.

---

### 1.2 Extract Reusable Components

**Objective:** Replace hard-coded markup with composable, maintainable components.

#### `<Section>` Component
```typescript
// components/Section.tsx
import { Component, JSX } from "solid-js";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: JSX.Element;
  id?: string;
  class?: string;
}

export const Section: Component<SectionProps> = (props) => (
  <section class={`section ${props.class || ""}`} id={props.id}>
    {(props.title || props.subtitle) && (
      <div class="section-header">
        {props.title && <h2 class="h2">{props.title}</h2>}
        {props.subtitle && (
          <p class="section-subtitle">{props.subtitle}</p>
        )}
      </div>
    )}
    {props.children}
  </section>
);
```

#### `<ProductCard>` Component
```typescript
// components/ProductCard.tsx
import { Component } from "solid-js";
import { A } from "@solidjs/router";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  href: string;
  audience?: string;
  ctaLabel?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

export const ProductCard: Component<ProductCardProps> = (props) => (
  <div class="card">
    <div class="card-header">
      <h3 class="h3">{props.name}</h3>
      {props.tagline && <p class="card-tagline">{props.tagline}</p>}
    </div>
    <p class="card-description">{props.description}</p>
    {props.audience && (
      <p class="card-audience text-muted text-sm">
        For: {props.audience}
      </p>
    )}
    <div class="card-actions mt-md flex gap-sm flex-wrap">
      <A href={props.href}>
        <button class="btn btn-primary">
          {props.ctaLabel || "Learn more"}
        </button>
      </A>
      {props.ctaSecondaryHref && (
        <A href={props.ctaSecondaryHref}>
          <button class="btn btn-outline">
            {props.ctaSecondaryLabel || "Contact"}
          </button>
        </A>
      )}
    </div>
  </div>
);
```

#### `<ProductGrid>` Component
```typescript
// components/ProductGrid.tsx
import { Component, For } from "solid-js";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: any[];
  columns?: 2 | 3;
}

export const ProductGrid: Component<ProductGridProps> = (props) => (
  <div class={`grid-${props.columns || 2}`}>
    <For each={props.products}>
      {(app) => (
        <ProductCard
          name={app.name}
          tagline={app.tagline}
          description={app.shortDescription}
          href={app.slug}
          audience={app.audience}
          ctaLabel={app.cta}
          ctaSecondaryLabel={app.ctaSecondary}
        />
      )}
    </For>
  </div>
);
```

**Deployment:**
```typescript
// pages/index.tsx (home)
import { Section } from "~/components/Section";
import { ProductGrid } from "~/components/ProductGrid";
import { APPS } from "~/config/apps";

export default function Home() {
  const developerApps = APPS.filter(a => a.category === "developer-tools");
  
  return (
    <Section
      title="Applications"
      subtitle="Tools for developers, authors, and public agencies."
    >
      <ProductGrid products={developerApps} />
    </Section>
  );
}
```

---

### 1.3 Add Atomic Utility Classes

**Objective:** Reduce inline styles, centralize spacing/color logic.

**Add to `src/styles/utilities.css`:**
```css
/* Spacing utilities */
.mt-xs { margin-top: var(--space-xs); }
.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }
.mt-xl { margin-top: var(--space-xl); }

.mb-xs { margin-bottom: var(--space-xs); }
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }

.p-sm { padding: var(--space-sm); }
.p-md { padding: var(--space-md); }
.p-lg { padding: var(--space-lg); }

.gap-sm { gap: var(--space-sm); }
.gap-md { gap: var(--space-md); }
.gap-lg { gap: var(--space-lg); }

/* Flexbox utilities */
.flex { display: flex; }
.flex-column { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.flex-center { align-items: center; justify-content: center; }
.flex-between { justify-content: space-between; }

/* Typography utilities */
.text-sm { font-size: var(--font-size-sm); }
.text-base { font-size: var(--font-size-base); }
.text-lg { font-size: var(--font-size-lg); }
.text-muted { color: var(--color-secondary); }
.text-accent { color: var(--color-accent); }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }

/* Layout utilities */
.max-w-640 { max-width: 40rem; }
.max-w-960 { max-width: 60rem; }
.container-center { margin-left: auto; margin-right: auto; }

/* Visibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

**Usage in JSX:**
```typescript
<p class="text-muted text-sm mt-md">
  Veteran-Owned · Government-Grade · AI-Powered
</p>

<div class="flex gap-md flex-wrap mt-lg">
  <button class="btn btn-primary">Get started</button>
  <button class="btn btn-outline">Learn more</button>
</div>
```

---

## PHASE 2: Accessibility Compliance (Week 1–2, parallel)

### 2.1 Skip Link

**Objective:** Allow keyboard users to bypass navigation.

**Add to `src/components/Layout.tsx`:**
```typescript
import { Component, JSX } from "solid-js";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: Component<LayoutProps> = (props) => (
  <div>
    <a href="#main" class="skip-link">
      Skip to main content
    </a>
    <Header />
    <main id="main">{props.children}</main>
    <Footer />
  </div>
);
```

**Add to `src/styles/accessibility.css`:**
```css
.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: #fff;
  z-index: 1000;
  text-decoration: none;
  font-weight: 600;
}

.skip-link:focus {
  left: 0.5rem;
  top: 0.5rem;
}
```

### 2.2 Focus States

**Add to `src/styles/accessibility.css`:**
```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

button:focus-visible,
a.btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### 2.3 Active Navigation State

**Update `src/components/Header.tsx`:**
```typescript
import { A, useLocation } from "@solidjs/router";
import { Component } from "solid-js";

export const Header: Component = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header class="header">
      <nav class="nav" role="navigation">
        <ul class="nav-list">
          <li>
            <A
              href="/"
              class={isActive("/") ? "nav-link active" : "nav-link"}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Home
            </A>
          </li>
          <li>
            <A
              href="/apps"
              class={isActive("/apps") ? "nav-link active" : "nav-link"}
              aria-current={isActive("/apps") ? "page" : undefined}
            >
              Apps
            </A>
          </li>
          <li>
            <A
              href="/government"
              class={isActive("/government") ? "nav-link active" : "nav-link"}
              aria-current={isActive("/government") ? "page" : undefined}
            >
              Government
            </A>
          </li>
          <li>
            <A
              href="/about"
              class={isActive("/about") ? "nav-link active" : "nav-link"}
              aria-current={isActive("/about") ? "page" : undefined}
            >
              About
            </A>
          </li>
          <li>
            <A
              href="/contact"
              class={isActive("/contact") ? "nav-link active" : "nav-link"}
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              Contact
            </A>
          </li>
        </ul>
      </nav>
    </header>
  );
};
```

**Add to `src/styles/navigation.css`:**
```css
.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link.active {
  color: var(--color-accent);
  font-weight: 600;
  background: rgba(var(--color-accent-rgb), 0.1);
  border-radius: 4px;
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: var(--color-accent);
}
```

---

## PHASE 3: SEO & Meta Setup (Week 2)

### 3.1 Route-Level Meta Configuration

**Create `src/config/meta.ts`:**
```typescript
export const META_CONFIG = {
  home: {
    title: "Boswell Digital Solutions — Veteran-Owned AI & Software Studio",
    description: "Building human-centered AI and web software for developers, authors, and public agencies. Veteran-owned, government-grade, AI-powered tools.",
    ogImage: "https://boswell.ai/og-home.png",
  },
  apps: {
    title: "Applications — Boswell Digital Solutions",
    description: "Explore our suite of AI-powered tools: VibeForge, AuthorForge, Leopold, and Livy.",
    ogImage: "https://boswell.ai/og-apps.png",
  },
  government: {
    title: "Government Solutions — Boswell Digital Solutions",
    description: "Service-Disabled Veteran-Owned Small Business (SDVOSB). Federal contracting, procurement, and capability statements.",
    ogImage: "https://boswell.ai/og-government.png",
  },
  about: {
    title: "About — Charles Boswell & Boswell Digital Solutions",
    description: "Learn about Charles Boswell, Navy veteran, systems ecologist, and founder of Boswell Digital Solutions.",
    ogImage: "https://boswell.ai/og-about.png",
  },
  contact: {
    title: "Contact — Boswell Digital Solutions",
    description: "Get in touch with the team at Boswell Digital Solutions.",
    ogImage: "https://boswell.ai/og-contact.png",
  },
};

export const appMeta = (appName: string, appTagline: string) => ({
  title: `${appName} — ${appTagline} | Boswell Digital Solutions`,
  description: `${appTagline} Explore ${appName}, part of the Forge Ecosystem by Boswell Digital Solutions.`,
  ogImage: `https://boswell.ai/og-${appName.toLowerCase()}.png`,
});
```

### 3.2 Implement Meta Tags in Pages

**Update `src/routes/index.tsx`:**
```typescript
import { Title, Meta } from "@solidjs/meta";
import { META_CONFIG } from "~/config/meta";

export default function Home() {
  return (
    <>
      <Title>{META_CONFIG.home.title}</Title>
      <Meta name="description" content={META_CONFIG.home.description} />
      <Meta property="og:title" content={META_CONFIG.home.title} />
      <Meta property="og:description" content={META_CONFIG.home.description} />
      <Meta property="og:image" content={META_CONFIG.home.ogImage} />
      {/* Page content */}
    </>
  );
}
```

### 3.3 JSON-LD Structured Data

**Create `src/components/StructuredData.tsx`:**
```typescript
import { Component } from "solid-js";

export const OrganizationSchema: Component = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Boswell Digital Solutions LLC",
      "url": "https://boswell.ai",
      "logo": "https://boswell.ai/logo.png",
      "description": "Veteran-owned AI software studio",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lexington",
        "addressRegion": "Kentucky",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/boswell-digital-solutions",
        "https://twitter.com/boswelldigital"
      ]
    })}
  </script>
);

export const SoftwareApplicationSchema: Component<{
  name: string;
  description: string;
  url: string;
  category: string;
}> = (props) => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": props.name,
      "description": props.description,
      "url": props.url,
      "applicationCategory": props.category,
      "operatingSystem": "Windows, macOS, Web",
      "offers": {
        "@type": "Offer",
        "price": "Contact for pricing",
        "priceCurrency": "USD"
      }
    })}
  </script>
);
```

### 3.4 Sitemap & Robots

**Create `public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://boswell.ai/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://boswell.ai/apps</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://boswell.ai/apps/vibeforge</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://boswell.ai/government</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://boswell.ai/about</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://boswell.ai/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

**Create `public/robots.txt`:**
```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://boswell.ai/sitemap.xml
```

---

## PHASE 4: Copy & Content Refinement (Week 2–3)

### 4.1 Homepage Hero Copy

**Current:**
> Boswell Digital Solutions LLC

**Refined:**
> **Building human-centered AI and web software for developers, authors, and public agencies.**
>
> Veteran-owned, government-grade, AI-powered tools — designed from real field and federal experience.

**Location:** `src/routes/index.tsx` hero section

**Supporting copy stays as-is; no other changes needed to layout.**

### 4.2 App Grid Organization

**Update `/apps` page to group by audience:**

```typescript
// src/routes/apps/index.tsx
import { For } from "solid-js";
import { Section } from "~/components/Section";
import { ProductGrid } from "~/components/ProductGrid";
import { APPS } from "~/config/apps";

export default function AppsPage() {
  const developerTools = APPS.filter(a => a.category === "developer-tools");
  const creativeTools = APPS.filter(a => a.category === "creative-tools");
  const publicMissionTools = APPS.filter(a => a.category === "public-mission");

  return (
    <div>
      <Section title="Applications" subtitle="Find the right tool for your needs.">
        <Section title="Developer Tools" id="developer-tools">
          <ProductGrid products={developerTools} />
        </Section>

        <Section title="Creative Tools" id="creative-tools">
          <ProductGrid products={creativeTools} />
        </Section>

        <Section title="Public Mission Tools" id="public-mission">
          <ProductGrid products={publicMissionTools} />
        </Section>
      </Section>
    </div>
  );
}
```

### 4.3 Government Page Procurement Enhancements

**Add "At-a-Glance" banner:**
```typescript
// src/routes/government/index.tsx
export default function GovernmentPage() {
  return (
    <>
      <Section>
        <div class="government-banner">
          <div class="banner-stat">
            <strong>Service-Disabled Veteran-Owned Small Business (SDVOSB)</strong>
          </div>
          <div class="banner-stat">
            <strong>Location:</strong> Lexington, Kentucky
          </div>
          <div class="banner-stat">
            <strong>Contact:</strong> charles@boswell.ai
          </div>
        </div>
      </Section>

      <Section title="Engagement Models">
        <div class="engagement-grid">
          <div class="engagement-option">
            <h3>Pilot / Proof-of-Concept</h3>
            <p>Test solutions with limited scope and timeline.</p>
          </div>
          <div class="engagement-option">
            <h3>Direct Award (SDVOSB)</h3>
            <p>Once certified and registered, streamlined procurement.</p>
          </div>
          <div class="engagement-option">
            <h3>Subcontracting & Teaming</h3>
            <p>Partner with prime contractors on larger efforts.</p>
          </div>
        </div>
      </Section>

      <Section title="Capability Statement">
        <div class="capability-download">
          <p>Download our full capability statement for procurement review.</p>
          <a href="/capability-statement.pdf" class="btn btn-primary">
            Download Capability Statement
          </a>
        </div>
      </Section>
    </>
  );
}
```

**Add to `src/styles/government.css`:**
```css
.government-banner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
  padding: var(--space-lg);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 8px;
  color: #fff;
  margin-bottom: var(--space-lg);
}

.banner-stat {
  font-size: var(--font-size-sm);
}

.banner-stat strong {
  display: block;
  font-size: var(--font-size-base);
  margin-bottom: 0.25rem;
}

.engagement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-md);
}

.engagement-option {
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-secondary);
}

.engagement-option h3 {
  margin-top: 0;
  color: var(--color-primary);
}
```

### 4.4 About Page "At-a-Glance" Section

**Add before main narrative:**
```typescript
// src/routes/about/index.tsx
export default function AboutPage() {
  return (
    <Section>
      <div class="founder-snapshot">
        <div class="snapshot-item">
          <span class="snapshot-label">Federal Service</span>
          <span class="snapshot-value">16+ years</span>
          <span class="snapshot-detail">U.S. Forest Service</span>
        </div>
        <div class="snapshot-item">
          <span class="snapshot-label">Military</span>
          <span class="snapshot-value">Navy Veteran</span>
          <span class="snapshot-detail">10% Service-Connected Disability</span>
        </div>
        <div class="snapshot-item">
          <span class="snapshot-label">Expertise</span>
          <span class="snapshot-value">Systems Architecture</span>
          <span class="snapshot-detail">Incident Command, COR, Security</span>
        </div>
        <div class="snapshot-item">
          <span class="snapshot-label">Focus Areas</span>
          <span class="snapshot-value">AI, Ecology, Tourism</span>
          <span class="snapshot-detail">Tools for people and systems</span>
        </div>
      </div>

      {/* Main narrative continues... */}
    </Section>
  );
}
```

**Add to `src/styles/about.css`:**
```css
.founder-snapshot {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
  padding: var(--space-lg);
  background: var(--color-bg-secondary);
  border-radius: 8px;
  margin-bottom: var(--space-lg);
  border-left: 4px solid var(--color-accent);
}

.snapshot-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.snapshot-label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-secondary);
  letter-spacing: 0.05em;
}

.snapshot-value {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary);
}

.snapshot-detail {
  font-size: var(--font-size-sm);
  color: var(--color-secondary);
}
```

### 4.5 Footer Enhancement

**Add locality statement:**
```typescript
// src/components/Footer.tsx
<footer class="footer">
  {/* Existing footer content */}
  
  <div class="footer-credit">
    <p>Built in Lexington, Kentucky by a U.S. Navy Veteran.</p>
  </div>
</footer>
```

---

## PHASE 5: Fine-Tuning & Polish (Week 3)

### 5.1 Product Page Secondary CTA

**Add to ProductCard for B2B upsell:**
```typescript
<div class="card-actions">
  <A href={props.href}>
    <button class="btn btn-primary">Purchase / Learn more</button>
  </A>
  <A href="/contact">
    <button class="btn btn-outline">Contact for teams</button>
  </A>
</div>
```

### 5.2 Content Consistency Pass

**Standardize across pages:**
- All bulleted lists use consistent CSS class `.list-bulleted`
- All numbered steps use `.list-numbered`
- Ensure About + Government pages have matching typography scale
- Review call-to-action button labels for consistency

**Add to `src/styles/typography.css`:**
```css
.list-bulleted {
  list-style: disc;
  padding-left: var(--space-lg);
}

.list-bulleted li {
  margin-bottom: var(--space-sm);
}

.list-numbered {
  list-style: decimal;
  padding-left: var(--space-lg);
}

.list-numbered li {
  margin-bottom: var(--space-sm);
}
```

---

## Implementation Checklist

### Phase 1 (Weeks 1–2)
- [ ] Create `src/config/apps.ts` with all app metadata
- [ ] Extract `<Section>` component
- [ ] Extract `<ProductCard>` component
- [ ] Extract `<ProductGrid>` component
- [ ] Update home page to use components + APPS config
- [ ] Update /apps page to use components + APPS config
- [ ] Add utility classes to `src/styles/utilities.css`
- [ ] Update component JSX to use utility classes instead of inline styles

### Phase 2 (Week 1–2, parallel)
- [ ] Add skip link to Layout
- [ ] Add `.skip-link` styles
- [ ] Add focus-visible styles for all interactive elements
- [ ] Update Header with useLocation + aria-current
- [ ] Add `.nav-link` active state styles

### Phase 3 (Week 2)
- [ ] Create `src/config/meta.ts`
- [ ] Implement meta tags on all route pages
- [ ] Create `src/components/StructuredData.tsx`
- [ ] Add Organization + SoftwareApplication schemas
- [ ] Generate and place `sitemap.xml`
- [ ] Generate and place `robots.txt`

### Phase 4 (Week 2–3)
- [ ] Refine homepage hero copy
- [ ] Update /apps page with category grouping
- [ ] Add government procurement enhancements
- [ ] Add government banner, engagement models, capability download
- [ ] Add About page "at-a-glance" founder snapshot
- [ ] Update footer with locality statement

### Phase 5 (Week 3)
- [ ] Add secondary CTAs to product cards
- [ ] Standardize list styles across pages
- [ ] Final typography + spacing consistency review
- [ ] Test all pages in multiple browsers
- [ ] Validate accessibility (WCAG 2.1 AA)
- [ ] Test responsive design (mobile, tablet, desktop)

---

## Testing & Validation

### Accessibility Testing
- [ ] WAVE accessibility audit
- [ ] Keyboard navigation (Tab, Enter, Esc)
- [ ] Screen reader testing (NVDA or JAWS)
- [ ] Color contrast verification (WCAG AA minimum 4.5:1)
- [ ] Focus indicators visible on all interactive elements

### SEO Testing
- [ ] Google Search Console submission
- [ ] Meta tag verification (title, description)
- [ ] Sitemap validation
- [ ] Mobile-friendly test
- [ ] Page speed (Lighthouse)
- [ ] Structured data validation (schema.org)

### Responsive Design
- [ ] Mobile (320px–480px)
- [ ] Tablet (481px–768px)
- [ ] Desktop (769px+)
- [ ] Touch target sizes (48px minimum)

### Cross-Browser
- [ ] Chrome / Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## File Structure (Post-Implementation)

```
src/
├── config/
│   ├── apps.ts          (new)
│   └── meta.ts          (new)
├── components/
│   ├── Section.tsx      (new/refactored)
│   ├── ProductCard.tsx  (new)
│   ├── ProductGrid.tsx  (new)
│   ├── StructuredData.tsx (new)
│   ├── Layout.tsx       (updated)
│   ├── Header.tsx       (updated)
│   └── Footer.tsx       (updated)
├── routes/
│   ├── index.tsx        (updated)
│   ├── apps/
│   │   └── index.tsx    (updated)
│   ├── government/
│   │   └── index.tsx    (updated)
│   ├── about/
│   │   └── index.tsx    (updated)
│   └── contact/
│       └── index.tsx
├── styles/
│   ├── variables.css    (existing)
│   ├── global.css       (existing)
│   ├── utilities.css    (new/expanded)
│   ├── accessibility.css (new)
│   ├── navigation.css   (new)
│   ├── government.css   (new)
│   ├── about.css        (new)
│   ├── typography.css   (new)
│   └── components.css   (existing)
└── app.tsx

public/
├── sitemap.xml          (new)
└── robots.txt           (new)
```

---

## Notes & Guidance

1. **App Metadata First:** Once `apps.ts` is built, all subsequent component work becomes trivial.
2. **Accessibility Is Non-Negotiable:** Phase 2 work unlocks government credibility.
3. **Meta Tags Pay Off:** Don't skip SEO setup; it compounds over time.
4. **Test as You Go:** Validate each phase before moving to the next.
5. **Utility Classes Save Time:** Once they're in place, styling future components is much faster.
6. **Keep Iterating:** This plan is a roadmap, not a straitjacket. Adjust based on your findings.

---

**Status:** Ready for Phase 1 implementation  
**Estimated Timeline:** 3 weeks (full parallel execution)  
**Owner:** Charles Boswell (Founder)  
**Last Updated:** December 2025
