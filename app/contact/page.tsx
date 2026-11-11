import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | Ceci Garcia",
  description: "Contact Ceci Garcia for professional conversations about software engineering, technical delivery and collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="cv-shell mp-page-hero">
          <span className="section-kicker">CONTACT</span>
          <h1>Let&apos;s connect.</h1>
          <p>For professional conversations about software engineering, technical delivery, enterprise platforms and applied AI, please get in touch by email.</p>
        </section>

        <section className="cv-shell cv-section" aria-labelledby="contact-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">01 / Get in touch</span>
            <div className="cv-contact-page-panel">
              <span className="cv-aside-heading">Email</span>
              <h2 className="cv-section-title" id="contact-heading">A direct way to reach me.</h2>
              <a className="cv-contact-email" href="mailto:ceci.garcia.ox@gmail.com">ceci.garcia.ox@gmail.com <span aria-hidden="true">↗</span></a>
              <p>Based in Oxford, United Kingdom. I welcome relevant professional enquiries and conversations about engineering and delivery.</p>
            </div>
          </div>
        </section>

        <section className="cv-shell cv-section" aria-labelledby="contact-work-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">02 / Before you write</span>
            <div>
              <h2 className="cv-section-title" id="contact-work-heading">Interested in something I&apos;ve built?</h2>
              <p className="cv-section-intro">You can explore my project case studies for context on the problem, technical approach and implementation boundaries.</p>
              <Link href="/projects/" className="cv-text-link">Explore selected work ↗</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
