/* =========================================================
   RR ROOTRISE DIGITAL INNOVATIONS
   CENTRAL SVG ICON COMPONENT
   ========================================================= */

function SiteIcon({
  name,
  size = 24,
  strokeWidth = 1.8,
  className = "",
  title = "",
}) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    focusable: "false",
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
  };

  const renderIcon = () => {
    switch (name) {
      /* =====================================================
         GENERAL NAVIGATION
         ===================================================== */

      case "arrow-right":
        return (
          <>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </>
        );

      case "arrow-left":
        return (
          <>
            <path d="M19 12H5" />
            <path d="m11 18-6-6 6-6" />
          </>
        );

      case "arrow-up":
        return (
          <>
            <path d="M12 19V5" />
            <path d="m6 11 6-6 6 6" />
          </>
        );

      case "arrow-up-right":
        return (
          <>
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </>
        );

      case "chevron-right":
        return <path d="m9 18 6-6-6-6" />;

      case "chevron-down":
        return <path d="m6 9 6 6 6-6" />;

      case "close":
        return (
          <>
            <path d="m6 6 12 12" />
            <path d="M18 6 6 18" />
          </>
        );

      case "check":
        return <path d="m5 12 4 4L19 6" />;

      case "check-circle":
        return (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 2.5 2.5L16.5 8" />
          </>
        );

      case "external-link":
        return (
          <>
            <path d="M14 5h5v5" />
            <path d="m10 14 9-9" />
            <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
          </>
        );

      /* =====================================================
         COMPANY AND BUSINESS
         ===================================================== */

      case "strategy":
        return (
          <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="1" />
            <path d="m16 8 3-3" />
            <path d="M16 5h3v3" />
          </>
        );

      case "design":
        return (
          <>
            <path d="M4 19.5 9.5 18 19 8.5 15.5 5 6 14.5 4 19.5Z" />
            <path d="m13.5 7 3.5 3.5" />
            <path d="M4 19.5 8 18l-2.5-2.5L4 19.5Z" />
          </>
        );

      case "development":
        return (
          <>
            <path d="m8 8-4 4 4 4" />
            <path d="m16 8 4 4-4 4" />
            <path d="m14 5-4 14" />
          </>
        );

      case "growth":
      case "marketing":
        return (
          <>
            <path d="M4 18V9" />
            <path d="M10 18V5" />
            <path d="M16 18v-7" />
            <path d="M3 18h18" />
            <path d="m14 7 3-3 3 3" />
            <path d="M17 4v7" />
          </>
        );

      case "support":
        return (
          <>
            <path d="M4 13a8 8 0 0 1 16 0" />
            <path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2" />
            <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2" />
            <path d="M17 18c0 1.1-.9 2-2 2h-3" />
          </>
        );

      case "communication":
        return (
          <>
            <path d="M5 17.5 3.5 21l4-1.5A9 9 0 1 0 5 17.5Z" />
            <path d="M8 11h8" />
            <path d="M8 14h5" />
            <path d="M8 8h6" />
          </>
        );

      case "performance":
        return (
          <>
            <path d="M4 14a8 8 0 1 1 16 0" />
            <path d="m12 14 4-5" />
            <path d="M7 17h10" />
            <circle cx="12" cy="14" r="1" />
          </>
        );

      case "scalable":
        return (
          <>
            <path d="M8 4H4v4" />
            <path d="m4 4 5 5" />
            <path d="M16 4h4v4" />
            <path d="m20 4-5 5" />
            <path d="M8 20H4v-4" />
            <path d="m4 20 5-5" />
            <path d="M16 20h4v-4" />
            <path d="m20 20-5-5" />
          </>
        );

      case "responsive":
        return (
          <>
            <rect x="3" y="4" width="14" height="11" rx="1.5" />
            <path d="M8 19h4" />
            <path d="M10 15v4" />
            <rect x="16" y="9" width="5" height="10" rx="1.2" />
          </>
        );

      case "business":
        return (
          <>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
            <path d="M10 12v2h4v-2" />
          </>
        );

      case "brand":
        return (
          <>
            <path d="M12 3 20 7v5c0 4.8-3.3 7.7-8 9-4.7-1.3-8-4.2-8-9V7l8-4Z" />
            <path d="m9 12 2 2 4-5" />
          </>
        );

      case "launch":
        return (
          <>
            <path d="M14 5c2.5-2 5-2 5-2s0 2.5-2 5l-5 5-4-4 6-4Z" />
            <path d="m8 9-3 1-2 3 5 1" />
            <path d="m12 13 1 5-3 2-1-4" />
            <path d="M5 19c1.5-3 4-3 4-3s0 2.5-3 4" />
          </>
        );

      /* =====================================================
         SERVICES
         ===================================================== */

      case "website":
        return (
          <>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 8h18" />
            <circle cx="6" cy="6" r=".6" fill="currentColor" stroke="none" />
            <circle cx="9" cy="6" r=".6" fill="currentColor" stroke="none" />
            <path d="M7 12h4" />
            <path d="M7 15h10" />
            <path d="M14 11h3v3h-3z" />
          </>
        );

      case "mobile":
        return (
          <>
            <rect x="7" y="2.5" width="10" height="19" rx="2" />
            <path d="M10 5h4" />
            <path d="M11 18.5h2" />
          </>
        );

      case "commerce":
        return (
          <>
            <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20.5 8H6" />
            <circle cx="10" cy="19" r="1.2" />
            <circle cx="17" cy="19" r="1.2" />
          </>
        );

      case "application":
        return (
          <>
            <rect x="3" y="3" width="8" height="8" rx="1.5" />
            <rect x="13" y="3" width="8" height="5" rx="1.5" />
            <rect x="13" y="10" width="8" height="11" rx="1.5" />
            <rect x="3" y="13" width="8" height="8" rx="1.5" />
          </>
        );

      case "wordpress":
        return (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M7.2 8.5h2.2" />
            <path d="m8.3 8.5 3.2 8" />
            <path d="m10.5 8.5 3.1 8" />
            <path d="m13.3 8.5 2.8 7" />
            <path d="M15.8 7.2c1.3 1.7 1 3.1.3 5" />
          </>
        );

      case "search":
        return (
          <>
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 4 4" />
            <path d="M8 11h6" />
            <path d="M11 8v6" />
          </>
        );

      /* =====================================================
         INDUSTRIES
         ===================================================== */

      case "food":
        return (
          <>
            <path d="M4 3v7a3 3 0 0 0 3 3V3" />
            <path d="M4 7h3" />
            <path d="M5.5 13v8" />
            <path d="M16 3c-2 2-3 4.5-3 7 0 2.2 1.2 3.8 3 4v7" />
            <path d="M16 3v11" />
          </>
        );

      case "education":
        return (
          <>
            <path d="m3 9 9-5 9 5-9 5-9-5Z" />
            <path d="M7 12v4c2.8 2 7.2 2 10 0v-4" />
            <path d="M21 9v6" />
          </>
        );

      case "healthcare":
        return (
          <>
            <path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
          </>
        );

      case "location":
        return (
          <>
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </>
        );

      /* =====================================================
         CONTACT
         ===================================================== */

      case "mail":
        return (
          <>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </>
        );

      case "whatsapp":
        return (
          <>
            <path d="M20.2 11.7a8.2 8.2 0 0 1-11.9 7.4L4 20.2l1.2-4.1a8.2 8.2 0 1 1 15-4.4Z" />
            <path d="M9 8.3c.3-.5.7-.5 1-.1l1 1.6c.2.4.1.7-.2 1l-.6.6c.7 1.4 1.8 2.5 3.2 3.2l.7-.7c.3-.3.6-.4 1-.2l1.5.9c.5.3.5.7.2 1.1-.5.8-1.3 1.2-2.2 1.1-3.8-.4-7-3.4-7.5-7.1-.1-.6.3-1.1.9-1.4Z" />
          </>
        );

      case "globe":
        return (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21" />
            <path d="M12 3C9.5 5.5 8.2 8.5 8.2 12S9.5 18.5 12 21" />
          </>
        );

      case "clock":
        return (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </>
        );

      case "user":
        return (
          <>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
          </>
        );

      case "building":
        return (
          <>
            <path d="M5 21V4h10v17" />
            <path d="M15 9h4v12" />
            <path d="M8 8h4" />
            <path d="M8 12h4" />
            <path d="M8 16h4" />
            <path d="M3 21h18" />
          </>
        );

      case "message":
        return (
          <>
            <path d="M4 5h16v11H9l-5 4V5Z" />
            <path d="M8 9h8" />
            <path d="M8 12h5" />
          </>
        );

      case "shield":
        return (
          <>
            <path d="M12 3 20 7v5c0 4.8-3.3 7.7-8 9-4.7-1.3-8-4.2-8-9V7l8-4Z" />
            <path d="M9 12.5 11 14l4-5" />
          </>
        );

      case "privacy":
        return (
          <>
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            <circle cx="12" cy="15" r="1" />
          </>
        );

      /* =====================================================
         SOCIAL MEDIA ICONS
         ===================================================== */

      case "instagram":
        return (
          <>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
              cx="17.4"
              cy="6.6"
              r="0.8"
              fill="currentColor"
              stroke="none"
            />
          </>
        );

      case "facebook":
        return (
          <>
            <path d="M14 21v-8h3l.5-4H14V7.2c0-1.2.4-2.2 2.3-2.2H18V1.5c-.6-.1-1.7-.2-3-.2-3 0-5 1.8-5 5.2V9H7v4h3v8" />
          </>
        );

      case "linkedin":
        return (
          <>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M7.5 10v7" />
            <path d="M7.5 7.2v.1" />
            <path d="M11 17v-7" />
            <path d="M11 13c.8-2 4.8-2.2 4.8 1.3V17" />
          </>
        );

      case "threads":
        return (
          <>
            <path d="M12 3c-5 0-8 3.5-8 9s3 9 8 9c4.5 0 7-2.5 7-6 0-2.8-1.8-4.7-5-4.7-2.4 0-4.2 1.3-4.2 3.3 0 1.8 1.4 3.1 3.4 3.1 2.4 0 4-1.7 4-4.5C17.2 7.5 15 5 12 5c-2.8 0-4.7 1.5-5.4 3.7" />
          </>
        );

      case "x":
        return (
          <>
            <path d="m5 4 14 16" />
            <path d="M19 4 5 20" />
          </>
        );

      case "youtube":
        return (
          <>
            <path d="M21 12c0 3.5-.5 5.7-1.2 6.4-.7.7-2.8 1.1-7.8 1.1s-7.1-.4-7.8-1.1C3.5 17.7 3 15.5 3 12s.5-5.7 1.2-6.4C4.9 4.9 7 4.5 12 4.5s7.1.4 7.8 1.1C20.5 6.3 21 8.5 21 12Z" />
            <path d="m10 9 5 3-5 3V9Z" />
          </>
        );

      /* =====================================================
         FALLBACK ICON
         ===================================================== */

      default:
        return (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </>
        );
    }
  };

  return (
    <svg {...commonProps}>
      {title ? <title>{title}</title> : null}
      {renderIcon()}
    </svg>
  );
}

export default SiteIcon;