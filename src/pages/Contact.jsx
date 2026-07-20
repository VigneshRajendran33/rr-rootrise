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
      <PageHero
        eyebrow="Start a Project"
        title="Tell us what your business needs next."
        description="Share your project idea, business requirement or current digital challenge. We will review the information and respond through email."
        primaryAction={callToActions.secondary}
        secondaryAction={callToActions.whatsapp}
      />

      <section
        className="section section-soft"
        aria-labelledby="contact-section-title"
      >
        <div className="container">
          <div className="contact-page-layout">
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
                    Let&apos;s discuss your digital
                    requirement.
                  </h2>

                  <p className="contact-info-description">
                    Contact us through email,
                    WhatsApp or the project enquiry
                    form. Share enough information
                    for us to understand your
                    business and required solution.
                  </p>
                </div>

                <div className="contact-info-list">
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
                        href={company.emailHref}
                        className="contact-info-value"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

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
                        href={company.whatsappHref}
                        className="contact-info-value"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

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
                        {company.location}
                      </address>
                    </div>
                  </div>

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

                <h3 className="contact-page-social-title">
                  Connect With Us
                </h3>

                <div
                  className="social-links"
                  aria-label="RR RootRise social media links"
                >
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit RR RootRise on ${social.label}`}
                      title={social.label}
                    >
                      <SiteIcon
                        name={social.id}
                        size={21}
                        strokeWidth={1.8}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="reveal-right">
              <ContactForm />
            </div>
          </div>

          <div className="contact-page-support">
            <article className="contact-support-card reveal">
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

              <p className="contact-support-description">
                Explain your business, project idea,
                required service and current digital
                challenge clearly.
              </p>
            </article>

            <article
              className="contact-support-card reveal"
              data-reveal-delay="80"
            >
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

              <p className="contact-support-description">
                We review the submitted information
                to understand the project direction
                and practical solution requirements.
              </p>
            </article>

            <article
              className="contact-support-card reveal"
              data-reveal-delay="160"
            >
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

              <p className="contact-support-description">
                Project discussions, requirements
                and next steps will be communicated
                clearly through email or WhatsApp.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;