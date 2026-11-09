import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const experience = [
  {
    period: "Feb 2025 — present",
    title: "Technical Delivery Team Leader",
    organisation: "University of Oxford · IT Services",
    description: "Lead technical delivery across two enterprise platforms, line-manage four engineers and coordinate Scrum development with Kanban-managed analysis, UX, architecture and migration. Strengthened sprint goals, capacity planning, Azure DevOps backlogs, delivery reporting and release readiness.",
  },
  {
    period: "Feb 2017 — Feb 2025",
    title: "Senior Developer",
    organisation: "Saïd Business School · University of Oxford",
    description: "Led modernisation of enterprise systems, application development, integrations and technical improvement programmes.",
  },
  {
    period: "Jun 2015 — Feb 2017",
    title: "Software Developer",
    organisation: "Saïd Business School · University of Oxford",
    description: "Developed and delivered Drupal websites, online tools and integrations, working with internal and external developers.",
  },
  {
    period: "2011 — 2015",
    title: "Software Developer / Technical Lead",
    organisation: "TATA Interactive Systems · iMusician Digital · ANCYCH",
    description: "Hands-on development of web applications, e-learning systems and bespoke software across C#/.NET, PHP, JavaScript and SQL.",
  },
];

const achievements = [
  {
    label: "People & delivery",
    title: "Cross-functional engineering leadership",
    description: "Coordinate a 16-person delivery group, with four direct line reports, across engineering, product, quality assurance and release planning.",
  },
  {
    label: "Enterprise modernisation",
    title: "Assessment platform rebuild",
    description: "Led a Drupal 7-to-9 assessment-system rebuild, coordinating the roadmap, developers and testing. The transition was completed with minimal downtime and no data loss.",
  },
  {
    label: "Systems simplification",
    title: "11 platforms consolidated into two",
    description: "Led consolidation of 11 digital platforms into two core systems, helping simplify integration, support and maintenance.",
  },
  {
    label: "Applied AI",
    title: "Making existing knowledge easier to find",
    description: "Designed and deployed a team-facing AI assistant to help colleagues retrieve previous issues, resolutions and delivery guidance.",
  },
  {
    label: "Practical automation",
    title: "Approximately £5,000 in avoided agency costs",
    description: "Designed and built an in-house campaign-link generator using SharePoint, Power Apps and Power Automate.",
  },
  {
    label: "Individual recognition",
    title: "Saïd Business School · 2023/24",
    description: "Received individual recognition for consistently demonstrating exceptional performance and commitment to the School’s values.",
  },
];

const capabilities = [
  { title: "Software engineering", detail: "React, Next.js, TypeScript, Node.js, APIs, SQL and enterprise web platforms." },
  { title: "Technical leadership & delivery", detail: "Engineering teams, Agile planning, release management, technical assurance and cross-functional coordination." },
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
    <>
      <SiteHeader />
      <main id="main-content">
      <section className="cv-shell cv-hero" aria-labelledby="cv-name">
        <div>
          <p className="cv-eyebrow">Professional profile · Oxford, United Kingdom</p>
          <h1 id="cv-name">Ceci Garcia</h1>
          <p className="cv-role">Software Engineering &amp; Technical Delivery</p>
          <p className="cv-lede">Technical delivery and software engineering leader with over 14 years&apos; experience developing and modernising enterprise web platforms and integrated systems. I combine hands-on engineering expertise with Agile delivery, stakeholder management, technical assurance and applied AI, focusing on reliable, cost-effective solutions.</p>
          <div className="cv-actions">
            <Link className="cv-text-link" href="/about/">Experience &amp; credentials ↗</Link>
            <Link className="cv-text-link" href="/projects/">Selected Work ↗</Link>
          </div>
        </div>
        <aside className="cv-aside" aria-label="Profile at a glance">
          <span className="cv-aside-heading">At a glance</span>
          <dl className="cv-fact"><dt>Current role</dt><dd>Technical Delivery Team Leader<br />University of Oxford</dd></dl>
          <dl className="cv-fact"><dt>Leadership scope</dt><dd>16-person delivery group · four direct reports</dd></dl>
          <dl className="cv-fact"><dt>Focus</dt><dd>Software engineering · technical leadership · Agile delivery · applied AI</dd></dl>
        </aside>
      </section>

      <section className="cv-section cv-shell" id="profile">
        <div className="cv-section-layout">
          <span className="cv-section-label">01 / Profile</span>
          <div>
            <h2 className="cv-section-title">Engineering experience, with a practical approach to leadership.</h2>
            <p className="cv-section-intro">I progressed from hands-on software development into technical delivery leadership at the University of Oxford. I now line-manage four engineers and coordinate cross-functional work across enterprise platforms, engineering, analysis, UX, architecture and migration. My approach brings together systems integration, Scrum and Kanban delivery, technical assurance and practical, cost-effective problem-solving.</p>
            <Link href="/about/" className="cv-text-link">More about my background ↗</Link>
          </div>
        </div>
      </section>

      <section className="cv-section cv-shell" id="achievements" aria-labelledby="achievements-heading">
        <div className="cv-section-layout">
          <span className="cv-section-label">02 / Selected Achievements</span>
          <div>
            <h2 className="cv-section-title" id="achievements-heading">Selected results from engineering and delivery.</h2>
            <p className="cv-section-intro">Examples of work I have led or delivered, from enterprise modernisation to practical improvements for colleagues.</p>
            <div className="cv-achievements">
              {achievements.map((achievement) => (
                <article className="cv-achievement" key={achievement.title}>
                  <span className="cv-achievement-label">{achievement.label}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cv-section cv-shell" id="experience">
        <div className="cv-section-layout">
          <span className="cv-section-label">03 / Experience</span>
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
          <span className="cv-section-label">04 / Capabilities</span>
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
          <span className="cv-section-label">05 / Selected Work</span>
          <div>
            <h2 className="cv-section-title">Selected engineering &amp; applied AI work</h2>
            <p className="cv-section-intro">Independent projects in security engineering, delivery analytics and software quality. Each case study explains the problem, my contribution, technical decisions and implementation boundaries. Interface previews use illustrative, non-production data.</p>
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
            <span className="cv-section-label">06 / Contact</span>
            <h2 className="cv-section-title">Professional contact</h2>
            <p>For professional conversations about engineering, technical delivery and collaboration, you can reach me by email.</p>
          </div>
          <div className="cv-contact-links"><a className="cv-text-link" href="mailto:ceci.garcia.ox@gmail.com">ceci.garcia.ox@gmail.com ↗</a></div>
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
