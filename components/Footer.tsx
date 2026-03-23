import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B2A4A" }} className="text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-heading text-xl font-bold" style={{ color: "#C07830" }}>
                Humble House, LLC
              </h3>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(250,247,242,0.5)" }}>
                Mission-Ready. Operator-Informed. Acquisition-Proven.
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.65)" }}>
              CSS & SETA professional services for DoW, USSOCOM, and the Intelligence Community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C07830" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(250,247,242,0.65)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#C07830" }}>
              Entity Information
            </h4>
            <dl className="space-y-2 text-sm" style={{ color: "rgba(250,247,242,0.65)" }}>
              <div className="flex gap-2">
                <dt className="font-semibold text-white/80">CAGE:</dt>
                <dd>10CJ5</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-white/80">UEI:</dt>
                <dd>SQAFH9D15NR1</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-white/80">Status:</dt>
                <dd>SDVOSB (Pending)</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-white/80">8(a):</dt>
                <dd>Pending</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-white/80">Location:</dt>
                <dd>Tampa, FL</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(192,120,48,0.2)", color: "rgba(250,247,242,0.4)" }}
        >
          <p>&copy; 2025 Humble House, LLC. All rights reserved.</p>
          <p>Tampa, FL &mdash; Nationwide &amp; Global Capability</p>
        </div>
      </div>
    </footer>
  );
}
