import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Projects | Ceci Garcia",
  description: "Selected product case studies from Ceci Garcia: CG Shield and Delivery Lens.",
};

const projects = [
  {
    href: "/projects/cg-shield/",
    image: "/images/cg-shield-dashboard.webp",
    eyebrow: "SECURITY · PRIVACY · OPERATIONS",
    title: "CG Shield",
    summary: "A privacy-aware website traffic protection layer that starts with local analysis and keeps automated mitigations bounded and reversible.",
    tags: ["Local-first analysis", "Cloudflare", "Optional AI review", "Privacy controls"],
  },
  {
    href: "/projects/delivery-lens/",
    image: "/images/delivery-lens-dashboard.webp",
    eyebrow: "DELIVERY · EVIDENCE · AI",
    title: "Delivery Lens",
    summary: "An evidence-grounded delivery intelligence layer for Agile software projects, built around historical snapshots and explicit uncertainty.",
    tags: ["Next.js", "Azure DevOps", "PostgreSQL", "Optional AI"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-shell mp-page-hero">
        <span className="section-kicker">SELECTED WORK</span>
        <h1>Products that make difficult decisions easier.</h1>
        <p>These case studies focus on the problem, the engineering choices and why the product is useful. Source code remains private; the interface previews use illustrative, non-production data.</p>
      </section>

      <section className="section-shell mp-project-list">
        {projects.map((project, index) => (
          <article className="mp-project-feature" key={project.title}>
            <Link href={project.href} className="mp-feature-image">
              <img src={project.image} alt={`Illustrative ${project.title} dashboard preview`} />
              <span>ILLUSTRATIVE PRODUCT PREVIEW</span>
            </Link>
            <div className="mp-feature-copy">
              <div className="project-index">PROJECT {String(index + 1).padStart(2, "0")}</div>
              <span className="section-kicker">{project.eyebrow}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="button primary" href={project.href}>Read case study <ArrowUpRight /></Link>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
