import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "Delivery Lens | Ceci Garcia",
  description: "Case study: Delivery Lens, evidence-grounded Agile delivery intelligence.",
};

export default function DeliveryLensPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-shell mp-case-hero">
        <Link className="mp-back" href="/projects/">← All projects</Link>
        <span className="section-kicker">CASE STUDY · DELIVERY · EVIDENCE</span>
        <h1>Delivery Lens</h1>
        <p className="mp-case-lede">An evidence-grounded delivery intelligence layer for Agile software projects, using read-only Azure DevOps data, historical snapshots and optional AI explanations.</p>
        <div className="project-tags"><span>Next.js + TypeScript</span><span>Azure DevOps</span><span>PostgreSQL</span><span>Optional OpenAI</span></div>
      </section>

      <section className="section-shell mp-screenshot-section">
        <figure className="mp-screenshot-frame">
          <img src="/images/delivery-lens-dashboard.webp" alt="Illustrative Delivery Lens dashboard showing planning baseline, scope movement, AI briefing and release evidence" />
          <figcaption>Illustrative product preview based on the current application concept. No University delivery data is shown.</figcaption>
        </figure>
      </section>

      <section className="section-shell mp-case-grid">
        <article>
          <span className="section-kicker">THE PROBLEM</span>
          <h2>Delivery conversations often begin with opinion because the historical evidence is hard to reconstruct.</h2>
          <p>Today&apos;s board state cannot reliably answer what was planned at sprint start, what moved later, or whether a release signal is genuinely proven.</p>
        </article>
        <article>
          <span className="section-kicker">THE APPROACH</span>
          <h2>Reconstruct the facts before asking what they mean.</h2>
          <p>Delivery Lens uses point-in-time evidence, explicit scope movement and separated release states so the dashboard and optional AI briefing start from the same server-side snapshot.</p>
        </article>
      </section>

      <section className="projects-section mp-case-dark">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><span className="section-number">01</span><span className="section-kicker">WHY IT&apos;S USEFUL</span></div>
            <h2>Evidence before opinion.</h2>
          </div>
          <div className="mp-benefit-grid">
            <article><span>01</span><h3>Recover what was actually planned</h3><p>Historical ASOF queries reconstruct exact baseline membership rather than judging a sprint only from today&apos;s board state.</p></article>
            <article><span>02</span><h3>Expose scope churn honestly</h3><p>Added and removed work are measured separately so unchanged totals cannot hide significant movement.</p></article>
            <article><span>03</span><h3>Keep facts separate from interpretation</h3><p>Unknown evidence remains unknown. Optional AI explains the same verified snapshot and is instructed not to invent certainty.</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell mp-case-details">
        <div>
          <span className="section-kicker">DESIGN PRINCIPLES</span>
          <h2>What the product is optimised for</h2>
        </div>
        <div className="mp-detail-list">
          <div><b>Point-in-time truth</b><p>Represent what was true at the configured cutoff instead of silently substituting current state.</p></div>
          <div><b>Explicit uncertainty</b><p>Missing or insufficient evidence is shown as unknown rather than converted into a false zero or confident conclusion.</p></div>
          <div><b>Read-only integration</b><p>Use Azure DevOps as an evidence source without turning the analysis tool into another place that mutates delivery records.</p></div>
          <div><b>AI with boundaries</b><p>Use AI to explain verified evidence, not to create facts that the source data cannot support.</p></div>
        </div>
      </section>

      <section className="section-shell mp-next-project">
        <span>Next project</span>
        <Link href="/projects/cg-shield/">CG Shield <ArrowUpRight /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
