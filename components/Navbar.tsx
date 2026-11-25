"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const pages = [["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/experience", "Experience"], ["/contact", "Contact"]];

export default function Navbar() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const links = pages.map(([href, label]) => (
    <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}
      onClick={() => { if (menu.current) menu.current.open = false; }}>
      {label}{href === "/contact" && <span aria-hidden="true"> ↗</span>}
    </Link>
  ));

  return <header className="masthead">
    <nav className="site-width nav-row" aria-label="Primary">
      <Link href="/" aria-label="Humble House home"><Image src="/brand/humble-house.png" alt="Humble House" width={850} height={211} className="wordmark" priority /></Link>
      <div className="desktop-links">{links}</div>
      <details key={pathname} ref={menu} className="mobile-links" onKeyDown={event => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}>
        <summary>Menu <span aria-hidden="true">☰</span></summary>
        <div>{links}</div>
      </details>
    </nav>
  </header>;
}
