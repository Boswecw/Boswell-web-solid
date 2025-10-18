import { For } from 'solid-js'
import Navbar from '../components/Navbar'
import SEOHead from '../components/SEOHead'
import Button from '../components/Button'
import LinkButton from '../components/LinkButton'

const projects = [
  {
    id: "restaurant-demo",
    name: "Kentucky Bistro Restaurant",
    description: "Full-featured restaurant website with online reservations, menu display, and mobile-responsive design.",
    technologies: ["React", "Tailwind CSS", "Responsive Design", "Accessibility"],
    demoUrl: "/restaurant-demo.html",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&w=1200&q=80&auto=format&fit=crop",
    type: "Live Demo",
    featured: true,
  },
  {
    id: "ai-biz-starter",
    name: "AI Biz Starter Template",
    description: "Full-stack template using SvelteKit frontend + FastAPI backend for AI-powered business automation and chatbot integration.",
    technologies: ["SvelteKit", "FastAPI", "LangChain", "OpenAI", "Docker"],
    githubUrl: "https://github.com/CharlesWBoswell",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
    type: "Open Source",
    featured: true,
  },
  {
    id: "leopold-nature",
    name: "Leopold Nature Observation App",
    description: "Progressive Web App enabling users to record wildlife sightings, identify species by sound, and sync data to Firebase.",
    technologies: ["SvelteKit", "Tailwind", "TensorFlow.js", "Firebase", "Google Maps API"],
    githubUrl: "https://github.com/CharlesWBoswell",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
    type: "Web App",
    featured: true,
  },
  {
    id: "furbabies-store",
    name: "FurBabies Pet Store",
    description: "Modern eCommerce platform with inventory management, customer accounts, and secure checkout integration.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
    githubUrl: "https://github.com/CharlesWBoswell",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80&auto=format&fit=crop",
    type: "eCommerce",
    featured: false,
  },
]

export default function PortfolioPage() {
  return (
    <>
      <SEOHead
        title="Portfolio | Boswell Digital Solutions LLC"
        description="View our portfolio of custom React websites, AI-powered applications, and digital solutions. See examples of our work for businesses in Kentucky and beyond."
        keywords="portfolio, web development examples, react projects, ai applications, kentucky web developer"
        url="https://boswelldigitalsolutions.com/portfolio"
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
                Our Portfolio
              </h1>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom digital solutions that solve real problems and deliver measurable results
              </p>
            </div>

            {/* Featured Projects */}
            <section class="mb-16">
              <h2 class="text-3xl font-bold text-blue-400 mb-8">Featured Projects</h2>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <For each={projects.filter(p => p.featured)}>
                  {(project) => (
                    <div class="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <img
                        src={project.image}
                        alt={project.name}
                        class="w-full h-64 object-cover"
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="600"
                      />
                      <div class="p-6">
                        <div class="flex items-center justify-between mb-3">
                          <h3 class="text-xl font-bold">{project.name}</h3>
                          <span class="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                            {project.type}
                          </span>
                        </div>
                        <p class="text-gray-300 mb-4">{project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                          <For each={project.technologies}>
                            {(tech) => (
                              <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                                {tech}
                              </span>
                            )}
                          </For>
                        </div>
                        <div class="flex gap-3">
                          {project.demoUrl && (
                            <Button size="sm">
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                View Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button variant="outline" size="sm">
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                View Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </section>

            {/* All Projects */}
            <section class="mb-16">
              <h2 class="text-3xl font-bold text-blue-400 mb-8">All Projects</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <For each={projects}>
                  {(project) => (
                    <div class="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <img
                        src={project.image}
                        alt={project.name}
                        class="w-full h-48 object-cover"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
                      />
                      <div class="p-6">
                        <div class="flex items-center justify-between mb-2">
                          <h3 class="text-lg font-bold">{project.name}</h3>
                          <span class="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                            {project.type}
                          </span>
                        </div>
                        <p class="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                        <div class="flex flex-wrap gap-1 mb-3">
                          <For each={project.technologies.slice(0, 3)}>
                            {(tech) => (
                              <span class="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                                {tech}
                              </span>
                            )}
                          </For>
                          {project.technologies.length > 3 && (
                            <span class="text-blue-400 text-xs px-2 py-1">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        <div class="flex gap-2">
                          {project.demoUrl && (
                            <Button size="sm" class="flex-1">
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button variant="outline" size="sm" class="flex-1">
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </section>

            {/* CTA Section */}
            <section class="text-center">
              <div class="bg-blue-900/20 rounded-2xl p-8 border border-blue-500/30">
                <h3 class="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Build Your Project?
                </h3>
                <p class="text-gray-300 mb-6">
                  Let's create a custom digital solution that drives real results for your business.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <LinkButton href="/contact" size="lg">
                    Start Your Project →
                  </LinkButton>
                  <LinkButton href="/services" variant="outline" size="lg">
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
