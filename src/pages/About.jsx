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
      <PageHero
        eyebrow="About RR RootRise"
        title="Building strong digital foundations for meaningful business growth."
        description="RR RootRise Digital Innovations creates professional digital solutions through clear strategy, thoughtful design, reliable development and continued support."
        primaryAction={callToActions.primary}
        secondaryAction={callToActions.services}
      />

      <section
        className="section section-light"
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
                  <span>Discuss Your Project</span>

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
            <article className="about-purpose-card about-purpose-card-mission reveal-left">
              <div
                className="about-purpose-icon"
                aria-hidden="true"
              >
                <SiteIcon
                  name="strategy"
                  size={29}
                  strokeWidth={1.8}
                />
              </div>

              <div className="about-purpose-content">
                <span className="about-purpose-label">
                  Our Mission
                </span>

                <h3 className="about-purpose-title">
                  Create clear and growth-ready
                  digital experiences.
                </h3>

                <p className="about-purpose-description">
                  {company.mission}
                </p>
              </div>
            </article>

            <article className="about-purpose-card about-purpose-card-vision reveal-right">
              <div
                className="about-purpose-icon"
                aria-hidden="true"
              >
                <SiteIcon
                  name="globe"
                  size={29}
                  strokeWidth={1.8}
                />
              </div>

              <div className="about-purpose-content">
                <span className="about-purpose-label">
                  Our Vision
                </span>

                <h3 className="about-purpose-title">
                  Become a trusted long-term digital
                  partner.
                </h3>

                <p className="about-purpose-description">
                  {company.vision}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section section-light"
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
                  key={principle.number}
                  className="company-principle-card reveal"
                  data-reveal-delay={index * 70}
                >
                  <span className="company-principle-number">
                    {principle.number}
                  </span>

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

      <section
        className="section section-dark"
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
                  <span>Explore Our Services</span>

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
              {processSteps.map((step, index) => (
                <article
                  key={step.id}
                  className="about-approach-step reveal"
                  data-reveal-delay={index * 70}
                >
                  <span className="about-approach-step-number">
                    {step.number}
                  </span>

                  <div className="about-approach-step-content">
                    <h3 className="about-approach-step-title">
                      {step.title}
                    </h3>

                    <p className="about-approach-step-description">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section-light"
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
                  name="shield"
                  size={48}
                  strokeWidth={1.7}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="Work With RR RootRise"
        title="Ready to create a strong digital foundation for your business?"
        description="Share your business goals and digital requirements with us. We will help you identify a clear and practical project direction."
      />
    </>
  );
}

export default About;