"use client";

import { useState, type FormEvent } from "react";
import { mapsLink, site, telLink, whatsappLink } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projectTypeOptions = [
  "Bungalow/Residence",
  "Apartment Project",
  "Commercial Project",
  "Industrial Project",
  "Interior Design",
  "3D Visualization",
  "PMRDA Sanctioning",
  "NA Layout",
  "Other",
];

const budgetOptions = [
  "Prefer to discuss",
  "Under ₹25 Lakh",
  "₹25 Lakh – ₹1 Crore",
  "₹1 – ₹5 Crore",
  "Above ₹5 Crore",
];

const timelineOptions = [
  "Immediately",
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "Exploring options",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Native validation already ran; double-check consent
    if (!data.get("consent")) {
      setStatus("error");
      setErrorMsg("Please accept the privacy consent to continue.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/inquiry", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Submission failed");
      setStatus("success");
      trackEvent("form_submit_success", {
        projectType: String(data.get("projectType") || ""),
      });
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "We could not submit your inquiry. Please try again, or call us directly on " +
          site.phoneDisplay +
          "."
      );
      trackEvent("form_submit_error", {
        message: err instanceof Error ? err.message : "unknown",
      });
    }
  }

  const inputClass =
    "w-full rounded-sm border border-brand-border bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-grey/60 focus:border-brand-red";
  const labelClass = "mb-1.5 block text-sm font-medium text-brand-charcoal";

  return (
    <section id="contact" className="bg-brand-offwhite py-16 pb-28 md:py-28 md:pb-28">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr] lg:gap-20">
          {/* Form */}
          <div>
            <SectionHeading
              label="Start a Conversation"
              title="Request a Consultation"
              intro="Share the essentials of your project. We will review the details and get back to you with the right next step."
            />

            {status === "success" ? (
              <Reveal className="mt-10">
                <div
                  role="status"
                  className="border-l-2 border-brand-red bg-white p-8 shadow-sm"
                >
                  <p className="font-heading text-xl font-bold text-brand-charcoal">
                    Thank you — your inquiry has been received.
                  </p>
                  <p className="mt-3 text-base text-brand-grey">
                    Our team will contact you shortly. If your project is
                    urgent, call us on{" "}
                    <a href={telLink} className="font-semibold text-brand-red">
                      {site.phoneDisplay}
                    </a>{" "}
                    or message us on WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-brand-red underline-offset-4 hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </Reveal>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 grid gap-5 sm:grid-cols-2"
                noValidate={false}
              >
                {/* Honeypot — hidden from real users, catches bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className={labelClass}>
                    Mobile Number *
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    inputMode="tel"
                    pattern="[0-9+\-\s]{10,15}"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="location" className={labelClass}>
                    Project Location *
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    className={inputClass}
                    placeholder="City / village and district"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    {projectTypeOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="plotSize" className={labelClass}>
                    Approx. Plot / Project Size
                  </label>
                  <input
                    id="plotSize"
                    name="plotSize"
                    type="text"
                    className={inputClass}
                    placeholder="e.g. 2400 sq ft plot / 5 acre layout"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select budget range (optional)</option>
                    {budgetOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className={labelClass}>
                    Expected Start Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select timeline (optional)</option>
                    {timelineOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputClass}
                    placeholder="Tell us briefly about your site and what you would like to build."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="attachment" className={labelClass}>
                    Site Drawing or Photo (optional)
                  </label>
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.webp,.dwg"
                    className="block w-full text-sm text-brand-grey file:mr-4 file:rounded-sm file:border file:border-brand-border file:bg-white file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-brand-charcoal"
                  />
                  <p className="mt-1.5 text-xs text-brand-grey">
                    PDF, image or DWG up to 10 MB.
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm text-brand-grey">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-0.5 h-4 w-4 accent-brand-red"
                    />
                    <span>
                      I agree that Vastukala Associates may contact me about
                      this inquiry. My details will not be shared with third
                      parties. *
                    </span>
                  </label>
                </div>

                {status === "error" ? (
                  <p
                    role="alert"
                    className="border-l-2 border-brand-red bg-white p-4 text-sm text-brand-charcoal sm:col-span-2"
                  >
                    {errorMsg}
                  </p>
                ) : null}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-sm bg-brand-red px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-redDark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === "submitting" ? "Submitting…" : "Request a Consultation"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact details */}
          <Reveal delay={0.1}>
            <div className="border border-brand-border bg-white p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-brand-charcoal">
                Visit or Call the Studio
              </h3>

              <dl className="mt-6 space-y-6 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold uppercase tracking-caps text-[11px] text-brand-grey">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={telLink}
                      onClick={() => trackEvent("cta_call", { placement: "contact_panel" })}
                      className="font-heading text-lg font-bold text-brand-charcoal hover:text-brand-red"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-caps text-[11px] text-brand-grey">
                    WhatsApp
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("cta_whatsapp", { placement: "contact_panel" })}
                      className="font-medium text-brand-red underline-offset-4 hover:underline"
                    >
                      Start a WhatsApp conversation →
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-caps text-[11px] text-brand-grey">
                    Office
                  </dt>
                  <dd className="mt-1 text-brand-ink">
                    {site.address.line1},<br />
                    {site.address.line2},<br />
                    {site.address.city}, {site.address.state} {site.address.pincode}
                  </dd>
                  <dd className="mt-2">
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("cta_directions", { placement: "contact_panel" })}
                      className="font-medium text-brand-red underline-offset-4 hover:underline"
                    >
                      Get directions on Google Maps →
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-caps text-[11px] text-brand-grey">
                    Business Hours
                  </dt>
                  <dd className="mt-1 text-brand-ink">{site.businessHours}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
