import type { Component } from 'solid-js'
import { useParams } from '@solidjs/router'
import Seo from '../components/Seo'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'
import { SHOP_PRODUCTS } from '../config/shop'

const ShopDetail: Component = () => {
  const params = useParams()
  const slug = () => params.slug || 'listing'
  const product = () => SHOP_PRODUCTS.find((item) => item.slug === slug())

  return (
    <>
      <Seo
        title={`Shop Item — ${META_CONFIG.shop.title}`}
        description={META_CONFIG.shop.description}
        url={`${META_CONFIG.shop.url}/${slug()}`}
        image={META_CONFIG.shop.ogImage}
      />
      <main id="main">
        <section class="hero">
          <h1>{product() ? product()!.name : 'Shop Item'}</h1>
          <p class="text-lg">{product() ? product()!.summary : 'Listing not found.'}</p>
        </section>

        <div class="container-center max-w-960">
          {!product() && (
            <Section title="Listing unavailable">
              <div class="card">
                <p class="mb-md">The requested listing was not found.</p>
                <div class="text-center mt-lg">
                  <a href="/shop">
                    <button class="btn btn-outline">Back to shop</button>
                  </a>
                </div>
              </div>
            </Section>
          )}

          {product() && (
            <>
              <Section title="What it is">
                <div class="card">
                  <p class="mb-md">{product()!.summary}</p>
                  <p class="text-sm text-muted">{product()!.priceNote}</p>
                </div>
              </Section>

              <Section title="Who it's for">
                <div class="card">
                  <p>{product()!.forWho}</p>
                </div>
              </Section>

              <Section title="What you receive">
                <div class="card">
                  <ul class="list-bulleted">
                    {product()!.includes.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </Section>

              <Section title="What you do NOT receive">
                <div class="card">
                  <ul class="list-bulleted">
                    {product()!.excludes.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                  <p class="mt-md">
                    This product does not grant access to ForgeCommand, Forge:SMITH, or internal
                    governance systems.
                  </p>
                </div>
              </Section>

              <Section title="License / terms snippet">
                <div class="card">
                  <p>{product()!.license}</p>
                </div>
              </Section>

              <Section title="Refund statement">
                <div class="card">
                  <p>{product()!.refund}</p>
                </div>
              </Section>

              <Section title="Purchase">
                <div class="card">
                  <p class="mb-md">
                    Checkout is coming soon. Use the contact form to request purchase access.
                  </p>
                  <div class="text-center mt-lg">
                    <a href="/contact">
                      <button class="btn btn-primary">{product()!.ctaLabel}</button>
                    </a>
                  </div>
                </div>
              </Section>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default ShopDetail
