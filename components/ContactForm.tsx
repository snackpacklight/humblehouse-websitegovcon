"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok || (await res.json()).success !== true) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch {
      setErrorMessage("Your message could not be sent. Please try again or email riccardo@humblehouseusa.com.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg px-8 py-12 text-center border"
        style={{ borderColor: "rgba(192,120,48,0.3)", backgroundColor: "rgba(192,120,48,0.05)" }}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "rgba(192,120,48,0.15)" }}>
          <svg className="w-6 h-6" fill="none" stroke="#C07830" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 role="status" className="font-heading text-2xl font-bold mb-2" style={{ color: "#1B2A4A" }}>
          Message received.
        </h3>
        <p className="text-sm" style={{ color: "#5a5a5a" }}>
          Thank you for reaching out. Riccardo will be in touch within one business day.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 text-sm rounded-[6px] border outline-none transition-colors duration-200";
  const inputStyle = {
    borderColor: "rgba(27,42,74,0.25)",
    backgroundColor: "#fff",
    color: "#2D2D2D",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold tracking-wide mb-1.5" style={{ color: "#1B2A4A" }}>
            Name <span style={{ color: "#C07830" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            maxLength={120}
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#C07830")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(27,42,74,0.25)")}
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-xs font-semibold tracking-wide mb-1.5" style={{ color: "#1B2A4A" }}>
            Organization <span style={{ color: "#C07830" }}>*</span>
          </label>
          <input
            id="organization"
            name="organization"
            maxLength={180}
            type="text"
            required
            value={form.organization}
            onChange={handleChange}
            placeholder="Company or agency"
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#C07830")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(27,42,74,0.25)")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold tracking-wide mb-1.5" style={{ color: "#1B2A4A" }}>
            Email <span style={{ color: "#C07830" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            maxLength={254}
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@organization.gov"
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#C07830")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(27,42,74,0.25)")}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold tracking-wide mb-1.5" style={{ color: "#1B2A4A" }}>
            Phone <span style={{ color: "rgba(27,42,74,0.45)" }}>(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            maxLength={50}
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(xxx) xxx-xxxx"
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#C07830")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(27,42,74,0.25)")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold tracking-wide mb-1.5" style={{ color: "#1B2A4A" }}>
          How can we support you? <span style={{ color: "#C07830" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
            maxLength={5000}
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your program, teaming opportunity, or support need…"
          className={`${inputClass} resize-none`}
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#C07830")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(27,42,74,0.25)")}
        />
      </div>

      {errorMessage && <p role="alert" className="text-sm text-red-800">{errorMessage}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold rounded-[6px] transition-colors duration-200 disabled:opacity-70"
        style={{ backgroundColor: "#C07830", color: "#FAF7F2" }}
        onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "#D4924A"; }}
        onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = "#C07830"; }}
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
