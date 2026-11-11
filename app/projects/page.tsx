import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Selected Work | Ceci Garcia",
  description: "Case studies in software security, technical delivery, quality engineering and practical AI-assisted delivery triage.",
};

const projects = [
  {
    href: "/projects/cg-shield/",
    image: "/images/cg-shield-dashboard.svg",
    eyebrow: "SECURITY ENGINEERING · OPTIONAL AI",
    title: "CG Shield",
    summary: "Privacy-aware traffic analysis, combining local-first detection, operator oversight and optional AI review. The case study covers the workflow, architecture and decisions behind proportionate responses.",
    tags: ["Local analysis", "Cloudflare", "Decision transparency", "Privacy"],
  },
  {
    href: "/projects/delivery-lens/",
    image: "/images/delivery-lens-dashboard.svg",
    eyebrow: "TECHNICAL DELIVERY · INTERACTIVE REPORTING",
    title: "Delivery Lens",
    summary: "An interactive view of how I run technical delivery: Sprint goals, forecast versus actual, scope movement, risks, dependencies and release readiness.",
    tags: ["Sprint goals", "Delivery evidence", "Risks & dependencies", "Release readiness"],
  },
  {
    href: "/projects/cg-qa/",
    image: "/images/cg-qa-dashboard.svg",
    eyebrow: "QUALITY ENGINEERING · OPTIONAL AI",
    title: "CG QA",
    summary: "A framework-aware quality gate for GitHub branch reviews and deployed stage environments. Deterministic findings, CI evidence and Playwright smoke checks are reported separately from optional AI analysis.",
    tags: ["GitHub compare API", "Framework-aware checks", "Playwright", "Optional AI"],
  },
  {
    href: "/projects/ai-delivery-triage/",
    image: "/images/ai-delivery-triage-demo.svg",
    eyebrow: "DELIVERY OPERATIONS · APPLIED AI",
    title: "AI Delivery Triage Assistant",
    summary: "A team-facing GPT assistant that helps identify candidate parent epics or features, find potentially related work, navigate boards and retrieve knowledge guidance. Shown with fictional work items.",
    tags: ["Custom GPT", "Azure DevOps APIs", "Knowledge discovery", "Human-reviewed triage"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
      <section className="section-shell mp-page-hero">
        <span className="section-kicker">SELECTED WORK</span>
        <h1>Software engineering, technical delivery &amp; applied AI.</h1>
        <p>Selected technical projects and delivery case studies covering security, quality engineering, delivery practice and responsible use of AI. Each case study explains the challenge, approach and design choices. Interface previews and delivery scenarios use illustrative, non-production data.</p>
      </section>
      <section className="section-shell mp-project-list">
        {projects.map((project, index) => (
          <article className="mp-project-feature" key={project.title}>
            <Link href={project.href} className="mp-feature-image" aria-label={`Open ${project.title} case study`}>
              <img src={project.image} alt={`Illustrative ${project.title} interface`} loading="lazy" />
              <span>INTERFACE PREVIEW</span>
            </Link>
            <div className="mp-feature-copy">
              <div className="project-index">PROJECT {String(index + 1).padStart(2, "0")}</div>
              <span className="section-kicker">{project.eyebrow}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="cv-text-link" href={project.href}>Read case study ↗</Link>
            </div>
          </article>
        ))}
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
