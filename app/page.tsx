import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "Ceci Garcia | Software Engineering & Technical Delivery",
  description: "Ceci Garcia's professional portfolio, experience, selected engineering projects and credentials.",
};

const destinations = [
  {
    number: "01",
    title: "Profile",
    description: "Who I am, how I approach engineering leadership, and the technical areas I work across.",
    href: "/about/",
    detail: "About me",
  },
  {
    number: "02",
    title: "Experience",
    description: "My career journey, delivery responsibilities, and selected engineering achievements.",
    href: "/experience/",
    detail: "Career & impact",
  },
  {
    number: "03",
    title: "Selected Work",
    description: "Explore technical projects covering security, delivery intelligence, quality and applied AI.",
    href: "/projects/",
    detail: "Project case studies",
  },
  {
    number: "04",
    title: "Credentials",
    description: "Certifications, formal education and professional learning throughout my career.",
    href: "/credentials/",
    detail: "Education & certifications",
  },
  {
    number: "05",
    title: "Contact",
    description: "Get in touch to discuss engineering, technical delivery or professional collaboration.",
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
            <p className="cv-role">Software Engineering &amp; Technical Delivery</p>
            <p className="cv-lede">
              Technical delivery and software engineering leader with over 14 years&apos; experience developing and modernising enterprise web platforms and integrated systems. I combine hands-on engineering with Agile delivery, technical assurance and practical applied AI.
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
            <dl className="cv-fact"><dt>Leadership scope</dt><dd>16-person delivery group · four direct reports</dd></dl>
            <dl className="cv-fact"><dt>Focus</dt><dd>Software engineering · technical leadership · Agile delivery · applied AI</dd></dl>
          </aside>
        </section>

        <section className="cv-section cv-shell" aria-labelledby="pages-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">Explore</span>
            <div>
              <h2 className="cv-section-title" id="pages-heading">A dedicated page for every part of my work.</h2>
              <p className="cv-section-intro">Choose an area to explore. Each page has its own URL and content, rather than sending you to a section further down the homepage.</p>
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
