import { For } from 'solid-js'
import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import LinkButton from '../components/LinkButton'

export default function ResumePage() {
  return (
    <>
      <SEOHead
        title="Resume | Charles Boswell - Full Stack Developer"
        description="Resume of Charles Boswell, veteran full-stack developer specializing in React, Node.js, and AI integration. Based in Lexington, Kentucky."
        keywords="charles boswell resume, full stack developer, react developer, veteran developer, lexington ky"
        url="https://boswelldigitalsolutions.com/resume"
      />

      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <Navbar />
        
        <div class="pt-24 p-6">
          <div class="max-w-4xl mx-auto">
            <LinkButton href="/" variant="ghost" class="mb-6">
              ← Back to Home
            </LinkButton>

            {/* Header */}
            <div class="text-center mb-12">
              <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent mb-4">
                Charles Boswell
              </h1>
              <p class="text-xl text-gray-300 mb-4">Full Stack Developer & Digital Solutions Architect</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center text-gray-400">
                <span>📧 charlesboswell@boswelldigitalsolutions.com</span>
                <span>📞 (859) 436-7304</span>
                <span>📍 Lexington, KY</span>
              </div>
            </div>

            {/* Summary */}
            <section class="mb-12">
              <div class="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <h2 class="text-2xl font-bold text-blue-400 mb-4">Professional Summary</h2>
                <p class="text-gray-300 leading-relaxed">
                  Veteran full-stack developer with 16+ years of leadership experience in high-stakes environments. 
                  Specializes in building scalable web applications with React, Node.js, and AI integration. 
                  Combines military precision with modern development practices to deliver reliable, 
                  performance-optimized solutions for small businesses and mission-driven organizations.
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-blue-400 mb-6">Technical Skills</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 class="text-lg font-bold mb-3">Frontend</h3>
                  <div class="flex flex-wrap gap-2">
                    <For each={["React", "SolidJS", "SvelteKit", "TypeScript", "Tailwind CSS", "Vite"]}>
                      {(skill) => (
                        <span class="bg-blue-600 text-white px-3 py-1 rounded text-sm">{skill}</span>
                      )}
                    </For>
                  </div>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 class="text-lg font-bold mb-3">Backend</h3>
                  <div class="flex flex-wrap gap-2">
                    <For each={["Node.js", "FastAPI", "Express", "MongoDB", "Firebase", "PostgreSQL"]}>
                      {(skill) => (
                        <span class="bg-green-600 text-white px-3 py-1 rounded text-sm">{skill}</span>
                      )}
                    </For>
                  </div>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 class="text-lg font-bold mb-3">AI & Tools</h3>
                  <div class="flex flex-wrap gap-2">
                    <For each={["OpenAI API", "LangChain", "TensorFlow.js", "Docker", "Git", "Netlify"]}>
                      {(skill) => (
                        <span class="bg-purple-600 text-white px-3 py-1 rounded text-sm">{skill}</span>
                      )}
                    </For>
                  </div>
                </div>
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 class="text-lg font-bold mb-3">Deployment</h3>
                  <div class="flex flex-wrap gap-2">
                    <For each={["Netlify", "Render", "Google Cloud", "Firebase Hosting", "GitHub Actions"]}>
                      {(skill) => (
                        <span class="bg-orange-600 text-white px-3 py-1 rounded text-sm">{skill}</span>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-blue-400 mb-6">Experience</h2>
              <div class="space-y-6">
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="flex justify-between items-start mb-3">
                    <div>
                      <h3 class="text-xl font-bold">Founder & Lead Developer</h3>
                      <p class="text-blue-400">Boswell Digital Solutions LLC</p>
                    </div>
                    <span class="text-gray-400">2025 - Present</span>
                  </div>
                  <ul class="text-gray-300 space-y-2">
                    <li>• Founded veteran-owned digital solutions company specializing in custom web applications</li>
                    <li>• Developed full-stack applications using React, SvelteKit, Node.js, and FastAPI</li>
                    <li>• Integrated AI capabilities using OpenAI API and LangChain for business automation</li>
                    <li>• Delivered projects ranging from $750 starter websites to $6000+ custom applications</li>
                  </ul>
                </div>

                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="flex justify-between items-start mb-3">
                    <div>
                      <h3 class="text-xl font-bold">Digital Solutions & AI Student</h3>
                      <p class="text-blue-400">Kable Academy</p>
                    </div>
                    <span class="text-gray-400">2024 - 2025</span>
                  </div>
                  <ul class="text-gray-300 space-y-2">
                    <li>• Completed intensive full-time program in modern web development and AI integration</li>
                    <li>• Built multiple full-stack projects using MERN stack and modern frameworks</li>
                    <li>• Specialized in AI-powered applications and business process automation</li>
                    <li>• Graduated with honors and industry-ready portfolio</li>
                  </ul>
                </div>

                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div class="flex justify-between items-start mb-3">
                    <div>
                      <h3 class="text-xl font-bold">Wildfire Operations & Leadership</h3>
                      <p class="text-blue-400">U.S. Forest Service</p>
                    </div>
                    <span class="text-gray-400">2008 - 2024</span>
                  </div>
                  <ul class="text-gray-300 space-y-2">
                    <li>• Led teams of 20+ personnel in high-stakes wildfire suppression operations</li>
                    <li>• Managed complex logistics, resource allocation, and risk assessment</li>
                    <li>• Developed crisis management and clear communication skills under pressure</li>
                    <li>• Maintained 100% safety record across 16 years of emergency response</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-blue-400 mb-6">Featured Projects</h2>
              <div class="space-y-4">
                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 class="text-lg font-bold mb-2">Leopold Nature Observation App</h3>
                  <p class="text-gray-300 mb-2">
                    Progressive Web App enabling users to record wildlife sightings, identify species by sound, and sync data to Firebase.
                  </p>
                  <p class="text-blue-400 text-sm">Stack: SvelteKit, Tailwind, TensorFlow.js, Firebase, Google Maps API</p>
                </div>

                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 class="text-lg font-bold mb-2">AI Biz Starter Template</h3>
                  <p class="text-gray-300 mb-2">
                    Full-stack template using SvelteKit frontend + FastAPI backend for AI-powered business automation and chatbot integration.
                  </p>
                  <p class="text-blue-400 text-sm">Stack: SvelteKit, FastAPI, LangChain, OpenAI, Docker</p>
                </div>

                <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 class="text-lg font-bold mb-2">FurBabies Pet Store</h3>
                  <p class="text-gray-300 mb-2">
                    Modern eCommerce platform with inventory management, customer accounts, and secure payment processing.
                  </p>
                  <p class="text-blue-400 text-sm">Stack: React, Node.js, Express, MongoDB, Stripe API</p>
                </div>
              </div>
            </section>

            {/* Education & Certifications */}
            <section class="mb-12">
              <h2 class="text-2xl font-bold text-blue-400 mb-6">Education & Certifications</h2>
              <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div class="space-y-4">
                  <div>
                    <h3 class="text-lg font-bold">Digital Solutions & AI Certificate</h3>
                    <p class="text-gray-300">Kable Academy • 2025</p>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold">U.S. Navy Veteran</h3>
                    <p class="text-gray-300">Honorable Discharge • Leadership & Technical Training</p>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold">Wildfire Operations Certifications</h3>
                    <p class="text-gray-300">NWCG Certified • 16 Years Emergency Response Experience</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section class="text-center">
              <div class="bg-blue-900/20 rounded-2xl p-8 border border-blue-500/30">
                <h3 class="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p class="text-gray-300 mb-6">
                  Ready to bring military precision and modern technology to your next project?
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <LinkButton href="/contact" size="lg">
                    Start a Project →
                  </LinkButton>
                  <a
                    href="mailto:charlesboswell@boswelldigitalsolutions.com"
                    class="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 focus:ring-blue-500 px-6 py-3 text-lg rounded-lg no-underline"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
