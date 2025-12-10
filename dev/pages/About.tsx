import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import Seo from '../components/Seo'

const About: Component = () => {
  return (
    <>
      <Seo
        title="About — Boswell Digital Solutions"
        description="Learn about Charles Boswell, U.S. Navy Veteran and founder of Boswell Digital Solutions. From submarines to software, building technology with military discipline and federal service experience."
        url="https://boswelldigitalsolutions.com/about"
        image="https://boswelldigitalsolutions.com/og-cover.jpg"
      />
      <main id="main">
        <div class="hero">
          <h1>About Boswell Digital Solutions</h1>
          <p class="text-lg">
            Building technology from real experience in military and federal service—designed for
            those who need systems they can genuinely depend on.
          </p>
        </div>

        <div class="container-center max-w-960">
          {/* At-a-Glance Section */}
          <Section title="At-a-Glance">
            <div class="grid-2">
              <div class="card">
                <h4 class="h4">Federal Service</h4>
                <p class="text-lg font-semibold">16+ years</p>
                <p class="text-sm text-muted">
                  U.S. Forest Service: Incident Command, Security Management, Contracting
                  Officer's Representative
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Military</h4>
                <p class="text-lg font-semibold">U.S. Navy Veteran</p>
                <p class="text-sm text-muted">
                  Submariner, Dolphins qualified, 10% Service-Connected Disabled
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Expertise</h4>
                <p class="text-lg font-semibold">
                  Command, Contracting, Security, AI
                </p>
                <p class="text-sm text-muted">
                  Type III Incident Commander, Type II COR, Security Manager
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Focus Areas</h4>
                <p class="text-lg font-semibold">Government-Grade AI Tools</p>
                <p class="text-sm text-muted">
                  Developer tools, author platforms, ecology systems, public agency solutions
                </p>
              </div>
            </div>
          </Section>

          {/* Founder Story */}
          <Section title="Founder: Charles Boswell">
            <div class="card">
              <h3 class="h3 mb-md">From Submarines to Software</h3>
              <p class="mb-md">
                Charles Boswell's career has been defined by one principle: precision and
                accountability in high-stakes environments. His path from military service to
                federal operations to software engineering creates a rare combination of
                discipline, operational experience, and modern technical expertise.
              </p>

              <h4 class="h4 mt-lg mb-sm">Early Foundation</h4>
              <p class="mb-md">
                Raised on a farm, Charles developed an early understanding of systems—how they
                work, how they fail, and how to keep them running when it matters. This
                foundation would prove essential throughout his career.
              </p>

              <h4 class="h4 mt-lg mb-sm">Military Service</h4>
              <p class="mb-md">
                In the U.S. Navy submarine force, Charles earned his Dolphins and learned the
                importance of systems thinking, precision, and team discipline. Submarine
                operations demand absolute reliability—there's no room for error when you're
                operating complex systems in an unforgiving environment. This experience instilled
                the discipline that defines his approach to software development today.
              </p>

              <h4 class="h4 mt-lg mb-sm">Federal Career & Field Experience</h4>
              <p class="mb-md">
                After military service, Charles transitioned to ecology and wildlife biology,
                working as a field technician studying natural systems. This hands-on experience
                led to a 16+ year career with the U.S. Forest Service, where he progressed through
                increasingly complex roles:
              </p>
              <ul class="list-bulleted mb-md">
                <li>
                  <strong>Wildland Firefighter</strong> — Learned the cost of poor communication
                  and the value of clear procedures under pressure
                </li>
                <li>
                  <strong>Type III Incident Commander</strong> — Led multi-resource incidents,
                  coordinating teams, equipment, and operations in dynamic, high-stakes situations
                </li>
                <li>
                  <strong>Type II Contracting Officer's Representative (COR)</strong> — Oversaw
                  wildlife habitat contracts, SOW interpretation, contractor performance
                  evaluation, and QA/QC for federal procurement
                </li>
                <li>
                  <strong>Qualified Security Manager</strong> — Managed security operations,
                  understanding federal security expectations, data protection requirements, and
                  classified information handling
                </li>
                <li>
                  <strong>Ecological Field Specialist</strong> — Direct experience with habitat
                  monitoring, ecological observation, species management, and environmental data
                  systems
                </li>
              </ul>

              <h4 class="h4 mt-lg mb-sm">Why This Background Matters</h4>
              <p class="mb-md">
                This combination of military discipline, federal operations experience, and
                field-level expertise creates a unique perspective on software development.
                Charles doesn't just understand government requirements from a textbook—he's lived
                them. He's seen what agencies actually need, how federal procurement works, what
                field teams face, and where technology typically fails to serve its users.
              </p>
              <p class="mb-md">
                When he builds software for government agencies, he understands Section 508
                compliance not as a checkbox, but as a mission requirement. When he designs data
                systems for field teams, he knows what it's like to use technology in challenging
                conditions. When he oversees contracts and procurement, he brings the perspective
                of someone who has been on both sides of the table.
              </p>

              <h4 class="h4 mt-lg mb-sm">Transition to Software Engineering</h4>
              <p class="mb-md">
                Recognizing the gap between what federal agencies need and what typical software
                companies deliver, Charles founded Boswell Digital Solutions to build tools that
                combine government-grade quality with modern AI capabilities. His approach is
                grounded in real operational experience: no buzzwords, no overselling—just
                reliable systems designed for people who need them to work.
              </p>
            </div>
          </Section>

          {/* Core Values */}
          <Section title="Core Values" subtitle="The principles that guide our work">
            <div class="grid-2">
              <div class="card">
                <h4 class="h4">Integrity</h4>
                <p class="text-sm">
                  Do the right thing, consistently. Build what's needed, deliver what's promised,
                  and own the outcomes.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Accountability</h4>
                <p class="text-sm">
                  Take responsibility for the work and its results. If something fails, fix it. If
                  something succeeds, build on it.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Service</h4>
                <p class="text-sm">
                  Rooted in military and federal service mindset. We're here to support missions
                  that matter, not just generate revenue.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Reliability</h4>
                <p class="text-sm">
                  Build systems people can depend on. Precision and discipline from submarine
                  operations to software deployment.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Clarity</h4>
                <p class="text-sm">
                  Reduce friction in tools and communication. Clear requirements, clear execution,
                  clear results. No jargon, no hype.
                </p>
              </div>
              <div class="card">
                <h4 class="h4">Field-Informed Design</h4>
                <p class="text-sm">
                  Create tools for real-world use, not abstract requirements. Design from
                  experience, test in practice, refine for impact.
                </p>
              </div>
            </div>
          </Section>

          {/* Current Work */}
          <Section title="Current Work" subtitle="The Forge Ecosystem and beyond">
            <div class="card">
              <p class="mb-md">
                Boswell Digital Solutions is building the <strong>Forge Ecosystem</strong>—a suite
                of AI-enabled, government-grade applications designed for developers, authors,
                public agencies, and mission-driven organizations:
              </p>
              <ul class="list-bulleted mb-lg">
                <li>
                  <strong>VibeForge</strong> — AI prompt engineering workbench for developers and
                  technical teams
                </li>
                <li>
                  <strong>AuthorForge</strong> — Comprehensive writing suite for fiction authors,
                  worldbuilding, and manuscript management
                </li>
                <li>
                  <strong>Leopold</strong> — Habitat monitoring and ecological observation platform
                  for field teams and agencies
                </li>
                <li>
                  <strong>Livy</strong> — Location-aware historical storytelling system for tourism
                  and cultural organizations
                </li>
                <li>
                  <strong>AgencyForge</strong> — Custom workflows and data systems for public
                  agencies and environmental platforms
                </li>
              </ul>
              <p class="mb-md">
                Beyond the Forge Ecosystem, we provide custom software development, AI integration
                consulting, and digital strategy for government agencies, commercial businesses,
                and mission-focused organizations. Every project is approached with the same
                discipline: understand the real need, design for actual use, build what works,
                deliver on time.
              </p>
            </div>
          </Section>

          {/* Philosophy */}
          <Section title="Professional Philosophy">
            <div class="card">
              <p class="text-lg mb-md">
                "Technology should help people, not replace them. The best tools empower users to
                do what they do best, without getting in the way."
              </p>
              <p class="mb-md">
                This philosophy drives every line of code, every design decision, every client
                engagement. Whether it's helping developers manage AI prompts, authors organize
                manuscripts, or agencies track environmental data, the goal is always clarity over
                complexity, genuine help over hype, and long-term impact over short-term gains.
              </p>
              <p>
                From submarine systems to forest ecosystems to software systems—Charles learned
                that everything is connected. Good software reflects this reality: it's resilient,
                adaptable, and built to work within larger systems. Military discipline meets
                ecological thinking. Precision with perspective. Accountability with adaptability.
              </p>
            </div>
          </Section>

          {/* Contact CTA */}
          <Section>
            <div class="card text-center">
              <h3 class="h3">Work With Us</h3>
              <p class="mt-md mb-md">
                Whether you're a government agency, a commercial business, or an individual with a
                mission-driven project, we'd like to hear from you. Direct access to Charles
                Boswell, Founder & Principal Engineer.
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

export default About
