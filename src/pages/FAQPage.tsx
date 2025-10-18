import { createSignal, For, onMount } from 'solid-js'
import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import LinkButton from '../components/LinkButton'

const faqs = [
  {
    question: "What's the difference between a website and a web app?",
    answer: "A website is primarily informational (marketing, blogs, portfolios). A web app is interactive and functional (dashboards, automation tools, custom systems). We build both, and we'll help you determine which is right for your needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on complexity. Starter websites: 1-2 weeks. Business websites: 2-3 weeks. eCommerce: 3-5 weeks. Custom web apps: 6-12+ weeks. We provide detailed timelines during the discovery phase."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes! Every project includes 30 days of free support. After that, we offer maintenance packages starting at $500/month for bug fixes, updates, and minor enhancements."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern frameworks: React, Solid, and SvelteKit for frontends. Node.js, FastAPI, and Express for backends. We choose the best tool for each project's specific needs."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely. We can integrate with APIs, databases, payment processors, CRMs, and other tools. We've successfully integrated with 20+ services including Stripe, Zapier, and custom APIs."
  },
  {
    question: "Do you offer AI/automation features?",
    answer: "Yes! We specialize in AI integration using LangChain, OpenAI, and TensorFlow. We can build chatbots, automate workflows, add intelligent features, and create custom AI tools."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer fixed-price packages for standard services (Starter: $900-$1,500, Business: $1,800-$3,500, eCommerce: $3,000-$6,000+). Custom projects are quoted based on scope and complexity."
  },
  {
    question: "Do you provide hosting?",
    answer: "We deploy to Netlify, Render, or your preferred cloud provider. We can also help you set up custom cloud infrastructure on AWS, Google Cloud, or Azure."
  },
  {
    question: "Can you help with SEO?",
    answer: "Yes. We build SEO-optimized sites with proper meta tags, structured data, sitemaps, and performance optimization. We also provide SEO recommendations and can help with ongoing optimization."
  },
  {
    question: "What if I need changes after launch?",
    answer: "We're here for you! We offer maintenance packages, hourly support, or project-based enhancements. Most clients stay with us for ongoing improvements and new features."
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = createSignal<number | null>(null)

  onMount(() => {
    // Add FAQ schema.org structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }

    let script = document.querySelector('script[type="application/ld+json"][data-faq]')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-faq', 'true')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(faqSchema)
  })

  return (
    <>
      <SEOHead
        title="FAQ | Boswell Digital Solutions LLC"
        description="Frequently asked questions about our web development services, pricing, process, and AI integration capabilities."
        keywords="faq, frequently asked questions, web development, pricing, process, support"
        url="https://boswelldigitalsolutions.com/faq"
      />

      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <Navbar />
        
        <div class="pt-24 p-6">
          <div class="max-w-4xl mx-auto">
            <LinkButton href="/" variant="ghost" class="mb-6">
              ← Back to Home
            </LinkButton>

            <div class="text-center mb-16">
              <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h1>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div class="space-y-4 mb-16">
              <For each={faqs}>
                {(faq, index) => (
                  <div class="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                    <button
                      onClick={() => setOpenIndex(openIndex() === index() ? null : index())}
                      class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                      aria-expanded={openIndex() === index()}
                    >
                      <h3 class="text-lg font-bold text-white pr-4">{faq.question}</h3>
                      <span class={`text-blue-400 text-2xl flex-shrink-0 transition-transform duration-300 ${openIndex() === index() ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    {openIndex() === index() && (
                      <div class="px-6 py-4 bg-gray-900/50 border-t border-gray-700">
                        <p class="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )}
              </For>
            </div>

            {/* Still Have Questions? */}
            <section class="mb-16">
              <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 text-center">
                <h2 class="text-2xl font-bold text-blue-400 mb-4">Still Have Questions?</h2>
                <p class="text-gray-300 mb-6">
                  We're here to help. Reach out and let's discuss your project.
                </p>
                <LinkButton href="/contact" size="lg">
                  Get in Touch →
                </LinkButton>
              </div>
            </section>

            {/* Related Resources */}
            <section>
              <h2 class="text-2xl font-bold text-center text-blue-400 mb-8">Related Resources</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 class="text-lg font-bold text-blue-400 mb-3">📋 Our Process</h3>
                  <p class="text-gray-300 mb-4">Learn how we approach every project with our proven 4-step methodology.</p>
                  <LinkButton href="/process" variant="outline" size="sm">
                    Learn More
                  </LinkButton>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 class="text-lg font-bold text-blue-400 mb-3">📚 Case Studies</h3>
                  <p class="text-gray-300 mb-4">See real examples of projects we've completed and the results we've delivered.</p>
                  <LinkButton href="/case-studies" variant="outline" size="sm">
                    View Cases
                  </LinkButton>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                  <h3 class="text-lg font-bold text-blue-400 mb-3">🎯 Services</h3>
                  <p class="text-gray-300 mb-4">Explore our full range of web development and AI integration services.</p>
                  <LinkButton href="/services" variant="outline" size="sm">
                    View Services
                  </LinkButton>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

