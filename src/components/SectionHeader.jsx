/* =========================================================
   RR ROOTRISE DIGITAL INNOVATIONS
   REUSABLE SECTION HEADER
   ========================================================= */

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
  titleAs = "h2",
}) {
  const TitleTag = titleAs;

  const wrapperClasses = [
    "section-header-component",
    align === "center" ? "is-centered" : "",
    theme === "dark" ? "is-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {eyebrow ? (
        <span className="section-eyebrow">{eyebrow}</span>
      ) : null}

      {title ? (
        <TitleTag className="section-title">
          {title}
        </TitleTag>
      ) : null}

      {description ? (
        <p className="section-description">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;   