import { useEffect } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

import SiteIcon from "../components/SiteIcon";
import {
  company,
  services,
} from "../data/siteData";

/* =========================================================
   SERVICE IMAGE MAP
   ========================================================= */

function getServiceVisual(service) {
  const title =
    service.title?.toLowerCase().trim() || "";

  if (title.includes("website")) {
    return {
      src: "/images/services/website-development.png",
      type: "website",
    };
  }

  if (title.includes("mobile")) {
    return {
      src: "/images/services/mobile-app-development.png",
      type: "mobile",
    };
  }

  if (
    title.includes("commerce") ||
    title.includes("e-commerce")
  ) {
    return {
      src: "/images/services/ecommerce-development.png",
      type: "commerce",
    };
  }

  if (
    title.includes("custom software") ||
    title.includes("software solution")
  ) {
    return {
      src: "/images/services/custom-software.png",
      type: "software",
    };
  }

  if (
    title.includes("ui/ux") ||
    title.includes("ui ux")
  ) {
    return {
      src: "/images/services/uiux-design.png",
      type: "design",
    };
  }

  if (
    title === "seo" ||
    title.includes("search")
  ) {
    return {
      src: "/images/services/seo.png",
      type: "seo",
    };
  }

  if (title.includes("growth")) {
    return {
      src: "/images/services/digital-growth.png",
      type: "growth",
    };
  }

  return {
    src: "/images/services/website-development.png",
    type: "website",
  };
}

/* =========================================================
   SERVICE VISUAL
   ========================================================= */

function ServiceVisual({ service }) {
  const visual =
    getServiceVisual(service);

  return (
    <div
      className={`rrsvc-visual rrsvc-${visual.type}`}
    >
      <span className="rrsvc-visual-glow" />

      <span className="rrsvc-orbit rrsvc-orbit-large" />
      <span className="rrsvc-orbit rrsvc-orbit-small" />

      <div className="rrsvc-image-stage">
        <div className="rrsvc-image-frame">
          <img
            src={visual.src}
            alt={`${service.title} service`}
            loading="lazy"
          />

          <span className="rrsvc-image-reflection" />
        </div>
      </div>

      <span className="rrsvc-floor">
        <i />
      </span>
    </div>
  );
}

/* =========================================================
   SERVICE ROW
   ========================================================= */

function ServiceRow({
  service,
  reverse = false,
}) {
  return (
    <article
      id={service.id}
      className={`rrsvc-service-row ${
        reverse
          ? "rrsvc-service-row-reverse"
          : ""
      }`}
    >
      <div className="rrsvc-service-copy">
        <div className="rrsvc-service-title">
          <span className="rrsvc-service-icon">
            <SiteIcon
              name={service.icon}
              size={24}
              strokeWidth={1.8}
            />
          </span>

          <h2>
            {service.title}
          </h2>
        </div>

        <p className="rrsvc-service-summary">
          {service.summary}
        </p>

        <p className="rrsvc-service-description">
          {service.description}
        </p>

        <div className="rrsvc-feature-grid">
          {service.features.map(
            (feature) => (
              <div
                key={feature}
                className="rrsvc-feature"
              >
                <span className="rrsvc-feature-check">
                  <SiteIcon
                    name="check-circle"
                    size={17}
                    strokeWidth={2}
                  />
                </span>

                <span>
                  {feature}
                </span>
              </div>
            ),
          )}
        </div>

        <Link
          to="/contact"
          className="rrsvc-service-link"
        >
          Discuss This Service

          <SiteIcon
            name="arrow-right"
            size={17}
            strokeWidth={2}
          />
        </Link>
      </div>

      <ServiceVisual
        service={service}
      />
    </article>
  );
}

/* =========================================================
   SERVICES PAGE
   ========================================================= */

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id =
      location.hash.replace("#", "");

    const timer =
      window.setTimeout(() => {
        const target =
          document.getElementById(id);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 120);

    return () =>
      window.clearTimeout(timer);
  }, [location.hash]);

  const whatsapp =
    company?.whatsappHref ||
    "https://wa.me/917200334187";

  return (
    <>
      {/* ===================================================
          HERO — CLEAN PROFESSIONAL VERSION
          =================================================== */}

      <section className="rrsvc-hero">
        <div className="rrsvc-container rrsvc-hero-layout">
          <div className="rrsvc-hero-copy">
            <h1>
              Technology services built
              to solve real{" "}
              <span>
                business challenges.
              </span>
            </h1>

            <p>
              From customer-facing
              digital experiences to
              custom business systems,
              RR RootRise combines
              strategy, design and
              engineering to turn
              requirements into
              dependable technology.
            </p>

            <div className="rrsvc-hero-actions">
              <Link
                to="/contact"
                className="rrsvc-primary-button"
              >
                Start a Project

                <SiteIcon
                  name="arrow-right"
                  size={18}
                  strokeWidth={2}
                />
              </Link>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rrsvc-secondary-button"
              >
                <SiteIcon
                  name="whatsapp"
                  size={18}
                  strokeWidth={1.8}
                />

                Discuss on WhatsApp
              </a>
            </div>
          </div>

          {/* CLEAN HERO IMAGE */}

          <div className="rrsvc-hero-visual-clean">
            <span className="rrsvc-clean-glow" />

            <div className="rrsvc-clean-image">
              <img
                src="/images/services/services-hero.png"
                alt="RR RootRise software and digital services"
              />

              <span className="rrsvc-clean-reflection" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          INTRO
          =================================================== */}

      <section className="rrsvc-intro">
        <div className="rrsvc-container rrsvc-intro-layout">
          <div>
            <span className="rrsvc-section-label">
              Complete Digital Capability
            </span>

            <h2>
              One technology partner
              from idea to production.
            </h2>
          </div>

          <div className="rrsvc-intro-copy">
            <p>
              Every engagement starts
              with understanding the
              business, customer journey
              and practical requirement
              before choosing technology
              or defining features.
            </p>

            <p>
              This keeps the solution
              focused, avoids unnecessary
              complexity and creates a
              stronger digital foundation
              for future growth.
            </p>
          </div>
        </div>

        <div className="rrsvc-container">
          <div className="rrsvc-capability-strip">
            <span>Strategy</span>
            <span>Experience Design</span>
            <span>Engineering</span>
            <span>Quality Validation</span>
            <span>Production Launch</span>
          </div>
        </div>
      </section>

      {/* ===================================================
          SERVICES
          =================================================== */}

      <section className="rrsvc-services">
        <div className="rrsvc-container">
          <div className="rrsvc-section-heading">
            <div>
              <span className="rrsvc-section-label">
                What We Deliver
              </span>

              <h2>
                Professional digital
                services designed around
                measurable business value.
              </h2>
            </div>

            <p>
              Each capability can operate
              independently or become part
              of a broader digital solution
              depending on your business
              goals, audience and
              operational needs.
            </p>
          </div>

          <div className="rrsvc-service-list">
            {services.map(
              (service, index) => (
                <ServiceRow
                  key={service.id}
                  service={service}
                  reverse={
                    index % 2 !== 0
                  }
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===================================================
          QUALITY
          =================================================== */}

      <section className="rrsvc-quality">
        <div className="rrsvc-container">
          <div className="rrsvc-section-heading rrsvc-dark-heading">
            <div>
              <span className="rrsvc-section-label">
                Built for Production
              </span>

              <h2>
                More than attractive
                interfaces — technology
                built for real use.
              </h2>
            </div>

            <p>
              Every project is approached
              with attention to clarity,
              responsiveness, performance
              and long-term usability.
            </p>
          </div>

          <div className="rrsvc-quality-grid">
            <article>
              <div className="rrsvc-quality-title">
                <span>
                  <SiteIcon
                    name="strategy"
                    size={22}
                    strokeWidth={1.8}
                  />
                </span>

                <h3>
                  Business-First Scope
                </h3>
              </div>

              <p>
                Features and technology
                are selected around useful
                business requirements
                rather than unnecessary
                complexity.
              </p>
            </article>

            <article>
              <div className="rrsvc-quality-title">
                <span>
                  <SiteIcon
                    name="performance"
                    size={22}
                    strokeWidth={1.8}
                  />
                </span>

                <h3>
                  Quality & Performance
                </h3>
              </div>

              <p>
                Responsive behaviour,
                performance and practical
                user experience remain
                part of the implementation.
              </p>
            </article>

            <article>
              <div className="rrsvc-quality-title">
                <span>
                  <SiteIcon
                    name="scalable"
                    size={22}
                    strokeWidth={1.8}
                  />
                </span>

                <h3>
                  Ready to Evolve
                </h3>
              </div>

              <p>
                Solutions are structured
                so your digital capability
                can evolve as business
                requirements grow.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================
          COMPACT CTA
          =================================================== */}

      <section className="rrsvc-cta-section">
        <div className="rrsvc-container">
          <div className="rrsvc-cta">
            <div className="rrsvc-cta-copy">
              <span className="rrsvc-cta-label">
                Discuss Your Requirement
              </span>

              <h2>
                Need the right digital
                solution for your business?
              </h2>

              <p>
                Tell us about your
                business, current
                challenges and project
                goals. We will help you
                identify a practical
                direction.
              </p>
            </div>

            <div className="rrsvc-cta-actions">
              <Link
                to="/contact"
                className="rrsvc-cta-primary"
              >
                Start a Project

                <SiteIcon
                  name="arrow-right"
                  size={17}
                  strokeWidth={2}
                />
              </Link>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rrsvc-cta-secondary"
              >
                <SiteIcon
                  name="whatsapp"
                  size={18}
                  strokeWidth={1.8}
                />

                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`

        /* ==================================================
           BRAND
           ================================================== */

        :root {
          --rr-teal: #00CC99;
          --rr-cyan: #00FFFF;

          --rr-deep: #020E18;
          --rr-navy: #031522;
          --rr-navy-soft: #062333;

          --rr-white: #FFFFFF;
          --rr-soft: #F5F8F9;
          --rr-text: #071725;
          --rr-muted: #5C7181;

          --rr-gradient:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );
        }


        /* ==================================================
           CONTAINER
           ================================================== */

        .rrsvc-container {
          width:
            min(
              calc(100% - 48px),
              1420px
            );

          margin-inline: auto;
        }


        /* ==================================================
           HERO
           SIMPLE FORTUNE 500 STYLE
           ================================================== */

        .rrsvc-hero {
          position: relative;

          overflow: hidden;

          padding:
            clamp(58px, 5vw, 78px)
            0
            clamp(58px, 5vw, 74px);

          background:
            radial-gradient(
              circle at 78% 42%,
              rgba(0, 204, 153, 0.065),
              transparent 34%
            ),
            radial-gradient(
              circle at 92% 45%,
              rgba(0, 255, 255, 0.055),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              #020E18 0%,
              #031522 60%,
              #052838 100%
            );
        }


        .rrsvc-hero-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1.08fr)
            minmax(420px, 0.78fr);

          align-items: center;

          gap:
            clamp(50px, 6vw, 88px);
        }


        .rrsvc-hero-copy {
          max-width: 790px;
        }


        .rrsvc-hero h1 {
          max-width: 800px;

          margin: 0;

          font-size:
            clamp(50px, 5vw, 72px);

          line-height: 1;

          letter-spacing:
            -0.055em;

          color: #FFFFFF;
        }


        .rrsvc-hero h1 span {
          color: transparent;

          background:
            var(--rr-gradient);

          -webkit-background-clip: text;
          background-clip: text;
        }


        .rrsvc-hero-copy > p {
          max-width: 710px;

          margin: 25px 0 0;

          font-size:
            clamp(17px, 1.35vw, 19px);

          line-height: 1.68;

          color: #B8C8D1;
        }


        /* ==================================================
           HERO BUTTONS
           ================================================== */

        .rrsvc-hero-actions {
          display: flex;

          flex-wrap: wrap;

          gap: 12px;

          margin-top: 29px;
        }


        .rrsvc-primary-button,
        .rrsvc-cta-primary {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          min-height: 50px;

          padding: 11px 20px;

          border: 0;

          border-radius: 9px;

          color: #02151F;

          background:
            var(--rr-gradient);

          box-shadow:
            0 12px 28px
            rgba(0, 204, 153, 0.08),
            0 10px 28px
            rgba(0, 255, 255, 0.06);

          font-size: 14px;
          font-weight: 800;

          text-decoration: none;

          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease;
        }


        .rrsvc-primary-button:hover,
        .rrsvc-cta-primary:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 15px 32px
            rgba(0, 204, 153, 0.11),
            0 13px 32px
            rgba(0, 255, 255, 0.08);
        }


        .rrsvc-secondary-button,
        .rrsvc-cta-secondary {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          min-height: 50px;

          padding: 11px 20px;

          border:
            1px solid
            rgba(0, 255, 255, 0.14);

          border-radius: 9px;

          color: #FFFFFF;

          background:
            linear-gradient(
              90deg,
              rgba(0, 204, 153, 0.06),
              rgba(0, 255, 255, 0.045)
            );

          font-size: 14px;
          font-weight: 750;

          text-decoration: none;
        }


        /* ==================================================
           CLEAN HERO IMAGE
           ================================================== */

        .rrsvc-hero-visual-clean {
          position: relative;

          width: 100%;

          max-width: 510px;

          margin-left: auto;
        }


        .rrsvc-clean-glow {
          position: absolute;

          top: 50%;
          left: 50%;

          width: 82%;
          height: 78%;

          border-radius: 50%;

          background:
            linear-gradient(
              90deg,
              rgba(0, 204, 153, 0.11),
              rgba(0, 255, 255, 0.09)
            );

          filter: blur(65px);

          transform:
            translate(-50%, -50%);
        }


        .rrsvc-clean-image {
          position: relative;

          z-index: 2;

          width: 100%;

          overflow: hidden;

          padding: 1px;

          border-radius: 20px;

          background:
            var(--rr-gradient);

          box-shadow:
            0 30px 65px
            rgba(0, 0, 0, 0.27),
            0 0 30px
            rgba(0, 204, 153, 0.035),
            0 0 35px
            rgba(0, 255, 255, 0.03);
        }


        .rrsvc-clean-image img {
          display: block;

          width: 100%;

          aspect-ratio: 1.28 / 1;

          border-radius: 19px;

          object-fit: cover;
          object-position: center;
        }


        .rrsvc-clean-reflection {
          position: absolute;

          inset: 1px;

          pointer-events: none;

          border-radius: 19px;

          background:
            linear-gradient(
              120deg,
              rgba(255, 255, 255, 0.045),
              transparent 31%,
              transparent 75%,
              rgba(0, 255, 255, 0.025)
            );
        }


        /* ==================================================
           SECTION LABEL
           ================================================== */

        .rrsvc-section-label {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 14px;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 0.15em;
          text-transform: uppercase;

          color: #087E70;
        }


        .rrsvc-section-label::before {
          width: 30px;
          height: 3px;

          content: "";

          border-radius: 999px;

          background:
            var(--rr-gradient);
        }


        /* ==================================================
           INTRO
           ================================================== */

        .rrsvc-intro {
          padding:
            clamp(42px, 3.8vw, 55px)
            0 0;

          background: #FFFFFF;
        }


        .rrsvc-intro-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(330px, 0.7fr);

          align-items: start;

          gap:
            clamp(34px, 6vw, 85px);
        }


        .rrsvc-intro h2,
        .rrsvc-section-heading h2 {
          max-width: 800px;

          margin: 0;

          font-size:
            clamp(37px, 3.7vw, 55px);

          line-height: 1.04;

          letter-spacing:
            -0.047em;

          color:
            var(--rr-text);
        }


        .rrsvc-intro-copy {
          display: grid;

          gap: 12px;
        }


        .rrsvc-intro-copy p {
          margin: 0;

          font-size: 17px;

          line-height: 1.68;

          color:
            var(--rr-muted);
        }


        .rrsvc-capability-strip {
          display: grid;

          grid-template-columns:
            repeat(5, 1fr);

          margin-top: 30px;

          border-top:
            1px solid #DDE8EA;

          border-bottom:
            1px solid #DDE8EA;
        }


        .rrsvc-capability-strip span {
          position: relative;

          display: flex;
          align-items: center;

          min-height: 55px;

          padding:
            9px 16px 9px 29px;

          border-right:
            1px solid #DDE8EA;

          font-size: 13px;
          font-weight: 700;

          color: #506675;
        }


        .rrsvc-capability-strip
        span::before {
          position: absolute;

          left: 14px;

          width: 6px;
          height: 6px;

          content: "";

          border-radius: 50%;

          background:
            var(--rr-gradient);
        }


        .rrsvc-capability-strip
        span:last-child {
          border-right: 0;
        }


        /* ==================================================
           SERVICES
           ================================================== */

        .rrsvc-services {
          padding:
            clamp(46px, 4vw, 60px)
            0;

          background: #F5F8F9;
        }


        .rrsvc-section-heading {
          display: grid;

          grid-template-columns:
            minmax(0, 1.08fr)
            minmax(320px, 0.62fr);

          align-items: end;

          gap:
            clamp(32px, 5vw, 78px);

          margin-bottom: 24px;
        }


        .rrsvc-section-heading > p {
          max-width: 570px;

          margin: 0;

          font-size: 17px;

          line-height: 1.68;

          color:
            var(--rr-muted);
        }


        .rrsvc-service-list {
          display: grid;

          gap: 10px;
        }


        .rrsvc-service-row {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(0, 1.08fr)
            minmax(380px, 0.78fr);

          align-items: center;

          gap:
            clamp(26px, 4vw, 50px);

          padding:
            clamp(23px, 2.5vw, 32px);

          overflow: hidden;

          scroll-margin-top: 92px;

          border:
            1px solid #DCE6EA;

          border-radius: 17px;

          background: #FFFFFF;

          box-shadow:
            0 9px 24px
            rgba(10, 35, 49, 0.03);
        }


        .rrsvc-service-row::before {
          position: absolute;

          top: 0;
          right: 0;
          left: 0;

          height: 2px;

          content: "";

          opacity: 0.58;

          background:
            var(--rr-gradient);
        }


        .rrsvc-service-row-reverse
        .rrsvc-service-copy {
          order: 2;
        }


        .rrsvc-service-row-reverse
        .rrsvc-visual {
          order: 1;
        }


        .rrsvc-service-title {
          display: flex;

          align-items: center;

          gap: 14px;

          margin-bottom: 14px;
        }


        .rrsvc-service-icon {
          display: grid;

          place-items: center;

          width: 46px;
          height: 46px;

          flex: 0 0 46px;

          border:
            1px solid
            rgba(0, 204, 153, 0.13);

          border-radius: 11px;

          color: #043936;

          background:
            linear-gradient(
              135deg,
              rgba(0, 204, 153, 0.20),
              rgba(0, 255, 255, 0.17)
            );
        }


        .rrsvc-service-title h2 {
          margin: 0;

          font-size:
            clamp(27px, 2.35vw, 37px);

          line-height: 1.08;

          letter-spacing:
            -0.035em;

          color:
            var(--rr-text);
        }


        .rrsvc-service-summary {
          max-width: 720px;

          margin: 0;

          font-size: 17px;

          line-height: 1.6;

          font-weight: 650;

          color: #3F5665;
        }


        .rrsvc-service-description {
          max-width: 730px;

          margin: 12px 0 0;

          font-size: 15.5px;

          line-height: 1.66;

          color: #607584;
        }


        .rrsvc-feature-grid {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            );

          gap: 8px 18px;

          margin-top: 18px;
        }


        .rrsvc-feature {
          display: flex;

          align-items: flex-start;

          gap: 8px;

          font-size: 14px;

          line-height: 1.48;

          color: #516775;
        }


        .rrsvc-feature-check {
          display: grid;

          place-items: center;

          flex: 0 0 auto;

          margin-top: 1px;

          color: #009D89;
        }


        .rrsvc-service-link {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-top: 20px;

          color: transparent;

          background:
            var(--rr-gradient);

          -webkit-background-clip: text;
          background-clip: text;

          font-size: 14px;
          font-weight: 800;

          text-decoration: none;
        }


        .rrsvc-service-link svg {
          color: #00BFC6;
        }


        /* ==================================================
           SERVICE VISUAL
           ================================================== */

        .rrsvc-visual {
          position: relative;

          width: 100%;
          max-width: 450px;

          aspect-ratio: 1.18 / 1;

          margin-inline: auto;

          perspective: 1400px;
        }


        .rrsvc-visual-glow {
          position: absolute;

          top: 50%;
          left: 50%;

          width: 76%;
          height: 68%;

          border-radius: 50%;

          background:
            linear-gradient(
              90deg,
              rgba(0, 204, 153, 0.17),
              rgba(0, 255, 255, 0.14)
            );

          filter: blur(50px);

          transform:
            translate(-50%, -50%);
        }


        .rrsvc-orbit {
          position: absolute;

          top: 50%;
          left: 50%;

          border-radius: 50%;

          transform:
            translate(-50%, -50%);
        }


        .rrsvc-orbit-large {
          width: 91%;
          height: 90%;

          border:
            1px dashed
            rgba(0, 255, 255, 0.10);

          animation:
            rrsvcOrbit
            34s linear infinite;
        }


        .rrsvc-orbit-small {
          width: 70%;
          height: 69%;

          border:
            1px solid
            rgba(0, 204, 153, 0.14);
        }


        .rrsvc-image-stage {
          position: absolute;

          top: 50%;
          left: 50%;

          z-index: 4;

          width: 86%;
          height: 73%;

          transform:
            translate(-50%, -50%);
        }


        .rrsvc-image-frame {
          position: relative;

          width: 100%;
          height: 100%;

          padding: 1px;

          overflow: hidden;

          border-radius: 18px;

          background:
            var(--rr-gradient);

          box-shadow:
            0 22px 45px
            rgba(0, 0, 0, 0.18),
            0 0 30px
            rgba(0, 204, 153, 0.05),
            0 0 35px
            rgba(0, 255, 255, 0.04);

          transform:
            rotateY(-5deg)
            rotateX(3deg);

          animation:
            rrsvcImageFloat
            7s ease-in-out infinite;

          transition:
            transform 0.4s ease;
        }


        .rrsvc-image-frame img {
          display: block;

          width: 100%;
          height: 100%;

          border-radius: 17px;

          object-fit: cover;
          object-position: center;

          transition:
            transform 0.65s ease;
        }


        .rrsvc-service-row:hover
        .rrsvc-image-frame {
          transform:
            rotateY(-2deg)
            rotateX(1deg)
            translateY(-3px);
        }


        .rrsvc-service-row:hover
        .rrsvc-image-frame img {
          transform:
            scale(1.035);
        }


        .rrsvc-image-reflection {
          position: absolute;

          inset: 1px;

          pointer-events: none;

          border-radius: inherit;

          background:
            linear-gradient(
              115deg,
              rgba(0, 204, 153, 0.04),
              transparent 35%,
              transparent 65%,
              rgba(0, 255, 255, 0.05)
            );
        }


        .rrsvc-floor {
          position: absolute;

          right: 12%;
          bottom: 1%;
          left: 12%;

          height: 15%;

          border:
            1px solid
            rgba(0, 255, 255, 0.07);

          border-radius: 50%;

          transform:
            perspective(500px)
            rotateX(72deg);
        }


        .rrsvc-floor i {
          position: absolute;

          top: 50%;
          left: 50%;

          width: 55%;
          height: 55%;

          border-radius: 50%;

          background:
            var(--rr-gradient);

          opacity: 0.1;

          transform:
            translate(-50%, -50%);
        }


        /* ==================================================
           QUALITY
           ================================================== */

        .rrsvc-quality {
          position: relative;

          overflow: hidden;

          padding:
            clamp(44px, 4vw, 58px)
            0;

          background:
            radial-gradient(
              circle at 18% 25%,
              rgba(0, 204, 153, 0.07),
              transparent 30%
            ),
            radial-gradient(
              circle at 88% 30%,
              rgba(0, 255, 255, 0.06),
              transparent 31%
            ),
            linear-gradient(
              135deg,
              #03131F,
              #062737
            );
        }


        .rrsvc-dark-heading h2 {
          color: #FFFFFF;
        }


        .rrsvc-dark-heading > p {
          color: #A2B4BE;
        }


        .rrsvc-dark-heading
        .rrsvc-section-label {
          color: #FFFFFF;
        }


        .rrsvc-quality-grid {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );

          gap: 11px;
        }


        .rrsvc-quality-grid article {
          position: relative;

          overflow: hidden;

          padding: 22px;

          border:
            1px solid
            rgba(255, 255, 255, 0.06);

          border-radius: 15px;

          background:
            linear-gradient(
              120deg,
              rgba(0, 204, 153, 0.045),
              rgba(0, 255, 255, 0.03)
            );
        }


        .rrsvc-quality-grid
        article::before {
          position: absolute;

          top: 0;
          right: 0;
          left: 0;

          height: 2px;

          content: "";

          background:
            var(--rr-gradient);
        }


        .rrsvc-quality-title {
          display: flex;

          align-items: center;

          gap: 13px;

          margin-bottom: 12px;
        }


        .rrsvc-quality-title
        > span {
          display: grid;

          place-items: center;

          width: 43px;
          height: 43px;

          flex: 0 0 43px;

          border-radius: 10px;

          color: #021817;

          background:
            var(--rr-gradient);
        }


        .rrsvc-quality-title h3 {
          margin: 0;

          font-size: 20px;

          color: #FFFFFF;
        }


        .rrsvc-quality-grid
        article > p {
          margin: 0;

          font-size: 15.5px;

          line-height: 1.64;

          color: #9DB0BB;
        }


        /* ==================================================
           CTA
           ================================================== */

        .rrsvc-cta-section {
          padding: 22px 0 26px;

          background: #F5F8F9;
        }


        .rrsvc-cta {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            auto;

          align-items: center;

          gap: 30px;

          overflow: hidden;

          padding: 26px 29px;

          border:
            1px solid
            rgba(0, 255, 255, 0.10);

          border-radius: 17px;

          background:
            radial-gradient(
              circle at 20% 50%,
              rgba(0, 204, 153, 0.08),
              transparent 35%
            ),
            radial-gradient(
              circle at 88% 45%,
              rgba(0, 255, 255, 0.07),
              transparent 36%
            ),
            linear-gradient(
              120deg,
              #031522,
              #063341
            );
        }


        .rrsvc-cta::before {
          position: absolute;

          top: 0;
          right: 0;
          left: 0;

          height: 2px;

          content: "";

          background:
            var(--rr-gradient);
        }


        .rrsvc-cta-copy {
          max-width: 790px;
        }


        .rrsvc-cta-label {
          display: inline-block;

          margin-bottom: 8px;

          color: transparent;

          background:
            var(--rr-gradient);

          -webkit-background-clip: text;
          background-clip: text;

          font-size: 9px;
          font-weight: 850;

          letter-spacing: 0.14em;
          text-transform: uppercase;
        }


        .rrsvc-cta h2 {
          max-width: 760px;

          margin: 0;

          font-size:
            clamp(28px, 2.7vw, 39px);

          line-height: 1.07;

          letter-spacing:
            -0.04em;

          color: #FFFFFF;
        }


        .rrsvc-cta-copy p {
          max-width: 670px;

          margin: 10px 0 0;

          font-size: 15px;

          line-height: 1.58;

          color: #A8BBC5;
        }


        .rrsvc-cta-actions {
          display: grid;

          gap: 9px;

          min-width: 215px;
        }


        .rrsvc-cta-primary,
        .rrsvc-cta-secondary {
          min-height: 46px;

          padding: 9px 16px;

          font-size: 13px;
        }


        /* ==================================================
           ANIMATIONS
           SERVICE IMAGES ONLY
           ================================================== */

        @keyframes rrsvcOrbit {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }


        @keyframes rrsvcImageFloat {
          0%,
          100% {
            translate: 0 0;
          }

          50% {
            translate: 0 -5px;
          }
        }


        /* ==================================================
           TABLET
           ================================================== */

        @media (max-width: 1050px) {
          .rrsvc-hero-layout {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(360px, 0.72fr);
          }


          .rrsvc-service-row {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(320px, 0.68fr);
          }


          .rrsvc-quality-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );
          }


          .rrsvc-cta {
            grid-template-columns: 1fr;

            gap: 18px;
          }


          .rrsvc-cta-actions {
            display: flex;

            min-width: 0;
          }
        }


        /* ==================================================
           TABLET / MOBILE
           ================================================== */

        @media (max-width: 850px) {
          .rrsvc-container {
            width:
              min(
                calc(100% - 34px),
                760px
              );
          }


          .rrsvc-hero {
            padding: 48px 0;
          }


          .rrsvc-hero-layout {
            grid-template-columns: 1fr;

            gap: 35px;
          }


          .rrsvc-hero-visual-clean {
            width: 100%;

            max-width: 500px;

            margin-inline: auto;
          }


          .rrsvc-intro-layout,
          .rrsvc-section-heading {
            grid-template-columns: 1fr;

            gap: 15px;
          }


          .rrsvc-capability-strip {
            grid-template-columns:
              repeat(3, 1fr);
          }


          .rrsvc-service-row,
          .rrsvc-service-row-reverse {
            grid-template-columns: 1fr;

            gap: 19px;
          }


          .rrsvc-service-row-reverse
          .rrsvc-service-copy,
          .rrsvc-service-row-reverse
          .rrsvc-visual {
            order: initial;
          }
        }


        /* ==================================================
           MOBILE
           ================================================== */

        @media (max-width: 600px) {
          .rrsvc-container {
            width:
              calc(100% - 28px);
          }


          .rrsvc-hero {
            padding:
              38px 0 42px;
          }


          .rrsvc-hero h1 {
            font-size:
              clamp(39px, 11vw, 49px);
          }


          .rrsvc-hero-copy > p {
            margin-top: 18px;

            font-size: 16px;
          }


          .rrsvc-hero-actions {
            display: grid;

            grid-template-columns: 1fr;

            margin-top: 22px;
          }


          .rrsvc-primary-button,
          .rrsvc-secondary-button {
            width: 100%;
          }


          .rrsvc-hero-layout {
            gap: 27px;
          }


          .rrsvc-hero-visual-clean {
            max-width: 360px;
          }


          .rrsvc-clean-image {
            border-radius: 16px;
          }


          .rrsvc-clean-image img {
            border-radius: 15px;
          }


          .rrsvc-intro {
            padding-top: 37px;
          }


          .rrsvc-intro h2,
          .rrsvc-section-heading h2 {
            font-size:
              clamp(32px, 9vw, 42px);
          }


          .rrsvc-intro-copy p,
          .rrsvc-section-heading > p {
            font-size: 16px;
          }


          .rrsvc-capability-strip {
            grid-template-columns: 1fr;

            margin-top: 25px;
          }


          .rrsvc-capability-strip span {
            min-height: 47px;

            padding:
              8px 4px 8px 21px;

            border-right: 0;

            border-bottom:
              1px solid #DCE7E9;
          }


          .rrsvc-capability-strip
          span::before {
            left: 4px;
          }


          .rrsvc-capability-strip
          span:last-child {
            border-bottom: 0;
          }


          .rrsvc-services {
            padding: 37px 0;
          }


          .rrsvc-section-heading {
            margin-bottom: 20px;
          }


          .rrsvc-service-list {
            gap: 8px;
          }


          .rrsvc-service-row {
            padding: 19px;

            gap: 17px;

            border-radius: 15px;
          }


          .rrsvc-service-title {
            gap: 11px;

            margin-bottom: 12px;
          }


          .rrsvc-service-icon {
            width: 43px;
            height: 43px;

            flex: 0 0 43px;
          }


          .rrsvc-service-title h2 {
            font-size:
              clamp(24px, 7vw, 30px);
          }


          .rrsvc-service-summary {
            font-size: 16.5px;
          }


          .rrsvc-service-description {
            margin-top: 10px;

            font-size: 15px;
          }


          .rrsvc-feature-grid {
            grid-template-columns: 1fr;

            gap: 8px;

            margin-top: 16px;
          }


          .rrsvc-visual {
            max-width: 325px;
          }


          .rrsvc-image-stage {
            width: 89%;
            height: 74%;
          }


          .rrsvc-quality {
            padding: 38px 0;
          }


          .rrsvc-quality-grid {
            grid-template-columns: 1fr;

            gap: 8px;
          }


          .rrsvc-quality-grid article {
            padding: 19px;
          }


          .rrsvc-cta-section {
            padding: 18px 0 22px;
          }


          .rrsvc-cta {
            gap: 16px;

            padding: 20px;

            border-radius: 14px;
          }


          .rrsvc-cta h2 {
            font-size:
              clamp(25px, 7vw, 31px);
          }


          .rrsvc-cta-copy p {
            margin-top: 8px;

            font-size: 14.5px;
          }


          .rrsvc-cta-actions {
            display: grid;

            grid-template-columns: 1fr;

            width: 100%;
          }


          .rrsvc-cta-primary,
          .rrsvc-cta-secondary {
            width: 100%;
          }
        }


        @media (
          prefers-reduced-motion:
          reduce
        ) {
          .rrsvc-orbit,
          .rrsvc-image-frame {
            animation: none !important;
          }
        }

      `}</style>
    </>
  );
}

export default Services;