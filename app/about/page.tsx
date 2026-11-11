import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Profile | Ceci Garcia",
  description: "Ceci Garcia's approach to software engineering, architecture, technical leadership and delivery.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell mp-page-hero">
          <span className="section-kicker">PROFILE</span>
          <h1>Technical leadership grounded in real engineering.</h1>
          <p>I am a technical delivery and software engineering leader with more than 14 years&apos; experience developing and modernising enterprise web platforms and integrated systems. My work combines hands-on engineering, Agile delivery, stakeholder management, technical assurance and applied AI.</p>
          <div className="cv-actions">
            <Link className="cv-text-link" href="/experience/">Explore my experience ↗</Link>
            <Link className="cv-text-link" href="/credentials/">View my credentials ↗</Link>
          </div>
        </section>

        <section className="section-shell profile-section mp-profile-tight">
          <div className="profile-grid">
            <div className="profile-story">
              <p className="large-copy">At the University of Oxford I lead technical delivery across two enterprise platforms, line-manage four engineers and coordinate development work with analysis, UX, architecture and migration teams. I set delivery priorities, balance engineering capacity and support colleagues through coaching and collaborative problem-solving.</p>
              <p>My background spans enterprise CMS modernisation, software architecture and systems integration. In my current role, I work across Scrum and Kanban delivery, release readiness, security assurance and stakeholder communication, using evidence and practical engineering judgement to manage risk and improve delivery.</p>
            </div>
            <div className="proof-grid">
              <article className="proof-card"><span>01</span><h3>Build</h3><p>React, Next.js, Node.js, TypeScript, APIs, SQL and enterprise web platforms.</p></article>
              <article className="proof-card"><span>02</span><h3>Modernise</h3><p>Architecture, platform consolidation, integration and technical assurance.</p></article>
              <article className="proof-card"><span>03</span><h3>Lead</h3><p>Cross-functional delivery, coaching, release management and stakeholder alignment.</p></article>
              <article className="proof-card"><span>04</span><h3>Protect</h3><p>SSO, IAM/MFA, security governance, testing and privacy-aware design.</p></article>
            </div>
          </div>
        </section>

        <section className="capabilities-section">
          <div className="section-shell capabilities-grid">
            <div className="capability-intro"><span className="section-number">01</span><span className="section-kicker">CAPABILITIES</span><h2>Technical depth with delivery context.</h2><p>My experience connects hands-on software development, technical decision-making, integration, assurance and the coordination required to deliver reliable changes.</p></div>
            <div className="capability-columns">
              <div><span>ENGINEERING</span><p>React · Next.js · JavaScript · TypeScript · Node.js · HTML/CSS · Drupal/PHP · REST APIs · SQL · Git · CI/CD</p></div>
              <div><span>PLATFORMS & DATA</span><p>PostgreSQL · MySQL · Docker · Kubernetes · Linux/Bash · Payload · Salesforce · Canvas · Azure DevOps</p></div>
              <div><span>DELIVERY</span><p>Scrum · Kanban · release management · capacity planning · technical assurance · stakeholder management · supplier coordination</p></div>
              <div><span>SECURITY & INTEGRATION</span><p>SSO · Microsoft AD FS · IAM/MFA · privacy-aware data handling · penetration-test assurance · enterprise integrations</p></div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="profile-next-title">
          <div className="cv-section-layout">
            <span className="cv-section-label">Continue exploring</span>
            <div>
              <h2 className="cv-section-title" id="profile-next-title">See how that experience translates into work.</h2>
              <p className="cv-section-intro">My career history, project case studies and certifications each have their own dedicated page.</p>
              <div className="cv-actions"><Link className="cv-text-link" href="/experience/">Experience ↗</Link><Link className="cv-text-link" href="/projects/">Selected work ↗</Link><Link className="cv-text-link" href="/credentials/">Credentials ↗</Link></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
