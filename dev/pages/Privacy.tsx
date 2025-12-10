import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import { META_CONFIG } from '../config/meta'
import Seo from '../components/Seo'

const Privacy: Component = () => {
  return (
    <>
      <Seo
        title={META_CONFIG.privacy.title}
        description={META_CONFIG.privacy.description}
        url={META_CONFIG.privacy.url}
        image={META_CONFIG.privacy.ogImage}
      />
      <main id="main">
        <div class="hero">
          <h1>Privacy Policy</h1>
          <p class="text-sm text-muted">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div class="container-center max-w-960">
          <Section title="Introduction">
            <div class="card">
              <p>
                Boswell Digital Solutions LLC ("we," "us," or "our") operates the boswelldigitalsolutions.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our Service.
              </p>
              <p class="mt-md">
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </Section>

          <Section title="Information Collection and Use">
            <div class="card">
              <p class="mb-md">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h4 class="h4 mt-lg mb-sm">Types of Data Collected</h4>
              <ul class="list-bulleted">
                <li>
                  <strong>Personal Data:</strong> When you contact us through our website, we may ask you to provide certain personally identifiable information, including but not limited to your name and email address.
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect information about how the Service is accessed and used, including your browser type, pages visited, time spent on pages, and other diagnostic data.
                </li>
              </ul>
            </div>
          </Section>

          <Section title="Use of Data">
            <div class="card">
              <p class="mb-sm">Boswell Digital Solutions uses the collected data for various purposes:</p>
              <ul class="list-bulleted">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To respond to your inquiries and requests</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </div>
          </Section>

          <Section title="Data Security">
            <div class="card">
              <p>
                The security of your data is important to us. We take reasonable measures to protect your information from unauthorized access, use, alteration, and disclosure. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </Section>

          <Section title="Third-Party Services">
            <div class="card">
              <p class="mb-md">
                We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used.
              </p>
              <p>
                These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </div>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <div class="card">
              <p class="mb-md">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </Section>

          <Section title="Contact Us">
            <div class="card">
              <p class="mb-md">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul class="list-bulleted">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contact@boswelldigitalsolutions.com" class="text-primary">
                    contact@boswelldigitalsolutions.com
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Lexington, Kentucky
                </li>
              </ul>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Privacy

