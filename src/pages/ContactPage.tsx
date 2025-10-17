import { createSignal, For } from 'solid-js'
import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import Button from '../components/Button'
import LinkButton from '../components/LinkButton'
import { submitNetlifyForm, formDataToObject } from '../utils/formUtils'

const packages = [
  {
    id: "starter",
    name: "Starter Website",
    price: "$900 – $1,500",
    description: "Clean, fast, custom-coded site for portfolios and small businesses.",
    pages: "1–3",
    revisions: "3",
    timeline: "1–2 weeks",
    popular: false,
    features: [
      "Custom React components (no templates)",
      "Responsive & accessible (WCAG 2.1)",
      "Contact form + basic SEO",
      "Deployed with best practices",
      "Analytics setup",
      "Email/domain setup guidance",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    price: "$1,800 – $3,500",
    description: "Marketing site plus content tools and integrations for growing teams.",
    pages: "4–7",
    revisions: "5",
    timeline: "2–3 weeks",
    popular: true,
    features: [
      "Everything from Starter",
      "CMS/admin for easy updates",
      "Multiple forms & dashboards",
      "Performance & image optimization",
      "Google Business/Maps integration",
      "Content modeling & SEO enhancements",
    ],
  },
  {
    id: "ecommerce",
    name: "eCommerce Website",
    price: "$3,000 – $6,000+",
    description: "Modern storefront with secure checkout, inventory, and order management.",
    pages: "5–10+",
    revisions: "Unlimited",
    timeline: "3–5 weeks",
    popular: false,
    features: [
      "Stripe/PayPal integration",
      "Product catalog & orders",
      "Customer accounts & email receipts",
      "Speed & SEO tuned for conversions",
      "Admin dashboard for products",
      "Tax/shipping rules setup",
    ],
  },
]

export default function ContactPage() {
  const [selectedPackage, setSelectedPackage] = createSignal("starter")
  const [formData, setFormData] = createSignal({
    name: "",
    email: "",
    company: "",
    projectType: "web-development",
    budget: "$900 – $1,500",
    timeline: "1–2 weeks",
    message: "",
  })
  const [submitting, setSubmitting] = createSignal(false)
  const [toast, setToast] = createSignal({ type: "", msg: "" })

  const handlePackageSelect = (packageId: string) => {
    const selected = packages.find((pkg) => pkg.id === packageId)
    if (!selected) return
    
    setSelectedPackage(packageId)
    setFormData(prev => ({
      ...prev,
      budget: selected.price,
      projectType: packageId === "ecommerce" ? "ecommerce" : "web-development",
      timeline: selected.timeline,
    }))
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    if (submitting()) return

    setSubmitting(true)
    setToast({ type: "", msg: "" })

    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)

      // Convert FormData to typed object
      const data = formDataToObject(formData)

      // Add package selection data
      const selected = packages.find((pkg) => pkg.id === selectedPackage())
      data.selectedPackageId = selectedPackage()
      data.selectedPackageName = selected?.name || ""
      data.selectedPackagePrice = selected?.price || ""

      const response = await submitNetlifyForm(data)

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`)
      }

      setToast({
        type: "success",
        msg: "Thanks — message received. I'll reply within 24 hours."
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "web-development",
        budget: "$900 – $1,500",
        timeline: "1–2 weeks",
        message: "",
      })
      setSelectedPackage("starter")

      setTimeout(() => setToast({ type: "", msg: "" }), 4000)

    } catch (err) {
      console.error("Form submission error:", err)
      setToast({
        type: "error",
        msg: "Submit failed. Please try again or email charlesboswell@boswelldigitalsolutions.com.",
      })
      setTimeout(() => setToast({ type: "", msg: "" }), 6000)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEOHead
        title="Digital Solutions Pricing & Contact | Boswell Digital Solutions LLC"
        description="Custom React websites, business sites, eCommerce, and bespoke digital solutions. Transparent pricing and timelines. Veteran-owned in Lexington, Kentucky."
        keywords="digital solutions pricing, website quote lexington ky, react developer rates, ecommerce development, custom web app"
        url="https://boswelldigitalsolutions.com/contact"
      />

      <div class="min-h-screen bg-gray-950 text-white">
        <Navbar />

        <div class="pt-24 p-6">
          <div class="max-w-7xl mx-auto">
            {/* Header */}
            <div class="mb-8">
              <LinkButton href="/" variant="ghost" class="mb-6">
                ← Back to Home
              </LinkButton>

              <h1 class="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                Let's Work Together
              </h1>
              <p class="text-center text-gray-400 text-lg">
                Veteran-owned digital solutions with military-grade precision
              </p>
            </div>

            {/* Service Packages */}
            <div class="mb-12">
              <h2 class="text-3xl font-bold text-center text-blue-400 mb-8">
                Service Packages
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <For each={packages}>
                  {(pkg) => (
                    <div
                      class={`relative bg-gray-800/50 rounded-lg p-6 border-2 cursor-pointer transition-all duration-300 ${
                        selectedPackage() === pkg.id
                          ? "border-blue-400 bg-blue-900/20 transform scale-105"
                          : "border-gray-700 hover:border-gray-600"
                      } ${pkg.popular ? "ring-2 ring-blue-400/40" : ""}`}
                      onClick={() => handlePackageSelect(pkg.id)}
                    >
                      {pkg.popular && (
                        <div class="absolute -top-3 right-3">
                          <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            ⭐ MOST POPULAR
                          </span>
                        </div>
                      )}

                      <h3 class="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                      <div class="text-2xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                      <p class="text-gray-400 text-sm mb-4">{pkg.description}</p>

                      <div class="space-y-2 text-sm mb-4">
                        <div class="flex justify-between">
                          <span class="text-gray-400">Pages:</span>
                          <span class="text-white">{pkg.pages}</span>
                        </div>
                        <div class="flex justify-between">
                          <span class="text-gray-400">Timeline:</span>
                          <span class="text-white">{pkg.timeline}</span>
                        </div>
                      </div>

                      <div class="space-y-2">
                        <h4 class="text-white font-semibold text-sm">Included:</h4>
                        <For each={pkg.features.slice(0, 3)}>
                          {(feature) => (
                            <div class="flex items-start gap-2 text-xs">
                              <span class="text-green-400 mt-1">✓</span>
                              <span class="text-gray-300">{feature}</span>
                            </div>
                          )}
                        </For>
                        {pkg.features.length > 3 && (
                          <div class="text-blue-400 text-xs">
                            +{pkg.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>

            {/* Contact Form */}
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 class="text-2xl font-semibold text-blue-400 mb-6">
                  Project Details
                </h2>

                {/* Netlify Form */}
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  class="space-y-6"
                >
                  {/* Netlify required fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p style="display: none;">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-white text-sm font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData().name}
                        onInput={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label class="block text-white text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData().email}
                        onInput={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-white text-sm font-semibold mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData().company}
                      onInput={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label class="block text-white text-sm font-semibold mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      value={formData().message}
                      onInput={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      placeholder="Tell me about your goals, target audience, pages/features needed..."
                    />
                  </div>

                  {/* Hidden fields for package data */}
                  <input type="hidden" name="selectedPackageId" value={selectedPackage()} />
                  <input type="hidden" name="selectedPackageName" value={packages.find(p => p.id === selectedPackage())?.name || ""} />
                  <input type="hidden" name="selectedPackagePrice" value={packages.find(p => p.id === selectedPackage())?.price || ""} />
                  <input type="hidden" name="projectType" value={formData().projectType} />
                  <input type="hidden" name="budget" value={formData().budget} />
                  <input type="hidden" name="timeline" value={formData().timeline} />

                  <Button
                    type="submit"
                    disabled={submitting()}
                    class={`w-full text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 ${
                      submitting()
                        ? "bg-blue-800 cursor-not-allowed opacity-50"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {submitting() ? "Sending..." : "Send Project Request →"}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div class="space-y-6">
                <h2 class="text-2xl font-semibold text-blue-400 mb-6">Get in Touch</h2>

                <div class="space-y-4">
                  <div class="flex items-center gap-4">
                    <span class="text-blue-400 text-xl">📧</span>
                    <div>
                      <p class="font-semibold">Email</p>
                      <a
                        href="mailto:charlesboswell@boswelldigitalsolutions.com"
                        class="text-gray-300 hover:text-blue-400"
                      >
                        charlesboswell@boswelldigitalsolutions.com
                      </a>
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <span class="text-blue-400 text-xl">📞</span>
                    <div>
                      <p class="font-semibold">Phone</p>
                      <a
                        href="tel:+18594367304"
                        class="text-gray-300 hover:text-blue-400"
                      >
                        (859) 436-7304
                      </a>
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <span class="text-blue-400 text-xl">📍</span>
                    <div>
                      <p class="font-semibold">Location</p>
                      <p class="text-gray-300">Lexington, Kentucky</p>
                    </div>
                  </div>
                </div>

                {/* Veteran Badge */}
                <div class="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 class="text-white font-semibold mb-4 text-center">Trusted Standards</h3>
                  <div class="space-y-3">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-300">🎖️ U.S. Navy Veteran</span>
                      <span class="text-blue-400 font-semibold">✓ Verified</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-300">🌲 16 Years Forest Service</span>
                      <span class="text-green-400 font-semibold">✓ Leadership</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-300">📍 Lexington Local</span>
                      <span class="text-yellow-400 font-semibold">✓ Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {toast().type && (
          <div
            class={`fixed bottom-4 right-4 z-50 rounded-lg px-4 py-3 shadow-lg border max-w-md ${
              toast().type === "success"
                ? "bg-green-900/80 border-green-600 text-green-100"
                : "bg-red-900/80 border-red-600 text-red-100"
            }`}
          >
            <div class="flex items-center gap-2">
              {toast().type === "success" ? "✅" : "❌"}
              <span>{toast().msg}</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
