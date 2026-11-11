import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Experience | Ceci Garcia",
  description: "Ceci Garcia's software engineering and technical delivery career, leadership responsibilities and selected achievements.",
};

const experience = [
  {
    period: "Feb 2025 — present",
    role: "Technical Delivery Team Leader",
    organisation: "University of Oxford · IT Services",
    summary: "Lead technical delivery across two enterprise platforms and line-manage four engineers. As Scrum Master, coordinate development sprints and Kanban-managed analysis, UX, architecture and migration; improve planning, capacity management, Azure DevOps backlogs and delivery reporting. Introduced documented release plans and go/no-go reviews, oversee security and supplier assurance, and designed an AI triage assistant using ChatGPT and Azure DevOps APIs.",
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

export default function ExperiencePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="cv-shell mp-page-hero">
          <span className="section-kicker">EXPERIENCE</span>
          <h1>From software development to technical delivery leadership.</h1>
          <p>Over 14 years working across enterprise platforms, integration and engineering teams — bringing hands-on technical experience to delivery planning, quality and leadership.</p>
        </section>

        <section className="cv-shell cv-section" aria-labelledby="career-title">
          <div className="cv-section-layout">
            <span className="cv-section-label">01 / Career</span>
            <div>
              <h2 className="cv-section-title" id="career-title">Career overview</h2>
              <div className="cv-timeline">
                {experience.map((item) => (
                  <article className="cv-timeline-entry" key={item.period}>
                    <span className="cv-date">{item.period}</span>
                    <div>
                      <h3>{item.role}</h3>
                      <span className="cv-organisation">{item.organisation}</span>
                      <p>{item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-section-muted" aria-labelledby="results-title">
          <div className="cv-shell cv-section-layout">
            <span className="cv-section-label">02 / Selected results</span>
            <div>
              <h2 className="cv-section-title" id="results-title">Engineering, delivery and collaboration in practice.</h2>
              <p className="cv-section-intro">Examples of work I have led or delivered, from enterprise modernisation to improvements for colleagues.</p>
              <div className="cv-achievements">
                {achievements.map((item) => (
                  <article className="cv-achievement" key={item.title}>
                    <span className="cv-achievement-label">{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cv-shell cv-section" aria-labelledby="next-title">
          <div className="cv-section-layout">
            <span className="cv-section-label">Continue exploring</span>
            <div>
              <h2 className="cv-section-title" id="next-title">See the work behind the experience.</h2>
              <p className="cv-section-intro">Explore selected engineering and applied AI projects, or review the qualifications that support my work.</p>
              <div className="cv-actions"><Link className="cv-text-link" href="/projects/">Selected work ↗</Link><Link className="cv-text-link" href="/credentials/">Credentials ↗</Link></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
