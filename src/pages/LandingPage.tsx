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
        <section class="pt-24 px-6 pb-20">
          <div class="max-w-6xl mx-auto text-center">
            <div class="mb-8 animate-fade-in">
              <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span class="bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                  Websites. Apps. Automation.
                </span>
                <br />
                <span class="text-white">Built with Precision and Purpose.</span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                Veteran-owned studio crafting next-gen web and AI solutions with Svelte, Solid, and React — powering everything from brand sites to full-scale applications like Leopold and Levy.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <LinkButton href="/contact" size="lg" class="transform hover:scale-105">
                Start Your Project →
              </LinkButton>
              <LinkButton href="/portfolio" variant="outline" size="lg" class="transform hover:scale-105">
                See Our Work
              </LinkButton>
            </div>

            {/* Veteran Badge */}
            <div class="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/30 rounded-full px-4 py-2 text-red-200 text-sm">
              <span class="text-red-400">🎖️</span>
              <span>U.S. Navy Veteran • 16 Years Forest Service</span>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section class="py-20 px-6 bg-gray-800/30">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold mb-4">
                <span class="text-blue-400">Design.</span> <span class="text-white">Code.</span> <span class="text-blue-400">Automate.</span> <span class="text-white">Launch.</span>
              </h2>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We don't just build websites — we build <span class="text-blue-400 font-semibold">digital ecosystems</span>.
              </p>
              <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                From lightweight static sites to interactive data-driven web apps, Boswell Digital Solutions merges clean design with cutting-edge frameworks like Svelte, Solid, and React, backed by modern APIs and AI integrations.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div class="text-blue-400 text-3xl mb-4">⚡</div>
                <h3 class="text-lg font-bold mb-3">Web & App Development</h3>
                <p class="text-gray-300 text-sm">Responsive, fast, and built for the long haul using React, Solid, and Svelte.</p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div class="text-blue-400 text-3xl mb-4">🧠</div>
                <h3 class="text-lg font-bold mb-3">AI & Automation</h3>
                <p class="text-gray-300 text-sm">Chatbots, smart forms, and AI-driven workflows powered by FastAPI, LangChain, and edge compute.</p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div class="text-blue-400 text-3xl mb-4">🎨</div>
                <h3 class="text-lg font-bold mb-3">UX/UI Design</h3>
                <p class="text-gray-300 text-sm">Custom-tailored experiences that blend aesthetics with performance.</p>
              </div>

              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div class="text-blue-400 text-3xl mb-4">☁️</div>
                <h3 class="text-lg font-bold mb-3">Hosting & DevOps</h3>
                <p class="text-gray-300 text-sm">Secure deployments on Netlify, Render, or custom cloud environments.</p>
              </div>
            </div>

            <div class="text-center mt-12">
              <LinkButton href="/services" variant="outline">
                View All Services
              </LinkButton>
            </div>
          </div>
        </section>

        {/* Why Boswell Section */}
        <section class="py-20 px-6">
          <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                  <span class="text-blue-400">Innovation</span> Backed by <span class="text-blue-400">Experience</span>
                </h2>
                <p class="text-lg text-gray-300 mb-6 leading-relaxed">
                  We're not just another dev shop. With over a decade of field-tested leadership and real-world app builds — like Leopold, a wildlife observation platform, and Levy, an AI business suite — we deliver software that's elegant, efficient, and engineered to grow with you.
                </p>
                <p class="text-lg text-gray-400 leading-relaxed">
                  Built with modern stacks like SvelteKit, SolidStart, and FastAPI, our projects load fast, scale effortlessly, and leave a lasting impression.
                </p>
              </div>
              <div class="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
                <div class="space-y-6">
                  <div>
                    <h3 class="text-blue-400 font-bold mb-2">🚀 Leopold</h3>
                    <p class="text-gray-300 text-sm">Wildlife observation platform with TensorFlow audio classification and cloud data sync</p>
                  </div>
                  <div>
                    <h3 class="text-blue-400 font-bold mb-2">💼 Levy</h3>
                    <p class="text-gray-300 text-sm">AI-powered business suite for automation, analytics, and intelligent workflows</p>
                  </div>
                  <div>
                    <h3 class="text-blue-400 font-bold mb-2">🛒 FurBabies</h3>
                    <p class="text-gray-300 text-sm">Modern eCommerce platform with inventory management and secure checkout</p>
                  </div>
                </div>
              </div>
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

        {/* About Section */}
        <section class="py-20 px-6 bg-gray-800/30">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-8">
              <span class="text-blue-400">Veteran-Owned.</span> <span class="text-white">Mission-Driven.</span> <span class="text-blue-400">Future-Focused.</span>
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed mb-6">
              Founded by Navy veteran and full-stack developer Charles Boswell, Boswell Digital Solutions blends service, creativity, and technical precision.
            </p>
            <p class="text-lg text-gray-400 leading-relaxed">
              Every project reflects the same mindset that drives our best work — <span class="text-blue-400 font-semibold">reliability, clarity, and innovation</span> that builds trust and results.
            </p>
            <div class="mt-10">
              <LinkButton href="/about" variant="outline">
                Learn More About Us
              </LinkButton>
            </div>
          </div>
        </section>

        {/* Contact CTA Strip */}
        <section class="py-20 px-6 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-t border-blue-500/20">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build What's Next — <span class="text-blue-400">Not What's Been Done</span>
            </h2>
            <p class="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Whether you need a fast website, a full-stack app, or a custom AI tool, we turn modern tech into simple, powerful solutions that move your mission forward.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton href="/contact" size="lg" class="transform hover:scale-105">
                Book a Free Consult →
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg" class="transform hover:scale-105">
                Let's Build Together
              </LinkButton>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
