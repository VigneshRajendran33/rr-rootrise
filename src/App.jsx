import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

import {
  company,
  pageMeta,
} from "./data/siteData";

function getPageMeta(pathname) {
  switch (pathname) {
    case "/":
      return pageMeta.home;

    case "/services":
      return pageMeta.services;

    case "/industries":
      return pageMeta.industries;

    case "/about":
      return pageMeta.about;

    case "/contact":
      return pageMeta.contact;

    case "/privacy-policy":
      return pageMeta.privacy;

    case "/terms-of-service":
      return pageMeta.terms;

    default:
      return pageMeta.notFound;
  }
}

function RouteManager() {
  const location = useLocation();

  useEffect(() => {
    const currentMeta = getPageMeta(
      location.pathname,
    );

    document.title = currentMeta.title;

    let descriptionMeta = document.querySelector(
      'meta[name="description"]',
    );

    if (!descriptionMeta) {
      descriptionMeta =
        document.createElement("meta");

      descriptionMeta.setAttribute(
        "name",
        "description",
      );

      document.head.appendChild(
        descriptionMeta,
      );
    }

    descriptionMeta.setAttribute(
      "content",
      currentMeta.description,
    );

    let canonicalLink = document.querySelector(
      'link[rel="canonical"]',
    );

    if (!canonicalLink) {
      canonicalLink =
        document.createElement("link");

      canonicalLink.setAttribute(
        "rel",
        "canonical",
      );

      document.head.appendChild(
        canonicalLink,
      );
    }

    const canonicalPath =
      location.pathname === "/"
        ? ""
        : location.pathname;

    canonicalLink.setAttribute(
      "href",
      `${company.website}${canonicalPath}`,
    );

    const openGraphTitle =
      document.querySelector(
        'meta[property="og:title"]',
      );

    const openGraphDescription =
      document.querySelector(
        'meta[property="og:description"]',
      );

    const openGraphUrl =
      document.querySelector(
        'meta[property="og:url"]',
      );

    openGraphTitle?.setAttribute(
      "content",
      currentMeta.title,
    );

    openGraphDescription?.setAttribute(
      "content",
      currentMeta.description,
    );

    openGraphUrl?.setAttribute(
      "content",
      `${company.website}${canonicalPath}`,
    );
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [
    location.pathname,
    location.hash,
  ]);

  return null;
}

function App() {
  return (
    <div className="site-shell">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <Header />

      <RouteManager />

      <ScrollReveal />

      <main id="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/industries"
            element={<Industries />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/privacy-policy"
            element={<Privacy />}
          />

          <Route
            path="/terms-of-service"
            element={<Terms />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      <Footer />

      <ScrollToTop />

      <WhatsAppButton />
    </div>
  );
}

export default App;