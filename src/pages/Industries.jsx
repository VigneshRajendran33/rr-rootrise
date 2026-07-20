import { Link } from "react-router-dom";

import ContactCTA from "../components/ContactCTA";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import SiteIcon from "../components/SiteIcon";

import {
  callToActions,
  industries,
} from "../data/siteData";

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
          <span>Discuss Your Requirement</span>

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

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Support"
        title="Digital solutions shaped around different business environments."
        description="Every industry has different customers, workflows and operational challenges. We create clear digital experiences based on those real requirements."
        primaryAction={callToActions.primary}
        secondaryAction={callToActions.services}
      />

      <section
        className="section section-light"
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

      <section
        className="section section-dark"
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
                <span className="about-approach-step-number">
                  01
                </span>

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
                <span className="about-approach-step-number">
                  02
                </span>

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
                <span className="about-approach-step-number">
                  03
                </span>

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
                <span className="about-approach-step-number">
                  04
                </span>

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

      <section
        className="section section-light"
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
                  className="button button-primary"
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

      <ContactCTA
        eyebrow="Build for Your Business"
        title="Ready to create a solution shaped around your industry?"
        description="Share your business model, audience and current digital challenges. We will help you identify a clear and practical direction."
      />
    </>
  );
}

export default Industries;