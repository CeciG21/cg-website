import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const experience = [
  {
    period: "2025 — present",
    title: "Technical Delivery Team Leader",
    organisation: "University of Oxford · IT Services",
    description: "Leading technical delivery for enterprise web platforms and applications, coordinating cross-functional engineering work and release assurance.",
  },
  {
    period: "2017 — 2025",
    title: "Senior Developer",
    organisation: "Saïd Business School · University of Oxford",
    description: "Engineering and modernising digital platforms, integrations, identity services and bespoke applications.",
  },
  {
    period: "2011 — 2017",
    title: "Software Developer → Technical Lead",
    organisation: "Oxford · Zurich · Zug",
    description: "Building web applications and digital services, with increasing technical ownership across delivery and architecture.",
  },
];

const capabilities = [
  { title: "Software engineering", detail: "React, Next.js, TypeScript, Node.js, APIs, SQL and enterprise web platforms." },
  { title: "Technical delivery", detail: "Architecture, planning, release management, technical assurance and cross-functional coordination." },
  { title: "Platforms & integration", detail: "Drupal, Salesforce, Azure DevOps, SSO, identity and systems integration." },
  { title: "AI & applied experimentation", detail: "Exploring useful, bounded AI workflows with explicit evidence, review and privacy considerations." },
];

const projects = [
  {
    title: "CG Shield",
    category: "Security engineering · Optional AI review",
    description: "Privacy-aware traffic analysis combining local rules, explainable decisions and optional AI-assisted review.",
    image: "/images/cg-shield-dashboard.svg",
    href: "/projects/cg-shield/",
  },
  {
    title: "Delivery Lens",
    category: "Delivery analytics · Evidence-grounded AI",
    description: "Point-in-time Agile delivery analysis using historical evidence and optional AI-supported interpretation.",
    image: "/images/delivery-lens-dashboard.svg",
    href: "/projects/delivery-lens/",
  },
  {
    title: "CG QA",
    category: "Quality engineering · Optional AI review",
    description: "Framework-aware GitHub code review and Playwright stage checks, with clear evidence and optional AI analysis.",
    image: "/images/cg-qa-dashboard.svg",
    href: "/projects/cg-qa/",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="cv-shell cv-hero" aria-labelledby="cv-name">
        <div>
          <p className="cv-eyebrow">Professional profile · Oxford, United Kingdom</p>
          <h1 id="cv-name">Ceci Garcia</h1>
          <p className="cv-role">Software Engineering &amp; Technical Delivery</p>
          <p className="cv-lede">I work at the intersection of hands-on software engineering, technical leadership and delivery. My experience spans more than 14 years of developing, modernising and supporting digital platforms, including enterprise services at the University of Oxford.</p>
          <div className="cv-actions">
            <Link className="cv-text-link" href="/about/">Experience &amp; credentials ↗</Link>
            <Link className="cv-text-link" href="/projects/">Selected Work ↗</Link>
          </div>
        </div>
        <aside className="cv-aside" aria-label="Profile at a glance">
          <span className="cv-aside-heading">At a glance</span>
          <dl className="cv-fact"><dt>Current role</dt><dd>Technical Delivery Team Leader<br />University of Oxford</dd></dl>
          <dl className="cv-fact"><dt>Background</dt><dd>Software development, architecture and technical delivery</dd></dl>
          <dl className="cv-fact"><dt>Areas of interest</dt><dd>Engineering leadership, platform modernisation and applied AI</dd></dl>
        </aside>
      </section>

      <section className="cv-section cv-shell" id="profile">
        <div className="cv-section-layout">
          <span className="cv-section-label">01 / Profile</span>
          <div>
            <h2 className="cv-section-title">Engineering experience, with a practical approach to leadership.</h2>
            <p className="cv-section-intro">I started as a software developer and progressed into technical leadership while staying close to implementation. My work brings together architecture, engineering, security, release coordination and the people needed to deliver dependable systems.</p>
            <Link href="/about/" className="cv-text-link">More about my background ↗</Link>
          </div>
        </div>
      </section>

      <section className="cv-section cv-shell" id="experience">
        <div className="cv-section-layout">
          <span className="cv-section-label">02 / Experience</span>
          <div>
            <h2 className="cv-section-title">Career overview</h2>
            <div className="cv-timeline">
              {experience.map((item) => (
                <article className="cv-timeline-entry" key={item.period}>
                  <span className="cv-date">{item.period}</span>
                  <div><h3>{item.title}</h3><span className="cv-organisation">{item.organisation}</span><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section cv-section-muted" id="expertise">
        <div className="cv-shell cv-section-layout">
          <span className="cv-section-label">03 / Capabilities</span>
          <div>
            <h2 className="cv-section-title">Technical interests &amp; capabilities</h2>
            <div className="cv-capabilities">
              {capabilities.map((item) => (
                <article className="cv-capability" key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section cv-shell" id="portfolio">
        <div className="cv-section-layout">
          <span className="cv-section-label">04 / Selected Work</span>
          <div>
            <h2 className="cv-section-title">Selected engineering &amp; applied AI work</h2>
            <p className="cv-section-intro">Independent projects spanning security engineering, delivery analytics, quality engineering and applied AI. The case studies describe the problem, technical decisions and approach to implementation. Interface previews contain illustrative, non-production data.</p>
            <div className="cv-projects">
              {projects.map((project) => (
                <article className="cv-project" key={project.title}>
                  <Link href={project.href} className="cv-project-visual" aria-label={`View ${project.title} case study`}><img src={project.image} alt={`Illustrative ${project.title} dashboard`} loading="lazy" /></Link>
                  <div className="cv-project-type">{project.category}</div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <Link href={project.href} className="cv-text-link">Read case study ↗</Link>
                  <small className="cv-project-note">Illustrative interface preview; no production or private data.</small>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section cv-shell" id="contact">
        <div className="cv-contact">
          <div>
            <span className="cv-section-label">05 / Contact</span>
            <h2 className="cv-section-title">Professional contact</h2>
            <p>For professional conversations about engineering, technical delivery and collaboration, you can reach me by email.</p>
          </div>
          <div className="cv-contact-links"><a className="cv-text-link" href="mailto:ceci.garcia.ox@gmail.com">ceci.garcia.ox@gmail.com ↗</a></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
