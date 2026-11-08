import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About | Ceci Garcia",
  description: "Software engineering, architecture and technical delivery profile for Ceci Garcia.",
};

const experience = [
  {
    period: "Feb 2025 — present",
    role: "Technical Delivery Team Leader",
    organisation: "University of Oxford · IT Services",
    summary: "Lead technical delivery for enterprise web platforms and applications, coordinating a 16-person cross-functional group with four direct line reports. Introduced clearer sprint goals, capacity planning and documented release readiness.",
  },
  {
    period: "Feb 2017 — Feb 2025",
    role: "Senior Developer",
    organisation: "Saïd Business School · University of Oxford",
    summary: "Led enterprise platform modernisation and integration across Drupal, assessment systems, identity services and connected digital platforms, combining engineering with technical planning and stakeholder coordination.",
  },
  {
    period: "Jun 2015 — Feb 2017",
    role: "Software Developer",
    organisation: "Saïd Business School · University of Oxford",
    summary: "Developed and maintained Drupal websites and online applications, coordinated technical implementation with internal and external developers, and supported platform migrations and single sign-on.",
  },
  {
    period: "2011 — 2015",
    role: "Software Developer / Technical Lead",
    organisation: "TATA Interactive Systems · iMusician Digital · ANCYCH",
    summary: "Delivered bespoke applications and learning systems in Switzerland, including hands-on C#/.NET, PHP, JavaScript and SQL development, quality checks and client-facing technical problem-solving.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
      <section className="section-shell mp-page-hero">
        <span className="section-kicker">ABOUT CECI</span>
        <h1>Technical leadership grounded in real engineering.</h1>
        <p>I work across software engineering, technical leadership, Agile delivery and applied AI. My career spans hands-on development, enterprise system modernisation, engineering collaboration and managing technical delivery, with a focus on practical, maintainable solutions.</p>
      </section>

      <section className="section-shell profile-section mp-profile-tight">
        <div className="profile-grid">
          <div className="profile-story">
            <p className="large-copy">At the University of Oxford I lead technical delivery across enterprise web platforms and applications, bringing together engineering, product, QA, architecture, migration and operational concerns.</p>
            <p>Earlier, at Saïd Business School, I worked on enterprise CMS modernisation, bespoke systems, integrations and SSO. I value practical engineering: sound technical decisions, maintainable systems, transparent evidence and delivery processes that help people solve problems.</p>
          </div>
          <div className="proof-grid">
            <article className="proof-card"><span>01</span><h3>Build</h3><p>React, Next.js, Node.js, TypeScript, APIs, SQL and enterprise web platforms.</p></article>
            <article className="proof-card"><span>02</span><h3>Modernise</h3><p>Architecture, platform consolidation, integration and technical assurance.</p></article>
            <article className="proof-card"><span>03</span><h3>Lead</h3><p>Cross-functional delivery, coaching, release management and stakeholder alignment.</p></article>
            <article className="proof-card"><span>04</span><h3>Protect</h3><p>SSO, IAM/MFA, security governance, testing and privacy-aware design.</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell experience-section mp-section-topline">
        <div className="section-heading split-heading">
          <div><span className="section-number">01</span><span className="section-kicker">EXPERIENCE</span></div>
          <h2>From hands-on development to university-scale technical delivery.</h2>
        </div>
        <div className="experience-layout">
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-copy"><h3>{item.role}</h3><span>{item.organisation}</span><p>{item.summary}</p></div>
              </article>
            ))}
          </div>
          <aside className="credentials-card">
            <span className="card-label">SELECTED CREDENTIALS</span>
            <div className="credential"><b>11</b><span>active Salesforce certifications, including Application Architect and B2B Solution Architect</span></div>
            <div className="credential"><b>Scrum</b><span>CSM (2019), A-CSM (2021) and CSP-SM (2022); current renewal status not independently verified</span></div>
            <div className="credential"><b>2026</b><span>Doctorate in Institutional Management and Innovation: academic requirements completed; formal award pending</span></div>
            <div className="credential"><b>Oxford</b><span>Women&apos;s Leadership Development Programme (2023), Saïd Business School</span></div>
          </aside>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-shell capabilities-grid">
          <div className="capability-intro"><span className="section-number">02</span><span className="section-kicker">CAPABILITIES</span><h2>Technical depth with delivery context.</h2><p>My experience connects hands-on software development, technical decision-making, integration, assurance and the coordination required to deliver reliable changes.</p></div>
          <div className="capability-columns">
            <div><span>ENGINEERING</span><p>React · Next.js · JavaScript · TypeScript · Node.js · HTML/CSS · Drupal/PHP · REST APIs · SQL · Git · CI/CD</p></div>
            <div><span>PLATFORMS & DATA</span><p>PostgreSQL · MySQL · Docker · Kubernetes · Linux/Bash · Payload · Salesforce · Canvas · Azure DevOps</p></div>
            <div><span>DELIVERY</span><p>Scrum · Kanban · release management · capacity planning · technical assurance · stakeholder management · supplier coordination</p></div>
            <div><span>SECURITY & INTEGRATION</span><p>SSO · Microsoft AD FS · IAM/MFA · privacy-aware data handling · penetration-test assurance · enterprise integrations</p></div>
          </div>
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
