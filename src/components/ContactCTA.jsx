import { Link } from "react-router-dom";

import SiteIcon from "./SiteIcon";

import {
  callToActions,
  company,
} from "../data/siteData";

function ContactCTA({
  eyebrow = "Start a Conversation",
  title = "Ready to build a stronger digital foundation?",
  description = "Share your business goals with RR RootRise. We will help you identify the right digital solution for your requirements.",
}) {
  return (
    <section
      className="section section-light"
      aria-labelledby="contact-cta-title"
    >
      <div className="container">
        <div className="contact-cta">
          <div className="contact-cta-inner">
            <div className="contact-cta-content">
              <span className="contact-cta-eyebrow">
                {eyebrow}
              </span>

              <h2
                id="contact-cta-title"
                className="contact-cta-title"
              >
                {title}
              </h2>

              <p className="contact-cta-description">
                {description}
              </p>
            </div>

            <div className="contact-cta-actions">
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

              <a
                href={company.whatsappHref}
                className="button button-dark-outline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss your project with RR RootRise on WhatsApp"
              >
                <span>Chat on WhatsApp</span>

                <SiteIcon
                  name="whatsapp"
                  size={19}
                  strokeWidth={1.8}
                  className="button-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;