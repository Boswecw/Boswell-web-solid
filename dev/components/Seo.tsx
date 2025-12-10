import { onMount } from 'solid-js'

/**
 * Props for the SEO component
 */
type Props = {
  /** Page title for browser tab and social media */
  title: string
  /** Page description for search engines and social previews */
  description: string
  /** Canonical URL for the current page */
  url: string
  /** Optional Open Graph image URL for social media previews */
  image?: string
}

/**
 * SEO meta tags component for search engines and social media
 *
 * @component
 * @description
 * Dynamically injects SEO meta tags into the document head on page mount.
 * Handles page title, description, canonical URL, Open Graph tags (Facebook/LinkedIn),
 * and Twitter Card tags. Automatically creates or updates meta tags without duplicates.
 *
 * @param {Props} p - Component props
 * @param {string} p.title - Page title (used for <title>, og:title, twitter:title)
 * @param {string} p.description - Page description (meta description, og:description)
 * @param {string} p.url - Canonical URL (link[rel=canonical], og:url)
 * @param {string} [p.image] - OG image URL for social sharing (og:image, twitter:image)
 *
 * @features
 * - Sets document.title dynamically
 * - Injects canonical link tag
 * - Configures Open Graph tags (Facebook, LinkedIn)
 * - Configures Twitter Card (summary_large_image)
 * - Avoids duplicate meta tags (updates existing or creates new)
 * - No visual rendering (returns null)
 *
 * @seoTags
 * **Standard Meta:**
 * - `<title>` - Page title
 * - `<meta name="description">` - Page description
 * - `<link rel="canonical">` - Canonical URL
 *
 * **Open Graph (Facebook/LinkedIn):**
 * - `og:type` - "website"
 * - `og:title` - Page title
 * - `og:description` - Page description
 * - `og:url` - Canonical URL
 * - `og:image` - Social preview image
 *
 * **Twitter Card:**
 * - `twitter:card` - "summary_large_image"
 * - `twitter:title` - Page title
 * - `twitter:description` - Page description
 * - `twitter:image` - Social preview image
 *
 * @example
 * ```tsx
 * // Basic usage with title and description
 * <Seo
 *   title="About Us - Boswell Digital Solutions"
 *   description="Service-Disabled Veteran-Owned SaaS studio building AI-powered applications."
 *   url="https://boswelldigitalsolutions.com/about"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With Open Graph image for social sharing
 * <Seo
 *   title="Forge Ecosystem Apps - Boswell Digital Solutions"
 *   description="Explore our suite of 6 innovative AI and web applications."
 *   url="https://boswelldigitalsolutions.com/apps"
 *   image="https://boswelldigitalsolutions.com/og-cover.jpg"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Using config values for consistency
 * import { META_CONFIG } from '../config/meta'
 *
 * <Seo
 *   title={META_CONFIG.home.title}
 *   description={META_CONFIG.home.description}
 *   url={META_CONFIG.home.url}
 *   image={META_CONFIG.home.ogImage}
 * />
 * ```
 *
 * @lifecycle
 * Executes on component mount (SolidJS `onMount`) to inject tags into document head.
 * Tags persist across client-side navigation unless updated by another Seo instance.
 *
 * @bestPractices
 * - Use on every page for proper SEO
 * - Keep titles under 60 characters
 * - Keep descriptions under 160 characters
 * - Always provide canonical URL
 * - Use 1200x630px images for og:image
 * - Centralize SEO config in meta.ts
 *
 * @performance
 * - Renders null (no DOM impact)
 * - Only executes on mount (not on every render)
 * - Reuses existing meta tags when possible
 *
 * @see {@link ../config/meta.ts} for centralized SEO configuration
 * @see {@link https://ogp.me/ Open Graph Protocol}
 * @see {@link https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup Twitter Cards}
 */
export default function Seo(p: Props) {
  onMount(() => {
    /**
     * Helper function to create or update a meta tag
     * @param {string} n - Meta tag name or property
     * @param {string} c - Content value
     * @param {string} a - Attribute name ('name' or 'property')
     */
    const set = (n: string, c: string, a = 'name') => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${a}="${n}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(a, n)
        document.head.appendChild(el)
      }
      el.setAttribute('content', c)
    }

    document.title = p.title

    // canonical
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = p.url

    // base + OG
    set('description', p.description)
    set('og:type', 'website', 'property')
    set('og:title', p.title, 'property')
    set('og:description', p.description, 'property')
    set('og:url', p.url, 'property')
    if (p.image) set('og:image', p.image, 'property')

    // Twitter
    set('twitter:card', 'summary_large_image')
    set('twitter:title', p.title)
    set('twitter:description', p.description)
    if (p.image) set('twitter:image', p.image)
  })

  return null
}

