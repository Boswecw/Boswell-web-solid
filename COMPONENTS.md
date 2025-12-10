# Component Reference Guide

Comprehensive documentation for all reusable components in the Boswell Digital Solutions website.

## Table of Contents

- [Section](#section)
- [ProductCard](#productcard)
- [ProductGrid](#productgrid)
- [Header](#header)
- [Footer](#footer)
- [Seo](#seo)
- [JsonLd](#jsonld)

---

## Section

A standardized section wrapper component with optional title and subtitle.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | - | Section heading (h2) |
| `subtitle` | `string` | No | - | Section subheading |
| `children` | `JSX.Element` | Yes | - | Section content |
| `id` | `string` | No | - | HTML id attribute for anchor links |
| `class` | `string` | No | - | Additional CSS classes |

### Usage

```tsx
import { Section } from '~/components/Section'

// Basic usage
<Section>
  <p>Content without header</p>
</Section>

// With title and subtitle
<Section
  title="Our Services"
  subtitle="Everything you need to succeed"
>
  <div>Service content</div>
</Section>

// With ID for anchor linking
<Section
  title="Contact Us"
  id="contact"
  class="bg-alt"
>
  <form>...</form>
</Section>
```

### Styling

The Section component uses these CSS classes:
- `.section` - Main wrapper (includes vertical padding)
- `.section-header` - Header container
- `.h2` - Title styling
- `.section-subtitle` - Subtitle styling

---

## ProductCard

Displays a product or app with name, description, audience, and CTAs.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | Yes | - | Product name |
| `tagline` | `string` | Yes | - | Short tagline (italicized) |
| `description` | `string` | Yes | - | Longer description |
| `href` | `string` | Yes | - | Primary CTA link |
| `audience` | `string` | No | - | Target audience |
| `ctaLabel` | `string` | No | `"Learn more"` | Primary button text |
| `ctaSecondaryLabel` | `string` | No | - | Secondary button text |
| `ctaSecondaryHref` | `string` | No | - | Secondary button link |

### Usage

```tsx
import { ProductCard } from '~/components/ProductCard'

// Basic card
<ProductCard
  name="VibeForge"
  tagline="AI prompt engineering workbench"
  description="Organize and test prompts across multiple AI models."
  href="/apps/vibeforge"
/>

// With audience and secondary CTA
<ProductCard
  name="AuthorForge"
  tagline="Desktop writing suite"
  description="Distraction-free writing for authors."
  href="/apps/authorforge"
  audience="Novelists, non-fiction authors"
  ctaLabel="Learn more"
  ctaSecondaryLabel="Download beta"
  ctaSecondaryHref="/contact"
/>
```

### Styling

CSS classes:
- `.card` - Main card container
- `.card-header` - Header section
- `.h3` - Name styling
- `.card-tagline` - Tagline styling
- `.card-description` - Description text
- `.card-audience` - Audience section
- `.card-actions` - Button container

---

## ProductGrid

Responsive grid layout for displaying multiple products.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `products` | `App[]` | Yes | - | Array of app objects |
| `columns` | `2 \| 3` | No | `2` | Number of columns on desktop |

### Usage

```tsx
import { ProductGrid } from '~/components/ProductGrid'
import { APPS } from '~/config/apps'

// 2-column grid (default)
const developerApps = APPS.filter(app => app.category === 'developer-tools')
<ProductGrid products={developerApps} />

// 3-column grid
<ProductGrid products={APPS} columns={3} />

// Filter and display
const featuredApps = APPS.slice(0, 3)
<ProductGrid products={featuredApps} columns={3} />
```

### Behavior

- **Mobile:** 1 column
- **Tablet (768px+):** 2 columns
- **Desktop (1024px+):** 2 or 3 columns (based on `columns` prop)

---

## Header

Site navigation with active page detection and accessibility features.

### Props

None (uses `useLocation()` from router)

### Usage

```tsx
import { Header } from '~/components/Header'

// In App.tsx
<Header />
```

### Features

- Automatic active page detection
- `aria-current="page"` on active links
- Keyboard navigation support
- Focus states on all links

### Customization

To add/remove navigation links, edit `dev/components/Header.tsx`:

```tsx
<A href="/newpage" aria-current={isActive('/newpage') ? 'page' : undefined}>
  New Page
</A>
```

---

## Footer

Site footer with product links, company info, and veteran credit.

### Props

None

### Usage

```tsx
import { Footer } from '~/components/Footer'

// In App.tsx (after all routes)
<Footer />
```

### Sections

1. **Company Info** - Description and veteran credit
2. **Products** - Links to Forge Ecosystem apps
3. **Company Links** - About, Government, Services, Contact
4. **Legal** - Privacy Policy, Terms of Service

### Customization

Edit `dev/components/Footer.tsx` to:
- Add/remove footer links
- Update company description
- Modify footer sections

---

## Seo

Meta tags component for SEO and social sharing.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Page title |
| `description` | `string` | Yes | - | Meta description |
| `url` | `string` | Yes | - | Canonical URL |
| `image` | `string` | Yes | - | OG image URL |

### Usage

```tsx
import Seo from '~/components/Seo'
import { META_CONFIG } from '~/config/meta'

// Using centralized config (recommended)
<Seo
  title={META_CONFIG.home.title}
  description={META_CONFIG.home.description}
  url={META_CONFIG.home.url}
  image={META_CONFIG.home.ogImage}
/>

// Manual values
<Seo
  title="Custom Page — Boswell Digital Solutions"
  description="Custom page description here"
  url="https://boswelldigitalsolutions.com/custom"
  image="https://boswelldigitalsolutions.com/og-cover.jpg"
/>
```

### Generated Tags

The component generates:
- `<title>`
- `<meta name="description">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:image">`

---

## JsonLd

Structured data (Schema.org JSON-LD) for search engines.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `schema` | `Record<string, any>` | No | Organization schema | Custom schema object |

### Usage

```tsx
import JsonLd from '~/components/JsonLd'
import { ORGANIZATION_SCHEMA } from '~/config/meta'

// Use default organization schema (home page)
<JsonLd />

// Custom schema
const customSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'App Name',
  // ... more properties
}
<JsonLd schema={customSchema} />
```

### Default Schema

The default organization schema includes:
- Organization name and URL
- Founder information
- Address (Lexington, KY)
- Social media links

Edit `dev/config/meta.ts` to update the `ORGANIZATION_SCHEMA`.

---

## Best Practices

### Component Usage

1. **Always use centralized config** for apps and meta data
2. **Prefer utility classes** over inline styles
3. **Use semantic HTML** within components
4. **Test keyboard navigation** after adding interactive elements
5. **Maintain accessibility** with ARIA attributes

### Adding New Components

When creating new components:

```tsx
import { Component } from 'solid-js'

interface MyComponentProps {
  title: string
  optional?: boolean
}

export const MyComponent: Component<MyComponentProps> = props => {
  return (
    <div class="my-component">
      <h3>{props.title}</h3>
      {props.optional && <p>Optional content</p>}
    </div>
  )
}
```

### Styling Guidelines

1. **Use CSS variables** from `variables.css`
2. **Apply utility classes** for spacing and layout
3. **Create component-specific styles** in `components.css`
4. **Follow naming convention:** `.component-element`

Example:
```css
.my-component {
  padding: var(--space-md);
  background: var(--color-background-alt);
}

.my-component h3 {
  color: var(--color-primary);
}
```

---

## Common Patterns

### Page Layout

```tsx
import { Section } from '~/components/Section'
import Seo from '~/components/Seo'
import { META_CONFIG } from '~/config/meta'

const MyPage: Component = () => {
  return (
    <>
      <Seo {...META_CONFIG.mypage} />
      <main id="main">
        <div class="hero">
          <h1>Page Title</h1>
          <p>Hero description</p>
        </div>

        <div class="container-center max-w-960">
          <Section title="Section Title">
            <p>Content</p>
          </Section>
        </div>
      </main>
    </>
  )
}
```

### Listing Page

```tsx
import { ProductGrid } from '~/components/ProductGrid'
import { APPS } from '~/config/apps'

const ListingPage: Component = () => {
  const filteredApps = APPS.filter(app => app.category === 'developer-tools')

  return (
    <main id="main">
      <Section
        title="Developer Tools"
        subtitle="Build better software"
      >
        <ProductGrid products={filteredApps} columns={2} />
      </Section>
    </main>
  )
}
```

---

## Troubleshooting

### Component not displaying

1. Check imports are correct
2. Verify props are provided correctly
3. Check CSS classes exist in stylesheets
4. Use browser DevTools to inspect element

### Styling issues

1. Verify CSS variables are defined
2. Check utility classes are correct
3. Ensure styles.css imports all CSS files
4. Clear browser cache

### TypeScript errors

1. Verify interface is defined
2. Check all required props are provided
3. Ensure types match (e.g., `string` vs `number`)

---

## Resources

- [Solid.js Components](https://docs.solidjs.com/concepts/components/basics)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
