import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "CG Shield | Ceci Garcia",
  description: "Case study: CG Shield, a privacy-aware website traffic protection layer.",
};

export default function CGShieldPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell mp-case-hero">
        <Link className="mp-back" href="/projects/">← All projects</Link>
        <span className="section-kicker">CASE STUDY · SECURITY · PRIVACY</span>
        <h1>CG Shield</h1>
        <p className="mp-case-lede">A privacy-aware website traffic protection layer that starts with cheap local analysis and keeps automated mitigations bounded, explainable and reversible.</p>
        <div className="project-tags"><span>Local-first analysis</span><span>Cloudflare</span><span>Optional AI review</span><span>Privacy controls</span></div>
      </section>

      <section className="section-shell mp-screenshot-section">
        <figure className="mp-screenshot-frame">
          <img src="/images/cg-shield-dashboard.webp" alt="Illustrative CG Shield dashboard showing protection status, traffic activity and recent detections" />
          <figcaption>Illustrative product preview based on the current application concept. No live visitor data is shown.</figcaption>
        </figure>
      </section>

      <section className="section-shell mp-case-grid">
        <article>
          <span className="section-kicker">THE PROBLEM</span>
          <h2>Website protection often becomes expensive, opaque or too aggressive.</h2>
          <p>Small teams need a way to inspect suspicious traffic without sending every request to an AI model or permanently blocking visitors based on a single automated judgement.</p>
        </article>
        <article>
          <span className="section-kicker">THE APPROACH</span>
          <h2>Start local. Escalate only when useful.</h2>
          <p>CG Shield performs cheap local analysis first. Optional AI review is reserved for ambiguous cases, while Cloudflare provides the edge enforcement layer. Protection modes are designed to remain visible and bounded.</p>
        </article>
      </section>

      <section className="projects-section mp-case-dark">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><span className="section-number">01</span><span className="section-kicker">WHY IT&apos;S USEFUL</span></div>
            <h2>Protection without surrendering control.</h2>
          </div>
          <div className="mp-benefit-grid">
            <article><span>01</span><h3>Reduce unnecessary AI cost</h3><p>Local rules pre-filter traffic first; optional AI is reserved for cases that genuinely need a second opinion.</p></article>
            <article><span>02</span><h3>Make decisions explainable</h3><p>Detection, classification and policy decisions are surfaced as evidence instead of disappearing inside opaque automation.</p></article>
            <article><span>03</span><h3>Keep mitigation controlled</h3><p>Observation, challenge and defence modes let operators increase protection deliberately, with temporary and reversible actions.</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell mp-case-details">
        <div>
          <span className="section-kicker">DESIGN PRINCIPLES</span>
          <h2>What the product is optimised for</h2>
        </div>
        <div className="mp-detail-list">
          <div><b>Privacy aware</b><p>Minimise unnecessary exposure of visitor data and keep local analysis as the default first step.</p></div>
          <div><b>Bounded automation</b><p>Automated mitigations should have clear scope, duration and operator visibility.</p></div>
          <div><b>Operational clarity</b><p>Show system health, detection history and current protection state in one operator-focused interface.</p></div>
          <div><b>Progressive defence</b><p>Move from observation to challenge to stronger protection instead of treating every signal as a reason to block.</p></div>
        </div>
      </section>

      <section className="section-shell mp-next-project">
        <span>Next project</span>
        <Link href="/projects/delivery-lens/">Delivery Lens <ArrowUpRight /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
