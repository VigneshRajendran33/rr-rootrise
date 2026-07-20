import { useState } from "react";
import { Link } from "react-router-dom";

import SiteIcon from "./SiteIcon";

import {
  contactFormConfig,
} from "../data/siteData";

const initialFormData = {
  fullName: "",
  businessName: "",
  email: "",
  whatsappNumber: "",
  service: "",
  projectDetails: "",
  botField: "",
};

function ContactForm() {
  const [formData, setFormData] =
    useState(initialFormData);

  const [errors, setErrors] = useState({});

  const [formStatus, setFormStatus] =
    useState({
      type: "",
      message: "",
    });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

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

  const validateForm = () => {
    const nextErrors = {};

    const cleanName = formData.fullName.trim();
    const cleanEmail = formData.email.trim();
    const cleanWhatsApp =
      formData.whatsappNumber.trim();
    const cleanDetails =
      formData.projectDetails.trim();

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneDigits =
      cleanWhatsApp.replace(/\D/g, "");

    if (!cleanName) {
      nextErrors.fullName =
        "Please enter your full name.";
    } else if (cleanName.length < 2) {
      nextErrors.fullName =
        "Please enter a valid full name.";
    }

    if (!cleanEmail) {
      nextErrors.email =
        "Please enter your email address.";
    } else if (!emailPattern.test(cleanEmail)) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!cleanWhatsApp) {
      nextErrors.whatsappNumber =
        "Please enter your WhatsApp number.";
    } else if (
      phoneDigits.length < 8 ||
      phoneDigits.length > 15
    ) {
      nextErrors.whatsappNumber =
        "Please enter a valid WhatsApp number.";
    }

    if (!formData.service) {
      nextErrors.service =
        "Please select a service.";
    }

    if (!cleanDetails) {
      nextErrors.projectDetails =
        "Please share your project requirement.";
    } else if (cleanDetails.length < 20) {
      nextErrors.projectDetails =
        "Please provide at least 20 characters.";
    }

    return nextErrors;
  };

  const encodeFormData = (data) => {
    return new URLSearchParams(data).toString();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);

      setFormStatus({
        type: "error",
        message:
          "Please review the highlighted fields and try again.",
      });

      const firstErrorField =
        Object.keys(validationErrors)[0];

      document
        .querySelector(
          `[name="${firstErrorField}"]`,
        )
        ?.focus();

      return;
    }

    if (formData.botField) {
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setFormStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: encodeFormData({
          "form-name":
            contactFormConfig.formName,
          fullName: formData.fullName.trim(),
          businessName:
            formData.businessName.trim(),
          email: formData.email.trim(),
          whatsappNumber:
            formData.whatsappNumber.trim(),
          service: formData.service,
          projectDetails:
            formData.projectDetails.trim(),
          botField: formData.botField,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "The form submission was unsuccessful.",
        );
      }

      setFormData(initialFormData);

      setFormStatus({
        type: "success",
        message:
          contactFormConfig.successMessage,
      });
    } catch {
      setFormStatus({
        type: "error",
        message:
          contactFormConfig.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-card">
      <div className="contact-form-header">
        <h2 className="contact-form-title">
          {contactFormConfig.title}
        </h2>

        <p className="contact-form-description">
          {contactFormConfig.description}
        </p>
      </div>

      <form
        name={contactFormConfig.formName}
        method="POST"
        data-netlify="true"
        netlify-honeypot="botField"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="form-name"
          value={contactFormConfig.formName}
        />

        <div className="sr-only">
          <label htmlFor="botField">
            Do not fill this field
          </label>

          <input
            id="botField"
            type="text"
            name="botField"
            value={formData.botField}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <div className="contact-form-grid">
          <div className="form-group">
            <label
              className="form-label"
              htmlFor="fullName"
            >
              Full Name{" "}
              <span
                className="form-label-required"
                aria-hidden="true"
              >
                *
              </span>
            </label>

            <input
              id="fullName"
              type="text"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              aria-invalid={
                Boolean(errors.fullName)
              }
              aria-describedby={
                errors.fullName
                  ? "fullName-error"
                  : undefined
              }
            />

            {errors.fullName ? (
              <span
                id="fullName-error"
                className="form-error"
              >
                {errors.fullName}
              </span>
            ) : null}
          </div>

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
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Enter your business name"
              autoComplete="organization"
            />
          </div>

          <div className="form-group">
            <label
              className="form-label"
              htmlFor="email"
            >
              Email Address{" "}
              <span
                className="form-label-required"
                aria-hidden="true"
              >
                *
              </span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              autoComplete="email"
              aria-invalid={
                Boolean(errors.email)
              }
              aria-describedby={
                errors.email
                  ? "email-error"
                  : undefined
              }
            />

            {errors.email ? (
              <span
                id="email-error"
                className="form-error"
              >
                {errors.email}
              </span>
            ) : null}
          </div>

          <div className="form-group">
            <label
              className="form-label"
              htmlFor="whatsappNumber"
            >
              WhatsApp Number{" "}
              <span
                className="form-label-required"
                aria-hidden="true"
              >
                *
              </span>
            </label>

            <input
              id="whatsappNumber"
              type="tel"
              name="whatsappNumber"
              className="form-control"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="Include country code"
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={Boolean(
                errors.whatsappNumber,
              )}
              aria-describedby={
                errors.whatsappNumber
                  ? "whatsappNumber-error"
                  : undefined
              }
            />

            {errors.whatsappNumber ? (
              <span
                id="whatsappNumber-error"
                className="form-error"
              >
                {errors.whatsappNumber}
              </span>
            ) : null}
          </div>

          <div className="form-group form-group-full">
            <label
              className="form-label"
              htmlFor="service"
            >
              Service Required{" "}
              <span
                className="form-label-required"
                aria-hidden="true"
              >
                *
              </span>
            </label>

            <select
              id="service"
              name="service"
              className="form-control"
              value={formData.service}
              onChange={handleChange}
              aria-invalid={
                Boolean(errors.service)
              }
              aria-describedby={
                errors.service
                  ? "service-error"
                  : undefined
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

            {errors.service ? (
              <span
                id="service-error"
                className="form-error"
              >
                {errors.service}
              </span>
            ) : null}
          </div>

          <div className="form-group form-group-full">
            <label
              className="form-label"
              htmlFor="projectDetails"
            >
              Project Details{" "}
              <span
                className="form-label-required"
                aria-hidden="true"
              >
                *
              </span>
            </label>

            <textarea
              id="projectDetails"
              name="projectDetails"
              className="form-control"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us about your business, project idea and required solution"
              rows="7"
              aria-invalid={Boolean(
                errors.projectDetails,
              )}
              aria-describedby={
                errors.projectDetails
                  ? "projectDetails-error"
                  : "projectDetails-help"
              }
            />

            {errors.projectDetails ? (
              <span
                id="projectDetails-error"
                className="form-error"
              >
                {errors.projectDetails}
              </span>
            ) : (
              <span
                id="projectDetails-help"
                className="form-help"
              >
                Please provide enough information
                for us to understand your requirement.
              </span>
            )}
          </div>
        </div>

        <div className="contact-form-footer">
          {formStatus.message ? (
            <div
              className={[
                "form-status",
                formStatus.type === "success"
                  ? "form-status-success"
                  : "form-status-error",
              ].join(" ")}
              role={
                formStatus.type === "error"
                  ? "alert"
                  : "status"
              }
              aria-live="polite"
            >
              {formStatus.message}
            </div>
          ) : null}

          <button
            type="submit"
            className="button button-primary button-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="loading-spinner"
                  aria-hidden="true"
                />

                <span>Submitting Enquiry...</span>
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
            {contactFormConfig.privacyNote} By
            submitting this form, you agree to our{" "}
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
    </div>
  );
}

export default ContactForm;