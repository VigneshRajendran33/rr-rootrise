import { useEffect, useState } from "react";
import SiteIcon from "./SiteIcon";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClasses = [
    "scroll-to-top",
    isVisible ? "is-visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={handleClick}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <SiteIcon
        name="arrow-up"
        size={20}
        strokeWidth={2}
      />
    </button>
  );
}

export default ScrollToTop;