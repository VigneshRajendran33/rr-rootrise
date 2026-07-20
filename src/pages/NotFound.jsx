import { Link } from "react-router-dom";

import SiteIcon from "../components/SiteIcon";

function NotFound() {
  return (
    <section
      className="not-found-page"
      aria-labelledby="not-found-title"
    >
      <div className="not-found-content">
        <span
          className="not-found-code"
          aria-hidden="true"
        >
          404
        </span>

        <span className="page-hero-eyebrow">
          Page Not Found
        </span>

        <h1
          id="not-found-title"
          className="not-found-title"
        >
          This digital path has no roots yet.
        </h1>

        <p className="not-found-description">
          The page you are looking for may have been
          moved, removed or the address may be
          incorrect. Return to the website or contact
          RR RootRise for assistance.
        </p>

        <div className="not-found-actions">
          <Link
            to="/"
            className="button button-primary"
          >
            <span>Go to Home</span>

            <SiteIcon
              name="arrow-right"
              size={18}
              strokeWidth={2}
              className="button-icon"
            />
          </Link>

          <Link
            to="/contact"
            className="button button-dark-outline"
          >
            <span>Contact RR RootRise</span>

            <SiteIcon
              name="message"
              size={18}
              strokeWidth={1.9}
              className="button-icon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;