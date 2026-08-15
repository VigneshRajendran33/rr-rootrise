import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import SiteIcon from "./SiteIcon";

import {
  brandAssets,
  navigation,
} from "../data/siteData";

function Header() {
  const location = useLocation();

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "";

    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      escape,
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        escape,
      );
    };
  }, [open]);

  return (
    <>
      <header className="rr-main-header">
        <div className="rr-header-container">
          <Link
            to="/"
            className="rr-brand"
            onClick={() =>
              setOpen(false)
            }
          >
            <img
              src={brandAssets.logo}
              alt="RR RootRise"
            />

            <span>
              <strong>
                <b>RR</b> RootRise
              </strong>

              <small>
                Digital Innovations
              </small>
            </span>
          </Link>

          <nav className="rr-desktop-nav">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "rr-nav-active"
                    : ""
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="rr-header-button"
          >
            Start a Project

            <SiteIcon
              name="arrow-right"
              size={17}
              strokeWidth={2}
            />
          </Link>

          <button
            type="button"
            className={`rr-mobile-toggle ${
              open ? "is-open" : ""
            }`}
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-expanded={open}
            aria-label={
              open
                ? "Close menu"
                : "Open menu"
            }
          >
            {open ? (
              <SiteIcon
                name="close"
                size={25}
                strokeWidth={2}
              />
            ) : (
              <span className="rr-hamburger">
                <i />
                <i />
                <i />
              </span>
            )}
          </button>
        </div>
      </header>

      <div
        className={`rr-mobile-overlay ${
          open
            ? "rr-mobile-open"
            : ""
        }`}
        onClick={(event) => {
          if (
            event.target ===
            event.currentTarget
          ) {
            setOpen(false);
          }
        }}
      >
        <aside className="rr-mobile-menu">
          <div className="rr-mobile-menu-top">
            <span className="rr-mobile-title">
              <strong>
                <b>RR</b> RootRise
              </strong>

              <small>
                Digital Innovations
              </small>
            </span>

            <button
              type="button"
              onClick={() =>
                setOpen(false)
              }
              aria-label="Close menu"
            >
              <SiteIcon
                name="close"
                size={25}
                strokeWidth={2}
              />
            </button>
          </div>

          <nav>
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                onClick={() =>
                  setOpen(false)
                }
              >
                {item.label}

                <SiteIcon
                  name="arrow-right"
                  size={18}
                  strokeWidth={1.8}
                />
              </NavLink>
            ))}
          </nav>

          <div className="rr-mobile-menu-actions">
            <Link
              to="/contact"
              onClick={() =>
                setOpen(false)
              }
            >
              Start a Project

              <SiteIcon
                name="arrow-right"
                size={17}
              />
            </Link>

            <a
              href="https://wa.me/917200334187"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiteIcon
                name="whatsapp"
                size={18}
              />

              WhatsApp
            </a>
          </div>
        </aside>
      </div>

      <style>{`
        .rr-main-header {
          position: sticky;
          top: 0;

          z-index: 9999;

          height: 78px;

          border-bottom:
            1px solid
            rgba(39,207,226,.08);

          background:
            rgba(2,14,24,.985);

          backdrop-filter:
            blur(18px);
        }

        .rr-header-container {
          display: flex;
          align-items: center;

          gap: 30px;

          width:
            min(
              calc(100% - 48px),
              1460px
            );

          height: 100%;

          margin-inline: auto;
        }

        .rr-brand {
          display: flex;
          align-items: center;

          gap: 11px;

          text-decoration: none;
        }

        .rr-brand img {
          width: 48px;
          height: 48px;

          object-fit: cover;

          border-radius: 8px;
        }

        .rr-brand > span,
        .rr-mobile-title {
          display: flex;
          flex-direction: column;

          gap: 4px;
        }

        .rr-brand strong,
        .rr-mobile-title strong {
          font-size: 18px;

          line-height: 1;

          color: #ffffff;
        }

        /* RR CYAN */

        .rr-brand strong b,
        .rr-mobile-title strong b {
          color: #31d4e2;
        }

        .rr-brand small,
        .rr-mobile-title small {
          font-size: 9px;
          font-weight: 750;

          letter-spacing: .18em;
          text-transform: uppercase;

          color: #32cec8;
        }

        .rr-desktop-nav {
          display: flex;
          align-items: center;

          gap:
            clamp(23px,2.6vw,39px);

          margin-left: auto;
        }

        .rr-desktop-nav a {
          position: relative;

          padding:
            15px 0;

          font-size: 14px;
          font-weight: 650;

          color: #bac7ce;

          text-decoration: none;
        }

        .rr-desktop-nav a::after {
          position: absolute;

          bottom: 6px;
          left: 50%;

          width: 0;
          height: 2px;

          content: "";

          background:
            linear-gradient(
              90deg,
              #16bfa9,
              #27cfe2
            );

          transform:
            translateX(-50%);

          transition:
            width .18s ease;
        }

        .rr-desktop-nav a:hover,
        .rr-desktop-nav
        .rr-nav-active {
          color: #ffffff;
        }

        .rr-desktop-nav
        a:hover::after,
        .rr-desktop-nav
        .rr-nav-active::after {
          width: 100%;
        }

        .rr-header-button {
          display: inline-flex;
          align-items: center;

          gap: 10px;

          min-height: 46px;

          padding: 10px 19px;

          border-radius: 9px;

          font-size: 13px;
          font-weight: 750;

          color: #02151f;

          text-decoration: none;

          background:
            linear-gradient(
              135deg,
              #20c6ab,
              #31d5df,
              #28c9e8
            );
        }

        .rr-mobile-toggle {
          display: none;

          place-items: center;

          width: 44px;
          height: 44px;

          margin-left: auto;

          padding: 0;

          border:
            1px solid
            rgba(39,207,226,.17);

          border-radius: 9px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.04),
              rgba(39,207,226,.04)
            );

          cursor: pointer;
        }

        .rr-mobile-toggle.is-open {
          color: #43dad8;

          border-color:
            rgba(39,207,226,.34);
        }

        .rr-hamburger {
          display: flex;
          flex-direction: column;

          gap: 5px;

          width: 20px;
        }

        .rr-hamburger i {
          width: 100%;
          height: 2px;

          border-radius: 99px;

          background: #ffffff;
        }

        .rr-hamburger
        i:nth-child(2) {
          width: 75%;
        }

        .rr-mobile-overlay {
          position: fixed;
          inset: 0;

          z-index: 9998;

          visibility: hidden;

          opacity: 0;

          pointer-events: none;

          background:
            rgba(0,7,14,.70);

          backdrop-filter:
            blur(8px);

          transition:
            opacity .2s ease,
            visibility .2s ease;
        }

        .rr-mobile-open {
          visibility: visible;

          opacity: 1;

          pointer-events: auto;
        }

        .rr-mobile-menu {
          position: absolute;

          top: 0;
          right: 0;

          width:
            min(100%,430px);

          height: 100%;

          overflow-y: auto;

          padding: 22px;

          background:
            radial-gradient(
              circle at 95% 5%,
              rgba(39,207,226,.08),
              transparent 28%
            ),
            linear-gradient(
              145deg,
              #020f1a,
              #031724
            );

          transform:
            translateX(100%);

          transition:
            transform .23s ease;
        }

        .rr-mobile-open
        .rr-mobile-menu {
          transform:
            translateX(0);
        }

        .rr-mobile-menu-top {
          display: flex;
          align-items: center;
          justify-content:
            space-between;

          gap: 20px;

          padding-bottom: 21px;

          border-bottom:
            1px solid
            rgba(39,207,226,.10);
        }

        .rr-mobile-menu-top button {
          display: grid;
          place-items: center;

          width: 43px;
          height: 43px;

          border:
            1px solid
            rgba(39,207,226,.22);

          border-radius: 9px;

          color: #45dada;

          background:
            rgba(39,207,226,.035);

          cursor: pointer;
        }

        .rr-mobile-menu nav {
          display: flex;
          flex-direction: column;

          margin-top: 10px;
        }

        .rr-mobile-menu nav a {
          display: flex;
          align-items: center;
          justify-content:
            space-between;

          min-height: 62px;

          border-bottom:
            1px solid
            rgba(255,255,255,.07);

          font-size: 17px;
          font-weight: 650;

          color: #d8e4e9;

          text-decoration: none;
        }

        .rr-mobile-menu-actions {
          display: grid;

          gap: 10px;

          margin-top: 23px;
        }

        .rr-mobile-menu-actions a {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 49px;

          border:
            1px solid
            rgba(39,207,226,.14);

          border-radius: 9px;

          font-size: 13px;
          font-weight: 750;

          color: #ffffff;

          text-decoration: none;

          background:
            linear-gradient(
              135deg,
              rgba(22,191,169,.055),
              rgba(39,207,226,.045)
            );
        }

        .rr-mobile-menu-actions
        a:first-child {
          border: 0;

          color: #02151f;

          background:
            linear-gradient(
              135deg,
              #20c6ab,
              #31d5df,
              #28c9e8
            );
        }

        @media (max-width: 1050px) {
          .rr-brand > span {
            display: none;
          }
        }

        @media (max-width: 900px) {
          .rr-main-header {
            height: 70px;
          }

          .rr-header-container {
            width:
              calc(100% - 28px);
          }

          .rr-brand > span {
            display: flex;
          }

          .rr-brand img {
            width: 42px;
            height: 42px;
          }

          .rr-brand strong {
            font-size: 15px;
          }

          .rr-brand small {
            font-size: 7px;
          }

          .rr-desktop-nav,
          .rr-header-button {
            display: none;
          }

          .rr-mobile-toggle {
            display: grid;
          }
        }

        @media (max-width: 390px) {
          .rr-header-container {
            width:
              calc(100% - 22px);
          }

          .rr-brand {
            gap: 8px;
          }

          .rr-brand strong {
            font-size: 14px;
          }

          .rr-brand small {
            font-size: 6.5px;
          }

          .rr-mobile-menu {
            width: 100%;

            padding: 19px;
          }
        }
      `}</style>
    </>
  );
}

export default Header;