import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Humble House, LLC",
  description:
    "Connect with Humble House, LLC — CSS & SETA professional services. Whether you're a prime contractor looking to team or a program office exploring support options.",
};

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: "Principal",
    value: "Riccardo S. Hicks",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "(360) 720-6304",
    href: "tel:3607206304",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "riccardo@humblehouseusa.com",
    href: "mailto:riccardo@humblehouseusa.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Tampa, FL — Nationwide & Global",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    label: "Website",
    value: "humblehouseusa.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="py-20 lg:py-28 border-b" style={{ backgroundColor: "#1B2A4A", borderColor: "rgba(192,120,48,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C07830" }}>
            Get in Touch
          </p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4" style={{ color: "#FAF7F2" }}>
            Let&apos;s Connect
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(250,247,242,0.65)" }}>
            Whether you&apos;re a prime contractor looking to team or a program office exploring support options — we want to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — contact details */}
            <FadeUp className="lg:col-span-4">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: "#1B2A4A" }}>
                    Direct Contact
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                    Reach out directly or use the form. You&apos;ll hear back from Riccardo personally — no intake team, no routing delay.
                  </p>
                </div>

                <ul className="space-y-5">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div
                        className="mt-0.5 w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "rgba(192,120,48,0.12)", color: "#C07830" }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "#C07830" }}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium transition-colors duration-200 hover:underline"
                            style={{ color: "#1B2A4A" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium" style={{ color: "#1B2A4A" }}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Entity info */}
                <div
                  className="rounded-lg px-5 py-5 border space-y-2 text-xs"
                  style={{ borderColor: "rgba(192,120,48,0.25)", backgroundColor: "rgba(192,120,48,0.04)" }}
                >
                  <p className="font-semibold tracking-widest uppercase mb-3" style={{ color: "#C07830" }}>
                    Entity Information
                  </p>
                  {[
                    ["CAGE", "10CJ5"],
                    ["UEI", "SQAFH9D15NR1"],
                    ["SDVOSB", "SBA certified"],
                    ["VOSB", "SBA certified"],
                    ["DAWIA", "PM Level II"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <span className="font-semibold w-20 shrink-0" style={{ color: "#1B2A4A" }}>{k}</span>
                      <span style={{ color: "#5a5a5a" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={0.15} className="lg:col-span-8">
              <div className="rounded-lg border p-8 lg:p-10" style={{ borderColor: "rgba(27,42,74,0.12)", backgroundColor: "#fff" }}>
                <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: "#1B2A4A" }}>
                  Send a Message
                </h2>
                <p className="text-sm mb-8" style={{ color: "#5a5a5a" }}>
                  Fill out the form below and Riccardo will respond within one business day.
                </p>
                <ContactForm />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
