import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "GliptoDev | AI-Assisted Epic Planning | Ceci Garcia",
  description: "Using a Custom GPT, Actions and structured API contracts to turn software requirements into reviewable development epics.",
};

const actionSchema = [
  "openapi: 3.1.0",
  "info:",
  "  title: Epic Planning Actions",
  "  version: '1.0'",
  "paths:",
  "  /epics/drafts:",
  "    post:",
  "      operationId: createEpicDraft",
  "      summary: Create an epic proposal for review",
  "      requestBody:",
  "        required: true",
  "        content:",
  "          application/json:",
  "            schema:",
  "              type: object",
  "              required: [title, objective]",
  "              properties:",
  "                title: { type: string }",
  "                objective: { type: string }",
  "                acceptanceCriteria:",
  "                  type: array",
  "                  items: { type: string }",
  "      responses:",
  "        '200':",
  "          description: Structured draft accepted",
].join("\n");

export default function GliptoDevPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell mp-case-hero">
          <Link className="mp-back" href="/projects/">← Selected Work</Link>
          <span className="section-kicker">TECHNICAL CASE STUDY · CUSTOM GPT · API INTEGRATION</span>
          <h1>GliptoDev</h1>
          <p className="mp-case-lede">
            An AI-assisted approach to turning a software requirement into a structured development
            epic. I configured a Custom GPT and its Actions integration to help translate
            natural-language ideas into clearer, reviewable planning work.
          </p>
          <div className="project-tags">
            <span>Custom GPT</span><span>OpenAPI Actions</span><span>API design</span><span>Epic planning</span>
          </div>
        </section>

        <section className="section-shell mp-screenshot-section">
          <figure className="mp-screenshot-frame">
            <img
              src="/images/gliptodev-epic-actions.svg"
              alt="GliptoDev interface example: a proposed development epic alongside an Actions API contract"
              width={1440}
              height={900}
            />
          </figure>
        </section>

        <section className="section-shell mp-case-grid" aria-label="Context and approach">
          <article>
            <span className="section-kicker">THE CHALLENGE</span>
            <h2>A promising idea needs more than a generated paragraph.</h2>
            <p>
              Product requests can be ambiguous. Before a team can plan implementation, the
              work needs an outcome, a defined scope, acceptance criteria and a logical
              structure. I wanted an easier way to move from a conversation to an epic draft.
            </p>
          </article>
          <article>
            <span className="section-kicker">THE APPROACH</span>
            <h2>Make AI output usable in a delivery workflow.</h2>
            <p>
              GliptoDev combines conversational clarification with an Action that submits
              structured information through an API. The goal is to create planning input
              that can be reviewed and refined, not to replace engineering judgement.
            </p>
          </article>
        </section>

        <section className="projects-section mp-case-dark" aria-labelledby="gliptodev-flow">
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div><span className="section-number">01</span><span className="section-kicker">WORKFLOW</span></div>
              <h2 id="gliptodev-flow">From requirements to an actionable draft.</h2>
            </div>
            <div className="mp-benefit-grid">
              <article><span>STEP 01</span><h3>Clarify the problem</h3><p>Understand the desired outcome, constraints, users and boundaries.</p></article>
              <article><span>STEP 02</span><h3>Structure the epic</h3><p>Propose a title, objective, scope and clear acceptance criteria.</p></article>
              <article><span>STEP 03</span><h3>Send via an Action</h3><p>Pass typed fields to an API, where they can be validated and made available for review.</p></article>
            </div>
          </div>
        </section>

        <section className="section-shell mp-case-details" aria-labelledby="gliptodev-design">
          <div><span className="section-kicker">TECHNICAL IMPLEMENTATION</span><h2 id="gliptodev-design">GPT configuration, Actions and APIs.</h2></div>
          <div className="mp-detail-list">
            <div><b>GPT instructions</b><p>Guide the conversation towards requirements that can be expressed as an epic rather than vague feature requests.</p></div>
            <div><b>Action schema</b><p>Describe an API operation using OpenAPI, including the accepted fields and the expected response.</p></div>
            <div><b>API setup</b><p>Keep authentication, validation and persistence on the service side, with a defined boundary between AI suggestions and system records.</p></div>
            <div><b>Review</b><p>Allow a human to check scope, dependencies and acceptance criteria before development is authorised.</p></div>
          </div>
        </section>

        <section className="section-shell gliptodev-schema" aria-labelledby="gliptodev-schema-title">
          <div>
            <span className="section-kicker">ACTIONS CONFIGURATION</span>
            <h2 id="gliptodev-schema-title">A defined interface between GPT and API.</h2>
            <p>
              An OpenAPI operation makes it possible to turn conversational output
              into a predictable request. This compact example demonstrates the
              setup pattern without reproducing an internal endpoint or credentials.
            </p>
          </div>
          <div className="gliptodev-schema-panel">
            <span className="gliptodev-schema-heading">Example OpenAPI Actions definition</span>
            <pre><code>{actionSchema}</code></pre>
          </div>
        </section>

        <section className="section-shell mp-case-grid" aria-label="Contribution and relevance">
          <article>
            <span className="section-kicker">MY CONTRIBUTION</span>
            <h2>Making a conversational assistant useful to engineering teams.</h2>
            <p>
              I developed the AI-supported epic creation approach and worked on the
              Custom GPT configuration, Actions setup and API integration. My focus
              was on translating planning requirements into structured information
              that a team could actually use.
            </p>
          </article>
          <article>
            <span className="section-kicker">WHY IT MATTERS</span>
            <h2>Practical AI is as much about integration as prompting.</h2>
            <p>
              This work brings together product thinking, API contracts,
              system integration and delivery governance. It reflects my
              approach to AI: solve a recognisable engineering problem,
              preserve review points and make the result actionable.
            </p>
          </article>
        </section>

        <section className="section-shell mp-next-project">
          <span>Related case study</span>
          <Link href="/projects/ai-delivery-triage/">AI Delivery Triage Assistant →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
