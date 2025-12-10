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

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again or email us directly at contact@boswelldigitalsolutions.com')
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
        <section class="contact">
          <h1>Get In Touch</h1>
          <p>Let's discuss your project and how we can help.</p>

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

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Hidden fields for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            <p style="display:none;">
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
                placeholder="Tell us about your project or inquiry..."
                required
                rows="6"
                value={formData().message}
                onInput={(e) => setFormData({ ...formData(), message: e.currentTarget.value })}
                disabled={isSubmitting()}
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              disabled={isSubmitting()}
            >
              {isSubmitting() ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div class="contact-info">
            <h2>Other Ways to Reach Us</h2>
            <p>
              <strong>Email:</strong> <a href="mailto:contact@boswelldigitalsolutions.com">contact@boswelldigitalsolutions.com</a>
            </p>
            <p>
              <strong>Location:</strong> Lexington, KY
            </p>
            <p>
              <strong>SDVOSB Certified:</strong> Service-Disabled Veteran-Owned Small Business
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact

