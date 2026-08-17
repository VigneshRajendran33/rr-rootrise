import {
  lazy,
  Suspense,
  useEffect,
} from "react";

import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import ScrollToTop from "./components/ScrollToTop";
import RRChatAssistant from "./components/RRChatAssistant";

import {
  company,
  pageMeta,
} from "./data/siteData";

/* =========================================================
   LAZY LOADED PAGES
   ROUTE-LEVEL CODE SPLITTING
   ========================================================= */

const Home = lazy(
  () => import("./pages/Home"),
);

const Services = lazy(
  () => import("./pages/Services"),
);

const Industries = lazy(
  () => import("./pages/Industries"),
);

const About = lazy(
  () => import("./pages/About"),
);

const Contact = lazy(
  () => import("./pages/Contact"),
);

const Privacy = lazy(
  () => import("./pages/Privacy"),
);

const Terms = lazy(
  () => import("./pages/Terms"),
);

const NotFound = lazy(
  () => import("./pages/NotFound"),
);

/* =========================================================
   PAGE LOADER
   ========================================================= */

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "55vh",
        display: "grid",
        placeItems: "center",
        background: "#02101c",
      }}
      role="status"
      aria-live="polite"
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          border:
            "3px solid rgba(0, 238, 216, 0.16)",
          borderTopColor:
            "#00EED8",
          borderRadius:
            "50%",
          animation:
            "rr-page-loader-spin 0.7s linear infinite",
        }}
      />

      <style>{`
        @keyframes rr-page-loader-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (
          prefers-reduced-motion: reduce
        ) {
          div[role="status"] > div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   PAGE META
   ========================================================= */

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

    case "/privacy":
    case "/privacy-policy":
      return pageMeta.privacy;

    case "/terms":
    case "/terms-of-service":
      return pageMeta.terms;

    default:
      return pageMeta.notFound;
  }
}

/* =========================================================
   CANONICAL PATH
   ========================================================= */

function getCanonicalPath(pathname) {
  if (pathname === "/privacy") {
    return "/privacy-policy";
  }

  if (pathname === "/terms") {
    return "/terms-of-service";
  }

  if (pathname === "/") {
    return "";
  }

  return pathname;
}

/* =========================================================
   WEBSITE BASE URL
   ========================================================= */

function getWebsiteBaseUrl() {
  return company.website.replace(
    /\/+$/,
    "",
  );
}

/* =========================================================
   ROUTE MANAGER
   SEO + SCROLL
   ========================================================= */

function RouteManager() {
  const location =
    useLocation();

  /* =======================================================
     SEO META
     ======================================================= */

  useEffect(() => {
    const currentMeta =
      getPageMeta(
        location.pathname,
      );

    const canonicalPath =
      getCanonicalPath(
        location.pathname,
      );

    const websiteBase =
      getWebsiteBaseUrl();

    const canonicalUrl =
      `${websiteBase}${canonicalPath || "/"}`;

    /* =====================================================
       DOCUMENT TITLE
       ===================================================== */

    document.title =
      currentMeta.title;

    /* =====================================================
       META DESCRIPTION
       ===================================================== */

    let descriptionMeta =
      document.querySelector(
        'meta[name="description"]',
      );

    if (!descriptionMeta) {
      descriptionMeta =
        document.createElement(
          "meta",
        );

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

    /* =====================================================
       CANONICAL
       ===================================================== */

    let canonicalLink =
      document.querySelector(
        'link[rel="canonical"]',
      );

    if (!canonicalLink) {
      canonicalLink =
        document.createElement(
          "link",
        );

      canonicalLink.setAttribute(
        "rel",
        "canonical",
      );

      document.head.appendChild(
        canonicalLink,
      );
    }

    canonicalLink.setAttribute(
      "href",
      canonicalUrl,
    );

    /* =====================================================
       OPEN GRAPH
       ===================================================== */

    let openGraphTitle =
      document.querySelector(
        'meta[property="og:title"]',
      );

    let openGraphDescription =
      document.querySelector(
        'meta[property="og:description"]',
      );

    let openGraphUrl =
      document.querySelector(
        'meta[property="og:url"]',
      );

    if (!openGraphTitle) {
      openGraphTitle =
        document.createElement(
          "meta",
        );

      openGraphTitle.setAttribute(
        "property",
        "og:title",
      );

      document.head.appendChild(
        openGraphTitle,
      );
    }

    if (
      !openGraphDescription
    ) {
      openGraphDescription =
        document.createElement(
          "meta",
        );

      openGraphDescription.setAttribute(
        "property",
        "og:description",
      );

      document.head.appendChild(
        openGraphDescription,
      );
    }

    if (!openGraphUrl) {
      openGraphUrl =
        document.createElement(
          "meta",
        );

      openGraphUrl.setAttribute(
        "property",
        "og:url",
      );

      document.head.appendChild(
        openGraphUrl,
      );
    }

    openGraphTitle.setAttribute(
      "content",
      currentMeta.title,
    );

    openGraphDescription.setAttribute(
      "content",
      currentMeta.description,
    );

    openGraphUrl.setAttribute(
      "content",
      canonicalUrl,
    );

    /* =====================================================
       X / TWITTER
       ===================================================== */

    let twitterTitle =
      document.querySelector(
        'meta[name="twitter:title"]',
      );

    let twitterDescription =
      document.querySelector(
        'meta[name="twitter:description"]',
      );

    if (!twitterTitle) {
      twitterTitle =
        document.createElement(
          "meta",
        );

      twitterTitle.setAttribute(
        "name",
        "twitter:title",
      );

      document.head.appendChild(
        twitterTitle,
      );
    }

    if (
      !twitterDescription
    ) {
      twitterDescription =
        document.createElement(
          "meta",
        );

      twitterDescription.setAttribute(
        "name",
        "twitter:description",
      );

      document.head.appendChild(
        twitterDescription,
      );
    }

    twitterTitle.setAttribute(
      "content",
      currentMeta.title,
    );

    twitterDescription.setAttribute(
      "content",
      currentMeta.description,
    );
  }, [location.pathname]);

  /* =======================================================
     SCROLL TO TOP
     ======================================================= */

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

/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <div className="site-shell">

      {/* ACCESSIBILITY */}

      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      {/* HEADER */}

      <Header />

      {/* ROUTE UTILITIES */}

      <RouteManager />

      <ScrollReveal />

      {/* MAIN CONTENT */}

      <main id="main-content">

        <Suspense
          fallback={
            <PageLoader />
          }
        >
          <Routes>

            {/* HOME */}

            <Route
              path="/"
              element={
                <Home />
              }
            />

            {/* SERVICES */}

            <Route
              path="/services"
              element={
                <Services />
              }
            />

            {/* INDUSTRIES */}

            <Route
              path="/industries"
              element={
                <Industries />
              }
            />

            {/* ABOUT */}

            <Route
              path="/about"
              element={
                <About />
              }
            />

            {/* CONTACT */}

            <Route
              path="/contact"
              element={
                <Contact />
              }
            />

            {/* PRIVACY */}

            <Route
              path="/privacy-policy"
              element={
                <Privacy />
              }
            />

            <Route
              path="/privacy"
              element={
                <Navigate
                  to="/privacy-policy"
                  replace
                />
              }
            />

            {/* TERMS */}

            <Route
              path="/terms-of-service"
              element={
                <Terms />
              }
            />

            <Route
              path="/terms"
              element={
                <Navigate
                  to="/terms-of-service"
                  replace
                />
              }
            />

            {/* NOT FOUND */}

            <Route
              path="*"
              element={
                <NotFound />
              }
            />

          </Routes>
        </Suspense>

      </main>

      {/* FOOTER */}

      <Footer />

      {/* GLOBAL CONTROLS */}

      <ScrollToTop />

      <RRChatAssistant />

    </div>
  );
}

export default App;