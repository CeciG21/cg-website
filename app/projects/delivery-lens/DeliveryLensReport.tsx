"use client";

import { useMemo, useState } from "react";

type ProgressPoint = { day: string; scope: number; done: number };
type DeliverySignal = { signal: string; context: string; action: string };
type ReleaseConfidence = {
  status: "Green" | "Amber" | "Red";
  decision: string;
  evidence: string[];
};
type Sprint = {
  id: string;
  label: string;
  goal: string;
  goalOutcome: "Achieved" | "Not achieved";
  forecast: number;
  done: number;
  added: number;
  progress: ProgressPoint[];
  signals: DeliverySignal[];
  release?: ReleaseConfidence;
};

const trend = [
  { id: "s8", label: "S8", forecast: 15, done: 13 },
  { id: "s9", label: "S9", forecast: 14, done: 12 },
  { id: "s10", label: "S10", forecast: 14, done: 13 },
  { id: "s11", label: "S11", forecast: 16, done: 9 },
  { id: "s12", label: "S12", forecast: 18, done: 12 },
];

const sprints: Sprint[] = [
  {
    id: "s12",
    label: "Sprint 12",
    goal: "Complete the account migration path and make the next release ready for controlled rollout.",
    goalOutcome: "Achieved",
    forecast: 18,
    done: 12,
    added: 3,
    progress: [
      { day: "D1", scope: 18, done: 0 },
      { day: "D2", scope: 18, done: 2 },
      { day: "D3", scope: 18, done: 3 },
      { day: "D4", scope: 18, done: 5 },
      { day: "D5", scope: 20, done: 6 },
      { day: "D6", scope: 20, done: 8 },
      { day: "D7", scope: 21, done: 9 },
      { day: "D8", scope: 21, done: 10 },
      { day: "D9", scope: 21, done: 12 },
      { day: "D10", scope: 21, done: 12 },
    ],
    signals: [
      {
        signal: "Urgent technical work entered after Sprint Planning.",
        context: "The Sprint Backlog increased while the migration outcome remained the priority.",
        action: "Re-sequenced lower-priority work with the team and kept the Sprint Goal protected rather than treating every selected item as equally critical.",
      },
      {
        signal: "Deployment route still carried uncertainty late in the Sprint.",
        context: "The release could proceed, but a fallback window was still needed.",
        action: "Made the release risk explicit before the decision point and agreed the fallback route and owner.",
      },
    ],
    release: {
      status: "Amber",
      decision: "GO — proceed with one accepted deployment risk and a confirmed fallback window.",
      evidence: ["Critical path tested", "Security checks complete", "Support handover ready", "Deployment fallback agreed"],
    },
  },
  {
    id: "s11",
    label: "Sprint 11",
    goal: "Prove the new content workflow end-to-end with the first pilot team.",
    goalOutcome: "Not achieved",
    forecast: 16,
    done: 9,
    added: 2,
    progress: [
      { day: "D1", scope: 16, done: 0 },
      { day: "D2", scope: 16, done: 1 },
      { day: "D3", scope: 16, done: 2 },
      { day: "D4", scope: 16, done: 3 },
      { day: "D5", scope: 18, done: 4 },
      { day: "D6", scope: 18, done: 5 },
      { day: "D7", scope: 18, done: 6 },
      { day: "D8", scope: 18, done: 7 },
      { day: "D9", scope: 18, done: 8 },
      { day: "D10", scope: 18, done: 9 },
    ],
    signals: [
      {
        signal: "An external test dependency blocked the end-to-end path.",
        context: "Several items could progress, but the Sprint Goal itself could not be evidenced.",
        action: "Escalated the dependency owner, agreed a temporary stub for parallel work and reset the pilot expectation before release week.",
      },
      {
        signal: "Review work started ageing while new development continued.",
        context: "The review queue was becoming a flow constraint rather than a development constraint.",
        action: "Asked the team to swarm on ageing review work before pulling more items into progress.",
      },
    ],
  },
  {
    id: "s10",
    label: "Sprint 10",
    goal: "Reduce production support friction and ship the first observability improvements.",
    goalOutcome: "Achieved",
    forecast: 14,
    done: 13,
    added: 1,
    progress: [
      { day: "D1", scope: 14, done: 0 },
      { day: "D2", scope: 14, done: 2 },
      { day: "D3", scope: 14, done: 3 },
      { day: "D4", scope: 14, done: 5 },
      { day: "D5", scope: 14, done: 7 },
      { day: "D6", scope: 15, done: 8 },
      { day: "D7", scope: 15, done: 10 },
      { day: "D8", scope: 15, done: 11 },
      { day: "D9", scope: 15, done: 12 },
      { day: "D10", scope: 15, done: 13 },
    ],
    signals: [
      {
        signal: "A support request was added without changing the Sprint Goal.",
        context: "The team could absorb the work without creating a material delivery risk.",
        action: "Kept the new request visible as a scope change and protected the remaining work from further additions.",
      },
    ],
    release: {
      status: "Green",
      decision: "GO — evidence complete with no open release-blocking concern.",
      evidence: ["Regression complete", "Monitoring enabled", "Runbook updated", "Support owner confirmed"],
    },
  },
];

const chart = { width: 680, height: 250, left: 38, right: 18, top: 18, bottom: 38 };

function progressPoints(points: ProgressPoint[], key: "scope" | "done") {
  const max = Math.max(...points.map((point) => point.scope), 1);
  const plotWidth = chart.width - chart.left - chart.right;
  const plotHeight = chart.height - chart.top - chart.bottom;
  return points
    .map((point, index) => {
      const x = chart.left + (index / Math.max(points.length - 1, 1)) * plotWidth;
      const y = chart.top + plotHeight - (point[key] / max) * plotHeight;
      return `${x},${y}`;
    })
    .join(" ");
}

function statusClass(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

export function DeliveryLensReport() {
  const [activeId, setActiveId] = useState(sprints[0].id);
  const sprint = useMemo(() => sprints.find((item) => item.id === activeId) ?? sprints[0], [activeId]);
  const currentTrend = trend.find((item) => item.id === activeId);

  return (
    <section className="section-shell delivery-demo" aria-labelledby="delivery-demo-title">
      <div className="delivery-heading">
        <div>
          <span className="section-kicker">SIMULATED DELIVERY REPORT</span>
          <h2 id="delivery-demo-title">A concise view of outcome, change and the decisions that followed.</h2>
        </div>
        <div className="sprint-tabs" aria-label="Choose a Sprint">
          {sprints.map((item) => (
            <button key={item.id} type="button" className={item.id === activeId ? "active" : ""} onClick={() => setActiveId(item.id)}>{item.label}</button>
          ))}
        </div>
      </div>

      <div className="goal-card">
        <div>
          <span>SPRINT GOAL</span>
          <h3>{sprint.goal}</h3>
        </div>
        <div className="goal-outcome">
          <small>Outcome</small>
          <strong className={`pill ${statusClass(sprint.goalOutcome)}`}>{sprint.goalOutcome}</strong>
        </div>
      </div>

      <div className="metrics" aria-label="Sprint headline measures">
        <article><span>Forecast</span><b>{sprint.forecast}</b><small>selected at Sprint Planning</small></article>
        <article><span>Done</span><b>{sprint.done}</b><small>met the Definition of Done</small></article>
        <article><span>Scope added</span><b>+{sprint.added}</b><small>entered after Sprint start</small></article>
      </div>

      <div className="charts-grid">
        <article className="chart-card">
          <div className="chart-heading">
            <div><span>SPRINT PROGRESS</span><h3>How scope and Done work moved</h3></div>
            <div className="legend"><i className="scope-key" /> Sprint Backlog <i className="done-key" /> Done</div>
          </div>
          <svg className="line-chart" viewBox={`0 0 ${chart.width} ${chart.height}`} role="img" aria-label={`${sprint.label} burn-up showing Sprint Backlog scope and Done work across ten days`}>
            <title>{sprint.label} Sprint progress</title>
            {[0, 1, 2, 3, 4].map((step) => {
              const y = chart.top + ((chart.height - chart.top - chart.bottom) / 4) * step;
              return <line key={step} x1={chart.left} x2={chart.width - chart.right} y1={y} y2={y} className="grid-line" />;
            })}
            <polyline points={progressPoints(sprint.progress, "scope")} className="chart-line scope-line" />
            <polyline points={progressPoints(sprint.progress, "done")} className="chart-line done-line" />
            {sprint.progress.map((point, index) => {
              const plotWidth = chart.width - chart.left - chart.right;
              const x = chart.left + (index / Math.max(sprint.progress.length - 1, 1)) * plotWidth;
              return <text key={point.day} x={x} y={chart.height - 12} textAnchor="middle" className="axis-label">{point.day}</text>;
            })}
          </svg>
          <p className="chart-note">The scope line makes change visible instead of rewriting the Sprint as if the original forecast never existed.</p>
        </article>

        <article className="chart-card">
          <div className="chart-heading">
            <div><span>DELIVERY TREND</span><h3>Forecast compared with Done</h3></div>
            <div className="legend"><i className="forecast-key" /> Forecast <i className="done-key" /> Done</div>
          </div>
          <svg className="bar-chart" viewBox="0 0 680 250" role="img" aria-label="Forecast and Done work across five synthetic Sprints">
            <title>Forecast compared with Done across five Sprints</title>
            {[0, 1, 2, 3, 4].map((step) => {
              const y = 18 + ((250 - 18 - 38) / 4) * step;
              return <line key={step} x1="38" x2="662" y1={y} y2={y} className="grid-line" />;
            })}
            {trend.map((item, index) => {
              const max = 20;
              const plotHeight = 194;
              const baseY = 212;
              const groupX = 74 + index * 120;
              const forecastHeight = (item.forecast / max) * plotHeight;
              const doneHeight = (item.done / max) * plotHeight;
              const isActive = item.id === activeId;
              return (
                <g key={item.id} className={isActive ? "active-group" : ""}>
                  <rect x={groupX} y={baseY - forecastHeight} width="30" height={forecastHeight} rx="3" className="forecast-bar" />
                  <rect x={groupX + 36} y={baseY - doneHeight} width="30" height={doneHeight} rx="3" className="done-bar" />
                  <text x={groupX + 33} y="238" textAnchor="middle" className="axis-label">{item.label}</text>
                </g>
              );
            })}
          </svg>
          <p className="chart-note">{currentTrend ? `${currentTrend.label}: ${currentTrend.forecast} forecast, ${currentTrend.done} Done. ` : ""}A variance is a prompt to inspect what changed, not a performance score.</p>
        </article>
      </div>

      <div className={`report-lower ${sprint.release ? "with-release" : ""}`}>
        <article className="signal-card">
          <div className="section-label"><span>WHAT AFFECTED DELIVERY</span><b>{sprint.signals.length} signal{sprint.signals.length === 1 ? "" : "s"}</b></div>
          {sprint.signals.map((item) => (
            <div className="signal" key={item.signal}>
              <strong>{item.signal}</strong>
              <p>{item.context}</p>
              <div className="action"><span>DELIVERY ACTION</span><p>{item.action}</p></div>
            </div>
          ))}
        </article>

        {sprint.release && (
          <article className="release-card">
            <div className="section-label"><span>RELEASE CONFIDENCE</span><strong className={`confidence ${sprint.release.status.toLowerCase()}`}>{sprint.release.status}</strong></div>
            <h3>{sprint.release.decision}</h3>
            <ul>{sprint.release.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        )}
      </div>

      <p className="note">All figures, work, risks and release scenarios shown here are synthetic. They demonstrate the reporting approach without reproducing private programme information.</p>

      <style jsx>{`
        .delivery-demo{padding-top:1rem;padding-bottom:6rem}.delivery-heading,.goal-card,.section-label,.chart-heading{display:flex;align-items:center;justify-content:space-between;gap:1rem}.delivery-heading{align-items:end;margin-bottom:1.5rem}.delivery-heading h2{max-width:760px;margin:.45rem 0 0}.sprint-tabs{display:inline-flex;gap:.45rem;flex-wrap:wrap;justify-content:flex-end}.sprint-tabs button{border:1px solid var(--line);background:transparent;color:inherit;border-radius:999px;padding:.65rem .95rem;font:inherit;font-size:.82rem;cursor:pointer;transition:background .2s ease,color .2s ease,border-color .2s ease,transform .2s ease}.sprint-tabs button:hover,.sprint-tabs button.active{background:var(--ink);color:white;border-color:var(--ink);transform:translateY(-1px)}.goal-card,.metrics article,.chart-card,.signal-card,.release-card{border:1px solid var(--line);background:rgba(255,255,255,.42)}.goal-card{padding:1.6rem;margin-bottom:.75rem;align-items:flex-start}.goal-card>div:first-child{max-width:820px}.goal-card span,.metrics span,.chart-heading span,.section-label span,.action span{font-size:.72rem;letter-spacing:.13em;text-transform:uppercase;opacity:.62}.goal-card h3{margin:.35rem 0 0;font-size:clamp(1.2rem,2vw,1.75rem);line-height:1.22}.goal-outcome{display:grid;gap:.4rem;justify-items:end}.goal-outcome small{font-size:.68rem;text-transform:uppercase;letter-spacing:.12em;opacity:.52}.pill,.confidence{white-space:nowrap;border-radius:999px;border:1px solid currentColor;padding:.35rem .62rem;font-size:.74rem;line-height:1}.achieved,.confidence.green{color:#27724f}.not-achieved,.confidence.red{color:#9b3f32}.confidence.amber{color:#8a651f}.metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem;margin-bottom:.75rem}.metrics article{padding:1.2rem}.metrics b{display:block;font-size:2.2rem;margin:.3rem 0 .12rem}.metrics small{display:block;line-height:1.35;opacity:.64}.charts-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.75rem}.chart-card{padding:1.25rem;overflow:hidden}.chart-heading{align-items:flex-start;margin-bottom:.4rem}.chart-heading h3{margin:.25rem 0 0;font-size:1.05rem}.legend{display:flex;align-items:center;gap:.42rem;font-size:.7rem;opacity:.66;white-space:nowrap}.legend i{display:inline-block;width:11px;height:3px;border-radius:3px}.scope-key{background:#b18a52}.forecast-key{background:#8f9498}.done-key{background:#27724f}.line-chart,.bar-chart{width:100%;height:auto;min-height:220px;overflow:visible}.grid-line{stroke:rgba(20,28,34,.1);stroke-width:1}.chart-line{fill:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;transition:all .35s ease}.scope-line{stroke:#b18a52}.done-line{stroke:#27724f}.forecast-bar{fill:#8f9498;opacity:.5;transition:opacity .2s ease}.done-bar{fill:#27724f;opacity:.78;transition:opacity .2s ease}.active-group .forecast-bar,.active-group .done-bar{opacity:1}.axis-label{font-size:12px;fill:currentColor;opacity:.55}.chart-note,.signal p,.action p,.note{margin:0;line-height:1.55;opacity:.72}.chart-note{font-size:.82rem;margin-top:.15rem}.report-lower{display:grid;grid-template-columns:1fr;gap:.75rem}.report-lower.with-release{grid-template-columns:1.25fr .75fr}.signal-card,.release-card{padding:1.25rem}.section-label{padding-bottom:.85rem;border-bottom:1px solid var(--line)}.section-label b{font-size:.75rem;opacity:.52;font-weight:600}.signal{padding:1rem 0;border-bottom:1px solid var(--line)}.signal:last-child{border-bottom:0;padding-bottom:0}.signal>strong{display:block;font-size:1rem;margin-bottom:.28rem}.action{margin-top:.75rem;padding:.8rem .9rem;background:rgba(20,28,34,.045)}.action p{margin-top:.28rem}.release-card h3{font-size:clamp(1.15rem,2vw,1.6rem);line-height:1.25;margin:1.1rem 0}.release-card ul{margin:0;padding:0;list-style:none}.release-card li{padding:.55rem 0;border-top:1px solid var(--line);font-size:.88rem}.release-card li::before{content:'✓';margin-right:.55rem;color:#27724f}.note{font-size:.78rem;margin-top:.9rem}@media(max-width:980px){.delivery-heading{align-items:flex-start;flex-direction:column}.sprint-tabs{justify-content:flex-start}.charts-grid,.report-lower.with-release{grid-template-columns:1fr}}@media(max-width:640px){.goal-card{flex-direction:column}.goal-outcome{justify-items:start}.metrics{grid-template-columns:1fr}.chart-heading{flex-direction:column}.legend{white-space:normal}.line-chart,.bar-chart{min-height:180px}}@media(prefers-reduced-motion:reduce){.sprint-tabs button,.chart-line,.forecast-bar,.done-bar{transition:none}}
      `}</style>
    </section>
  );
}
