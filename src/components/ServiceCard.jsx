import { Link } from "react-router-dom";
import SiteIcon from "./SiteIcon";

function ServiceCard({ service, className = "" }) {
  if (!service) {
    return null;
  }

  const {
    id,
    number,
    icon,
    title,
    summary,
  } = service;

  const cardClasses = [
    "service-card",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      id={`service-card-${id}`}
      className={cardClasses}
    >
      <div className="service-card-top">
        <div
          className="service-card-icon"
          aria-hidden="true"
        >
          <SiteIcon name={icon} size={27} />
        </div>

        <span className="service-card-number">
          {number}
        </span>
      </div>

      <div className="service-card-content">
        <h3 className="service-card-title">
          {title}
        </h3>

        <p className="service-card-description">
          {summary}
        </p>
      </div>

      <div className="service-card-link">
        <Link
          to={`/services#${id}`}
          className="text-link"
          aria-label={`Learn more about ${title}`}
        >
          <span>Learn More</span>

          <SiteIcon
            name="arrow-right"
            size={18}
            strokeWidth={2}
          />
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;