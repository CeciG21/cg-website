"use client";

import { useMemo, useState } from "react";

type Sprint = {
  id: string;
  label: string;
  goal: string;
  goalStatus: "Achieved" | "At risk";
  selected: number;
  done: number;
  added: number;
  carried: number;
  blockers: number;
  risks: { label: string; level: "Low" | "Medium" | "High"; action: string }[];
  dependencies: { label: string; status: "On track" | "Watching" | "Blocked"; next: string }[];
  release: { label: string; state: "Ready" | "Watch" | "Open" }[];
  decision: string;
  intervention: string;
};

const sprints: Sprint[] = [
  {
    id: "s12",
    label: "Sprint 12",
    goal: "Complete the account migration path and make Release 2.8 ready for controlled rollout.",
    goalStatus: "Achieved",
    selected: 18,
    done: 12,
    added: 3,
    carried: 6,
    blockers: 2,
    risks: [
      { label: "Late platform configuration", level: "High", action: "Agree evidence date and fallback before release readiness." },
      { label: "Regression coverage on migration path", level: "Medium", action: "Prioritise critical journey checks before lower-risk scenarios." },
    ],
    dependencies: [
      { label: "Identity service configuration", status: "On track", next: "Confirm production values at readiness review." },
      { label: "Platform deployment window", status: "Watching", next: "Keep fallback window reserved until smoke test completes." },
    ],
    release: [
      { label: "Scope confirmed", state: "Ready" },
      { label: "Regression evidence", state: "Ready" },
      { label: "Security review", state: "Ready" },
      { label: "Deployment route", state: "Watch" },
      { label: "Support handover", state: "Ready" },
    ],
    decision: "GO — proceed with one accepted deployment risk and an agreed fallback window.",
    intervention: "Protected the Sprint Goal when urgent technical work arrived, re-sequenced lower-priority scope and made the release dependency explicit before the decision point.",
  },
  {
    id: "s11",
    label: "Sprint 11",
    goal: "Prove the new content workflow end-to-end with the first pilot team.",
    goalStatus: "At risk",
    selected: 16,
    done: 9,
    added: 2,
    carried: 7,
    blockers: 4,
    risks: [
      { label: "External API test data unavailable", level: "High", action: "Escalate owner and agree a stubbed test route." },
      { label: "Review queue ageing", level: "Medium", action: "Swarm on the two oldest items before starting new work." },
    ],
    dependencies: [
      { label: "External API test tenant", status: "Blocked", next: "Use agreed stub while vendor access is resolved." },
      { label: "Design sign-off", status: "On track", next: "Close final accessibility comments." },
    ],
    release: [
      { label: "Scope confirmed", state: "Ready" },
      { label: "Regression evidence", state: "Open" },
      { label: "Security review", state: "Ready" },
      { label: "Deployment route", state: "Ready" },
      { label: "Support handover", state: "Watch" },
    ],
    decision: "NO-GO — defer pilot until the end-to-end path can be evidenced without manual workarounds.",
    intervention: "Made the dependency visible early, separated what could still progress from what was genuinely blocked, and reset the pilot expectation instead of carrying hidden uncertainty into release week.",
  },
  {
    id: "s10",
    label: "Sprint 10",
    goal: "Reduce production support friction and ship the first observability improvements.",
    goalStatus: "Achieved",
    selected: 14,
    done: 13,
    added: 1,
    carried: 1,
    blockers: 1,
    risks: [
      { label: "Alert noise after rollout", level: "Low", action: "Review thresholds after one week of production data." },
      { label: "Support ownership during leave", level: "Medium", action: "Confirm named cover and escalation route." },
    ],
    dependencies: [
      { label: "Monitoring credentials", status: "On track", next: "Rotate after rollout." },
      { label: "Service desk runbook", status: "On track", next: "Publish final screenshots after deployment." },
    ],
    release: [
      { label: "Scope confirmed", state: "Ready" },
      { label: "Regression evidence", state: "Ready" },
      { label: "Security review", state: "Ready" },
      { label: "Deployment route", state: "Ready" },
      { label: "Support handover", state: "Ready" },
    ],
    decision: "GO — evidence complete and no open release-blocking risks.",
    intervention: "Kept the work focused on the outcome, challenged new requests that did not support the Sprint Goal and used the quieter Sprint to tighten the release and support handover.",
  },
];

function statusClass(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

export function DeliveryLensReport() {
  const [activeId, setActiveId] = useState(sprints[0].id);
  const sprint = useMemo(() => sprints.find((item) => item.id === activeId) ?? sprints[0], [activeId]);
  const completion = Math.round((sprint.done / sprint.selected) * 100);

  return (
    <section className="section-shell delivery-demo" aria-labelledby="delivery-demo-title">
      <div className="delivery-heading">
        <div>
          <span className="section-kicker">SIMULATED DELIVERY REPORT</span>
          <h2 id="delivery-demo-title">Explore how the delivery story changes Sprint by Sprint.</h2>
        </div>
        <div className="sprint-tabs" aria-label="Choose a Sprint">
          {sprints.map((item) => (
            <button key={item.id} type="button" className={item.id === activeId ? "active" : ""} onClick={() => setActiveId(item.id)}>{item.label}</button>
          ))}
        </div>
      </div>

      <div className="goal-card">
        <div><span>SPRINT GOAL</span><h3>{sprint.goal}</h3></div>
        <strong className={`pill ${statusClass(sprint.goalStatus)}`}>{sprint.goalStatus}</strong>
      </div>

      <div className="metrics" aria-label="Sprint measures">
        <article><span>Selected</span><b>{sprint.selected}</b><small>at Sprint Planning</small></article>
        <article><span>Done</span><b>{sprint.done}</b><small>{completion}% of selected work</small></article>
        <article><span>Added</span><b>+{sprint.added}</b><small>after Sprint start</small></article>
        <article><span>Carry-over</span><b>{sprint.carried}</b><small>did not reach Done</small></article>
        <article><span>Blockers</span><b>{sprint.blockers}</b><small>required active follow-up</small></article>
      </div>

      <div className="progress-card" aria-label={`${completion}% of selected work reached Done`}>
        <div className="progress-label"><span>Forecast vs actual</span><strong>{completion}%</strong></div>
        <div className="progress-track"><span style={{ width: `${completion}%` }} /></div>
        <p>The percentage is context, not the outcome. The Sprint Goal and the reasons behind movement matter more than a single completion number.</p>
      </div>

      <div className="two-col">
        <article className="panel">
          <div className="panel-title"><span>RISKS</span><b>{sprint.risks.length} active</b></div>
          {sprint.risks.map((risk) => <div className="row" key={risk.label}><div><strong>{risk.label}</strong><p>{risk.action}</p></div><span className={`pill ${risk.level.toLowerCase()}`}>{risk.level}</span></div>)}
        </article>
        <article className="panel">
          <div className="panel-title"><span>DEPENDENCIES</span><b>{sprint.dependencies.length} tracked</b></div>
          {sprint.dependencies.map((dependency) => <div className="row" key={dependency.label}><div><strong>{dependency.label}</strong><p>{dependency.next}</p></div><span className={`pill ${statusClass(dependency.status)}`}>{dependency.status}</span></div>)}
        </article>
      </div>

      <div className="two-col">
        <article className="panel">
          <div className="panel-title"><span>RELEASE READINESS</span><b>evidence</b></div>
          <div className="readiness-list">{sprint.release.map((item) => <div key={item.label}><span>{item.label}</span><strong className={`state ${item.state.toLowerCase()}`}>{item.state}</strong></div>)}</div>
        </article>
        <article className="panel decision">
          <div className="panel-title"><span>DECISION</span><b>{sprint.label}</b></div>
          <h3>{sprint.decision}</h3>
          <div className="intervention"><span>WHAT I DID</span><p>{sprint.intervention}</p></div>
        </article>
      </div>

      <p className="note">All names, figures, risks, dependencies and delivery scenarios shown here are synthetic and created for this portfolio demonstration.</p>

      <style jsx>{`
        .delivery-demo{padding-top:1rem;padding-bottom:6rem}.delivery-heading,.goal-card,.panel-title,.progress-label,.readiness-list>div{display:flex;align-items:center;justify-content:space-between;gap:1rem}.delivery-heading{align-items:end;margin-bottom:1.5rem}.delivery-heading h2{max-width:760px;margin:.45rem 0 0}.sprint-tabs{display:inline-flex;gap:.45rem;flex-wrap:wrap;justify-content:flex-end}.sprint-tabs button{border:1px solid var(--line);background:transparent;color:inherit;border-radius:999px;padding:.65rem .95rem;font:inherit;font-size:.82rem;cursor:pointer;transition:.2s ease}.sprint-tabs button:hover,.sprint-tabs button.active{background:var(--ink);color:white;border-color:var(--ink);transform:translateY(-1px)}.goal-card,.panel,.progress-card,.metrics article{border:1px solid var(--line);background:rgba(255,255,255,.42)}.goal-card{padding:1.6rem;margin-bottom:.75rem}.goal-card span,.panel-title span,.intervention span,.metrics span{font-size:.72rem;letter-spacing:.13em;text-transform:uppercase;opacity:.62}.goal-card h3{max-width:800px;margin:.35rem 0 0;font-size:clamp(1.2rem,2vw,1.75rem);line-height:1.22}.metrics{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.75rem;margin-bottom:.75rem}.metrics article{padding:1.15rem}.metrics b{display:block;font-size:2rem;margin:.3rem 0 .15rem}.metrics small{display:block;line-height:1.35;opacity:.64}.progress-card{padding:1.25rem;margin-bottom:.75rem}.progress-track{height:10px;margin:.7rem 0 .8rem;background:rgba(20,28,34,.1);overflow:hidden}.progress-track span{display:block;height:100%;background:var(--ink);transition:width .45s ease}.progress-card p,.row p,.note,.intervention p{margin:0;line-height:1.55;opacity:.72}.two-col{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.75rem}.panel{padding:1.25rem}.panel-title{padding-bottom:.9rem;border-bottom:1px solid var(--line)}.panel-title b{font-size:.78rem;font-weight:600;opacity:.58}.row{display:grid;grid-template-columns:1fr auto;gap:1rem;align-items:start;padding:1rem 0;border-bottom:1px solid var(--line)}.row:last-child{border-bottom:0;padding-bottom:0}.row strong{display:block;margin-bottom:.28rem}.pill,.state{white-space:nowrap;border-radius:999px;border:1px solid currentColor;padding:.3rem .55rem;font-size:.72rem;line-height:1}.achieved,.low,.on-track,.state.ready{color:#27724f}.at-risk,.high,.blocked,.state.open{color:#9b3f32}.medium,.watching,.state.watch{color:#8a651f}.readiness-list>div{padding:.85rem 0;border-bottom:1px solid var(--line)}.readiness-list>div:last-child{border-bottom:0}.decision h3{font-size:clamp(1.3rem,2.2vw,2rem);line-height:1.2;margin:1.2rem 0 1.5rem}.intervention{padding-top:1rem;border-top:1px solid var(--line)}.intervention p{margin-top:.45rem}.note{font-size:.78rem;margin-top:.9rem}@media(max-width:900px){.delivery-heading{align-items:flex-start;flex-direction:column}.sprint-tabs{justify-content:flex-start}.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}.two-col{grid-template-columns:1fr}}@media(max-width:560px){.goal-card{align-items:flex-start;flex-direction:column}.metrics{grid-template-columns:1fr}}
      `}</style>
    </section>
  );
}
