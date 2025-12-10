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
        <div class="hero">
          <h1>Get In Touch</h1>
          <p class="text-lg">
            Direct access to Charles Boswell, Founder & Principal Engineer.
          </p>
          <p class="text-sm text-muted mt-sm">
            Responsive to partnership inquiries, pilot projects, custom development, and government
            engagements.
          </p>
        </div>

        <div class="container-center max-w-960">
          <section class="contact">
            <div class="card mb-xl">
              <h2 class="h3 mb-md">Why Direct Access Matters</h2>
              <p class="mb-md">
                When you contact Boswell Digital Solutions, you're reaching the founder and
                principal engineer—not an account manager or sales team. This means:
              </p>
              <ul class="list-bulleted">
                <li>
                  <strong>Clear Technical Discussion:</strong> Immediate technical understanding
                  and honest assessment of what's possible
                </li>
                <li>
                  <strong>Rapid Response:</strong> No layers of bureaucracy, just direct
                  communication and quick answers
                </li>
                <li>
                  <strong>Accountability:</strong> The person you talk to is the person who builds
                  the solution
                </li>
                <li>
                  <strong>Federal Experience:</strong> Direct conversation with someone who
                  understands government operations and requirements
                </li>
              </ul>
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

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
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
                  <p>Typically within 24 hours on business days</p>
                </div>
              </div>
              <p class="text-sm text-muted mt-lg">
                <strong>Free consultation</strong> for government agencies and non-profit
                organizations
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Contact
