import { onMount } from 'solid-js'

type Props = {
  title: string
  description: string
  url: string
  image?: string
}

export default function Seo(p: Props) {
  onMount(() => {
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

