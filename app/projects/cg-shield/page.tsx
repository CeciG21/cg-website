import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "CG Shield | AI Portfolio | Ceci Garcia",
  description: "Engineering portfolio case study: CG Shield, privacy-aware traffic analysis and optional AI review.",
};

export default function CGShieldPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell mp-case-hero">
        <Link className="mp-back" href="/projects/">← AI portfolio</Link>
        <span className="section-kicker">ENGINEERING PORTFOLIO · SECURITY · OPTIONAL AI</span>
        <h1>CG Shield</h1>
        <p className="mp-case-lede">A technical portfolio example exploring privacy-aware traffic protection, cheap local analysis and optional AI review, with bounded, reversible mitigations.</p>
        <div className="project-tags"><span>Local-first analysis</span><span>Cloudflare</span><span>Optional AI review</span><span>Privacy controls</span></div>
      </section>
      <section className="section-shell mp-screenshot-section">
        <figure className="mp-screenshot-frame">
          <img src="/images/cg-shield-dashboard.svg" alt="Illustrative CG Shield dashboard showing protection status, traffic activity and recent detections" />
          <figcaption>Illustrative interface preview. No real visitor or production data is shown.</figcaption>
        </figure>
      </section>
      <section className="section-shell mp-case-grid">
        <article><span className="section-kicker">THE ENGINEERING PROBLEM</span><h2>Website protection needs clear decisions and proportionate responses.</h2><p>Smaller teams may need to inspect suspicious traffic without submitting every request to an AI model or blocking visitors permanently after a single automated judgement.</p></article>
        <article><span className="section-kicker">THE APPROACH</span><h2>Analyse locally first; escalate when it helps.</h2><p>CG Shield explores local rule-based analysis first, reserving optional AI review for ambiguous cases and using Cloudflare for edge enforcement. Protection modes keep mitigation decisions visible and bounded.</p></article>
      </section>
      <section className="projects-section mp-case-dark">
        <div className="section-shell">
          <div className="section-heading split-heading"><div><span className="section-number">01</span><span className="section-kicker">ENGINEERING CONSIDERATIONS</span></div><h2>Balancing analysis, privacy and operator control.</h2></div>
          <div className="mp-benefit-grid">
            <article><span>01</span><h3>AI where it adds value</h3><p>Local rules can screen routine traffic; a second opinion can be reserved for genuinely ambiguous signals.</p></article>
            <article><span>02</span><h3>Explainable analysis</h3><p>Keep detection signals and decisions understandable rather than hiding them inside opaque automation.</p></article>
            <article><span>03</span><h3>Bounded action</h3><p>Observation, challenge and defence modes support progressive, temporary and reversible mitigations.</p></article>
          </div>
        </div>
      </section>
      <section className="section-shell mp-case-details">
        <div><span className="section-kicker">DESIGN PRINCIPLES</span><h2>What this example demonstrates</h2></div>
        <div className="mp-detail-list">
          <div><b>Privacy awareness</b><p>Minimise unnecessary exposure of visitor data and start with local processing.</p></div>
          <div><b>Bounded automation</b><p>Make mitigations visible, limited in scope and reversible.</p></div>
          <div><b>Operational clarity</b><p>Present detection history and current protection state in an operator-focused interface.</p></div>
          <div><b>Progressive defence</b><p>Distinguish observation, challenge and stronger responses rather than treating every signal as grounds for blocking.</p></div>
        </div>
      </section>
      <section className="section-shell mp-next-project"><span>Another portfolio example</span><Link href="/projects/delivery-lens/">Delivery Lens →</Link></section>
      <SiteFooter />
    </main>
  );
}
