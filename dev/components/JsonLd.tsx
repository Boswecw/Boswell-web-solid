import { Component, onMount } from 'solid-js'
import { ORGANIZATION_SCHEMA } from '../config/meta'

/**
 * Props for the JsonLd component
 */
interface JsonLdProps {
  /** Optional custom schema object (defaults to ORGANIZATION_SCHEMA) */
  schema?: Record<string, any>
}

/**
 * JSON-LD structured data component for rich search results
 *
 * @component
 * @description
 * Injects JSON-LD (JavaScript Object Notation for Linked Data) structured data
 * into the document head for enhanced SEO and rich search results (Google, Bing).
 * Defaults to Organization schema with LocalBusiness type, or accepts custom schema objects.
 *
 * @param {JsonLdProps} props - Component props
 * @param {Record<string, any>} [props.schema] - Custom schema.org structured data object
 *
 * @features
 * - Injects structured data for search engines
 * - Defaults to Organization + LocalBusiness schema
 * - Supports custom schema objects (Product, Service, etc.)
 * - Automatically creates or updates script tag
 * - No visual rendering (returns null)
 * - Includes SDVOSB founder information
 *
 * @defaultSchema
 * Uses ORGANIZATION_SCHEMA from meta.ts with these additions:
 * ```json
 * {
 *   "@context": "https://schema.org",
 *   "@type": ["Organization", "LocalBusiness"],
 *   "name": "Boswell Digital Solutions LLC",
 *   "founder": {
 *     "@type": "Person",
 *     "name": "Charles Boswell",
 *     "jobTitle": "Founder & CEO",
 *     "description": "U.S. Navy Veteran"
 *   },
 *   "address": {
 *     "@type": "PostalAddress",
 *     "addressLocality": "Lexington",
 *     "addressRegion": "KY"
 *   },
 *   "image": "https://boswelldigitalsolutions.com/og-cover.jpg",
 *   "areaServed": "US",
 *   "sameAs": ["https://www.linkedin.com/in/kywebdevboswell/"]
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Use default Organization schema
 * <JsonLd />
 * ```
 *
 * @example
 * ```tsx
 * // Custom Product schema for app page
 * <JsonLd
 *   schema={{
 *     "@context": "https://schema.org",
 *     "@type": "SoftwareApplication",
 *     "name": "VibeForge",
 *     "applicationCategory": "DeveloperApplication",
 *     "offers": {
 *       "@type": "Offer",
 *       "price": "0",
 *       "priceCurrency": "USD"
 *     }
 *   }}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Service schema for services page
 * <JsonLd
 *   schema={{
 *     "@context": "https://schema.org",
 *     "@type": "Service",
 *     "serviceType": "SaaS Development",
 *     "provider": {
 *       "@type": "Organization",
 *       "name": "Boswell Digital Solutions"
 *     }
 *   }}
 * />
 * ```
 *
 * @seoImpact
 * - Enables rich search results (Google Knowledge Panel)
 * - Shows business info in search (address, hours, reviews)
 * - Improves local search visibility
 * - Helps search engines understand site structure
 * - Required for Google Merchant Center
 *
 * @lifecycle
 * Executes on component mount to inject structured data into document head.
 * Updates existing script tag if already present (avoids duplicates).
 *
 * @bestPractices
 * - Validate schema with Google Rich Results Test
 * - Use one JsonLd per page type
 * - Follow Schema.org vocabulary
 * - Include all required properties
 * - Test with Google Search Console
 *
 * @testing
 * - [Google Rich Results Test](https://search.google.com/test/rich-results)
 * - [Schema.org Validator](https://validator.schema.org/)
 * - [Google Search Console](https://search.google.com/search-console)
 *
 * @see {@link ../config/meta.ts} for ORGANIZATION_SCHEMA definition
 * @see {@link https://schema.org/ Schema.org Documentation}
 * @see {@link https://developers.google.com/search/docs/appearance/structured-data Google Structured Data}
 * @see {@link JsonLdProps} for detailed prop types
 */
const JsonLd: Component<JsonLdProps> = props => {
  onMount(() => {
    const schema = props.schema || {
      ...ORGANIZATION_SCHEMA,
      '@type': ['Organization', 'LocalBusiness'],
      image: 'https://boswelldigitalsolutions.com/og-cover.jpg',
      areaServed: 'US',
      sameAs: ['https://www.linkedin.com/in/kywebdevboswell/'],
    }

    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)
  })

  return null
}

export default JsonLd

