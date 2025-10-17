import { createEffect } from 'solid-js'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  url?: string
  image?: string
}

export default function SEOHead(props: SEOHeadProps) {
  const title = () => props.title || "Boswell Digital Solutions LLC"
  const description = () => props.description || "Veteran-owned digital solutions company in Lexington, KY. Custom React websites, AI integration, and business automation. Starting at $750."
  const keywords = () => props.keywords || "digital solutions, react developer, lexington ky, veteran owned business, custom websites, AI integration"
  const url = () => props.url || "https://boswelldigitalsolutions.com"
  const image = () => props.image || "https://storage.googleapis.com/boswellwebdevsolutionsllc/75C2B6B4-7539-4C70-BB2E-D97E39E038D5.JPG"

  createEffect(() => {
    // Update document title
    document.title = title()
    
    // Update meta tags
    updateMetaTag('description', description())
    updateMetaTag('keywords', keywords())
    updateMetaTag('author', 'Charles Boswell')
    updateMetaTag('robots', 'index, follow')
    
    // Update Open Graph tags
    updateMetaProperty('og:type', 'website')
    updateMetaProperty('og:url', url())
    updateMetaProperty('og:title', title())
    updateMetaProperty('og:description', description())
    updateMetaProperty('og:image', image())
    updateMetaProperty('og:locale', 'en_US')
    
    // Update Twitter tags
    updateMetaProperty('twitter:card', 'summary_large_image')
    updateMetaProperty('twitter:url', url())
    updateMetaProperty('twitter:title', title())
    updateMetaProperty('twitter:description', description())
    updateMetaProperty('twitter:image', image())
    
    // Update canonical URL
    updateCanonicalUrl(url())
    
    // Update structured data
    updateStructuredData(title(), description(), url())
  })

  return null
}

function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function updateMetaProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

function updateCanonicalUrl(url: string) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function updateStructuredData(_title: string, description: string, url: string) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Boswell Digital Solutions LLC",
    "description": description,
    "url": url,
    "telephone": "(859) 436-7304",
    "email": "charlesboswell@boswelldigitalsolutions.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lexington",
      "addressRegion": "KY",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Charles Boswell"
    },
    "serviceArea": {
      "@type": "State",
      "name": "Kentucky"
    },
    "priceRange": "$750-$6000+",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starter Website"
          },
          "price": "750-1200",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Website"
          },
          "price": "1500-3000",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "eCommerce Website"
          },
          "price": "3000-6000",
          "priceCurrency": "USD"
        }
      ]
    }
  }

  let script = document.querySelector('script[type="application/ld+json"]')
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(structuredData)
}
