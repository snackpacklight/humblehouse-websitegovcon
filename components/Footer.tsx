import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <footer className="site-footer">
    <div className="site-width footer-grid">
      <div><Link href="/" aria-label="Humble House home"><Image src="/brand/humble-house.png" alt="Humble House" width={850} height={211} className="wordmark" /></Link>
        <p>Senior acquisition and technical advisory services for federal program offices and prime contractors.</p></div>
      <nav aria-label="Footer"><h2>Explore</h2>{["About","Services","Experience","Contact"].map(label => <Link key={label} href={"/"+label.toLowerCase()}>{label}</Link>)}<Link href="/capability-statement">Capability statement (web version)</Link></nav>
      <div><h2>Contracting information</h2><p>SBA-certified SDVOSB and VOSB<br/>CAGE 10CJ5<br/>UEI SQAFH9D15NR1<br/>Tampa, Florida</p></div>
    </div>
    <div className="site-width copyright">© {new Date().getFullYear()} Humble House, LLC. All rights reserved.</div>
  </footer>;
}
