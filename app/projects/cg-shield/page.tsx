import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "CG Shield | Selected Work | Ceci Garcia",
  description: "Technical case study: privacy-aware traffic analysis, local-first detection and optional AI review.",
};

export default function CGShieldPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell mp-case-hero">
        <Link className="mp-back" href="/projects/">← Selected Work</Link>
        <span className="section-kicker">TECHNICAL CASE STUDY · SECURITY · APPLIED AI</span>
        <h1>CG Shield</h1>
        <p className="mp-case-lede">A privacy-aware approach to website traffic protection, combining local analysis, optional AI review and controlled mitigation. The focus is on transparent security decisions that remain under operator control.</p>
        <div className="project-tags"><span>Local-first analysis</span><span>Cloudflare</span><span>Optional AI review</span><span>Privacy-aware design</span></div>
      </section>
      <section className="section-shell mp-screenshot-section">
        <figure className="mp-screenshot-frame">
          <img src="/images/cg-shield-dashboard.svg" alt="CG Shield illustrative dashboard showing protection status, traffic and recent detections" />
          <figcaption>Illustrative interface preview; no live visitor or production data.</figcaption>
        </figure>
      </section>
      <section className="section-shell mp-case-grid" aria-label="Project overview">
        <article>
          <span className="section-kicker">OVERVIEW</span>
          <h2>Traffic protection with clear operational boundaries.</h2>
          <p>CG Shield brings request signals, protection state and review decisions into a single operator-focused workflow. Its design prioritises fast local checks before more expensive analysis.</p>
        </article>
        <article>
          <span className="section-kicker">ENGINEERING CHALLENGE</span>
          <h2>Balancing detection with privacy and proportionate action.</h2>
          <p>Suspicious requests require investigation, but permanent blocking or sending all traffic to external AI services would introduce avoidable risk, cost and complexity.</p>
        </article>
      </section>
      <section className="projects-section mp-case-dark" aria-labelledby="shield-how">
        <div className="section-shell">
          <div className="section-heading split-heading"><div><span className="section-number">01</span><span className="section-kicker">WORKFLOW</span></div><h2 id="shield-how">How it works</h2></div>
          <div className="mp-benefit-grid">
            <article><span>STEP 01</span><h3>Analyse locally</h3><p>Inspect traffic signals through lightweight rules before deciding whether additional review is warranted.</p></article>
            <article><span>STEP 02</span><h3>Review ambiguous activity</h3><p>Reserve optional AI assessment for uncertain cases and retain the reasoning alongside the signal.</p></article>
            <article><span>STEP 03</span><h3>Apply bounded mitigation</h3><p>Use observation, challenge and defence modes, with temporary actions and visible protection state.</p></article>
          </div>
        </div>
      </section>
      <section className="section-shell mp-case-details" aria-labelledby="shield-tech">
        <div><span className="section-kicker">ENGINEERING</span><h2 id="shield-tech">Technical approach</h2></div>
        <div className="mp-detail-list">
          <div><b>Detection</b><p>Local-first rules analyse request signals without making AI a requirement for every decision.</p></div>
          <div><b>AI integration</b><p>Optional second-stage review for cases where rule-based signals alone are inconclusive.</p></div>
          <div><b>Edge controls</b><p>Cloudflare is the enforcement layer, with deliberately scoped protection and reversible interventions.</p></div>
          <div><b>Observability</b><p>Operator-facing visibility into recent detections, decisions and the current protection mode.</p></div>
        </div>
      </section>
      <section className="section-shell mp-case-grid" aria-label="Professional relevance">
        <article><span className="section-kicker">WHY IT MATTERS</span><h2>Security decisions should be useful, explainable and reversible.</h2></article>
        <article><p>The project brings together traffic analysis, privacy considerations and the practical limits of AI automation. It reflects an engineering approach that favours clear controls and operational oversight over unnecessary complexity.</p></article>
      </section>
      <section className="section-shell mp-next-project"><span>Next case study</span><Link href="/projects/delivery-lens/">Delivery Lens →</Link></section>
      <SiteFooter />
    </main>
  );
}
