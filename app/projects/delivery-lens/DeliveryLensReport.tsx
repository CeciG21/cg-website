"use client";

import { useMemo, useState } from "react";

type ProgressPoint = { day: string; scope: number; done: number };
type Sprint = {
  id: string;
  label: string;
  goal: string;
  outcome: "Achieved" | "Not achieved";
  forecast: number;
  done: number;
  added: number;
  progress: ProgressPoint[];
  change: string;
  adaptation: string;
};

const sprints: Sprint[] = [
  {
    id: "s12",
    label: "Sprint 12",
    goal: "Complete the account migration path and make the next release ready for controlled rollout.",
    outcome: "Achieved",
    forecast: 18,
    done: 12,
    added: 3,
    progress: [
      { day: "D1", scope: 18, done: 0 }, { day: "D2", scope: 18, done: 2 }, { day: "D3", scope: 18, done: 3 },
      { day: "D4", scope: 18, done: 5 }, { day: "D5", scope: 20, done: 6 }, { day: "D6", scope: 20, done: 8 },
      { day: "D7", scope: 21, done: 9 }, { day: "D8", scope: 21, done: 10 }, { day: "D9", scope: 21, done: 12 },
      { day: "D10", scope: 21, done: 12 },
    ],
    change: "Three security patches were introduced during the Sprint and became the highest-priority work.",
    adaptation: "The team adapted the Sprint Backlog around the Sprint Goal. Lower-priority work returned to the Product Backlog rather than being treated as failed delivery.",
  },
  {
    id: "s11",
    label: "Sprint 11",
    goal: "Prove the new content workflow end-to-end with the first pilot team.",
    outcome: "Not achieved",
    forecast: 16,
    done: 9,
    added: 2,
    progress: [
      { day: "D1", scope: 16, done: 0 }, { day: "D2", scope: 16, done: 1 }, { day: "D3", scope: 16, done: 2 },
      { day: "D4", scope: 16, done: 3 }, { day: "D5", scope: 18, done: 4 }, { day: "D6", scope: 18, done: 5 },
      { day: "D7", scope: 18, done: 6 }, { day: "D8", scope: 18, done: 7 }, { day: "D9", scope: 18, done: 8 },
      { day: "D10", scope: 18, done: 9 },
    ],
    change: "An external test dependency delayed the end-to-end path while other work could still progress.",
    adaptation: "The dependency was escalated, a temporary test route was agreed, and the pilot expectation was reset before the Sprint Review.",
  },
  {
    id: "s10",
    label: "Sprint 10",
    goal: "Reduce production support friction and ship the first observability improvements.",
    outcome: "Achieved",
    forecast: 14,
    done: 13,
    added: 1,
    progress: [
      { day: "D1", scope: 14, done: 0 }, { day: "D2", scope: 14, done: 2 }, { day: "D3", scope: 14, done: 3 },
      { day: "D4", scope: 14, done: 5 }, { day: "D5", scope: 14, done: 7 }, { day: "D6", scope: 15, done: 8 },
      { day: "D7", scope: 15, done: 10 }, { day: "D8", scope: 15, done: 11 }, { day: "D9", scope: 15, done: 12 },
      { day: "D10", scope: 15, done: 13 },
    ],
    change: "A production support request was added without changing the Sprint Goal.",
    adaptation: "The request was made visible as a Sprint Backlog change and the team protected the remaining work from further additions.",
  },
];

const trend = [
  { label: "S8", forecast: 15, done: 13 }, { label: "S9", forecast: 14, done: 12 },
  { label: "S10", forecast: 14, done: 13 }, { label: "S11", forecast: 16, done: 9 }, { label: "S12", forecast: 18, done: 12 },
];

const chart = { width: 680, height: 250, left: 38, right: 18, top: 18, bottom: 38 };

function progressPoints(points: ProgressPoint[], key: "scope" | "done") {
  const max = Math.max(...points.map((point) => point.scope), 1);
  const plotWidth = chart.width - chart.left - chart.right;
  const plotHeight = chart.height - chart.top - chart.bottom;
  return points.map((point, index) => {
    const x = chart.left + (index / Math.max(points.length - 1, 1)) * plotWidth;
    const y = chart.top + plotHeight - (point[key] / max) * plotHeight;
    return `${x},${y}`;
  }).join(" ");
}

export function DeliveryLensReport() {
  const [activeId, setActiveId] = useState(sprints[0].id);
  const sprint = useMemo(() => sprints.find((item) => item.id === activeId) ?? sprints[0], [activeId]);

  return (
    <>
      <section className="section-shell delivery-demo" aria-labelledby="scrum-delivery-title">
        <div className="delivery-heading">
          <div>
            <span className="section-kicker">01 · SPRINT DELIVERY</span>
            <h2 id="scrum-delivery-title">Scrum keeps the team focused on the outcome.</h2>
          </div>
          <div className="sprint-tabs" aria-label="Choose a Sprint">
            {sprints.map((item) => <button key={item.id} type="button" className={item.id === activeId ? "active" : ""} onClick={() => setActiveId(item.id)}>{item.label}</button>)}
          </div>
        </div>

        <div className="goal-card">
          <div><span>SPRINT GOAL</span><h3>{sprint.goal}</h3></div>
          <strong className={`outcome ${sprint.outcome === "Achieved" ? "good" : "attention"}`}>{sprint.outcome}</strong>
        </div>

        <div className="metrics">
          <article><span>Forecast</span><b>{sprint.forecast}</b><small>selected at Sprint Planning</small></article>
          <article><span>Done</span><b>{sprint.done}</b><small>met the Definition of Done</small></article>
          <article><span>Sprint Backlog change</span><b>+{sprint.added}</b><small>made visible during the Sprint</small></article>
        </div>

        <div className="charts-grid">
          <article className="chart-card">
            <div className="chart-heading"><div><span>SPRINT BURN-UP</span><h3>Scope and Done work</h3></div><div className="legend"><i className="scope-key" /> Sprint Backlog <i className="done-key" /> Done</div></div>
            <svg className="line-chart" viewBox={`0 0 ${chart.width} ${chart.height}`} role="img" aria-label={`${sprint.label} burn-up chart`}>
              {[0,1,2,3,4].map((step) => { const y = chart.top + ((chart.height-chart.top-chart.bottom)/4)*step; return <line key={step} x1={chart.left} x2={chart.width-chart.right} y1={y} y2={y} className="grid-line" />; })}
              <polyline points={progressPoints(sprint.progress,"scope")} className="chart-line scope-line" />
              <polyline points={progressPoints(sprint.progress,"done")} className="chart-line done-line" />
              {sprint.progress.map((point,index) => { const x = chart.left + (index/Math.max(sprint.progress.length-1,1))*(chart.width-chart.left-chart.right); return <text key={point.day} x={x} y={chart.height-12} textAnchor="middle" className="axis-label">{point.day}</text>; })}
            </svg>
          </article>

          <article className="chart-card">
            <div className="chart-heading"><div><span>SPRINT TREND</span><h3>Forecast compared with Done</h3></div><div className="legend"><i className="forecast-key" /> Forecast <i className="done-key" /> Done</div></div>
            <svg className="bar-chart" viewBox="0 0 680 250" role="img" aria-label="Forecast and Done across five Sprints">
              {[0,1,2,3,4].map((step) => { const y=18+((250-18-38)/4)*step; return <line key={step} x1="38" x2="662" y1={y} y2={y} className="grid-line"/>; })}
              {trend.map((item,index) => { const baseY=212; const groupX=74+index*120; const forecastHeight=(item.forecast/20)*194; const doneHeight=(item.done/20)*194; return <g key={item.label}><rect x={groupX} y={baseY-forecastHeight} width="30" height={forecastHeight} rx="3" className="forecast-bar"/><rect x={groupX+36} y={baseY-doneHeight} width="30" height={doneHeight} rx="3" className="done-bar"/><text x={groupX+33} y="238" textAnchor="middle" className="axis-label">{item.label}</text></g>; })}
            </svg>
          </article>
        </div>

        <div className="inspect-adapt">
          <article><span>WHAT CHANGED?</span><p>{sprint.change}</p></article>
          <div className="flow-arrow" aria-hidden="true">→</div>
          <article><span>HOW WE ADAPTED</span><p>{sprint.adaptation}</p></article>
        </div>
      </section>

      <section className="projects-section release-section" aria-labelledby="release-title">
        <div className="section-shell">
          <div className="section-heading split-heading release-heading"><div><span className="section-number">02</span><span className="section-kicker">CI/CD &amp; RELEASES</span></div><h2 id="release-title">From commit to production, with evidence at every stage.</h2></div>

          <div className="pipeline" aria-label="Illustrative CI/CD release pipeline">
            {["Commit","Build","Automated tests","Security checks","Staging","Production","Smoke test"].map((step,index) => (
              <div className="pipeline-step" key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong><i>✓</i></div>
            ))}
          </div>

          <div className="release-story">
            <article><span>CHANGE</span><h3>Security patches enter the delivery flow.</h3><p>The change is visible, prioritised and follows the same engineering path as other production work.</p></article>
            <div className="release-arrow" aria-hidden="true">→</div>
            <article><span>VERIFY</span><h3>Build, test and security checks run as normal.</h3><p>Automated evidence is gathered before the change progresses towards production.</p></article>
            <div className="release-arrow" aria-hidden="true">→</div>
            <article><span>DEPLOY &amp; OBSERVE</span><h3>Release, validate and monitor.</h3><p>After deployment, smoke testing and monitoring confirm the change is behaving as expected, with rollback available if needed.</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell method-section" aria-labelledby="method-title">
        <div className="section-heading split-heading"><div><span className="section-number">03</span><span className="section-kicker">HOW I WORK</span></div><h2 id="method-title">Scrum for focus. Kanban for flow.</h2></div>

        <div className="method-visual">
          <div className="method-side scrum-side"><span>SCRUM</span><h3>Direction &amp; cadence</h3><div className="method-stack"><b>Product Goal</b><b>Sprint Goal</b><b>Planning</b><b>Review</b><b>Retrospective</b></div></div>
          <div className="method-centre">
            <div className="method-connector">FOCUS</div>
            <div className="flow-board" aria-label="Kanban workflow"><div>Ready</div><span>→</span><div>In progress</div><span>→</span><div>Review</div><span>→</span><div>Done</div></div>
            <div className="urgent-card"><span>↳</span><strong>Urgent work stays visible</strong><small>e.g. security patch</small></div>
            <div className="method-connector">INSPECT · ADAPT · IMPROVE</div>
          </div>
          <div className="method-side kanban-side"><span>KANBAN</span><h3>Visibility &amp; flow</h3><div className="method-stack"><b>Visualise work</b><b>Limit WIP</b><b>Surface blockers</b><b>Manage flow</b><b>Improve continuously</b></div></div>
        </div>

        <p className="method-summary">I use Scrum to create focus around outcomes and a regular inspect-and-adapt rhythm. I use Kanban practices to make the work visible, understand flow and respond transparently when priorities change.</p>
      </section>

      <style jsx>{`
        .delivery-demo,.method-section{padding-top:2rem;padding-bottom:6rem}.delivery-heading,.goal-card,.chart-heading{display:flex;align-items:center;justify-content:space-between;gap:1rem}.delivery-heading{align-items:end;margin-bottom:1.5rem}.delivery-heading h2{max-width:760px;margin:.45rem 0 0}.sprint-tabs{display:flex;gap:.45rem;flex-wrap:wrap}.sprint-tabs button{border:1px solid var(--line);background:transparent;border-radius:999px;padding:.65rem .95rem;font:inherit;cursor:pointer}.sprint-tabs button.active,.sprint-tabs button:hover{background:var(--ink);color:white}.goal-card,.metrics article,.chart-card,.inspect-adapt,.method-visual{border:1px solid var(--line);background:rgba(255,255,255,.42)}.goal-card{padding:1.6rem;margin-bottom:.75rem}.goal-card span,.metrics span,.chart-heading span,.inspect-adapt span,.release-story span,.method-side>span{font-size:.72rem;letter-spacing:.13em;text-transform:uppercase;opacity:.62}.goal-card h3{max-width:820px;margin:.35rem 0 0;font-size:clamp(1.2rem,2vw,1.75rem);line-height:1.22}.outcome{border:1px solid currentColor;border-radius:999px;padding:.35rem .62rem;font-size:.74rem;white-space:nowrap}.good{color:#27724f}.attention{color:#9b3f32}.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-bottom:.75rem}.metrics article{padding:1.2rem}.metrics b{display:block;font-size:2.2rem;margin:.3rem 0}.metrics small{opacity:.64}.charts-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.75rem}.chart-card{padding:1.25rem;overflow:hidden}.chart-heading{align-items:flex-start}.chart-heading h3{margin:.2rem 0 0}.legend{display:flex;gap:.4rem;align-items:center;font-size:.7rem;opacity:.65}.legend i{width:11px;height:3px;display:inline-block}.scope-key{background:#b18a52}.forecast-key{background:#8f9498}.done-key{background:#27724f}.line-chart,.bar-chart{width:100%;min-height:220px}.grid-line{stroke:rgba(20,28,34,.1)}.chart-line{fill:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}.scope-line{stroke:#b18a52}.done-line{stroke:#27724f}.forecast-bar{fill:#8f9498;opacity:.5}.done-bar{fill:#27724f}.axis-label{font-size:12px;fill:currentColor;opacity:.55}.inspect-adapt{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;padding:1.4rem;gap:1.2rem}.inspect-adapt p,.method-summary{line-height:1.6;opacity:.75;margin:.4rem 0 0}.flow-arrow,.release-arrow{font-size:2rem;opacity:.5}.release-section{padding-top:6rem;padding-bottom:6rem;background:var(--ink);color:#f2f5f4}.release-heading h2{color:#f2f5f4!important;max-width:760px;font-size:clamp(2.2rem,4.6vw,4.6rem);line-height:1.02}.release-section .section-kicker,.release-section .section-number{color:#6ec7df}.pipeline{display:grid;grid-template-columns:repeat(7,1fr);gap:.5rem;margin:2.2rem 0}.pipeline-step{position:relative;border:1px solid rgba(255,255,255,.24);padding:1rem;min-height:110px;display:flex;flex-direction:column;justify-content:space-between;background:rgba(255,255,255,.02)}.pipeline-step span{font-size:.68rem;color:rgba(255,255,255,.52)}.pipeline-step strong{font-size:.86rem;color:#f3f5f4}.pipeline-step i{font-style:normal;color:#7bd3a5}.release-story{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;align-items:center;gap:1rem}.release-story article{border-top:1px solid rgba(255,255,255,.26);padding-top:1rem}.release-story span{color:#c2c9c8;opacity:1}.release-story h3{margin:.35rem 0 0;color:#f3f5f4}.release-story p{line-height:1.6;color:#c4cbca;margin:.45rem 0 0;opacity:1}.method-visual{display:grid;grid-template-columns:.8fr 1.6fr .8fr;gap:1rem;padding:1.2rem;margin-top:2rem}.method-side{padding:1.2rem}.method-side h3{margin:.35rem 0 1rem}.method-stack{display:grid;gap:.5rem}.method-stack b{border:1px solid var(--line);padding:.72rem;font-size:.82rem;font-weight:600}.method-centre{display:grid;align-content:center;gap:1rem;padding:1rem}.method-connector{text-align:center;font-size:.68rem;letter-spacing:.14em;opacity:.5}.flow-board{display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;gap:.45rem;align-items:center}.flow-board div{border:1px solid var(--line);padding:.85rem .55rem;text-align:center;font-size:.78rem}.flow-board span{opacity:.35}.urgent-card{justify-self:center;border:1px dashed #b18a52;padding:.7rem 1rem;display:grid;grid-template-columns:auto auto;gap:.1rem .5rem;align-items:center}.urgent-card small{grid-column:2;opacity:.6}.method-summary{max-width:900px;margin:1.4rem auto 0;text-align:center}@media(max-width:980px){.delivery-heading{align-items:flex-start;flex-direction:column}.charts-grid{grid-template-columns:1fr}.pipeline{grid-template-columns:repeat(4,1fr)}.method-visual{grid-template-columns:1fr}.release-story{grid-template-columns:1fr}.release-arrow{transform:rotate(90deg);justify-self:center}}@media(max-width:640px){.goal-card{align-items:flex-start;flex-direction:column}.metrics{grid-template-columns:1fr}.inspect-adapt{grid-template-columns:1fr}.flow-arrow{transform:rotate(90deg);justify-self:center}.pipeline{grid-template-columns:1fr 1fr}.flow-board{grid-template-columns:1fr}.flow-board span{transform:rotate(90deg);justify-self:center}.legend{flex-wrap:wrap}.release-heading h2{font-size:clamp(2rem,10vw,3rem)}}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}
      `}</style>
    </>
  );
}
