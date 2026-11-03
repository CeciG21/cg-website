import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Delivery Lens | AI Portfolio | Ceci Garcia",
  description: "Engineering portfolio case study: Delivery Lens, historical delivery evidence and optional AI explanations.",
};

export default function DeliveryLensPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell mp-case-hero">
        <Link className="mp-back" href="/projects/">← AI portfolio</Link>
        <span className="section-kicker">ENGINEERING PORTFOLIO · DELIVERY DATA · AI</span>
        <h1>Delivery Lens</h1>
        <p className="mp-case-lede">A portfolio example exploring evidence-grounded Agile delivery intelligence, using read-only Azure DevOps data, historical snapshots and optional AI-assisted explanations.</p>
        <div className="project-tags"><span>Next.js + TypeScript</span><span>Azure DevOps</span><span>PostgreSQL</span><span>Optional AI</span></div>
      </section>
      <section className="section-shell mp-screenshot-section">
        <figure className="mp-screenshot-frame">
          <img src="/images/delivery-lens-dashboard.svg" alt="Illustrative Delivery Lens dashboard with planning baseline, scope movement, AI briefing and release evidence" />
          <figcaption>Illustrative interface preview. No University or private delivery data is shown.</figcaption>
        </figure>
      </section>
      <section className="section-shell mp-case-grid">
        <article><span className="section-kicker">THE ENGINEERING PROBLEM</span><h2>Historical delivery evidence can be difficult to reconstruct.</h2><p>Today&apos;s board state does not reliably show what was planned at sprint start, what moved afterwards, or which release signals have supporting evidence.</p></article>
        <article><span className="section-kicker">THE APPROACH</span><h2>Reconstruct the facts before interpreting them.</h2><p>Delivery Lens explores point-in-time evidence, explicit scope movement and separated release states so dashboards and optional AI briefings can be based on the same verified snapshot.</p></article>
      </section>
      <section className="projects-section mp-case-dark">
        <div className="section-shell">
          <div className="section-heading split-heading"><div><span className="section-number">01</span><span className="section-kicker">ENGINEERING CONSIDERATIONS</span></div><h2>Evidence first; interpretation second.</h2></div>
          <div className="mp-benefit-grid">
            <article><span>01</span><h3>Point-in-time baselines</h3><p>Historical ASOF queries help reconstruct work-item membership at the selected cutoff.</p></article>
            <article><span>02</span><h3>Visible scope changes</h3><p>Added and removed work are separated so a stable total cannot conceal significant movement.</p></article>
            <article><span>03</span><h3>Bounded AI explanation</h3><p>Missing evidence remains unknown. Optional AI can explain the same verified snapshot without inventing facts.</p></article>
          </div>
        </div>
      </section>
      <section className="section-shell mp-case-details">
        <div><span className="section-kicker">DESIGN PRINCIPLES</span><h2>What this example demonstrates</h2></div>
        <div className="mp-detail-list">
          <div><b>Historical accuracy</b><p>Represent what was true at a known cutoff instead of silently substituting current state.</p></div>
          <div><b>Uncertainty</b><p>Show missing evidence as unknown rather than making false numeric or narrative conclusions.</p></div>
          <div><b>Read-only integration</b><p>Read evidence from Azure DevOps without modifying the delivery source records.</p></div>
          <div><b>AI with boundaries</b><p>Use optional AI to interpret verified evidence, not create data unsupported by the source.</p></div>
        </div>
      </section>
      <section className="section-shell mp-next-project"><span>Another portfolio example</span><Link href="/projects/cg-shield/">CG Shield →</Link></section>
      <SiteFooter />
    </main>
  );
}
