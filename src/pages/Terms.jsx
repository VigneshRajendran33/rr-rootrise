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
      {/* ===================================================
          HERO
          =================================================== */}

      <div className="terms-page-hero">
        <PageHero
          title="Terms of Service"
          description="These terms explain the general conditions for using the RR RootRise website, submitting project enquiries and discussing digital services."
          primaryAction={callToActions.primary}
        />
      </div>

      {/* ===================================================
          TERMS CONTENT
          =================================================== */}

      <section
        className="section legal-page terms-legal-page"
        aria-labelledby="terms-title"
      >
        <div className="container-reading">
          <article className="legal-content-card terms-content-card">
            <div className="legal-content terms-legal-content">

              {/* UPDATED */}

              <div className="terms-updated-wrap">
                <span className="legal-updated terms-updated">
                  <SiteIcon
                    name="shield"
                    size={18}
                    strokeWidth={1.8}
                  />

                  Last updated: 17 August 2026
                </span>
              </div>

              {/* INTRODUCTION */}

              <section className="legal-section">
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
              </section>

              {/* WEBSITE PURPOSE */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Website Purpose
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
              </section>

              {/* SERVICE ENQUIRIES */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Service Enquiries
                </h2>

                <p>
                  Visitors may submit enquiries
                  relating to services such as:
                </p>

                <ul className="legal-list">
                  <li>
                    Website development
                  </li>

                  <li>
                    Mobile app development
                  </li>

                  <li>
                    E-commerce solutions
                  </li>

                  <li>
                    Custom web applications
                  </li>

                  <li>
                    WordPress development
                  </li>

                  <li>
                    UI/UX design
                  </li>

                  <li>
                    SEO and digital marketing
                  </li>

                  <li>
                    Maintenance and support
                  </li>
                </ul>

                <p>
                  Enquiry information should be
                  accurate and should provide enough
                  detail for the requested service to
                  be understood.
                </p>
              </section>

              {/* PROJECT DISCUSSIONS */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Project Discussions and Proposals
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
              </section>

              {/* CLIENT RESPONSIBILITIES */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Client Responsibilities
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
              </section>

              {/* INTELLECTUAL PROPERTY */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Content and Intellectual Property
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
              </section>

              {/* PAYMENTS */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Payments and Additional Work
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
              </section>

              {/* REVISIONS */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Revisions and Approvals
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
              </section>

              {/* TIMELINES */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Project Timelines
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
              </section>

              {/* THIRD PARTY SERVICES */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Third-Party Services
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
              </section>

              {/* WEBSITE AVAILABILITY */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Website Availability
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
              </section>

              {/* ACCEPTABLE USE */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Acceptable Use
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
              </section>

              {/* RESULTS */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  No Guaranteed Business Results
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
              </section>

              {/* RESPONSIBILITY */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Limitation of Responsibility
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
              </section>

              {/* TERMINATION */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Suspension or Termination
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
              </section>

              {/* PRIVACY */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Privacy
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
              </section>

              {/* CHANGES */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Changes to These Terms
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
              </section>

              {/* GOVERNING REQUIREMENTS */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Governing Requirements
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
              </section>

              {/* CONTACT */}

              <section className="legal-section terms-contact-section">
                <h2 className="legal-section-title">
                  Contact
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
              </section>

            </div>
          </article>
        </div>
      </section>

      {/* ===================================================
          TERMS PAGE STYLES
          =================================================== */}

      <style>{`

        :root {
          --terms-teal: #00CC99;
          --terms-cyan: #00FFFF;

          --terms-gradient:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );
        }


        /* ==================================================
           HERO
           ================================================== */

        .terms-page-hero
        .page-hero {
          min-height:
            auto !important;

          padding-top:
            clamp(
              38px,
              4vw,
              56px
            ) !important;

          padding-bottom:
            clamp(
              38px,
              4vw,
              52px
            ) !important;
        }


        .terms-page-hero
        .page-hero-inner {
          gap:
            15px !important;
        }


        /*
          Remove any empty/default eyebrow
        */

        .terms-page-hero
        .page-hero-eyebrow:empty {
          display:
            none !important;
        }


        .terms-page-hero
        .page-hero-title {
          max-width:
            900px !important;

          margin:
            0 !important;

          line-height:
            1.04 !important;
        }


        .terms-page-hero
        .page-hero-description {
          max-width:
            780px !important;

          margin:
            0 !important;

          font-size:
            clamp(
              16px,
              1.35vw,
              19px
            ) !important;

          line-height:
            1.65 !important;
        }


        .terms-page-hero
        .page-hero-actions {
          margin-top:
            4px !important;
        }


        /* ==================================================
           START A PROJECT
           SAME BOX SHAPE
           ================================================== */

        .terms-page-hero
        .button,

        .terms-page-hero
        .button-primary {
          display:
            inline-flex !important;

          align-items:
            center !important;

          justify-content:
            center !important;

          min-height:
            52px !important;

          padding:
            0 24px !important;

          gap:
            12px !important;

          border-radius:
            10px !important;
        }


        .terms-page-hero
        .button-primary {
          color:
            #02151F !important;

          background:
            var(--terms-gradient) !important;
        }


        .terms-page-hero
        .button::before,

        .terms-page-hero
        .button::after,

        .terms-page-hero
        .button-primary::before,

        .terms-page-hero
        .button-primary::after {
          border-radius:
            10px !important;
        }


        /* ==================================================
           MAIN PAGE
           ================================================== */

        .terms-legal-page {
          display:
            block !important;

          width:
            100% !important;

          min-height:
            0 !important;

          padding-top:
            28px !important;

          padding-bottom:
            42px !important;

          overflow:
            visible !important;
        }


        .terms-legal-page
        .container-reading {
          display:
            block !important;

          width:
            min(
              calc(100% - 40px),
              1080px
            ) !important;

          height:
            auto !important;

          min-height:
            0 !important;

          margin:
            0 auto !important;

          overflow:
            visible !important;
        }


        /* ==================================================
           MAIN CARD
           NO REVEAL / HIDDEN ISSUE
           ================================================== */

        .terms-content-card {
          display:
            block !important;

          position:
            relative;

          width:
            100% !important;

          height:
            auto !important;

          min-height:
            0 !important;

          margin:
            0 !important;

          padding:
            clamp(
              26px,
              3vw,
              38px
            ) !important;

          overflow:
            visible !important;

          opacity:
            1 !important;

          visibility:
            visible !important;

          transform:
            none !important;

          border-radius:
            18px !important;
        }


        .terms-legal-content {
          display:
            block !important;

          width:
            100% !important;

          height:
            auto !important;

          min-height:
            0 !important;

          overflow:
            visible !important;

          opacity:
            1 !important;

          visibility:
            visible !important;

          transform:
            none !important;
        }


        .terms-content-card *,
        .terms-legal-content *,
        .terms-content-card
        .legal-section {
          visibility:
            visible !important;
        }


        /* ==================================================
           UPDATED DATE
           ================================================== */

        .terms-updated-wrap {
          display:
            block;

          margin:
            0 0 23px;
        }


        .terms-updated {
          display:
            inline-flex !important;

          align-items:
            center;

          gap:
            9px;

          margin:
            0 !important;

          padding:
            8px 12px;

          color:
            #087F75 !important;

          border:
            1px solid
            rgba(
              0,
              204,
              153,
              0.12
            );

          border-radius:
            8px !important;

          background:
            linear-gradient(
              90deg,
              rgba(
                0,
                204,
                153,
                0.10
              ),
              rgba(
                0,
                255,
                255,
                0.07
              )
            );
        }


        /* ==================================================
           SECTIONS
           ================================================== */

        .terms-content-card
        .legal-section {
          display:
            block !important;

          position:
            relative;

          width:
            100%;

          height:
            auto !important;

          min-height:
            0 !important;

          margin:
            0 !important;

          padding:
            24px 0 !important;

          opacity:
            1 !important;

          visibility:
            visible !important;

          transform:
            none !important;

          border-top:
            1px solid
            rgba(
              72,
              101,
              118,
              0.13
            );
        }


        .terms-content-card
        .legal-section:first-of-type {
          padding-top:
            0 !important;

          border-top:
            0 !important;
        }


        .terms-content-card
        .legal-section:last-child {
          padding-bottom:
            0 !important;
        }


        /* ==================================================
           HEADINGS
           NO NUMBERS
           ================================================== */

        .terms-content-card
        .legal-section-title {
          position:
            relative;

          margin:
            0 0 13px !important;

          padding-left:
            18px;

          color:
            #071725 !important;

          font-size:
            clamp(
              23px,
              2vw,
              30px
            ) !important;

          font-weight:
            700 !important;

          line-height:
            1.2 !important;

          letter-spacing:
            -0.025em;

          opacity:
            1 !important;
        }


        /*
          Teal + Cyan replaces
          decorative numbering
        */

        .terms-content-card
        .legal-section-title::before {
          position:
            absolute;

          top:
            0.23em;

          bottom:
            0.23em;

          left:
            0;

          width:
            4px;

          content:
            "";

          border-radius:
            999px;

          background:
            var(--terms-gradient);
        }


        /* ==================================================
           CONTENT
           ================================================== */

        .terms-content-card
        .legal-section p {
          display:
            block !important;

          margin:
            0 0 11px !important;

          color:
            #516978 !important;

          font-size:
            16px !important;

          font-weight:
            400;

          line-height:
            1.7 !important;

          opacity:
            1 !important;
        }


        .terms-content-card
        .legal-section p:last-child {
          margin-bottom:
            0 !important;
        }


        .terms-content-card
        .legal-introduction {
          color:
            #203745 !important;

          font-size:
            17px !important;

          font-weight:
            600 !important;
        }


        .terms-content-card
        strong {
          color:
            #071725;
        }


        /* ==================================================
           LISTS
           ================================================== */

        .terms-content-card
        .legal-list {
          display:
            grid !important;

          gap:
            8px !important;

          margin:
            13px 0 !important;

          padding-left:
            23px !important;

          opacity:
            1 !important;
        }


        .terms-content-card
        .legal-list li {
          display:
            list-item !important;

          margin:
            0 !important;

          padding-left:
            3px;

          color:
            #516978 !important;

          font-size:
            15.5px !important;

          line-height:
            1.62 !important;

          opacity:
            1 !important;
        }


        .terms-content-card
        .legal-list li::marker {
          color:
            #00BFAE;
        }


        /* ==================================================
           LINKS
           ================================================== */

        .terms-content-card
        .inline-link {
          color:
            #008F82 !important;

          font-weight:
            650;
        }


        .terms-content-card
        .inline-link:hover {
          color:
            #00AFA9 !important;
        }


        /* ==================================================
           CONTACT
           ================================================== */

        .terms-contact-section
        .legal-contact-box {
          display:
            flex !important;

          flex-direction:
            column;

          align-items:
            flex-start;

          gap:
            9px !important;

          margin-top:
            15px !important;

          padding:
            20px !important;

          opacity:
            1 !important;

          border:
            1px solid
            rgba(
              0,
              204,
              153,
              0.15
            );

          border-radius:
            12px !important;

          background:
            linear-gradient(
              120deg,
              rgba(
                0,
                204,
                153,
                0.07
              ),
              rgba(
                0,
                255,
                255,
                0.05
              )
            );
        }


        .terms-contact-section
        .legal-contact-box strong {
          font-size:
            17px;
        }


        /* ==================================================
           TABLET
           ================================================== */

        @media (
          max-width: 900px
        ) {

          .terms-page-hero
          .page-hero {
            padding-top:
              36px !important;

            padding-bottom:
              38px !important;
          }


          .terms-legal-page {
            padding-top:
              24px !important;

            padding-bottom:
              34px !important;
          }


          .terms-content-card {
            padding:
              28px !important;
          }


          .terms-content-card
          .legal-section {
            padding:
              22px 0 !important;
          }
        }


        /* ==================================================
           MOBILE
           ================================================== */

        @media (
          max-width: 600px
        ) {

          .terms-page-hero
          .page-hero {
            padding-top:
              30px !important;

            padding-bottom:
              32px !important;
          }


          .terms-page-hero
          .page-hero-inner {
            gap:
              13px !important;
          }


          .terms-page-hero
          .page-hero-description {
            font-size:
              15px !important;

            line-height:
              1.62 !important;
          }


          .terms-page-hero
          .button,

          .terms-page-hero
          .button-primary {
            width:
              100% !important;

            min-height:
              50px !important;

            padding:
              0 20px !important;

            border-radius:
              10px !important;
          }


          .terms-legal-page {
            padding-top:
              18px !important;

            padding-bottom:
              26px !important;
          }


          .terms-legal-page
          .container-reading {
            width:
              calc(
                100% - 24px
              ) !important;
          }


          .terms-content-card {
            padding:
              20px !important;

            border-radius:
              14px !important;
          }


          .terms-updated-wrap {
            margin-bottom:
              19px;
          }


          .terms-updated {
            font-size:
              12px;
          }


          .terms-content-card
          .legal-section {
            padding:
              20px 0 !important;
          }


          .terms-content-card
          .legal-section-title {
            margin-bottom:
              11px !important;

            padding-left:
              15px;

            font-size:
              22px !important;
          }


          .terms-content-card
          .legal-section-title::before {
            width:
              3px;
          }


          .terms-content-card
          .legal-section p {
            margin-bottom:
              10px !important;

            font-size:
              15px !important;

            line-height:
              1.67 !important;
          }


          .terms-content-card
          .legal-introduction {
            font-size:
              15.5px !important;
          }


          .terms-content-card
          .legal-list {
            gap:
              7px !important;

            margin:
              12px 0 !important;

            padding-left:
              20px !important;
          }


          .terms-content-card
          .legal-list li {
            font-size:
              14.5px !important;
          }


          .terms-contact-section
          .legal-contact-box {
            padding:
              17px !important;
          }
        }

      `}</style>
    </>
  );
}

export default Terms;