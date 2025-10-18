import { For } from 'solid-js'
import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import LinkButton from '../components/LinkButton'

const services = [
  {
    id: "starter",
    title: "Starter Website",
    blurb: "A clean, fast, custom-coded site for portfolios and small businesses.",
    price: "$900 – $1,500",
    timeline: "1–2 weeks",
    bullets: [
      "Built with React or SvelteKit — no generic templates",
      "Fully responsive and accessible (WCAG 2.1)",
      "Contact form + foundational SEO",
      "Deployed with performance best practices",
    ],
  },
  {
    id: "business",
    title: "Business Website",
    blurb: "Marketing site with content tools, integrations, and room to grow.",
    price: "$1,800 – $3,500",
    timeline: "2–3 weeks",
    bullets: [
      "CMS/admin for easy updates",
      "Advanced forms & analytics",
      "Optimized for performance and SEO",
      "Google Maps & Workspace integration",
    ],
  },
  {
    id: "ecommerce",
    title: "eCommerce Website",
    blurb: "Modern storefront with secure checkout, inventory, and order management.",
    price: "$3,000 – $6,000+",
    timeline: "3–5 weeks",
    bullets: [
      "Stripe/PayPal integration",
      "Product catalog & order management",
      "Customer accounts & email receipts",
      "Admin dashboard for inventory",
    ],
  },
  {
    id: "custom",
    title: "Custom Web App",
    blurb: "Bespoke applications, dashboards, and automation tailored to your operations.",
    price: "Custom Quote",
    timeline: "Scoped per project",
    bullets: [
      "React front-end + Node/Express APIs",
      "Authentication & role-based access",
      "Database design & optimization",
      "Scalable, testable architecture",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Services | Boswell Digital Solutions LLC"
        description="Custom web development services including starter websites, business sites, eCommerce platforms, and custom web applications. Veteran-owned in Lexington, KY."
        keywords="web development services, custom websites, ecommerce development, react development, lexington ky"
        url="https://boswelldigitalsolutions.com/services"
      />

      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <Navbar />
        
        <div class="pt-24 p-6">
          <div class="max-w-7xl mx-auto">
            <LinkButton href="/" variant="ghost" class="mb-6">
              ← Back to Home
            </LinkButton>

            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                Our Services
              </h1>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom digital solutions designed to solve real problems and deliver measurable results
              </p>
            </div>

            {/* Services Grid */}
            <section class="mb-16">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <For each={services}>
                  {(service) => (
                    <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <div class="flex items-start justify-between mb-4">
                        <h3 class="text-2xl font-bold text-white">{service.title}</h3>
                        <div class="text-right">
                          <div class="text-2xl font-bold text-blue-400">{service.price}</div>
                          <div class="text-sm text-gray-400">{service.timeline}</div>
                        </div>
                      </div>
                      
                      <p class="text-gray-300 mb-6">{service.blurb}</p>
                      
                      <ul class="space-y-3 mb-6">
                        <For each={service.bullets}>
                          {(bullet) => (
                            <li class="flex items-start gap-3">
                              <span class="text-green-400 mt-1">✓</span>
                              <span class="text-gray-300">{bullet}</span>
                            </li>
                          )}
                        </For>
                      </ul>
                      
                      <LinkButton href="/contact" class="w-full">
                        Get Started →
                      </LinkButton>
                    </div>
                  )}
                </For>
              </div>
            </section>

            {/* AI & Automation Services */}
            <section class="mb-16">
              <div class="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/20">
                <div class="text-center mb-12">
                  <h2 class="text-3xl font-bold text-purple-400 mb-4">🤖 AI & Automation Services</h2>
                  <p class="text-gray-300 max-w-3xl mx-auto">
                    Leverage cutting-edge AI to automate workflows, enhance user experiences, and unlock new business opportunities
                  </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* AI Chatbots */}
                  <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 class="text-xl font-bold text-purple-400 mb-3">💬 AI Chatbots & Assistants</h3>
                    <p class="text-gray-300 mb-4">
                      Intelligent chatbots powered by OpenAI and LangChain that handle customer inquiries, provide support, and qualify leads 24/7.
                    </p>
                    <ul class="space-y-2">
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">OpenAI GPT integration</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Custom knowledge bases</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Multi-language support</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Seamless handoff to humans</span>
                      </li>
                    </ul>
                  </div>

                  {/* Business Automation */}
                  <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 class="text-xl font-bold text-purple-400 mb-3">⚙️ Business Process Automation</h3>
                    <p class="text-gray-300 mb-4">
                      Automate repetitive tasks, streamline workflows, and reduce manual work with intelligent automation systems.
                    </p>
                    <ul class="space-y-2">
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Workflow automation</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Data processing & ETL</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">API integrations</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Scheduled tasks & webhooks</span>
                      </li>
                    </ul>
                  </div>

                  {/* Data Analysis */}
                  <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 class="text-xl font-bold text-purple-400 mb-3">📊 AI-Powered Analytics</h3>
                    <p class="text-gray-300 mb-4">
                      Transform raw data into actionable insights with machine learning models and intelligent dashboards.
                    </p>
                    <ul class="space-y-2">
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Predictive analytics</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Real-time dashboards</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Custom ML models</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Data visualization</span>
                      </li>
                    </ul>
                  </div>

                  {/* Custom AI Tools */}
                  <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 class="text-xl font-bold text-purple-400 mb-3">🛠️ Custom AI Tools</h3>
                    <p class="text-gray-300 mb-4">
                      Bespoke AI solutions tailored to your unique business challenges and opportunities.
                    </p>
                    <ul class="space-y-2">
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Fine-tuned models</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Computer vision</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Natural language processing</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300 text-sm">Recommendation engines</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="mt-8 text-center">
                  <p class="text-gray-300 mb-4">
                    Ready to harness the power of AI? <span class="text-purple-400 font-semibold">Let's explore what's possible.</span>
                  </p>
                  <LinkButton href="/contact" variant="outline">
                    Discuss Your AI Project
                  </LinkButton>
                </div>
              </div>
            </section>

            {/* Websites vs. Web Apps Comparison */}
            <section class="mb-16">
              <h2 class="text-3xl font-bold text-center text-blue-400 mb-12">
                Websites vs. Web Apps — What's Right for You?
              </h2>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Websites */}
                <div class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/20">
                  <h3 class="text-2xl font-bold text-blue-400 mb-6">🌐 Websites</h3>
                  <p class="text-gray-300 mb-6">
                    Perfect for showcasing your business, sharing information, and capturing leads.
                  </p>
                  <ul class="space-y-3 mb-6">
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">Marketing & brand presence</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">Contact forms & lead capture</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">eCommerce storefronts</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">Blog & content management</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">SEO-optimized for search</span>
                    </li>
                  </ul>
                  <p class="text-sm text-gray-400">
                    <strong>Best for:</strong> Small businesses, portfolios, restaurants, agencies, and anyone who needs an online presence.
                  </p>
                </div>

                {/* Web Apps */}
                <div class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20">
                  <h3 class="text-2xl font-bold text-purple-400 mb-6">⚙️ Web Apps</h3>
                  <p class="text-gray-300 mb-6">
                    Custom applications that solve specific business problems and automate workflows.
                  </p>
                  <ul class="space-y-3 mb-6">
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">Business automation & workflows</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">Real-time dashboards & analytics</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">AI-powered features & chatbots</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">User authentication & permissions</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-green-400 mt-1">✓</span>
                      <span class="text-gray-300">Database-driven & scalable</span>
                    </li>
                  </ul>
                  <p class="text-sm text-gray-400">
                    <strong>Best for:</strong> SaaS platforms, internal tools, data management, AI automation, and mission-critical systems.
                  </p>
                </div>
              </div>

              {/* Unsure? CTA */}
              <div class="mt-12 text-center">
                <p class="text-gray-300 mb-4">
                  Not sure which you need? <span class="text-blue-400 font-semibold">We'll help you figure it out.</span>
                </p>
                <LinkButton href="/contact" variant="outline">
                  Book a Free Strategy Call
                </LinkButton>
              </div>
            </section>

            {/* Process Section */}
            <section class="mb-16">
              <h2 class="text-3xl font-bold text-center text-blue-400 mb-12">
                Our Process
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="text-center">
                  <div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                  <h3 class="text-xl font-bold mb-2">Discover</h3>
                  <p class="text-gray-300">We learn about your goals, audience, and requirements</p>
                </div>
                <div class="text-center">
                  <div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                  <h3 class="text-xl font-bold mb-2">Plan</h3>
                  <p class="text-gray-300">Create detailed wireframes and technical specifications</p>
                </div>
                <div class="text-center">
                  <div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                  <h3 class="text-xl font-bold mb-2">Build</h3>
                  <p class="text-gray-300">Develop your solution with regular updates and feedback</p>
                </div>
                <div class="text-center">
                  <div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                  <h3 class="text-xl font-bold mb-2">Launch</h3>
                  <p class="text-gray-300">Deploy, test, and provide ongoing support</p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section class="mb-16">
              <h2 class="text-3xl font-bold text-center text-blue-400 mb-12">
                Why Choose Boswell Digital Solutions?
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="text-blue-400 text-4xl mb-4">🎖️</div>
                  <h3 class="text-xl font-bold mb-3">Veteran-Owned</h3>
                  <p class="text-gray-300">
                    Military precision and reliability in every project. Clear communication and dependable delivery.
                  </p>
                </div>
                <div class="text-center">
                  <div class="text-blue-400 text-4xl mb-4">🚀</div>
                  <h3 class="text-xl font-bold mb-3">Modern Technology</h3>
                  <p class="text-gray-300">
                    Built with the latest frameworks and best practices for performance, security, and scalability.
                  </p>
                </div>
                <div class="text-center">
                  <div class="text-blue-400 text-4xl mb-4">📍</div>
                  <h3 class="text-xl font-bold mb-3">Local to Kentucky</h3>
                  <p class="text-gray-300">
                    Based in Lexington, KY. Available for in-person meetings and supporting local businesses.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section class="text-center">
              <div class="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30">
                <h3 class="text-2xl md:text-3xl font-bold mb-4">
                  Let's Build Your Next Project
                </h3>
                <p class="text-gray-300 mb-8">
                  Whether you need a fast website, a custom web app, or AI automation, we'll create a solution tailored to your goals.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <LinkButton href="/contact" size="lg">
                    Get a Custom Quote →
                  </LinkButton>
                  <LinkButton href="/portfolio" variant="outline" size="lg">
                    See What We've Built
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
