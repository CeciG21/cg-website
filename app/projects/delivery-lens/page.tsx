import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { DeliveryLensReport } from "./DeliveryLensReport";

export const metadata: Metadata = {
  title: "Delivery Lens | Selected Work | Ceci Garcia",
  description: "A visual case study showing how I combine Scrum, Kanban and CI/CD practices in technical delivery.",
};

export default function DeliveryLensPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell mp-case-hero">
          <Link className="mp-back" href="/projects/">← Selected Work</Link>
          <span className="section-kicker">TECHNICAL DELIVERY · SCRUM · KANBAN · CI/CD</span>
          <h1>Delivery Lens</h1>
          <p className="mp-case-lede">
            A visual view of how I run technical delivery: Scrum for focus and regular inspection, Kanban practices for flow and visibility, and CI/CD for getting software safely into production.
          </p>
          <div className="project-tags">
            <span>Scrum</span>
            <span>Kanban</span>
            <span>Sprint reporting</span>
            <span>CI/CD</span>
          </div>
        </section>

        <DeliveryLensReport />

        <section className="section-shell mp-case-grid" aria-label="Delivery Lens principles">
          <article>
            <span className="section-kicker">THE PRINCIPLE</span>
            <h2>Use reporting to create transparency, not control.</h2>
            <p>
              I keep reporting focused on the Sprint Goal, meaningful changes and what the team learned. The purpose is to support inspection and adaptation, not to turn every work item into a management metric.
            </p>
          </article>
          <article>
            <span className="section-kicker">THE PRACTICE</span>
            <h2>Different practices solve different delivery problems.</h2>
            <p>
              Scrum gives the team focus and cadence. Kanban practices help make flow and blockers visible. CI/CD provides the engineering path from change to production. I use them together rather than forcing every part of delivery into one framework.
            </p>
          </article>
        </section>

        <section className="section-shell mp-case-grid" aria-label="Synthetic data note">
          <article>
            <span className="section-kicker">PORTFOLIO EXAMPLE</span>
            <h2>Real approach, synthetic scenarios.</h2>
          </article>
          <article>
            <p>
              The Sprints, security patches, delivery figures and release examples in Delivery Lens are fictional. They demonstrate how I structure delivery conversations without publishing private programme information from current or previous roles.
            </p>
          </article>
        </section>

        <section className="section-shell mp-next-project">
          <span>Next case study</span>
          <Link href="/projects/cg-qa/">CG QA →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
