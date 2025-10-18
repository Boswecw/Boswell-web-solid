import { onMount } from "solid-js"

interface SeoProps {
  title: string
  description: string
  url: string
  image?: string
}

/**
 * Dynamic SEO component for updating meta tags on each page
 * Handles title, description, canonical URL, OG tags, and Twitter cards
 */
export default function Seo(props: SeoProps) {
  onMount(() => {
    // Helper to set or create meta tags
    const setMeta = (name: string, content: string, attribute = "name") => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`)
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attribute, name)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    // Set page title
    document.title = props.title

    // Set canonical URL
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement("link")
      link.rel = "canonical"
      document.head.appendChild(link)
    }
    link.href = props.url

    // Basic meta tags
    setMeta("description", props.description)

    // Open Graph tags (for social media sharing)
    setMeta("og:type", "website", "property")
    setMeta("og:title", props.title, "property")
    setMeta("og:description", props.description, "property")
    setMeta("og:url", props.url, "property")
    if (props.image) {
      setMeta("og:image", props.image, "property")
    }

    // Twitter Card tags
    setMeta("twitter:card", "summary_large_image")
    setMeta("twitter:title", props.title)
    setMeta("twitter:description", props.description)
    if (props.image) {
      setMeta("twitter:image", props.image)
    }
  })

  // Component renders nothing (just updates head)
  return null
}

