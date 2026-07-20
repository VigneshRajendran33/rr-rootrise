import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale",
      ),
    );

    if (revealElements.length === 0) {
      return undefined;
    }

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      revealElements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const delay =
            entry.target.dataset.revealDelay;

          if (delay) {
            entry.target.style.transitionDelay =
              `${delay}ms`;
          }

          entry.target.classList.add(
            "is-visible",
          );

          currentObserver.unobserve(
            entry.target,
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin:
          "0px 0px -8% 0px",
      },
    );

    const frameId = window.requestAnimationFrame(
      () => {
        revealElements.forEach((element) => {
          observer.observe(element);
        });
      },
    );

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

export default ScrollReveal;