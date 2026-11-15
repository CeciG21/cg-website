import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About | Ceci Garcia",
  description: "About Ceci Garcia: software engineering, technical delivery leadership, enterprise modernisation, applied AI and continuous improvement.",
};

const principles = [
  {
    title: "Start with the real problem",
    body: "I like to understand what is actually slowing a team, system or process down before deciding on the solution. The first idea is not always the right one.",
  },
  {
    title: "Make delivery visible",
    body: "Clear objectives, realistic planning and honest reporting make technical work easier to manage. I prefer evidence and shared context over assumptions.",
  },
  {
    title: "Give engineers room to think",
    body: "I value autonomy and constructive challenge. My role is often to create clarity, ask useful questions and help people reach a sound decision rather than prescribe every answer.",
  },
  {
    title: "Challenge unnecessary complexity",
    body: "Whether the issue is architecture, process or supplier work, I look for solutions that are proportionate, maintainable and worth the cost of operating them.",
  },
  {
    title: "Keep learning by building",
    body: "I learn best by experimenting. That is one reason I build independent tools around delivery analytics, QA, security and AI rather than treating new technology as something purely theoretical.",
  },
  {
    title: "Improve the system, not just the task",
    body: "I naturally look for repeatable improvements: better roadmaps, clearer release processes, reusable knowledge, simpler workflows and tools that remove avoidable friction.",
  },
];

const capabilities = [
  "Software engineering & technical leadership",
  "Enterprise CMS & web platforms",
  "Software architecture & modernisation",
  "Enterprise systems integration & APIs",
  "Agile delivery — Scrum & Kanban",
  "Release management & technical assurance",
  "Engineering team leadership & coaching",
  "Planning, capacity & resource management",
  "Security, SSO & technical governance",
  "Stakeholder & supplier management",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="cv-shell cv-hero cv-hero--page" aria-labelledby="about-heading">
          <div>
            <p className="cv-eyebrow">About</p>
            <h1 id="about-heading">I like making complicated technical work easier to understand and deliver.</h1>
            <p className="cv-lede">
              I started my career as a software developer and gradually moved into technical delivery leadership as the problems I was solving became broader: not only how to build software, but how to modernise long-lived platforms, organise complex change, improve engineering workflows and help teams make better technical decisions.
            </p>
          </div>
          <aside className="cv-aside" aria-label="Professional perspective">
            <span className="cv-aside-heading">Professional perspective</span>
            <dl className="cv-fact"><dt>Experience</dt><dd>14+ years across software engineering and technical delivery</dd></dl>
            <dl className="cv-fact"><dt>Current context</dt><dd>Technical delivery leadership at the University of Oxford</dd></dl>
            <dl className="cv-fact"><dt>What interests me</dt><dd>Modernisation · better delivery systems · practical AI</dd></dl>
          </aside>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="story-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">My story</span>
            <div>
              <h2 className="cv-section-title" id="story-heading">Engineering first. Leadership built on top of it.</h2>
              <div className="cv-story-list">
                <article className="cv-story">
                  <h3>A technical foundation</h3>
                  <p>My background is in software development. I have worked across web applications, enterprise CMS platforms, integrations, identity, data and long-lived digital services using technologies including PHP, JavaScript, TypeScript, React, Next.js, Node.js, C#/.NET, SQL and REST APIs.</p>
                </article>
                <article className="cv-story">
                  <h3>A broader delivery perspective</h3>
                  <p>Over time, I became increasingly interested in the conditions around good engineering: clear objectives, sensible architecture, realistic capacity, useful roadmaps, good release decisions and processes that help rather than obstruct the people doing the work.</p>
                </article>
                <article className="cv-story">
                  <h3>Where those two things meet</h3>
                  <p>Today I work at the intersection of engineering and delivery. I can engage with the technical detail while also shaping priorities, coordinating change, challenging unnecessary complexity and helping teams turn difficult work into something understandable and achievable.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="principles-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">How I think</span>
            <div>
              <h2 className="cv-section-title" id="principles-heading">A few principles that shape how I work.</h2>
              <div className="cv-page-grid">
                {principles.map((principle) => (
                  <article className="cv-page-card" key={principle.title}>
                    <span className="cv-page-card-number">Principle</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="expertise-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Expertise</span>
            <div>
              <h2 className="cv-section-title" id="expertise-heading">The areas I bring together.</h2>
              <div className="cv-tag-list" aria-label="Core expertise">
                {capabilities.map((capability) => <span className="cv-tag" key={capability}>{capability}</span>)}
              </div>
              <p className="cv-section-intro">
                I am most useful where these areas overlap: a platform needs modernising, a technical programme needs structure, an engineering team needs clearer delivery conditions, or a new tool could remove repetitive work and make better information available.
              </p>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="beyond-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Beyond delivery</span>
            <div>
              <h2 className="cv-section-title" id="beyond-heading">I keep learning, building and contributing outside my core role.</h2>
              <div className="cv-page-grid">
                <article className="cv-page-card">
                  <span className="cv-page-card-number">Research & learning</span>
                  <h3>AI, engineering and organisational change</h3>
                  <p>I completed the academic requirements for a doctorate in Institutional Management and Innovation in 2026. My doctoral project explored an AI-agent-based service desk prototype, alongside ongoing professional development in architecture, security, Agile and enterprise technology.</p>
                </article>
                <article className="cv-page-card">
                  <span className="cv-page-card-number">Community</span>
                  <h3>Governance and mentoring</h3>
                  <p>I serve as a trustee for Reading Community Learning Centre and mentor through Rewriting the Code, where I provide one-to-one programming and software-development guidance.</p>
                </article>
                <article className="cv-page-card">
                  <span className="cv-page-card-number">Outside technology</span>
                  <h3>Kickboxing</h3>
                  <p>I am a kickboxing black belt. It is a very different environment from software, but I value the same things in both: discipline, steady improvement and learning through practice.</p>
                </article>
              </div>
              <div className="cv-actions">
                <Link className="cv-text-link" href="/projects/">Explore what I build ↗</Link>
                <Link className="cv-text-link" href="/how-i-deliver/">See how I deliver ↗</Link>
                <Link className="cv-text-link" href="/contact/">Get in touch ↗</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
