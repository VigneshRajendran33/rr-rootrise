import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import SiteIcon from "../components/SiteIcon";

import {
  callToActions,
  company,
  socialLinks,
} from "../data/siteData";

function Contact() {
  return (
    <>
      {/* ===================================================
          HERO
          =================================================== */}

      <div className="contact-page-hero">
        <PageHero
          title={
            <>
              <span className="contact-hero-line">
                Tell us what your
              </span>

              <span className="contact-hero-line contact-hero-gradient">
                business needs next.
              </span>
            </>
          }
          description="Share your project idea, business requirement or current digital challenge. We will review the information and respond through email."
          primaryAction={
            callToActions.secondary
          }
          secondaryAction={
            callToActions.whatsapp
          }
        />
      </div>

      {/* ===================================================
          MAIN
          =================================================== */}

      <section
        className="section section-soft contact-main-section"
        aria-labelledby="contact-section-title"
      >
        <div className="container">
          <div className="contact-page-layout">

            {/* ===============================================
                CONTACT INFO
                =============================================== */}

            <aside className="contact-page-info reveal-left">
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <span className="section-eyebrow">
                    Contact RR RootRise
                  </span>

                  <h2
                    id="contact-section-title"
                    className="contact-info-title"
                  >
                    Let&apos;s discuss your
                    digital requirement.
                  </h2>

                  <p className="contact-info-description">
                    Contact us through email,
                    WhatsApp or the project
                    enquiry form. Share enough
                    information for us to
                    understand your business
                    and required solution.
                  </p>
                </div>

                <div className="contact-info-list">

                  {/* EMAIL */}

                  <div className="contact-info-item">
                    <div
                      className="contact-info-icon"
                      aria-hidden="true"
                    >
                      <SiteIcon
                        name="mail"
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="contact-info-content">
                      <span className="contact-info-label">
                        Company Email
                      </span>

                      <a
                        href={
                          company.emailHref
                        }
                        className="contact-info-value"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  {/* WHATSAPP */}

                  <div className="contact-info-item">
                    <div
                      className="contact-info-icon"
                      aria-hidden="true"
                    >
                      <SiteIcon
                        name="whatsapp"
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="contact-info-content">
                      <span className="contact-info-label">
                        WhatsApp
                      </span>

                      <a
                        href={
                          company.whatsappHref
                        }
                        className="contact-info-value"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* LOCATION */}

                  <div className="contact-info-item">
                    <div
                      className="contact-info-icon"
                      aria-hidden="true"
                    >
                      <SiteIcon
                        name="location"
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="contact-info-content">
                      <span className="contact-info-label">
                        Location
                      </span>

                      <address className="contact-info-value">
                        {
                          company.location
                        }
                      </address>
                    </div>
                  </div>

                  {/* AREA */}

                  <div className="contact-info-item">
                    <div
                      className="contact-info-icon"
                      aria-hidden="true"
                    >
                      <SiteIcon
                        name="globe"
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="contact-info-content">
                      <span className="contact-info-label">
                        Service Area
                      </span>

                      <span className="contact-info-value">
                        India &amp; Worldwide
                      </span>
                    </div>
                  </div>
                </div>

                {/* SOCIAL */}

                <div className="contact-social-area">
                  <h3 className="contact-page-social-title">
                    Connect With Us
                  </h3>

                  <div
                    className="social-links"
                    aria-label="RR RootRise social media links"
                  >
                    {socialLinks.map(
                      (social) => (
                        <a
                          key={social.id}
                          href={
                            social.href
                          }
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit RR RootRise on ${social.label}`}
                          title={
                            social.label
                          }
                        >
                          <SiteIcon
                            name={
                              social.id
                            }
                            size={21}
                            strokeWidth={
                              1.8
                            }
                          />
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </aside>

            {/* ===============================================
                PROJECT FORM
                =============================================== */}

            <div className="contact-form-column reveal-right">
              <ContactForm />
            </div>
          </div>

          {/* =================================================
              SUPPORT
              ================================================= */}

          <div className="contact-page-support">

            <article className="contact-support-card reveal">
              <div className="contact-support-heading">
                <div
                  className="contact-support-icon"
                  aria-hidden="true"
                >
                  <SiteIcon
                    name="message"
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="contact-support-title">
                  Share Your Requirement
                </h3>
              </div>

              <p className="contact-support-description">
                Explain your business,
                project idea, required
                service and current digital
                challenge clearly.
              </p>
            </article>

            <article
              className="contact-support-card reveal"
              data-reveal-delay="80"
            >
              <div className="contact-support-heading">
                <div
                  className="contact-support-icon"
                  aria-hidden="true"
                >
                  <SiteIcon
                    name="strategy"
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="contact-support-title">
                  Requirement Review
                </h3>
              </div>

              <p className="contact-support-description">
                We review the submitted
                information to understand the
                project direction and practical
                solution requirements.
              </p>
            </article>

            <article
              className="contact-support-card reveal"
              data-reveal-delay="160"
            >
              <div className="contact-support-heading">
                <div
                  className="contact-support-icon"
                  aria-hidden="true"
                >
                  <SiteIcon
                    name="communication"
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="contact-support-title">
                  Clear Communication
                </h3>
              </div>

              <p className="contact-support-description">
                Project discussions,
                requirements and next steps
                will be communicated clearly
                through email or WhatsApp.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`

        :root {
          --contact-gradient:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );
        }


        /* ==================================================
           HERO
           ================================================== */

        .contact-page-hero
        .page-hero {
          min-height:
            auto !important;

          padding-top:
            38px !important;

          padding-bottom:
            40px !important;
        }


        .contact-page-hero
        .page-hero-inner {
          gap:
            16px !important;
        }


        .contact-page-hero
        .page-hero-title {
          max-width:
            960px !important;

          margin:
            0 !important;

          line-height:
            1.05 !important;

          overflow:
            visible !important;
        }


        .contact-hero-line {
          display:
            block;
        }


        .contact-hero-gradient {
          width:
            fit-content;

          padding-bottom:
            0.05em;

          color:
            transparent;

          background:
            var(--contact-gradient);

          -webkit-background-clip:
            text;

          background-clip:
            text;

          -webkit-text-fill-color:
            transparent;
        }


        .contact-page-hero
        .page-hero-description {
          margin:
            0 !important;
        }


        .contact-page-hero
        .page-hero-actions {
          margin-top:
            2px !important;
        }


        /* BUTTON BOX */

        .contact-page-hero
        .button {
          min-height:
            50px !important;

          padding:
            0 22px !important;

          border-radius:
            10px !important;
        }


        /* ==================================================
           MAIN
           ================================================== */

        .contact-main-section {
          padding-top:
            30px !important;

          padding-bottom:
            36px !important;

          overflow:
            visible !important;
        }


        .contact-page-layout {
          display:
            grid !important;

          grid-template-columns:
            minmax(
              330px,
              0.72fr
            )
            minmax(
              0,
              1.28fr
            ) !important;

          align-items:
            start !important;

          gap:
            24px !important;

          overflow:
            visible !important;
        }


        /* IMPORTANT:
           Don't make left + right same fixed height.
        */

        .contact-page-info {
          position:
            sticky;

          top:
            calc(
              var(--header-height)
              + 18px
            );

          align-self:
            start;

          height:
            auto !important;

          max-height:
            none !important;
        }


        .contact-form-column {
          width:
            100%;

          height:
            auto !important;

          min-height:
            0 !important;

          overflow:
            visible !important;
        }


        .contact-form-column
        > * {
          width:
            100%;

          height:
            auto !important;

          max-height:
            none !important;

          overflow:
            visible !important;
        }


        /* ==================================================
           INFO CARD COMPACT
           ================================================== */

        .contact-info-card {
          height:
            auto !important;

          min-height:
            0 !important;

          padding:
            28px !important;

          gap:
            20px !important;
        }


        .contact-info-header {
          gap:
            10px !important;
        }


        .contact-info-title {
          margin:
            0 !important;

          line-height:
            1.1 !important;
        }


        .contact-info-description {
          margin:
            0 !important;

          line-height:
            1.58 !important;
        }


        .contact-info-list {
          gap:
            9px !important;
        }


        .contact-info-item {
          grid-template-columns:
            44px minmax(
              0,
              1fr
            ) !important;

          align-items:
            center !important;

          gap:
            13px !important;

          padding:
            11px 13px !important;
        }


        .contact-info-icon {
          width:
            44px !important;

          height:
            44px !important;

          border-radius:
            10px !important;

          color:
            #022E2C !important;

          background:
            linear-gradient(
              135deg,
              rgba(
                0,
                204,
                153,
                0.22
              ),
              rgba(
                0,
                255,
                255,
                0.18
              )
            ) !important;
        }


        .contact-info-content {
          gap:
            3px !important;
        }


        .contact-info-label {
          font-size:
            12px !important;
        }


        .contact-info-value {
          font-size:
            14px !important;

          line-height:
            1.48 !important;
        }


        .contact-social-area {
          margin-top:
            2px;

          padding-top:
            17px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );
        }


        .contact-page-social-title {
          margin:
            0 0 11px !important;
        }


        /* ==================================================
           SUPPORT
           ================================================== */

        .contact-page-support {
          display:
            grid !important;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            ) !important;

          gap:
            12px !important;

          margin-top:
            22px !important;
        }


        .contact-support-card {
          min-height:
            0 !important;

          padding:
            20px !important;

          gap:
            10px !important;

          border-radius:
            14px !important;
        }


        .contact-support-heading {
          display:
            flex;

          align-items:
            center;

          gap:
            11px;
        }


        .contact-support-icon {
          width:
            42px !important;

          height:
            42px !important;

          flex:
            0 0 42px;

          border-radius:
            9px !important;

          background:
            linear-gradient(
              135deg,
              rgba(
                0,
                204,
                153,
                0.20
              ),
              rgba(
                0,
                255,
                255,
                0.18
              )
            ) !important;
        }


        .contact-support-title {
          margin:
            0 !important;
        }


        .contact-support-description {
          margin:
            0 !important;

          line-height:
            1.55 !important;
        }


        /* ==================================================
           TABLET
           ================================================== */

        @media (
          max-width: 1000px
        ) {

          .contact-page-layout {
            grid-template-columns:
              1fr !important;

            gap:
              18px !important;
          }


          .contact-page-info {
            position:
              static !important;
          }


          .contact-info-list {
            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );
          }
        }


        /* ==================================================
           MOBILE
           ================================================== */

        @media (
          max-width: 680px
        ) {

          .contact-page-hero
          .page-hero {
            padding-top:
              30px !important;

            padding-bottom:
              32px !important;
          }


          .contact-hero-line {
            display:
              inline;
          }


          .contact-hero-line::after {
            content:
              " ";
          }


          .contact-hero-gradient {
            display:
              inline;
          }


          .contact-main-section {
            padding-top:
              24px !important;

            padding-bottom:
              28px !important;
          }


          .contact-info-card {
            padding:
              20px !important;
          }


          .contact-info-list {
            grid-template-columns:
              1fr;
          }


          .contact-page-support {
            grid-template-columns:
              1fr !important;

            margin-top:
              14px !important;

            gap:
              9px !important;
          }
        }

      `}</style>
    </>
  );
}

export default Contact;