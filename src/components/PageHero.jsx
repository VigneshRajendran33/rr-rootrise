import { Link } from "react-router-dom";
import SiteIcon from "./SiteIcon";

function HeroAction({
  action,
  variant = "primary",
}) {
  if (!action?.label) {
    return null;
  }

  const className =
    variant === "primary"
      ? "button button-primary"
      : "button button-dark-outline";

  const content = (
    <>
      <span>{action.label}</span>

      <SiteIcon
        name="arrow-right"
        size={18}
        strokeWidth={2}
        className="button-icon"
      />
    </>
  );

  if (action.href) {
    return (
      <a
        href={action.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  if (action.path) {
    return (
      <Link
        to={action.path}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return null;
}

function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className = "",
}) {
  const heroClasses = [
    "page-hero",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={heroClasses}>
      <div className="container">
        <div className="page-hero-inner">
          {eyebrow ? (
            <span className="page-hero-eyebrow">
              {eyebrow}
            </span>
          ) : null}

          {title ? (
            <h1 className="page-hero-title">
              {title}
            </h1>
          ) : null}

          {description ? (
            <p className="page-hero-description">
              {description}
            </p>
          ) : null}

          {primaryAction || secondaryAction ? (
            <div className="page-hero-actions">
              <HeroAction
                action={primaryAction}
                variant="primary"
              />

              <HeroAction
                action={secondaryAction}
                variant="secondary"
              />
            </div>
          ) : null}
        </div>
      </div>

      <div
        className="page-hero-accent"
        aria-hidden="true"
      />
    </section>
  );
}

export default PageHero;