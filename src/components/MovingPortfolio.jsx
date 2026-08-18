import SiteIcon from "./SiteIcon";

import {
  portfolioProjects,
} from "../data/siteData";

/* =========================================================
   ADDITIONAL RR ROOTRISE PROJECTS
   ========================================================= */

const additionalProjects = [
  {
    id: "resumecraft-ai",
    title: "ResumeCraft AI",
    industry: "Career Technology",

    description:
      "An AI-powered resume building experience designed to help users create polished and professional resumes through a modern web application.",

    capabilities: [
      "AI Experience",
      "Resume Builder",
      "Responsive Web App",
    ],

    liveUrl:
      "https://resumecraft-ai-apxi.onrender.com/",
  },

  {
    id: "codeveedu",
    title: "CodeVeedu",
    industry: "Education Technology",

    description:
      "A modern coding and learning platform focused on accessible digital education and responsive learning experiences.",

    capabilities: [
      "Learning Platform",
      "Responsive UI",
      "Frontend Experience",
    ],

    liveUrl:
      "https://codeveedu.vercel.app/",
  },
];

/* =========================================================
   ALL PROJECTS

   Existing projects remain unchanged.
   Only two new projects are added.
   ========================================================= */

const allProjects = [
  ...portfolioProjects,
  ...additionalProjects,
];

/* =========================================================
   LIVE WEBSITE PREVIEW

   Actual website is loaded inside iframe.
   No screenshots.
   ========================================================= */

function ProjectPreview({
  project,
}) {
  return (
    <div className="rr-moving-project-browser">

      {/* BROWSER TOP BAR */}

      <div className="rr-moving-browser-bar">

        <div className="rr-moving-browser-dots">
          <span />
          <span />
          <span />
        </div>

        <span className="rr-moving-browser-title">
          {project.title}
        </span>

        <span className="rr-moving-live-status">
          Live
        </span>

      </div>

      {/* ACTUAL LIVE WEBSITE */}

      <div className="rr-moving-live-preview">

        <iframe
          src={project.liveUrl}
          title={`${project.title} live website preview`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex="-1"
        />

        {/* CLICK OVERLAY */}

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rr-preview-open-link"
          aria-label={`Open ${project.title} live website`}
        >
          <span>
            Open Live
          </span>

          <SiteIcon
            name="arrow-up-right"
            size={13}
            strokeWidth={2}
          />
        </a>

      </div>

    </div>
  );
}

/* =========================================================
   PROJECT CARD
   ========================================================= */

function MovingProjectCard({
  project,
}) {
  return (
    <article className="rr-moving-project-card">

      <ProjectPreview
        project={project}
      />

      <div className="rr-moving-project-content">

        {/* META */}

        <div className="rr-moving-project-meta">

          <span>
            {project.industry}
          </span>

          <small>
            Demo Project
          </small>

        </div>

        {/* TITLE */}

        <h3>
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p>
          {project.description}
        </p>

        {/* TAGS */}

        <div className="rr-moving-project-tags">

          {project.capabilities
            ?.slice(0, 2)
            .map(
              (capability) => (
                <span
                  key={capability}
                >
                  {capability}
                </span>
              ),
            )}

        </div>

        {/* LIVE LINK */}

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rr-moving-project-link"
        >
          View Live Project

          <SiteIcon
            name="arrow-up-right"
            size={14}
            strokeWidth={2}
          />
        </a>

      </div>

    </article>
  );
}

/* =========================================================
   SINGLE MOVING ROW
   ========================================================= */

function MovingPortfolio() {
  return (
    <>
      <div className="rr-moving-portfolio">

        <div className="rr-project-marquee-row">

          <div className="rr-project-marquee-track">

            {/* =============================================
                ORIGINAL PROJECT SET
                ============================================= */}

            <div className="rr-project-marquee-group">

              {allProjects.map(
                (project) => (
                  <MovingProjectCard
                    key={`original-${project.id}`}
                    project={project}
                  />
                ),
              )}

            </div>

            {/* =============================================
                DUPLICATE SET
                Required for seamless infinite movement
                ============================================= */}

            <div
              className="rr-project-marquee-group"
              aria-hidden="true"
            >

              {allProjects.map(
                (project) => (
                  <MovingProjectCard
                    key={`duplicate-${project.id}`}
                    project={project}
                  />
                ),
              )}

            </div>

          </div>

        </div>

      </div>

      {/* ===================================================
          STYLES
          =================================================== */}

      <style>{`

        /* ==================================================
           PORTFOLIO WRAPPER
           ================================================== */

        .rr-moving-portfolio {
          position: relative;

          width: 100%;

          overflow: hidden;
        }


        /* ==================================================
           SINGLE MARQUEE ROW
           ================================================== */

        .rr-project-marquee-row {
          position: relative;

          width: 100%;

          overflow: hidden;

          padding:
            2px 0;

          -webkit-mask-image:
            linear-gradient(
              90deg,
              transparent 0%,
              #000 3%,
              #000 97%,
              transparent 100%
            );

          mask-image:
            linear-gradient(
              90deg,
              transparent 0%,
              #000 3%,
              #000 97%,
              transparent 100%
            );
        }


        .rr-project-marquee-track {
          display: flex;

          width: max-content;

          will-change:
            transform;

          animation:
            rrPortfolioSingleRow
            30s
            linear
            infinite;
        }


        .rr-project-marquee-group {
          display: flex;

          flex: 0 0 auto;

          gap: 14px;

          padding-right:
            14px;
        }


        /* ==================================================
           HOVER = PAUSE
           ================================================== */

        .rr-project-marquee-row:hover
        .rr-project-marquee-track {
          animation-play-state:
            paused;
        }


        /* ==================================================
           COMPACT CARD
           ================================================== */

        .rr-moving-project-card {
          width: 320px;

          flex:
            0 0 320px;

          min-width: 0;

          overflow: hidden;

          border:
            1px solid
            rgba(
              39,
              207,
              226,
              .13
            );

          border-radius:
            13px;

          background:
            linear-gradient(
              145deg,
              rgba(
                255,
                255,
                255,
                .035
              ),
              rgba(
                255,
                255,
                255,
                .018
              )
            );

          transition:
            transform .2s ease,
            border-color .2s ease,
            box-shadow .2s ease;
        }


        .rr-moving-project-card:hover {
          transform:
            translateY(-2px);

          border-color:
            rgba(
              0,
              238,
              216,
              .30
            );

          box-shadow:
            0 16px 36px
            rgba(
              0,
              0,
              0,
              .17
            );
        }


        /* ==================================================
           BROWSER FRAME
           ================================================== */

        .rr-moving-project-browser {
          margin:
            9px
            9px
            0;

          overflow: hidden;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .08
            );

          border-radius:
            8px;

          background:
            #071b27;
        }


        /* ==================================================
           BROWSER TOP BAR
           ================================================== */

        .rr-moving-browser-bar {
          display: flex;

          align-items: center;

          gap: 7px;

          height: 27px;

          padding:
            0 8px;

          background:
            #102b39;
        }


        .rr-moving-browser-dots {
          display: flex;

          gap: 3px;

          flex:
            0 0 auto;
        }


        .rr-moving-browser-dots span {
          width: 4px;
          height: 4px;

          border-radius:
            50%;

          background:
            #66818e;
        }


        .rr-moving-browser-title {
          min-width: 0;

          flex: 1;

          overflow: hidden;

          color:
            #829aa6;

          font-size:
            7px;

          white-space:
            nowrap;

          text-overflow:
            ellipsis;
        }


        .rr-moving-live-status {
          flex:
            0 0 auto;

          color:
            #42d9cf;

          font-size:
            6.5px;

          font-weight:
            800;

          letter-spacing:
            .08em;

          text-transform:
            uppercase;
        }


        /* ==================================================
           LIVE WEBSITE PREVIEW AREA
           ================================================== */

        .rr-moving-live-preview {
          position: relative;

          width: 100%;

          height: 150px;

          overflow: hidden;

          background:
            #ffffff;
        }


        /* ==================================================
           LIVE IFRAME

           Actual website is rendered at a larger viewport
           and scaled down, so desktop site can be seen
           inside the compact card.
           ================================================== */

        .rr-moving-live-preview iframe {
          position: absolute;

          top: 0;
          left: 0;

          width: 250%;
          height: 250%;

          border: 0;

          background:
            #ffffff;

          pointer-events:
            none;

          transform:
            scale(.4);

          transform-origin:
            top left;
        }


        /* ==================================================
           OPEN LIVE OVERLAY

           Small top-right button only.
           Doesn't cover iframe.
           ================================================== */

        .rr-preview-open-link {
          position: absolute;

          top: 8px;
          right: 8px;

          z-index: 5;

          display:
            inline-flex;

          align-items:
            center;

          gap: 4px;

          min-height:
            25px;

          padding:
            4px 7px;

          border:
            1px solid
            rgba(
              0,
              238,
              216,
              .22
            );

          border-radius:
            6px;

          color:
            #ffffff;

          background:
            rgba(
              2,
              21,
              31,
              .88
            );

          backdrop-filter:
            blur(8px);

          -webkit-backdrop-filter:
            blur(8px);

          font-size:
            8px;

          font-weight:
            750;

          text-decoration:
            none;

          opacity: 0;

          transform:
            translateY(-3px);

          transition:
            opacity .2s ease,
            transform .2s ease,
            border-color .2s ease;
        }


        .rr-moving-project-card:hover
        .rr-preview-open-link {
          opacity: 1;

          transform:
            translateY(0);
        }


        .rr-preview-open-link:hover {
          border-color:
            #00e7d6;
        }


        /* ==================================================
           CONTENT
           ================================================== */

        .rr-moving-project-content {
          padding:
            14px
            15px
            15px;
        }


        /* ==================================================
           META
           ================================================== */

        .rr-moving-project-meta {
          display: flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap: 8px;

          margin-bottom:
            9px;
        }


        .rr-moving-project-meta
        > span {
          min-width: 0;

          overflow: hidden;

          color:
            #4fdbd5;

          font-size:
            7px;

          font-weight:
            800;

          letter-spacing:
            .10em;

          text-transform:
            uppercase;

          white-space:
            nowrap;

          text-overflow:
            ellipsis;
        }


        .rr-moving-project-meta
        small {
          flex:
            0 0 auto;

          padding:
            3px 6px;

          border:
            1px solid
            rgba(
              39,
              207,
              226,
              .13
            );

          border-radius:
            999px;

          color:
            #829aa7;

          font-size:
            6px;
        }


        /* ==================================================
           TITLE
           ================================================== */

        .rr-moving-project-content h3 {
          margin: 0;

          color:
            #ffffff;

          font-size:
            20px;

          line-height:
            1.12;

          letter-spacing:
            -.03em;
        }


        /* ==================================================
           DESCRIPTION
           ================================================== */

        .rr-moving-project-content
        > p {
          display:
            -webkit-box;

          overflow:
            hidden;

          margin:
            8px 0 0;

          color:
            #98adb8;

          font-size:
            12px;

          line-height:
            1.5;

          -webkit-line-clamp:
            2;

          -webkit-box-orient:
            vertical;
        }


        /* ==================================================
           TAGS
           ================================================== */

        .rr-moving-project-tags {
          display: flex;

          flex-wrap:
            wrap;

          gap: 5px;

          margin-top:
            10px;
        }


        .rr-moving-project-tags
        span {
          padding:
            4px 6px;

          border-radius:
            4px;

          color:
            #88a0ac;

          background:
            linear-gradient(
              135deg,
              rgba(
                22,
                191,
                169,
                .06
              ),
              rgba(
                39,
                207,
                226,
                .05
              )
            );

          font-size:
            7px;
        }


        /* ==================================================
           PROJECT LINK
           ================================================== */

        .rr-moving-project-link {
          display:
            inline-flex;

          align-items:
            center;

          gap: 5px;

          margin-top:
            11px;

          color:
            #52dcda;

          font-size:
            10px;

          font-weight:
            750;

          text-decoration:
            none;
        }


        .rr-moving-project-link:hover {
          color:
            #00ffff;
        }


        /* ==================================================
           CONTINUOUS LEFT MOVEMENT
           ================================================== */

        @keyframes rrPortfolioSingleRow {

          from {
            transform:
              translateX(0);
          }

          to {
            transform:
              translateX(-50%);
          }
        }


        /* ==================================================
           TABLET
           ================================================== */

        @media (
          max-width: 850px
        ) {

          .rr-moving-project-card {
            width: 300px;

            flex-basis:
              300px;
          }


          .rr-moving-live-preview {
            height: 140px;
          }


          .rr-project-marquee-track {
            animation-duration:
              48s;
          }
        }


        /* ==================================================
           MOBILE
           ================================================== */

        @media (
          max-width: 600px
        ) {

          .rr-project-marquee-row {
            -webkit-mask-image:
              none;

            mask-image:
              none;
          }


          .rr-project-marquee-group {
            gap: 10px;

            padding-right:
              10px;
          }


          .rr-moving-project-card {
            width:
              min(
                270px,
                calc(
                  100vw - 48px
                )
              );

            flex-basis:
              min(
                270px,
                calc(
                  100vw - 48px
                )
              );

            border-radius:
              11px;
          }


          .rr-moving-project-browser {
            margin:
              7px
              7px
              0;
          }


          .rr-moving-live-preview {
            height: 125px;
          }


          .rr-moving-project-content {
            padding:
              12px
              13px
              13px;
          }


          .rr-moving-project-content h3 {
            font-size:
              17px;
          }


          .rr-moving-project-content
          > p {
            font-size:
              11px;
          }


          .rr-project-marquee-track {
            animation-duration:
              42s;
          }


          /*
            On touch devices we keep
            "Open Live" visible.
          */

          .rr-preview-open-link {
            opacity: 1;

            transform:
              none;

            top: 6px;
            right: 6px;
          }
        }


        /* ==================================================
           REDUCED MOTION
           ================================================== */

        @media (
          prefers-reduced-motion:
          reduce
        ) {

          .rr-project-marquee-track {
            animation:
              none !important;
          }


          .rr-project-marquee-row {
            overflow-x:
              auto;
          }
        }

      `}</style>
    </>
  );
}

export default MovingPortfolio;