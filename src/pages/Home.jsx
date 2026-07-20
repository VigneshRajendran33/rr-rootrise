import { useState } from "react";
import { Link } from "react-router-dom";

import ContactCTA from "../components/ContactCTA";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import SiteIcon from "../components/SiteIcon";

import {
  advantages,
  brandAssets,
  callToActions,
  company,
  heroContent,
  industries,
  processSteps,
  services,
  solutionPillars,
} from "../data/siteData";

function IndustryCard({ industry, delay = 0 }) {
  return (
    <article
      className="industry-card reveal"
      data-reveal-delay={delay}
    >
      <div
        className="industry-card-icon"
        aria-hidden="true"
      >
        <SiteIcon
          name={industry.icon}
          size={27}
        />
      </div>

      <h3 className="industry-card-title">
        {industry.title}
      </h3>

      <p className="industry-card-description">
        {industry.description}
      </p>
    </article>
  );
}

function ProcessCard({ step, delay = 0 }) {
  return (
    <article
      className="process-card reveal"
      data-reveal-delay={delay}
    >
      <span className="process-card-number">
        {step.number}
      </span>

      <h3 className="process-card-title">
        {step.title}
      </h3>

      <p className="process-card-description">
        {step.description}
      </p>
    </article>
  );
}

function AdvantageCard({
  advantage,
  delay = 0,
}) {
  return (
    <article
      className="advantage-card reveal"
      data-reveal-delay={delay}
    >
      <div
        className="advantage-card-icon"
        aria-hidden="true"
      >
        <SiteIcon
          name={advantage.icon}
          size={23}
        />
      </div>

      <div className="advantage-card-content">
        <h3 className="advantage-card-title">
          {advantage.title}
        </h3>

        <p className="advantage-card-description">
          {advantage.description}
        </p>
      </div>
    </article>
  );
}

function Home() {
  const [heroImageFailed, setHeroImageFailed] =
    useState(false);

  const featuredServices = services.slice(0, 6);

  return (
    <>
      <section
        className="home-hero"
        aria-labelledby="home-hero-title"
      >
        <div className="container-wide">
          <div className="home-hero-inner">
            <div className="home-hero-content">
              <span className="home-hero-eyebrow">
                {heroContent.eyebrow}
              </span>

              <h1
                id="home-hero-title"
                className="home-hero-title"
              >
                Digital Solutions Built for{" "}
                <span className="text-gradient">
                  Real Business Growth.
                </span>
              </h1>

              <p className="home-hero-description">
                {heroContent.description}
              </p>

              <p className="home-hero-supporting">
                <span
                  className="home-hero-supporting-icon"
                  aria-hidden="true"
                >
                  <SiteIcon
                    name="globe"
                    size={20}
                  />
                </span>

                <span>
                  {heroContent.supportingText}
                </span>
              </p>

              <div className="home-hero-actions">
                <Link
                  to={callToActions.primary.path}
                  className="button button-primary"
                >
                  <span>
                    {callToActions.primary.label}
                  </span>

                  <SiteIcon
                    name="arrow-right"
                    size={18}
                    strokeWidth={2}
                    className="button-icon"
                  />
                </Link>

                <Link
                  to={callToActions.services.path}
                  className="button button-dark-outline"
                >
                  <span>
                    {callToActions.services.label}
                  </span>

                  <SiteIcon
                    name="arrow-up-right"
                    size={18}
                    strokeWidth={2}
                    className="button-icon"
                  />
                </Link>
              </div>

              <div className="home-hero-note">
                <span className="home-hero-note-item">
                  <span
                    className="home-hero-note-dot"
                    aria-hidden="true"
                  />

                  Business-focused solutions
                </span>

                <span className="home-hero-note-item">
                  <span
                    className="home-hero-note-dot"
                    aria-hidden="true"
                  />

                  India & worldwide
                </span>

                <span className="home-hero-note-item">
                  <span
                    className="home-hero-note-dot"
                    aria-hidden="true"
                  />

                  Continued support
                </span>
              </div>
            </div>

            <div
              className="home-hero-visual-wrap"
              aria-hidden="true"
            >
              <div className="home-hero-visual-glow" />

              <div className="home-hero-visual">
                <div className="hero-orbit hero-orbit-one">
                  <span className="hero-orbit-node" />
                </div>

                <div className="hero-orbit hero-orbit-two">
                  <span className="hero-orbit-node" />
                </div>

                {!heroImageFailed ? (
                  <img
                    src={brandAssets.heroVisual}
                    alt=""
                    className="home-hero-image"
                    onError={() => {
                      setHeroImageFailed(true);
                    }}
                  />
                ) : (
                  <div className="home-hero-symbol-fallback">
                    RR
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="solutions-intro"
        aria-labelledby="solutions-intro-title"
      >
        <div className="container">
          <div className="solutions-intro-panel reveal-scale">
            <div className="solutions-intro-content">
              <span className="section-eyebrow">
                Complete Digital Partnership
              </span>

              <h2
                id="solutions-intro-title"
                className="solutions-intro-title"
              >
                From the first idea to continued
                digital growth.
              </h2>

              <p className="solutions-intro-description">
                We bring planning, design,
                development, growth and support
                together through one clear process.
              </p>
            </div>

            <div className="solution-pillars-grid">
              {solutionPillars.map(
                (pillar, index) => (
                  <article
                    key={pillar.id}
                    className="solution-pillar"
                  >
                    <span className="solution-pillar-number">
                      {pillar.number}
                    </span>

                    <h3 className="solution-pillar-title">
                      {pillar.title}
                    </h3>

                    <p className="solution-pillar-description">
                      {pillar.description}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section-light"
        aria-labelledby="home-services-title"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Our Services"
            title="Digital solutions designed around real business needs."
            description="We create professional digital experiences that help businesses build trust, improve operations and support long-term growth."
            titleAs="h2"
          />

          <div className="home-services-grid">
            {featuredServices.map(
              (service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  className="reveal"
                  data-reveal-delay={
                    index * 70
                  }
                />
              ),
            )}
          </div>

          <div className="home-section-footer reveal">
            <Link
              to="/services"
              className="button button-outline"
            >
              <span>View All Services</span>

              <SiteIcon
                name="arrow-right"
                size={18}
                strokeWidth={2}
                className="button-icon"
              />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section home-industries section-dark"
        aria-labelledby="home-industries-title"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Industries We Support"
            title="Practical digital experiences for different business sectors."
            description="Every industry has different customers, workflows and growth challenges. We shape each solution around those real requirements."
            align="center"
            theme="dark"
            titleAs="h2"
          />

          <div className="home-industries-grid">
            {industries.map(
              (industry, index) => (
                <IndustryCard
                  key={industry.id}
                  industry={industry}
                  delay={index * 60}
                />
              ),
            )}
          </div>

          <div className="home-section-footer reveal">
            <Link
              to="/industries"
              className="button button-dark-outline"
            >
              <span>
                Explore All Industries
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
      </section>

      <section
        className="section section-soft"
        aria-labelledby="home-process-title"
      >
        <div className="container">
          <SectionHeader
            eyebrow="Our Approach"
            title="A clear process from discovery to launch and support."
            description="Our structured approach keeps requirements, communication and project direction clear throughout development."
            align="center"
            titleAs="h2"
          />

          <div className="home-process-grid">
            {processSteps.map(
              (step, index) => (
                <ProcessCard
                  key={step.id}
                  step={step}
                  delay={index * 80}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="section section-light"
        aria-labelledby="home-advantages-title"
      >
        <div className="container">
          <div className="home-advantages-layout">
            <div className="home-advantages-content reveal-left">
              <span className="section-eyebrow">
                Why RR RootRise
              </span>

              <h2
                id="home-advantages-title"
                className="section-title home-advantages-title"
              >
                Strong digital foundations begin
                with clear business thinking.
              </h2>

              <p className="home-advantages-description">
                We focus on practical solutions,
                responsible communication and
                digital experiences that remain
                useful beyond the initial launch.
              </p>

              <div>
                <Link
                  to="/about"
                  className="text-link"
                >
                  <span>
                    Discover Our Approach
                  </span>

                  <SiteIcon
                    name="arrow-right"
                    size={18}
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>

            <div className="home-advantages-grid">
              {advantages.map(
                (advantage, index) => (
                  <AdvantageCard
                    key={advantage.id}
                    advantage={advantage}
                    delay={index * 70}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section-soft home-about"
        aria-labelledby="home-about-title"
      >
        <div className="container">
          <div className="home-about-layout">
            <div className="home-about-visual reveal-left">
              <article className="home-about-visual-card home-about-visual-card-one">
                <span className="home-about-card-label">
                  Our Mission
                </span>

                <h3 className="home-about-card-title">
                  Build clear and reliable digital
                  experiences.
                </h3>

                <p className="home-about-card-description">
                  Practical strategy, professional
                  design, development and continued
                  support.
                </p>
              </article>

              <article className="home-about-visual-card home-about-visual-card-two">
                <span className="home-about-card-label">
                  Our Vision
                </span>

                <h3 className="home-about-card-title">
                  Become a trusted long-term digital
                  partner.
                </h3>

                <p className="home-about-card-description">
                  Supporting ambitious businesses
                  across India and worldwide.
                </p>
              </article>
            </div>

            <div className="home-about-content reveal-right">
              <span className="section-eyebrow">
                About RR RootRise
              </span>

              <h2
                id="home-about-title"
                className="section-title"
              >
                A digital solutions company built
                around clarity and business value.
              </h2>

              <p className="home-about-description">
                {company.description}
              </p>

              <div className="home-about-highlights">
                <article className="home-about-highlight">
                  <div
                    className="home-about-highlight-icon"
                    aria-hidden="true"
                  >
                    <SiteIcon
                      name="strategy"
                      size={21}
                    />
                  </div>

                  <div className="home-about-highlight-content">
                    <h3 className="home-about-highlight-title">
                      Business-first planning
                    </h3>

                    <p className="home-about-highlight-text">
                      Technology decisions are shaped
                      around useful business outcomes.
                    </p>
                  </div>
                </article>

                <article className="home-about-highlight">
                  <div
                    className="home-about-highlight-icon"
                    aria-hidden="true"
                  >
                    <SiteIcon
                      name="communication"
                      size={21}
                    />
                  </div>

                  <div className="home-about-highlight-content">
                    <h3 className="home-about-highlight-title">
                      Clear communication
                    </h3>

                    <p className="home-about-highlight-text">
                      Requirements and project
                      progress remain understandable
                      throughout the process.
                    </p>
                  </div>
                </article>

                <article className="home-about-highlight">
                  <div
                    className="home-about-highlight-icon"
                    aria-hidden="true"
                  >
                    <SiteIcon
                      name="support"
                      size={21}
                    />
                  </div>

                  <div className="home-about-highlight-content">
                    <h3 className="home-about-highlight-title">
                      Continued support
                    </h3>

                    <p className="home-about-highlight-text">
                      Our relationship continues
                      through maintenance, guidance
                      and future improvements.
                    </p>
                  </div>
                </article>
              </div>

              <div>
                <Link
                  to="/about"
                  className="button button-outline"
                >
                  <span>Learn About RR RootRise</span>

                  <SiteIcon
                    name="arrow-right"
                    size={18}
                    strokeWidth={2}
                    className="button-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

export default Home;