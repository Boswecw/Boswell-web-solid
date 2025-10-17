import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import LinkButton from '../components/LinkButton'

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Boswell Digital Solutions LLC | Veteran-Owned Web Development"
        description="Learn about Charles Boswell and Boswell Digital Solutions LLC. Veteran-owned web development company in Lexington, KY specializing in custom React websites and AI integration."
        keywords="about boswell digital solutions, charles boswell, veteran web developer, lexington ky developer"
        url="https://boswelldigitalsolutions.com/about"
      />

      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <Navbar />
        
        <div class="pt-24 p-6">
          <div class="max-w-4xl mx-auto">
            <LinkButton href="/" variant="ghost" class="mb-6">
              ← Back to Home
            </LinkButton>

            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                About Boswell Digital Solutions LLC
              </h1>
              <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto" />
            </div>

            {/* Hero Statement */}
            <section class="mb-16">
              <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-6">
                  Purpose-Built Websites & AI Tools with Real-World Impact
                </h2>
                <p class="text-lg text-gray-300 leading-relaxed mb-4">
                  At <strong class="text-blue-400">Boswell Digital Solutions LLC</strong>, the web
                  isn't just visual—it's operational. We build fast, secure, and accessible
                  experiences that help small businesses, authors, and mission-driven teams reach
                  their goals with <em class="text-blue-300">measurable results</em>.
                </p>
                <p class="text-lg text-gray-300 leading-relaxed">
                  From custom React applications to AI-powered automation tools, every project
                  is designed to solve real problems and create lasting value for our clients.
                </p>
              </div>
            </section>

            {/* Founder Section */}
            <section class="mb-16">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/images/CharlesBoswellsm.webp"
                    alt="Charles Boswell - Founder & CEO"
                    class="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                    width="400"
                    height="500"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
                    Meet Charles Boswell
                  </h3>
                  <p class="text-gray-300 leading-relaxed mb-4">
                    Charles spent 16 years in wildfire operations, habitat management, and
                    high-stakes logistics—experience that translates to calm execution, risk
                    management, and resilient systems in software.
                  </p>
                  <p class="text-gray-300 leading-relaxed mb-6">
                    After graduating Kable Academy's full-time Digital Solutions & AI program in 2025,
                    he founded Boswell Digital Solutions in Lexington, Kentucky, with a mission to{" "}
                    <strong class="text-blue-400">build technology that serves people</strong>.
                  </p>
                  <p class="text-gray-300 leading-relaxed mb-6">
                    Today we ship accessible, performant apps with React or SvelteKit, secure
                    backends with Node.js or FastAPI, and AI integrations that actually solve
                    business problems—not just add complexity.
                  </p>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section class="mb-16">
              <h3 class="text-2xl md:text-3xl font-bold text-center text-blue-400 mb-8">
                Our Values
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="text-blue-400 text-3xl mb-4">🎖️</div>
                  <h4 class="text-xl font-bold mb-3">Military Precision</h4>
                  <p class="text-gray-300">
                    Clear communication, dependable delivery, and attention to detail
                    honed through years of military and emergency response service.
                  </p>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="text-blue-400 text-3xl mb-4">🚀</div>
                  <h4 class="text-xl font-bold mb-3">Results-Driven</h4>
                  <p class="text-gray-300">
                    Every line of code serves a purpose. We build solutions that solve
                    real problems and deliver measurable business value.
                  </p>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="text-blue-400 text-3xl mb-4">🤝</div>
                  <h4 class="text-xl font-bold mb-3">Partnership</h4>
                  <p class="text-gray-300">
                    We're not just vendors—we're partners in your success. Your goals
                    become our mission, and we're with you for the long haul.
                  </p>
                </div>
              </div>
            </section>

            {/* Website Performance Section */}
            <section class="mb-16">
              <h3 class="text-2xl md:text-3xl font-bold text-center text-blue-400 mb-8">
                ⚡ Website Performance Excellence
              </h3>
              <div class="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <p class="text-gray-300 leading-relaxed mb-8 text-center">
                  This website is built with the same performance-first principles we apply to every client project.
                  See what's possible when you prioritize speed, accessibility, and user experience.
                </p>

                {/* Lighthouse Scores */}
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-green-500/30">
                    <div class="text-3xl font-bold text-green-400 mb-2">98</div>
                    <div class="text-sm text-gray-300">Performance</div>
                  </div>
                  <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-green-500/30">
                    <div class="text-3xl font-bold text-green-400 mb-2">99</div>
                    <div class="text-sm text-gray-300">Accessibility</div>
                  </div>
                  <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-green-500/30">
                    <div class="text-3xl font-bold text-green-400 mb-2">100</div>
                    <div class="text-sm text-gray-300">Best Practices</div>
                  </div>
                  <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-green-500/30">
                    <div class="text-3xl font-bold text-green-400 mb-2">100</div>
                    <div class="text-sm text-gray-300">SEO</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 class="text-lg font-bold text-blue-400 mb-4">Performance Improvements</h4>
                    <ul class="space-y-3 text-gray-300">
                      <li class="flex items-start">
                        <span class="text-green-400 mr-3">✓</span>
                        <span><strong>99% faster load time</strong> - From 308s to 1.5s</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-green-400 mr-3">✓</span>
                        <span><strong>53% smaller images</strong> - Optimized locally</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-green-400 mr-3">✓</span>
                        <span><strong>Code splitting</strong> - Faster initial load</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-green-400 mr-3">✓</span>
                        <span><strong>Network-first caching</strong> - Always latest content</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-blue-400 mb-4">Technology Stack</h4>
                    <ul class="space-y-3 text-gray-300">
                      <li class="flex items-start">
                        <span class="text-blue-400 mr-3">→</span>
                        <span><strong>SolidJS</strong> - Reactive, performant framework</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-400 mr-3">→</span>
                        <span><strong>TypeScript</strong> - Type-safe development</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-400 mr-3">→</span>
                        <span><strong>Tailwind CSS</strong> - Optimized styling</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-400 mr-3">→</span>
                        <span><strong>Vite</strong> - Lightning-fast build tool</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30 text-center">
                  <p class="text-gray-300">
                    <strong class="text-blue-400">This is what we deliver:</strong> Fast, accessible, SEO-optimized websites
                    that convert visitors into customers. Every project gets the same performance-first approach.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section class="text-center">
              <div class="bg-blue-900/20 rounded-2xl p-8 border border-blue-500/30">
                <h3 class="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Work Together?
                </h3>
                <p class="text-gray-300 mb-6">
                  Let's discuss your project and create a digital solution that drives real results.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <LinkButton href="/contact" size="lg">
                    Start Your Project →
                  </LinkButton>
                  <LinkButton href="/portfolio" variant="outline" size="lg">
                    View Our Work
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
