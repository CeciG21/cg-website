import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Certifications & Training | Ceci Garcia",
  description: "Salesforce and Scrum certifications, professional development and a historical course catalogue for Ceci Garcia.",
};

const trailblazerProfile = "https://www.salesforce.com/trailblazer/ceci-garcia";

// Certification names and dates from the career CV and Courses.txt inventory.
// Current credential maintenance status must be checked with the issuing organisation.
const salesforceCertifications = [
  {
    "title": "Salesforce Certified B2B Solution Architect",
    "date": "Jun 2025",
    "logo": "/images/salesforce-certifications/b2b-solution-architect.png"
  },
  {
    "title": "Salesforce Certified AI Associate",
    "date": "Jan 2025",
    "logo": "/images/salesforce-certifications/ai-associate.png"
  },
  {
    "title": "Salesforce Certified Data Cloud Consultant",
    "date": "Mar 2025",
    "logo": "/images/salesforce-certifications/data-360-consultant.png"
  },
  {
    "title": "Salesforce Certified Education Cloud Consultant",
    "date": "Apr 2025",
    "logo": "/images/salesforce-certifications/education-cloud-consultant.png"
  },
  {
    "title": "Salesforce Certified Platform Administrator",
    "date": "Mar 2025",
    "logo": "/images/salesforce-certifications/platform-administrator.png"
  },
  {
    "title": "Salesforce Certified Platform App Builder",
    "date": "Jun 2025",
    "logo": "/images/salesforce-certifications/platform-app-builder.png"
  },
  {
    "title": "Salesforce Certified Platform Developer",
    "date": "May 2025",
    "logo": "/images/salesforce-certifications/platform-developer-i.png"
  },
  {
    "title": "Salesforce Certified Platform Data Architect",
    "date": "Apr 2025",
    "logo": "/images/salesforce-certifications/platform-data-architect.png"
  },
  {
    "title": "Salesforce Certified Platform Identity and Access Management Architect",
    "date": "Jun 2025",
    "logo": "/images/salesforce-certifications/platform-identity-and-access-management-architect.png"
  },
  {
    "title": "Salesforce Certified Platform Sharing and Visibility Architect",
    "date": "Apr 2025",
    "logo": "/images/salesforce-certifications/platform-sharing-and-visibility-architect.png"
  },
  {
    "title": "Salesforce Certified Application Architect",
    "date": "Jun 2025",
    "logo": "/images/salesforce-certifications/application-architect.png"
  }
];
const scrumCertifications = [
  {
    "title": "Certified Scrum Professional – ScrumMaster (CSP-SM)",
    "date": "2022"
  },
  {
    "title": "Advanced Certified ScrumMaster (A-CSM)",
    "date": "2021"
  },
  {
    "title": "Certified ScrumMaster (CSM)",
    "date": "2019"
  }
];
const recentCourses = [
  {
    "title": "Software Architecture & Design of Modern Large Scale Systems",
    "date": "Aug 2025"
  },
  {
    "title": "ISO/IEC 27001:2022 Information Security Management System",
    "date": "Aug 2025"
  },
  {
    "title": "Certificate in Compliance Management",
    "date": "Jul 2025"
  },
  {
    "title": "Certification in Risk Management Assurance (CRMA)",
    "date": "Jul 2025"
  },
  {
    "title": "IT Project Management: Delivering Successful IT Projects",
    "date": "Jun 2025"
  }
];

// Historic learning is transcribed from Courses.txt. Three duplicated course titles
// appear only in the LinkedIn Learning group rather than twice on the website.
const linkedInCourses = [
  {
    "title": "Cybersecurity Foundations",
    "date": "Nov 2017"
  },
  {
    "title": "IT Security Foundations: Core Concepts",
    "date": "Nov 2017"
  },
  {
    "title": "Enterprise Agile: Growing Scrum",
    "date": "Nov 2017"
  },
  {
    "title": "Scrum: Advanced",
    "date": "Nov 2017"
  },
  {
    "title": "Learning Salesforce Admin (2017)",
    "date": "Sep 2017"
  },
  {
    "title": "Cybersecurity Awareness: Security Overview",
    "date": "Sep 2017"
  },
  {
    "title": "Drupal 8 Essential Training: 1 The Basics",
    "date": "Aug 2017"
  },
  {
    "title": "Learning SQL Programming",
    "date": "Aug 2017"
  },
  {
    "title": "JIRA Software: Advanced Administration",
    "date": "Aug 2017"
  },
  {
    "title": "New Manager Foundations (2013)",
    "date": "Aug 2017"
  },
  {
    "title": "Connecting with Peers in the Workplace (2014)",
    "date": "Aug 2017"
  },
  {
    "title": "Skype for Business Essential Training",
    "date": "Sep 2017"
  },
  {
    "title": "Installing Apache, MySQL, and PHP",
    "date": "Sep 2017"
  },
  {
    "title": "Project Management Foundations",
    "date": "Feb 2019"
  },
  {
    "title": "Six Sigma Foundations",
    "date": "Mar 2019"
  },
  {
    "title": "Cert Prep: ITIL Foundations",
    "date": "Mar 2019"
  },
  {
    "title": "Learning Canvas 2018",
    "date": "Mar 2019"
  },
  {
    "title": "The Digital Transformation of Learning",
    "date": "Mar 2019"
  },
  {
    "title": "Foundations of Learning Management Systems (LMS)",
    "date": "Mar 2019"
  }
];
const microsoftCourses = [
  {
    "title": "IT Expert Roundtable: Using Azure Data Lake for Advanced Analytics",
    "date": "12 Nov 2018"
  },
  {
    "title": "Licensing Windows Server 2012 R2",
    "date": "12 Nov 2018"
  },
  {
    "title": "Advanced Windows 10 Development with the Office 365 APIs",
    "date": "12 Nov 2018"
  },
  {
    "title": "Advanced SharePoint Add-in Development",
    "date": "12 Nov 2018"
  },
  {
    "title": "Advanced Office Add-in Development with Excel, Word, and PowerPoint",
    "date": "12 Nov 2018"
  },
  {
    "title": "Advanced Office Add-in Development with Outlook",
    "date": "12 Nov 2018"
  },
  {
    "title": "Advanced Web Development Using Angular with Office 365 APIs",
    "date": "12 Nov 2018"
  },
  {
    "title": "Getting Started with Mobile App Development with the Office 365 APIs",
    "date": "12 Nov 2018"
  },
  {
    "title": "Advanced Web Development with the Office 365 APIs",
    "date": "12 Nov 2018"
  },
  {
    "title": "Getting Started with SharePoint Add-ins",
    "date": "12 Nov 2018"
  },
  {
    "title": "Getting Started with the Office 365 APIs",
    "date": "12 Nov 2018"
  },
  {
    "title": "Getting Started with Office Add-ins",
    "date": "12 Nov 2018"
  },
  {
    "title": "Office 365 Developer Overview",
    "date": "12 Nov 2018"
  },
  {
    "title": "Enabling DevOps Practices with Visual Studio Team Services Build",
    "date": "12 Nov 2018"
  },
  {
    "title": "Introduction to Azure Security Center",
    "date": "12 Nov 2018"
  },
  {
    "title": "Securing Privileged Access",
    "date": "12 Nov 2018"
  },
  {
    "title": "Cloud Security from the Field",
    "date": "12 Nov 2018"
  },
  {
    "title": "Planning for a Security Incident",
    "date": "12 Nov 2018"
  },
  {
    "title": "Cybersecurity Reference Architecture",
    "date": "12 Nov 2018"
  },
  {
    "title": "How to Harden Your Enterprise in Today’s Threat Landscape",
    "date": "12 Nov 2018"
  },
  {
    "title": "Data Analytics at Microsoft (SME Roundtable)",
    "date": "30 Aug 2017"
  },
  {
    "title": "Office Guides: Deploying Office as a Service",
    "date": "15 Jan 2015"
  },
  {
    "title": "Office Guides: Deploying and Managing Exchange Mailbox High Availability",
    "date": "15 Jan 2015"
  },
  {
    "title": "HTML5 & CSS3 Fundamentals: Development for Absolute Beginners",
    "date": "15 Jan 2015"
  },
  {
    "title": "Office Guides: Exchange Cutover Migration with Office 365",
    "date": "15 Jan 2015"
  },
  {
    "title": "Office Guides: Using Archiving and eDiscovery in Exchange",
    "date": "15 Jan 2015"
  },
  {
    "title": "Office Guides: Business Intelligence in Office 365",
    "date": "15 Jan 2015"
  },
  {
    "title": "Office Guides: Configuring a Hybrid Deployment of the New Lync Server",
    "date": "15 Jan 2015"
  },
  {
    "title": "Office Guides: Exchange Hybrid Deployment with Office 365",
    "date": "15 Jan 2015"
  },
  {
    "title": "Hour of Code Event Training",
    "date": "15 Jan 2015"
  },
  {
    "title": "OneDrive: Store, Sync, and Share Your Personal Files",
    "date": "14 Jan 2015"
  },
  {
    "title": "SMB Solution: Boost Your Marketing with Office 365",
    "date": "13 Jan 2015"
  },
  {
    "title": "SMB Solution: Increase Your Sales with Office 365",
    "date": "13 Jan 2015"
  },
  {
    "title": "SMB Solution: Increase Your Productivity with Office 365",
    "date": "13 Jan 2015"
  },
  {
    "title": "Support Corner: Access OWA in O365",
    "date": "13 Jan 2015"
  },
  {
    "title": "Office Guides: Microsoft Project Online",
    "date": "13 Jan 2015"
  }
];

export default function CredentialsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell mp-page-hero credentials-hero">
          <span className="section-kicker">CREDENTIALS &amp; CONTINUOUS LEARNING</span>
          <h1>Certifications &amp; professional development.</h1>
          <p>My formal certifications, recent professional training and earlier technical courses. The catalogue covers software engineering, enterprise platforms, Agile delivery, architecture, security and leadership.</p>
          <div className="credentials-hero-actions">
            <a className="cv-text-link" href={trailblazerProfile} target="_blank" rel="noopener noreferrer">
              Salesforce Trailblazer · certifications &amp; badges ↗
            </a>
          </div>
          <nav className="credentials-jump" aria-label="Credential categories">
            <a href="#salesforce">Salesforce</a>
            <a href="#agile">Agile</a>
            <a href="#recent-learning">Recent learning</a>
            <a href="#learning-archive">Learning archive</a>
          </nav>
        </section>

        <section className="cv-section cv-shell" id="salesforce" aria-labelledby="salesforce-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">01 / SALESFORCE</span>
            <div>
              <h2 className="cv-section-title" id="salesforce-heading">Salesforce certifications.</h2>
              <p className="cv-section-intro">Eleven Salesforce certifications earned in 2025, covering solution architecture, platform development, administration, identity, data and education. The issuing organisation maintains the current credential record and badges on Trailblazer.</p>
              <div className="credentials-grid">
                {salesforceCertifications.map((credential) => (
                  <article className="credentials-card" key={credential.title}>
                    <a className="credentials-badge-link" href={credential.logo} target="_blank" rel="noopener noreferrer" aria-label={`View full-size badge artwork for ${credential.title}`}>
                      <img src={credential.logo} alt={`Official Salesforce badge artwork for ${credential.title}`} width={140} height={137} loading="lazy" />
                    </a>
                    <span className="credentials-card-type">Salesforce · Certification</span>
                    <h3>{credential.title}</h3>
                    <span className="credentials-date">{credential.date}</span>
                    {credential.title === "Salesforce Certified AI Associate" && <span className="credentials-card-note">Supplied badge artwork is marked retired.</span>}
                    {credential.title === "Salesforce Certified Data Cloud Consultant" && <span className="credentials-card-note">Badge artwork uses the newer Data 360 branding.</span>}
                  </article>
                ))}
              </div>
              <div className="credentials-provider-note">
                <p><strong>Badge artwork and verification.</strong> Select any badge above to view the high-resolution Salesforce logo. These images represent certificate designs, not individual verification records. Visit my Trailblazer profile to check publicly shared certifications and earned badges; this website does not host personal Salesforce certificate PDFs.</p>
                <a className="cv-text-link" href={trailblazerProfile} target="_blank" rel="noopener noreferrer">Open Salesforce Trailblazer profile ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" id="agile" aria-labelledby="agile-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">02 / AGILE</span>
            <div>
              <h2 className="cv-section-title" id="agile-heading">Agile &amp; Scrum certifications.</h2>
              <p className="cv-section-intro">Scrum Alliance qualifications completed between 2019 and 2022. Current renewal status is not represented as independently verified.</p>
              <div className="credentials-grid">
                {scrumCertifications.map((credential) => (
                  <article className="credentials-card" key={credential.title}>
                    <span className="credentials-card-type">Scrum Alliance · Certification</span>
                    <h3>{credential.title}</h3>
                    <span className="credentials-date">{credential.date}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" id="recent-learning" aria-labelledby="recent-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">03 / DEVELOPMENT</span>
            <div>
              <h2 className="cv-section-title" id="recent-heading">Recent courses &amp; leadership development.</h2>
              <p className="cv-section-intro">Targeted learning in software architecture, information security, governance, risk and project delivery. Course completion is listed separately from externally examined professional certifications.</p>
              <div className="credentials-records">
                {recentCourses.map((course) => (
                  <div className="credentials-record" key={course.title}>
                    <div><h3>{course.title}</h3><span>Udemy · Professional training course</span></div>
                    <span className="credentials-date">{course.date}</span>
                  </div>
                ))}
                <div className="credentials-record">
                  <div><h3>Oxford Women&apos;s Leadership Development Programme</h3><span>Saïd Business School · University of Oxford · Leadership programme</span></div>
                  <span className="credentials-date">2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section cv-shell" id="learning-archive" aria-labelledby="archive-heading">
          <div className="cv-section-layout">
            <span className="cv-section-label">04 / COURSE ARCHIVE</span>
            <div>
              <h2 className="cv-section-title" id="archive-heading">Earlier technical learning.</h2>
              <p className="cv-section-intro">A historical course inventory from 2015–2019, grouped by learning platform. Open either collection to browse the full list; repeated titles have been listed once.</p>
              <div className="credentials-archive">
                <details>
                  <summary><span>LinkedIn Learning / Lynda</span><small>{linkedInCourses.length} courses · 2017–2019</small></summary>
                  <ul>
                    {linkedInCourses.map((course) => (
                      <li key={course.title}><span>{course.title}</span><small>{course.date}</small></li>
                    ))}
                  </ul>
                </details>
                <details>
                  <summary><span>Microsoft Virtual Academy</span><small>{microsoftCourses.length} courses · 2015–2018</small></summary>
                  <ul>
                    {microsoftCourses.map((course) => (
                      <li key={course.title}><span>{course.title}</span><small>{course.date}</small></li>
                    ))}
                  </ul>
                </details>
              </div>
              <p className="credentials-source-note">Training dates and course titles are drawn from my learning inventory. Provider-issued credentials, certificates and course completion are different types of achievement and are presented separately.</p>
              <Link className="cv-text-link" href="/about/">Back to professional profile ↗</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
