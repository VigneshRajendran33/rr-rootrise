import { useState } from "react";
import { Link } from "react-router-dom";

import SiteIcon from "./SiteIcon";

import {
  contactFormConfig,
} from "../data/siteData";

/* =========================================================
   COUNTRY CODES
   ========================================================= */

const countryCodes = [
  { label: "India", code: "+91" },
  { label: "United States", code: "+1" },
  { label: "Canada", code: "+1" },
  { label: "United Kingdom", code: "+44" },
  { label: "United Arab Emirates", code: "+971" },
  { label: "Saudi Arabia", code: "+966" },
  { label: "Singapore", code: "+65" },
  { label: "Malaysia", code: "+60" },
  { label: "Australia", code: "+61" },
  { label: "New Zealand", code: "+64" },
  { label: "Germany", code: "+49" },
  { label: "France", code: "+33" },
  { label: "Netherlands", code: "+31" },
  { label: "Ireland", code: "+353" },
  { label: "Italy", code: "+39" },
  { label: "Spain", code: "+34" },
  { label: "Switzerland", code: "+41" },
  { label: "South Africa", code: "+27" },
  { label: "Qatar", code: "+974" },
  { label: "Kuwait", code: "+965" },
  { label: "Oman", code: "+968" },
  { label: "Bahrain", code: "+973" },
];

/* =========================================================
   INITIAL DATA
   ========================================================= */

const initialFormData = {
  fullName: "",
  businessName: "",
  email: "",

  countryCode: "+91",
  whatsappNumber: "",

  service: "",
  projectDetails: "",
  botField: "",
};

function ContactForm() {
  const [formData, setFormData] =
    useState(initialFormData);

  const [errors, setErrors] =
    useState({});

  const [formStatus, setFormStatus] =
    useState({
      type: "",
      message: "",
    });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* =======================================================
     CHANGE
     ======================================================= */

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: "",
      }));
    }

    if (formStatus.message) {
      setFormStatus({
        type: "",
        message: "",
      });
    }
  };

  /* =======================================================
     PHONE CHANGE
     ======================================================= */

  const handlePhoneChange = (event) => {
    /*
      Allow numbers, spaces and hyphen only.
      Country code is selected separately.
    */

    const value =
      event.target.value.replace(
        /[^\d\s-]/g,
        "",
      );

    setFormData((currentData) => ({
      ...currentData,
      whatsappNumber: value,
    }));

    if (errors.whatsappNumber) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        whatsappNumber: "",
      }));
    }

    if (formStatus.message) {
      setFormStatus({
        type: "",
        message: "",
      });
    }
  };

  /* =======================================================
     VALIDATION
     ======================================================= */

  const validateForm = () => {
    const nextErrors = {};

    const cleanName =
      formData.fullName.trim();

    const cleanEmail =
      formData.email.trim();

    const cleanPhone =
      formData.whatsappNumber.trim();

    const cleanDetails =
      formData.projectDetails.trim();

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneDigits =
      cleanPhone.replace(/\D/g, "");

    if (!cleanName) {
      nextErrors.fullName =
        "Please enter your full name.";
    } else if (
      cleanName.length < 2
    ) {
      nextErrors.fullName =
        "Please enter a valid full name.";
    }

    if (!cleanEmail) {
      nextErrors.email =
        "Please enter your email address.";
    } else if (
      !emailPattern.test(cleanEmail)
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.countryCode) {
      nextErrors.countryCode =
        "Please select a country code.";
    }

    if (!cleanPhone) {
      nextErrors.whatsappNumber =
        "Please enter your WhatsApp number.";
    } else if (
      phoneDigits.length < 6 ||
      phoneDigits.length > 15
    ) {
      nextErrors.whatsappNumber =
        "Please enter a valid mobile number.";
    }

    if (!formData.service) {
      nextErrors.service =
        "Please select a service.";
    }

    if (!cleanDetails) {
      nextErrors.projectDetails =
        "Please share your project requirement.";
    } else if (
      cleanDetails.length < 20
    ) {
      nextErrors.projectDetails =
        "Please provide at least 20 characters.";
    }

    return nextErrors;
  };

  /* =======================================================
     SUBMIT
     ======================================================= */

  const handleSubmit =
    async (event) => {
      event.preventDefault();

      const validationErrors =
        validateForm();

      if (
        Object.keys(
          validationErrors,
        ).length > 0
      ) {
        setErrors(
          validationErrors,
        );

        setFormStatus({
          type: "error",

          message:
            "Please review the highlighted fields and try again.",
        });

        const firstErrorField =
          Object.keys(
            validationErrors,
          )[0];

        document
          .querySelector(
            `[name="${firstErrorField}"]`,
          )
          ?.focus();

        return;
      }

      /* Honeypot */

      if (formData.botField) {
        return;
      }

      setErrors({});
      setIsSubmitting(true);

      setFormStatus({
        type: "",
        message: "",
      });

      /*
        Remove leading zero when country
        code is already included.

        Example:
        +91 + 07200334187
        becomes
        +91 7200334187
      */

      const localPhone =
        formData.whatsappNumber
          .replace(/\D/g, "")
          .replace(/^0+/, "");

      const completeWhatsAppNumber =
        `${formData.countryCode} ${localPhone}`;

      try {
        /*
          IMPORTANT:

          Netlify Forms AJAX endpoint.

          This works after the project is
          deployed to Netlify and the static
          hidden form in index.html has been
          detected.
        */

        const body =
          new URLSearchParams();

        body.append(
          "form-name",
          contactFormConfig.formName,
        );

        body.append(
          "fullName",
          formData.fullName.trim(),
        );

        body.append(
          "businessName",
          formData.businessName.trim(),
        );

        body.append(
          "email",
          formData.email.trim(),
        );

        /*
          Country code + mobile number
          combined into existing Netlify
          whatsappNumber field.
        */

        body.append(
          "whatsappNumber",
          completeWhatsAppNumber,
        );

        body.append(
          "service",
          formData.service,
        );

        body.append(
          "projectDetails",
          formData.projectDetails.trim(),
        );

        body.append(
          "botField",
          "",
        );

        const response =
          await fetch("/", {
            method: "POST",

            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded",
            },

            body: body.toString(),
          });

        if (!response.ok) {
          throw new Error(
            `Form submission failed: ${response.status}`,
          );
        }

        setFormData(
          initialFormData,
        );

        setFormStatus({
          type: "success",

          message:
            contactFormConfig.successMessage ||
            "Thank you. Your project enquiry has been submitted successfully.",
        });
      } catch (error) {
        console.error(
          "RR RootRise form submission error:",
          error,
        );

        setFormStatus({
          type: "error",

          message:
            "Your enquiry could not be submitted. Please try again or contact us through email.",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <div className="contact-form-card rr-contact-form-card">

      {/* ===================================================
          HEADER
          =================================================== */}

      <div className="contact-form-header">
        <h2 className="contact-form-title">
          Tell Us About Your Project
        </h2>

        <p className="contact-form-description">
          Share your business requirement,
          project idea or current digital
          challenge. We will review the
          details and respond through email.
        </p>
      </div>

      {/* ===================================================
          FORM
          =================================================== */}

      <form
        name={
          contactFormConfig.formName
        }
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="botField"
        noValidate
        onSubmit={handleSubmit}
        className="rr-project-form"
      >
        <input
          type="hidden"
          name="form-name"
          value={
            contactFormConfig.formName
          }
        />

        {/* =================================================
            HONEYPOT
            ================================================= */}

        <div className="rr-honeypot">
          <label htmlFor="botField">
            Leave this field empty
          </label>

          <input
            id="botField"
            type="text"
            name="botField"
            value={
              formData.botField
            }
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <div className="contact-form-grid rr-contact-form-grid">

          {/* =================================================
              FULL NAME
              ================================================= */}

          <div className="form-group">
            <label
              className="form-label"
              htmlFor="fullName"
            >
              Full Name{" "}

              <span className="form-label-required">
                *
              </span>
            </label>

            <input
              id="fullName"
              type="text"
              name="fullName"
              className="form-control"
              value={
                formData.fullName
              }
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              aria-invalid={
                Boolean(
                  errors.fullName,
                )
              }
            />

            {errors.fullName && (
              <span className="form-error">
                {errors.fullName}
              </span>
            )}
          </div>

          {/* =================================================
              BUSINESS
              ================================================= */}

          <div className="form-group">
            <label
              className="form-label"
              htmlFor="businessName"
            >
              Business / Company Name
            </label>

            <input
              id="businessName"
              type="text"
              name="businessName"
              className="form-control"
              value={
                formData.businessName
              }
              onChange={handleChange}
              placeholder="Enter your business name"
              autoComplete="organization"
            />
          </div>

          {/* =================================================
              EMAIL
              ================================================= */}

          <div className="form-group">
            <label
              className="form-label"
              htmlFor="email"
            >
              Email Address{" "}

              <span className="form-label-required">
                *
              </span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              value={
                formData.email
              }
              onChange={handleChange}
              placeholder="Enter your email address"
              autoComplete="email"
              aria-invalid={
                Boolean(
                  errors.email,
                )
              }
            />

            {errors.email && (
              <span className="form-error">
                {errors.email}
              </span>
            )}
          </div>

          {/* =================================================
              WHATSAPP
              ================================================= */}

          <div className="form-group">
            <label
              className="form-label"
              htmlFor="whatsappNumber"
            >
              WhatsApp Number{" "}

              <span className="form-label-required">
                *
              </span>
            </label>

            <div
              className={`rr-phone-control ${
                errors.whatsappNumber ||
                errors.countryCode
                  ? "rr-phone-control-error"
                  : ""
              }`}
            >

              {/* COUNTRY CODE */}

              <select
                id="countryCode"
                name="countryCode"
                className="rr-country-code"
                value={
                  formData.countryCode
                }
                onChange={handleChange}
                aria-label="Country code"
              >
                {countryCodes.map(
                  (country) => (
                    <option
                      key={`${country.label}-${country.code}`}
                      value={
                        country.code
                      }
                    >
                      {country.code}{" "}
                      {country.label}
                    </option>
                  ),
                )}
              </select>

              <span
                className="rr-phone-divider"
                aria-hidden="true"
              />

              {/* MOBILE NUMBER */}

              <input
                id="whatsappNumber"
                type="tel"
                name="whatsappNumber"
                className="rr-phone-input"
                value={
                  formData.whatsappNumber
                }
                onChange={
                  handlePhoneChange
                }
                placeholder="Enter mobile number"
                autoComplete="tel-national"
                inputMode="numeric"
                maxLength="18"
                aria-invalid={
                  Boolean(
                    errors.whatsappNumber,
                  )
                }
              />
            </div>

            {(
              errors.countryCode ||
              errors.whatsappNumber
            ) && (
              <span className="form-error">
                {errors.countryCode ||
                  errors.whatsappNumber}
              </span>
            )}
          </div>

          {/* =================================================
              SERVICE
              ================================================= */}

          <div className="form-group form-group-full">
            <label
              className="form-label"
              htmlFor="service"
            >
              Service Required{" "}

              <span className="form-label-required">
                *
              </span>
            </label>

            <select
              id="service"
              name="service"
              className="form-control"
              value={
                formData.service
              }
              onChange={handleChange}
              aria-invalid={
                Boolean(
                  errors.service,
                )
              }
            >
              <option value="">
                Select a service
              </option>

              {contactFormConfig.serviceOptions.map(
                (service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ),
              )}
            </select>

            {errors.service && (
              <span className="form-error">
                {errors.service}
              </span>
            )}
          </div>

          {/* =================================================
              PROJECT DETAILS
              ================================================= */}

          <div className="form-group form-group-full rr-project-details-group">

            <div className="rr-project-details-heading">
              <label
                className="form-label rr-project-details-label"
                htmlFor="projectDetails"
              >
                Tell Us Your Project Details{" "}

                <span className="form-label-required">
                  *
                </span>
              </label>

              <p className="rr-project-details-intro">
                Briefly explain your business,
                project goal, required features
                and what you would like us to
                build.
              </p>
            </div>

            <textarea
              id="projectDetails"
              name="projectDetails"
              className="form-control rr-project-details-textarea"
              value={
                formData.projectDetails
              }
              onChange={handleChange}
              placeholder="Example: We need a professional business website with service pages, enquiry form, WhatsApp integration and a mobile-responsive design."
              rows="5"
              aria-invalid={
                Boolean(
                  errors.projectDetails,
                )
              }
            />

            {errors.projectDetails ? (
              <span className="form-error">
                {
                  errors.projectDetails
                }
              </span>
            ) : (
              <span className="form-help">
                Please provide enough
                information for us to
                understand your requirement.
              </span>
            )}
          </div>
        </div>

        {/* =================================================
            STATUS
            ================================================= */}

        <div className="contact-form-footer">

          {formStatus.message && (
            <div
              className={`form-status ${
                formStatus.type ===
                "success"
                  ? "form-status-success"
                  : "form-status-error"
              }`}
              role={
                formStatus.type ===
                "error"
                  ? "alert"
                  : "status"
              }
            >
              {formStatus.message}
            </div>
          )}

          {/* =================================================
              SUBMIT
              ================================================= */}

          <button
            type="submit"
            className="button button-primary button-full rr-submit-enquiry"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="loading-spinner"
                  aria-hidden="true"
                />

                <span>
                  Submitting Enquiry...
                </span>
              </>
            ) : (
              <>
                <span>
                  {
                    contactFormConfig.submitLabel
                  }
                </span>

                <SiteIcon
                  name="arrow-right"
                  size={18}
                  strokeWidth={2}
                  className="button-icon"
                />
              </>
            )}
          </button>

          <p className="contact-form-privacy">
            {
              contactFormConfig.privacyNote
            }{" "}
            By submitting this form,
            you agree to our{" "}

            <Link
              to="/privacy-policy"
              className="inline-link"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>

      {/* ===================================================
          STYLES
          =================================================== */}

      <style>{`

        /* ==================================================
           HONEYPOT
           ================================================== */

        .rr-honeypot {
          position: absolute !important;

          width: 1px !important;
          height: 1px !important;

          padding: 0 !important;
          margin: -1px !important;

          overflow: hidden !important;

          clip: rect(
            0,
            0,
            0,
            0
          ) !important;

          white-space: nowrap !important;

          border: 0 !important;
        }


        /* ==================================================
           FORM CARD
           ================================================== */

        .rr-contact-form-card {
          height: auto !important;
          min-height: 0 !important;

          overflow: visible !important;

          padding:
            clamp(
              24px,
              2.5vw,
              34px
            ) !important;
        }


        .rr-contact-form-card
        .contact-form-header {
          margin-bottom:
            20px !important;
        }


        .rr-contact-form-card
        .contact-form-title {
          margin:
            0 !important;

          font-size:
            clamp(
              30px,
              2.4vw,
              40px
            ) !important;

          line-height:
            1.08 !important;
        }


        .rr-contact-form-card
        .contact-form-description {
          max-width:
            62ch;

          margin:
            8px 0 0 !important;

          font-size:
            16px !important;

          line-height:
            1.55 !important;
        }


        /* ==================================================
           GRID
           ================================================== */

        .rr-contact-form-grid {
          display:
            grid !important;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            ) !important;

          align-items:
            start;

          gap:
            15px 18px !important;
        }


        .rr-contact-form-grid
        .form-group-full {
          grid-column:
            1 / -1 !important;
        }


        .rr-contact-form-grid
        .form-group {
          min-width:
            0;

          gap:
            7px !important;
        }


        /* ==================================================
           NORMAL INPUTS
           ================================================== */

        .rr-contact-form-card
        input.form-control,

        .rr-contact-form-card
        select.form-control {
          width:
            100% !important;

          min-height:
            50px !important;

          height:
            50px !important;

          padding:
            0 16px !important;

          border-radius:
            10px !important;
        }


        /* ==================================================
           PHONE CONTROL
           ================================================== */

        .rr-phone-control {
          display:
            grid;

          grid-template-columns:
            168px
            1px
            minmax(
              0,
              1fr
            );

          align-items:
            center;

          width:
            100%;

          min-height:
            50px;

          overflow:
            hidden;

          border:
            1px solid
            #B9C8D2;

          border-radius:
            10px;

          background:
            #FFFFFF;

          transition:
            border-color
            0.2s ease,
            box-shadow
            0.2s ease;
        }


        .rr-phone-control:focus-within {
          border-color:
            #00CC99;

          box-shadow:
            0 0 0 3px
            rgba(
              0,
              255,
              255,
              0.08
            );
        }


        .rr-phone-control-error {
          border-color:
            #DC5757;
        }


        .rr-country-code {
          width:
            100%;

          height:
            48px;

          padding:
            0 12px;

          border:
            0;

          outline:
            0;

          color:
            #071725;

          background:
            transparent;

          font:
            inherit;

          font-size:
            14px;

          font-weight:
            650;

          cursor:
            pointer;
        }


        .rr-phone-divider {
          display:
            block;

          width:
            1px;

          height:
            28px;

          background:
            #D9E3E8;
        }


        .rr-phone-input {
          width:
            100%;

          min-width:
            0;

          height:
            48px;

          padding:
            0 15px;

          border:
            0;

          outline:
            0;

          color:
            #071725;

          background:
            transparent;

          font:
            inherit;

          font-size:
            15px;
        }


        .rr-phone-input::placeholder {
          color:
            #8093A0;
        }


        /* ==================================================
           PROJECT DETAILS
           ================================================== */

        .rr-project-details-group {
          position:
            relative;

          margin-top:
            3px;

          padding-top:
            5px;
        }


        .rr-project-details-group::before {
          display:
            block;

          width:
            100%;

          height:
            2px;

          margin-bottom:
            15px;

          content:
            "";

          border-radius:
            999px;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            );

          opacity:
            0.8;
        }


        .rr-project-details-heading {
          margin-bottom:
            9px;
        }


        .rr-project-details-label {
          display:
            block;

          margin:
            0 !important;

          font-size:
            17px !important;

          font-weight:
            800 !important;

          color:
            #071725;
        }


        .rr-project-details-intro {
          max-width:
            720px;

          margin:
            5px 0 0;

          color:
            #667B89;

          font-size:
            13.5px;

          line-height:
            1.5;
        }


        .rr-project-details-textarea {
          display:
            block;

          width:
            100% !important;

          min-height:
            132px !important;

          height:
            132px !important;

          padding:
            14px 16px !important;

          border-radius:
            10px !important;

          line-height:
            1.55 !important;

          resize:
            vertical;
        }


        .rr-project-details-textarea:focus {
          border-color:
            #00CC99 !important;

          box-shadow:
            0 0 0 3px
            rgba(
              0,
              255,
              255,
              0.08
            ) !important;
        }


        /* ==================================================
           FOOTER
           ================================================== */

        .rr-contact-form-card
        .contact-form-footer {
          display:
            grid !important;

          gap:
            10px !important;

          margin-top:
            17px !important;
        }


        .rr-submit-enquiry {
          width:
            100% !important;

          min-height:
            52px !important;

          border-radius:
            10px !important;

          color:
            #02151F !important;

          background:
            linear-gradient(
              90deg,
              #00CC99 0%,
              #00FFFF 100%
            ) !important;
        }


        .rr-submit-enquiry:disabled {
          cursor:
            not-allowed;

          opacity:
            0.68;
        }


        .rr-contact-form-card
        .contact-form-privacy {
          margin:
            0 !important;

          font-size:
            12px !important;

          line-height:
            1.55 !important;
        }


        /* ==================================================
           MOBILE
           ================================================== */

        @media (
          max-width: 680px
        ) {

          .rr-contact-form-card {
            padding:
              20px !important;
          }


          .rr-contact-form-grid {
            grid-template-columns:
              1fr !important;

            gap:
              13px !important;
          }


          .rr-contact-form-grid
          .form-group-full {
            grid-column:
              auto !important;
          }


          /*
            Country code + mobile still
            remain side-by-side.
          */

          .rr-phone-control {
            grid-template-columns:
              125px
              1px
              minmax(
                0,
                1fr
              );
          }


          .rr-country-code {
            padding:
              0 8px;

            font-size:
              12.5px;
          }


          .rr-phone-input {
            padding:
              0 11px;

            font-size:
              14px;
          }


          .rr-project-details-textarea {
            min-height:
              150px !important;

            height:
              150px !important;
          }


          .rr-submit-enquiry {
            min-height:
              50px !important;
          }
        }


        /* ==================================================
           VERY SMALL MOBILE
           ================================================== */

        @media (
          max-width: 390px
        ) {

          .rr-phone-control {
            grid-template-columns:
              105px
              1px
              minmax(
                0,
                1fr
              );
          }


          .rr-country-code {
            font-size:
              11.5px;
          }
        }

      `}</style>
    </div>
  );
}

export default ContactForm;