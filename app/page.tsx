import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { siteNavigation } from "./components/site-navigation";

export const metadata: Metadata = {
  title: "Ceci Garcia | Technical Delivery & Software Engineering Leader",
  description: "Ceci Garcia's professional portfolio: technical delivery leadership, software engineering, enterprise platform modernisation, release governance and applied AI.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="cv-shell cv-hero" aria-labelledby="cv-name">
          <div>
            <p className="cv-eyebrow">Technical delivery · Software engineering · Oxford, United Kingdom</p>
            <h1 id="cv-name">Ceci Garcia</h1>
            <p className="cv-role">Technical Delivery &amp; Software Engineering Leader</p>
            <p className="cv-lede">
              I lead enterprise software delivery at the University of Oxford, combining more than 14 years of engineering experience with technical leadership, Agile delivery, release governance and applied AI. I turn complex platform change into clear, achievable delivery plans while keeping engineering quality, security, service continuity and people at the centre.
            </p>
            <div className="cv-actions">
              <Link className="cv-text-link" href="/about/">Explore my profile ↗</Link>
              <Link className="cv-text-link" href="/projects/">See selected work ↗</Link>
            </div>
          </div>
          <aside className="cv-aside" aria-label="Profile at a glance">
            <figure className="cv-portrait">
              <img src="/images/ceci-profile.webp" alt="Portrait of Ceci Garcia" width={280} height={350} decoding="async" fetchPriority="high" />
              <figcaption>Ceci Garcia · Technical Delivery &amp; Software Engineering</figcaption>
            </figure>
            <span className="cv-aside-heading">At a glance</span>
            <dl className="cv-fact"><dt>Current role</dt><dd>Technical Delivery Team Leader<br />University of Oxford</dd></dl>
            <dl className="cv-fact"><dt>Delivery scope</dt><dd>Six software developers · three QA specialists · four direct reports</dd></dl>
            <dl className="cv-fact"><dt>Recent delivery evidence</dt><dd>~30% higher velocity · ~40% fewer post-release incidents</dd></dl>
            <dl className="cv-fact"><dt>Focus</dt><dd>Enterprise platforms · modernisation · release delivery · applied AI</dd></dl>
          </aside>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="impact-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Selected impact</span>
            <div>
              <h2 className="cv-section-title" id="impact-heading">Engineering depth backed by visible delivery outcomes.</h2>
              <div className="cv-story-list">
                <article className="cv-story">
                  <p className="cv-story-meta">University of Oxford · Technical delivery</p>
                  <h3>Improved how engineering work is planned, reported and released.</h3>
                  <p>Lead delivery across enterprise web platforms, combining Scrum leadership, capacity planning, Azure DevOps reporting and cross-functional release governance. Improvements to planning, reporting and release management contributed to approximately 30% higher delivery velocity and 40% fewer post-release incidents.</p>
                </article>
                <article className="cv-story">
                  <p className="cv-story-meta">Saïd Business School · Platform modernisation</p>
                  <h3>Modernised critical systems without losing service continuity.</h3>
                  <p>Led the SAMS rebuild from Drupal 7 to Drupal 9 with minimal downtime and no data loss, and separately led the consolidation of 11 digital platforms into two core systems to simplify integration, support and maintenance.</p>
                </article>
                <article className="cv-story">
                  <p className="cv-story-meta">University of Oxford · Applied AI</p>
                  <h3>Turned operational knowledge into a practical AI workflow.</h3>
                  <p>Designed and deployed an AI-powered triage assistant connected to Azure DevOps and internal knowledge, used by service, product and analysis colleagues to find previous resolutions, related work and delivery history.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="pages-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Explore</span>
            <div>
              <h2 className="cv-section-title" id="pages-heading">Engineering depth. Delivery leadership. Practical innovation.</h2>
              <p className="cv-section-intro">Explore the experience, projects and credentials behind my work—from enterprise platform modernisation and release governance to independent engineering tools and AI-assisted workflows.</p>
              <div className="cv-page-grid">
                {siteNavigation.map((destination, index) => (
                  <Link className="cv-page-card" href={destination.href} key={destination.href}>
                    <span className="cv-page-card-number">{String(index + 1).padStart(2, "0")} / {destination.detail}</span>
                    <h3>{destination.label}</h3>
                    <p>{destination.description}</p>
                    <span className="cv-page-card-arrow" aria-hidden="true">Explore ↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
