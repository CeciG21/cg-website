import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { siteNavigation } from "./components/site-navigation";

export const metadata: Metadata = {
  title: "Ceci Garcia | Technical Delivery & Software Engineering Leader",
  description: "Ceci Garcia's professional portfolio: software engineering, technical delivery leadership, enterprise platform modernisation and practical applied AI.",
};

const expertise = [
  {
    title: "Shape complex technical change",
    body: "I turn ambiguous platform and engineering problems into clear technical approaches, practical roadmaps and achievable delivery plans.",
  },
  {
    title: "Improve how teams deliver",
    body: "I look for friction in planning, release processes, reporting and team workflows, then design simpler ways of working that make delivery clearer and more sustainable.",
  },
  {
    title: "Modernise long-lived platforms",
    body: "My background spans enterprise web platforms, CMS modernisation, systems integration, identity, APIs and the realities of changing software that already supports real users.",
  },
  {
    title: "Build practical AI tools",
    body: "I experiment with AI where it can remove repetitive work, improve access to knowledge or support better engineering and delivery decisions.",
  },
];

const projects = [
  {
    title: "CG Shield",
    detail: "Security engineering",
    description: "A privacy-aware traffic analysis and protection tool built around explainable, proportionate and reversible responses.",
    href: "/projects/cg-shield/",
  },
  {
    title: "CG QA",
    detail: "Quality engineering",
    description: "A framework-aware quality gate combining GitHub branch review, CI evidence and deployed-stage smoke verification.",
    href: "/projects/cg-qa/",
  },
  {
    title: "GliptoDev",
    detail: "Applied AI · API integration",
    description: "A Custom GPT and Actions workflow that turns requirements into structured, reviewable epic proposals.",
    href: "/projects/gliptodev/",
  },
  {
    title: "AI Delivery Triage Assistant",
    detail: "Applied AI",
    description: "A team-facing assistant for navigating delivery work, finding related items and retrieving operational knowledge.",
    href: "/projects/ai-delivery-triage/",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="cv-shell cv-hero" aria-labelledby="cv-name">
          <div>
            <p className="cv-eyebrow">Software engineering · Technical delivery · Applied AI</p>
            <h1 id="cv-name">Ceci Garcia</h1>
            <p className="cv-role">I make complex technical work clearer, simpler and easier to deliver.</p>
            <p className="cv-lede">
              I am a software engineer turned technical delivery leader with more than 14 years of experience across enterprise platforms, modernisation and integrated systems. I am most interested in the space between technology and delivery: designing better technical approaches, improving how teams work and building practical tools that solve real problems.
            </p>
            <div className="cv-actions">
              <Link className="cv-text-link" href="/projects/">Explore selected work ↗</Link>
              <Link className="cv-text-link" href="/about/">More about me ↗</Link>
            </div>
          </div>
          <aside className="cv-aside" aria-label="Professional focus">
            <figure className="cv-portrait">
              <img src="/images/ceci-profile.webp" alt="Portrait of Ceci Garcia" width={280} height={350} decoding="async" fetchPriority="high" />
              <figcaption>Ceci Garcia · Oxford, UK</figcaption>
            </figure>
            <span className="cv-aside-heading">Professional focus</span>
            <dl className="cv-fact"><dt>Engineering</dt><dd>Enterprise platforms · modernisation · integrations</dd></dl>
            <dl className="cv-fact"><dt>Delivery</dt><dd>Technical leadership · Agile delivery · release governance</dd></dl>
            <dl className="cv-fact"><dt>Exploration</dt><dd>Applied AI · automation · engineering tools</dd></dl>
          </aside>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="expertise-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">What I do</span>
            <div>
              <h2 className="cv-section-title" id="expertise-heading">Engineering expertise with a delivery mindset.</h2>
              <p className="cv-section-intro">
                My career has moved from hands-on software development into technical delivery leadership, but the part I enjoy has stayed consistent: understanding how something works, finding where it can be improved and turning that into a practical solution.
              </p>
              <div className="cv-page-grid">
                {expertise.map((item) => (
                  <article className="cv-page-card" key={item.title}>
                    <span className="cv-page-card-number">Expertise</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="work-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Selected work</span>
            <div>
              <h2 className="cv-section-title" id="work-heading">What I choose to build shows how I approach problems.</h2>
              <p className="cv-section-intro">
                These projects explore problems I care about: better delivery information, stronger engineering quality, proportionate security and responsible use of AI.
              </p>
              <div className="cv-page-grid">
                {projects.map((project) => (
                  <Link className="cv-page-card" href={project.href} key={project.href}>
                    <span className="cv-page-card-number">{project.detail}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="cv-page-card-arrow" aria-hidden="true">View case study ↗</span>
                  </Link>
                ))}
              </div>
              <div className="cv-actions">
                <Link className="cv-text-link" href="/projects/">View all selected work ↗</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="explore-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Explore</span>
            <div>
              <h2 className="cv-section-title" id="explore-heading">Go deeper where it matters.</h2>
              <p className="cv-section-intro">The rest of the site focuses on how I think, what I build and the areas where I have developed depth.</p>
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
