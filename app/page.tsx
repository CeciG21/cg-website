import Link from "next/link";
import { ArrowUpRight, SiteFooter, SiteHeader } from "./components/SiteChrome";

const expertise = [
  "Software architecture",
  "Technical delivery",
  "React & Next.js",
  "Enterprise web platforms",
  "APIs & integrations",
  "Security & SSO",
  "Agile delivery",
  "Engineering leadership",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Software engineering · Technical delivery · Product thinking</div>
          <h1>I build systems that teams can <em>trust.</em></h1>
          <p className="hero-lede">
            I&apos;m Ceci Garcia, a software engineering and technical delivery leader with 14+ years of experience turning complex requirements into secure, maintainable digital products.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects/">Explore selected projects <ArrowUpRight /></Link>
            <Link className="button ghost" href="/about/">View my profile</Link>
          </div>
          <div className="hero-meta"><span>Oxford, UK</span><span>Engineering leadership</span><span>Hands-on delivery</span></div>
        </div>

        <div className="hero-visual" aria-label="Career impact summary">
          <div className="orbit-card main-card">
            <span className="card-label">CURRENT FOCUS</span>
            <h2>Engineering leadership without losing the engineering.</h2>
            <p>Architecture, delivery, security and team systems designed to make complex work clearer and safer.</p>
            <div className="main-card-footer"><span className="live-dot" /> University-scale digital platforms</div>
          </div>
          <div className="orbit-card stat-card stat-one"><b>16</b><span>cross-functional colleagues coordinated</span></div>
          <div className="orbit-card stat-card stat-two"><b>~30%</b><span>higher reported delivery velocity</span></div>
          <div className="orbit-card stat-card stat-three"><b>~40%</b><span>fewer post-release incidents</span></div>
          <div className="hero-grid" aria-hidden="true" />
        </div>
      </section>

      <section className="trust-strip" aria-label="Core expertise">
        <div className="ticker">
          {expertise.map((item) => <span key={item}>{item}<i>✦</i></span>)}
        </div>
      </section>

      <section className="section-shell mp-home-intro">
        <div className="section-heading split-heading">
          <div><span className="section-number">01</span><span className="section-kicker">WHAT I BRING</span></div>
          <h2>I lead technical delivery, modernise complex platforms, and build products that turn operational problems into usable software.</h2>
        </div>
        <div className="mp-home-actions">
          <Link className="mp-link-card" href="/about/">
            <span>PROFILE</span><h3>Experience, leadership and technical depth</h3><p>From hands-on development to university-scale technical delivery.</p><b>Read profile →</b>
          </Link>
          <Link className="mp-link-card dark" href="/projects/">
            <span>SELECTED WORK</span><h3>Products built around real operational problems</h3><p>Explore CG Shield and Delivery Lens as full case studies.</p><b>View projects →</b>
          </Link>
        </div>
      </section>

      <section className="section-shell mp-project-teasers">
        <div className="section-heading split-heading">
          <div><span className="section-number">02</span><span className="section-kicker">SELECTED BUILDS</span></div>
          <h2>Two projects that show how I think, design and build.</h2>
        </div>

        <div className="mp-teaser-grid">
          <Link href="/projects/cg-shield/" className="mp-project-card">
            <div className="mp-image-frame"><img src="/images/cg-shield-dashboard.webp" alt="Illustrative CG Shield dashboard preview" /></div>
            <div className="mp-project-copy"><span>SECURITY · PRIVACY · OPERATIONS</span><h3>CG Shield</h3><p>Local-first traffic protection with bounded, reversible mitigations and optional AI review.</p><b>Open case study <ArrowUpRight /></b></div>
          </Link>

          <Link href="/projects/delivery-lens/" className="mp-project-card">
            <div className="mp-image-frame"><img src="/images/delivery-lens-dashboard.webp" alt="Illustrative Delivery Lens dashboard preview" /></div>
            <div className="mp-project-copy"><span>DELIVERY · EVIDENCE · AI</span><h3>Delivery Lens</h3><p>Evidence-grounded Agile delivery intelligence built around historical facts, not retrospective guesswork.</p><b>Open case study <ArrowUpRight /></b></div>
          </Link>
        </div>
      </section>

      <section className="section-shell contact-section">
        <div className="contact-card">
          <div><span className="section-kicker">LET&apos;S TALK</span><h2>Complex problem?<br />I like those.</h2></div>
          <div className="contact-copy"><p>I&apos;m interested in engineering leadership, technical delivery, platform modernisation and product work where clear thinking matters as much as clean code.</p><div className="contact-actions"><a className="button light" href="mailto:ceci.garcia.ox@gmail.com">ceci.garcia.ox@gmail.com <ArrowUpRight /></a></div></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
