import { Link } from "react-router-dom";

import ContactCTA from "../components/ContactCTA";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import SiteIcon from "../components/SiteIcon";

import {
  callToActions,
  industries,
} from "../data/siteData";

/* =========================================================
   INDUSTRY CARD
   ========================================================= */

function IndustryDetailCard({
  industry,
  delay = 0,
}) {
  return (
    <article
      className="industry-detail-card reveal"
      data-reveal-delay={delay}
    >
      <div
        className="industry-detail-icon"
        aria-hidden="true"
      >
        <SiteIcon
          name={industry.icon}
          size={29}
          strokeWidth={1.8}
        />
      </div>

      <div className="industry-detail-content">
        <h3 className="industry-detail-title">
          {industry.title}
        </h3>

        <p className="industry-detail-description">
          {industry.description}
        </p>

        <Link
          to="/contact"
          className="text-link"
          aria-label={`Discuss a digital project for ${industry.title}`}
        >
          <span>
            Discuss Your Requirement
          </span>

          <SiteIcon
            name="arrow-right"
            size={18}
            strokeWidth={2}
          />
        </Link>
      </div>
    </article>
  );
}

/* =========================================================
   INDUSTRIES
   ========================================================= */

function Industries() {
  return (
    <>
      {/* ===================================================
          HERO
          =================================================== */}

      <div className="industries-page-hero">
        <PageHero
          title={
            <>
              Digital solutions shaped around
              different{" "}
              <span className="industries-title-gradient">
                business environments.
              </span>
            </>
          }
          description="Every industry has different customers, workflows and operational challenges. We create clear digital experiences based on those real requirements."
          primaryAction={callToActions.primary}
          secondaryAction={callToActions.services}
        />
      </div>

      {/* ===================================================
          INTRO
          =================================================== */}

      <section
        className="section section-light industries-intro-section"
        aria-labelledby="industries-introduction-title"
      >
        <div className="container">
          <div className="services-page-intro">
            <div className="reveal-left">
              <span className="section-eyebrow">
                Industry-Focused Thinking
              </span>

              <h2
                id="industries-introduction-title"
                className="section-title services-page-intro-title"
              >
                One digital approach does not fit
                every business.
              </h2>
            </div>

            <div className="services-page-intro-content reveal-right">
              <p className="services-page-intro-description">
                A retail business may need product
                discovery and order management,
                while a professional service
                business may need stronger trust,
                enquiries and customer
                communication.
              </p>

              <p className="services-page-intro-description">
                We study the audience, business
                process and digital goals before
                planning the structure, features and
                experience.
              </p>

              <div>
                <Link
                  to="/contact"
                  className="text-link"
                >
                  <span>
                    Tell Us About Your Business
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
        </div>
      </section>

      {/* ===================================================
          INDUSTRY LIST
          =================================================== */}

      <section
        className="section section-soft industries-page-section"
        aria-labelledby="industries-list-title"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Business Sectors"
            title="Supporting organisations across different industries."
            description="Our solutions are planned around each sector's customers, services, operations and future digital requirements."
            align="center"
            titleAs="h2"
          />

          <div className="industries-page-grid">
            {industries.map(
              (industry, index) => (
                <IndustryDetailCard
                  key={industry.id}
                  industry={industry}
                  delay={(index % 2) * 80}
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===================================================
          HOW WE ADAPT
          =================================================== */}

      <section
        className="section section-dark industries-approach-section"
        aria-labelledby="industry-approach-title"
      >
        <div className="container">
          <div className="about-approach-layout">
            <div className="about-approach-content reveal-left">
              <span className="section-eyebrow">
                How We Adapt
              </span>

              <h2
                id="industry-approach-title"
                className="section-title about-approach-title"
              >
                Understanding the business comes
                before choosing the solution.
              </h2>

              <p className="about-approach-description">
                We avoid forcing the same layout or
                features into every project. The
                direction is shaped by the audience,
                services, daily workflows and
                long-term business goals.
              </p>
            </div>

            <div className="about-approach-steps">
              <article className="about-approach-step reveal">
                <div className="about-approach-step-content">
                  <h3 className="about-approach-step-title">
                    Understand the Audience
                  </h3>

                  <p className="about-approach-step-description">
                    We identify who will use the
                    platform, what information they
                    need and what actions they should
                    complete.
                  </p>
                </div>
              </article>

              <article
                className="about-approach-step reveal"
                data-reveal-delay="80"
              >
                <div className="about-approach-step-content">
                  <h3 className="about-approach-step-title">
                    Study the Business Workflow
                  </h3>

                  <p className="about-approach-step-description">
                    We understand enquiries, orders,
                    bookings, customer communication
                    and internal management needs.
                  </p>
                </div>
              </article>

              <article
                className="about-approach-step reveal"
                data-reveal-delay="160"
              >
                <div className="about-approach-step-content">
                  <h3 className="about-approach-step-title">
                    Design the Right Experience
                  </h3>

                  <p className="about-approach-step-description">
                    We organise content, features and
                    interactions around clarity,
                    usability and practical business
                    value.
                  </p>
                </div>
              </article>

              <article
                className="about-approach-step reveal"
                data-reveal-delay="240"
              >
                <div className="about-approach-step-content">
                  <h3 className="about-approach-step-title">
                    Support Future Growth
                  </h3>

                  <p className="about-approach-step-description">
                    The platform is planned with
                    future content, services and
                    functional improvements in mind.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CUSTOM INDUSTRY
          =================================================== */}

      <section
        className="section section-light industries-support-section"
        aria-labelledby="custom-industry-title"
      >
        <div className="container">
          <div className="industries-support-panel reveal-scale">
            <div className="industries-support-content">
              <span className="contact-cta-eyebrow">
                Your Industry Is Not Listed?
              </span>

              <h2
                id="custom-industry-title"
                className="industries-support-title"
              >
                We also create solutions for unique
                business requirements.
              </h2>

              <p className="industries-support-description">
                The industries shown here represent
                common areas we support. A project
                does not need to fit into one fixed
                category. Share your business model
                and requirements with us.
              </p>

              <div>
                <Link
                  to="/contact"
                  className="button button-primary industries-start-button"
                >
                  <span>
                    Start a Project
                  </span>

                  <SiteIcon
                    name="arrow-right"
                    size={18}
                    strokeWidth={2}
                    className="button-icon"
                  />
                </Link>
              </div>
            </div>

            <div
              className="industries-support-visual"
              aria-hidden="true"
            >
              <div className="industries-support-visual-icon">
                <SiteIcon
                  name="business"
                  size={48}
                  strokeWidth={1.7}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTACT CTA
          =================================================== */}

      <div className="industries-contact-cta-wrap">
        <ContactCTA
          eyebrow="Build for Your Business"
          title="Ready to create a solution shaped around your industry?"
          description="Share your business model, audience and current digital challenges. We will help you identify a clear and practical direction."
        />
      </div>

      {/* ===================================================
          INDUSTRIES PAGE STYLES
          =================================================== */}

      <style>{`

        /* ==================================================
           HERO COMPACT
           ================================================== */

        .industries-page-hero
        .page-hero {
          min-height: auto !important;

          padding-top:
            clamp(42px, 4.5vw, 64px) !important;

          padding-bottom:
            clamp(40px, 4vw, 58px) !important;
        }


        .industries-page-hero
        .page-hero-inner {
          gap: 18px !important;
        }


        .industries-page-hero
        .page-hero-eyebrow:empty {
          display: none !important;
        }


        .industries-page-hero
        .page-hero-title {
          max-width: 17ch !important;

          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }


        /* ==================================================
           BUSINESS ENVIRONMENTS GRADIENT
           TEAL -> CYAN
           ================================================== */

        .industries-title-gradient {
          display: inline;

          color: #00CC99;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );

          background-clip: text;
          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }


        .industries-page-hero
        .page-hero-description {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }


        .industries-page-hero
        .page-hero-actions {
          margin-top: 4px !important;
        }


        .industries-page-hero
        .page-hero-accent {
          width:
            clamp(
              16rem,
              28vw,
              25rem
            ) !important;

          right: -4rem !important;
          bottom: -8rem !important;

          opacity: 0.42 !important;
        }


        /* ==================================================
           START A PROJECT
           SAME BOX SHAPE EVERYWHERE
           ================================================== */

        .industries-page-hero
        .button-primary,

        .industries-support-section
        .button-primary,

        .industries-contact-cta-wrap
        .button-primary,

        .industries-start-button {
          min-height: 52px !important;

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
            14px !important;
        }


        /*
          Remove pill behaviour if inherited
        */

        .industries-page-hero
        .button-primary::before,

        .industries-support-section
        .button-primary::before,

        .industries-contact-cta-wrap
        .button-primary::before {
          border-radius:
            10px !important;
        }


        /* ==================================================
           INTRO
           ================================================== */

        .industries-intro-section {
          padding-top: 38px !important;
          padding-bottom: 38px !important;
        }


        .industries-intro-section
        .services-page-intro {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }


        .industries-intro-section
        .services-page-intro-content {
          gap: 12px !important;
        }


        .industries-intro-section
        .services-page-intro-description {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }


        /* ==================================================
           INDUSTRY LIST
           ================================================== */

        .industries-page-section {
          padding-top: 42px !important;
          padding-bottom: 42px !important;
        }


        .industries-page-section
        .section-header-component {
          margin-bottom: 26px !important;
        }


        .industries-page-section
        .industries-page-grid {
          margin-top: 0 !important;
          margin-bottom: 0 !important;

          gap: 14px !important;
        }


        /* ==================================================
           APPROACH
           ================================================== */

        .industries-approach-section {
          padding-top: 44px !important;
          padding-bottom: 44px !important;
        }


        .industries-approach-section
        .about-approach-layout {
          row-gap: 24px !important;
        }


        .industries-approach-section
        .about-approach-steps {
          gap: 10px !important;
        }


        .industries-approach-section
        .about-approach-step {
          grid-template-columns:
            1fr !important;

          column-gap:
            0 !important;
        }


        .industries-approach-section
        .about-approach-step-number {
          display: none !important;
        }


        .industries-approach-section
        .about-approach-step-content {
          width: 100%;
        }


        .industries-approach-section
        .about-approach-step-title {
          margin-top: 0 !important;
        }


        .industries-approach-section
        .about-approach-step-description,

        .industries-approach-section
        .about-approach-description {
          margin-bottom: 0 !important;
        }


        /* ==================================================
           INDUSTRY SUPPORT
           ================================================== */

        .industries-support-section {
          padding-top: 30px !important;
          padding-bottom: 24px !important;
        }


        .industries-support-panel {
          gap:
            clamp(
              28px,
              4vw,
              48px
            ) !important;

          padding:
            clamp(
              28px,
              3vw,
              40px
            ) !important;
        }


        .industries-support-content {
          gap: 14px !important;
        }


        .industries-support-title {
          max-width: 21ch !important;
        }


        .industries-support-description {
          margin-top: 0 !important;
          margin-bottom: 6px !important;
        }


        .industries-support-visual {
          min-height: 12.5rem !important;
        }


        /* ==================================================
           CONTACT CTA
           ================================================== */

        .industries-contact-cta-wrap {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }


        .industries-contact-cta-wrap
        > .section {
          padding-top: 24px !important;
          padding-bottom: 32px !important;
        }


        .industries-contact-cta-wrap
        .contact-cta {
          padding:
            clamp(
              28px,
              3vw,
              40px
            ) !important;
        }


        .industries-contact-cta-wrap
        .contact-cta-inner {
          gap:
            clamp(
              24px,
              3vw,
              42px
            ) !important;
        }


        .industries-contact-cta-wrap
        .contact-cta-content {
          gap: 14px !important;
        }


        /* ==================================================
           TABLET
           ================================================== */

        @media (max-width: 1024px) {

          .industries-page-hero
          .page-hero {
            min-height: auto !important;

            padding-top: 38px !important;
            padding-bottom: 38px !important;
          }


          .industries-intro-section,
          .industries-page-section,
          .industries-approach-section {
            padding-top: 36px !important;
            padding-bottom: 36px !important;
          }


          .industries-support-section {
            padding-top: 26px !important;
            padding-bottom: 20px !important;
          }


          .industries-support-panel {
            gap: 22px !important;
            padding: 28px !important;
          }


          .industries-support-visual {
            min-height: 11rem !important;
          }


          .industries-contact-cta-wrap
          > .section {
            padding-top: 20px !important;
            padding-bottom: 28px !important;
          }
        }


        /* ==================================================
           MOBILE
           ================================================== */

        @media (max-width: 600px) {

          .industries-page-hero
          .page-hero {
            min-height: auto !important;

            padding-top: 30px !important;
            padding-bottom: 32px !important;
          }


          .industries-page-hero
          .page-hero-inner {
            gap: 14px !important;
          }


          .industries-page-hero
          .page-hero-title {
            max-width: none !important;
          }


          .industries-page-hero
          .page-hero-actions {
            margin-top: 2px !important;
          }


          /* same button box shape mobile */

          .industries-page-hero
          .button-primary,

          .industries-support-section
          .button-primary,

          .industries-contact-cta-wrap
          .button-primary,

          .industries-start-button {
            width: 100%;

            min-height: 50px !important;

            padding:
              0 20px !important;

            border-radius:
              10px !important;
          }


          .industries-intro-section,
          .industries-page-section,
          .industries-approach-section {
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }


          .industries-page-section
          .section-header-component {
            margin-bottom: 20px !important;
          }


          .industries-page-section
          .industries-page-grid {
            gap: 10px !important;
          }


          .industries-approach-section
          .about-approach-layout {
            row-gap: 18px !important;
          }


          .industries-approach-section
          .about-approach-steps {
            gap: 8px !important;
          }


          .industries-support-section {
            padding-top: 22px !important;
            padding-bottom: 16px !important;
          }


          .industries-support-panel {
            gap: 18px !important;
            padding: 22px !important;
          }


          .industries-support-content {
            gap: 12px !important;
          }


          .industries-support-title {
            max-width: none !important;
          }


          .industries-support-visual {
            min-height: 9.5rem !important;
          }


          .industries-contact-cta-wrap
          > .section {
            padding-top: 16px !important;
            padding-bottom: 24px !important;
          }


          .industries-contact-cta-wrap
          .contact-cta {
            padding: 22px !important;
          }


          .industries-contact-cta-wrap
          .contact-cta-content {
            gap: 12px !important;
          }
        }

      `}</style>
    </>
  );
}

export default Industries;