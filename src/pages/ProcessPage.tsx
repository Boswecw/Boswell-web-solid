import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import LinkButton from '../components/LinkButton'

export default function ProcessPage() {
  return (
    <>
      <SEOHead
        title="Our Process | Boswell Digital Solutions LLC"
        description="Learn how we build custom websites and web applications. Our proven 4-step process: Discover, Plan, Build, Launch. Transparent, collaborative, results-driven."
        keywords="web development process, custom website process, app development methodology, agile development, transparent process"
        url="https://boswelldigitalsolutions.com/process"
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
                Our Process
              </h1>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                A transparent, collaborative approach to building digital solutions that solve real problems
              </p>
            </div>

            {/* Process Overview */}
            <section class="mb-20">
              <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 mb-12">
                <h2 class="text-2xl font-bold text-blue-400 mb-4">Why Our Process Matters</h2>
                <p class="text-gray-300 leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Every project is unique, and our process is designed to understand your specific goals, constraints, and vision. We combine military precision with modern development practices to deliver reliable, high-quality results on time and on budget.
                </p>
              </div>

              {/* 4-Step Process */}
              <div class="space-y-8">
                {/* Step 1: Discover */}
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div class="flex items-center gap-4 mb-4">
                      <div class="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                      <h3 class="text-3xl font-bold">Discover</h3>
                    </div>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      We start by listening. We learn about your business, your goals, your audience, and your constraints. This isn't a quick questionnaire — it's a real conversation where we ask the right questions to understand what success looks like for you.
                    </p>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">In-depth discovery meeting</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Competitive analysis</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">User research & personas</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Project scope & timeline</span>
                      </li>
                    </ul>
                  </div>
                  <div class="bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-xl p-8 border border-blue-500/20">
                    <h4 class="text-lg font-bold text-blue-400 mb-4">Deliverables</h4>
                    <ul class="space-y-2 text-gray-300">
                      <li>• Project brief & requirements document</li>
                      <li>• User personas & use cases</li>
                      <li>• Competitive analysis report</li>
                      <li>• Initial timeline & budget estimate</li>
                    </ul>
                  </div>
                </div>

                {/* Step 2: Plan */}
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div class="bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-xl p-8 border border-purple-500/20 order-2 lg:order-1">
                    <h4 class="text-lg font-bold text-purple-400 mb-4">Deliverables</h4>
                    <ul class="space-y-2 text-gray-300">
                      <li>• Wireframes & user flows</li>
                      <li>• Visual design mockups</li>
                      <li>• Technical architecture diagram</li>
                      <li>• Detailed project timeline</li>
                    </ul>
                  </div>
                  <div class="order-1 lg:order-2">
                    <div class="flex items-center gap-4 mb-4">
                      <div class="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                      <h3 class="text-3xl font-bold">Plan</h3>
                    </div>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      With a clear understanding of your needs, we create a detailed roadmap. We design wireframes and mockups, define the technical architecture, and establish clear milestones. You'll see exactly what we're building before we write a single line of code.
                    </p>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Wireframes & user flows</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Visual design mockups</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Technical specifications</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Approval & sign-off</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 3: Build */}
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div class="flex items-center gap-4 mb-4">
                      <div class="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                      <h3 class="text-3xl font-bold">Build</h3>
                    </div>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      Now we build. Using modern frameworks like React, Solid, and SvelteKit, we develop your solution with clean, maintainable code. You'll receive regular updates and have opportunities to provide feedback throughout development.
                    </p>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Agile development sprints</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Weekly progress updates</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Continuous testing & QA</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Feedback & iteration</span>
                      </li>
                    </ul>
                  </div>
                  <div class="bg-gradient-to-br from-green-900/30 to-green-900/10 rounded-xl p-8 border border-green-500/20">
                    <h4 class="text-lg font-bold text-green-400 mb-4">Deliverables</h4>
                    <ul class="space-y-2 text-gray-300">
                      <li>• Fully functional application</li>
                      <li>• Clean, documented code</li>
                      <li>• Performance optimized</li>
                      <li>• Security best practices</li>
                    </ul>
                  </div>
                </div>

                {/* Step 4: Launch */}
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div class="bg-gradient-to-br from-orange-900/30 to-orange-900/10 rounded-xl p-8 border border-orange-500/20 order-2 lg:order-1">
                    <h4 class="text-lg font-bold text-orange-400 mb-4">Deliverables</h4>
                    <ul class="space-y-2 text-gray-300">
                      <li>• Live, deployed application</li>
                      <li>• User documentation</li>
                      <li>• Admin training (if needed)</li>
                      <li>• 30-day support included</li>
                    </ul>
                  </div>
                  <div class="order-1 lg:order-2">
                    <div class="flex items-center gap-4 mb-4">
                      <div class="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                      <h3 class="text-3xl font-bold">Launch</h3>
                    </div>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      We deploy your solution to production, monitor performance, and provide support. We don't just hand off the project — we ensure it's running smoothly and you know how to use it. We're here for ongoing support and future enhancements.
                    </p>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Production deployment</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">Performance monitoring</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">User training & documentation</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <span class="text-green-400 mt-1">✓</span>
                        <span class="text-gray-300">30-day support included</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Why This Process Works */}
            <section class="mb-16">
              <h2 class="text-3xl font-bold text-center text-blue-400 mb-12">Why This Process Works</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="text-blue-400 text-3xl mb-4">🎯</div>
                  <h3 class="text-xl font-bold mb-3">Clear Communication</h3>
                  <p class="text-gray-300">
                    We keep you informed every step of the way. No surprises, no hidden costs, no scope creep.
                  </p>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="text-blue-400 text-3xl mb-4">⚡</div>
                  <h3 class="text-xl font-bold mb-3">Proven Methodology</h3>
                  <p class="text-gray-300">
                    This process has delivered 50+ successful projects. It works because it's flexible and focused.
                  </p>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="text-blue-400 text-3xl mb-4">🚀</div>
                  <h3 class="text-xl font-bold mb-3">Results-Driven</h3>
                  <p class="text-gray-300">
                    We measure success by your goals. Every decision is made with your business outcomes in mind.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section class="text-center">
              <div class="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30">
                <h3 class="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p class="text-gray-300 mb-8">
                  Let's discuss your goals and create a custom solution that drives real results.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <LinkButton href="/contact" size="lg">
                    Book a Free Consultation →
                  </LinkButton>
                  <LinkButton href="/portfolio" variant="outline" size="lg">
                    See Our Work
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

