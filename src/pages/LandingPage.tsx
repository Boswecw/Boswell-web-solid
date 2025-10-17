import { For } from 'solid-js'
import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import LinkButton from '../components/LinkButton'

const featuredProjects = [
  {
    title: "AI Biz Starter Template",
    description: "Full-stack SvelteKit + FastAPI template with AI chatbot integration and business automation tools",
    tech: "SvelteKit • FastAPI • LangChain",
    image: "/images/ai-biz-starter.jpg",
  },
  {
    title: "FurBabies Pet Store",
    description: "Modern eCommerce platform with inventory management, customer accounts, and secure checkout",
    tech: "React • Node.js • Stripe",
    image: "/images/furbabies-store.jpg",
  },
  {
    title: "Leopold Nature Tracker",
    description: "Advanced nature observation app with TensorFlow audio classification and cloud data management",
    tech: "React • TensorFlow.js • Firebase",
    image: "/images/leopold-tracker.jpg",
  },
]

export default function LandingPage() {
  return (
    <>
      <SEOHead
        title="Boswell Digital Solutions LLC | Web Development, Applications & AI Studio"
        description="Veteran-owned digital solutions company in Lexington, KY. Custom websites, web applications, mobile apps, AI integration, and business automation. Starting at $750."
        keywords="digital solutions lexington ky, react developer kentucky, web applications, mobile apps, veteran owned business, custom websites, AI integration, MERN stack, web design lexington"
        url="https://boswelldigitalsolutions.com"
      />

      <Navbar />

      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        {/* Hero Section */}
        <section class="pt-24 px-6 pb-16">
          <div class="max-w-6xl mx-auto text-center">
            <div class="mb-8 animate-fade-in">
              <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-6">
                Boswell Digital Solutions LLC
              </h1>
              <p class="text-xl md:text-2xl text-gray-300 mb-4">
                Veteran-Owned Web & Application Development Studio
              </p>
              <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                Custom websites, web applications, mobile apps, business process automation, and intelligent tools
                that help small businesses and mission-driven teams reach their goals with measurable results.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <LinkButton href="/contact" size="lg" class="transform hover:scale-105">
                Start Your Project →
              </LinkButton>
              <LinkButton href="/portfolio" variant="outline" size="lg" class="transform hover:scale-105">
                View Portfolio
              </LinkButton>
            </div>

            {/* Veteran Badge */}
            <div class="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/30 rounded-full px-4 py-2 text-red-200 text-sm">
              <span class="text-red-400">🎖️</span>
              <span>U.S. Navy Veteran • 16 Years Forest Service</span>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section class="py-16 px-6 bg-gray-800/30">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
              Digital Solutions That <span class="text-blue-400">Deliver Results</span>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div class="text-blue-400 text-3xl mb-4">🚀</div>
                <h3 class="text-xl font-bold mb-3">Starter Websites</h3>
                <p class="text-gray-300 mb-4">Clean, fast, custom-coded sites for portfolios and small businesses.</p>
                <p class="text-blue-400 font-semibold">$900 – $1,500</p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div class="text-blue-400 text-3xl mb-4">🏢</div>
                <h3 class="text-xl font-bold mb-3">Business Websites</h3>
                <p class="text-gray-300 mb-4">Marketing sites with content tools, integrations, and room to grow.</p>
                <p class="text-blue-400 font-semibold">$1,800 – $3,500</p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div class="text-blue-400 text-3xl mb-4">🛒</div>
                <h3 class="text-xl font-bold mb-3">eCommerce</h3>
                <p class="text-gray-300 mb-4">Modern storefronts with secure checkout and inventory management.</p>
                <p class="text-blue-400 font-semibold">$3,000 – $6,000+</p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div class="text-blue-400 text-3xl mb-4">⚙️</div>
                <h3 class="text-xl font-bold mb-3">Web & Mobile Apps</h3>
                <p class="text-gray-300 mb-4">Custom applications with real-time features, databases, and scalability.</p>
                <p class="text-blue-400 font-semibold">$2,500 – $8,000+</p>
              </div>
            </div>
            
            <div class="text-center mt-8">
              <LinkButton href="/services" variant="outline">
                View All Services
              </LinkButton>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section class="py-16 px-6">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured <span class="text-blue-400">Projects</span>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <For each={featuredProjects}>
                {(project) => (
                  <div class="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      class="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="400"
                    />
                    <div class="p-6">
                      <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                      <p class="text-gray-300 mb-3">{project.description}</p>
                      <p class="text-blue-400 text-sm font-medium">{project.tech}</p>
                    </div>
                  </div>
                )}
              </For>
            </div>
            
            <div class="text-center mt-8">
              <LinkButton href="/portfolio" variant="outline">
                View Full Portfolio
              </LinkButton>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section class="py-16 px-6 bg-blue-900/20">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Let's discuss your project and create a digital solution that drives real results.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton href="/contact" size="lg" class="transform hover:scale-105">
                Get Started Today →
              </LinkButton>
              <a
                href="mailto:charlesboswell@boswelldigitalsolutions.com"
                class="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-300 hover:text-white hover:bg-gray-700/50 focus:ring-gray-500 px-6 py-3 text-lg rounded-lg no-underline"
              >
                Email: charlesboswell@boswelldigitalsolutions.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
