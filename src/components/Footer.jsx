import { Link } from "react-router-dom";

import SiteIcon from "./SiteIcon";

const socials = [
  {
    name: "LinkedIn",
    href:
      "https://www.linkedin.com/company/rr-rootrise-digital-innovations/?viewAsMember=true",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href:
      "https://www.instagram.com/rr_rootrise/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href:
      "https://www.facebook.com/profile.php?id=61592142296827&sk=about",
    icon: "facebook",
  },
  {
    name: "Threads",
    href:
      "https://www.threads.com/@rr_rootrise",
    icon: "threads",
  },
  {
    name: "X",
    href:
      "https://x.com/rrrootrise_",
    icon: "x",
  },
];

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2A11 11 0 0 1 12 6.1c1 0 2 .1 2.9.4 2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.1v3.1c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="rr-footer">
      <div className="rr-footer-inner">
        <div className="rr-footer-brand">
          <div className="rr-footer-logo-row">
            <img
              src="/images/rr-rootrise-full-logo.png"
              alt="RR RootRise Digital Innovations"
            />
          </div>

          <p className="rr-footer-tagline">
            Strong Roots. Digital Growth.
          </p>

          <p className="rr-footer-summary">
            Modern software and digital
            solutions engineered for
            businesses across India and
            global markets.
          </p>

          <div className="rr-footer-socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                <SiteIcon
                  name={social.icon}
                  size={18}
                  strokeWidth={1.8}
                />
              </a>
            ))}

            <a
              href="https://github.com/rrrootrisedigitalinnovations-cpu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>

        <div className="rr-footer-column">
          <h3>Company</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/industries">
            Industries
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>

        <div className="rr-footer-column">
          <h3>Services</h3>

          <Link to="/services">
            Website Development
          </Link>

          <Link to="/services">
            Mobile App Development
          </Link>

          <Link to="/services">
            E-Commerce Development
          </Link>

          <Link to="/services">
            Custom Software
          </Link>

          <Link to="/services">
            UI/UX Design
          </Link>

          <Link to="/services">
            SEO & Digital Growth
          </Link>
        </div>

        <div className="rr-footer-column rr-footer-contact">
          <h3>Contact</h3>

          <span>Email</span>

          <a href="mailto:info@rrrootrise.com">
            info@rrrootrise.com
          </a>

          <span>Phone</span>

          <a href="tel:+917200334187">
            +91 72003 34187
          </a>

          <span>Location</span>

          <p>
            RR RootRise Digital Innovations,
            2, Kalapatti Main Rd,
            Periyar Nagar, Nehru Nagar West,
            Coimbatore, Tamil Nadu 641014,
            India
          </p>

          <a
            href="https://wa.me/917200334187"
            target="_blank"
            rel="noopener noreferrer"
            className="rr-footer-whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="rr-footer-bottom">
        <p>
          © 2026 RR RootRise Digital
          Innovations. All rights reserved.
        </p>

        <div>
          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms of Service
          </Link>
        </div>
      </div>

      <style>{`
        .rr-footer {
          padding:
            58px 0 22px;

          color: #c6d3da;

          background:
            linear-gradient(
              135deg,
              #020e18,
              #031724
            );

          border-top:
            1px solid
            rgba(39,207,226,.09);
        }

        .rr-footer-inner {
          display: grid;

          grid-template-columns:
            1.25fr .65fr .9fr 1fr;

          gap:
            clamp(35px,5vw,80px);

          width:
            min(
              calc(100% - 48px),
              1420px
            );

          margin-inline: auto;
        }

        .rr-footer-logo-row img {
          display: block;

          width: 48px;
          height: 48px;

          object-fit: cover;

          border-radius: 8px;
        }

        .rr-footer-tagline {
          margin:
            18px 0 0;

          font-size: 16px;
          font-weight: 750;

          color: #37d5c6;
        }

        .rr-footer-summary {
          max-width: 390px;

          margin:
            17px 0 0;

          font-size: 15px;
          line-height: 1.7;

          color: #9eb0bb;
        }

        .rr-footer-socials {
          display: flex;
          flex-wrap: wrap;

          gap: 9px;

          margin-top: 24px;
        }

        .rr-footer-socials a {
          display: grid;
          place-items: center;

          width: 40px;
          height: 40px;

          border:
            1px solid
            rgba(39,207,226,.13);

          border-radius: 9px;

          color: #a7bac4;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.035),
              rgba(39,207,226,.035)
            );

          transition:
            color .18s ease,
            border-color .18s ease,
            transform .18s ease,
            background .18s ease;
        }

        .rr-footer-socials a:hover {
          color: #4edbd8;

          border-color:
            rgba(39,207,226,.35);

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.09),
              rgba(39,207,226,.08)
            );

          transform:
            translateY(-2px);
        }

        .rr-footer-column {
          display: flex;
          flex-direction: column;

          align-items: flex-start;

          gap: 13px;
        }

        .rr-footer-column h3 {
          margin:
            0 0 8px;

          font-size: 16px;

          color: #ffffff;
        }

        .rr-footer-column > a {
          font-size: 14px;

          color: #a7bac4;

          text-decoration: none;
        }

        .rr-footer-column > a:hover {
          color: #4edbd8;
        }

        .rr-footer-contact span {
          margin-top: 4px;

          font-size: 11px;
          font-weight: 700;

          color: #718c9a;
        }

        .rr-footer-contact p {
          max-width: 300px;

          margin: 0;

          font-size: 14px;
          line-height: 1.62;

          color: #bac8d0;
        }

        .rr-footer-whatsapp {
          color: #46d6c8 !important;

          font-weight: 750;
        }

        .rr-footer-bottom {
          display: flex;
          align-items: center;
          justify-content:
            space-between;

          gap: 30px;

          width:
            min(
              calc(100% - 48px),
              1420px
            );

          margin:
            42px auto 0;

          padding-top: 21px;

          border-top:
            1px solid
            rgba(255,255,255,.07);
        }

        .rr-footer-bottom p {
          margin: 0;

          font-size: 13px;

          color: #849aa7;
        }

        .rr-footer-bottom > div {
          display: flex;

          gap: 24px;
        }

        .rr-footer-bottom a {
          font-size: 13px;

          color: #9cb0bb;

          text-decoration: none;
        }

        @media (max-width: 950px) {
          .rr-footer-inner {
            grid-template-columns:
              1.2fr 1fr;

            row-gap: 45px;
          }
        }

        @media (max-width: 600px) {
          .rr-footer {
            padding:
              45px 0 20px;
          }

          .rr-footer-inner,
          .rr-footer-bottom {
            width:
              calc(100% - 28px);
          }

          .rr-footer-inner {
            grid-template-columns: 1fr;

            gap: 34px;
          }

          .rr-footer-bottom {
            align-items: flex-start;
            flex-direction: column;

            gap: 15px;

            margin-top: 34px;
          }

          .rr-footer-bottom > div {
            flex-wrap: wrap;

            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;