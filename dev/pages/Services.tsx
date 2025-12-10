import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

const Services: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.services.title}
        description={META_CONFIG.services.description}
        url={META_CONFIG.services.url}
        image={META_CONFIG.services.ogImage}
      />
      <main id="main">
        <div class="hero">
          <h1>Our Services</h1>
          <p class="text-lg">
            Professional software development and AI solutions built with military discipline and precision.
          </p>
        </div>

        <div class="container-center max-w-960">
          <Section
            title="Core Services"
            subtitle="Delivering government-grade technology solutions for businesses and agencies."
          >
            <div class="grid-2">
              <div class="card">
                <h3 class="h3">SaaS Development</h3>
                <p class="mb-md">
                  Custom software-as-a-service applications built with modern frameworks, cloud-native architecture, and security-first practices.
                </p>
                <ul class="list-bulleted text-sm">
                  <li>Web application development</li>
                  <li>API design and integration</li>
                  <li>Database architecture</li>
                  <li>Cloud deployment (AWS, Azure, GCP)</li>
                </ul>
              </div>

              <div class="card">
                <h3 class="h3">AI Automation</h3>
                <p class="mb-md">
                  Intelligent automation solutions that streamline workflows, reduce manual tasks, and amplify human capability with AI.
                </p>
                <ul class="list-bulleted text-sm">
                  <li>Prompt engineering and optimization</li>
                  <li>Workflow automation</li>
                  <li>Natural language processing</li>
                  <li>AI integration consulting</li>
                </ul>
              </div>

              <div class="card">
                <h3 class="h3">Government Solutions</h3>
                <p class="mb-md">
                  SDVOSB-certified development services tailored for federal, state, and local government agencies with compliance expertise.
                </p>
                <ul class="list-bulleted text-sm">
                  <li>Section 508 accessibility compliance</li>
                  <li>FISMA and NIST framework alignment</li>
                  <li>Environmental data systems</li>
                  <li>GIS integration</li>
                </ul>
              </div>

              <div class="card">
                <h3 class="h3">Digital Strategy</h3>
                <p class="mb-md">
                  Strategic guidance for digital transformation, technology adoption, and systems architecture with real-world experience.
                </p>
                <ul class="list-bulleted text-sm">
                  <li>Technology assessment</li>
                  <li>Systems architecture design</li>
                  <li>Vendor evaluation</li>
                  <li>Implementation planning</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Our Approach">
            <div class="card">
              <h3 class="h3 mb-md">Clarity, Discipline, Results</h3>
              <p class="mb-md">
                We bring military precision and federal service experience to every project. No buzzwords, no overselling—just clear requirements, disciplined execution, and reliable results.
              </p>
              <div class="grid-2 mt-lg">
                <div>
                  <h4 class="h4">Discovery</h4>
                  <p class="text-sm">
                    We listen first. Understanding your needs, constraints, and goals before proposing solutions.
                  </p>
                </div>
                <div>
                  <h4 class="h4">Design</h4>
                  <p class="text-sm">
                    Systems thinking from submarines to ecosystems. Architecture that's resilient and adaptable.
                  </p>
                </div>
                <div>
                  <h4 class="h4">Development</h4>
                  <p class="text-sm">
                    Clean code, security-first practices, and iterative delivery with regular communication.
                  </p>
                </div>
                <div>
                  <h4 class="h4">Deployment</h4>
                  <p class="text-sm">
                    Thorough testing, documentation, and support to ensure smooth launches and reliable operation.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section>
            <div class="card text-center">
              <h3 class="h3">Start Your Project</h3>
              <p class="mt-md mb-md text-lg">
                Whether you're a government agency, commercial business, or startup, let's discuss how we can help achieve your goals.
              </p>
              <a href="/contact">
                <button class="btn btn-primary btn-lg">Get In Touch</button>
              </a>
              <p class="text-sm text-muted mt-md">
                Free consultation for government agencies and non-profits
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Services

