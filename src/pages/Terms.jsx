import { Link } from "react-router-dom";

import PageHero from "../components/PageHero";
import SiteIcon from "../components/SiteIcon";

import {
  callToActions,
  company,
} from "../data/siteData";

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal Information"
        title="Terms of Service"
        description="These terms explain the general conditions for using the RR RootRise website, submitting project enquiries and discussing digital services."
        primaryAction={callToActions.primary}
      />

      <section
        className="section legal-page"
        aria-labelledby="terms-title"
      >
        <div className="container-reading">
          <article className="legal-content-card reveal">
            <div className="legal-content">
              <div>
                <span className="legal-updated">
                  <SiteIcon
                    name="shield"
                    size={18}
                    strokeWidth={1.8}
                  />

                  Last updated: 19 July 2026
                </span>
              </div>

              <div className="legal-section">
                <h2
                  id="terms-title"
                  className="legal-section-title"
                >
                  Introduction
                </h2>

                <p className="legal-introduction">
                  These Terms of Service apply to
                  visitors using the RR RootRise
                  Digital Innovations website and to
                  people submitting project or
                  service enquiries.
                </p>

                <p>
                  By accessing this website, you
                  agree to use it responsibly and in
                  accordance with these terms.
                </p>

                <p>
                  Submitting an enquiry does not
                  automatically create a client
                  relationship, service agreement or
                  obligation to begin a project.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  1. Website Purpose
                </h2>

                <p>
                  This website provides general
                  information about RR RootRise,
                  available digital services,
                  supported industries and project
                  enquiry options.
                </p>

                <p>
                  Website content is provided for
                  general business information and
                  may be updated, improved or removed
                  when services or business
                  requirements change.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  2. Service Enquiries
                </h2>

                <p>
                  Visitors may submit enquiries
                  relating to services such as:
                </p>

                <ul className="legal-list">
                  <li>Website development</li>

                  <li>Mobile app development</li>

                  <li>E-commerce solutions</li>

                  <li>Custom web applications</li>

                  <li>WordPress development</li>

                  <li>UI/UX design</li>

                  <li>SEO and digital marketing</li>

                  <li>Maintenance and support</li>
                </ul>

                <p>
                  Enquiry information should be
                  accurate and should provide enough
                  detail for the requested service to
                  be understood.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  3. Project Discussions and
                  Proposals
                </h2>

                <p>
                  After reviewing an enquiry, RR
                  RootRise may request additional
                  information before confirming the
                  project direction, scope or
                  availability.
                </p>

                <p>
                  Any project-specific scope,
                  deliverables, timeline, payment
                  terms, revision limits,
                  responsibilities and support
                  conditions will be documented
                  separately through a proposal,
                  quotation or written agreement.
                </p>

                <p>
                  A project will begin only after the
                  relevant terms are accepted and any
                  required initial payment is
                  completed.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  4. Client Responsibilities
                </h2>

                <p>
                  Clients may be required to provide
                  accurate project information,
                  content, brand assets, approvals
                  and access needed to complete the
                  agreed work.
                </p>

                <ul className="legal-list">
                  <li>
                    Provide complete and accurate
                    requirements
                  </li>

                  <li>
                    Supply legally usable text,
                    images, logos and other materials
                  </li>

                  <li>
                    Review project work and provide
                    feedback within agreed periods
                  </li>

                  <li>
                    Maintain authorised access to
                    third-party accounts and services
                  </li>

                  <li>
                    Complete agreed payments within
                    the stated schedule
                  </li>
                </ul>

                <p>
                  Delays in receiving required
                  information, content, access or
                  approvals may affect the project
                  timeline.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  5. Content and Intellectual
                  Property
                </h2>

                <p>
                  Clients are responsible for
                  ensuring that materials supplied
                  for a project may legally be used.
                </p>

                <p>
                  Ownership and usage rights for
                  completed project work will be
                  defined in the relevant proposal or
                  project agreement.
                </p>

                <p>
                  Third-party software, fonts,
                  plugins, stock assets, platforms or
                  licensed materials remain subject
                  to their own licence conditions.
                </p>

                <p>
                  RR RootRise branding, website
                  content, visual identity and
                  original materials may not be
                  copied or represented as another
                  business without permission.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  6. Payments and Additional Work
                </h2>

                <p>
                  Pricing and payment schedules will
                  be communicated separately for each
                  project.
                </p>

                <p>
                  Work requested outside the agreed
                  project scope may require a revised
                  quotation, additional payment or
                  updated delivery schedule.
                </p>

                <p>
                  Third-party costs such as domain
                  registration, hosting, premium
                  software, paid plugins, external
                  services, advertising spend or
                  platform subscriptions are not
                  included unless specifically stated
                  in writing.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  7. Revisions and Approvals
                </h2>

                <p>
                  Revision limits and review stages
                  will be defined within the relevant
                  project proposal.
                </p>

                <p>
                  Approved project stages may be
                  treated as completed. Significant
                  changes requested after approval
                  may be considered additional work.
                </p>

                <p>
                  Final approval confirms that the
                  client has reviewed the relevant
                  design, content or functionality.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  8. Project Timelines
                </h2>

                <p>
                  Project timelines are estimates
                  based on the agreed requirements
                  and expected cooperation from all
                  parties.
                </p>

                <p>
                  Delivery dates may change due to
                  requirement changes, delayed
                  feedback, unavailable content,
                  third-party service issues,
                  technical limitations or events
                  outside reasonable control.
                </p>

                <p>
                  Any important schedule change will
                  be communicated through the
                  available project contact channel.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  9. Third-Party Services
                </h2>

                <p>
                  Projects may use third-party
                  services such as hosting
                  providers, domain registrars,
                  payment gateways, mapping systems,
                  messaging platforms or external
                  APIs.
                </p>

                <p>
                  Those services are governed by
                  their own pricing, availability,
                  privacy policies, technical limits
                  and terms.
                </p>

                <p>
                  RR RootRise cannot guarantee the
                  uninterrupted operation of
                  independent third-party platforms.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  10. Website Availability
                </h2>

                <p>
                  Reasonable efforts are made to keep
                  this website accessible, accurate
                  and secure.
                </p>

                <p>
                  Temporary interruptions may occur
                  because of maintenance, hosting
                  issues, network problems, security
                  updates or circumstances outside
                  reasonable control.
                </p>

                <p>
                  Website access may be changed,
                  suspended or discontinued when
                  necessary.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  11. Acceptable Use
                </h2>

                <p>
                  Visitors must not misuse this
                  website or its communication
                  systems.
                </p>

                <ul className="legal-list">
                  <li>
                    Do not submit false, misleading
                    or fraudulent information
                  </li>

                  <li>
                    Do not attempt unauthorised access
                    to website systems
                  </li>

                  <li>
                    Do not introduce malicious code,
                    automated abuse or security
                    threats
                  </li>

                  <li>
                    Do not use the enquiry form for
                    spam or unlawful communication
                  </li>

                  <li>
                    Do not copy or misuse protected
                    website content
                  </li>
                </ul>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  12. No Guaranteed Business Results
                </h2>

                <p>
                  Digital services may support
                  visibility, usability, customer
                  experience and business
                  operations.
                </p>

                <p>
                  However, RR RootRise does not
                  guarantee specific revenue,
                  rankings, sales, customer numbers,
                  campaign performance or other
                  business results unless explicitly
                  stated in a separate written
                  agreement.
                </p>

                <p>
                  Results may depend on market
                  conditions, competition, business
                  operations, content, pricing,
                  advertising and other factors
                  outside the project itself.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  13. Limitation of Responsibility
                </h2>

                <p>
                  RR RootRise will provide services
                  according to the agreed project
                  scope and reasonable professional
                  standards.
                </p>

                <p>
                  Responsibility for any specific
                  project issue will be considered
                  according to the relevant written
                  agreement, applicable law and the
                  circumstances involved.
                </p>

                <p>
                  RR RootRise is not responsible for
                  losses caused by client-supplied
                  content, unauthorised account
                  access, third-party platform
                  failures, external modifications or
                  use outside the agreed purpose.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  14. Suspension or Termination
                </h2>

                <p>
                  Website access, communication or
                  project work may be suspended when
                  there is misuse, non-payment,
                  unlawful activity, repeated breach
                  of agreed responsibilities or a
                  serious security concern.
                </p>

                <p>
                  Project cancellation and any
                  related payment or handover
                  conditions will follow the
                  applicable proposal or written
                  agreement.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  15. Privacy
                </h2>

                <p>
                  Information submitted through the
                  website is handled according to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="inline-link"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                <p>
                  Visitors should avoid sharing
                  passwords, payment-card details,
                  private identity documents or
                  unnecessary sensitive information
                  through the general enquiry form.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  16. Changes to These Terms
                </h2>

                <p>
                  These Terms of Service may be
                  updated when website features,
                  services, business practices or
                  legal requirements change.
                </p>

                <p>
                  The latest version will be
                  published on this page with an
                  updated effective date.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  17. Governing Requirements
                </h2>

                <p>
                  These website terms are intended to
                  operate in accordance with
                  applicable laws and requirements in
                  India.
                </p>

                <p>
                  Project-specific legal,
                  jurisdiction or dispute conditions
                  may be defined separately in the
                  relevant written agreement.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  18. Contact
                </h2>

                <p>
                  Questions about these terms or a
                  project enquiry may be sent through
                  the official company email or
                  Contact page.
                </p>

                <div className="legal-contact-box">
                  <strong>
                    {company.name}
                  </strong>

                  <a
                    href={company.emailHref}
                    className="inline-link"
                  >
                    {company.email}
                  </a>

                  <Link
                    to="/contact"
                    className="text-link"
                  >
                    <span>
                      Visit the Contact Page
                    </span>

                    <SiteIcon
                      name="arrow-right"
                      size={18}
                      strokeWidth={2}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Terms;