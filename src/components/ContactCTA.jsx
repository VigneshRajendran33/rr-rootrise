import { Link } from "react-router-dom";

import SiteIcon from "./SiteIcon";

import {
  callToActions,
  company,
} from "../data/siteData";

function ContactCTA({
  eyebrow = "Start a Conversation",
  title = "Ready to build what’s next?",
  description = "Share your business goals with RR RootRise. We will help you identify the right digital solution and define a clear path forward.",
}) {
  return (
    <>
      <section
        className="rr-contact-section"
        aria-labelledby="contact-cta-title"
      >
        <div className="rr-contact-container">
          <div className="rr-contact-card">
            <div className="rr-contact-content">
              <span className="rr-contact-eyebrow">
                {eyebrow}
              </span>

              <h2
                id="contact-cta-title"
                className="rr-contact-title"
              >
                {title}
              </h2>

              <p className="rr-contact-description">
                {description}
              </p>
            </div>

            <div className="rr-contact-actions">
              <Link
                to={callToActions.primary.path}
                className="rr-contact-primary"
              >
                <span>
                  {callToActions.primary.label}
                </span>

                <SiteIcon
                  name="arrow-right"
                  size={18}
                  strokeWidth={2}
                />
              </Link>

              <a
                href={company.whatsappHref}
                className="rr-contact-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiteIcon
                  name="whatsapp"
                  size={18}
                  strokeWidth={1.9}
                />

                <span>
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ==========================================
           RR ROOTRISE COMPACT FINAL CTA
           ========================================== */

        .rr-contact-section {
          position: relative;

          width: 100%;

          padding:
            34px 0
            34px;

          margin: 0;

          background: #ffffff;
        }

        .rr-contact-container {
          width:
            min(
              calc(100% - 48px),
              1400px
            );

          margin: 0 auto;
        }

        .rr-contact-card {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(0, 1.35fr)
            auto;

          align-items: center;

          gap:
            clamp(
              32px,
              6vw,
              90px
            );

          overflow: hidden;

          padding:
            clamp(
              38px,
              4.5vw,
              64px
            );

          color: #ffffff;

          background:
            radial-gradient(
              circle at 8% 15%,
              rgba(
                16,
                185,
                129,
                0.14
              ),
              transparent 34%
            ),
            radial-gradient(
              circle at 88% 70%,
              rgba(
                6,
                182,
                212,
                0.13
              ),
              transparent 38%
            ),
            linear-gradient(
              135deg,
              #031522 0%,
              #061b2d 55%,
              #082237 100%
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.1
            );

          border-radius: 32px;

          box-shadow:
            0 25px 70px
            rgba(
              3,
              17,
              31,
              0.14
            );
        }

        .rr-contact-card::before {
          position: absolute;

          top: 0;
          right: 0;
          left: 0;

          height: 1px;

          content: "";

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(
                94,
                234,
                212,
                0.45
              ),
              rgba(
                34,
                211,
                238,
                0.4
              ),
              transparent
            );
        }

        .rr-contact-card::after {
          position: absolute;

          right: -100px;
          bottom: -180px;

          width: 420px;
          height: 420px;

          content: "";

          pointer-events: none;

          border:
            1px solid
            rgba(
              94,
              234,
              212,
              0.08
            );

          border-radius: 50%;

          box-shadow:
            0 0 0 70px
              rgba(
                94,
                234,
                212,
                0.025
              ),
            0 0 0 140px
              rgba(
                34,
                211,
                238,
                0.015
              );
        }

        .rr-contact-content {
          position: relative;
          z-index: 2;

          display: grid;

          gap: 14px;

          max-width: 760px;
        }

        .rr-contact-eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          width: fit-content;

          font-size: 12px;

          line-height: 1.3;

          font-weight: 750;

          letter-spacing:
            0.14em;

          text-transform:
            uppercase;

          color: #5eead4;
        }

        .rr-contact-eyebrow::before {
          width: 26px;
          height: 2px;

          content: "";

          border-radius:
            999px;

          background:
            linear-gradient(
              90deg,
              #34d399,
              #22d3ee
            );
        }

        .rr-contact-title {
          max-width: 620px;

          margin: 0;

          font-size:
            clamp(
              32px,
              4vw,
              54px
            );

          line-height: 1.04;

          letter-spacing:
            -0.045em;

          color: #ffffff;
        }

        .rr-contact-description {
          max-width: 670px;

          margin: 0;

          font-size:
            clamp(
              15px,
              1.25vw,
              17px
            );

          line-height: 1.7;

          color: #b9cad5;
        }

        .rr-contact-actions {
          position: relative;
          z-index: 2;

          display: flex;

          flex-direction: column;

          gap: 11px;

          min-width: 210px;
        }

        .rr-contact-primary,
        .rr-contact-secondary {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          min-height: 50px;

          padding:
            12px 20px;

          font-size: 14px;

          font-weight: 700;

          text-decoration: none;

          border-radius: 12px;

          transition:
            transform 180ms ease,
            background 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .rr-contact-primary {
          color: #02131f;

          background:
            linear-gradient(
              135deg,
              #34d399,
              #22d3ee
            );

          border:
            1px solid
            transparent;

          box-shadow:
            0 14px 30px
            rgba(
              16,
              185,
              129,
              0.16
            );
        }

        .rr-contact-primary:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 18px 36px
            rgba(
              16,
              185,
              129,
              0.22
            );
        }

        .rr-contact-secondary {
          color: #e6f2f6;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.14
            );
        }

        .rr-contact-secondary:hover {
          color: #ffffff;

          background:
            rgba(
              255,
              255,
              255,
              0.07
            );

          border-color:
            rgba(
              94,
              234,
              212,
              0.3
            );

          transform:
            translateY(-2px);
        }

        @media (
          max-width: 900px
        ) {
          .rr-contact-card {
            grid-template-columns:
              1fr;

            gap: 26px;

            padding: 38px;
          }

          .rr-contact-actions {
            flex-direction: row;

            min-width: 0;
          }

          .rr-contact-primary,
          .rr-contact-secondary {
            flex: 1;
          }
        }

        @media (
          max-width: 620px
        ) {
          .rr-contact-section {
            padding:
              24px 0;
          }

          .rr-contact-container {
            width:
              calc(
                100% - 32px
              );
          }

          .rr-contact-card {
            gap: 24px;

            padding:
              30px 24px;

            border-radius: 22px;
          }

          .rr-contact-title {
            font-size:
              clamp(
                30px,
                10vw,
                40px
              );
          }

          .rr-contact-actions {
            flex-direction: column;
          }

          .rr-contact-primary,
          .rr-contact-secondary {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default ContactCTA;