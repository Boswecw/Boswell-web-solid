import { Component, onMount } from 'solid-js'
import { ORGANIZATION_SCHEMA } from '../config/meta'

interface JsonLdProps {
  schema?: Record<string, any>
}

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

