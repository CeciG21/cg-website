import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Selected Work | Ceci Garcia",
  description: "Case studies in security engineering, quality engineering, delivery analytics and applied AI: CG Shield, Delivery Lens and CG QA.",
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
    eyebrow: "DELIVERY ANALYTICS · APPLIED AI",
    title: "Delivery Lens",
    summary: "An evidence-led approach to Agile delivery analysis, combining historical snapshots, explicit scope movement and optional AI interpretation to support informed decisions.",
    tags: ["Next.js", "Azure DevOps", "PostgreSQL", "AI-assisted analysis"],
  },
  {
    href: "/projects/cg-qa/",
    image: "/images/cg-qa-dashboard.svg",
    eyebrow: "QUALITY ENGINEERING · OPTIONAL AI",
    title: "CG QA",
    summary: "A framework-aware quality gate for GitHub branch reviews and deployed stage environments. Deterministic findings, CI evidence and Playwright smoke checks are reported separately from optional AI analysis.",
    tags: ["GitHub compare API", "Framework-aware checks", "Playwright", "Optional AI"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell mp-page-hero">
        <span className="section-kicker">SELECTED WORK</span>
        <h1>Software engineering &amp; applied AI.</h1>
        <p>Independent technical projects exploring security, quality engineering, delivery evidence and responsible use of AI. Each case study sets out the engineering challenge, how the system works and the choices behind its design. Interface previews use illustrative, non-production data.</p>
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
      <SiteFooter />
    </main>
  );
}
