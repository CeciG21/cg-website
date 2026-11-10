import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "AI Delivery Triage Assistant | Selected Work | Ceci Garcia",
  description:
    "A practical AI-assisted delivery triage case study: finding work-item parents, related tickets, suitable boards and knowledge guidance.",
};

export default function AIDeliveryTriagePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell mp-case-hero">
          <Link className="mp-back" href="/projects/">← Selected Work</Link>
          <span className="section-kicker">TECHNICAL CASE STUDY · DELIVERY OPERATIONS · APPLIED AI</span>
          <h1>AI Delivery Triage Assistant</h1>
          <p className="mp-case-lede">
            A GPT-based assistant I designed for my delivery team to make sense of existing work
            before creating more of it. It helps colleagues identify candidate parent features
            or epics, find related and potentially duplicate items, choose an appropriate board
            and retrieve relevant knowledge.
          </p>
          <div className="project-tags">
            <span>Custom GPT</span>
            <span>Azure DevOps APIs</span>
            <span>Work-item triage</span>
            <span>Knowledge discovery</span>
          </div>
        </section>

        <section className="section-shell mp-screenshot-section">
          <figure className="mp-screenshot-frame">
            <img
              src="/images/ai-delivery-triage-demo.svg"
              alt="Fictional AI triage example suggesting a board, a possible parent feature, related tickets and a relevant knowledge article"
              width={1440}
              height={900}
            />
            <figcaption>
              Illustrative workflow with fictional teams, item IDs and guidance.
              Not a screenshot of the internal assistant or its data.
            </figcaption>
          </figure>
        </section>

        <section className="section-shell mp-case-grid" aria-label="Project context">
          <article>
            <span className="section-kicker">THE PROBLEM</span>
            <h2>Before you add a ticket, you need to understand the backlog.</h2>
            <p>
              In a delivery environment with multiple boards, features, epics and knowledge
              sources, classifying a new request can take time. Related work might already
              exist, the right parent may not be obvious and helpful guidance can be difficult
              to locate.
            </p>
          </article>
          <article>
            <span className="section-kicker">THE APPROACH</span>
            <h2>Bring relevant context to the point of decision.</h2>
            <p>
              I designed an assistant around the questions colleagues actually ask during
              intake. Rather than replacing backlog ownership, it surfaces candidate matches,
              relevant records and references so the team can make an informed decision.
            </p>
          </article>
        </section>

        <section className="projects-section mp-case-dark" aria-labelledby="triage-flow">
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <span className="section-number">01</span>
                <span className="section-kicker">EXAMPLE WORKFLOW</span>
              </div>
              <h2 id="triage-flow">Four useful questions, one place to start.</h2>
            </div>
            <div className="mp-benefit-grid triage-benefit-grid">
              <article>
                <span>01 / PARENTS</span>
                <h3>Where does this work belong?</h3>
                <p>Look for a candidate parent epic or feature, with surrounding context for review.</p>
              </article>
              <article>
                <span>02 / RELATED WORK</span>
                <h3>Has something similar been logged?</h3>
                <p>Find potentially related or duplicated work items before creating another.</p>
              </article>
              <article>
                <span>03 / ROUTING</span>
                <h3>Which board should receive it?</h3>
                <p>Help colleagues navigate different workstreams and identify a suitable board.</p>
              </article>
              <article>
                <span>04 / KNOWLEDGE</span>
                <h3>What guidance already exists?</h3>
                <p>Search relevant wiki articles, past issues and recorded resolutions.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell mp-case-details" aria-labelledby="triage-technical">
          <div>
            <span className="section-kicker">IMPLEMENTATION</span>
            <h2 id="triage-technical">A practical assistant connected to delivery knowledge.</h2>
          </div>
          <div className="mp-detail-list">
            <div>
              <b>Conversational interface</b>
              <p>A configured GPT makes it easier to ask everyday delivery questions in natural language.</p>
            </div>
            <div>
              <b>Work-item context</b>
              <p>Azure DevOps API integration supports searches for related items, candidate hierarchy and workstream context.</p>
            </div>
            <div>
              <b>Knowledge search</b>
              <p>Wiki and existing knowledge help colleagues find guidance instead of relying on memory alone.</p>
            </div>
            <div>
              <b>Decision boundary</b>
              <p>Suggestions support human review; a candidate match is not automatically a confirmed duplicate, correct parent or final assignment.</p>
            </div>
          </div>
        </section>

        <section className="section-shell mp-case-grid" aria-label="My contribution and scope">
          <article>
            <span className="section-kicker">MY CONTRIBUTION</span>
            <h2>From recurring delivery questions to a usable AI workflow.</h2>
            <p>
              I identified the repeated intake and knowledge-retrieval questions, designed
              the assistant, connected it to relevant delivery sources and made it available
              to my team. The objective was practical support for day-to-day decisions, not AI
              adoption for its own sake.
            </p>
          </article>
          <article>
            <span className="section-kicker">SCOPE &amp; DISCLOSURE</span>
            <h2>A team-facing tool, not a public product demo.</h2>
            <p>
              The actual assistant operates with internal work-item and knowledge context.
              This case study intentionally excludes real item identifiers, boards, wiki
              content, prompts, credentials and access details. The preview is fictional,
              and no unverified adoption figures or time-saving metrics are claimed.
            </p>
          </article>
        </section>

        <section className="section-shell mp-case-grid" aria-label="Lessons and professional relevance">
          <article>
            <span className="section-kicker">WHAT I LEARNT</span>
            <h2>AI is more useful when it helps people verify a decision.</h2>
          </article>
          <article>
            <p>
              For operational triage, the value lies in making existing information easier to
              discover, explaining why an item may be related and leaving ownership with the
              people responsible for the backlog. That connects technical integration,
              information governance and delivery leadership.
            </p>
          </article>
        </section>

        <section className="section-shell mp-next-project">
          <span>Related case study</span>
          <Link href="/projects/delivery-lens/">Delivery Lens →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
