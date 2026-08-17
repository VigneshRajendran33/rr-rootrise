import { Link } from "react-router-dom";

import {
  brandAssets,
  company,
  footerCompanyLinks,
  legalLinks,
  services,
  socialLinks,
} from "../data/siteData";

/* =========================================================
   PROFESSIONAL FOOTER ICON
   ========================================================= */

function FooterIcon({
  name,
  size = 18,
  strokeWidth = 1.8,
}) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    /* WEBSITE */

    case "website":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
          />

          <path d="M3 8h18" />

          <path d="M7 6h.01" />
          <path d="M10 6h.01" />

          <path d="M7 12h10" />
          <path d="M7 16h6" />
        </svg>
      );

    /* MOBILE */

    case "mobile":
      return (
        <svg {...commonProps}>
          <rect
            x="7"
            y="2"
            width="10"
            height="20"
            rx="2"
          />

          <path d="M10 5h4" />

          <path d="M11.5 18.5h1" />
        </svg>
      );

    /* E-COMMERCE */

    case "ecommerce":
      return (
        <svg {...commonProps}>
          <path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 1.9-1.4L21 8H7" />

          <circle
            cx="10"
            cy="20"
            r="1"
          />

          <circle
            cx="18"
            cy="20"
            r="1"
          />
        </svg>
      );

    /* CUSTOM SOFTWARE */

    case "software":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            rx="1.5"
          />

          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="1.5"
          />

          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="1.5"
          />

          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            rx="1.5"
          />

          <path d="M10 6.5h4" />
          <path d="M6.5 10v4" />
          <path d="M17.5 10v4" />
        </svg>
      );

    /* UI UX */

    case "design":
      return (
        <svg {...commonProps}>
          <path d="M12 20h9" />

          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />

          <path d="m15 5 3 3" />
        </svg>
      );

    /* SEO */

    case "search":
      return (
        <svg {...commonProps}>
          <circle
            cx="11"
            cy="11"
            r="7"
          />

          <path d="m20 20-4-4" />

          <path d="M8 11h6" />
          <path d="M11 8v6" />
        </svg>
      );

    /* =====================================================
       DIGITAL GROWTH
       UPDATED PROFESSIONAL ICON
       ===================================================== */

    case "growth":
      return (
        <svg {...commonProps}>
          {/* baseline */}

          <path d="M4 19h16" />

          {/* vertical axis */}

          <path d="M5 19V6" />

          {/* growth path */}

          <path d="m7 15 4-4 3 2 5-6" />

          {/* arrow */}

          <path d="M15 7h4v4" />
        </svg>
      );

    /* EMAIL */

    case "mail":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
          />

          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    /* PHONE */

    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      );

    /* LOCATION */

    case "location":
      return (
        <svg {...commonProps}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

          <circle
            cx="12"
            cy="10"
            r="2.5"
          />
        </svg>
      );

    /* =====================================================
       WHATSAPP
       UPDATED PROFESSIONAL ICON
       ===================================================== */

    case "whatsapp":
      return (
        <svg {...commonProps}>
          {/* outer chat circle */}

          <path d="M20.4 11.8a8.4 8.4 0 0 1-12.5 7.3L3 20.5l1.5-4.7A8.4 8.4 0 1 1 20.4 11.8Z" />

          {/* phone receiver */}

          <path d="M8.6 7.8c.2-.4.5-.5.8-.5h.6c.2 0 .4.1.5.4l.8 2c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4 0 .7.7 1.3 1.8 2.3 3.1 3 .3.2.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .6-.2 1.3-.7 1.8-.6.6-1.5.9-2.6.7-1.1-.2-2.6-.8-4.2-2.2-1.4-1.2-2.5-2.7-3.1-3.9-.6-1.4-.5-2.5-.1-3.5Z" />
        </svg>
      );

    /* LINKEDIN */

    case "linkedin":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
          />

          <path d="M8 10v7" />
          <path d="M8 7h.01" />

          <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
          <path d="M12 10v7" />
        </svg>
      );

    /* INSTAGRAM */

    case "instagram":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
          />

          <circle
            cx="17.5"
            cy="6.5"
            r=".6"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    /* FACEBOOK */

    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" />
        </svg>
      );

    /* THREADS */

    case "threads":
      return (
        <svg {...commonProps}>
          <path d="M16.5 8.5c-.7-2-2.4-3-4.5-3-3.6 0-6 2.5-6 6.5 0 4.1 2.4 6.5 6.2 6.5 3 0 5-1.5 5-3.8 0-2.1-1.7-3.4-4.1-3.4-2 0-3.4 1-3.4 2.5 0 1.4 1.1 2.3 2.8 2.3 3.4 0 5.5-2.1 5.5-5.2 0-.8-.1-1.5-.3-2.1" />
        </svg>
      );

    /* X */

    case "x":
      return (
        <svg {...commonProps}>
          <path d="M4 4l16 16" />
          <path d="M20 4 4 20" />
        </svg>
      );

    /* GITHUB */

    case "github":
      return (
        <svg {...commonProps}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.2 3 5.4 5.4 0 0 0 19 0s-1.2-.4-4 1.5a13.7 13.7 0 0 0-7 0C5.2-.4 4 0 4 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 2.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4" />

          <path d="M8 19c-3 .9-3-1.5-4-2" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <circle
            cx="12"
            cy="12"
            r="9"
          />

          <path d="M8 12h8" />
        </svg>
      );
  }
}

/* =========================================================
   SERVICE ICON MAP
   ========================================================= */

function getServiceIcon(serviceId) {
  switch (serviceId) {
    case "website-development":
      return "website";

    case "mobile-app-development":
      return "mobile";

    case "ecommerce-development":
      return "ecommerce";

    case "custom-software":
      return "software";

    case "ui-ux-design":
      return "design";

    case "seo":
      return "search";

    case "digital-growth":
      return "growth";

    default:
      return "software";
  }
}

/* =========================================================
   SOCIAL LINKS + GITHUB
   ========================================================= */

const footerSocialLinks = [
  ...socialLinks.filter(
    (item) =>
      item.id !== "github",
  ),

  {
    id: "github",
    label: "GitHub",
    href: company.githubHref,
  },
];

/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  const footerAddress =
    company.address ||
    company.location ||
    "Coimbatore, Tamil Nadu, India";

  return (
    <footer
      className="rr-footer"
      aria-label="RR RootRise website footer"
    >
      <div className="rr-footer-container">

        <div className="rr-footer-grid">

          {/* BRAND */}

          <div className="rr-footer-brand">
            <Link
              to="/"
              className="rr-footer-logo-link"
              aria-label="RR RootRise Home"
            >
              <img
                src={
                  brandAssets.logoSymbol
                }
                alt="RR RootRise Digital Innovations"
                className="rr-footer-logo"
              />
            </Link>

            <p className="rr-footer-tagline">
              {company.tagline}
            </p>

            <p className="rr-footer-description">
              Modern software and digital
              solutions engineered for
              businesses across India and
              global markets.
            </p>

            <div
              className="rr-footer-socials"
              aria-label="RR RootRise social media links"
            >
              {footerSocialLinks.map(
                (social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rr-footer-social"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <FooterIcon
                      name={social.id}
                      size={17}
                    />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* COMPANY */}

          <div className="rr-footer-column">
            <h2 className="rr-footer-title">
              Company
            </h2>

            <nav
              className="rr-footer-company-links"
              aria-label="Company navigation"
            >
              {footerCompanyLinks.map(
                (item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="rr-footer-simple-link"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* SERVICES */}

          <div className="rr-footer-column">
            <h2 className="rr-footer-title">
              Services
            </h2>

            <nav
              className="rr-footer-services"
              aria-label="RR RootRise services"
            >
              {services.map(
                (service) => (
                  <Link
                    key={service.id}
                    to={`/services#${service.id}`}
                    className="rr-footer-service"
                  >
                    <span className="rr-footer-small-icon">
                      <FooterIcon
                        name={getServiceIcon(
                          service.id,
                        )}
                        size={16}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span>
                      {service.title}
                    </span>
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* CONTACT */}

          <div className="rr-footer-column rr-footer-contact-column">
            <h2 className="rr-footer-title">
              Contact
            </h2>

            <div className="rr-footer-contact-list">

              {/* EMAIL */}

              <div className="rr-footer-contact-row">
                <span className="rr-footer-contact-icon">
                  <FooterIcon
                    name="mail"
                    size={17}
                  />
                </span>

                <div className="rr-footer-contact-copy">
                  <span className="rr-footer-contact-label">
                    Email
                  </span>

                  <a
                    href={company.emailHref}
                    className="rr-footer-contact-value"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              {/* PHONE */}

              <div className="rr-footer-contact-row">
                <span className="rr-footer-contact-icon">
                  <FooterIcon
                    name="phone"
                    size={17}
                  />
                </span>

                <div className="rr-footer-contact-copy">
                  <span className="rr-footer-contact-label">
                    Phone
                  </span>

                  <a
                    href={company.phoneHref}
                    className="rr-footer-contact-value"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              {/* LOCATION */}

              <div className="rr-footer-contact-row rr-footer-address-row">
                <span className="rr-footer-contact-icon">
                  <FooterIcon
                    name="location"
                    size={17}
                  />
                </span>

                <div className="rr-footer-contact-copy">
                  <span className="rr-footer-contact-label">
                    Location
                  </span>

                  <a
                    href={
                      company.mapHref ||
                      "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rr-footer-contact-value rr-footer-address"
                  >
                    {footerAddress}
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}

              <div className="rr-footer-contact-row">
                <span className="rr-footer-contact-icon">
                  <FooterIcon
                    name="whatsapp"
                    size={17}
                    strokeWidth={1.65}
                  />
                </span>

                <div className="rr-footer-contact-copy">
                  <span className="rr-footer-contact-label">
                    WhatsApp
                  </span>

                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rr-footer-contact-value rr-footer-whatsapp"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="rr-footer-bottom">
          <p>
            © {company.startedYear}{" "}
            {company.name}. All rights
            reserved.
          </p>

          <nav
            className="rr-footer-legal"
            aria-label="Legal links"
          >
            {legalLinks.map(
              (item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>

      <style>{`

        .rr-footer {
          width: 100%;
          margin: 0;
          padding: 0;

          color: #ffffff;

          background:
            linear-gradient(
              125deg,
              #020f19 0%,
              #031522 55%,
              #04232c 100%
            );
        }


        .rr-footer-container {
          width: 92%;
          max-width: 1520px;

          margin: 0 auto;

          padding:
            30px 0
            14px;
        }


        .rr-footer-grid {
          display: grid;

          grid-template-columns:
            minmax(250px, 1.15fr)
            minmax(135px, 0.55fr)
            minmax(300px, 1.12fr)
            minmax(340px, 1.22fr);

          align-items: start;

          gap:
            24px
            clamp(
              30px,
              4vw,
              64px
            );
        }


        .rr-footer-brand {
          min-width: 0;
        }


        .rr-footer-logo-link {
          display: inline-flex;

          margin-bottom: 11px;
        }


        .rr-footer-logo {
          display: block;

          width: 51px;
          height: 51px;

          object-fit: contain;
        }


        .rr-footer-tagline {
          width: fit-content;

          margin:
            0 0
            10px;

          color: transparent;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00DCB7 38%,
              #00EED8 68%,
              #00FFFF 100%
            );

          -webkit-background-clip:
            text;

          background-clip:
            text;

          -webkit-text-fill-color:
            transparent;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 16px;
          font-weight: 800;
          line-height: 1.35;
        }


        .rr-footer-description {
          max-width: 365px;

          margin:
            0 0
            15px;

          color: #b0cad6;

          font-size: 14px;
          line-height: 1.65;
        }


        .rr-footer-socials {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }


        .rr-footer-social {
          display: grid;

          place-items: center;

          width: 37px;
          height: 37px;

          color: #9dbbc9;

          border:
            1px solid
            rgba(
              0,
              255,
              255,
              0.14
            );

          border-radius: 7px;

          background:
            rgba(
              4,
              29,
              40,
              0.75
            );

          text-decoration: none;

          transition:
            .2s ease;
        }


        .rr-footer-social:hover {
          color: #00FFFF;

          border-color:
            rgba(
              0,
              255,
              255,
              0.42
            );

          background:
            linear-gradient(
              135deg,
              rgba(
                0,
                204,
                153,
                0.13
              ),
              rgba(
                0,
                255,
                255,
                0.10
              )
            );

          transform:
            translateY(-2px);
        }


        .rr-footer-column {
          min-width: 0;
        }


        .rr-footer-title {
          margin:
            2px 0
            14px;

          color: #ffffff;

          font-family:
            "Manrope",
            sans-serif;

          font-size: 15px;
          font-weight: 800;
          line-height: 1.3;
        }


        .rr-footer-company-links {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 10px;
        }


        .rr-footer-simple-link {
          color: #aec9d7;

          font-size: 14px;

          line-height: 1.45;

          text-decoration: none;

          transition:
            color .2s ease;
        }


        .rr-footer-simple-link:hover {
          color: #00ECDD;
        }


        .rr-footer-services {
          display: flex;

          flex-direction: column;

          gap: 6px;
        }


        .rr-footer-service {
          display: grid;

          grid-template-columns:
            32px
            minmax(
              0,
              1fr
            );

          align-items: center;

          gap: 9px;

          min-height: 34px;

          color: #b7d0dc;

          font-size: 13.5px;

          line-height: 1.35;

          text-decoration: none;

          transition:
            color .2s ease;
        }


        .rr-footer-small-icon {
          display: grid;

          place-items: center;

          width: 32px;
          height: 32px;

          color: #00E9D5;

          border:
            1px solid
            rgba(
              0,
              255,
              255,
              0.16
            );

          border-radius: 7px;

          background:
            linear-gradient(
              135deg,
              rgba(
                0,
                204,
                153,
                0.11
              ),
              rgba(
                0,
                255,
                255,
                0.08
              )
            );

          transition:
            .2s ease;
        }


        .rr-footer-service:hover {
          color: #ffffff;
        }


        .rr-footer-service:hover
        .rr-footer-small-icon {
          color: #00FFFF;

          border-color:
            rgba(
              0,
              255,
              255,
              .38
            );
        }


        .rr-footer-contact-list {
          display: flex;

          flex-direction: column;

          gap: 10px;
        }


        .rr-footer-contact-row {
          display: grid;

          grid-template-columns:
            36px
            minmax(
              0,
              1fr
            );

          align-items: start;

          gap: 10px;

          width: 100%;
        }


        .rr-footer-contact-icon {
          display: grid;

          place-items: center;

          width: 36px;
          height: 36px;

          color: #00EAD6;

          border:
            1px solid
            rgba(
              0,
              255,
              255,
              .16
            );

          border-radius: 8px;

          background:
            linear-gradient(
              135deg,
              rgba(
                0,
                204,
                153,
                .12
              ),
              rgba(
                0,
                255,
                255,
                .07
              )
            );
        }


        .rr-footer-contact-copy {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 3px;

          min-width: 0;

          padding-top: 1px;
        }


        .rr-footer-contact-label {
          color: #749aae;

          font-size: 10px;

          font-weight: 750;

          line-height: 1.25;

          text-transform: uppercase;

          letter-spacing: .065em;
        }


        .rr-footer-contact-value {
          display: block;

          width: 100%;

          color: #bad2dd;

          font-size: 13.2px;

          line-height: 1.48;

          text-decoration: none;

          white-space: normal;

          overflow: visible;

          overflow-wrap: anywhere;

          word-break: normal;

          transition:
            color .2s ease;
        }


        .rr-footer-contact-value:hover {
          color: #00EFE2;
        }


        .rr-footer-address-row {
          min-height: auto;
        }


        .rr-footer-address {
          display: block !important;

          max-width: 330px;

          height: auto !important;

          max-height: none !important;

          margin: 0 !important;

          padding: 0 !important;

          opacity: 1 !important;

          visibility: visible !important;

          overflow: visible !important;

          color: #bad2dd !important;

          white-space: normal !important;

          text-overflow: unset !important;

          -webkit-line-clamp: unset !important;
        }


        .rr-footer-whatsapp {
          color: #00ECDD;

          font-weight: 700;
        }


        .rr-footer-bottom {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 20px;

          margin-top: 20px;

          padding-top: 14px;

          border-top:
            1px solid
            rgba(
              140,
              190,
              210,
              .14
            );
        }


        .rr-footer-bottom p {
          margin: 0;

          color: #789bae;

          font-size: 12px;

          line-height: 1.5;
        }


        .rr-footer-legal {
          display: flex;

          align-items: center;

          gap: 18px;

          padding-right: 150px;
        }


        .rr-footer-legal a {
          color: #789bae;

          font-size: 12px;

          line-height: 1.5;

          text-decoration: none;

          transition:
            color .2s ease;
        }


        .rr-footer-legal a:hover {
          color: #00ECDD;
        }


        @media (
          max-width: 1180px
        ) {

          .rr-footer-grid {
            grid-template-columns:
              1fr
              .6fr
              1fr;

            gap:
              28px
              34px;
          }


          .rr-footer-contact-column {
            grid-column:
              1 / -1;
          }


          .rr-footer-contact-list {
            display: grid;

            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );

            gap:
              13px
              30px;
          }


          .rr-footer-address {
            max-width: none;
          }
        }


        @media (
          max-width: 820px
        ) {

          .rr-footer-container {
            width: 90%;

            padding:
              26px 0
              14px;
          }


          .rr-footer-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );

            gap:
              26px
              28px;
          }


          .rr-footer-brand {
            grid-column:
              1 / -1;
          }


          .rr-footer-description {
            max-width: 560px;
          }


          .rr-footer-contact-column {
            grid-column:
              1 / -1;
          }


          .rr-footer-contact-list {
            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );
          }


          .rr-footer-bottom {
            align-items: flex-start;
          }


          .rr-footer-legal {
            padding-right: 0;
          }
        }


        @media (
          max-width: 600px
        ) {

          .rr-footer-container {
            width:
              calc(
                100% - 30px
              );

            padding:
              22px 0
              14px;
          }


          .rr-footer-grid {
            grid-template-columns:
              1fr;

            gap: 22px;
          }


          .rr-footer-brand,
          .rr-footer-contact-column {
            grid-column: auto;
          }


          .rr-footer-logo {
            width: 47px;
            height: 47px;
          }


          .rr-footer-tagline {
            font-size: 15px;
          }


          .rr-footer-description {
            max-width: 100%;

            margin-bottom: 14px;

            font-size: 13.8px;
          }


          .rr-footer-title {
            margin-bottom: 12px;
          }


          .rr-footer-services {
            gap: 5px;
          }


          .rr-footer-contact-list {
            grid-template-columns:
              1fr;

            gap: 10px;
          }


          .rr-footer-address {
            max-width: 100%;
          }


          .rr-footer-bottom {
            flex-direction: column;

            align-items: flex-start;

            gap: 8px;

            margin-top: 19px;

            padding-top: 13px;
          }


          .rr-footer-legal {
            flex-wrap: wrap;

            gap:
              8px
              15px;

            padding-right: 0;
          }
        }


        @media (
          max-width: 390px
        ) {

          .rr-footer-container {
            width:
              calc(
                100% - 24px
              );
          }


          .rr-footer-service {
            font-size: 13px;
          }


          .rr-footer-contact-value {
            font-size: 12.8px;
          }
        }


        @media (
          prefers-reduced-motion: reduce
        ) {

          .rr-footer-social,
          .rr-footer-service,
          .rr-footer-small-icon,
          .rr-footer-simple-link,
          .rr-footer-contact-value,
          .rr-footer-legal a {
            transition: none !important;
          }


          .rr-footer-social:hover {
            transform: none;
          }
        }

      `}</style>
    </footer>
  );
}

export default Footer;