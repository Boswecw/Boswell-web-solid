import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import LinkButton from '../components/LinkButton'

export default function CaseStudiesPage() {
  return (
    <>
      <SEOHead
        title="Case Studies | Boswell Digital Solutions LLC"
        description="Real-world examples of custom web applications and AI solutions we've built. See how we solved complex problems for Leopold, Levy, and FurBabies."
        keywords="case studies, web app examples, AI solutions, custom development, project examples"
        url="https://boswelldigitalsolutions.com/case-studies"
      />

      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <Navbar />
        
        <div class="pt-24 p-6">
          <div class="max-w-6xl mx-auto">
            <LinkButton href="/" variant="ghost" class="mb-6">
              ← Back to Home
            </LinkButton>

            <div class="text-center mb-16">
              <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                Case Studies
              </h1>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world examples of how we've solved complex problems and delivered measurable results
              </p>
            </div>

            {/* Leopold Case Study */}
            <section class="mb-16">
              <div class="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 mb-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 class="text-3xl font-bold text-blue-400 mb-4">🚀 Leopold Nature Tracker</h2>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      A progressive web app that enables wildlife enthusiasts to record observations, identify species by sound using AI, and sync data to the cloud.
                    </p>
                    
                    <h3 class="text-xl font-bold text-blue-300 mb-3">The Challenge</h3>
                    <p class="text-gray-300 mb-6">
                      Our client needed a mobile-friendly app that could work offline, identify bird species by audio, and sync observations to a cloud database. Traditional approaches would be expensive and slow to develop.
                    </p>

                    <h3 class="text-xl font-bold text-blue-300 mb-3">Our Solution</h3>
                    <ul class="space-y-2 mb-6">
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Built with SvelteKit for fast, reactive UI</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Integrated TensorFlow.js for on-device audio classification</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Firebase for real-time cloud sync</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Google Maps API for location tracking</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Progressive Web App for offline functionality</span>
                      </li>
                    </ul>

                    <h3 class="text-xl font-bold text-blue-300 mb-3">Results</h3>
                    <div class="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20">
                      <ul class="space-y-2">
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">📊</span>
                          <span class="text-gray-300"><strong>95% accuracy</strong> in bird species identification</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">⚡</span>
                          <span class="text-gray-300"><strong>2.3s</strong> average load time (Lighthouse 98)</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">📱</span>
                          <span class="text-gray-300">Works <strong>offline</strong> with automatic sync</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">🚀</span>
                          <span class="text-gray-300">Deployed in <strong>6 weeks</strong></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="bg-gradient-to-br from-blue-900/40 to-blue-900/10 rounded-xl p-8 border border-blue-500/20">
                    <h4 class="text-lg font-bold text-blue-400 mb-4">Tech Stack</h4>
                    <div class="space-y-3">
                      <div>
                        <p class="text-sm text-gray-400">Frontend</p>
                        <p class="text-gray-300 font-semibold">SvelteKit, Tailwind CSS</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">AI/ML</p>
                        <p class="text-gray-300 font-semibold">TensorFlow.js</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Backend</p>
                        <p class="text-gray-300 font-semibold">Firebase, Cloud Functions</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">APIs</p>
                        <p class="text-gray-300 font-semibold">Google Maps, Web Audio API</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Timeline</p>
                        <p class="text-gray-300 font-semibold">6 weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Livy Case Study */}
            <section class="mb-16">
              <div class="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20 mb-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div class="order-2 lg:order-1 bg-gradient-to-br from-purple-900/40 to-purple-900/10 rounded-xl p-8 border border-purple-500/20">
                    <h4 class="text-lg font-bold text-purple-400 mb-4">Tech Stack</h4>
                    <div class="space-y-3">
                      <div>
                        <p class="text-sm text-gray-400">Frontend</p>
                        <p class="text-gray-300 font-semibold">SvelteKit, PWA</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Backend</p>
                        <p class="text-gray-300 font-semibold">FastAPI, Python</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Maps & Location</p>
                        <p class="text-gray-300 font-semibold">MapLibre GL, OpenStreetMap</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">AI/RAG</p>
                        <p class="text-gray-300 font-semibold">LangChain, pgvector</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Timeline</p>
                        <p class="text-gray-300 font-semibold">8 weeks</p>
                      </div>
                    </div>
                  </div>
                  <div class="order-1 lg:order-2">
                    <h2 class="text-3xl font-bold text-purple-400 mb-4">🗺️ Livy: The Trail of History</h2>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      An immersive, location-aware historical tour platform that brings the past to life through GPS-guided trails, AI-powered Q&A, and offline-first design. Users explore curated historical narratives with contextual information, professional audio narration, and answers to their questions about the places they're visiting.
                    </p>
                    
                    <h3 class="text-xl font-bold text-purple-300 mb-3">The Challenge</h3>
                    <p class="text-gray-300 mb-6">
                      Create an engaging historical tour platform that works offline, provides location-aware content, and uses AI to answer contextual questions about historical sites. The platform needed to handle GPS tracking, offline maps, and rich multimedia content while maintaining an elegant, historically-inspired design.
                    </p>

                    <h3 class="text-xl font-bold text-purple-300 mb-3">Our Solution</h3>
                    <ul class="space-y-2 mb-6">
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">SvelteKit PWA for offline-first functionality</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">MapLibre GL with OpenStreetMap for location tracking</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">FastAPI backend with LangChain RAG for AI Q&A</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">PostgreSQL + pgvector for semantic search</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Roman-inspired UI with accessibility focus</span>
                      </li>
                    </ul>

                    <h3 class="text-xl font-bold text-purple-300 mb-3">Results</h3>
                    <div class="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                      <ul class="space-y-2">
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">📍</span>
                          <span class="text-gray-300"><strong>GPS accuracy</strong> within 5 meters</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">📱</span>
                          <span class="text-gray-300"><strong>100% offline</strong> functionality with sync</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">🤖</span>
                          <span class="text-gray-300"><strong>AI Q&A accuracy</strong> with source attribution</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">⚡</span>
                          <span class="text-gray-300">Deployed in <strong>8 weeks</strong></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FurBabies Case Study */}
            <section class="mb-16">
              <div class="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20 mb-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 class="text-3xl font-bold text-green-400 mb-4">🛒 FurBabies Pet Store</h2>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      A modern eCommerce platform for a pet supply retailer, featuring inventory management, secure checkout, and customer accounts.
                    </p>
                    
                    <h3 class="text-xl font-bold text-green-300 mb-3">The Challenge</h3>
                    <p class="text-gray-300 mb-6">
                      The client was using a generic eCommerce platform that was slow, expensive, and didn't match their brand. They needed a custom solution that could scale with their growing business.
                    </p>

                    <h3 class="text-xl font-bold text-green-300 mb-3">Our Solution</h3>
                    <ul class="space-y-2 mb-6">
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">React frontend with custom design</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Node.js/Express backend APIs</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Stripe integration for secure payments</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">MongoDB for flexible product catalog</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Admin dashboard for inventory management</span>
                      </li>
                    </ul>

                    <h3 class="text-xl font-bold text-green-300 mb-3">Results</h3>
                    <div class="bg-green-900/30 rounded-lg p-4 border border-green-500/20">
                      <ul class="space-y-2">
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">💳</span>
                          <span class="text-gray-300"><strong>3x faster checkout</strong> than previous platform</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">📊</span>
                          <span class="text-gray-300"><strong>25% increase</strong> in conversion rate</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">💰</span>
                          <span class="text-gray-300"><strong>60% reduction</strong> in platform costs</span>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-400">🚀</span>
                          <span class="text-gray-300">Deployed in <strong>8 weeks</strong></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="bg-gradient-to-br from-green-900/40 to-green-900/10 rounded-xl p-8 border border-green-500/20">
                    <h4 class="text-lg font-bold text-green-400 mb-4">Tech Stack</h4>
                    <div class="space-y-3">
                      <div>
                        <p class="text-sm text-gray-400">Frontend</p>
                        <p class="text-gray-300 font-semibold">React, Tailwind CSS</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Backend</p>
                        <p class="text-gray-300 font-semibold">Node.js, Express</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Database</p>
                        <p class="text-gray-300 font-semibold">MongoDB</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Payments</p>
                        <p class="text-gray-300 font-semibold">Stripe API</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-400">Timeline</p>
                        <p class="text-gray-300 font-semibold">8 weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section class="text-center">
              <div class="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30">
                <h3 class="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Build Your Next Success Story?
                </h3>
                <p class="text-gray-300 mb-8">
                  Let's discuss your project and create a custom solution that delivers real results.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <LinkButton href="/contact" size="lg">
                    Get a Custom Quote →
                  </LinkButton>
                  <LinkButton href="/process" variant="outline" size="lg">
                    Learn Our Process
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

