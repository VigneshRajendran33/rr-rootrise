import {
  useEffect,
  useRef,
  useState,
} from "react";

import { company } from "../data/siteData";

/* =========================================================
   ICONS
   ========================================================= */

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4Z" />

      <path d="M8.7 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4 0 .7.7 1.2 1.8 2.2 3 2.8.3.2.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .5-.2 1.3-.7 1.8-.6.6-1.5.9-2.5.7-1.1-.2-2.5-.8-4.1-2.2-1.4-1.2-2.4-2.6-3-3.8-.6-1.3-.5-2.4-.1-3.3Z" />
    </svg>
  );
}

/* =========================================================
   QUICK ACTIONS
   ========================================================= */

const quickActions = [
  "Website Development",
  "Mobile App",
  "E-Commerce",
  "Custom Software",
  "UI/UX Design",
  "SEO & Digital Growth",
];

/* =========================================================
   ASSISTANT RESPONSES
   ========================================================= */

function getAssistantReply(message) {
  const value =
    message
      .toLowerCase()
      .trim();

  if (
    value.includes("website") ||
    value.includes("web development") ||
    value.includes("landing page")
  ) {
    return "We build professional, responsive business websites focused on credibility, performance and customer enquiries. Tell me whether you need a new website, redesign or landing page.";
  }

  if (
    value.includes("mobile") ||
    value.includes("app")
  ) {
    return "RR RootRise can help plan and build mobile application experiences around your business workflow and customer requirements. Tell me briefly what the application should do.";
  }

  if (
    value.includes("e-commerce") ||
    value.includes("ecommerce") ||
    value.includes("online store")
  ) {
    return "We create e-commerce experiences for product discovery, customer journeys and online sales. You can share your product type, approximate catalogue size and payment requirements.";
  }

  if (
    value.includes("custom software") ||
    value.includes("software") ||
    value.includes("system")
  ) {
    return "We develop custom software solutions around real business workflows and operational requirements. Tell me what process you want to simplify or automate.";
  }

  if (
    value.includes("ui") ||
    value.includes("ux") ||
    value.includes("design")
  ) {
    return "Our UI/UX work focuses on clear, modern and practical digital experiences. Tell me whether you need website UI, mobile app UI or a redesign of an existing digital product.";
  }

  if (
    value.includes("seo") ||
    value.includes("digital growth") ||
    value.includes("marketing")
  ) {
    return "RR RootRise supports SEO improvements, search-ready digital foundations and practical digital growth. Tell me whether your priority is visibility, enquiries, technical SEO or overall digital presence.";
  }

  if (
    value.includes("price") ||
    value.includes("pricing") ||
    value.includes("cost") ||
    value.includes("quote") ||
    value.includes("budget")
  ) {
    return "Project pricing depends on scope, features, design requirements and timeline. Share the service you need and a short project description, and our team can discuss the right solution with you.";
  }

  if (
    value.includes("contact") ||
    value.includes("team") ||
    value.includes("human") ||
    value.includes("whatsapp")
  ) {
    return "You can speak directly with the RR RootRise team using the “Talk to Our Team” button below.";
  }

  if (
    value === "hi" ||
    value === "hello" ||
    value === "hey" ||
    value.includes("good morning") ||
    value.includes("good afternoon") ||
    value.includes("good evening")
  ) {
    return "Hello! Tell me what you are planning to build — a website, mobile app, e-commerce platform or custom software solution.";
  }

  return "Thanks for sharing that. Please tell me a little more about your business requirement, the digital solution you need and what you want the project to achieve.";
}

/* =========================================================
   CHAT ASSISTANT
   ========================================================= */

function RRChatAssistant() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        id: "welcome",
        sender: "assistant",
        text:
          "Hi! I’m the RR RootRise digital assistant. How can I help with your website, mobile app, e-commerce or software requirement?",
      },
    ]);

  const messagesEndRef =
    useRef(null);

  /* =======================================================
     AUTO SCROLL
     ======================================================= */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [
    messages,
    isOpen,
  ]);

  /* =======================================================
     MOBILE BODY SCROLL LOCK
     ======================================================= */

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const isMobile =
      window.matchMedia(
        "(max-width: 600px)",
      ).matches;

    if (!isMobile) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen]);

  /* =======================================================
     ESC TO CLOSE
     ======================================================= */

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [isOpen]);

  /* =======================================================
     SEND MESSAGE
     ======================================================= */

  function sendMessage(message) {
    const cleanMessage =
      message.trim();

    if (!cleanMessage) {
      return;
    }

    const timestamp =
      Date.now();

    const userMessage = {
      id: `user-${timestamp}`,
      sender: "user",
      text: cleanMessage,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");

    window.setTimeout(() => {
      const assistantMessage = {
        id: `assistant-${timestamp}`,
        sender: "assistant",
        text:
          getAssistantReply(
            cleanMessage,
          ),
      };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);
    }, 320);
  }

  function handleSubmit(event) {
    event.preventDefault();

    sendMessage(input);
  }

  return (
    <>
      {/* ===================================================
          CLOSED LAUNCHER
          =================================================== */}

      {!isOpen && (
        <button
          type="button"
          className="rr-chat-launcher"
          onClick={() =>
            setIsOpen(true)
          }
          aria-label="Open RR RootRise digital assistant"
        >
          <span
            className="rr-chat-launcher-avatar"
            aria-hidden="true"
          >
            <img
              src="/favicon.png"
              alt=""
            />
          </span>

          <span className="rr-chat-launcher-text">
            <strong>
              Talk to RR RootRise
            </strong>

            <small>
              Digital Assistant
            </small>
          </span>
        </button>
      )}

      {/* ===================================================
          CHAT PANEL
          =================================================== */}

      {isOpen && (
        <section
          className="rr-chat-panel"
          aria-label="RR RootRise digital assistant"
        >
          {/* ===============================================
              HEADER
              =============================================== */}

          <header className="rr-chat-header">
            <div className="rr-chat-header-brand">
              <span className="rr-chat-header-avatar">
                <img
                  src="/favicon.png"
                  alt="RR RootRise"
                />
              </span>

              <div className="rr-chat-header-content">
                <strong>
                  RR RootRise Assistant
                </strong>

                <span>
                  Digital Assistant
                </span>
              </div>
            </div>

            <button
              type="button"
              className="rr-chat-close"
              onClick={() =>
                setIsOpen(false)
              }
              aria-label="Close RR RootRise assistant"
            >
              <CloseIcon />
            </button>
          </header>

          {/* ===============================================
              CHAT BODY
              =============================================== */}

          <div className="rr-chat-body">

            {/* MESSAGES */}

            <div className="rr-chat-messages">
              {messages.map(
                (message) => (
                  <div
                    key={message.id}
                    className={
                      `rr-chat-message-row ${
                        message.sender ===
                        "user"
                          ? "rr-chat-message-user"
                          : "rr-chat-message-assistant"
                      }`
                    }
                  >
                    {message.sender ===
                      "assistant" && (
                      <span className="rr-chat-message-avatar">
                        <img
                          src="/favicon.png"
                          alt=""
                        />
                      </span>
                    )}

                    <div className="rr-chat-message-bubble">
                      {message.text}
                    </div>
                  </div>
                ),
              )}

              <div
                ref={messagesEndRef}
                className="rr-chat-scroll-anchor"
              />
            </div>

            {/* QUICK ACTIONS */}

            <div className="rr-chat-quick-actions">
              {quickActions.map(
                (action) => (
                  <button
                    type="button"
                    key={action}
                    onClick={() =>
                      sendMessage(
                        action,
                      )
                    }
                  >
                    {action}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* ===============================================
              INPUT
              =============================================== */}

          <form
            className="rr-chat-input-area"
            onSubmit={
              handleSubmit
            }
          >
            <input
              type="text"
              value={input}
              onChange={(
                event,
              ) =>
                setInput(
                  event.target.value,
                )
              }
              placeholder="Type your message..."
              aria-label="Type your message"
              autoComplete="off"
            />

            <button
              type="submit"
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </form>

          {/* ===============================================
              WHATSAPP HANDOFF
              =============================================== */}

          <div className="rr-chat-handoff">
            <a
              href={
                company.whatsappHref
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talk to the RR RootRise team on WhatsApp"
            >
              <span
                className="rr-chat-whatsapp-icon"
                aria-hidden="true"
              >
                <WhatsAppIcon />
              </span>

              <strong>
                Talk to Our Team
              </strong>
            </a>
          </div>
        </section>
      )}

      {/* ===================================================
          STYLES
          =================================================== */}

      <style>{`

        /* ==================================================
           LAUNCHER
           ================================================== */

        .rr-chat-launcher {
          position: fixed;

          right: 24px;
          bottom: 24px;

          z-index: 1200;

          display: flex;
          align-items: center;

          gap: 11px;

          min-height: 58px;

          padding:
            8px 16px
            8px 9px;

          color: #ffffff;

          border:
            1px solid
            rgba(
              0,
              238,
              216,
              0.28
            );

          border-radius: 12px;

          background:
            rgba(
              3,
              21,
              34,
              0.96
            );

          box-shadow:
            0 18px 45px
            rgba(
              0,
              0,
              0,
              0.30
            );

          cursor: pointer;

          backdrop-filter:
            blur(18px);

          -webkit-backdrop-filter:
            blur(18px);

          transition:
            transform .2s ease,
            border-color .2s ease,
            box-shadow .2s ease;
        }


        .rr-chat-launcher:hover {
          transform:
            translateY(-2px);

          border-color:
            rgba(
              0,
              255,
              255,
              0.48
            );

          box-shadow:
            0 20px 48px
            rgba(
              0,
              204,
              153,
              0.15
            );
        }


        .rr-chat-launcher:focus-visible {
          outline:
            3px solid
            rgba(
              0,
              238,
              216,
              0.24
            );

          outline-offset: 3px;
        }


        .rr-chat-launcher-avatar {
          display: grid;

          place-items: center;

          width: 40px;
          height: 40px;

          flex: 0 0 auto;

          overflow: hidden;

          border-radius: 9px;

          background:
            linear-gradient(
              135deg,
              rgba(
                0,
                204,
                153,
                .16
              ),
              rgba(
                0,
                255,
                255,
                .10
              )
            );
        }


        .rr-chat-launcher-avatar img {
          display: block;

          width: 31px;
          height: 31px;

          object-fit: contain;
        }


        .rr-chat-launcher-text {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 2px;

          text-align: left;
        }


        .rr-chat-launcher-text strong {
          color: #ffffff;

          font-size: 14px;

          font-weight: 750;

          line-height: 1.25;

          white-space: nowrap;
        }


        .rr-chat-launcher-text small {
          color: #86a8b8;

          font-size: 10.5px;

          line-height: 1.2;
        }


        /* ==================================================
           DESKTOP CHAT PANEL
           ================================================== */

        .rr-chat-panel {
          position: fixed;

          right: 24px;
          bottom: 24px;

          z-index: 1300;

          display: flex;

          flex-direction: column;

          width:
            min(
              390px,
              calc(
                100vw - 32px
              )
            );

          height:
            min(
              610px,
              calc(
                100vh - 48px
              )
            );

          min-height: 0;

          overflow: hidden;

          border:
            1px solid
            rgba(
              0,
              238,
              216,
              .22
            );

          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 28px 75px
            rgba(
              0,
              0,
              0,
              .38
            );
        }


        /* ==================================================
           HEADER
           ================================================== */

        .rr-chat-header {
          position: relative;

          z-index: 5;

          display: flex;

          flex: 0 0 auto;

          align-items: center;

          justify-content:
            space-between;

          gap: 16px;

          min-height: 72px;

          padding:
            12px 14px;

          background:
            linear-gradient(
              120deg,
              #031522 0%,
              #062c36 100%
            );

          border-bottom:
            1px solid
            rgba(
              0,
              255,
              255,
              .12
            );
        }


        .rr-chat-header-brand {
          display: flex;

          align-items: center;

          gap: 10px;

          min-width: 0;
        }


        .rr-chat-header-avatar {
          display: grid;

          place-items: center;

          width: 42px;
          height: 42px;

          flex: 0 0 auto;

          overflow: hidden;

          border:
            1px solid
            rgba(
              0,
              255,
              255,
              .20
            );

          border-radius: 10px;

          background:
            rgba(
              0,
              255,
              255,
              .05
            );
        }


        .rr-chat-header-avatar img {
          display: block;

          width: 33px;
          height: 33px;

          object-fit: contain;
        }


        .rr-chat-header-content {
          display: flex;

          flex-direction: column;

          gap: 2px;

          min-width: 0;
        }


        .rr-chat-header-content strong {
          color: #ffffff;

          font-size: 14px;

          font-weight: 750;

          line-height: 1.25;

          white-space: nowrap;
        }


        .rr-chat-header-content span {
          color: #7fd7d0;

          font-size: 10.5px;

          line-height: 1.2;
        }


        .rr-chat-close {
          display: grid;

          place-items: center;

          width: 36px;
          height: 36px;

          flex: 0 0 auto;

          padding: 0;

          color: #aac5d0;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              .08
            );

          border-radius: 8px;

          background:
            rgba(
              255,
              255,
              255,
              .035
            );

          cursor: pointer;

          transition:
            color .2s ease,
            border-color .2s ease,
            background .2s ease;
        }


        .rr-chat-close:hover {
          color: #ffffff;

          border-color:
            rgba(
              0,
              255,
              255,
              .28
            );

          background:
            rgba(
              0,
              255,
              255,
              .05
            );
        }


        /* ==================================================
           BODY
           ================================================== */

        .rr-chat-body {
          display: flex;

          flex:
            1 1 auto;

          flex-direction: column;

          min-height: 0;

          overflow: hidden;

          background:
            linear-gradient(
              180deg,
              #f8fbfc 0%,
              #f2f7f8 100%
            );
        }


        /* ==================================================
           MESSAGES
           ================================================== */

        .rr-chat-messages {
          flex:
            1 1 auto;

          min-height: 0;

          padding:
            17px 14px
            12px;

          overflow-x: hidden;

          overflow-y: auto;

          scrollbar-width: thin;

          scrollbar-color:
            rgba(
              11,
              69,
              80,
              .35
            )
            transparent;

          overscroll-behavior: contain;
        }


        .rr-chat-messages::-webkit-scrollbar {
          width: 5px;
        }


        .rr-chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }


        .rr-chat-messages::-webkit-scrollbar-thumb {
          border-radius: 10px;

          background:
            rgba(
              11,
              69,
              80,
              .30
            );
        }


        .rr-chat-message-row {
          display: flex;

          align-items:
            flex-end;

          gap: 8px;

          width: 100%;

          margin-bottom: 12px;
        }


        .rr-chat-message-assistant {
          justify-content:
            flex-start;
        }


        .rr-chat-message-user {
          justify-content:
            flex-end;
        }


        .rr-chat-message-avatar {
          display: grid;

          place-items: center;

          width: 29px;
          height: 29px;

          flex:
            0 0 auto;

          overflow: hidden;

          border-radius: 7px;

          background:
            #031522;
        }


        .rr-chat-message-avatar img {
          display: block;

          width: 23px;
          height: 23px;

          object-fit:
            contain;
        }


        .rr-chat-message-bubble {
          max-width: 78%;

          padding:
            10px 12px;

          color: #233d4b;

          border:
            1px solid
            #dce7eb;

          border-radius:
            12px
            12px
            12px
            4px;

          background:
            #ffffff;

          box-shadow:
            0 5px 16px
            rgba(
              10,
              38,
              51,
              .04
            );

          font-size: 13px;

          line-height: 1.55;

          overflow-wrap:
            anywhere;
        }


        .rr-chat-message-user
        .rr-chat-message-bubble {
          color: #02151f;

          border-color:
            rgba(
              0,
              204,
              153,
              .18
            );

          border-radius:
            12px
            12px
            4px
            12px;

          background:
            linear-gradient(
              110deg,
              rgba(
                0,
                204,
                153,
                .18
              ),
              rgba(
                0,
                255,
                255,
                .15
              )
            );
        }


        .rr-chat-scroll-anchor {
          width: 1px;

          height: 1px;
        }


        /* ==================================================
           QUICK ACTIONS
           ================================================== */

        .rr-chat-quick-actions {
          display: flex;

          flex: 0 0 auto;

          flex-wrap: wrap;

          gap: 6px;

          padding:
            0 14px
            13px;

          background:
            #f2f7f8;
        }


        .rr-chat-quick-actions button {
          min-height: 30px;

          padding:
            5px 9px;

          color: #087f75;

          border:
            1px solid
            rgba(
              0,
              204,
              153,
              .20
            );

          border-radius: 7px;

          background:
            rgba(
              255,
              255,
              255,
              .88
            );

          font-family: inherit;

          font-size: 10.5px;

          font-weight: 650;

          line-height: 1.2;

          cursor: pointer;

          transition:
            color .2s ease,
            border-color .2s ease,
            background .2s ease;
        }


        .rr-chat-quick-actions button:hover {
          color: #02151f;

          border-color:
            rgba(
              0,
              238,
              216,
              .40
            );

          background:
            linear-gradient(
              90deg,
              rgba(
                0,
                204,
                153,
                .13
              ),
              rgba(
                0,
                255,
                255,
                .10
              )
            );
        }


        /* ==================================================
           INPUT
           ================================================== */

        .rr-chat-input-area {
          display: grid;

          flex: 0 0 auto;

          grid-template-columns:
            minmax(
              0,
              1fr
            )
            42px;

          gap: 8px;

          padding:
            10px 12px;

          border-top:
            1px solid
            #dde8eb;

          background:
            #ffffff;
        }


        .rr-chat-input-area input {
          width: 100%;

          min-width: 0;

          height: 42px;

          padding:
            0 12px;

          color: #071725;

          border:
            1px solid
            #d5e1e6;

          border-radius: 8px;

          background:
            #f9fbfc;

          outline: none;

          font-family:
            inherit;

          font-size: 13px;
        }


        .rr-chat-input-area input::placeholder {
          color: #82949e;
        }


        .rr-chat-input-area input:focus {
          border-color:
            #00cdb0;

          box-shadow:
            0 0 0
            3px
            rgba(
              0,
              204,
              153,
              .09
            );
        }


        .rr-chat-input-area button {
          display: grid;

          place-items: center;

          width: 42px;
          height: 42px;

          padding: 0;

          color: #02151f;

          border: 0;

          border-radius: 8px;

          background:
            linear-gradient(
              135deg,
              #00CC99 0%,
              #00EED8 65%,
              #00FFFF 100%
            );

          cursor: pointer;

          transition:
            transform .2s ease,
            filter .2s ease;
        }


        .rr-chat-input-area button:hover {
          transform:
            translateY(-1px);

          filter:
            brightness(1.03);
        }


        /* ==================================================
           WHATSAPP HANDOFF
           ================================================== */

        .rr-chat-handoff {
          flex: 0 0 auto;

          padding:
            0 12px
            12px;

          background:
            #ffffff;
        }


        .rr-chat-handoff a {
          display: flex;

          align-items: center;

          justify-content:
            center;

          gap: 9px;

          width: 100%;

          min-height: 44px;

          color: #ffffff;

          border:
            1px solid
            rgba(
              0,
              238,
              216,
              .25
            );

          border-radius: 9px;

          background:
            linear-gradient(
              110deg,
              #042532 0%,
              #063943 100%
            );

          text-decoration: none;

          transition:
            border-color .2s ease,
            background .2s ease;
        }


        .rr-chat-handoff a:hover {
          border-color:
            #00e5d5;

          background:
            linear-gradient(
              110deg,
              #06333c,
              #074751
            );
        }


        .rr-chat-whatsapp-icon {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          color: #00e8d5;
        }


        .rr-chat-handoff a strong {
          color: #ffffff;

          font-size: 13px;

          font-weight: 750;
        }


        /* ==================================================
           TABLET
           ================================================== */

        @media (
          max-width: 850px
        ) and (
          min-width: 601px
        ) {

          .rr-chat-launcher {
            right: 18px;
            bottom: 18px;
          }


          .rr-chat-panel {
            right: 18px;
            bottom: 18px;

            height:
              min(
                600px,
                calc(
                  100vh - 36px
                )
              );
          }
        }


        /* ==================================================
           MOBILE
           IMPORTANT:
           Chat becomes an independent full-screen-style app.
           Website header cannot cover it.
           ================================================== */

        @media (
          max-width: 600px
        ) {

          /* -----------------------------------------------
             CLOSED LAUNCHER
             ----------------------------------------------- */

          .rr-chat-launcher {
            right: 12px;
            bottom: 12px;

            z-index: 999999;

            min-height: 52px;

            max-width:
              calc(
                100vw - 24px
              );

            padding:
              7px 12px
              7px 7px;

            gap: 9px;

            border-radius: 11px;
          }


          .rr-chat-launcher-avatar {
            width: 36px;
            height: 36px;

            border-radius: 8px;
          }


          .rr-chat-launcher-avatar img {
            width: 28px;
            height: 28px;
          }


          .rr-chat-launcher-text strong {
            max-width:
              calc(
                100vw - 100px
              );

            overflow: hidden;

            font-size: 12.5px;

            text-overflow:
              ellipsis;

            white-space:
              nowrap;
          }


          .rr-chat-launcher-text small {
            font-size: 9.5px;
          }


          /* -----------------------------------------------
             CHAT PANEL

             Full mobile viewport.
             Highest z-index so site header
             does not cover chatbot header.
             ----------------------------------------------- */

          .rr-chat-panel {
            position: fixed !important;

            top: 6px !important;
            right: 6px !important;
            bottom: 6px !important;
            left: 6px !important;

            z-index: 2147483000 !important;

            width: auto !important;
            height: auto !important;

            max-width: none !important;
            max-height: none !important;

            min-width: 0;
            min-height: 0;

            margin: 0;

            border-radius: 14px;

            overflow: hidden;

            isolation: isolate;
          }


          /* -----------------------------------------------
             HEADER
             ----------------------------------------------- */

          .rr-chat-header {
            position: relative;

            z-index: 10;

            flex: 0 0 auto;

            min-height: 62px;

            padding:
              9px 10px;
          }


          .rr-chat-header-brand {
            gap: 9px;

            min-width: 0;
          }


          .rr-chat-header-avatar {
            width: 38px;
            height: 38px;

            border-radius: 9px;
          }


          .rr-chat-header-avatar img {
            width: 30px;
            height: 30px;
          }


          .rr-chat-header-content {
            min-width: 0;
          }


          .rr-chat-header-content strong {
            max-width:
              calc(
                100vw - 120px
              );

            overflow: hidden;

            font-size: 13px;

            text-overflow:
              ellipsis;

            white-space:
              nowrap;
          }


          .rr-chat-header-content span {
            font-size: 9.8px;
          }


          .rr-chat-close {
            width: 34px;
            height: 34px;

            border-radius: 8px;
          }


          /* -----------------------------------------------
             BODY
             ----------------------------------------------- */

          .rr-chat-body {
            display: flex;

            flex:
              1 1 auto;

            flex-direction:
              column;

            min-height: 0;

            overflow: hidden;
          }


          /* -----------------------------------------------
             MESSAGES
             ONLY THIS PART SCROLLS
             ----------------------------------------------- */

          .rr-chat-messages {
            flex:
              1 1 0;

            min-height: 0;

            padding:
              14px 11px
              10px;

            overflow-x: hidden;

            overflow-y: auto;

            -webkit-overflow-scrolling:
              touch;

            overscroll-behavior:
              contain;
          }


          .rr-chat-message-row {
            gap: 7px;

            margin-bottom: 10px;
          }


          .rr-chat-message-avatar {
            width: 28px;
            height: 28px;

            border-radius: 7px;
          }


          .rr-chat-message-avatar img {
            width: 22px;
            height: 22px;
          }


          .rr-chat-message-bubble {
            max-width: 82%;

            padding:
              9px 10px;

            font-size: 12px;

            line-height: 1.45;
          }


          /* -----------------------------------------------
             QUICK ACTIONS
             2 COLUMNS
             ----------------------------------------------- */

          .rr-chat-quick-actions {
            display: grid;

            flex: 0 0 auto;

            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );

            gap: 5px;

            padding:
              8px 10px;

            border-top:
              1px solid
              rgba(
                7,
                67,
                77,
                .08
              );

            background:
              #f7fafb;
          }


          .rr-chat-quick-actions button {
            width: 100%;

            min-width: 0;

            min-height: 32px;

            padding:
              5px 6px;

            border-radius: 7px;

            font-size: 9.4px;

            line-height: 1.2;

            text-align: center;

            white-space: normal;
          }


          /* -----------------------------------------------
             INPUT
             ----------------------------------------------- */

          .rr-chat-input-area {
            flex: 0 0 auto;

            grid-template-columns:
              minmax(
                0,
                1fr
              )
              40px;

            gap: 7px;

            padding:
              8px 10px;
          }


          .rr-chat-input-area input {
            height: 40px;

            padding:
              0 10px;

            font-size: 12px;
          }


          .rr-chat-input-area button {
            width: 40px;
            height: 40px;

            border-radius: 8px;
          }


          /* -----------------------------------------------
             WHATSAPP HANDOFF
             ALWAYS VISIBLE AT BOTTOM
             ----------------------------------------------- */

          .rr-chat-handoff {
            flex: 0 0 auto;

            padding:
              0 10px
              10px;

            background:
              #ffffff;
          }


          .rr-chat-handoff a {
            min-height: 42px;

            border-radius: 8px;
          }


          .rr-chat-handoff a strong {
            font-size: 12px;
          }
        }


        /* ==================================================
           VERY SMALL MOBILE
           ================================================== */

        @media (
          max-width: 380px
        ) {

          .rr-chat-panel {
            top: 4px !important;
            right: 4px !important;
            bottom: 4px !important;
            left: 4px !important;

            border-radius: 12px;
          }


          .rr-chat-header {
            min-height: 58px;

            padding:
              8px 9px;
          }


          .rr-chat-header-avatar {
            width: 35px;
            height: 35px;
          }


          .rr-chat-header-avatar img {
            width: 28px;
            height: 28px;
          }


          .rr-chat-header-content strong {
            font-size: 12px;
          }


          .rr-chat-header-content span {
            font-size: 9px;
          }


          .rr-chat-close {
            width: 32px;
            height: 32px;
          }


          .rr-chat-messages {
            padding:
              11px 9px
              8px;
          }


          .rr-chat-message-bubble {
            max-width: 84%;

            padding:
              8px 9px;

            font-size: 11.5px;
          }


          .rr-chat-quick-actions {
            gap: 4px;

            padding:
              6px 8px;
          }


          .rr-chat-quick-actions button {
            min-height: 30px;

            padding:
              4px 5px;

            font-size: 8.8px;
          }


          .rr-chat-input-area {
            grid-template-columns:
              minmax(
                0,
                1fr
              )
              38px;

            padding:
              7px 8px;
          }


          .rr-chat-input-area input {
            height: 38px;

            font-size: 11.5px;
          }


          .rr-chat-input-area button {
            width: 38px;
            height: 38px;
          }


          .rr-chat-handoff {
            padding:
              0 8px
              8px;
          }


          .rr-chat-handoff a {
            min-height: 40px;
          }
        }


        /* ==================================================
           REDUCED MOTION
           ================================================== */

        @media (
          prefers-reduced-motion:
            reduce
        ) {

          .rr-chat-launcher,
          .rr-chat-close,
          .rr-chat-quick-actions button,
          .rr-chat-input-area button,
          .rr-chat-handoff a {
            transition:
              none !important;
          }


          .rr-chat-launcher:hover,
          .rr-chat-input-area button:hover {
            transform:
              none;
          }
        }

      `}</style>
    </>
  );
}

export default RRChatAssistant;