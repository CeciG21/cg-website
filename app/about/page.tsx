import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About | Ceci Garcia",
  description: "About Ceci Garcia: software engineering, enterprise platform modernisation, technical delivery leadership, release governance and applied AI.",
};

const strengths = [
  {
    title: "Technical solution design",
    body: "I enjoy shaping how complex change should be delivered: clarifying the problem, defining the technical approach, sequencing dependencies and turning ambiguity into a practical roadmap.",
  },
  {
    title: "Enterprise modernisation",
    body: "My background spans Drupal and enterprise CMS platforms, systems integrations, identity and access, APIs, data flows, platform consolidation and software modernisation across long-lived services.",
  },
  {
    title: "Engineering leadership",
    body: "I lead with clear objectives, autonomy and accountability. I coach engineers, help teams surface blockers early, and create an environment where technical questions and problems can be discussed openly.",
  },
  {
    title: "Delivery & release governance",
    body: "I combine Scrum delivery with pragmatic planning, capacity management, release readiness and cross-functional go/no-go decisions so that engineering work remains visible, achievable and operationally safe.",
  },
  {
    title: "Continuous improvement",
    body: "I naturally look for manual, slow or unclear processes and ask how they can be improved. That mindset has led me to redesign planning and reporting practices and build tools that make delivery information easier to use.",
  },
  {
    title: "Applied AI",
    body: "I use AI as an engineering and operational tool rather than as a novelty. Recent work includes an Azure DevOps-connected triage assistant used by colleagues to find prior resolutions, related work and delivery history.",
  },
];

const capabilities = [
  "Software engineering & technical leadership",
  "Enterprise CMS & web platforms",
  "Software architecture & modernisation",
  "Enterprise systems integration & APIs",
  "Agile delivery — Scrum & Kanban",
  "Release management & technical assurance",
  "Engineering team leadership & coaching",
  "Planning, capacity & resource management",
  "Security, SSO & technical governance",
  "Stakeholder & supplier management",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="cv-shell cv-hero cv-hero--page" aria-labelledby="about-heading">
          <div>
            <p className="cv-eyebrow">Profile</p>
            <h1 id="about-heading">I connect engineering depth with delivery leadership.</h1>
            <p className="cv-lede">
              I am a software engineering and technical delivery leader with more than 14 years of experience developing, integrating and modernising digital platforms. My career has moved from hands-on software development into broader technical leadership, while keeping engineering judgement, practical problem-solving and continuous improvement at the core of how I work.
            </p>
          </div>
          <aside className="cv-aside" aria-label="Current focus">
            <span className="cv-aside-heading">Current focus</span>
            <dl className="cv-fact"><dt>Organisation</dt><dd>University of Oxford IT Services</dd></dl>
            <dl className="cv-fact"><dt>Role</dt><dd>Technical Delivery Team Leader</dd></dl>
            <dl className="cv-fact"><dt>Team</dt><dd>Six software developers · three QA specialists · four direct reports</dd></dl>
          </aside>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="approach-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">How I work</span>
            <div>
              <h2 className="cv-section-title" id="approach-heading">Structured enough to create clarity. Flexible enough to solve the real problem.</h2>
              <p className="cv-section-intro">
                I work best when the intended outcome is clear, then take ownership of the path to get there. I prefer thoughtful planning over micromanagement, but I also leave room for urgent security, service and operational work. In technical discussions I listen first, challenge assumptions constructively and help the group reach a sound decision rather than assuming I must personally provide every answer.
              </p>
              <div className="cv-page-grid">
                {strengths.map((strength) => (
                  <article className="cv-page-card" key={strength.title}>
                    <span className="cv-page-card-number">Capability</span>
                    <h3>{strength.title}</h3>
                    <p>{strength.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="evidence-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Selected evidence</span>
            <div>
              <h2 className="cv-section-title" id="evidence-heading">Leadership grounded in real engineering work.</h2>
              <div className="cv-story-list">
                <article className="cv-story">
                  <p className="cv-story-meta">University of Oxford · Technical Delivery</p>
                  <h3>Made delivery and release decisions easier to see and act on.</h3>
                  <p>Introduced clearer sprint goals, capacity-based planning, consolidated Azure DevOps backlogs, visual delivery reporting and documented release plans. I also chair cross-functional go/no-go discussions with product, QA, technical and communications leads to review blockers and agree readiness.</p>
                </article>
                <article className="cv-story">
                  <p className="cv-story-meta">University of Oxford · Applied AI</p>
                  <h3>Built an operational AI assistant around real team knowledge.</h3>
                  <p>Designed and deployed an AI-powered triage assistant connected to live Azure DevOps information and internal knowledge. It is used by service, product and analysis colleagues to find previous resolutions, related work, suitable epic or feature parents and delivery history.</p>
                </article>
                <article className="cv-story">
                  <p className="cv-story-meta">Saïd Business School · Platform Modernisation</p>
                  <h3>Led complex platform change without losing service continuity.</h3>
                  <p>Led the rebuild and migration of the Student Assessment Management System from Drupal 7 to Drupal 9, creating the roadmap and coordinating developers, stakeholders and testing. The transition was completed with minimal downtime and no data loss.</p>
                </article>
                <article className="cv-story">
                  <p className="cv-story-meta">Saïd Business School · Systems Simplification</p>
                  <h3>Reduced platform complexity at enterprise scale.</h3>
                  <p>Led the consolidation of 11 digital platforms into two core systems, helping simplify integration, support and maintenance while continuing to deliver secure identity, API and learning-platform integrations.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="capabilities-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Core expertise</span>
            <div>
              <h2 className="cv-section-title" id="capabilities-heading">The areas I bring together.</h2>
              <div className="cv-tag-list" aria-label="Core expertise">
                {capabilities.map((capability) => <span className="cv-tag" key={capability}>{capability}</span>)}
              </div>
              <p className="cv-section-intro">
                My technical background includes Drupal/PHP, JavaScript, TypeScript, React, Next.js, Node.js, REST APIs, SSO and IAM, Docker, SQL, Git/GitHub, Azure DevOps, Jira and Wrike. I also oversee delivery of AWS-hosted React/Node.js applications, while my cloud responsibility there is technical delivery oversight rather than hands-on AWS administration.
              </p>
              <div className="cv-actions">
                <Link className="cv-text-link" href="/experience/">View career experience ↗</Link>
                <Link className="cv-text-link" href="/projects/">Explore selected work ↗</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
