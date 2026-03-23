import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const valueProps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "CSS & SETA Delivery",
    body: "We embed senior acquisition professionals directly into program offices and contractor teams — not junior staff, not a bench. Senior expertise from day one.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: "DoW & SOCOM Experience",
    body: "Our principal has managed $112M+ programs at USSOCOM PEO-TIS and NAVAIR PMA-271 — from ACAT I aviation to rapid-fielding ISR. We know the environment because we lived it.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rapid. Lean. Trusted.",
    body: "Veteran-owned structure means no layers, no overhead — just senior expertise on day one. When you need the right person in the room fast, that's what we deliver.",
  },
];

const orgLogos = ["USSOCOM", "NAVAIR", "NSW", "U.S. Strategic Command"];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-pattern relative overflow-hidden" style={{ minHeight: "88vh" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: "#C07830", opacity: 0.6 }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center" style={{ minHeight: "88vh" }}>
          <div className="max-w-3xl pt-16 pb-24">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase"
              style={{ borderColor: "rgba(192,120,48,0.45)", color: "#C07830", backgroundColor: "rgba(192,120,48,0.08)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#C07830" }} />
              Service-Disabled Veteran-Owned Small Business
            </div>

            <h1
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
              style={{ color: "#FAF7F2" }}
            >
              Acquisition-Proven.{" "}
              <span style={{ color: "#C07830" }}>Mission-First.</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(250,247,242,0.75)" }}>
              CSS &amp; SETA professional services for DoW, USSOCOM, and the Intelligence Community. Senior acquisition expertise — no layers, no overhead.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-copper px-7 py-3.5 text-sm">
                Request a Capability Brief
              </Link>
              <a
                href="/HumbleHouse_CapabilityStatement.pdf"
                className="btn-copper-outline px-7 py-3.5 text-sm"
              >
                Download Capability Statement
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to bottom, transparent, #FAF7F2)" }}
        />
      </section>

      {/* ── TRUST BAR ── */}
      <section className="py-5 border-y" style={{ borderColor: "rgba(192,120,48,0.2)", backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ul
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#1B2A4A" }}
          >
            {[
              "SDVOSB (Pending)",
              "8(a) (Pending)",
              "CAGE: 10CJ5",
              "UEI: SQAFH9D15NR1",
              "DAWIA PM II",
              "TS/SCI Eligible",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1 h-4 rounded-full inline-block" style={{ backgroundColor: "#C07830" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-2xl mb-16">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C07830" }}>
                Why Humble House
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#1B2A4A" }}>
                The expertise to support. The experience to lead.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {valueProps.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.12}>
                <div
                  className="p-8 rounded-lg border h-full"
                  style={{ borderColor: "rgba(27,42,74,0.12)", backgroundColor: "#fff" }}
                >
                  <div className="mb-5" style={{ color: "#C07830" }}>
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "#1B2A4A" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                    {item.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-16 border-y" style={{ borderColor: "rgba(27,42,74,0.1)", backgroundColor: "#F2EEE7" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-xs font-semibold tracking-widest uppercase mb-10" style={{ color: "#C07830" }}>
              Organizations Supported
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              {orgLogos.map((org) => (
                <span
                  key={org}
                  className="font-heading text-base font-semibold tracking-wide"
                  style={{ color: "#1B2A4A", opacity: 0.7 }}
                >
                  {org}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#1B2A4A" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(192,120,48,0.8)" }}
            >
              Prime Contractors &amp; Program Offices
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#FAF7F2" }}>
              Ready to team?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(250,247,242,0.65)" }}>
              Whether you&apos;re building a teaming arrangement or a program office exploring support options — one conversation is all it takes.
            </p>
            <Link href="/contact" className="btn-copper px-8 py-4 text-base">
              Start the Conversation
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
