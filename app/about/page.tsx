import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About | Humble House, LLC",
  description:
    "Humble House, LLC delivers senior-level DoD acquisition expertise to government agencies and prime contractors — without the overhead of a large firm. SBA-certified SDVOSB and VOSB.",
};

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Deep Domain Knowledge",
    body: "Decades of combined experience across DoD acquisition — from pre-Milestone A concept development through sustainment — spanning aviation, ISR, space, and SOF-peculiar programs.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "No-Overhead Delivery",
    body: "Senior professionals embedded on day one. No ramp-up period, no account management layers, no junior staff substituted after contract award. You get exactly what you engaged.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: "Integrity Under Pressure",
    body: "Our team has operated under Congressional scrutiny, rapid fielding timelines, and classified environments. We have delivered in each. Mission does not pause for bureaucratic friction.",
  },
];

const stats = [
  { num: "21", label: "TACAMO Aircraft Modifications Supported" },
  { num: "20+", label: "Years of Combined DoD Acquisition Experience" },
  { num: "5+", label: "Major Commands & Program Offices Supported" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section
        className="py-20 lg:py-28 border-b"
        style={{ backgroundColor: "#1B2A4A", borderColor: "rgba(192,120,48,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C07830" }}>
            Who We Are
          </p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6" style={{ color: "#FAF7F2" }}>
            About Humble House
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(250,247,242,0.65)" }}>
            A veteran-owned professional services firm built for one purpose: delivering the senior acquisition expertise your program actually needs.
          </p>
        </div>
      </section>

      {/* ── NARRATIVE ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">

            {/* Belief / Philosophy */}
            <FadeUp>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "#C07830" }}
              >
                Our Conviction
              </p>
              <p className="font-heading text-2xl lg:text-3xl font-bold leading-snug mb-12" style={{ color: "#1B2A4A" }}>
                The best support a program office can receive comes from professionals who have held acquisition authority — not professionals who have read about it.
              </p>
            </FadeUp>

            {/* Experience */}
            <FadeUp delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed mb-10" style={{ color: "#444" }}>
                <p>
                  Humble House was built on a conviction that has driven every program we&apos;ve touched. We don&apos;t send coordinators. We don&apos;t staff off benches. We assign senior practitioners — professionals who have held acquisition authority, led integrated product teams, and delivered under pressure — because that is the standard mission-critical programs require.
                </p>
                <p>
                  Our team brings decades of combined experience in DoD acquisition, program management, and technical advisory support across some of the most complex and consequential programs in the defense enterprise. Our personnel bring experience spanning ACAT I aviation programs at NAVAIR, rapid-fielding ISR initiatives at USSOCOM PEO-TIS, and Quick Reaction Capability development for Naval Special Warfare. We have operated at the intersection of acquisition compliance, operational urgency, and Congressional scrutiny, and we know how to deliver in all three environments simultaneously.
                </p>
              </div>
            </FadeUp>

            {/* Value proposition */}
            <FadeUp delay={0.15}>
              <div className="space-y-5 text-base leading-relaxed mb-10" style={{ color: "#444" }}>
                <p>
                  Humble House exists to give government agencies and prime contractors access to that level of expertise without the overhead, the layers, or the learning curve of a large firm. From day one, you get senior professionals embedded in your environment — aligned to your timelines, your stakeholders, and your mission. Not a team that needs to be oriented. A team that gets to work.
                </p>
              </div>
            </FadeUp>

            {/* Credibility */}
            <FadeUp delay={0.2}>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "#444" }}>
                <p>
                  Humble House is based in Tampa, Florida, and supports customers nationwide. The SBA certified Humble House as both a Service-Disabled Veteran-Owned Small Business (SDVOSB) and a Veteran-Owned Small Business (VOSB), effective September 14, 2026.
                </p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── CAPABILITY PILLARS ── */}
      <section
        className="py-20 border-y"
        style={{ backgroundColor: "#F2EEE7", borderColor: "rgba(27,42,74,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: "#C07830" }}>
              What Sets Us Apart
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-14 text-center" style={{ color: "#1B2A4A" }}>
              How we operate
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <FadeUp key={pillar.title} delay={i * 0.12}>
                <div
                  className="px-8 py-8 rounded-lg border h-full"
                  style={{ backgroundColor: "#fff", borderColor: "rgba(27,42,74,0.12)" }}
                >
                  <div className="mb-5" style={{ color: "#C07830" }}>
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "#1B2A4A" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                    {pillar.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs font-semibold tracking-widest uppercase mb-10 text-center" style={{ color: "#C07830" }}>
              Our Mission
            </p>
            <blockquote
              className="pl-8 py-8 pr-8 rounded-r-lg"
              style={{ borderLeft: "4px solid #C07830", backgroundColor: "rgba(192,120,48,0.05)" }}
            >
              <p
                className="font-heading text-2xl lg:text-3xl font-bold italic leading-snug mb-6"
                style={{ color: "#1B2A4A" }}
              >
                &ldquo;To deliver mission-ready, high-integrity professional support services that strengthen national security and empower the agencies we serve.&rdquo;
              </p>
              <footer className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#C07830" }}>
                Humble House, LLC
              </footer>
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section
        className="py-16 border-t"
        style={{ backgroundColor: "#1B2A4A", borderColor: "rgba(192,120,48,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.num}>
                  <div className="font-heading text-4xl font-bold mb-2" style={{ color: "#C07830" }}>
                    {stat.num}
                  </div>
                  <div className="text-sm" style={{ color: "rgba(250,247,242,0.65)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#1B2A4A" }}>
              This is a firm you can trust on a program.
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-base" style={{ color: "#5a5a5a" }}>
              One conversation is all it takes to determine fit. Let&apos;s talk about your program and how we can support it.
            </p>
            <Link href="/contact" className="btn-copper px-8 py-4 text-sm">
              Start the Conversation
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
