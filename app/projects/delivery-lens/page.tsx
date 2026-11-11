import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { DeliveryLensReport } from "./DeliveryLensReport";

export const metadata: Metadata = {
  title: "Delivery Lens | Selected Work | Ceci Garcia",
  description: "Interactive case study showing how I structure technical delivery: sprint goals, forecast versus actual, scope change, risks, dependencies and release readiness.",
};

export default function DeliveryLensPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell mp-case-hero">
          <Link className="mp-back" href="/projects/">← Selected Work</Link>
          <span className="section-kicker">TECHNICAL DELIVERY · INTERACTIVE REPORTING · DELIVERY GOVERNANCE</span>
          <h1>Delivery Lens</h1>
          <p className="mp-case-lede">
            A practical view of how I run technical delivery: keeping the Sprint Goal visible, comparing forecast with what actually happened, making scope movement explicit, tracking risks and dependencies, and turning release evidence into clear decisions.
          </p>
          <div className="project-tags">
            <span>Sprint goals</span>
            <span>Forecast vs actual</span>
            <span>Risks &amp; dependencies</span>
            <span>Release readiness</span>
          </div>
        </section>

        <DeliveryLensReport />

        <section className="section-shell mp-case-grid" aria-label="Delivery Lens overview">
          <article>
            <span className="section-kicker">THE APPROACH</span>
            <h2>Delivery is more than counting completed tickets.</h2>
            <p>
              The useful questions are whether the Sprint Goal remains achievable, what changed after planning, where work is slowing down, which dependencies need attention, and whether there is enough evidence to make a confident release decision.
            </p>
          </article>
          <article>
            <span className="section-kicker">WHY THIS FORMAT</span>
            <h2>Show the work of delivery, not a fictional delivery product.</h2>
            <p>
              Delivery Lens is presented as an interactive portfolio case study rather than a standalone app. The scenarios are synthetic, but the workflow mirrors the reporting, coordination and decision-making I use in technical delivery roles.
            </p>
          </article>
        </section>

        <section className="projects-section mp-case-dark" aria-labelledby="lens-work">
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div><span className="section-number">01</span><span className="section-kicker">DELIVERY PRACTICE</span></div>
              <h2 id="lens-work">What I keep visible.</h2>
            </div>
            <div className="mp-benefit-grid">
              <article>
                <span>SPRINT</span>
                <h3>Goal, forecast and scope movement</h3>
                <p>Keep the Sprint Goal separate from ticket completion, while showing what was selected, what reached Done and what changed during the Sprint.</p>
              </article>
              <article>
                <span>FLOW</span>
                <h3>Blockers, risks and dependencies</h3>
                <p>Surface work that is stuck, identify cross-team or technical dependencies, assign ownership and make the next action visible.</p>
              </article>
              <article>
                <span>RELEASE</span>
                <h3>Evidence and readiness</h3>
                <p>Bring together scope, quality, security, support and deployment signals so a release decision is explicit rather than assumed.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell mp-case-details" aria-labelledby="lens-reporting">
          <div>
            <span className="section-kicker">REPORTING</span>
            <h2 id="lens-reporting">A report should help the next decision.</h2>
          </div>
          <div className="mp-detail-list">
            <div>
              <b>Sprint Goal</b>
              <p>Start with the outcome the team is trying to achieve, then use delivery data to explain confidence in that goal.</p>
            </div>
            <div>
              <b>Forecast vs actual</b>
              <p>Compare what was selected during Sprint Planning with what reached Done, without pretending every selected item has equal importance.</p>
            </div>
            <div>
              <b>Scope change</b>
              <p>Make urgent additions, removals and carry-over visible so the story of the Sprint is not rewritten by the current board state.</p>
            </div>
            <div>
              <b>Risks &amp; dependencies</b>
              <p>Show impact, owner, status and next action. The point is not to maintain a register; it is to move the work forward.</p>
            </div>
            <div>
              <b>Release readiness</b>
              <p>Separate evidence from judgement: what is known, what remains open, what risk is accepted, and who made the decision.</p>
            </div>
          </div>
        </section>

        <section className="section-shell mp-case-grid" aria-label="How I use delivery information">
          <article>
            <span className="section-kicker">MY ROLE</span>
            <h2>Turn signals into action.</h2>
            <p>
              I use delivery information to facilitate the right conversation: challenge an unrealistic forecast, unblock a dependency, clarify ownership, protect the Sprint Goal, re-sequence work, or escalate a release risk before it becomes a surprise.
            </p>
          </article>
          <article>
            <span className="section-kicker">DATA BOUNDARIES</span>
            <h2>Real practice, synthetic examples.</h2>
            <p>
              The interactive report deliberately uses fictional teams, work items, dates and figures. It demonstrates the structure of the delivery work without publishing private programme information or reproducing internal reporting data.
            </p>
          </article>
        </section>

        <section className="section-shell mp-case-grid" aria-label="Learning and adaptation">
          <article><span className="section-kicker">INSPECT &amp; ADAPT</span><h2>The report is only useful if behaviour changes.</h2></article>
          <article><p>Across Sprints, I look for patterns such as repeated carry-over, work ageing in review, recurring external dependencies, late scope additions or release checks that repeatedly become last-minute. Those patterns should change planning, sequencing, ownership or ways of working.</p></article>
        </section>

        <section className="section-shell mp-next-project"><span>Next case study</span><Link href="/projects/cg-qa/">CG QA →</Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
