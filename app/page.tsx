const expertise = [
  "Software architecture",
  "Technical delivery",
  "React & Next.js",
  "Enterprise web platforms",
  "APIs & integrations",
  "Security & SSO",
  "Agile delivery",
  "Engineering leadership",
];

const experience = [
  {
    period: "2025 — now",
    role: "Technical Delivery Team Leader",
    organisation: "University of Oxford · IT Services",
    summary:
      "Lead technical delivery across enterprise web platforms and applications, coordinating a 16-person cross-functional group while line-managing four engineers and acting as Release Manager.",
  },
  {
    period: "2017 — 2025",
    role: "Senior Developer",
    organisation: "Saïd Business School · University of Oxford",
    summary:
      "Led architecture, modernisation and integration across enterprise digital platforms, including Drupal, academic systems, SSO, Salesforce, Canvas and bespoke applications.",
  },
  {
    period: "2011 — 2017",
    role: "Software Developer → Technical Lead",
    organisation: "Oxford · Zurich · Zug",
    summary:
      "Built web applications, learning platforms and digital services across PHP, JavaScript, C#/.NET, SQL and Drupal, combining hands-on engineering with technical ownership.",
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function ShieldMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 4 39 10v11c0 10.8-6.2 18.1-15 23-8.8-4.9-15-12.2-15-23V10l15-6Z" />
      <path d="m17.5 24 4 4 9-10" />
    </svg>
  );
}

function DeliveryMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 11h30v26H9z" />
      <path d="M15 29V19M24 32V15M33 25v-6" />
      <path d="M14 11V7M34 11V7" />
    </svg>
  );
}

function ShieldPreview() {
  return (
    <div className="product-window shield-window" aria-label="Illustrative CG Shield interface preview">
      <div className="window-bar">
        <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
        <div className="window-title">CG Shield · Overview</div>
        <div className="preview-badge">Illustrative preview</div>
      </div>
      <div className="app-shell">
        <aside className="mini-sidebar">
          <div className="mini-brand"><span className="mini-shield">◇</span><b>CG Shield</b></div>
          <span className="mini-nav active">Overview</span>
          <span className="mini-nav">Detections</span>
          <span className="mini-nav">Protection</span>
          <span className="mini-nav">Privacy</span>
          <span className="mini-nav">Connections</span>
        </aside>
        <div className="mini-main">
          <div className="mini-heading-row">
            <div><span className="eyebrow-small">TRAFFIC PROTECTION</span><h4>Overview</h4></div>
            <span className="status-pill good">System healthy</span>
          </div>
          <div className="preview-grid two">
            <div className="preview-panel">
              <span className="panel-kicker">Protection status</span>
              <div className="protection-line"><span className="protection-icon">◈</span><div><b>Observation ready</b><small>Bounded controls keep decisions explainable.</small></div></div>
            </div>
            <div className="preview-panel">
              <span className="panel-kicker">System health</span>
              <div className="health-lines"><span><i />Local analysis <b>Ready</b></span><span><i />Cloudflare <b>Connected</b></span><span><i />Traffic source <b>Configured</b></span></div>
            </div>
          </div>
          <div className="preview-grid four metrics-preview">
            {[
              ["Requests observed", "—"],
              ["Candidate visitors", "—"],
              ["Attack campaigns", "—"],
              ["Active mitigations", "—"],
            ].map(([label, value]) => (
              <div className="metric-mini" key={label}><span>{label}</span><b>{value}</b></div>
            ))}
          </div>
          <div className="preview-panel table-panel">
            <div className="table-title"><span>Recent detections</span><span>Decision trail</span></div>
            <div className="fake-table-row header"><span>Visitor</span><span>Classification</span><span>Score</span><span>Decision</span></div>
            <div className="fake-table-row"><span>Private by design</span><span>Local analysis</span><span>—</span><span>Bounded</span></div>
          </div>
        </div>
      </div>
      <div className="preview-note">Interface reconstruction based on the current app. No live visitor data is shown.</div>
    </div>
  );
}

function DeliveryPreview() {
  return (
    <div className="product-window delivery-window" aria-label="Illustrative Delivery Lens interface preview">
      <div className="window-bar">
        <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
        <div className="window-title">Delivery Lens · Overview</div>
        <div className="preview-badge">Illustrative preview</div>
      </div>
      <div className="delivery-shell">
        <div className="delivery-topbar">
          <div className="delivery-logo"><span>DL</span><div><b>Delivery Lens</b><small>Evidence before opinion</small></div></div>
          <div className="delivery-nav"><span className="active">Overview</span><span>Attention</span><span>Delivery</span><span>Insights</span><span>Reports</span></div>
          <span className="status-pill good">Evidence ready</span>
        </div>
        <div className="delivery-content">
          <div className="briefing">
            <span className="panel-kicker">AI BRIEFING · VERIFIED EVIDENCE</span>
            <h4>Know what changed before you decide what to do.</h4>
            <p>Planning baseline, scope movement, delivery-cut evidence and release signals are kept separate from interpretation.</p>
          </div>
          <div className="preview-grid three">
            <div className="lens-card"><span>Planning baseline</span><b>Exact membership</b><small>Reconstructed at the configured cutoff.</small></div>
            <div className="lens-card"><span>Scope movement</span><b>Added + removed</b><small>Churn is not hidden by net totals.</small></div>
            <div className="lens-card attention"><span>Unknowns</span><b>Shown explicitly</b><small>No invented zeroes or false certainty.</small></div>
          </div>
          <div className="lens-bottom">
            <div className="evidence-chart" aria-hidden="true">
              <div className="chart-head"><span>Sprint evidence</span><small>Historical snapshots</small></div>
              <div className="bars"><i style={{ height: "42%" }} /><i style={{ height: "64%" }} /><i style={{ height: "54%" }} /><i style={{ height: "78%" }} /><i style={{ height: "68%" }} /><i style={{ height: "86%" }} /></div>
              <div className="chart-axis"><span>Earlier</span><span>Latest</span></div>
            </div>
            <div className="evidence-list">
              <span className="panel-kicker">DELIVERY SIGNALS</span>
              <div><i className="signal-dot green" /><span>Baseline evidence</span><b>Verified</b></div>
              <div><i className="signal-dot blue" /><span>Cut candidates</span><b>Separated</b></div>
              <div><i className="signal-dot amber" /><span>Deployment state</span><b>Unknown until proven</b></div>
            </div>
          </div>
        </div>
      </div>
      <div className="preview-note">Interface reconstruction based on the current app. No University delivery data is shown.</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ceci Garcia home"><span>CG</span><b>Ceci Garcia</b></a>
        <nav aria-label="Main navigation">
          <a href="#profile">Profile</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#projects">View my work <ArrowUpRight /></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Software engineering · Technical delivery · Product thinking</div>
          <h1>I build systems that teams can <em>trust.</em></h1>
          <p className="hero-lede">
            I&apos;m Ceci Garcia, a software engineering and technical delivery leader with 14+ years of experience turning complex requirements into secure, maintainable digital products.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore selected projects <ArrowUpRight /></a>
            <a className="button ghost" href="mailto:ceci.garcia.ox@gmail.com">Get in touch</a>
          </div>
          <div className="hero-meta"><span>Oxford, UK</span><span>Engineering leadership</span><span>Hands-on delivery</span></div>
        </div>
        <div className="hero-visual" aria-label="Career impact summary">
          <div className="orbit-card main-card">
            <span className="card-label">CURRENT FOCUS</span>
            <h2>Engineering leadership without losing the engineering.</h2>
            <p>Architecture, delivery, security and team systems designed to make complex work clearer and safer.</p>
            <div className="main-card-footer"><span className="live-dot" /> University-scale digital platforms</div>
          </div>
          <div className="orbit-card stat-card stat-one"><b>16</b><span>cross-functional colleagues coordinated</span></div>
          <div className="orbit-card stat-card stat-two"><b>~30%</b><span>higher reported delivery velocity</span></div>
          <div className="orbit-card stat-card stat-three"><b>~40%</b><span>fewer post-release incidents</span></div>
          <div className="hero-grid" aria-hidden="true" />
        </div>
      </section>

      <section className="trust-strip" aria-label="Core expertise">
        <div className="ticker">
          {expertise.map((item) => <span key={item}>{item}<i>✦</i></span>)}
        </div>
      </section>

      <section className="section-shell profile-section" id="profile">
        <div className="section-heading split-heading">
          <div><span className="section-number">01</span><span className="section-kicker">PROFILE</span></div>
          <h2>Software is only useful when it improves the way people work.</h2>
        </div>
        <div className="profile-grid">
          <div className="profile-story">
            <p className="large-copy">
              My work sits where <strong>software engineering, architecture, delivery and leadership</strong> meet. I have progressed from developer to senior engineer and technical delivery leader while continuing to stay close to code, systems and technical decisions.
            </p>
            <p>
              At the University of Oxford I lead technical delivery across enterprise web platforms and applications, bringing together engineering, product, QA, architecture, migration and operational concerns. Earlier, at Saïd Business School, I led platform modernisation, integrations, SSO and enterprise CMS development.
            </p>
            <p>
              I care about practical engineering: clear evidence, bounded risk, maintainable systems, useful interfaces and delivery processes that help teams make better decisions.
            </p>
          </div>
          <div className="proof-grid">
            <article className="proof-card"><span>01</span><h3>Build</h3><p>React, Next.js, Node.js, TypeScript, APIs, SQL and enterprise web platforms.</p></article>
            <article className="proof-card"><span>02</span><h3>Modernise</h3><p>Architecture, platform consolidation, integration and technical assurance.</p></article>
            <article className="proof-card"><span>03</span><h3>Lead</h3><p>Cross-functional delivery, coaching, release management and stakeholder alignment.</p></article>
            <article className="proof-card"><span>04</span><h3>Protect</h3><p>SSO, IAM/MFA, security governance, testing and privacy-aware design.</p></article>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-shell">
          <div className="section-heading project-heading">
            <div><span className="section-number">02</span><span className="section-kicker">SELECTED BUILDS</span></div>
            <div className="heading-copy"><h2>Products built to make difficult decisions easier.</h2><p>Two private-source projects shown through product intent, architecture and interface behaviour.</p></div>
          </div>

          <article className="project-case shield-case">
            <div className="project-copy">
              <div className="project-title-row"><div className="project-icon"><ShieldMark /></div><div><span className="project-index">PROJECT 01</span><h3>CG Shield</h3></div></div>
              <p className="project-tagline">A privacy-aware website traffic protection layer that starts with cheap local analysis and keeps automated mitigations bounded and reversible.</p>
              <div className="project-tags"><span>Local-first analysis</span><span>Cloudflare</span><span>Optional AI review</span><span>Privacy controls</span></div>
              <div className="benefit-list">
                <div><span>01</span><div><b>Reduce unnecessary AI cost</b><p>Local rules pre-filter traffic first; optional AI is reserved for ambiguous cases rather than every request.</p></div></div>
                <div><span>02</span><div><b>Make protection explainable</b><p>Detection, classification and policy decisions are surfaced as evidence instead of hidden inside an opaque automation.</p></div></div>
                <div><span>03</span><div><b>Keep mitigation controlled</b><p>Observation, challenge and defence modes allow operators to increase protection deliberately, with temporary actions rather than permanent assumptions.</p></div></div>
              </div>
              <div className="why-useful"><span>WHY IT&apos;S USEFUL</span><p>Small teams need protection without sending every visitor to an AI model or surrendering control to a black box. CG Shield combines local detection, optional second-opinion AI and Cloudflare controls in one operator-focused workflow.</p></div>
            </div>
            <ShieldPreview />
          </article>

          <article className="project-case delivery-case">
            <DeliveryPreview />
            <div className="project-copy">
              <div className="project-title-row"><div className="project-icon"><DeliveryMark /></div><div><span className="project-index">PROJECT 02</span><h3>Delivery Lens</h3></div></div>
              <p className="project-tagline">An evidence-grounded delivery intelligence layer for Agile software projects, using read-only Azure DevOps data, historical snapshots and optional AI explanations.</p>
              <div className="project-tags"><span>Next.js + TypeScript</span><span>Azure DevOps</span><span>PostgreSQL</span><span>Optional OpenAI</span></div>
              <div className="benefit-list">
                <div><span>01</span><div><b>Recover what was actually planned</b><p>Historical ASOF queries reconstruct exact baseline membership rather than judging a sprint only from today&apos;s board state.</p></div></div>
                <div><span>02</span><div><b>Expose scope churn honestly</b><p>Added and removed work are measured separately so unchanged totals cannot hide significant movement.</p></div></div>
                <div><span>03</span><div><b>Separate facts from interpretation</b><p>Unknown evidence remains unknown. Optional AI explains the same server-side snapshot shown by the dashboard and is instructed not to invent certainty.</p></div></div>
              </div>
              <div className="why-useful"><span>WHY IT&apos;S USEFUL</span><p>Delivery conversations often start with opinions because the historical evidence is difficult to reconstruct. Delivery Lens makes planning, scope movement and release signals inspectable before the team decides what they mean.</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="section-heading split-heading">
          <div><span className="section-number">03</span><span className="section-kicker">EXPERIENCE</span></div>
          <h2>From hands-on development to university-scale technical delivery.</h2>
        </div>
        <div className="experience-layout">
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span className="timeline-period">{item.period}</span>
                <div className="timeline-copy"><h3>{item.role}</h3><span>{item.organisation}</span><p>{item.summary}</p></div>
              </article>
            ))}
          </div>
          <aside className="credentials-card">
            <span className="card-label">SELECTED CREDENTIALS</span>
            <div className="credential"><b>11</b><span>active Salesforce certifications, including Application Architect and B2B Solution Architect</span></div>
            <div className="credential"><b>CSP-SM</b><span>Certified Scrum Professional, with A-CSM and CSM</span></div>
            <div className="credential"><b>2026</b><span>Doctorate academic requirements completed in Institutional Management and Innovation; award pending</span></div>
            <div className="credential"><b>Oxford</b><span>Women&apos;s Leadership Development Programme, Saïd Business School</span></div>
          </aside>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-shell capabilities-grid">
          <div className="capability-intro"><span className="section-number">04</span><span className="section-kicker">CAPABILITIES</span><h2>Technical depth with delivery context.</h2><p>I work across the full path from idea and architecture to implementation, assurance, release and operational handover.</p></div>
          <div className="capability-columns">
            <div><span>ENGINEERING</span><p>React · Next.js · JavaScript · TypeScript · Node.js · HTML/CSS · Drupal/PHP · REST APIs · SQL · Git · CI/CD</p></div>
            <div><span>PLATFORMS & DATA</span><p>PostgreSQL · MySQL · Docker · Kubernetes · Linux/Bash · Payload · Salesforce · Canvas · Azure DevOps</p></div>
            <div><span>DELIVERY</span><p>Scrum · Kanban · release management · capacity planning · technical assurance · stakeholder management · supplier coordination</p></div>
            <div><span>SECURITY & INTEGRATION</span><p>SSO · Microsoft AD FS · IAM/MFA · privacy-aware data handling · penetration-test assurance · enterprise integrations</p></div>
          </div>
        </div>
      </section>

      <section className="section-shell contact-section" id="contact">
        <div className="contact-card">
          <div><span className="section-kicker">LET&apos;S TALK</span><h2>Complex problem?<br />I like those.</h2></div>
          <div className="contact-copy"><p>I&apos;m interested in engineering leadership, technical delivery, platform modernisation and product work where clear thinking matters as much as clean code.</p><div className="contact-actions"><a className="button light" href="mailto:ceci.garcia.ox@gmail.com">ceci.garcia.ox@gmail.com <ArrowUpRight /></a><a className="text-link" href="https://github.com/CeciG21" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a></div></div>
        </div>
      </section>

      <footer className="site-footer">
        <div><span className="footer-mark">CG</span><span>Ceci Garcia · Oxford, UK</span></div>
        <p>Software engineering · Technical delivery · Product thinking</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
