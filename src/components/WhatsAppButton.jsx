import SiteIcon from "./SiteIcon";
import { company } from "../data/siteData";

function WhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      className="whatsapp-floating"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RR RootRise on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span
        className="whatsapp-floating-icon"
        aria-hidden="true"
      >
        <SiteIcon
          name="whatsapp"
          size={19}
          strokeWidth={1.8}
        />
      </span>

      <span className="whatsapp-floating-label">
        Chat on WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;