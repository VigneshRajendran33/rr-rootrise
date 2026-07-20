import { useEffect } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

import ContactCTA from "../components/ContactCTA";
import PageHero from "../components/PageHero";
import SiteIcon from "../components/SiteIcon";

import {
  callToActions,
  services,
} from "../data/siteData";

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");

    const timer = window.setTimeout(() => {
      const targetSection =
        document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 120);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.hash]);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Digital solutions shaped around real business requirements."
        description="From professional websites and mobile applications to e-commerce platforms, custom systems and digital growth, we create solutions designed to support meaningful business outcomes."
        primaryAction={callToActions.primary}
        secondaryAction={callToActions.whatsapp}
      />

      <section
        className="section section-light"
        aria-labelledby="services-introduction-title"
      >
        <div className="container">
          <div className="services-page-intro">
            <div className="reveal-left">
              <span className="section-eyebrow">
                Complete Digital Capability
              </span>

              <h2
                id="services-introduction-title"
                className="section-title services-page-intro-title"
              >
                One reliable partner for your digital
                journey.
              </h2>
            </div>

            <div className="services-page-intro-content reveal-right">
              <p className="services-page-intro-description">
                Every business has different goals,
                customers and operational
                requirements. We begin by
                understanding those needs before
                recommending or developing a
                solution.
              </p>

              <p className="services-page-intro-description">
                Our services combine strategy,
                professional design, responsive
                development, digital growth and
                continued support through one clear
                process.
              </p>

              <div>
                <Link
                  to="/contact"
                  className="text-link"
                >
                  <span>
                    Discuss Your Requirements
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

      <section
        className="section section-soft"
        aria-labelledby="services-list-title"
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">
              What We Deliver
            </span>

            <h2
              id="services-list-title"
              className="section-title"
            >
              Professional services designed for
              clarity, reliability and growth.
            </h2>

            <p className="section-description">
              Explore our service areas and the
              practical capabilities available within
              each solution.
            </p>
          </div>

          <div className="services-page-list">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="service-detail reveal"
                data-reveal-delay={
                  (index % 3) * 70
                }
              >
                <div className="service-detail-heading">
                  <div className="service-detail-meta">
                    <span className="service-detail-number">
                      {service.number}
                    </span>

                    <div
                      className="service-detail-icon"
                      aria-hidden="true"
                    >
                      <SiteIcon
                        name={service.icon}
                        size={29}
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  <h3 className="service-detail-title">
                    {service.title}
                  </h3>

                  <p className="service-detail-summary">
                    {service.summary}
                  </p>
                </div>

                <div className="service-detail-content">
                  <p className="service-detail-description">
                    {service.description}
                  </p>

                  <ul
                    className="service-feature-list"
                    aria-label={`${service.title} capabilities`}
                  >
                    {service.features.map(
                      (feature) => (
                        <li
                          key={feature}
                          className="service-feature-item"
                        >
                          <span
                            className="service-feature-icon"
                            aria-hidden="true"
                          >
                            <SiteIcon
                              name="check-circle"
                              size={18}
                              strokeWidth={2}
                            />
                          </span>

                          <span>{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>

                  <div>
                    <Link
                      to="/contact"
                      className="button button-outline"
                      aria-label={`Start a ${service.title} project`}
                    >
                      <span>Start a Project</span>

                      <SiteIcon
                        name="arrow-right"
                        size={18}
                        strokeWidth={2}
                        className="button-icon"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section-dark"
        aria-labelledby="services-support-title"
      >
        <div className="container">
          <div className="about-approach-layout">
            <div className="about-approach-content reveal-left">
              <span className="section-eyebrow">
                Beyond Development
              </span>

              <h2
                id="services-support-title"
                className="section-title about-approach-title"
              >
                Support that continues after the
                initial launch.
              </h2>

              <p className="about-approach-description">
                A successful digital platform
                requires regular attention,
                improvements and reliable technical
                support. Our involvement can continue
                as your business requirements evolve.
              </p>
            </div>

            <div className="about-approach-steps">
              <article className="about-approach-step reveal">
                <span className="about-approach-step-number">
                  01
                </span>

                <div className="about-approach-step-content">
                  <h3 className="about-approach-step-title">
                    Maintenance
                  </h3>

                  <p className="about-approach-step-description">
                    Content updates, technical
                    checks, security improvements and
                    issue resolution.
                  </p>
                </div>
              </article>

              <article
                className="about-approach-step reveal"
                data-reveal-delay="80"
              >
                <span className="about-approach-step-number">
                  02
                </span>

                <div className="about-approach-step-content">
                  <h3 className="about-approach-step-title">
                    Improvement
                  </h3>

                  <p className="about-approach-step-description">
                    Performance optimisation,
                    interface refinements and
                    practical feature enhancements.
                  </p>
                </div>
              </article>

              <article
                className="about-approach-step reveal"
                data-reveal-delay="160"
              >
                <span className="about-approach-step-number">
                  03
                </span>

                <div className="about-approach-step-content">
                  <h3 className="about-approach-step-title">
                    Growth Support
                  </h3>

                  <p className="about-approach-step-description">
                    Continued guidance as your
                    audience, services and digital
                    requirements expand.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="Discuss Your Requirement"
        title="Need the right digital solution for your business?"
        description="Tell us about your business, current challenges and project goals. We will help you identify a practical direction."
      />
    </>
  );
}

export default Services;