# Boswell Digital Solutions

> **Service-Disabled Veteran-Owned Small Business (SDVOSB)**
> Building human-centered AI and web software with discipline and precision from military and federal service.

[![Production Ready](https://img.shields.io/badge/status-production%20ready-success)](https://boswelldigitalsolutions.com)
[![WCAG 2.1 AA](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-blue)](docs/DUE_DILIGENCE_REPORT.md#3-accessibility-compliance-wcag-21-aa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, accessible, SEO-optimized website showcasing the **Forge Ecosystem** — a suite of 6 AI-powered applications for developers, authors, and public agencies.

**Live Site**: [boswelldigitalsolutions.com](https://boswelldigitalsolutions.com)
**Owner**: Charles Boswell, U.S. Navy Veteran
**Location**: Lexington, Kentucky

---

## 🎯 Overview

This is a professional business website built with modern web standards, government-grade quality, and full accessibility compliance. The site showcases our veteran-owned SaaS studio and the applications we're building to genuinely help people.

### Key Metrics

| Metric | Value | Status |
|--------|-------|--------|
| **Build Size** | 108 KB (28 KB gzipped) | ✅ Excellent |
| **Build Time** | ~1 second | ✅ Fast |
| **Accessibility** | WCAG 2.1 AA | ✅ Compliant |
| **TypeScript** | Zero errors | ✅ Clean |
| **Security** | A+ Headers | ✅ Secure |
| **SEO** | Full implementation | ✅ Optimized |

### Technology Stack

- **Framework**: [SolidJS](https://solidjs.com) 1.8.17 (fast, reactive, no virtual DOM)
- **Language**: TypeScript 5.4.5 (strict mode)
- **Build Tool**: Vite 5.2.11 (fast HMR, optimized builds)
- **Router**: @solidjs/router 0.15.3
- **Package Manager**: pnpm 9.1.1
- **Deployment**: Netlify (CDN, security headers, SPA fallback)
- **Version Control**: Git + GitHub

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18+ (preferably 22)
- **pnpm**: 9.0.0+

```bash
# Install pnpm if needed
npm install -g pnpm
```

### Installation

```bash
# Clone the repository
git clone https://github.com/Boswecw/Boswell-web-solid.git
cd boswell-web-solid

# Install dependencies
pnpm install
```

### Development

```bash
# Start dev server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Preview production build (http://localhost:4173)
pnpm preview
```

### Deployment

```bash
# Deploy to Netlify (configured in netlify.toml)
git push origin master
# Netlify will auto-deploy from the master branch
```

---

## 📁 Project Structure

```
boswell-web-solid/
├── dev/                           # Source code
│   ├── components/                # Reusable React-like components
│   │   ├── Footer.tsx            # Site footer with links
│   │   ├── Header.tsx            # Navigation with active states
│   │   ├── JsonLd.tsx            # Structured data (SEO)
│   │   ├── ProductCard.tsx       # App display card
│   │   ├── ProductGrid.tsx       # Responsive grid layout
│   │   ├── Section.tsx           # Page section wrapper
│   │   └── Seo.tsx               # Meta tags component
│   ├── config/                    # Configuration files
│   │   ├── apps.ts               # 6 Forge Ecosystem apps
│   │   └── meta.ts               # SEO metadata per page
│   ├── pages/                     # Route components
│   │   ├── About.tsx             # Founder story
│   │   ├── Apps.tsx              # All applications
│   │   ├── Contact.tsx           # Contact form
│   │   ├── Government.tsx        # SDVOSB positioning
│   │   ├── Home.tsx              # Homepage
│   │   ├── Portfolio.tsx         # Case studies
│   │   ├── Privacy.tsx           # Privacy policy
│   │   └── Services.tsx          # Service offerings
│   ├── styles/                    # Modern CSS architecture
│   │   ├── variables.css         # Design tokens (colors, spacing, typography)
│   │   ├── utilities.css         # 200+ utility classes
│   │   ├── components.css        # Component styles
│   │   ├── animations.css        # Micro-interactions
│   │   └── accessibility.css     # WCAG 2.1 AA features
│   ├── App.tsx                    # Router configuration
│   ├── index.tsx                  # Entry point
│   └── styles.css                 # CSS imports
├── public/                        # Static assets
│   ├── robots.txt                # Crawler directives
│   ├── sitemap.xml               # All 8 pages indexed
│   └── _redirects                # SPA fallback rules
├── dist/                          # Build output (gitignored)
├── docs/                          # Detailed documentation
│   ├── COMPONENTS.md             # Component API reference
│   ├── CSS_REFACTORING.md        # CSS modernization guide
│   ├── DESIGN_PLAN.md            # Original design document
│   └── DUE_DILIGENCE_REPORT.md   # Production readiness audit
├── netlify.toml                   # Deployment config
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config (strict)
└── README.md                      # This file
```

---

## 🎨 Design System

### Color Palette (Professional Government Theme)

```css
/* Primary - Deep Federal Blue (Authority & Trust) */
--color-primary: #0A2A43;
--color-primary-light: #1A3A53;
--color-primary-dark: #051820;

/* Accent - Service Bronze (Distinctive & Elegant) */
--color-accent: #CBA86F;
--color-accent-light: #DBBB8F;

/* Secondary - Steel Gray (Professional Neutral) */
--color-secondary: #4A5568;

/* Neutrals - Clean & Warm */
--color-background: #FFFFFF;        /* Clean white */
--color-background-alt: #F7F7F5;    /* Off-white with warmth */
--color-text: #1A1A1A;              /* Charcoal (not pure black) */
```

### Spacing System (8px Grid)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
/* ... up to --space-32 (128px) */
```

### Fluid Typography (Responsive)

```css
/* Automatically scales between mobile and desktop */
--font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);     /* 16-18px */
--font-size-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);       /* 20-24px */
--font-size-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);        /* 36-48px */
```

### Utility Classes (Examples)

```jsx
// Spacing
<div class="p-4 mt-8 mb-12">Content</div>

// Layout
<div class="flex flex-center gap-6">Items</div>
<div class="grid-3">Three columns</div>

// Typography
<p class="text-lg font-semibold text-primary">Text</p>

// Responsive
<div class="flex-col md:flex-row lg:gap-8">Responsive</div>
```

**See full design system**: [dev/styles/variables.css](dev/styles/variables.css)

---

## 📦 Forge Ecosystem Apps

The website showcases 6 applications across 3 categories:

### Developer Tools
1. **VibeForge** - AI prompt engineering workbench
2. **WebSafe** - Security monitoring for small businesses

### Creative Tools
3. **AuthorForge** - Desktop writing suite for authors
4. **You Can Spell** - Adaptive language learning

### Public Mission
5. **Leopold** - Ecology and environmental data platform
6. **Livy** - Historical tourism and cultural knowledge

**Configuration**: [dev/config/apps.ts](dev/config/apps.ts)

### Adding a New App

Edit `dev/config/apps.ts`:

```typescript
export const APPS: App[] = [
  // ... existing apps
  {
    id: 'newapp',
    name: 'NewApp',
    slug: '/apps/newapp',
    tagline: 'Short tagline for the card',
    shortDescription: 'Brief description for cards',
    fullDescription: 'Longer description for detail page',
    audience: 'Target users, organizations',
    category: 'developer-tools', // or 'creative-tools' or 'public-mission'
    features: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
    ],
    cta: 'Learn more',
    ctaSecondary: 'Try free',
    ctaSecondaryHref: '/contact',
  },
]
```

The app will automatically appear on the homepage and `/apps` page.

---

## ♿ Accessibility (WCAG 2.1 AA Compliant)

### Features

- ✅ **Keyboard Navigation**: All interactive elements accessible via Tab/Shift+Tab
- ✅ **Skip Links**: Jump to main content (visible on focus)
- ✅ **Focus Indicators**: 2px Service Bronze outline on all focusable elements
- ✅ **ARIA Attributes**: `aria-current="page"` for navigation, proper labels
- ✅ **Semantic HTML**: Proper heading hierarchy, landmarks (`<main>`, `<nav>`)
- ✅ **Color Contrast**: 12.4:1 ratio (AAA level) for primary colors
- ✅ **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- ✅ **Screen Readers**: `.sr-only` utility for screen reader-only content

### Testing

```bash
# Lighthouse audit
npx lighthouse https://boswelldigitalsolutions.com --view

# Browser extensions
# - WAVE (https://wave.webaim.org/extension/)
# - axe DevTools (https://www.deque.com/axe/devtools/)
```

**Full accessibility report**: [docs/DUE_DILIGENCE_REPORT.md#3-accessibility-compliance](docs/DUE_DILIGENCE_REPORT.md#3-accessibility-compliance-wcag-21-aa)

---

## 🔒 Security

### Headers (netlify.toml)

```toml
[headers]
  Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
  X-Content-Type-Options = "nosniff"
  Referrer-Policy = "strict-origin-when-cross-origin"
  Permissions-Policy = "camera=(), microphone=(), geolocation=()"
  Content-Security-Policy = "default-src 'self'; script-src 'self'; ..."
```

### Protections

- ✅ **XSS Prevention**: No `dangerouslySetInnerHTML`, `innerHTML`, or `eval()`
- ✅ **HTTPS Only**: HSTS header with preload
- ✅ **CSP**: Restrictive Content Security Policy
- ✅ **No Secrets**: Zero hardcoded credentials or API keys
- ✅ **Dependency Scanning**: Regular updates via pnpm
- ✅ **SPA Security**: Proper fallback rules, no directory listing

**Security audit**: [docs/DUE_DILIGENCE_REPORT.md#2-security-assessment](docs/DUE_DILIGENCE_REPORT.md#2-security-assessment)

---

## 📈 SEO Implementation

### Meta Tags (Per Page)

Every page includes:
- Unique `<title>` tag
- Meta description (150-160 characters)
- Canonical URL
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags

**Configuration**: [dev/config/meta.ts](dev/config/meta.ts)

### Structured Data (Schema.org)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Boswell Digital Solutions LLC",
  "founder": {
    "@type": "Person",
    "name": "Charles Boswell",
    "jobTitle": "Founder & CEO",
    "description": "U.S. Navy Veteran, Service-Disabled Veteran-Owned Small Business"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lexington",
    "addressRegion": "KY",
    "addressCountry": "US"
  }
}
```

### Technical SEO

- ✅ **Sitemap**: [public/sitemap.xml](public/sitemap.xml) (all 8 pages)
- ✅ **Robots.txt**: [public/robots.txt](public/robots.txt)
- ✅ **Semantic HTML**: Proper heading hierarchy (h1 → h6)
- ✅ **Mobile-Friendly**: Responsive design, fluid typography
- ✅ **Fast Loading**: 28 KB gzipped, optimized assets

---

## 🚢 Deployment

### Netlify Configuration

The site auto-deploys from the `master` branch via [netlify.toml](netlify.toml):

```toml
[build]
  command = "pnpm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

### Manual Deployment

```bash
# Build locally
pnpm build

# Deploy to Netlify CLI
netlify deploy --prod --dir=dist
```

### Deployment Checklist

- [ ] All tests pass (`pnpm build` succeeds)
- [ ] No TypeScript errors
- [ ] Accessibility verified (Lighthouse)
- [ ] Security headers configured
- [ ] Environment variables set (if any)
- [ ] Custom domain configured
- [ ] SSL certificate active

---

## 📚 Documentation

Detailed documentation is available in the `/docs` folder:

| Document | Description |
|----------|-------------|
| [COMPONENTS.md](docs/COMPONENTS.md) | Component API reference (props, usage, examples) |
| [CSS_REFACTORING.md](docs/CSS_REFACTORING.md) | CSS modernization guide and design system |
| [DESIGN_PLAN.md](docs/DESIGN_PLAN.md) | Original design plan and phase breakdown |
| [DUE_DILIGENCE_REPORT.md](docs/DUE_DILIGENCE_REPORT.md) | Production readiness audit (Dec 10, 2024) |

---

## 🛠️ Development

### Adding a New Page

1. **Create page component** in `dev/pages/`:

```tsx
// dev/pages/NewPage.tsx
import type { Component } from 'solid-js'
import Seo from '../components/Seo'

const NewPage: Component = () => {
  return (
    <>
      <Seo
        title="New Page — Boswell Digital Solutions"
        description="Page description here"
        url="https://boswelldigitalsolutions.com/newpage"
        image="https://boswelldigitalsolutions.com/og-cover.jpg"
      />
      <main id="main">
        <h1>New Page</h1>
        <p>Content here</p>
      </main>
    </>
  )
}

export default NewPage
```

2. **Add route** in `dev/App.tsx`:

```tsx
import NewPage from './pages/NewPage'

<Route path="/newpage" component={NewPage} />
```

3. **Add meta config** in `dev/config/meta.ts`:

```typescript
newpage: {
  title: 'New Page — Boswell Digital Solutions',
  description: 'Description for search results',
  url: `${baseUrl}/newpage`,
  ogImage: defaultOgImage,
}
```

4. **Update sitemap** in `public/sitemap.xml`:

```xml
<url>
  <loc>https://boswelldigitalsolutions.com/newpage</loc>
  <lastmod>2024-12-10</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### Styling Guidelines

1. **Use CSS variables** from [variables.css](dev/styles/variables.css)
2. **Apply utility classes** for spacing and layout
3. **Create component styles** in [components.css](dev/styles/components.css) if needed
4. **Follow BEM naming**: `.component-element--modifier`

```css
/* Good */
.product-card {
  padding: var(--space-6);
  background: var(--color-background);
}

.product-card__title {
  color: var(--color-primary);
}

/* Avoid */
.productCard {
  padding: 24px;  /* hardcoded */
  background: #ffffff;  /* hardcoded */
}
```

---

## 🧪 Testing

### Type Checking

```bash
# Run TypeScript compiler (no emit, check only)
npx tsc --noEmit
```

### Linting

```bash
# ESLint
pnpm lint

# Prettier
pnpm format
```

### Build Testing

```bash
# Production build
pnpm build

# Preview production build
pnpm preview

# Open http://localhost:4173
```

### Accessibility Testing

1. **Lighthouse** (Chrome DevTools)
2. **WAVE Extension** (browser plugin)
3. **axe DevTools** (browser plugin)
4. **Manual keyboard testing** (Tab, Shift+Tab, Enter, Escape)

---

## 📊 Performance

### Bundle Analysis

| Asset | Size | Gzipped | Description |
|-------|------|---------|-------------|
| `index.html` | 1.09 KB | 0.54 KB | HTML shell |
| `index-*.css` | 40.36 KB | 8.01 KB | Complete stylesheet |
| `index-*.js` | 55.12 KB | 19.13 KB | SolidJS + app code |
| **Total** | **96.57 KB** | **27.68 KB** | Full page load |

### Optimization Strategies

- ✅ **Vite Tree Shaking**: Removes unused code
- ✅ **CSS Variables**: Reduces duplication
- ✅ **Utility-First CSS**: Reusable classes
- ✅ **Modern ES Modules**: Native browser support
- ✅ **Gzip Compression**: 71% size reduction

---

## 🐛 Known Issues

### Medium Priority

**Contact Form Not Functional** ([Contact.tsx:18-23](dev/pages/Contact.tsx#L18-L23))
- Form has no submission handler
- **Fix**: Add Netlify Forms integration or API endpoint
- **Status**: Planned for next release

### Minor Observations

1. **Missing OG Image**: `/og-cover.jpg` referenced but not present
2. **CAGE Code**: Shows "[TBD]" on Government page (awaiting registration)
3. **Social Links**: Organization schema `sameAs` array is empty

**See full issue tracker**: [docs/DUE_DILIGENCE_REPORT.md#9-issues-identified](docs/DUE_DILIGENCE_REPORT.md#9-issues-identified)

---

## 🤝 Contributing

This is a private business website, but suggestions are welcome:

1. **Open an issue** to discuss proposed changes
2. **Fork the repository**
3. **Create a feature branch**: `git checkout -b feature/your-feature`
4. **Commit changes**: `git commit -m 'Add feature'`
5. **Push to branch**: `git push origin feature/your-feature`
6. **Open a pull request**

### Code Standards

- TypeScript strict mode (no `any`)
- Prettier formatting (run `pnpm format`)
- ESLint compliance (run `pnpm lint`)
- Accessibility first (WCAG 2.1 AA minimum)
- Semantic HTML
- Mobile-first responsive design

---

## 📄 License

**MIT License**

Copyright (c) 2024 Boswell Digital Solutions LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## 👤 Contact

**Boswell Digital Solutions LLC**
Service-Disabled Veteran-Owned Small Business (SDVOSB)

📍 Lexington, Kentucky, USA
🌐 [boswelldigitalsolutions.com](https://boswelldigitalsolutions.com)
📧 [Contact Form](https://boswelldigitalsolutions.com/contact)
💼 [LinkedIn](https://linkedin.com/in/charlesboswell) (when available)
🐙 [GitHub](https://github.com/Boswecw)

**Founder**: Charles Boswell
**Military Service**: U.S. Navy Veteran (Submariner, Dolphins Qualified)
**Federal Experience**: 16+ years (U.S. Forest Service)
**Expertise**: Incident Command, Security Management, AI Integration

---

## 🏆 Credits

Built with precision and discipline by a U.S. Navy Veteran. 🇺🇸

**Powered by**:
- [SolidJS](https://solidjs.com) - Fast, reactive UI framework
- [Vite](https://vitejs.dev) - Next-generation build tool
- [TypeScript](https://typescriptlang.org) - Type-safe JavaScript
- [Netlify](https://netlify.com) - Modern deployment platform

**Design Inspiration**: Government websites, federal design systems, military precision

---

## 📅 Version History

### v1.0.0 - Production Release (December 2024)

**Features**:
- ✅ Complete website with 8 pages
- ✅ 6 Forge Ecosystem applications
- ✅ Modern CSS architecture (40+ KB utilities + components + animations)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Full SEO implementation
- ✅ Security hardening (A+ headers)
- ✅ Production-ready build (108 KB total)

**CSS Modernization**:
- Professional government color palette
- Fluid typography with clamp()
- 200+ utility classes
- Comprehensive animation layer
- Reduced-motion support

**Quality Assurance**:
- Zero TypeScript errors
- Zero console warnings
- No technical debt markers
- Due diligence audit passed

---

**Last Updated**: December 10, 2024
**Build Status**: ✅ Production Ready
**Deployment**: Active on Netlify
