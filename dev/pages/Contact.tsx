import type { Component } from 'solid-js'
import { createSignal, For } from 'solid-js'
import Seo from '../components/Seo'
import { PageShell } from '../components/PageShell'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { META_CONFIG } from '../config/meta'

const contactMethods = [
  {
    title: 'Email',
    chip: 'Monitored daily',
    detail: (
      <>
        <p>
          <a href="mailto:contact@boswelldigitalsolutions.com" class="text-primary">
            contact@boswelldigitalsolutions.com
          </a>
        </p>
        <p class="text-sm text-muted">Replied to within two business days.</p>
      </>
    ),
    action: (
      <a class="btn btn-outline" href="mailto:contact@boswelldigitalsolutions.com">
        Email us
      </a>
    )
  },
  {
    title: 'Engagement request',
    chip: 'Scoped intake',
    detail: (
      <p>
        Submit the intake form to describe scope, timing, and acceptance needs. Response happens after
        a scope review.
      </p>
    ),
    action: (
      <a class="btn btn-outline" href="/intake">
        Open intake form
      </a>
    )
  },
  {
    title: 'Support',
    chip: 'Governed support',
    detail: (
      <p>
        Support is handled through the same disciplined governance. Include references to product or
        service identifiers when submitting.
      </p>
    ),
    action: (
      <a class="btn btn-outline" href="/support">
        Support information
      </a>
    )
  }
]

const Contact: Component = () => {
  const [formData, setFormData] = createSignal({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = createSignal(false)
  const [submitStatus, setSubmitStatus] = createSignal<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = createSignal('')

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const result = await response.json().catch(() => null)

      if (response.ok && result?.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        form.reset()
      } else {
        const message = result?.error?.message || 'Form submission failed'
        throw new Error(message)
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again or email us directly at contact@boswelldigitalsolutions.com'
      )
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Seo
        title={META_CONFIG.contact.title}
        description={META_CONFIG.contact.description}
        url={META_CONFIG.contact.url}
        image={META_CONFIG.contact.ogImage}
      />
      <PageShell>
        <PageHero
          title="Contact"
          subtitle="Use this form for scoped product or service inquiries."
          description="Responses are handled by the founder and principal engineer. Provide scope, timing, and any relevant references."
        />

        <Section title="Request details">
          <Card>
            <p class="mb-md">
              Provide scope, timing, and any relevant links. Mention the product name and page when applicable.
            </p>
            <p>If you need support, note the product or service identifier so responses stay focused.</p>
          </Card>
        </Section>

        <Section title="Submit a request" subtitle="Tell us what you are trying to accomplish.">
          <Card>
            {submitStatus() === 'success' && (
              <div class="alert alert-success" role="alert">
                <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            {submitStatus() === 'error' && (
              <div class="alert alert-error" role="alert">
                <strong>Error:</strong> {errorMessage()}
              </div>
            )}

            <form name="contact" method="POST" onSubmit={handleSubmit}>
              <p class="sr-only">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div class="form-group">
                <label for="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData().name}
                  onInput={(e) => setFormData({ ...formData(), name: e.currentTarget.value })}
                  disabled={isSubmitting()}
                />
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData().email}
                  onInput={(e) => setFormData({ ...formData(), email: e.currentTarget.value })}
                  disabled={isSubmitting()}
                />
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project, partnership opportunity, or inquiry..."
                  required
                  rows="6"
                  value={formData().message}
                  onInput={(e) => setFormData({ ...formData(), message: e.currentTarget.value })}
                  disabled={isSubmitting()}
                />
              </div>

              <button type="submit" class="btn btn-primary btn-lg" disabled={isSubmitting()}>
                {isSubmitting() ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </Card>
        </Section>

        <Section title="Other contact methods">
          <CardGrid>
            <For each={contactMethods}>
              {(method) => (
                <Card title={method.title} chip={method.chip} actions={method.action}>
                  {method.detail}
                </Card>
              )}
            </For>
          </CardGrid>
        </Section>
      </PageShell>
    </>
  )
}

export default Contact
