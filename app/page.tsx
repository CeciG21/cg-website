import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "Ceci Garcia | Software Engineering & Technical Delivery",
  description: "Ceci Garcia's professional portfolio: software engineering leadership, enterprise platform modernisation, technical delivery and applied AI.",
};

const destinations = [
  {
    number: "01",
    title: "Profile",
    description: "How I approach software engineering leadership, technical decision-making and continuous improvement.",
    href: "/about/",
    detail: "About me",
  },
  {
    number: "02",
    title: "Experience",
    description: "My career journey, leadership scope and selected engineering and delivery achievements.",
    href: "/experience/",
    detail: "Career & impact",
  },
  {
    number: "03",
    title: "Selected Work",
    description: "Technical projects spanning delivery intelligence, quality engineering, security and practical applied AI.",
    href: "/projects/",
    detail: "Project case studies",
  },
  {
    number: "04",
    title: "Credentials",
    description: "Doctoral study, professional certifications and continuous development across engineering, architecture and leadership.",
    href: "/credentials/",
    detail: "Education & certifications",
  },
  {
    number: "05",
    title: "Contact",
    description: "Get in touch to discuss software engineering, technical delivery or professional collaboration.",
    href: "/contact/",
    detail: "Get in touch",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="cv-shell cv-hero" aria-labelledby="cv-name">
          <div>
            <p className="cv-eyebrow">Professional portfolio · Oxford, United Kingdom</p>
            <h1 id="cv-name">Ceci Garcia</h1>
            <p className="cv-role">Software Engineering &amp; Technical Delivery Leader</p>
            <p className="cv-lede">
              I lead the delivery and modernisation of enterprise software, combining more than 14 years of engineering experience with technical leadership, Agile delivery, release governance and applied AI. My focus is turning complex platform change into clear, achievable delivery plans while keeping engineering quality, security and people at the centre.
            </p>
            <div className="cv-actions">
              <Link className="cv-text-link" href="/about/">Explore my profile ↗</Link>
              <Link className="cv-text-link" href="/experience/">See my experience ↗</Link>
            </div>
          </div>
          <aside className="cv-aside" aria-label="Profile at a glance">
            <figure className="cv-portrait">
              <img src="/images/ceci-profile.webp" alt="Portrait of Ceci Garcia" width={280} height={350} decoding="async" fetchPriority="high" />
              <figcaption>Ceci Garcia · Software Engineering &amp; Technical Delivery</figcaption>
            </figure>
            <span className="cv-aside-heading">At a glance</span>
            <dl className="cv-fact"><dt>Current role</dt><dd>Technical Delivery Team Leader<br />University of Oxford</dd></dl>
            <dl className="cv-fact"><dt>Leadership scope</dt><dd>Six software developers · three QA specialists · four direct reports</dd></dl>
            <dl className="cv-fact"><dt>Focus</dt><dd>Enterprise modernisation · engineering leadership · release delivery · applied AI</dd></dl>
          </aside>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="pages-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Explore</span>
            <div>
              <h2 className="cv-section-title" id="pages-heading">Engineering depth. Delivery leadership. Practical innovation.</h2>
              <p className="cv-section-intro">Explore the experience, projects and credentials behind my work—from enterprise platform modernisation and release governance to independent engineering tools and AI-assisted workflows.</p>
              <div className="cv-page-grid">
                {destinations.map((destination) => (
                  <Link className="cv-page-card" href={destination.href} key={destination.href}>
                    <span className="cv-page-card-number">{destination.number} / {destination.detail}</span>
                    <h3>{destination.title}</h3>
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
