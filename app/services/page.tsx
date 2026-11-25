import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Services | Humble House, LLC",
  description:
    "CSS & SETA professional services — embedded acquisition, program management, systems engineering, and technical advisory support for DoD program offices and prime contractors.",
};

const services = [
  {
    title: "Contractor Support Services (CSS)",
    abbr: "CSS",
    description:
      "Embedded acquisition, program management, and technical personnel supporting government program offices and prime contractor teams across the full capability lifecycle.",
    details: [
      "Senior acquisition professionals embedded directly into your program office or contractor team",
      "Program management leadership across all acquisition phases — from pre-Milestone A through sustainment",
      "SOW/PWS authoring, source selection support, and contract execution",
      "DoD 5000 compliance, budget execution, and congressional reporting",
      "Interagency coordination and IPT leadership",
    ],
  },
  {
    title: "Systems Engineering & Technical Assistance (SETA)",
    abbr: "SETA",
    description:
      "Independent technical advisory and engineering support — requirements development, systems analysis, test coordination, and technical documentation.",
    details: [
      "Requirements development, gap analysis, and capability needs documentation",
      "Systems analysis and technical evaluation in support of source selection",
      "Test and evaluation coordination — planning, oversight, and documentation",
      "Technical documentation, white papers, and engineering assessments",
      "Independent cost and schedule analysis",
    ],
  },
];

const competencies = [
  "CSS", "SETA", "Defense Acquisition", "Program Management",
  "ISR & UAS (Group 1–3)", "SOW/PWS Authoring", "DoD 5000 Compliance",
  "SOFCIDS", "Budget Execution", "IPT Leadership", "Source Selection Support",
  "Congressional Reporting", "Rapid Fielding", "TS/SCI Environments",
  "Dashboards & Decision Support", "AI-Assisted Document Workflows",
  "Agent Architecture & Governance", "Commercial ISR Integration", "ACAT I Programs",
];

const naics = [
  { code: "541611", label: "Administrative Management Consulting" },
  { code: "541330", label: "Engineering Services" },
  { code: "541618", label: "Other Management Consulting" },
  { code: "541690", label: "Other Scientific & Technical Consulting" },
  { code: "561110", label: "Office Administrative Services" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="py-20 lg:py-28 border-b"
        style={{ backgroundColor: "#1B2A4A", borderColor: "rgba(192,120,48,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C07830" }}>
            What We Do
          </p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4" style={{ color: "#FAF7F2" }}>
            Services
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(250,247,242,0.65)" }}>
            Senior acquisition professionals embedded where it matters — program offices, contract teams, and the field.
          </p>
        </div>
      </section>

      {/* ── PRIMARY SERVICE CARDS ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {services.map((svc, i) => (
            <FadeUp key={svc.abbr} delay={i * 0.1}>
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: "rgba(27,42,74,0.15)" }}>
                {/* Card header */}
                <div className="px-8 py-6" style={{ backgroundColor: "#1B2A4A" }}>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(192,120,48,0.2)", color: "#C07830" }}
                    >
                      {svc.abbr}
                    </span>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold" style={{ color: "#FAF7F2" }}>
                      {svc.title}
                    </h2>
                  </div>
                </div>
                {/* Card body */}
                <div className="px-8 py-8 bg-white">
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#444" }}>
                    {svc.description}
                  </p>
                  <ul className="space-y-3">
                    {svc.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm" style={{ color: "#2D2D2D" }}>
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#C07830" }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── COMPETENCIES ── */}
      <section
        className="py-20 border-y"
        style={{ backgroundColor: "#F2EEE7", borderColor: "rgba(27,42,74,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C07830" }}>
              Core Competencies
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-10" style={{ color: "#1B2A4A" }}>
              Areas of Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {competencies.map((comp) => (
                <span
                  key={comp}
                  className="px-4 py-2 text-sm font-semibold rounded-[6px] border"
                  style={{ backgroundColor: "#fff", borderColor: "rgba(192,120,48,0.35)", color: "#1B2A4A" }}
                >
                  {comp}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── NAICS CODES ── */}
      <section className="py-16" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "#C07830" }}>
              NAICS Codes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {naics.map((n) => (
                <div
                  key={n.code}
                  className="flex items-center gap-4 px-5 py-4 rounded-lg border"
                  style={{ borderColor: "rgba(27,42,74,0.12)", backgroundColor: "#fff" }}
                >
                  <span className="font-mono text-lg font-bold" style={{ color: "#C07830" }}>
                    {n.code}
                  </span>
                  <span className="text-sm" style={{ color: "#2D2D2D" }}>
                    {n.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 border-t"
        style={{ backgroundColor: "#1B2A4A", borderColor: "rgba(192,120,48,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#FAF7F2" }}>
              Looking for embedded acquisition support?
            </h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ color: "rgba(250,247,242,0.65)" }}>
              Tell us about your program and we&apos;ll put the right person in the room.
            </p>
            <Link href="/contact" className="btn-copper px-8 py-4 text-sm">
              Request a Capability Brief
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
