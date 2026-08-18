import { Link } from "react-router-dom";

import ContactCTA from "../components/ContactCTA";
import SiteIcon from "../components/SiteIcon";
import MovingPortfolio from "../components/MovingPortfolio";

import {
  advantages,
  industries,
  portfolioProjects,
  processSteps,
  services,
} from "../data/siteData";

/* =========================================================
   SERVICE
   ========================================================= */

function ServiceCard({ service }) {
  return (
    <article className="rr-service-card">
      <div className="rr-card-title-row">
        <span className="rr-card-icon">
          <SiteIcon
            name={service.icon}
            size={23}
            strokeWidth={1.8}
          />
        </span>

        <h3>{service.title}</h3>
      </div>

      <p>{service.summary}</p>

      <Link
        to={`/services#${service.id}`}
        className="rr-inline-link"
      >
        Explore Service
        <SiteIcon
          name="arrow-right"
          size={16}
          strokeWidth={2}
        />
      </Link>
    </article>
  );
}

/* =========================================================
   INDUSTRY
   ========================================================= */

function IndustryCard({ industry }) {
  return (
    <article className="rr-industry-card">
      <div className="rr-card-title-row">
        <span className="rr-card-icon">
          <SiteIcon
            name={industry.icon}
            size={22}
            strokeWidth={1.8}
          />
        </span>

        <h3>{industry.title}</h3>
      </div>

      <p>{industry.description}</p>
    </article>
  );
}

/* =========================================================
   PROCESS
   ========================================================= */

function ProcessCard({ step }) {
  return (
    <article className="rr-process-card">
      <div className="rr-process-title">
        <span className="rr-process-symbol">
          <span />
        </span>

        <h3>{step.title}</h3>
      </div>

      <p>{step.description}</p>
    </article>
  );
}

/* =========================================================
   WHY ROOTRISE
   ========================================================= */

function AdvantageCard({ advantage }) {
  return (
    <article className="rr-advantage-card">
      <div className="rr-card-title-row rr-dark-card-title">
        <span className="rr-dark-icon">
          <SiteIcon
            name={advantage.icon}
            size={22}
            strokeWidth={1.8}
          />
        </span>

        <h3>{advantage.title}</h3>
      </div>

      <p>{advantage.description}</p>
    </article>
  );
}

/* =========================================================
   PROJECT LIVE PREVIEW
   ========================================================= */

function ProjectPreview({ project }) {
  return (
    <div className="rr-project-browser">
      <div className="rr-project-browser-bar">
        <div className="rr-browser-dots">
          <span />
          <span />
          <span />
        </div>

        <span className="rr-browser-title">
          {project.title}
        </span>
      </div>

      <div className="rr-live-preview">
        <iframe
          src={project.liveUrl}
          title={`${project.title} homepage preview`}
          loading="lazy"
          tabIndex="-1"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({ project }) {
  return (
    <article className="rr-project-card">
      <ProjectPreview project={project} />

      <div className="rr-project-content">
        <div className="rr-project-meta">
          <span>{project.industry}</span>

          <small>Demo Project</small>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="rr-project-tags">
          {project.capabilities
            .slice(0, 3)
            .map((capability) => (
              <span key={capability}>
                {capability}
              </span>
            ))}
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rr-project-link"
        >
          View Live Project

          <SiteIcon
            name="arrow-up-right"
            size={16}
            strokeWidth={2}
          />
        </a>
      </div>
    </article>
  );
}

/* =========================================================
   HOME
   ========================================================= */

function Home() {
  const primaryServices = services.filter(
    (service) => service.id !== "digital-growth",
  );

  const growthService = services.find(
    (service) => service.id === "digital-growth",
  );

  const featuredIndustries = industries.slice(0, 6);

  return (
    <>
      {/* ===================================================
          HERO
          =================================================== */}

      <section className="rr-hero">
        <div className="rr-hero-grid-pattern" />

        <div className="rr-container rr-hero-layout">
          <div className="rr-hero-copy">
            <span className="rr-eyebrow">
              <i />
              Software & Digital Solutions
            </span>

            <h1>
              Digital products built to earn trust,
              simplify work and{" "}
              <span>accelerate growth.</span>
            </h1>

            <p className="rr-hero-description">
              RR RootRise designs and engineers
              high-performance websites, mobile
              applications, e-commerce platforms
              and custom software for businesses
              ready to grow with confidence.
            </p>

            <div className="rr-hero-actions">
              <Link
                to="/contact"
                className="rr-btn rr-btn-primary"
              >
                Start a Project

                <SiteIcon
                  name="arrow-right"
                  size={17}
                  strokeWidth={2}
                />
              </Link>

              <Link
                to="/services"
                className="rr-btn rr-btn-secondary"
              >
                Explore Our Capabilities

                <SiteIcon
                  name="arrow-right"
                  size={17}
                  strokeWidth={2}
                />
              </Link>
            </div>

            <div className="rr-hero-trust">
              <span>Website Development</span>
              <span>Mobile Applications</span>
              <span>E-Commerce</span>
              <span>Custom Software</span>
            </div>
          </div>

          {/* TREE ONLY */}

          <div className="rr-tree-stage">
            <span className="rr-tree-ambient" />

            <span className="rr-orbit rr-orbit-a" />
            <span className="rr-orbit rr-orbit-b" />
            <span className="rr-orbit rr-orbit-c" />

            <div className="rr-tree-holder">
              <div className="rr-tree-glass">
                <img
                  src="/images/rr-hero-tree.png"
                  alt="RR RootRise digital technology tree"
                />

                <span className="rr-tree-reflection" />
              </div>
            </div>

            <div className="rr-tree-floor">
              <span />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SERVICES
          =================================================== */}

      <section className="rr-section rr-services">
        <div className="rr-container">
          <div className="rr-section-heading">
            <div>
              <span className="rr-section-label">
                What We Build
              </span>

              <h2>
                Digital capabilities designed
                around real business outcomes.
              </h2>
            </div>

            <p>
              We combine strategy, experience
              design and modern engineering to
              build technology that strengthens
              credibility, improves customer
              journeys and supports long-term
              business growth.
            </p>
          </div>

          <div className="rr-services-grid">
            {primaryServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>

          {growthService && (
            <article className="rr-growth-card">
              <div className="rr-growth-title-row">
                <span className="rr-growth-icon">
                  <SiteIcon
                    name={growthService.icon}
                    size={24}
                    strokeWidth={1.8}
                  />
                </span>

                <div>
                  <small>Growth Capability</small>

                  <h3>{growthService.title}</h3>
                </div>
              </div>

              <p>{growthService.summary}</p>

              <Link
                to="/services#digital-growth"
                className="rr-growth-link"
              >
                Explore Digital Growth

                <SiteIcon
                  name="arrow-right"
                  size={17}
                  strokeWidth={2}
                />
              </Link>
            </article>
          )}

          <div className="rr-center-action">
            <Link
              to="/services"
              className="rr-btn rr-btn-light"
            >
              View All Services

              <SiteIcon
                name="arrow-right"
                size={17}
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          SELECTED WORK
          =================================================== */}

      <section
        id="selected-work"
        className="rr-section rr-work"
      >
        <div className="rr-container">
          <div className="rr-section-heading rr-heading-dark">
            <div>
              <span className="rr-section-label">
                Selected Work
              </span>

              <h2>
                See how ideas become
                polished digital experiences.
              </h2>
            </div>

            <p>
              Explore demonstration projects
              created across education, culture,
              real estate and fitness to show
              our approach to responsive design,
              user experience and frontend
              engineering.
            </p>
          </div>

         <MovingPortfolio />
        </div>
      </section>

      {/* ===================================================
          PROCESS
          =================================================== */}

      <section className="rr-section rr-process">
        <div className="rr-container">
          <div className="rr-section-heading">
            <div>
              <span className="rr-section-label">
                How We Work
              </span>

              <h2>
                A focused delivery process
                from requirement to launch.
              </h2>
            </div>

            <p>
              Clear communication and disciplined
              execution keep business goals,
              design decisions and engineering
              aligned throughout the project.
            </p>
          </div>

          <div className="rr-process-grid">
            {processSteps.map((step) => (
              <ProcessCard
                key={step.id}
                step={step}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          INDUSTRIES
          =================================================== */}

      <section className="rr-section rr-industries">
        <div className="rr-container">
          <div className="rr-section-heading">
            <div>
              <span className="rr-section-label">
                Industries
              </span>

              <h2>
                Solutions shaped around
                the way each business operates.
              </h2>
            </div>

            <p>
              Different industries require
              different customer journeys,
              workflows and digital experiences.
              We adapt technology around the
              business instead of forcing every
              business into the same template.
            </p>
          </div>

          <div className="rr-industry-grid">
            {featuredIndustries.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
              />
            ))}
          </div>

          <div className="rr-center-action">
            <Link
              to="/industries"
              className="rr-btn rr-btn-light"
            >
              Explore Industries

              <SiteIcon
                name="arrow-right"
                size={17}
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          WHY ROOTRISE
          =================================================== */}

      <section className="rr-section rr-why">
        <div className="rr-container">
          <div className="rr-section-heading rr-heading-dark">
            <div>
              <span className="rr-section-label">
                Why RR RootRise
              </span>

              <h2>
                Built with business clarity
                and engineering discipline.
              </h2>
            </div>

            <p>
              We focus on dependable technology,
              professional communication and
              digital foundations designed to
              evolve as business requirements
              grow.
            </p>
          </div>

          <div className="rr-advantage-grid">
            {advantages.map((advantage) => (
              <AdvantageCard
                key={advantage.id}
                advantage={advantage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          ABOUT
          =================================================== */}

      <section className="rr-section rr-about">
        <div className="rr-container">
          <div className="rr-about-intro">
            <div>
              <span className="rr-section-label">
                About RR RootRise
              </span>

              <h2>
                A technology partner for
                businesses building what
                comes next.
              </h2>
            </div>

            <div className="rr-about-copy">
              <p>
                RR RootRise Digital Innovations
                brings together business
                understanding, user-focused
                design and modern engineering
                to create reliable digital
                experiences for organisations
                across India and global markets.
              </p>

              <Link
                to="/about"
                className="rr-inline-link"
              >
                Discover RR RootRise

                <SiteIcon
                  name="arrow-right"
                  size={16}
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>

          <div className="rr-purpose-grid">
            <article className="rr-purpose-card">
              <span>Our Mission</span>

              <h3>
                Turn meaningful business needs
                into reliable digital products
                that create lasting value.
              </h3>

              <p>
                We combine practical strategy,
                thoughtful design and modern
                engineering to improve customer
                experience, digital operations
                and business performance.
              </p>
            </article>

            <article className="rr-purpose-card">
              <span>Our Vision</span>

              <h3>
                Become a trusted technology
                partner for ambitious
                organisations across India
                and global markets.
              </h3>

              <p>
                We are building RR RootRise
                around quality, accountability,
                continuous improvement and
                long-term technology
                partnerships.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ContactCTA />

      <style>{`
        /* ==================================================
           RR ROOTRISE BRAND SYSTEM
           Navy + Teal + Cyan
           ================================================== */

        :root {
          --rr-navy-950: #020e18;
          --rr-navy-900: #031522;
          --rr-navy-850: #062333;

          --rr-teal: #16bfa9;
          --rr-teal-bright: #36d3b3;

          --rr-cyan: #27cfe2;
          --rr-cyan-bright: #45dbea;

          --rr-white: #ffffff;
          --rr-soft: #f5f8f9;
          --rr-text: #071725;
          --rr-muted: #5b7181;

          --rr-brand-gradient:
            linear-gradient(
              135deg,
              #22c7ad 0%,
              #31d4dc 52%,
              #28c9e8 100%
            );
        }

        .rr-container {
          width: min(
            calc(100% - 48px),
            1420px
          );

          margin-inline: auto;
        }

        .rr-section {
          width: 100%;
          margin: 0;
          padding:
            clamp(58px, 5vw, 78px)
            0;
        }

        /* ==================================================
           HERO
           ================================================== */

        .rr-hero {
          position: relative;
          overflow: hidden;

          padding:
            clamp(62px, 6vw, 88px)
            0
            clamp(54px, 5vw, 70px);

          background:
            radial-gradient(
              circle at 82% 36%,
              rgba(39, 207, 226, 0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 72% 45%,
              rgba(22, 191, 169, 0.07),
              transparent 36%
            ),
            linear-gradient(
              135deg,
              var(--rr-navy-950),
              var(--rr-navy-900) 58%,
              var(--rr-navy-850)
            );
        }

        .rr-hero-grid-pattern {
          position: absolute;
          inset: 0;

          opacity: 0.13;

          background-image:
            linear-gradient(
              rgba(39,207,226,.05)
              1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(22,191,169,.04)
              1px,
              transparent 1px
            );

          background-size: 72px 72px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 94%
            );
        }

        .rr-hero-layout {
          position: relative;
          z-index: 2;

          display: grid;

          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(430px, .8fr);

          align-items: center;

          gap:
            clamp(45px, 6vw, 90px);
        }

        .rr-hero-copy {
          max-width: 780px;
        }

        .rr-eyebrow {
          display: inline-flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 23px;

          padding: 8px 12px;

          border:
            1px solid
            rgba(39,207,226,.20);

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              rgba(22,191,169,.08),
              rgba(39,207,226,.05)
            );

          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;

          color: #61dfdf;
        }

        .rr-eyebrow i {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            var(--rr-brand-gradient);

          box-shadow:
            0 0 0 5px
            rgba(39,207,226,.08);
        }

        .rr-hero h1 {
          max-width: 800px;

          margin: 0;

          font-size:
            clamp(50px, 5vw, 72px);

          line-height: 1;
          letter-spacing: -.055em;

          color: #ffffff;
        }

        .rr-hero h1 span {
          color: transparent;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );

          -webkit-background-clip: text;
          background-clip: text;
        }

        .rr-hero-description {
          max-width: 700px;

          margin: 27px 0 0;

          font-size:
            clamp(17px, 1.35vw, 19px);

          line-height: 1.7;

          color: #b8c8d1;
        }

        .rr-hero-actions {
          display: flex;
          flex-wrap: wrap;

          gap: 12px;

          margin-top: 30px;
        }

        .rr-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          min-height: 50px;

          padding: 11px 20px;

          border-radius: 9px;

          font-size: 14px;
          font-weight: 750;

          text-decoration: none;

          transition:
            transform .18s ease,
            box-shadow .18s ease,
            border-color .18s ease;
        }

        .rr-btn:hover {
          transform: translateY(-2px);
        }

        .rr-btn-primary {
          color: #02151f;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );

          box-shadow:
            0 14px 30px
            rgba(0,255,255,.11);
        }

        .rr-btn-secondary {
          color: white;

          border:
            1px solid
            rgba(69,219,234,.18);

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.045),
              rgba(39,207,226,.035)
            );
        }

        .rr-btn-light {
          color: var(--rr-text);

          border:
            1px solid #d0dce1;

          background: #ffffff;
        }

        .rr-hero-trust {
          display: flex;
          flex-wrap: wrap;

          gap: 10px 23px;

          margin-top: 28px;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(255,255,255,.07);
        }

        .rr-hero-trust span {
          position: relative;

          padding-left: 13px;

          font-size: 12px;
          font-weight: 650;

          color: #90a6b2;
        }

        .rr-hero-trust span::before {
          position: absolute;

          top: 50%;
          left: 0;

          width: 5px;
          height: 5px;

          content: "";

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              var(--rr-teal),
              var(--rr-cyan)
            );

          transform:
            translateY(-50%);
        }

        /* ==================================================
           TREE — IMAGE COMPLETELY INSIDE CIRCLE
           No crop, no scale hack
           ================================================== */

        .rr-tree-stage {
          position: relative;

          width: 100%;
          max-width: 510px;

          aspect-ratio: 1 / 1;

          margin-left: auto;

          display: grid;
          place-items: center;

          perspective: 1200px;
        }

        .rr-tree-ambient {
          position: absolute;

          width: 78%;
          height: 78%;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(39,207,226,.20),
              rgba(22,191,169,.08) 38%,
              transparent 72%
            );

          filter: blur(24px);
        }

        .rr-orbit {
          position: absolute;

          border-radius: 50%;

          border:
            1px solid
            rgba(39,207,226,.12);
        }

        .rr-orbit-a {
          width: 96%;
          height: 96%;

          opacity: .32;
        }

        .rr-orbit-b {
          width: 85%;
          height: 85%;

          border-style: dashed;

          animation:
            rrOrbit 30s linear infinite;
        }

        .rr-orbit-c {
          width: 72%;
          height: 72%;

          border-color:
            rgba(22,191,169,.17);

          animation:
            rrOrbitReverse
            24s linear infinite;
        }

        .rr-tree-holder {
          position: relative;
          z-index: 4;

          width: 82%;
          aspect-ratio: 1;

          padding: 7px;

          border:
            1px solid
            rgba(69,219,234,.30);

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.12),
              rgba(39,207,226,.08)
            );

          box-shadow:
            0 40px 70px
            rgba(0,0,0,.32),
            0 0 55px
            rgba(39,207,226,.11);

          animation:
            rrTreeFloat
            7s ease-in-out infinite;
        }

        .rr-tree-glass {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          display: grid;
          place-items: center;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 50% 55%,
              #073044,
              #031522 72%
            );
        }

        .rr-tree-glass img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: contain;
          object-position: center;

          border-radius: 50%;
        }

        .rr-tree-reflection {
          position: absolute;
          inset: 0;

          pointer-events: none;

          border-radius: 50%;

          background:
            linear-gradient(
              125deg,
              rgba(255,255,255,.12),
              transparent 23%,
              transparent 68%,
              rgba(39,207,226,.07)
            );
        }

        .rr-tree-floor {
          position: absolute;

          bottom: 2%;

          width: 68%;
          height: 17%;

          border:
            1px solid
            rgba(39,207,226,.09);

          border-radius: 50%;

          transform:
            perspective(500px)
            rotateX(72deg);
        }

        .rr-tree-floor span {
          position: absolute;

          top: 50%;
          left: 50%;

          width: 55%;
          height: 55%;

          border:
            1px solid
            rgba(22,191,169,.13);

          border-radius: 50%;

          transform:
            translate(-50%,-50%);
        }

        /* ==================================================
           COMMON HEADINGS
           ================================================== */

        .rr-section-label {
          display: inline-flex;
          align-items: center;

          gap: 10px;

          margin-bottom: 15px;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .15em;
          text-transform: uppercase;

          color: #0e9f91;
        }

        .rr-section-label::before {
          width: 27px;
          height: 2px;

          content: "";

          background:
            var(--rr-brand-gradient);
        }

        .rr-section-heading,
        .rr-about-intro {
          display: grid;

          grid-template-columns:
            minmax(0,1.1fr)
            minmax(330px,.65fr);

          align-items: end;

          gap:
            clamp(40px, 7vw, 100px);

          margin-bottom:
            clamp(30px,4vw,44px);
        }

        .rr-section-heading h2,
        .rr-about-intro h2 {
          max-width: 800px;

          margin: 0;

          font-size:
            clamp(38px,4vw,58px);

          line-height: 1.04;
          letter-spacing: -.047em;

          color: var(--rr-text);
        }

        .rr-section-heading > p,
        .rr-about-copy > p {
          max-width: 570px;

          margin: 0;

          font-size: 17px;
          line-height: 1.72;

          color: var(--rr-muted);
        }

        .rr-heading-dark h2 {
          color: #ffffff;
        }

        .rr-heading-dark > p {
          color: #a2b4be;
        }

        /* ==================================================
           SERVICES
           ================================================== */

        .rr-services {
          background: var(--rr-soft);
        }

        .rr-services-grid {
          display: grid;

          grid-template-columns:
            repeat(3,minmax(0,1fr));

          gap: 14px;
        }

        .rr-service-card,
        .rr-industry-card {
          min-width: 0;

          padding: 25px;

          border:
            1px solid #dce6ea;

          border-radius: 15px;

          background: #ffffff;

          transition:
            transform .18s ease,
            border-color .18s ease,
            box-shadow .18s ease;
        }

        .rr-service-card:hover,
        .rr-industry-card:hover {
          transform:
            translateY(-3px);

          border-color:
            rgba(39,207,226,.32);

          box-shadow:
            0 16px 35px
            rgba(9,35,49,.055);
        }

        /* ICON BESIDE TITLE */

        .rr-card-title-row {
          display: flex;
          align-items: center;

          gap: 14px;

          margin-bottom: 16px;
        }

        .rr-card-title-row h3 {
          margin: 0;

          font-size: 21px;
          line-height: 1.22;

          letter-spacing: -.025em;

          color: #081925;
        }

        .rr-card-icon {
          display: grid;
          place-items: center;

          width: 44px;
          height: 44px;

          flex: 0 0 44px;

          border-radius: 10px;

          color: #079d95;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.12),
              rgba(39,207,226,.11)
            );

          border:
            1px solid
            rgba(39,207,226,.08);
        }

        .rr-service-card > p,
        .rr-industry-card > p {
          margin: 0;

          font-size: 15.5px;
          line-height: 1.68;

          color: #607584;
        }

        .rr-inline-link {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          width: fit-content;

          margin-top: 20px;

          font-size: 14px;
          font-weight: 750;

          text-decoration: none;

          color: #078f84;
        }

        .rr-growth-card {
          display: grid;

          grid-template-columns:
            minmax(290px,.6fr)
            minmax(0,1fr)
            auto;

          align-items: center;

          gap: 30px;

          margin-top: 14px;

          padding: 26px;

          border:
            1px solid
            rgba(39,207,226,.12);

          border-radius: 15px;

          background:
            linear-gradient(
              120deg,
              #041724,
              #063044
            );
        }

        .rr-growth-title-row {
          display: flex;
          align-items: center;

          gap: 14px;
        }

        .rr-growth-icon {
          display: grid;
          place-items: center;

          width: 48px;
          height: 48px;

          flex: 0 0 48px;

          border-radius: 11px;

          color: #031722;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );
        }

        .rr-growth-title-row small {
          font-size: 9px;
          font-weight: 800;

          letter-spacing: .12em;
          text-transform: uppercase;

          color: transparent;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );

          -webkit-background-clip: text;
          background-clip: text;
        }

        .rr-growth-title-row h3 {
          margin: 4px 0 0;

          font-size: 22px;

          color: #ffffff;
        }

        .rr-growth-card > p {
          margin: 0;

          font-size: 15.5px;
          line-height: 1.65;

          color: #a5b7c1;
        }

        .rr-growth-link {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          white-space: nowrap;

          font-size: 14px;
          font-weight: 750;

          text-decoration: none;

          color: transparent;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );

          -webkit-background-clip: text;
          background-clip: text;
        }

        .rr-growth-link svg {
          color: #00FFFF;
        }

        .rr-center-action {
          display: flex;
          justify-content: center;

          margin-top: 30px;
        }

        /* ==================================================
           PORTFOLIO WITH REAL HOMEPAGE PREVIEW
           ================================================== */

        .rr-work {
          background:
            radial-gradient(
              circle at 90% 5%,
              rgba(39,207,226,.06),
              transparent 28%
            ),
            #03131f;
        }

        .rr-project-grid {
          display: grid;

          grid-template-columns:
            repeat(2,minmax(0,1fr));

          gap: 18px;
        }

        .rr-project-card {
          overflow: hidden;

          border:
            1px solid
            rgba(39,207,226,.13);

          border-radius: 17px;

          background:
            rgba(255,255,255,.025);
        }

        .rr-project-browser {
          margin:
            16px 16px 0;

          overflow: hidden;

          border:
            1px solid
            rgba(255,255,255,.09);

          border-radius: 11px;

          background: #081d29;
        }

        .rr-project-browser-bar {
          display: flex;
          align-items: center;

          gap: 10px;

          height: 33px;

          padding:
            0 11px;

          background: #102b39;
        }

        .rr-browser-dots {
          display: flex;
          gap: 4px;
        }

        .rr-browser-dots span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #67818e;
        }

        .rr-browser-title {
          overflow: hidden;

          font-size: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;

          color: #8197a3;
        }

        /*
          Real webpage displayed at 50% scale.
        */

        .rr-live-preview {
          position: relative;

          height: 260px;

          overflow: hidden;

          background: #ffffff;
        }

        .rr-live-preview iframe {
          position: absolute;

          top: 0;
          left: 0;

          width: 200%;
          height: 200%;

          border: 0;

          pointer-events: none;

          transform: scale(.5);
          transform-origin: top left;
        }

        .rr-project-content {
          padding: 24px;
        }

        .rr-project-meta {
          display: flex;
          align-items: center;
          justify-content:
            space-between;

          gap: 16px;

          margin-bottom: 16px;
        }

        .rr-project-meta > span {
          font-size: 9px;
          font-weight: 800;

          letter-spacing: .12em;
          text-transform: uppercase;

          color: #4fdbd5;
        }

        /* SMALL DEMO BADGE */

        .rr-project-meta small {
          padding: 4px 8px;

          border:
            1px solid
            rgba(39,207,226,.15);

          border-radius: 999px;

          font-size: 8px;
          line-height: 1.2;

          color: #829aa7;

          background:
            rgba(39,207,226,.025);
        }

        .rr-project-content h3 {
          margin: 0;

          font-size:
            clamp(24px,2.2vw,31px);

          line-height: 1.1;
          letter-spacing: -.035em;

          color: #ffffff;
        }

        .rr-project-content > p {
          margin: 13px 0 0;

          font-size: 16px;
          line-height: 1.67;

          color: #9eb1bc;
        }

        .rr-project-tags {
          display: flex;
          flex-wrap: wrap;

          gap: 7px;

          margin-top: 18px;
        }

        .rr-project-tags span {
          padding: 6px 8px;

          border-radius: 5px;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.055),
              rgba(39,207,226,.045)
            );

          font-size: 9px;

          color: #89a0ac;
        }

        .rr-project-link {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          margin-top: 21px;

          font-size: 14px;
          font-weight: 750;

          text-decoration: none;

          color: #52dcda;
        }

        /* ==================================================
           PROCESS
           ================================================== */

        .rr-process {
          background: #ffffff;
        }

        .rr-process-grid {
          display: grid;

          grid-template-columns:
            repeat(3,minmax(0,1fr));

          gap: 13px;
        }

        .rr-process-card {
          padding: 25px;

          border:
            1px solid #dfe7eb;

          border-radius: 15px;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #fafcfd
            );
        }

        .rr-process-title {
          display: flex;
          align-items: center;

          gap: 13px;

          margin-bottom: 15px;
        }

        .rr-process-symbol {
          display: grid;
          place-items: center;

          width: 38px;
          height: 38px;

          flex: 0 0 38px;

          border-radius: 9px;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.12),
              rgba(39,207,226,.12)
            );
        }

        .rr-process-symbol span {
          width: 10px;
          height: 10px;

          border:
            2px solid #18a99f;

          border-radius: 3px;

          transform: rotate(45deg);
        }

        .rr-process-card h3 {
          margin: 0;

          font-size: 21px;

          color: #081925;
        }

        .rr-process-card p {
          margin: 0;

          font-size: 15.5px;
          line-height: 1.67;

          color: #607584;
        }

        /* ==================================================
           INDUSTRIES
           ================================================== */

        .rr-industries {
          background: var(--rr-soft);
        }

        .rr-industry-grid {
          display: grid;

          grid-template-columns:
            repeat(3,minmax(0,1fr));

          gap: 13px;
        }

        /* ==================================================
           WHY ROOTRISE
           ================================================== */

        .rr-why {
          background:
            linear-gradient(
              135deg,
              #03131f,
              #062737
            );
        }

        .rr-advantage-grid {
          display: grid;

          grid-template-columns:
            repeat(3,minmax(0,1fr));

          gap: 13px;
        }

        .rr-advantage-card {
          padding: 25px;

          border:
            1px solid
            rgba(39,207,226,.10);

          border-radius: 15px;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.025),
              rgba(39,207,226,.018)
            );
        }

        .rr-dark-icon {
          display: grid;
          place-items: center;

          width: 44px;
          height: 44px;

          flex: 0 0 44px;

          border-radius: 10px;

          color: #52dcda;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.10),
              rgba(39,207,226,.09)
            );
        }

        .rr-dark-card-title h3 {
          color: #ffffff;
        }

        .rr-advantage-card > p {
          margin: 0;

          font-size: 15.5px;
          line-height: 1.68;

          color: #9db0bb;
        }

        /* ==================================================
           ABOUT
           ================================================== */

        .rr-about {
          background: #ffffff;
        }

        .rr-about-copy {
          display: grid;

          gap: 18px;
        }

        .rr-purpose-grid {
          display: grid;

          grid-template-columns:
            repeat(2,minmax(0,1fr));

          gap: 14px;
        }

        .rr-purpose-card {
          padding:
            clamp(28px,3vw,38px);

          border:
            1px solid #dfe7ea;

          border-radius: 16px;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.025),
              rgba(39,207,226,.025)
            );
        }

        .rr-purpose-card > span {
          display: inline-block;

          margin-bottom: 18px;

          font-size: 10px;
          font-weight: 850;

          letter-spacing: .14em;
          text-transform: uppercase;

          color: #078f84;
        }

        .rr-purpose-card h3 {
          max-width: 640px;

          margin: 0;

          font-size:
            clamp(23px,2vw,30px);

          line-height: 1.14;
          letter-spacing: -.03em;

          color: var(--rr-text);
        }

        .rr-purpose-card p {
          margin: 16px 0 0;

          font-size: 16px;
          line-height: 1.7;

          color: #607584;
        }

        /* ==================================================
           ANIMATION
           ================================================== */

        @keyframes rrTreeFloat {
          0%,
          100% {
            transform:
              translateY(0)
              rotateY(-3deg)
              rotateX(2deg);
          }

          50% {
            transform:
              translateY(-8px)
              rotateY(2deg)
              rotateX(1deg);
          }
        }

        @keyframes rrOrbit {
          from {
            transform: rotate(0);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rrOrbitReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0);
          }
        }

        /* ==================================================
           TABLET
           ================================================== */

        @media (max-width: 1050px) {
          .rr-hero-layout {
            grid-template-columns:
              minmax(0,1fr)
              minmax(370px,.75fr);
          }

          .rr-services-grid,
          .rr-industry-grid,
          .rr-advantage-grid {
            grid-template-columns:
              repeat(2,minmax(0,1fr));
          }

          .rr-growth-card {
            grid-template-columns:
              minmax(260px,.65fr)
              1fr;
          }

          .rr-growth-link {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 850px) {
          .rr-container {
            width:
              min(
                calc(100% - 34px),
                760px
              );
          }

          .rr-section {
            padding: 54px 0;
          }

          .rr-hero {
            padding: 48px 0;
          }

          .rr-hero-layout {
            grid-template-columns: 1fr;

            gap: 25px;
          }

          .rr-hero-copy {
            max-width: 700px;
          }

          .rr-tree-stage {
            width: 100%;
            max-width: 470px;

            margin-inline: auto;
          }

          .rr-section-heading,
          .rr-about-intro {
            grid-template-columns: 1fr;

            gap: 17px;

            margin-bottom: 29px;
          }

          .rr-section-heading > p,
          .rr-about-copy > p {
            max-width: 680px;
          }

          .rr-project-grid {
            grid-template-columns: 1fr;
          }

          .rr-process-grid {
            grid-template-columns:
              repeat(2,minmax(0,1fr));
          }
        }

        /* ==================================================
           MOBILE
           ================================================== */

        @media (max-width: 600px) {
          .rr-container {
            width:
              calc(100% - 28px);
          }

          .rr-section {
            padding: 44px 0;
          }

          .rr-hero {
            padding:
              38px 0 42px;
          }

          .rr-hero h1 {
            font-size:
              clamp(39px,11vw,49px);
          }

          .rr-hero-description {
            margin-top: 20px;

            font-size: 16px;
          }

          .rr-hero-actions {
            display: grid;
            grid-template-columns: 1fr;

            margin-top: 23px;
          }

          .rr-btn {
            width: 100%;
          }

          .rr-hero-trust {
            gap: 8px 15px;

            margin-top: 21px;

            padding-top: 16px;
          }

          .rr-hero-trust span {
            font-size: 10px;
          }

          /* TREE */

          .rr-tree-stage {
            max-width: 345px;
          }

          .rr-tree-holder {
            width: 82%;
          }

          /* TITLES */

          .rr-section-heading h2,
          .rr-about-intro h2 {
            font-size:
              clamp(32px,9vw,42px);
          }

          .rr-section-heading > p,
          .rr-about-copy > p {
            font-size: 16px;
          }

          /* SERVICES */

          .rr-services-grid,
          .rr-industry-grid,
          .rr-advantage-grid,
          .rr-process-grid,
          .rr-purpose-grid {
            grid-template-columns: 1fr;

            gap: 10px;
          }

          .rr-service-card,
          .rr-industry-card,
          .rr-process-card,
          .rr-advantage-card {
            padding: 21px;
          }

          .rr-card-title-row {
            gap: 12px;

            margin-bottom: 13px;
          }

          .rr-card-title-row h3,
          .rr-process-card h3 {
            font-size: 19px;
          }

          .rr-service-card > p,
          .rr-industry-card > p,
          .rr-process-card p,
          .rr-advantage-card > p {
            font-size: 15px;
          }

          .rr-growth-card {
            grid-template-columns: 1fr;

            gap: 17px;

            padding: 21px;
          }

          .rr-growth-link {
            grid-column: auto;

            white-space: normal;
          }

          /* PROJECT */

          .rr-project-browser {
            margin:
              10px 10px 0;
          }

          .rr-live-preview {
            height: 210px;
          }

          .rr-project-content {
            padding: 20px;
          }

          .rr-project-content > p {
            font-size: 15px;
          }

          .rr-project-meta small {
            padding: 3px 7px;

            font-size: 7px;
          }

          .rr-purpose-card {
            padding: 23px;
          }

          .rr-purpose-card h3 {
            font-size: 23px;
          }

          .rr-purpose-card p {
            font-size: 15px;
          }
        }

        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .rr-tree-holder,
          .rr-orbit {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
