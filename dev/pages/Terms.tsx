import type { Component } from 'solid-js'
import { Section } from '../components/Section'
import Seo from '../components/Seo'

const Terms: Component = () => {
  return (
    <>
      <Seo
        title="Terms of Service — Boswell Digital Solutions"
        description="Terms of Service for Boswell Digital Solutions LLC. Read our user agreement, privacy practices, and service policies."
        url="https://boswelldigitalsolutions.com/terms"
        image="https://boswelldigitalsolutions.com/og-cover.jpg"
      />
      <main id="main">
        <div class="hero">
          <h1>Terms of Service</h1>
          <p class="text-sm text-muted">Last updated: {new Date().toLocaleDateString()}</p>
          <p class="text-sm text-muted mt-xs">Effective Date: December 10, 2025</p>
        </div>

        <div class="container-center max-w-960">
          {/* Introduction */}
          <Section title="Welcome">
            <div class="card">
              <p class="mb-md">
                These Terms of Service ("Terms") govern your access to and use of services
                provided by Boswell Digital Solutions LLC ("Boswell," "we," "us," or "our"), a
                Service-Disabled Veteran-Owned Small Business located in Lexington, Kentucky.
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms and our
                Privacy Policy. If you do not agree, please do not use our services.
              </p>
            </div>
          </Section>

          {/* 1. Acceptance of Terms */}
          <Section title="1. Acceptance of Terms">
            <div class="card">
              <p class="mb-md">
                By creating an account, accessing our website, or using any of our applications
                (including VibeForge, AuthorForge, Leopold, and Livy), you acknowledge that you
                have read, understood, and agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p class="mb-md">
                If you are using our services on behalf of an organization, you represent and
                warrant that you have the authority to bind that organization to these Terms.
              </p>
              <p>
                Continued use of our services following any modifications to these Terms
                constitutes acceptance of those modifications.
              </p>
            </div>
          </Section>

          {/* 2. Definitions */}
          <Section title="2. Definitions">
            <div class="card">
              <ul class="list-bulleted">
                <li>
                  <strong>"Service"</strong> refers to all applications, websites, APIs,
                  documentation, and support provided by Boswell Digital Solutions, including but
                  not limited to VibeForge, AuthorForge, Leopold, and Livy.
                </li>
                <li>
                  <strong>"User," "you," or "your"</strong> refers to any individual or
                  organization using the Service.
                </li>
                <li>
                  <strong>"Content"</strong> refers to all data, text, files, images, prompts,
                  manuscripts, observations, or other materials uploaded, created, or generated
                  through the Service.
                </li>
                <li>
                  <strong>"Intellectual Property"</strong> includes all proprietary software,
                  algorithms, designs, trademarks, and other materials owned by Boswell.
                </li>
                <li>
                  <strong>"Account"</strong> refers to your registered user profile and associated
                  data within the Service.
                </li>
              </ul>
            </div>
          </Section>

          {/* 3. License Grant and Use Restrictions */}
          <Section title="3. License Grant and Use Restrictions">
            <div class="card">
              <h4 class="h4 mb-sm">Grant of License</h4>
              <p class="mb-md">
                Subject to your compliance with these Terms, Boswell grants you a limited,
                non-exclusive, non-transferable, revocable license to access and use the Service
                for personal, business, or commercial purposes as permitted by your subscription
                plan.
              </p>

              <h4 class="h4 mb-sm">Restrictions</h4>
              <p class="mb-sm">You agree not to:</p>
              <ul class="list-bulleted">
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Copy, modify, or create derivative works of the Service</li>
                <li>
                  Use the Service to violate any laws, regulations, or third-party rights
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the Service
                </li>
                <li>
                  Attempt to gain unauthorized access to the Service or related systems
                </li>
                <li>Use the Service for any unlawful, harmful, or fraudulent purpose</li>
                <li>Resell, lease, or sublicense access to the Service without permission</li>
                <li>
                  Remove or modify any proprietary notices or labels on the Service
                </li>
              </ul>
            </div>
          </Section>

          {/* 4. User Accounts and Responsibilities */}
          <Section title="4. User Accounts and Responsibilities">
            <div class="card">
              <h4 class="h4 mb-sm">Account Creation</h4>
              <p class="mb-md">
                You must be at least 18 years old to create an account. You agree to provide
                accurate, current, and complete information during registration and to update it as
                necessary.
              </p>

              <h4 class="h4 mb-sm">Account Security</h4>
              <p class="mb-md">
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account. You agree to notify us
                immediately of any unauthorized access or security breach.
              </p>

              <h4 class="h4 mb-sm">Responsible Use</h4>
              <p class="mb-sm">You agree to:</p>
              <ul class="list-bulleted">
                <li>Use the Service in compliance with all applicable laws and regulations</li>
                <li>
                  Respect the rights and privacy of other users and third parties
                </li>
                <li>Not engage in harassment, abuse, threats, or intimidation</li>
                <li>Not use the Service for spam, unsolicited marketing, or malicious purposes</li>
                <li>
                  Not upload or distribute viruses, malware, or other harmful code
                </li>
              </ul>
            </div>
          </Section>

          {/* 5. Intellectual Property Rights */}
          <Section title="5. Intellectual Property Rights">
            <div class="card">
              <h4 class="h4 mb-sm">Boswell's Intellectual Property</h4>
              <p class="mb-md">
                All aspects of the Service, including software, algorithms, user interface,
                design, trademarks, logos, and documentation, are owned by Boswell Digital
                Solutions LLC and protected by U.S. and international intellectual property laws.
                Nothing in these Terms grants you any ownership rights to our Intellectual
                Property.
              </p>

              <h4 class="h4 mb-sm">User Content Ownership</h4>
              <p class="mb-md">
                You retain all rights to Content you create or upload through the Service,
                including prompts, manuscripts, observations, and other user-generated materials.
              </p>

              <h4 class="h4 mb-sm">License to Use User Content</h4>
              <p class="mb-md">
                By using the Service, you grant Boswell a worldwide, non-exclusive, royalty-free
                license to use, store, process, and display your Content solely for the purposes
                of:
              </p>
              <ul class="list-bulleted">
                <li>Providing and operating the Service</li>
                <li>Improving and developing our products and features</li>
                <li>
                  Training and improving AI models (only with aggregated, anonymized data unless
                  you explicitly opt in)
                </li>
                <li>Complying with legal obligations</li>
              </ul>
              <p class="mt-md text-sm text-muted">
                We will never sell your Content to third parties or use it for purposes
                inconsistent with our Privacy Policy.
              </p>
            </div>
          </Section>

          {/* 6. User-Generated Content */}
          <Section title="6. User-Generated Content">
            <div class="card">
              <h4 class="h4 mb-sm">Your Responsibility</h4>
              <p class="mb-md">
                You are solely responsible for all Content you create, upload, or share through
                the Service. You represent and warrant that:
              </p>
              <ul class="list-bulleted mb-md">
                <li>You own or have the necessary rights to your Content</li>
                <li>Your Content does not infringe on third-party intellectual property rights</li>
                <li>Your Content complies with all applicable laws and regulations</li>
                <li>Your Content does not contain defamatory, obscene, or illegal material</li>
              </ul>

              <h4 class="h4 mb-sm">Content Moderation</h4>
              <p class="mb-md">
                Boswell reserves the right (but has no obligation) to review, monitor, and remove
                Content that violates these Terms, is illegal, or is harmful to other users or our
                business.
              </p>

              <h4 class="h4 mb-sm">AI-Generated Content</h4>
              <p>
                For AI-powered applications (VibeForge, AuthorForge), you acknowledge that
                AI-generated outputs may not be accurate, complete, or suitable for your purposes.
                You are responsible for reviewing and validating all AI-generated Content before
                use.
              </p>
            </div>
          </Section>

          {/* 7. Limitation of Liability */}
          <Section title="7. Limitation of Liability">
            <div class="card">
              <p class="mb-md">
                <strong>To the maximum extent permitted by law</strong>, Boswell Digital Solutions
                LLC, its officers, directors, employees, and agents shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including but
                not limited to:
              </p>
              <ul class="list-bulleted mb-md">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or Content</li>
                <li>Business interruption or downtime</li>
                <li>Cost of substitute services</li>
                <li>Personal injury or property damage</li>
                <li>
                  Any other damages arising from your use or inability to use the Service
                </li>
              </ul>
              <p class="mb-md">
                In no event shall our total liability exceed the amount you paid to Boswell in the
                twelve (12) months preceding the claim, or $100 USD if you have not paid any fees.
              </p>
              <p class="text-sm text-muted">
                Some jurisdictions do not allow the exclusion or limitation of certain damages. In
                such jurisdictions, our liability is limited to the greatest extent permitted by
                law.
              </p>
            </div>
          </Section>

          {/* 8. Warranties and Disclaimers */}
          <Section title="8. Warranties and Disclaimers">
            <div class="card">
              <p class="mb-md">
                <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE"</strong> without
                warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul class="list-bulleted mb-md">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties of accuracy, completeness, or timeliness</li>
                <li>Warranties of uninterrupted, secure, or error-free operation</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p class="mb-md">
                We do not warrant that the Service will meet your requirements or that it will be
                compatible with all hardware and software. Technical issues, downtime, and data
                loss are possible and may occur without notice.
              </p>
              <p>
                Use of the Service is at your own risk. You are solely responsible for any damage
                to your systems or loss of data resulting from use of the Service.
              </p>
            </div>
          </Section>

          {/* 9. Indemnification */}
          <Section title="9. Indemnification">
            <div class="card">
              <p class="mb-md">
                You agree to indemnify, defend, and hold harmless Boswell Digital Solutions LLC,
                its officers, directors, employees, contractors, and agents from and against any
                claims, liabilities, damages, losses, costs, or expenses (including reasonable
                attorneys' fees) arising from or related to:
              </p>
              <ul class="list-bulleted">
                <li>Your use or misuse of the Service</li>
                <li>Your Content or any violation of third-party rights by your Content</li>
                <li>Your violation of these Terms or applicable laws</li>
                <li>Your breach of any representations or warranties</li>
                <li>Any negligent or wrongful conduct on your part</li>
              </ul>
              <p class="mt-md text-sm text-muted">
                Boswell reserves the right to assume exclusive defense and control of any matter
                subject to indemnification, at your expense.
              </p>
            </div>
          </Section>

          {/* 10. Termination */}
          <Section title="10. Termination">
            <div class="card">
              <h4 class="h4 mb-sm">Termination by You</h4>
              <p class="mb-md">
                You may terminate your account at any time by contacting us at{' '}
                <a href="mailto:contact@boswelldigitalsolutions.com" class="text-primary">
                  contact@boswelldigitalsolutions.com
                </a>
                . Termination does not relieve you of obligations incurred prior to termination.
              </p>

              <h4 class="h4 mb-sm">Termination by Boswell</h4>
              <p class="mb-md">We may suspend or terminate your access to the Service:</p>
              <ul class="list-bulleted mb-md">
                <li>For violation of these Terms</li>
                <li>For fraudulent, abusive, or illegal activity</li>
                <li>For prolonged inactivity (12+ months)</li>
                <li>For regulatory, legal, or business reasons</li>
                <li>At our discretion with 30 days' notice (at-will termination)</li>
              </ul>

              <h4 class="h4 mb-sm">Effect of Termination</h4>
              <p class="mb-md">
                Upon termination, your right to access the Service immediately ceases. We will
                retain your Content for 30 days following termination, after which it may be
                permanently deleted. You are responsible for exporting your Content before
                termination.
              </p>
              <p class="text-sm text-muted">
                Sections of these Terms that by their nature should survive termination (including
                Intellectual Property, Limitation of Liability, Indemnification, and Governing
                Law) will remain in effect.
              </p>
            </div>
          </Section>

          {/* 11. Modifications */}
          <Section title="11. Modifications to Service and Terms">
            <div class="card">
              <h4 class="h4 mb-sm">Service Modifications</h4>
              <p class="mb-md">
                Boswell reserves the right to modify, suspend, or discontinue any aspect of the
                Service at any time, with or without notice. We are not liable for any
                modifications, suspensions, or discontinuations.
              </p>

              <h4 class="h4 mb-sm">Terms Modifications</h4>
              <p class="mb-md">
                We may update these Terms from time to time. Material changes will be communicated
                via email or notification within the Service at least 30 days before the effective
                date.
              </p>
              <p class="mb-md">
                Your continued use of the Service after modifications become effective constitutes
                acceptance of the modified Terms. If you do not agree with the modifications, you
                may terminate your account.
              </p>
              <p class="text-sm text-muted">
                The "Last Updated" date at the top of this page indicates when these Terms were
                last revised.
              </p>
            </div>
          </Section>

          {/* 12. Privacy and Data Protection */}
          <Section title="12. Privacy and Data Protection">
            <div class="card">
              <p class="mb-md">
                Your privacy is important to us. Our collection, use, and protection of your
                personal information is governed by our{' '}
                <a href="/privacy" class="text-primary">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms by reference.
              </p>

              <h4 class="h4 mb-sm">Data Security</h4>
              <p class="mb-md">
                We implement reasonable administrative, technical, and physical safeguards to
                protect your data. However, no method of transmission or storage is 100% secure,
                and we cannot guarantee absolute security.
              </p>

              <h4 class="h4 mb-sm">Data Retention</h4>
              <p class="mb-md">
                We retain your Content and account information for as long as your account is
                active or as necessary to provide services. Following account termination, data may
                be retained for up to 30 days before permanent deletion, except where required by
                law or legitimate business purposes.
              </p>

              <h4 class="h4 mb-sm">User Data Rights</h4>
              <p>
                You have the right to access, correct, export, or delete your personal information
                and Content. Contact us at{' '}
                <a href="mailto:contact@boswelldigitalsolutions.com" class="text-primary">
                  contact@boswelldigitalsolutions.com
                </a>{' '}
                to exercise these rights.
              </p>
            </div>
          </Section>

          {/* 13. Third-Party Services */}
          <Section title="13. Third-Party Services and Links">
            <div class="card">
              <p class="mb-md">
                The Service may contain links to third-party websites, services, or content not
                owned or controlled by Boswell. We do not endorse or assume responsibility for any
                third-party sites, information, materials, products, or services.
              </p>
              <p class="mb-md">
                Your use of third-party services is governed by their respective terms and privacy
                policies. We are not liable for any harm or damages related to third-party
                services.
              </p>
              <p>
                If you access third-party services through the Service, you do so at your own risk
                and agree to comply with their terms.
              </p>
            </div>
          </Section>

          {/* 14. Dispute Resolution and Governing Law */}
          <Section title="14. Dispute Resolution and Governing Law">
            <div class="card">
              <h4 class="h4 mb-sm">Governing Law</h4>
              <p class="mb-md">
                These Terms are governed by and construed in accordance with the laws of the
                Commonwealth of Kentucky and the United States of America, without regard to
                conflict of law principles.
              </p>

              <h4 class="h4 mb-sm">Jurisdiction</h4>
              <p class="mb-md">
                Any disputes arising from these Terms or the Service shall be subject to the
                exclusive jurisdiction of the state and federal courts located in Lexington,
                Kentucky.
              </p>

              <h4 class="h4 mb-sm">Dispute Resolution Process</h4>
              <p class="mb-md">
                Before initiating formal proceedings, you agree to attempt to resolve disputes
                through good faith negotiation for at least 30 days. If negotiation fails, either
                party may pursue binding arbitration or litigation.
              </p>

              <h4 class="h4 mb-sm">Arbitration</h4>
              <p class="mb-md">
                Disputes may be resolved through binding arbitration in accordance with the rules
                of the American Arbitration Association. Arbitration will be conducted in
                Lexington, Kentucky, and the decision will be final and binding.
              </p>
              <p class="mb-md">
                <strong>Class Action Waiver:</strong> You agree to resolve disputes on an
                individual basis and waive the right to participate in class actions, class
                arbitrations, or representative actions.
              </p>

              <h4 class="h4 mb-sm">Exceptions</h4>
              <p>
                Either party may seek injunctive or equitable relief in court for intellectual
                property infringement or emergency matters without prior negotiation or
                arbitration.
              </p>
            </div>
          </Section>

          {/* 15. Government Contracting */}
          <Section title="15. Government Contracting and Federal Customers">
            <div class="card">
              <h4 class="h4 mb-sm">SDVOSB Status</h4>
              <p class="mb-md">
                Boswell Digital Solutions LLC is a certified Service-Disabled Veteran-Owned Small
                Business (SDVOSB), eligible for set-aside contracts and sole-source awards under
                applicable federal procurement regulations.
              </p>

              <h4 class="h4 mb-sm">Government Rights</h4>
              <p class="mb-md">
                For government customers, data rights and intellectual property provisions may be
                modified by specific contract terms, flow-down requirements, or federal acquisition
                regulations (FAR/DFARS).
              </p>

              <h4 class="h4 mb-sm">Compliance</h4>
              <p>
                We are committed to compliance with federal security and data protection
                requirements, including FISMA, NIST frameworks, and Section 508 accessibility
                standards where applicable. Specific compliance requirements will be addressed in
                individual contracts or agreements.
              </p>
            </div>
          </Section>

          {/* 16. Severability and Entire Agreement */}
          <Section title="16. Severability and Entire Agreement">
            <div class="card">
              <h4 class="h4 mb-sm">Severability</h4>
              <p class="mb-md">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable,
                the remaining provisions shall remain in full force and effect. The invalid
                provision will be modified to the minimum extent necessary to make it valid and
                enforceable.
              </p>

              <h4 class="h4 mb-sm">Entire Agreement</h4>
              <p class="mb-md">
                These Terms, together with our Privacy Policy and any additional agreements you
                enter into with Boswell, constitute the entire agreement between you and Boswell
                regarding the Service.
              </p>
              <p>
                These Terms supersede all prior or contemporaneous agreements, understandings,
                representations, and communications, whether written or oral, regarding the
                subject matter.
              </p>
            </div>
          </Section>

          {/* 17. Additional Provisions */}
          <Section title="17. Additional Provisions">
            <div class="card">
              <h4 class="h4 mb-sm">No Waiver</h4>
              <p class="mb-md">
                Our failure to enforce any right or provision of these Terms does not constitute a
                waiver of that right or provision.
              </p>

              <h4 class="h4 mb-sm">Assignment</h4>
              <p class="mb-md">
                You may not assign or transfer these Terms or your account without our written
                consent. Boswell may assign these Terms without restriction.
              </p>

              <h4 class="h4 mb-sm">Force Majeure</h4>
              <p class="mb-md">
                Boswell is not liable for delays or failures in performance resulting from causes
                beyond our reasonable control, including natural disasters, war, terrorism, labor
                disputes, or internet outages.
              </p>

              <h4 class="h4 mb-sm">Notice</h4>
              <p>
                All notices to Boswell must be sent to{' '}
                <a href="mailto:contact@boswelldigitalsolutions.com" class="text-primary">
                  contact@boswelldigitalsolutions.com
                </a>
                . Notices to you will be sent to the email address associated with your account.
              </p>
            </div>
          </Section>

          {/* 18. Contact Information */}
          <Section title="18. Contact Information">
            <div class="card">
              <p class="mb-md">
                If you have any questions, concerns, or disputes regarding these Terms of Service,
                please contact us:
              </p>
              <ul class="list-bulleted">
                <li>
                  <strong>Company:</strong> Boswell Digital Solutions LLC
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contact@boswelldigitalsolutions.com" class="text-primary">
                    contact@boswelldigitalsolutions.com
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Lexington, Kentucky, United States
                </li>
                <li>
                  <strong>Business Type:</strong> Service-Disabled Veteran-Owned Small Business
                  (SDVOSB)
                </li>
                <li>
                  <strong>Website:</strong>{' '}
                  <a href="https://boswelldigitalsolutions.com" class="text-primary">
                    https://boswelldigitalsolutions.com
                  </a>
                </li>
              </ul>
              <p class="mt-lg text-sm text-muted">
                For privacy-related inquiries, please see our{' '}
                <a href="/privacy" class="text-primary">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </Section>

          {/* Acknowledgment */}
          <Section>
            <div class="card text-center">
              <h3 class="h3 mb-md">Acknowledgment</h3>
              <p class="mb-md">
                By using Boswell Digital Solutions services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
              <p class="text-sm text-muted">
                Last Updated: {new Date().toLocaleDateString()} | Effective: December 10, 2025
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  )
}

export default Terms
