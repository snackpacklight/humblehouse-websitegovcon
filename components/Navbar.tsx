"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#1B2A4A" }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <HouseLogo />
          <div className="flex flex-col leading-none">
            <span
              className="font-heading text-lg font-bold tracking-wide"
              style={{ color: "#C07830" }}
            >
              Humble House
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(250,247,242,0.6)" }}
            >
              LLC
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === href
                    ? "text-copper border-b-2 border-copper pb-0.5"
                    : "text-cream/80 hover:text-copper"
                }`}
                style={
                  pathname === href
                    ? { color: "#C07830", borderColor: "#C07830" }
                    : {}
                }
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 text-sm font-semibold rounded-[6px] transition-colors duration-200"
              style={{
                backgroundColor: "#C07830",
                color: "#FAF7F2",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#D4924A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#C07830")
              }
            >
              Let&apos;s Connect
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded"
          style={{ color: "#FAF7F2" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 space-y-3"
          style={{
            backgroundColor: "#111C33",
            borderColor: "rgba(192,120,48,0.3)",
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 text-sm font-medium tracking-wide transition-colors ${
                pathname === href ? "" : "hover:text-copper"
              }`}
              style={{
                color: pathname === href ? "#C07830" : "rgba(250,247,242,0.85)",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 px-5 py-2.5 text-sm font-semibold text-center rounded-[6px]"
            style={{ backgroundColor: "#C07830", color: "#FAF7F2" }}
          >
            Let&apos;s Connect
          </Link>
        </div>
      )}
    </header>
  );
}

function HouseLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Dove above */}
      <path
        d="M18 4c-1 0-3 1-4 2.5C15 7 16.5 7.5 18 7.5s3-.5 4-1C21 5 19 4 18 4z"
        fill="#C07830"
        opacity="0.85"
      />
      <path
        d="M14 6.5c-2 1-3.5 2-4 3.5 1 .5 2.5.5 4 0 .5-.7 1-1.5 0-3.5z"
        fill="#C07830"
        opacity="0.7"
      />
      {/* House */}
      <path
        d="M18 11L6 20h3v11h18V20h3L18 11z"
        fill="none"
        stroke="#C07830"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect x="15" y="25" width="6" height="6" fill="#C07830" opacity="0.5" />
    </svg>
  );
}
