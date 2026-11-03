import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "AI Portfolio | Ceci Garcia",
  description: "Selected engineering and AI portfolio case studies by Ceci Garcia: CG Shield and Delivery Lens.",
};

const projects = [
  {
    href: "/projects/cg-shield/",
    image: "/images/cg-shield-dashboard.svg",
    eyebrow: "SECURITY ENGINEERING · OPTIONAL AI",
    title: "CG Shield",
    summary: "An engineering portfolio project exploring privacy-aware traffic analysis, local-first detection, optional AI review and controlled mitigations.",
    tags: ["Local-first analysis", "Cloudflare", "Explainable decisions", "Privacy"],
  },
  {
    href: "/projects/delivery-lens/",
    image: "/images/delivery-lens-dashboard.svg",
    eyebrow: "DELIVERY ANALYTICS · AI EXPLANATIONS",
    title: "Delivery Lens",
    summary: "An example of using point-in-time delivery evidence and optional AI explanations to support more informed Agile delivery conversations.",
    tags: ["Next.js", "Azure DevOps", "PostgreSQL", "Optional AI"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell mp-page-hero">
        <span className="section-kicker">SELECTED PORTFOLIO WORK</span>
        <h1>Engineering &amp; applied AI projects.</h1>
        <p>These are personal portfolio examples showing my approach to problem-solving, software design, data and responsible use of AI. They are not products being marketed for sale. The previews are illustrative and contain no private or production data.</p>
      </section>

      <section className="section-shell mp-project-list">
        {projects.map((project, index) => (
          <article className="mp-project-feature" key={project.title}>
            <Link href={project.href} className="mp-feature-image" aria-label={`Open ${project.title} portfolio case study`}>
              <img src={project.image} alt={`Illustrative ${project.title} interface`} loading="lazy" />
              <span>ILLUSTRATIVE INTERFACE</span>
            </Link>
            <div className="mp-feature-copy">
              <div className="project-index">EXAMPLE {String(index + 1).padStart(2, "0")}</div>
              <span className="section-kicker">{project.eyebrow}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="cv-text-link" href={project.href}>Read portfolio case study ↗</Link>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
