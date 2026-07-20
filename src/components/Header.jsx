import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import SiteIcon from "./SiteIcon";

import {
  brandAssets,
  callToActions,
  company,
  navigation,
} from "../data/siteData";

function Header() {
  const location = useLocation();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [logoFailed, setLogoFailed] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isMenuOpen]);

  const headerClasses = [
    "site-header",
    isScrolled ? "is-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const mobileMenuButtonClasses = [
    "mobile-menu-button",
    isMenuOpen ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const mobileNavigationClasses = [
    "mobile-navigation",
    isMenuOpen ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const getNavLinkClass = ({
    isActive,
  }) =>
    [
      "header-nav-link",
      isActive ? "active" : "",
    ]
      .filter(Boolean)
      .join(" ");

  const getMobileNavLinkClass = ({
    isActive,
  }) =>
    [
      "mobile-nav-link",
      isActive ? "active" : "",
    ]
      .filter(Boolean)
      .join(" ");

  const toggleMobileMenu = () => {
    setIsMenuOpen((currentState) => {
      return !currentState;
    });
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={headerClasses}>
        <div className="header-inner">
          <Link
            to="/"
            className="header-brand"
            aria-label={`${company.shortName} home`}
            onClick={closeMobileMenu}
          >
            {!logoFailed ? (
             <div className="header-brand-wrapper">
  <img
    src={brandAssets.logo}
    alt={company.name}
    className="header-logo"
    onError={() => {
      setLogoFailed(true);
    }}
  />

  <div className="header-company">
    <h2>RR RootRise</h2>
    <p>Digital Innovations</p>
  </div>
</div>
            ) : (
              <span className="header-brand-fallback">
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

                <span className="header-brand-text">
                  <span className="header-brand-name">
                    {company.shortName}
                  </span>

                  <span className="header-brand-tagline">
                    {company.tagline}
                  </span>
                </span>
              </span>
            )}
          </Link>

          <nav
            className="header-nav"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={getNavLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Link
              to={callToActions.primary.path}
              className="button button-primary header-cta"
            >
              <span>
                {callToActions.primary.label}
              </span>

              <SiteIcon
                name="arrow-right"
                size={17}
                strokeWidth={2}
                className="button-icon"
              />
            </Link>
          </div>

          <button
            type="button"
            className={mobileMenuButtonClasses}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
          >
            <span
              className="mobile-menu-lines"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <nav
        id="mobile-navigation"
        className={mobileNavigationClasses}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-nav-list">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              className={
                getMobileNavLinkClass
              }
              onClick={closeMobileMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span>{item.label}</span>

              <SiteIcon
                name="chevron-right"
                size={20}
                strokeWidth={2}
              />
            </NavLink>
          ))}
        </div>

        <div className="mobile-nav-actions">
          <Link
            to={callToActions.primary.path}
            className="button button-primary"
            onClick={closeMobileMenu}
            tabIndex={isMenuOpen ? 0 : -1}
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
            onClick={closeMobileMenu}
            tabIndex={isMenuOpen ? 0 : -1}
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
      </nav>
    </>
  );
}

export default Header;