import { useState } from "react";
import { Link } from "react-router-dom";

import SiteIcon from "./SiteIcon";

import {
  brandAssets,
  company,
  footerCompanyLinks,
  footerServiceLinks,
  legalLinks,
  socialLinks,
} from "../data/siteData";

function Footer() {
  const [logoFailed, setLogoFailed] =
    useState(false);

  const currentYear = new Date().getFullYear();

  const copyrightYear =
    currentYear > company.startedYear
      ? `${company.startedYear}–${currentYear}`
      : company.startedYear;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link
              to="/"
              aria-label={`${company.shortName} home`}
            >
              {!logoFailed ? (
                <img
                  src={brandAssets.logo}
                  alt={company.name}
                  className="footer-logo"
                  onError={() => {
                    setLogoFailed(true);
                  }}
                />
              ) : (
                <span className="footer-brand-fallback">
                  <span
                    className="header-brand-symbol"
                    aria-hidden="true"
                  >
                    <SiteIcon
                      name="growth"
                      size={25}
                      strokeWidth={2}
                    />
                  </span>

                  <span className="footer-brand-name">
                    {company.shortName}
                  </span>
                </span>
              )}
            </Link>

            <p className="footer-tagline">
              {company.tagline}
            </p>

            <p className="footer-description">
              {company.description}
            </p>

            <div
              className="social-links footer-socials"
              aria-label="RR RootRise social media"
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

          <div className="footer-column">
            <h2 className="footer-column-title">
              Company
            </h2>

            <nav
              className="footer-links"
              aria-label="Footer company links"
            >
              {footerCompanyLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="footer-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h2 className="footer-column-title">
              Services
            </h2>

            <nav
              className="footer-links"
              aria-label="Footer service links"
            >
              {footerServiceLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="footer-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h2 className="footer-column-title">
              Contact
            </h2>

            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="footer-contact-label">
                  Email
                </span>

                <a
                  href={company.emailHref}
                  className="footer-contact-value"
                >
                  {company.email}
                </a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-label">
                  Location
                </span>

                <address className="footer-contact-value">
                  {company.location}
                </address>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-label">
                  Project Enquiries
                </span>

                <a
                  href={company.whatsappHref}
                  className="footer-contact-value"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-label">
                  Service Area
                </span>

                <span className="footer-contact-value">
                  India & Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {copyrightYear} {company.name}. All
            rights reserved.
          </p>

          <nav
            className="footer-legal"
            aria-label="Legal links"
          >
            {legalLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="footer-legal-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;