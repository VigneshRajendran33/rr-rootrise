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
      {/* ===================================================
          HERO
          =================================================== */}

      <div className="privacy-page-hero">
        <PageHero
          title="Privacy Policy"
          description="This policy explains what information may be collected through the RR RootRise website, how it is used and the choices available to website visitors."
          primaryAction={callToActions.primary}
        />
      </div>

      {/* ===================================================
          PRIVACY POLICY CONTENT
          IMPORTANT:
          NO 'reveal' CLASS ON MAIN ARTICLE
          =================================================== */}

      <section
        className="section legal-page privacy-legal-page"
        aria-labelledby="privacy-policy-title"
      >
        <div className="container-reading">
          <article className="legal-content-card privacy-content-card">
            <div className="legal-content privacy-legal-content">

              {/* =============================================
                  UPDATED DATE
                  ============================================= */}

              <div className="privacy-updated-wrap">
                <span className="legal-updated privacy-updated">
                  <SiteIcon
                    name="privacy"
                    size={18}
                    strokeWidth={1.8}
                  />

                  Last updated: 17 August 2026
                </span>
              </div>

              {/* =============================================
                  INTRODUCTION
                  ============================================= */}

              <section
                className="legal-section"
                aria-labelledby="privacy-policy-title"
              >
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
                  forms, email communication,
                  WhatsApp contact links and
                  information generated through
                  website analytics and technical
                  systems.
                </p>

                <p>
                  By using this website or submitting
                  information through the enquiry
                  form, you acknowledge the practices
                  described in this policy.
                </p>
              </section>

              {/* =============================================
                  INFORMATION
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Information We May Collect
                </h2>

                <p>
                  When you submit a project enquiry,
                  we may collect the information you
                  provide voluntarily.
                </p>

                <ul className="legal-list">
                  <li>
                    Your full name
                  </li>

                  <li>
                    Business or company name, when
                    provided
                  </li>

                  <li>
                    Email address
                  </li>

                  <li>
                    WhatsApp contact number
                  </li>

                  <li>
                    The service you are interested in
                  </li>

                  <li>
                    Project details, business
                    requirements and messages
                  </li>
                </ul>

                <p>
                  The website also uses Google
                  Analytics to understand general
                  website usage and performance.
                  Depending on the analytics
                  configuration and visitor settings,
                  technical and usage information may
                  include:
                </p>

                <ul className="legal-list">
                  <li>
                    Website visits and session
                    statistics
                  </li>

                  <li>
                    Pages viewed and general website
                    interactions
                  </li>

                  <li>
                    Approximate geographic location
                  </li>

                  <li>
                    Browser and device information
                  </li>

                  <li>
                    Technical identifiers used for
                    analytics measurement
                  </li>
                </ul>

                <p>
                  Basic technical information may
                  also be processed by the website
                  hosting, security and analytics
                  systems to deliver the website,
                  prevent misuse and maintain
                  reliable performance.
                </p>
              </section>

              {/* =============================================
                  HOW INFORMATION IS USED
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  How We Use Information
                </h2>

                <p>
                  Information submitted or generated
                  through this website may be used
                  for the following purposes:
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
                    Understanding general website
                    traffic and usage patterns
                  </li>

                  <li>
                    Improving website performance,
                    usability and digital experience
                  </li>

                  <li>
                    Preventing spam, fraud and misuse
                    of the website
                  </li>

                  <li>
                    Maintaining website reliability
                    and security
                  </li>
                </ul>

                <p>
                  We will not use enquiry information
                  for purposes unrelated to your
                  communication without an
                  appropriate reason or permission.
                </p>
              </section>

              {/* =============================================
                  FORM SUBMISSIONS
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Enquiry Form Submissions
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
              </section>

              {/* =============================================
                  EMAIL & WHATSAPP
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Email and WhatsApp Communication
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
              </section>

              {/* =============================================
                  INFORMATION SHARING
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Sharing of Information
                </h2>

                <p>
                  RR RootRise does not sell or rent
                  personal information submitted
                  through this website.
                </p>

                <p>
                  Information may be processed or
                  shared when reasonably necessary:
                </p>

                <ul className="legal-list">
                  <li>
                    With service providers supporting
                    website hosting, form delivery,
                    security or communication
                  </li>

                  <li>
                    With analytics providers such as
                    Google for website measurement,
                    performance analysis and
                    reporting
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
              </section>

              {/* =============================================
                  RETENTION
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Information Retention
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
                  Analytics and technical information
                  may be retained according to the
                  applicable settings and retention
                  periods configured within the
                  analytics and hosting services used
                  by the website.
                </p>

                <p>
                  Information that is no longer
                  reasonably required may be deleted
                  or securely removed, subject to
                  applicable obligations.
                </p>
              </section>

              {/* =============================================
                  SECURITY
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Data Security
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
              </section>

              {/* =============================================
                  COOKIES / ANALYTICS
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Cookies, Analytics and Technical Storage
                </h2>

                <p>
                  This website uses Google Analytics
                  to understand general website
                  usage, visitor activity and website
                  performance.
                </p>

                <p>
                  Google Analytics may process
                  information such as the number of
                  visitors, session statistics,
                  approximate geographic location,
                  browser information and device
                  information.
                </p>

                <p>
                  Where analytics storage is
                  available, Google Analytics may use
                  first-party cookies, including the{" "}
                  <strong>
                    _ga
                  </strong>{" "}
                  cookie, to distinguish users and
                  sessions for measurement purposes.
                </p>

                <p>
                  Technical storage may also be used
                  for website functionality,
                  reliability, fraud prevention,
                  security and other services
                  necessary for website operation.
                </p>

                <p>
                  Where applicable, analytics
                  technologies may operate according
                  to the visitor&apos;s consent
                  choices, browser settings and the
                  configuration of the website&apos;s
                  analytics tools.
                </p>

                <p>
                  Analytics information is used to
                  understand how the website is used
                  and to improve website performance,
                  usability and digital experience.
                </p>
              </section>

              {/* =============================================
                  THIRD PARTY
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Third-Party Links and Services
                </h2>

                <p>
                  This website may contain links to
                  social-media platforms, WhatsApp
                  and other external websites or
                  services.
                </p>

                <p>
                  The website also uses third-party
                  technology providers, including
                  Google Analytics, for website
                  measurement and related technical
                  services.
                </p>

                <p>
                  RR RootRise is not responsible for
                  the content, security or privacy
                  practices of third-party websites.
                  Visitors should review the relevant
                  policies before providing
                  information through those services.
                </p>
              </section>

              {/* =============================================
                  USER CHOICES
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Your Choices and Requests
                </h2>

                <p>
                  You may contact RR RootRise to
                  request reasonable assistance
                  regarding personal information you
                  previously submitted through the
                  website.
                </p>

                <p>
                  Depending on the circumstances, you
                  may request:
                </p>

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
                  Where applicable, visitors may
                  manage analytics or cookie choices
                  through available website consent
                  controls and browser settings.
                </p>

                <p>
                  Some information may need to be
                  retained when required for
                  legitimate legal, security or
                  business-record purposes.
                </p>
              </section>

              {/* =============================================
                  CHILDREN
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Children&apos;s Privacy
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
              </section>

              {/* =============================================
                  POLICY UPDATES
                  ============================================= */}

              <section className="legal-section">
                <h2 className="legal-section-title">
                  Policy Updates
                </h2>

                <p>
                  This Privacy Policy may be updated
                  when website features, analytics
                  technologies, business practices,
                  service providers or applicable
                  requirements change.
                </p>

                <p>
                  The latest version will be
                  published on this page with an
                  updated effective date.
                </p>
              </section>

              {/* =============================================
                  CONTACT
                  ============================================= */}

              <section className="legal-section privacy-contact-section">
                <h2 className="legal-section-title">
                  Contact
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
              </section>

            </div>
          </article>
        </div>
      </section>

      {/* ===================================================
          PRIVACY PAGE STYLES
          =================================================== */}

      <style>{`

        :root {
          --privacy-teal: #00CC99;
          --privacy-cyan: #00FFFF;

          --privacy-gradient:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );
        }


        /* ==================================================
           HERO
           ================================================== */

        .privacy-page-hero
        .page-hero {
          min-height:
            auto !important;

          padding-top:
            42px !important;

          padding-bottom:
            42px !important;
        }


        .privacy-page-hero
        .page-hero-inner {
          gap:
            16px !important;
        }


        .privacy-page-hero
        .page-hero-title {
          max-width:
            900px !important;

          margin:
            0 !important;

          line-height:
            1.05 !important;
        }


        .privacy-page-hero
        .page-hero-description {
          max-width:
            760px !important;

          margin:
            0 !important;
        }


        .privacy-page-hero
        .page-hero-actions {
          margin-top:
            4px !important;
        }


        /* ==================================================
           START PROJECT BUTTON
           BOX SHAPE
           ================================================== */

        .privacy-page-hero
        .button,

        .privacy-page-hero
        .button-primary {
          min-height:
            52px !important;

          padding:
            0 24px !important;

          border-radius:
            10px !important;

          display:
            inline-flex !important;

          align-items:
            center !important;

          justify-content:
            center !important;

          gap:
            12px !important;
        }


        .privacy-page-hero
        .button-primary {
          background:
            var(--privacy-gradient) !important;

          color:
            #02151F !important;
        }


        .privacy-page-hero
        .button::before,

        .privacy-page-hero
        .button::after,

        .privacy-page-hero
        .button-primary::before,

        .privacy-page-hero
        .button-primary::after {
          border-radius:
            10px !important;
        }


        /* ==================================================
           MAIN LEGAL PAGE
           ================================================== */

        .privacy-legal-page {
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


        .privacy-legal-page
        .container-reading {
          display:
            block !important;

          width:
            min(
              100% - 40px,
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
           CRITICAL VISIBILITY FIX

           NO REVEAL / OPACITY ISSUE
           ================================================== */

        .privacy-content-card {
          display:
            block !important;

          position:
            relative !important;

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


        .privacy-content-card *,
        .privacy-legal-content,
        .privacy-legal-content > *,
        .privacy-content-card
        .legal-section {
          visibility:
            visible !important;
        }


        .privacy-legal-content {
          display:
            block !important;

          width:
            100% !important;

          height:
            auto !important;

          min-height:
            0 !important;

          opacity:
            1 !important;

          transform:
            none !important;

          overflow:
            visible !important;
        }


        /* ==================================================
           UPDATED DATE
           ================================================== */

        .privacy-updated-wrap {
          display:
            block;

          margin-bottom:
            24px;
        }


        .privacy-updated {
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

          border-radius:
            8px;

          color:
            #087F75;

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
                0.08
              )
            );
        }


        /* ==================================================
           LEGAL SECTIONS
           ================================================== */

        .privacy-content-card
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
            25px 0 !important;

          opacity:
            1 !important;

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


        .privacy-content-card
        .legal-section:first-of-type {
          padding-top:
            0 !important;

          border-top:
            0 !important;
        }


        .privacy-content-card
        .legal-section:last-child {
          padding-bottom:
            0 !important;
        }


        /* ==================================================
           HEADINGS
           ================================================== */

        .privacy-content-card
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


        .privacy-content-card
        .legal-section-title::before {
          position:
            absolute;

          top:
            0.22em;

          bottom:
            0.22em;

          left:
            0;

          width:
            4px;

          content:
            "";

          border-radius:
            999px;

          background:
            var(--privacy-gradient);
        }


        /* ==================================================
           TEXT
           ================================================== */

        .privacy-content-card
        .legal-section p {
          display:
            block !important;

          margin:
            0 0 12px !important;

          color:
            #516978 !important;

          font-size:
            16px !important;

          font-weight:
            400;

          line-height:
            1.72 !important;

          opacity:
            1 !important;
        }


        .privacy-content-card
        .legal-section p:last-child {
          margin-bottom:
            0 !important;
        }


        .privacy-content-card
        .legal-introduction {
          color:
            #203745 !important;

          font-size:
            17px !important;

          font-weight:
            600 !important;
        }


        .privacy-content-card
        strong {
          color:
            #071725;
        }


        /* ==================================================
           LISTS
           ================================================== */

        .privacy-content-card
        .legal-list {
          display:
            grid !important;

          gap:
            8px !important;

          margin:
            14px 0 !important;

          padding-left:
            23px !important;

          opacity:
            1 !important;
        }


        .privacy-content-card
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


        .privacy-content-card
        .legal-list li::marker {
          color:
            #00BFAE;
        }


        /* ==================================================
           CONTACT BOX
           ================================================== */

        .privacy-contact-section
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
            16px !important;

          padding:
            20px !important;

          border:
            1px solid
            rgba(
              0,
              204,
              153,
              0.16
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

          opacity:
            1 !important;
        }


        .privacy-contact-section
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

          .privacy-page-hero
          .page-hero {
            padding-top:
              36px !important;

            padding-bottom:
              38px !important;
          }


          .privacy-legal-page {
            padding-top:
              24px !important;

            padding-bottom:
              34px !important;
          }


          .privacy-content-card {
            padding:
              28px !important;
          }


          .privacy-content-card
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

          .privacy-page-hero
          .page-hero {
            padding-top:
              30px !important;

            padding-bottom:
              32px !important;
          }


          .privacy-page-hero
          .page-hero-inner {
            gap:
              13px !important;
          }


          .privacy-page-hero
          .button,

          .privacy-page-hero
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


          .privacy-legal-page {
            padding-top:
              18px !important;

            padding-bottom:
              26px !important;
          }


          .privacy-legal-page
          .container-reading {
            width:
              calc(
                100% - 24px
              ) !important;
          }


          .privacy-content-card {
            padding:
              20px !important;

            border-radius:
              14px !important;
          }


          .privacy-updated-wrap {
            margin-bottom:
              19px;
          }


          .privacy-updated {
            font-size:
              12px;
          }


          .privacy-content-card
          .legal-section {
            padding:
              20px 0 !important;
          }


          .privacy-content-card
          .legal-section-title {
            margin-bottom:
              11px !important;

            padding-left:
              15px;

            font-size:
              22px !important;
          }


          .privacy-content-card
          .legal-section-title::before {
            width:
              3px;
          }


          .privacy-content-card
          .legal-section p {
            margin-bottom:
              10px !important;

            font-size:
              15px !important;

            line-height:
              1.67 !important;
          }


          .privacy-content-card
          .legal-introduction {
            font-size:
              15.5px !important;
          }


          .privacy-content-card
          .legal-list {
            gap:
              7px !important;

            margin:
              12px 0 !important;

            padding-left:
              20px !important;
          }


          .privacy-content-card
          .legal-list li {
            font-size:
              14.5px !important;
          }


          .privacy-contact-section
          .legal-contact-box {
            padding:
              17px !important;
          }
        }

      `}</style>
    </>
  );
}

export default Privacy;