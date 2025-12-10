# Boswell Digital Solutions Website

A modern, accessible, SEO-optimized website for Boswell Digital Solutions LLC — a veteran-owned SaaS studio building the Forge Ecosystem of AI-powered applications.

## 🎯 Project Overview

**Framework:** SolidStart (Solid.js)
**Language:** TypeScript
**Status:** Production Ready
**Owner:** Charles Boswell (SDVOSB Founder)

### Key Features

- ✅ **Component-based Architecture** - Reusable, maintainable components
- ✅ **WCAG 2.1 AA Compliant** - Fully accessible to all users
- ✅ **SEO Optimized** - Meta tags, structured data, sitemap
- ✅ **Responsive Design** - Mobile, tablet, desktop support
- ✅ **Government-Ready** - SDVOSB positioning and federal experience
- ✅ **Single Source of Truth** - Centralized app and meta configuration

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Build

```bash
npm run build
```

## 📁 Project Structure

```
boswell-web-solid/
├── dev/                          # Development/demo environment
│   ├── config/                   # Configuration files
│   │   ├── apps.ts              # App metadata (Forge Ecosystem)
│   │   └── meta.ts              # SEO configuration
│   ├── components/               # Reusable components
│   ├── pages/                    # Route pages
│   └── styles/                   # CSS files
├── public/                       # Static assets
│   ├── robots.txt               # Crawler rules
│   └── sitemap.xml              # Site map
└── src/                          # Library source
```

## 🎨 Design System

### CSS Variables

All design tokens are defined in `dev/styles/variables.css`:

```css
/* Colors */
--color-primary: #2563eb
--color-accent: #f59e0b

/* Spacing (8px grid) */
--space-sm: 1rem     /* 16px */
--space-md: 1.5rem   /* 24px */
--space-lg: 2rem     /* 32px */
```

### Utility Classes

```jsx
<div class="mt-md mb-lg p-sm">Content</div>
<div class="flex flex-center gap-md">Items</div>
<p class="text-lg font-semibold">Text</p>
```

## 🧩 Components

### Adding a New App

Edit `dev/config/apps.ts` and add to the `APPS` array:

```typescript
{
  id: 'newapp',
  name: 'NewApp',
  slug: '/apps/newapp',
  tagline: 'Short description',
  shortDescription: 'Card description',
  audience: 'Target users',
  category: 'developer-tools',
  features: ['Feature 1', 'Feature 2'],
  cta: 'Learn more',
}
```

The app will automatically appear on the homepage and `/apps` page.

## 🎯 Page Routes

- `/` - Homepage with featured apps
- `/apps` - All Forge Ecosystem apps
- `/about` - Founder story
- `/government` - SDVOSB positioning
- `/services` - Service offerings
- `/contact` - Contact form

## ♿ Accessibility

WCAG 2.1 AA compliant with:
- Keyboard navigation
- Skip links
- Focus states
- ARIA attributes
- Screen reader support

Test with:
- [WAVE Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Chrome Lighthouse

## 📄 License

MIT License

## 👤 Contact

**Boswell Digital Solutions LLC**
Service-Disabled Veteran-Owned Small Business (SDVOSB)
Lexington, Kentucky

Website: https://boswelldigitalsolutions.com

---

Built with precision and discipline by a U.S. Navy Veteran. 🇺🇸
