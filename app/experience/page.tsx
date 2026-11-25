import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Relevant Experience | Humble House, LLC",
  description:
    "Program management and acquisition experience across USSOCOM, NAVAIR, and Naval Special Warfare, with the role and program scope for each example.",
};

const engagements = [
  {
    org: "USSOCOM PEO-TIS",
    title: "TENCAP / National Systems Support to SOF",
    role: "Acquisition Program Manager",
    budget: "$112M",
    tags: ["DoD 5000", "SOFCIDS", "R&D"],
    description:
      "Managed 8 concurrent R&D projects from concept through contract award within the TENCAP portfolio. Responsible for full acquisition lifecycle compliance under DoD 5000 and SOFCIDS frameworks. Coordinated with the Intelligence Community to provide national systems access to Special Operations Forces.",
    highlights: [
      "8 R&D projects managed from concept to contract award",
      "DoD 5000 / SOFCIDS compliant acquisition strategy",
      "IC coordination for national systems integration",
    ],
  },
  {
    org: "USSOCOM PEO-TIS",
    title: "UAS Program Management",
    role: "UAS Program Manager",
    budget: "$63M",
    tags: ["UAS", "ISR", "Group 1–3", "IPT"],
    description:
      "Led a 12-person geographically dispersed Integrated Product Team (IPT) to develop, deploy, and transfer six Group 1–3 ISR UAS capabilities to the U.S. Navy. Managed vendor relationships, requirements development, and operational fielding.",
    highlights: [
      "12-person dispersed IPT leadership",
      "6 Group 1–3 ISR capabilities developed and deployed",
      "Full transfer of capabilities to U.S. Navy",
    ],
  },
  {
    org: "USSOCOM PEO-TIS",
    title: "Commercial ISR Integration",
    role: "Firm Principal · Program Architect",
    budget: "Classified",
    tags: ["Commercial ISR", "Satellite", "Innovation"],
    description:
      "Pioneered SOCOM's first taskable commercial satellite program, integrating HawkEye 360, Sierra Nevada Corporation (SNC), and BlackSky capabilities to deliver advanced ISR decision tools directly to SOF operators. Established vendor partnerships and created the acquisition framework for sustained commercial space integration.",
    highlights: [
      "First commercial satellite tasking program for SOCOM",
      "Integrated HawkEye 360, SNC, and BlackSky",
      "Delivered advanced ISR decision tools to SOF operators",
    ],
  },
  {
    org: "NAVAIR PMA-271",
    title: "E-6B / TACAMO Program (ACAT I)",
    role: "Program Manager & Integrator",
    budget: "$356M",
    tags: ["ACAT I", "Aviation", "Strategic Comms"],
    description:
      "Managed and integrated modifications to 21 TACAMO aircraft across a $356M baseline. Oversaw a $1.2B mission system installation program and executed a $110M Northrop Grumman sustainment contract. Served as the primary integrator between the Navy, prime contractors, and Congressional stakeholders.",
    highlights: [
      "21 aircraft modifications managed and integrated",
      "$1.2B mission system installation program",
      "$110M Northrop Grumman sustainment contract",
    ],
  },
  {
    org: "Naval Special Warfare",
    title: "Quick Reaction Capability — Near-Peer Threat Countering",
    role: "Humble House · Acquisition Strategy",
    budget: "$113M",
    tags: ["QRC", "Near-Peer", "NSW"],
    description:
      "Developed a $113M acquisition strategy enabling Naval Special Warfare to field capabilities countering near-peer threat systems. Built the strategy from capability gap identification through contract award, including market research, acquisition planning, and Congressional justification.",
    highlights: [
      "$113M acquisition strategy developed end-to-end",
      "Enabled NSW near-peer threat countering capability",
      "Congressional justification and stakeholder coordination",
    ],
  },
];

const partners = [
  "HawkEye 360",
  "BlackSky",
  "Sierra Nevada Corp",
  "Lockheed Martin",
  "AeroVironment",
  "Boeing-Insitu",
  "Serco",
  "Draper",
  "Johns Hopkins APL",
];

export default function ExperiencePage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="py-20 lg:py-28 border-b"
        style={{ backgroundColor: "#1B2A4A", borderColor: "rgba(192,120,48,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C07830" }}>
            Track Record
          </p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4" style={{ color: "#FAF7F2" }}>
            Relevant Experience
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(250,247,242,0.65)" }}>
            Selected work from the firm and its personnel. Each example identifies the role and the government program it supported. Dollar figures describe the associated program, budget, or acquisition strategy.
          </p>
        </div>
      </section>

      {/* ── ENGAGEMENT CARDS ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {engagements.map((eng, i) => (
              <FadeUp key={eng.title} delay={i * 0.08}>
                <div className="rounded-lg overflow-hidden border" style={{ borderColor: "rgba(27,42,74,0.15)" }}>
                  {/* Card header */}
                  <div
                    className="px-8 py-5 flex flex-wrap items-center justify-between gap-4"
                    style={{ backgroundColor: "#1B2A4A" }}
                  >
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#C07830" }}>
                        {eng.org}
                      </p>
                      <h2 className="font-heading text-xl lg:text-2xl font-bold" style={{ color: "#FAF7F2" }}>
                        {eng.title}
                      </h2>
                    </div>
                    <div className="text-right">
                      <p className="text-xs tracking-wide mb-0.5" style={{ color: "rgba(250,247,242,0.5)" }}>
                        Program scope
                      </p>
                      <p className="font-heading text-2xl font-bold" style={{ color: "#C07830" }}>
                        {eng.budget}
                      </p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-8 py-7 bg-white">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="text-sm font-semibold" style={{ color: "#1B2A4A" }}>
                        Role: {eng.role}
                      </span>
                      <span style={{ color: "rgba(27,42,74,0.3)" }}>|</span>
                      {eng.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-semibold rounded-full border"
                          style={{
                            borderColor: "rgba(192,120,48,0.4)",
                            color: "#C07830",
                            backgroundColor: "rgba(192,120,48,0.06)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#444" }}>
                      {eng.description}
                    </p>

                    <ul className="space-y-2">
                      {eng.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "#2D2D2D" }}>
                          <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#C07830" }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY PARTNERS ── */}
      <section className="py-16 border-y" style={{ backgroundColor: "#F2EEE7", borderColor: "rgba(27,42,74,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-8 text-center"
              style={{ color: "#C07830" }}
            >
              Industry Relationships
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {partners.map((p) => (
                <span
                  key={p}
                  className="font-heading text-base font-semibold"
                  style={{ color: "#1B2A4A", opacity: 0.65 }}
                >
                  {p}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#1B2A4A" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#FAF7F2" }}>
              Interested in a full capability brief?
            </h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ color: "rgba(250,247,242,0.65)" }}>
              We&apos;ll walk you through our relevant experience and discuss how we can support your specific program.
            </p>
            <Link href="/contact" className="btn-copper px-8 py-4 text-sm">
              Request a Briefing
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
