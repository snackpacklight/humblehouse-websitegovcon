import Link from "next/link";
import Image from "next/image";

const capabilities = [
  ["Acquisition & program management", "Senior acquisition professionals support planning, execution and fielding alongside your program office."],
  ["Systems engineering & technical assistance", "Operator-informed technical support connects capability requirements with the people who use the systems."],
  ["Data & decision support", "Dashboards, AI-assisted document workflows and agent governance help teams make decisions and manage information."],
];

export default function HomePage() {
  return <>
    <section className="flight-hero">
      <div className="flight-image" aria-hidden="true" style={{ backgroundImage: "url(/aviation-dawn.webp?v=uav)" }} />
      <div className="site-width flight-copy">
        <p className="section-label hero-label">Defense acquisition &amp; advisory</p>
        <h1>Acquisition-proven.<br/><em>Mission-first.</em></h1>
        <p className="flight-intro">Senior acquisition and technical expertise for defense program offices, prime contractors and the intelligence community.</p>
        <div className="hero-actions"><Link className="btn-copper" href="/contact">Request a capability brief <span aria-hidden="true">↗</span></Link>
          <a className="document-link" href="/HumbleHouse_CapabilityStatement.pdf" download>Capability statement <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
    <section aria-label="Business credentials" className="identity-strip"><div className="site-width credentials">
      <div className="decal-pair">{[["sdvosb","Service-Disabled Veteran-Owned Small Business"],["vosb","Veteran-Owned Small Business"]].map(([file, label])=><Image key={file} src={"/brand/"+file+".webp"} alt={"SBA-certified "+label} width={48} height={60}/>)}</div>
      <div className="cert-title"><span>SBA certifications</span><strong>SDVOSB &amp; VOSB</strong></div>
      <div><span>CAGE code</span><strong>10CJ5</strong></div>
      <div><span>Unique entity ID</span><strong>SQAFH9D15NR1</strong></div>
    </div></section>
    <section className="site-width practice">
      <div><p className="section-label">Our capabilities</p><h2>Expertise for the<br/>program office.</h2><Link href="/services" className="ink-link">Explore services <span aria-hidden="true">→</span></Link></div>
      <div className="practice-list">{capabilities.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>
    <section className="experience-band"><div className="site-width experience-inner"><div><p className="section-label">Principal experience</p><h2>From naval aviation to special operations.</h2><p>Our principal brings experience supporting USSOCOM, NAVAIR, Naval Special Warfare and U.S. Strategic Command.</p></div><Link href="/experience" className="ink-link">View experience <span aria-hidden="true">→</span></Link></div></section>
  </>;
}
