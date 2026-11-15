import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Selected Work | Ceci Garcia",
  description: "Software engineering case studies in security, quality assurance, AI-assisted epic planning and delivery triage.",
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
    href: "/projects/cg-qa/",
    image: "/images/cg-qa-dashboard.svg",
    eyebrow: "QUALITY ENGINEERING · OPTIONAL AI",
    title: "CG QA",
    summary: "A framework-aware quality gate for GitHub branch reviews and deployed stage environments. Deterministic findings, CI evidence and Playwright smoke checks are reported separately from optional AI analysis.",
    tags: ["GitHub compare API", "Framework-aware checks", "Playwright", "Optional AI"],
  },
  {
    href: "/projects/gliptodev/",
    image: "/images/gliptodev-epic-actions.svg",
    eyebrow: "AI EPIC PLANNING · API ACTIONS",
    title: "GliptoDev",
    summary: "A custom GPT workflow for shaping software requirements into structured development epics, using OpenAPI Actions and an API integration boundary.",
    tags: ["Custom GPT", "OpenAPI Actions", "Structured epics", "API integration"],
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
        <h1>Software engineering &amp; applied AI.</h1>
        <p>Selected technical projects covering software security, quality engineering, API-integrated AI and delivery workflows. Each case study explains the challenge, approach and design choices. Interface previews use illustrative, non-production data.</p>
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
