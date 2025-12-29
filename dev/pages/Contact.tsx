import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

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
      <main id="main">
        <div class="hero">
          <h1>Contact</h1>
          <p class="text-lg">Use this form for scoped product or service inquiries.</p>
          <p class="text-sm text-muted mt-sm">
            Responses are handled by the founder and principal engineer.
          </p>
        </div>

        <div class="container-center max-w-960">
          <section class="contact">
            <div class="card mb-xl">
              <h2 class="h3 mb-md">Request details</h2>
              <p>
                Provide scope, timing, and relevant links. If you are asking about a product,
                include the product name and page.
              </p>
            </div>

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
              <p class="hidden">
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

              <button
                type="submit"
                class="btn btn-primary btn-lg"
                disabled={isSubmitting()}
              >
                {isSubmitting() ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div class="contact-info card mt-xl">
              <h2 class="h3 mb-md">Other Ways to Reach Us</h2>
              <div class="grid-2">
                <div>
                  <h4 class="h4">Email</h4>
                  <p>
                    <a href="mailto:contact@boswelldigitalsolutions.com" class="text-primary">
                      contact@boswelldigitalsolutions.com
                    </a>
                  </p>
                </div>
                <div>
                  <h4 class="h4">Location</h4>
                  <p>Lexington, Kentucky</p>
                </div>
                <div>
                  <h4 class="h4">Business Type</h4>
                  <p>Service-Disabled Veteran-Owned Small Business (SDVOSB)</p>
                </div>
                <div>
                  <h4 class="h4">Response Time</h4>
                  <p>Typically within two business days</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Contact
