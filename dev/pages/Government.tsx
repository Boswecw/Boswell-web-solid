import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import Seo from '../components/Seo'

const Government: Component = () => {
  return (
    <>
      <Seo
        title="Government Solutions — Boswell Digital Solutions"
        description="Service-Disabled Veteran-Owned Small Business (SDVOSB) providing government-grade AI and web solutions. Located in Lexington, Kentucky."
        url="https://boswelldigitalsolutions.com/government"
        image="https://boswelldigitalsolutions.com/og-cover.jpg"
      />
      <main id="main">
        <div class="hero">
          <div class="sdvosb-banner p-md mb-lg">
            <h1>Government Solutions</h1>
            <p class="text-xl mt-md">
              Service-Disabled Veteran-Owned Small Business (SDVOSB)
            </p>
            <p class="text-lg mt-sm">Lexington, Kentucky | CAGE Code: [TBD]</p>
          </div>
        </div>

        <div class="container-center max-w-960">
          <Section
            title="Our Qualifications"
            subtitle="Veteran-owned expertise with government-grade quality."
          >
            <div class="grid-2">
              <div class="card">
                <h3 class="h3">SDVOSB Certified</h3>
                <p>
                  Service-Disabled Veteran-Owned Small Business providing priority access for
                  federal procurement officers and contracting opportunities.
                </p>
              </div>
              <div class="card">
                <h3 class="h3">Federal Experience</h3>
                <p>
                  16+ years federal service with USFS, including incident command, security
                  management, and COR responsibilities.
                </p>
              </div>
              <div class="card">
                <h3 class="h3">Military Background</h3>
                <p>
                  U.S. Navy submariner, Dolphins qualified. Systems-thinking approach with
                  discipline and precision from military service.
                </p>
              </div>
              <div class="card">
                <h3 class="h3">Technical Expertise</h3>
                <p>
                  Modern web development, AI automation, data systems, and security-focused
                  solutions built to government standards.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Engagement Models" subtitle="Flexible approaches to meet your needs.">
            <div class="list-bulleted">
              <ul>
                <li>
                  <strong>Pilot Projects:</strong> Low-risk proof-of-concept engagements to
                  demonstrate value before full commitment.
                </li>
                <li>
                  <strong>Direct Award:</strong> SDVOSB set-aside contracts for sole-source awards
                  under applicable thresholds.
                </li>
                <li>
                  <strong>Subcontracting:</strong> Partner with prime contractors to provide
                  specialized technical expertise.
                </li>
                <li>
                  <strong>GSA Schedule:</strong> (In progress) Streamlined procurement through
                  federal supply schedules.
                </li>
              </ul>
            </div>
          </Section>

          <Section title="Core Capabilities">
            <div class="grid-2">
              <div>
                <h4 class="h4">AI & Automation</h4>
                <ul class="list-bulleted">
                  <li>Prompt engineering and AI integration</li>
                  <li>Workflow automation and optimization</li>
                  <li>Data analysis and visualization</li>
                  <li>Natural language processing applications</li>
                </ul>
              </div>
              <div>
                <h4 class="h4">Web Development</h4>
                <ul class="list-bulleted">
                  <li>Modern, secure web applications</li>
                  <li>Government accessibility compliance (Section 508)</li>
                  <li>Cloud-native architecture</li>
                  <li>API development and integration</li>
                </ul>
              </div>
              <div>
                <h4 class="h4">Data Systems</h4>
                <ul class="list-bulleted">
                  <li>Environmental and ecological data platforms</li>
                  <li>GIS integration and mapping</li>
                  <li>Field data collection systems</li>
                  <li>Compliance and reporting tools</li>
                </ul>
              </div>
              <div>
                <h4 class="h4">Security & Compliance</h4>
                <ul class="list-bulleted">
                  <li>Security-first development practices</li>
                  <li>FISMA and NIST framework alignment</li>
                  <li>Data protection and privacy compliance</li>
                  <li>Documentation and audit support</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Get Started">
            <div class="card text-center">
              <h3 class="h3">Ready to discuss your project?</h3>
              <p class="mt-md mb-md">
                Contact us to learn more about our capabilities and how we can support your
                agency's mission.
              </p>
              <div class="flex flex-center gap-sm">
                <a href="/contact">
                  <button class="btn btn-primary">Contact Us</button>
                </a>
                <a href="#capability-statement">
                  <button class="btn btn-outline">Download Capability Statement</button>
                </a>
              </div>
              <p class="text-sm text-muted mt-md">
                Email:{' '}
                <a href="mailto:contact@boswelldigitalsolutions.com">
                  contact@boswelldigitalsolutions.com
                </a>
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Government
