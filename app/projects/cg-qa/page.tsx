import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "CG QA | Selected Work | Ceci Garcia",
  description: "Technical case study: framework-aware GitHub branch reviews, Playwright stage verification and optional AI analysis.",
};

export default function CGQAPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
      <section className="section-shell mp-case-hero">
        <Link className="mp-back" href="/projects/">← Selected Work</Link>
        <span className="section-kicker">TECHNICAL CASE STUDY · QUALITY ENGINEERING · APPLIED AI</span>
        <h1>CG QA</h1>
        <p className="mp-case-lede">A framework-aware quality gate for code changes and deployed stage environments. CG QA combines deterministic branch review, GitHub check evidence and browser-based verification, with optional AI analysis kept as a second opinion.</p>
        <div className="project-tags"><span>GitHub branch review</span><span>Framework-aware rules</span><span>Playwright UAT</span><span>Optional AI</span></div>
      </section>
      <section className="section-shell mp-screenshot-section">
        <figure className="mp-screenshot-frame">
          <img src="/images/cg-qa-dashboard.svg" alt="Illustrative CG QA control centre showing branch review, stage verification and evidence-based status reporting" />
          <figcaption>Illustrative interface preview; no private repository, credentials or live stage data.</figcaption>
        </figure>
      </section>
      <section className="section-shell mp-case-grid" aria-label="Project overview">
        <article>
          <span className="section-kicker">OVERVIEW</span>
          <h2>Code review and stage validation in one workflow.</h2>
          <p>CG QA compares a feature branch with its base, checks the change against framework-aware review rules and gathers available GitHub CI evidence. It also supports HTTP and browser-based checks of deployed stage paths, with separate views for product owners and developers.</p>
        </article>
        <article>
          <span className="section-kicker">ENGINEERING CHALLENGE</span>
          <h2>A quality gate must distinguish evidence from assumptions.</h2>
          <p>Diff inspection, passing CI and a reachable page are different kinds of evidence. A useful review needs to identify actionable findings while making skipped or unavailable checks explicit instead of reporting false confidence.</p>
        </article>
      </section>
      <section className="projects-section mp-case-dark" aria-labelledby="qa-how">
        <div className="section-shell">
          <div className="section-heading split-heading"><div><span className="section-number">01</span><span className="section-kicker">WORKFLOW</span></div><h2 id="qa-how">How it works</h2></div>
          <div className="mp-benefit-grid">
            <article><span>STEP 01</span><h3>Review the branch</h3><p>Use the GitHub compare API, repository evidence and check statuses to inspect changes and select relevant framework-specific review rules.</p></article>
            <article><span>STEP 02</span><h3>Verify the stage site</h3><p>Check configured HTTP paths and run Playwright smoke tests for browser errors, basic accessibility signals and optional analytics markers.</p></article>
            <article><span>STEP 03</span><h3>Report the evidence</h3><p>Show findings and clearly differentiated PASS, PASS WITH COMMENTS, FAIL or NOT TESTED outcomes. AI review is an explicitly enabled second opinion.</p></article>
          </div>
        </div>
      </section>
      <section className="section-shell mp-case-details" aria-labelledby="qa-tech">
        <div><span className="section-kicker">ENGINEERING</span><h2 id="qa-tech">Technical approach</h2></div>
        <div className="mp-detail-list">
          <div><b>Branch review</b><p>GitHub comparison and check-run/status evidence support deterministic security, maintainability and dependency checks.</p></div>
          <div><b>Framework awareness</b><p>Repository signals select rules for Drupal, WordPress, Next.js or a generic fallback without making the core workflow framework-specific.</p></div>
          <div><b>Stage verification</b><p>HTTP requests and Chromium/Playwright smoke checks cover selected URLs and basic browser signals. Private and loopback targets are blocked by default.</p></div>
          <div><b>Evidence &amp; storage</b><p>Reports are stored locally in SQLite. Unavailable verification is reported as NOT TESTED rather than assumed successful.</p></div>
          <div><b>Optional AI</b><p>Semantic review is off by default and requires explicit configuration; enabling it sends selected diff content to the configured AI service.</p></div>
        </div>
      </section>
      <section className="section-shell mp-case-grid" aria-label="My contribution and current status">
        <article>
          <span className="section-kicker">MY CONTRIBUTION</span>
          <h2>Defining a quality gate that reports evidence, not confidence theatre.</h2>
          <p>I shaped and developed the review workflow around meaningful branch comparisons, framework-specific checks, clear findings for developers and product owners, and stage verification that stays separate from optional AI interpretation.</p>
        </article>
        <article>
          <span className="section-kicker">IMPLEMENTATION STATUS</span>
          <h2>A working prototype with explicit test boundaries.</h2>
          <p>The Python application implements GitHub comparison checks, deterministic review rules, browser/HTTP stage checks and locally stored reports. Optional AI review is off by default. When a verification is unavailable, the system reports NOT TESTED instead of assuming it passed. Full authenticated UAT journeys and automatic test generation remain future work.</p>
        </article>
      </section>
      <section className="section-shell mp-case-grid" aria-label="Lessons learnt">
        <article><span className="section-kicker">LESSONS LEARNT</span><h2>A clean diff, passing CI and a working page prove different things.</h2></article>
        <article><p>Quality assurance becomes more useful when review findings, automated checks, deployed-environment observations and untested paths are kept distinct. The design favours repeatable evidence and responsible operator decisions over a single unexplained pass/fail score.</p></article>
      </section>
      <section className="section-shell mp-case-grid" aria-label="Professional relevance">
        <article><span className="section-kicker">WHY IT MATTERS</span><h2>Quality assurance works best when the limits of a check are visible.</h2></article>
        <article><p>CG QA explores repeatable engineering checks alongside practical release validation. It keeps deterministic findings, stage observations and optional AI interpretation distinct so teams can make review decisions with clearer evidence and uncertainty.</p></article>
      </section>
      <section className="section-shell mp-next-project"><span>Next case study</span><Link href="/projects/cg-shield/">CG Shield →</Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
