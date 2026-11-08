import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Delivery Lens | Selected Work | Ceci Garcia",
  description: "Technical case study: historical Agile delivery analysis, evidence-led reporting and optional AI interpretation.",
};

export default function DeliveryLensPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
      <section className="section-shell mp-case-hero">
        <Link className="mp-back" href="/projects/">← Selected Work</Link>
        <span className="section-kicker">TECHNICAL CASE STUDY · DELIVERY ANALYTICS · APPLIED AI</span>
        <h1>Delivery Lens</h1>
        <p className="mp-case-lede">A working MVP for evidence-led Agile delivery analysis. Historical snapshots, scope movement and optional AI interpretation support better-informed conversations about delivery and release readiness, while making gaps in the evidence visible.</p>
        <div className="project-tags"><span>Next.js &amp; TypeScript</span><span>Azure DevOps</span><span>PostgreSQL</span><span>Optional AI</span></div>
      </section>
      <section className="section-shell mp-screenshot-section">
        <figure className="mp-screenshot-frame">
          <img src="/images/delivery-lens-dashboard.svg" alt="Delivery Lens illustrative dashboard showing sprint baseline, scope movement and release evidence" />
          <figcaption>Illustrative interface preview; no University or private delivery data.</figcaption>
        </figure>
      </section>
      <section className="section-shell mp-case-grid" aria-label="Project overview">
        <article>
          <span className="section-kicker">OVERVIEW</span>
          <h2>Delivery reporting grounded in historical evidence.</h2>
          <p>Delivery Lens examines how a sprint changes over time rather than relying solely on the current board. Its analysis distinguishes planned work, later additions, removals and the evidence available for release decisions.</p>
        </article>
        <article>
          <span className="section-kicker">ENGINEERING CHALLENGE</span>
          <h2>Today’s board cannot explain yesterday’s plan.</h2>
          <p>Current work-item states can obscure original commitments and subsequent scope changes. Reporting needs point-in-time data and an explicit distinction between confirmed and missing evidence.</p>
        </article>
      </section>
      <section className="projects-section mp-case-dark" aria-labelledby="lens-how">
        <div className="section-shell">
          <div className="section-heading split-heading"><div><span className="section-number">01</span><span className="section-kicker">WORKFLOW</span></div><h2 id="lens-how">How it works</h2></div>
          <div className="mp-benefit-grid">
            <article><span>STEP 01</span><h3>Rebuild the baseline</h3><p>Use historical Azure DevOps evidence to establish which work items were in scope at the selected cutoff.</p></article>
            <article><span>STEP 02</span><h3>Explain what changed</h3><p>Track additions, removals and delivery signals separately instead of relying on a single headline total.</p></article>
            <article><span>STEP 03</span><h3>Interpret the evidence</h3><p>Present clear indicators and allow optional AI explanations based on the same verified snapshot, without filling gaps with guesses.</p></article>
          </div>
        </div>
      </section>
      <section className="section-shell mp-case-details" aria-labelledby="lens-tech">
        <div><span className="section-kicker">ENGINEERING</span><h2 id="lens-tech">Technical approach</h2></div>
        <div className="mp-detail-list">
          <div><b>Web application</b><p>Next.js and TypeScript for the interface and evidence-focused reporting workflow.</p></div>
          <div><b>Data sources</b><p>Read-only Azure DevOps integration, with PostgreSQL for snapshot and analysis data.</p></div>
          <div><b>Historical analysis</b><p>Point-in-time queries compare original sprint scope with later movement when reliable source evidence is available; incomplete results are labelled unknown.</p></div>
          <div><b>AI boundaries</b><p>Optional AI interpretation is constrained by the available evidence; unknowns remain explicit.</p></div>
        </div>
      </section>
      <section className="section-shell mp-case-grid" aria-label="My contribution and current status">
        <article>
          <span className="section-kicker">MY CONTRIBUTION</span>
          <h2>Turning a delivery reporting problem into a focused product.</h2>
          <p>I identified the need to distinguish original sprint commitments from later scope changes, defined an evidence-first MVP and developed the reporting approach around readable metrics, explicit uncertainty and optional AI-assisted explanations.</p>
        </article>
        <article>
          <span className="section-kicker">IMPLEMENTATION STATUS</span>
          <h2>An MVP with clear validation boundaries.</h2>
          <p>The project includes a Next.js interface, read-only Azure DevOps integration, PostgreSQL evidence snapshots and CSV/JSON reporting. Historical parity with all existing reporting rules and reconciliation of live metrics are not claimed complete. Demo views are illustrative; unknown metrics remain unknown.</p>
        </article>
      </section>
      <section className="section-shell mp-case-grid" aria-label="Lessons learnt">
        <article><span className="section-kicker">LESSONS LEARNT</span><h2>A good report must show what it cannot prove.</h2></article>
        <article><p>Current work-item states do not always reconstruct an earlier commitment. Baselines, time cut-offs, source freshness and differences between completed work and release evidence must be explicit before conclusions are trusted.</p></article>
      </section>
      <section className="section-shell mp-case-grid" aria-label="Professional relevance">
        <article><span className="section-kicker">WHY IT MATTERS</span><h2>More reliable evidence supports better delivery decisions.</h2></article>
        <article><p>The work connects software architecture, delivery governance and applied AI. It focuses on traceable reasoning, clear uncertainty and information that teams can use to review progress without mistaking a narrative for a verified fact.</p></article>
      </section>
      <section className="section-shell mp-next-project"><span>Next case study</span><Link href="/projects/cg-qa/">CG QA →</Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
