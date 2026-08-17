import { Link } from "react-router-dom";

import ContactCTA from "../components/ContactCTA";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import SiteIcon from "../components/SiteIcon";

import {
  callToActions,
  company,
  companyPrinciples,
  processSteps,
} from "../data/siteData";

function About() {
  return (
    <>
      {/* ===================================================
          HERO
          =================================================== */}

      <div className="about-page-hero">
        <PageHero
          title={
            <>
              <span className="about-hero-line">
                Building strong digital
              </span>

              <span className="about-hero-line">
                foundations for meaningful
              </span>

              <span className="about-hero-line">
                <span className="about-hero-gradient">
                  business growth.
                </span>
              </span>
            </>
          }
          description="RR RootRise Digital Innovations creates professional digital solutions through clear strategy, thoughtful design, reliable development and continued support."
          primaryAction={callToActions.primary}
          secondaryAction={callToActions.services}
        />
      </div>

      {/* ===================================================
          WHO WE ARE
          =================================================== */}

      <section
        className="section section-light about-introduction-section"
        aria-labelledby="about-introduction-title"
      >
        <div className="container">
          <div className="about-introduction-layout">
            <div className="about-introduction-heading reveal-left">
              <span className="section-eyebrow">
                Who We Are
              </span>

              <h2
                id="about-introduction-title"
                className="section-title about-introduction-title"
              >
                A digital solutions company focused
                on clarity, reliability and business
                value.
              </h2>
            </div>

            <div className="about-introduction-content reveal-right">
              <p className="about-introduction-lead">
                RR RootRise helps businesses create
                professional digital experiences
                that are clear, useful and ready for
                future growth.
              </p>

              <p className="about-introduction-text">
                {company.description}
              </p>

              <p className="about-introduction-text">
                Every project begins by understanding
                the business, its audience, current
                challenges and long-term goals. This
                allows us to recommend and create
                digital solutions based on real
                requirements rather than unnecessary
                complexity.
              </p>

              <p className="about-introduction-text">
                Our approach combines strategy,
                design, development, digital growth
                and continued support through one
                clear working process.
              </p>

              <div>
                <Link
                  to="/contact"
                  className="text-link"
                >
                  <span>
                    Discuss Your Project
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
          MISSION & VISION
          =================================================== */}

      <section
        className="section section-soft about-purpose-section"
        aria-labelledby="purpose-title"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Our Purpose"
            title="A clear mission and a long-term vision."
            description="Our direction is shaped by the value we want to create for businesses through responsible digital work."
            align="center"
            titleAs="h2"
          />

          <div
            id="purpose-title"
            className="about-purpose-grid"
          >
            {/* MISSION */}

            <article className="about-purpose-card about-purpose-card-mission reveal-left">
              <div className="about-purpose-heading-row">
                <div
                  className="about-purpose-icon"
                  aria-hidden="true"
                >
                  <SiteIcon
                    name="strategy"
                    size={28}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="about-purpose-heading-copy">
                  <span className="about-purpose-label">
                    Our Mission
                  </span>

                  <h3 className="about-purpose-title">
                    Create clear and growth-ready
                    digital experiences.
                  </h3>
                </div>
              </div>

              <p className="about-purpose-description">
                {company.mission}
              </p>
            </article>

            {/* VISION */}

            <article className="about-purpose-card about-purpose-card-vision reveal-right">
              <div className="about-purpose-heading-row">
                <div
                  className="about-purpose-icon"
                  aria-hidden="true"
                >
                  <SiteIcon
                    name="globe"
                    size={28}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="about-purpose-heading-copy">
                  <span className="about-purpose-label">
                    Our Vision
                  </span>

                  <h3 className="about-purpose-title">
                    Become a trusted long-term digital
                    partner.
                  </h3>
                </div>
              </div>

              <p className="about-purpose-description">
                {company.vision}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================
          PRINCIPLES
          =================================================== */}

      <section
        className="section section-light about-principles-section"
        aria-labelledby="principles-title"
      >
        <div className="container">
          <SectionHeader
            eyebrow="What Guides Us"
            title="Principles that shape every project."
            description="These principles guide how we communicate, make decisions and create digital solutions."
            align="center"
            titleAs="h2"
          />

          <div
            id="principles-title"
            className="company-principles-grid"
          >
            {companyPrinciples.map(
              (principle, index) => (
                <article
                  key={principle.title}
                  className="company-principle-card reveal"
                  data-reveal-delay={index * 70}
                >
                  <h3 className="company-principle-title">
                    {principle.title}
                  </h3>

                  <p className="company-principle-description">
                    {principle.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===================================================
          WORKING APPROACH
          =================================================== */}

      <section
        className="section section-dark about-working-section"
        aria-labelledby="about-approach-title"
      >
        <div className="container">
          <div className="about-approach-layout">
            <div className="about-approach-content reveal-left">
              <span className="section-eyebrow">
                Our Working Approach
              </span>

              <h2
                id="about-approach-title"
                className="section-title about-approach-title"
              >
                A structured process keeps every
                project clear and focused.
              </h2>

              <p className="about-approach-description">
                We organise each project into clear
                stages so that requirements,
                decisions and progress remain
                understandable from the first
                discussion through launch and future
                support.
              </p>

              <div>
                <Link
                  to="/services"
                  className="button button-dark-outline"
                >
                  <span>
                    Explore Our Services
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

            <div className="about-approach-steps">
              {processSteps.map(
                (step, index) => (
                  <article
                    key={step.id}
                    className="about-approach-step reveal"
                    data-reveal-delay={index * 70}
                  >
                    <div className="about-approach-step-content">
                      <h3 className="about-approach-step-title">
                        {step.title}
                      </h3>

                      <p className="about-approach-step-description">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          COMMITMENT
          =================================================== */}

      <section
        className="section section-light about-commitment-section"
        aria-labelledby="company-commitment-title"
      >
        <div className="container">
          <div className="industries-support-panel reveal-scale">
            <div className="industries-support-content">
              <span className="contact-cta-eyebrow">
                Our Commitment
              </span>

              <h2
                id="company-commitment-title"
                className="industries-support-title"
              >
                Digital work should remain useful
                beyond the launch.
              </h2>

              <p className="industries-support-description">
                We focus on clear communication,
                responsive experiences, practical
                functionality and continued support
                so each solution can evolve alongside
                the business.
              </p>

              <div>
                <Link
                  to="/contact"
                  className="button button-primary about-start-button"
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
                  name="shield"
                  size={48}
                  strokeWidth={1.7}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FINAL CTA
          =================================================== */}

      <div className="about-contact-cta-wrap">
        <ContactCTA
          eyebrow="Work With RR RootRise"
          title="Ready to create a strong digital foundation for your business?"
          description="Share your business goals and digital requirements with us. We will help you identify a clear and practical project direction."
        />
      </div>

      <style>{`

        /* ==================================================
           RR ROOTRISE BRAND
           ================================================== */

        :root {
          --about-teal: #00CC99;
          --about-cyan: #00FFFF;

          --about-gradient:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );
        }


        /* ==================================================
           HERO
           ================================================== */

        .about-page-hero
        .page-hero {
          min-height:
            auto !important;

          padding-top:
            clamp(
              42px,
              4.5vw,
              64px
            ) !important;

          padding-bottom:
            clamp(
              40px,
              4vw,
              58px
            ) !important;
        }


        .about-page-hero
        .page-hero-inner {
          gap:
            18px !important;
        }


        .about-page-hero
        .page-hero-eyebrow:empty {
          display:
            none !important;
        }


        /* ==================================================
           HERO EXACT THREE LINES
           ================================================== */

        .about-page-hero
        .page-hero-title {
          width:
            100% !important;

          max-width:
            1080px !important;

          margin:
            0 !important;

          line-height:
            1.07 !important;

          overflow:
            visible !important;
        }


        .about-hero-line {
          display:
            block;

          width:
            100%;
        }


        /*
          FIX:
          descender on "g" was clipping.
        */

        .about-hero-gradient {
          display:
            inline-block;

          position:
            relative;

          padding-bottom:
            0.09em;

          margin-bottom:
            -0.09em;

          color:
            transparent;

          line-height:
            1.12;

          background:
            var(--about-gradient);

          -webkit-background-clip:
            text;

          background-clip:
            text;

          -webkit-text-fill-color:
            transparent;

          overflow:
            visible;

          text-decoration:
            none;
        }


        .about-page-hero
        .page-hero-description {
          margin-top:
            0 !important;

          margin-bottom:
            0 !important;
        }


        .about-page-hero
        .page-hero-actions {
          margin-top:
            4px !important;
        }


        .about-page-hero
        .page-hero-accent {
          width:
            clamp(
              16rem,
              28vw,
              25rem
            ) !important;

          right:
            -4rem !important;

          bottom:
            -8rem !important;

          opacity:
            0.42 !important;
        }


        /* ==================================================
           START A PROJECT
           PROFESSIONAL BOX
           ================================================== */

        .about-page-hero
        .button-primary,

        .about-commitment-section
        .button-primary,

        .about-contact-cta-wrap
        .button-primary,

        .about-start-button {
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
            14px !important;
        }


        .about-page-hero
        .button-primary::before,

        .about-page-hero
        .button-primary::after,

        .about-commitment-section
        .button-primary::before,

        .about-commitment-section
        .button-primary::after,

        .about-contact-cta-wrap
        .button-primary::before,

        .about-contact-cta-wrap
        .button-primary::after {
          border-radius:
            10px !important;
        }


        /* ==================================================
           WHO WE ARE
           ================================================== */

        .about-introduction-section {
          padding-top:
            40px !important;

          padding-bottom:
            40px !important;
        }


        .about-introduction-section
        .about-introduction-layout {
          margin:
            0 !important;

          row-gap:
            28px !important;
        }


        .about-introduction-section
        .about-introduction-heading {
          margin:
            0 !important;
        }


        .about-introduction-section
        .about-introduction-content {
          gap:
            12px !important;
        }


        .about-introduction-section
        .about-introduction-lead,

        .about-introduction-section
        .about-introduction-text {
          margin-top:
            0 !important;

          margin-bottom:
            0 !important;
        }


        /* ==================================================
           PURPOSE
           ================================================== */

        .about-purpose-section {
          padding-top:
            42px !important;

          padding-bottom:
            42px !important;
        }


        .about-purpose-section
        .about-purpose-grid {
          display:
            grid !important;

          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            ) !important;

          align-items:
            stretch !important;

          margin-top:
            26px !important;

          margin-bottom:
            0 !important;

          gap:
            14px !important;
        }


        /* ==================================================
           MISSION / VISION CARD
           ================================================== */

        .about-purpose-section
        .about-purpose-card {
          display:
            flex !important;

          flex-direction:
            column !important;

          justify-content:
            flex-start !important;

          min-height:
            100% !important;

          height:
            100% !important;

          padding:
            clamp(
              26px,
              2.5vw,
              34px
            ) !important;
        }


        /*
          ICON NOW NEXT TO
          MISSION / VISION CONTENT
        */

        .about-purpose-heading-row {
          display:
            grid;

          grid-template-columns:
            58px
            minmax(0, 1fr);

          align-items:
            start;

          gap:
            18px;

          width:
            100%;
        }


        .about-purpose-heading-copy {
          display:
            flex;

          flex-direction:
            column;

          align-items:
            flex-start;

          min-width:
            0;

          gap:
            11px;
        }


        .about-purpose-section
        .about-purpose-icon {
          display:
            grid !important;

          place-items:
            center !important;

          width:
            58px !important;

          height:
            58px !important;

          min-width:
            58px !important;

          margin:
            0 !important;

          border-radius:
            12px !important;

          background:
            var(--about-gradient) !important;
        }


        .about-purpose-section
        .about-purpose-label {
          display:
            block;

          margin:
            2px 0 0 !important;
        }


        .about-purpose-section
        .about-purpose-title {
          margin:
            0 !important;

          max-width:
            none !important;

          line-height:
            1.15 !important;
        }


        /*
          DESCRIPTION ALIGNS WITH TITLE,
          NOT UNDER ICON.
        */

        .about-purpose-section
        .about-purpose-description {
          margin:
            18px 0 0 76px !important;

          max-width:
            calc(
              100% - 76px
            ) !important;

          line-height:
            1.62 !important;
        }


        /* ==================================================
           PRINCIPLES
           ================================================== */

        .about-principles-section {
          padding-top:
            42px !important;

          padding-bottom:
            42px !important;
        }


        /*
          WIDE DESKTOP:
          ALL SIX SAME ROW
        */

        .about-principles-section
        .company-principles-grid {
          display:
            grid !important;

          grid-template-columns:
            repeat(
              6,
              minmax(0, 1fr)
            ) !important;

          align-items:
            stretch !important;

          margin-top:
            26px !important;

          margin-bottom:
            0 !important;

          gap:
            12px !important;
        }


        .about-principles-section
        .company-principle-card {
          display:
            flex !important;

          flex-direction:
            column !important;

          min-width:
            0 !important;

          min-height:
            180px !important;

          height:
            100% !important;

          padding:
            22px 18px !important;

          grid-template-columns:
            1fr !important;

          column-gap:
            0 !important;
        }


        .about-principles-section
        .company-principle-number {
          display:
            none !important;
        }


        .about-principles-section
        .company-principle-title {
          margin:
            0 0 12px !important;

          font-size:
            clamp(
              16px,
              1.15vw,
              19px
            ) !important;

          line-height:
            1.3 !important;
        }


        .about-principles-section
        .company-principle-description {
          margin:
            0 !important;

          font-size:
            14px !important;

          line-height:
            1.6 !important;
        }


        /* ==================================================
           WORKING APPROACH
           ================================================== */

        .about-working-section {
          padding-top:
            44px !important;

          padding-bottom:
            44px !important;
        }


        .about-working-section
        .about-approach-layout {
          row-gap:
            26px !important;
        }


        .about-working-section
        .about-approach-content {
          gap:
            14px !important;
        }


        .about-working-section
        .about-approach-description {
          margin-bottom:
            4px !important;
        }


        .about-working-section
        .about-approach-steps {
          gap:
            10px !important;
        }


        .about-working-section
        .about-approach-step {
          grid-template-columns:
            1fr !important;

          column-gap:
            0 !important;

          min-height:
            auto !important;
        }


        .about-working-section
        .about-approach-step-number {
          display:
            none !important;
        }


        .about-working-section
        .about-approach-step-content {
          width:
            100% !important;

          gap:
            7px !important;
        }


        .about-working-section
        .about-approach-step-title {
          margin:
            0 !important;
        }


        .about-working-section
        .about-approach-step-description {
          margin:
            0 !important;
        }


        /* ==================================================
           COMMITMENT
           ================================================== */

        .about-commitment-section {
          padding-top:
            30px !important;

          padding-bottom:
            24px !important;
        }


        .about-commitment-section
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

          margin:
            0 !important;
        }


        .about-commitment-section
        .industries-support-content {
          gap:
            14px !important;
        }


        .about-commitment-section
        .industries-support-title {
          max-width:
            21ch !important;
        }


        .about-commitment-section
        .industries-support-description {
          margin:
            0 0 6px !important;
        }


        .about-commitment-section
        .industries-support-visual {
          min-height:
            12rem !important;
        }


        /* ==================================================
           FINAL CTA
           ================================================== */

        .about-contact-cta-wrap {
          margin-top:
            0 !important;

          padding-top:
            0 !important;
        }


        .about-contact-cta-wrap
        > .section {
          padding-top:
            24px !important;

          padding-bottom:
            32px !important;
        }


        .about-contact-cta-wrap
        .contact-cta {
          padding:
            clamp(
              28px,
              3vw,
              40px
            ) !important;
        }


        .about-contact-cta-wrap
        .contact-cta-inner {
          gap:
            clamp(
              24px,
              3vw,
              42px
            ) !important;
        }


        .about-contact-cta-wrap
        .contact-cta-content {
          gap:
            14px !important;
        }


        /* ==================================================
           RESPONSIVE PRINCIPLES
           ================================================== */

        @media (
          max-width: 1200px
        ) {

          .about-principles-section
          .company-principles-grid {
            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              ) !important;
          }
        }


        /* ==================================================
           TABLET
           ================================================== */

        @media (
          max-width: 1024px
        ) {

          .about-page-hero
          .page-hero {
            padding-top:
              38px !important;

            padding-bottom:
              38px !important;
          }


          .about-introduction-section,
          .about-purpose-section,
          .about-principles-section,
          .about-working-section {
            padding-top:
              36px !important;

            padding-bottom:
              36px !important;
          }


          .about-purpose-section
          .about-purpose-grid {
            gap:
              12px !important;
          }


          .about-purpose-heading-row {
            grid-template-columns:
              52px minmax(0, 1fr);

            gap:
              14px;
          }


          .about-purpose-section
          .about-purpose-icon {
            width:
              52px !important;

            height:
              52px !important;

            min-width:
              52px !important;
          }


          .about-purpose-section
          .about-purpose-description {
            margin-left:
              66px !important;

            max-width:
              calc(
                100% - 66px
              ) !important;
          }


          .about-working-section
          .about-approach-layout {
            row-gap:
              22px !important;
          }


          .about-commitment-section {
            padding-top:
              26px !important;

            padding-bottom:
              20px !important;
          }


          .about-contact-cta-wrap
          > .section {
            padding-top:
              20px !important;

            padding-bottom:
              28px !important;
          }
        }


        /* ==================================================
           SMALL TABLET
           ================================================== */

        @media (
          max-width: 760px
        ) {

          .about-purpose-section
          .about-purpose-grid {
            grid-template-columns:
              1fr !important;
          }


          .about-principles-section
          .company-principles-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              ) !important;
          }
        }


        /* ==================================================
           MOBILE
           ================================================== */

        @media (
          max-width: 600px
        ) {

          .about-page-hero
          .page-hero {
            padding-top:
              30px !important;

            padding-bottom:
              32px !important;
          }


          .about-page-hero
          .page-hero-inner {
            gap:
              14px !important;
          }


          /*
            Mobile can wrap naturally.
          */

          .about-hero-line {
            display:
              inline;
          }


          .about-hero-line::after {
            content:
              " ";
          }


          .about-hero-gradient {
            display:
              inline;

            padding-bottom:
              0.08em;

            margin-bottom:
              -0.08em;
          }


          .about-page-hero
          .button-primary,

          .about-commitment-section
          .button-primary,

          .about-contact-cta-wrap
          .button-primary,

          .about-start-button {
            width:
              100% !important;

            min-height:
              50px !important;

            padding:
              0 20px !important;

            border-radius:
              10px !important;
          }


          .about-introduction-section,
          .about-purpose-section,
          .about-principles-section,
          .about-working-section {
            padding-top:
              30px !important;

            padding-bottom:
              30px !important;
          }


          /* MISSION / VISION MOBILE */

          .about-purpose-heading-row {
            grid-template-columns:
              46px minmax(0, 1fr);

            gap:
              12px;
          }


          .about-purpose-section
          .about-purpose-icon {
            width:
              46px !important;

            height:
              46px !important;

            min-width:
              46px !important;

            border-radius:
              10px !important;
          }


          .about-purpose-section
          .about-purpose-title {
            font-size:
              clamp(
                24px,
                7vw,
                31px
              ) !important;
          }


          .about-purpose-section
          .about-purpose-description {
            margin:
              15px 0 0 !important;

            max-width:
              none !important;
          }


          .about-principles-section
          .company-principles-grid {
            grid-template-columns:
              1fr !important;

            gap:
              10px !important;
          }


          .about-principles-section
          .company-principle-card {
            min-height:
              auto !important;

            padding:
              20px !important;
          }


          .about-working-section
          .about-approach-layout {
            row-gap:
              18px !important;
          }


          .about-working-section
          .about-approach-steps {
            gap:
              8px !important;
          }


          .about-commitment-section {
            padding-top:
              22px !important;

            padding-bottom:
              16px !important;
          }


          .about-commitment-section
          .industries-support-panel {
            gap:
              18px !important;

            padding:
              22px !important;
          }


          .about-commitment-section
          .industries-support-visual {
            min-height:
              9.5rem !important;
          }


          .about-contact-cta-wrap
          > .section {
            padding-top:
              16px !important;

            padding-bottom:
              24px !important;
          }


          .about-contact-cta-wrap
          .contact-cta {
            padding:
              22px !important;
          }
        }

      `}</style>
    </>
  );
}

export default About;