import { Link } from "react-router-dom";

import PageHero from "../components/PageHero";
import SiteIcon from "../components/SiteIcon";

import {
  callToActions,
  company,
} from "../data/siteData";

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal Information"
        title="Privacy Policy"
        description="This policy explains what information may be collected through the RR RootRise website, how it is used and the choices available to website visitors."
        primaryAction={callToActions.primary}
      />

      <section
        className="section legal-page"
        aria-labelledby="privacy-policy-title"
      >
        <div className="container-reading">
          <article className="legal-content-card reveal">
            <div className="legal-content">
              <div>
                <span className="legal-updated">
                  <SiteIcon
                    name="privacy"
                    size={18}
                    strokeWidth={1.8}
                  />

                  Last updated: 19 July 2026
                </span>
              </div>

              <div className="legal-section">
                <h2
                  id="privacy-policy-title"
                  className="legal-section-title"
                >
                  Introduction
                </h2>

                <p className="legal-introduction">
                  RR RootRise Digital Innovations
                  respects your privacy and is
                  committed to handling personal
                  information responsibly.
                </p>

                <p>
                  This Privacy Policy applies to
                  information submitted through this
                  website, including project enquiry
                  forms, email communication and
                  WhatsApp contact links.
                </p>

                <p>
                  By using this website or submitting
                  information through the enquiry
                  form, you acknowledge the practices
                  described in this policy.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  1. Information We May Collect
                </h2>

                <p>
                  When you submit a project enquiry,
                  we may collect the information you
                  provide voluntarily.
                </p>

                <ul className="legal-list">
                  <li>Your full name</li>

                  <li>
                    Business or company name, when
                    provided
                  </li>

                  <li>Email address</li>

                  <li>WhatsApp contact number</li>

                  <li>
                    The service you are interested in
                  </li>

                  <li>
                    Project details, business
                    requirements and messages
                  </li>
                </ul>

                <p>
                  Basic technical information may
                  also be processed by the website
                  hosting and security systems to
                  deliver the website, prevent misuse
                  and maintain reliable performance.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  2. How We Use Information
                </h2>

                <p>
                  Information submitted through this
                  website may be used for the
                  following purposes:
                </p>

                <ul className="legal-list">
                  <li>
                    Reviewing and responding to
                    project enquiries
                  </li>

                  <li>
                    Understanding your business and
                    digital requirements
                  </li>

                  <li>
                    Communicating about requested
                    services
                  </li>

                  <li>
                    Preparing project discussions,
                    proposals or next steps
                  </li>

                  <li>
                    Preventing spam, fraud and misuse
                    of the website
                  </li>

                  <li>
                    Improving website reliability,
                    usability and security
                  </li>
                </ul>

                <p>
                  We will not use enquiry information
                  for purposes that are unrelated to
                  your communication without an
                  appropriate reason or permission.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  3. Enquiry Form Submissions
                </h2>

                <p>
                  The project enquiry form is
                  intended to help us understand your
                  requested service and contact you
                  regarding that enquiry.
                </p>

                <p>
                  Form submissions may be processed
                  through the website hosting
                  provider and delivered to the
                  official RR RootRise company email
                  account.
                </p>

                <p>
                  Please avoid submitting passwords,
                  payment-card information, private
                  identity documents or other
                  unnecessary sensitive information
                  through the enquiry form.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  4. Email and WhatsApp Communication
                </h2>

                <p>
                  When you contact RR RootRise through
                  email or WhatsApp, the information
                  you provide will be used to
                  understand and respond to your
                  message.
                </p>

                <p>
                  Communication through third-party
                  platforms is also subject to the
                  privacy practices and terms of
                  those platforms.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  5. Sharing of Information
                </h2>

                <p>
                  RR RootRise does not sell or rent
                  personal information submitted
                  through this website.
                </p>

                <p>
                  Information may be processed or
                  shared only when reasonably
                  necessary:
                </p>

                <ul className="legal-list">
                  <li>
                    With service providers supporting
                    website hosting, form delivery,
                    security or communication
                  </li>

                  <li>
                    To comply with an applicable
                    legal requirement
                  </li>

                  <li>
                    To protect the website, users or
                    business from fraud, misuse or
                    security threats
                  </li>

                  <li>
                    With your permission for a
                    specific business purpose
                  </li>
                </ul>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  6. Information Retention
                </h2>

                <p>
                  Enquiry information may be retained
                  for as long as reasonably necessary
                  to respond to the request, continue
                  business communication, maintain
                  project records or meet legitimate
                  legal and operational
                  requirements.
                </p>

                <p>
                  Information that is no longer
                  reasonably required may be deleted
                  or securely removed, subject to
                  applicable obligations.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  7. Data Security
                </h2>

                <p>
                  Reasonable organisational and
                  technical measures are used to
                  protect information from
                  unauthorised access, misuse,
                  alteration or disclosure.
                </p>

                <p>
                  However, no website, internet
                  transmission or electronic storage
                  system can be guaranteed to be
                  completely secure.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  8. Cookies and Technical Storage
                </h2>

                <p>
                  The launch version of this website
                  does not intentionally use
                  advertising or behavioural
                  tracking cookies.
                </p>

                <p>
                  Essential technical storage,
                  security mechanisms or hosting
                  features may still be used when
                  required for website operation and
                  protection.
                </p>

                <p>
                  This policy will be updated before
                  introducing analytics, advertising
                  tracking or other non-essential
                  technologies.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  9. Third-Party Links
                </h2>

                <p>
                  This website may contain links to
                  social-media platforms, WhatsApp
                  and other external websites.
                </p>

                <p>
                  RR RootRise is not responsible for
                  the content, security or privacy
                  practices of third-party websites.
                  Visitors should review the relevant
                  policies before providing
                  information through those services.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  10. Your Choices and Requests
                </h2>

                <p>
                  You may contact RR RootRise to
                  request reasonable assistance
                  regarding personal information you
                  previously submitted through the
                  website.
                </p>

                <p>Depending on the circumstances, you may request:</p>

                <ul className="legal-list">
                  <li>
                    Confirmation of whether your
                    enquiry information is retained
                  </li>

                  <li>
                    Correction of inaccurate
                    information
                  </li>

                  <li>
                    Deletion of information that is no
                    longer reasonably required
                  </li>

                  <li>
                    Withdrawal from further
                    non-essential communication
                  </li>
                </ul>

                <p>
                  Some information may need to be
                  retained when required for
                  legitimate legal, security or
                  business-record purposes.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  11. Children&apos;s Privacy
                </h2>

                <p>
                  RR RootRise provides business and
                  professional digital services. The
                  website is not intentionally
                  designed to collect personal
                  information from children.
                </p>

                <p>
                  A parent or guardian who believes a
                  child has submitted personal
                  information may contact us to
                  request review and appropriate
                  action.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  12. Policy Updates
                </h2>

                <p>
                  This Privacy Policy may be updated
                  when website features, business
                  practices, service providers or
                  applicable requirements change.
                </p>

                <p>
                  The latest version will be
                  published on this page with an
                  updated effective date.
                </p>
              </div>

              <div className="legal-section">
                <h2 className="legal-section-title">
                  13. Contact
                </h2>

                <p>
                  Questions or requests regarding
                  this Privacy Policy may be sent to
                  the official company email.
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

export default Privacy;