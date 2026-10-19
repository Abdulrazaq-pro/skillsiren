import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeftRight, Bell, Bookmark, BriefcaseBusiness, Check, ChevronRight, FileText, Inbox, LayoutDashboard,
  Lightbulb, Search, Send, Sparkles, UserRound, X, XCircle, RotateCcw,
} from 'lucide-react'
import { Avatar } from '../ui/Avatar.jsx'
import { StatusPill } from '../ui/StatusPill.jsx'
import { cn } from '../../lib/cn.js'
import {
  activity as seedActivity, applicants as seedApplicants, cvDocument, demoUser, OPP_STATUSES, OPP_TYPES,
  opportunities as seedOpps, profileSkills, reviewBrief, SWAP_SKILLS, swapProfiles, weeklyMatches,
} from '../../data/demo.js'

const VIEWS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'opportunities', label: 'Opportunities', icon: BriefcaseBusiness },
  { id: 'swaps', label: 'Skill Swap', icon: ArrowLeftRight },
  { id: 'review', label: 'Review queue', icon: Inbox },
  { id: 'profile', label: 'Profile', icon: UserRound },
]

const TYPE_COLORS = { Freelance: '#F25A2E', Contract: '#F2B53A', 'Full-time': '#3B4778', 'Skill Swap': '#2FCB9E' }

function fmtDate(iso) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })
}

/* ---------- Modal ---------- */
function Modal({ title, onClose, children, footer }) {
  const ref = useRef(null)
  useEffect(() => {
    const prev = document.activeElement
    ref.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && ref.current) {
        const f = ref.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
        if (!f.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); prev?.focus?.() }
  }, [onClose])
  return (
    <div className="absolute inset-0 z-30 flex items-end justify-center bg-ink-950/40 p-0 backdrop-blur-[2px] sm:items-center sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={title} className="flex max-h-full w-full max-w-lg animate-fadeUp flex-col overflow-hidden rounded-t-2xl bg-white shadow-lift outline-none sm:rounded-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-ink-900/10 px-5 py-4">
          <h4 className="text-[17px] font-semibold text-ink-950">{title}</h4>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-lg p-1 text-ink-400 hover:bg-ink-100 hover:text-ink-900"><X className="h-4 w-4" aria-hidden="true" /></button>
        </div>
        <div className="dash-scroll overflow-y-auto px-5 py-4">{children}</div>
        {footer ? <div className="flex flex-wrap justify-end gap-2 border-t border-ink-900/10 bg-paper/60 px-5 py-3">{footer}</div> : null}
      </div>
    </div>
  )
}

/* ---------- Overview ---------- */
function MatchChart() {
  const [active, setActive] = useState(() => new Set(OPP_TYPES))
  const [hover, setHover] = useState(null)
  const max = Math.max(...weeklyMatches.map((w) => OPP_TYPES.reduce((s, t) => s + (active.has(t) ? w[t] : 0), 0)), 1)
  const H = 150
  return (
    <div className="rounded-xl border border-ink-900/10 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[13px] font-medium text-ink-800">Matches surfaced per week</p>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Filter chart by type">
          {OPP_TYPES.map((t) => {
            const on = active.has(t)
            return (
              <button key={t} type="button" aria-pressed={on}
                onClick={() => setActive((s) => { const n = new Set(s); if (n.has(t) && n.size > 1) n.delete(t); else n.add(t); return n })}
                className={cn('inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] transition', on ? 'border-ink-900/15 bg-white text-ink-700' : 'border-transparent bg-ink-100 text-ink-400')}>
                <span className="h-2 w-2 rounded-full" style={{ background: on ? TYPE_COLORS[t] : '#B4BAD3' }} />{t}
              </button>
            )
          })}
        </div>
      </div>
      <div className="relative mt-4 flex h-[170px] items-end gap-2 sm:gap-3" onMouseLeave={() => setHover(null)}>
        {weeklyMatches.map((w, i) => {
          const total = OPP_TYPES.reduce((s, t) => s + (active.has(t) ? w[t] : 0), 0)
          return (
            <button key={w.week} type="button" onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}
              aria-label={`${w.week}: ${total} matches`} className="group flex h-full flex-1 flex-col items-center justify-end gap-1.5 rounded-md">
              <span className="flex w-full max-w-[34px] flex-col-reverse overflow-hidden rounded-md" style={{ height: `${(total / max) * H}px` }}>
                {OPP_TYPES.filter((t) => active.has(t)).map((t) => (
                  <span key={t} style={{ height: `${(w[t] / Math.max(total, 1)) * 100}%`, background: TYPE_COLORS[t], opacity: hover === null || hover === i ? 1 : 0.35 }} className="block w-full transition-opacity" />
                ))}
              </span>
              <span className="text-[10px] text-ink-400">{w.week}</span>
            </button>
          )
        })}
        {hover !== null ? (
          <div className="pointer-events-none absolute top-0 z-10 rounded-lg bg-ink-900 px-2.5 py-2 text-[11px] text-paper shadow-lift" style={{ left: `clamp(0px, calc(${(hover / weeklyMatches.length) * 100}% - 20px), calc(100% - 130px))` }}>
            <p className="font-medium">Week of {weeklyMatches[hover].week}</p>
            {OPP_TYPES.filter((t) => active.has(t)).map((t) => (
              <p key={t} className="flex justify-between gap-4 text-ink-300"><span>{t}</span><span className="text-paper">{weeklyMatches[hover][t]}</span></p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

const ACT_ICONS = { match: Sparkles, swap: ArrowLeftRight, apply: Send, insight: Lightbulb, interview: BriefcaseBusiness, profile: FileText, save: Bookmark, decline: XCircle, review: Inbox }

function ActivityFeed({ items }) {
  return (
    <div className="rounded-xl border border-ink-900/10 bg-white p-4">
      <p className="text-[13px] font-medium text-ink-800">Activity</p>
      <ul className="mt-3 space-y-3" aria-live="polite">
        {items.slice(0, 6).map((a) => {
          const Icon = ACT_ICONS[a.kind] || Bell
          return (
            <li key={a.id} className="flex gap-2.5 text-[12.5px]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-paper-100 text-ink-500"><Icon className="h-3.5 w-3.5" aria-hidden="true" /></span>
              <span className="min-w-0"><span className="block text-ink-700">{a.text}</span><span className="text-[11px] text-ink-400">{a.time}</span></span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Overview({ opps, activity, go, openOpp }) {
  const stats = [
    { label: 'Open matches', value: opps.filter((o) => o.status === 'New' || o.status === 'Saved').length, sub: 'New or saved' },
    { label: 'Applications', value: opps.filter((o) => o.status === 'Applied' || o.status === 'Interviewing').length, sub: 'Applied or interviewing' },
    { label: 'Avg. fit of top 5', value: `${Math.round([...opps].sort((a, b) => b.match - a.match).slice(0, 5).reduce((s, o) => s + o.match, 0) / 5)}%`, sub: 'Across all types' },
    { label: 'Skill gaps flagged', value: new Set(opps.flatMap((o) => o.gaps)).size, sub: 'Across saved roles' },
  ]
  const top = [...opps].filter((o) => o.status !== 'Declined').sort((a, b) => b.match - a.match)[0]
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-ink-900/10 bg-white p-3.5">
            <p className="text-[11.5px] text-ink-500">{s.label}</p>
            <p className="mt-1 font-display text-[26px] font-semibold leading-none text-ink-950">{s.value}</p>
            <p className="mt-1.5 text-[11px] text-ink-400">{s.sub}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <MatchChart />
          <div className="rounded-xl border border-siren-200 bg-gradient-to-br from-siren-50 to-white p-4">
            <p className="flex items-center gap-1.5 text-[12px] font-medium text-siren-700"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> AI insight</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-800">
              AWS is requested by 3 of your saved or active roles and is on your learning list. Adding one deployed project would lift your Northwind Health fit from 82% to an estimated 90%.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" onClick={() => go('profile')} className="btn-dark px-3 py-1.5 text-[13px]">Review profile evidence</button>
              {top ? <button type="button" onClick={() => openOpp(top.id)} className="btn-ghost px-3 py-1.5 text-[13px]">Open top match ({top.match}%)</button> : null}
            </div>
          </div>
        </div>
        <ActivityFeed items={activity} />
      </div>
    </div>
  )
}

/* ---------- Opportunities ---------- */
function Opportunities({ opps, openOpp }) {
  const [q, setQ] = useState('')
  const [type, setType] = useState('All')
  const [status, setStatus] = useState('All')
  const [sort, setSort] = useState('match')
  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return opps
      .filter((o) => type === 'All' || o.type === type)
      .filter((o) => status === 'All' || o.status === status)
      .filter((o) => !needle || [o.title, o.org, ...o.skills].join(' ').toLowerCase().includes(needle))
      .sort((a, b) => (sort === 'match' ? b.match - a.match : b.posted.localeCompare(a.posted)))
  }, [opps, q, type, status, sort])
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search opportunities</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" aria-hidden="true" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title, organisation or skill" className="field py-2 pl-9 text-[14px]" />
        </label>
        <div className="flex gap-2">
          <label className="flex-1"><span className="sr-only">Filter by status</span>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="field py-2 text-[13.5px]">
              <option value="All">All statuses</option>
              {OPP_STATUSES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label className="flex-1"><span className="sr-only">Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="field py-2 text-[13.5px]">
              <option value="match">Best fit</option>
              <option value="date">Newest</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by type">
        {['All', ...OPP_TYPES].map((t) => (
          <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)}
            className={cn('rounded-full border px-3 py-1 text-[12.5px] transition', type === t ? 'border-ink-900 bg-ink-900 text-paper' : 'border-ink-900/10 bg-white text-ink-600 hover:border-ink-900/25')}>
            {t}{t !== 'All' ? <span className="ml-1 opacity-60">{opps.filter((o) => o.type === t).length}</span> : null}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-ink-900/10 bg-white">
        <table className="w-full text-left text-[13px]">
          <thead className="bg-paper-100/70 text-[11.5px] text-ink-500">
            <tr>
              <th scope="col" className="px-3 py-2.5 font-medium">Opportunity</th>
              <th scope="col" className="hidden px-3 py-2.5 font-medium md:table-cell">Type</th>
              <th scope="col" className="hidden px-3 py-2.5 font-medium lg:table-cell">Posted</th>
              <th scope="col" className="px-3 py-2.5 font-medium">Status</th>
              <th scope="col" className="px-3 py-2.5 text-right font-medium">Fit</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id} className="cursor-pointer border-t border-ink-900/5 transition hover:bg-paper/70" onClick={() => openOpp(o.id)}>
                <td className="px-3 py-2.5">
                  <button type="button" className="text-left" onClick={(e) => { e.stopPropagation(); openOpp(o.id) }}>
                    <span className="block font-medium text-ink-900">{o.title}</span>
                    <span className="block text-[11.5px] text-ink-500">{o.org} · {o.terms}</span>
                  </button>
                </td>
                <td className="hidden px-3 py-2.5 md:table-cell"><span className="inline-flex items-center gap-1.5 text-ink-600"><span className="h-2 w-2 rounded-full" style={{ background: TYPE_COLORS[o.type] }} />{o.type}</span></td>
                <td className="hidden px-3 py-2.5 text-ink-500 lg:table-cell">{fmtDate(o.posted)}</td>
                <td className="px-3 py-2.5"><StatusPill status={o.status} /></td>
                <td className="px-3 py-2.5 text-right font-display text-[15px] font-semibold text-ink-900">{o.match}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 ? (
          <div className="px-4 py-10 text-center text-[13px] text-ink-500">
            No opportunities match these filters.{' '}
            <button type="button" className="font-medium text-siren-600 underline" onClick={() => { setQ(''); setType('All'); setStatus('All') }}>Clear filters</button>
          </div>
        ) : null}
      </div>
      <p className="text-[11.5px] text-ink-400">{rows.length} of {opps.length} shown · select a row for the match explanation</p>
    </div>
  )
}

function OppModal({ opp, onClose, setStatus }) {
  return (
    <Modal title={opp.title} onClose={onClose} footer={
      <>
        {opp.status !== 'Declined' ? <button type="button" className="btn-ghost px-3 py-2 text-[13px]" onClick={() => setStatus(opp.id, 'Declined')}>Not for me</button>
          : <button type="button" className="btn-ghost px-3 py-2 text-[13px]" onClick={() => setStatus(opp.id, 'New')}><RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />Restore</button>}
        {opp.status === 'New' ? <button type="button" className="btn-ghost px-3 py-2 text-[13px]" onClick={() => setStatus(opp.id, 'Saved')}><Bookmark className="h-3.5 w-3.5" aria-hidden="true" />Save</button> : null}
        {opp.status === 'New' || opp.status === 'Saved' ? (
          <button type="button" className="btn-primary px-3 py-2 text-[13px]" onClick={() => setStatus(opp.id, 'Applied')}>
            {opp.type === 'Skill Swap' ? <><ArrowLeftRight className="h-3.5 w-3.5" aria-hidden="true" />Propose swap</> : <><Send className="h-3.5 w-3.5" aria-hidden="true" />Apply</>}
          </button>
        ) : null}
      </>
    }>
      <div className="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-500">
        <span className="font-medium text-ink-700">{opp.org}</span>·<span>{opp.terms}</span>·<span>{opp.location}</span>·<StatusPill status={opp.status} />
      </div>
      <div className="mt-4 flex items-center gap-4 rounded-xl bg-paper-100 p-3">
        <p className="font-display text-[34px] font-semibold leading-none text-ink-950">{opp.match}%</p>
        <p className="text-[13.5px] leading-relaxed text-ink-700">{opp.fit}</p>
      </div>
      <p className="mt-4 text-[12px] font-medium text-ink-500">Requirements</p>
      <ul className="mt-2 divide-y divide-ink-900/5 rounded-xl border border-ink-900/10 text-[13px]">
        {opp.skills.map((s) => {
          const gap = opp.gaps.some((g) => g.startsWith(s))
          const ev = profileSkills.find((p) => p.skill === s)
          return (
            <li key={s} className="flex items-center justify-between gap-3 px-3 py-2">
              <span className="text-ink-800">{s}</span>
              {gap ? <span className="flex items-center gap-1 text-siren-600"><X className="h-3.5 w-3.5" aria-hidden="true" />{ev ? 'Limited evidence' : 'Not on profile'}</span>
                : <span className="flex items-center gap-1 text-signal-700"><Check className="h-3.5 w-3.5" aria-hidden="true" />{ev ? ev.source : 'Demonstrated'}</span>}
            </li>
          )
        })}
        {opp.gaps.filter((g) => !opp.skills.some((s) => g.startsWith(s))).map((g) => (
          <li key={g} className="flex items-center justify-between px-3 py-2"><span className="text-ink-800">{g}</span><span className="flex items-center gap-1 text-siren-600"><X className="h-3.5 w-3.5" aria-hidden="true" />Not on profile</span></li>
        ))}
      </ul>
      <p className="mt-3 text-[11.5px] text-ink-400">{opp.id} · posted {fmtDate(opp.posted)} · sample data</p>
    </Modal>
  )
}

/* ---------- Skill Swap ---------- */
function Picker({ legend, value, onChange, disabled }) {
  return (
    <fieldset>
      <legend className="mb-2 text-[12px] font-medium text-ink-500">{legend}</legend>
      <div className="flex flex-wrap gap-1.5">
        {SWAP_SKILLS.map((s) => (
          <button key={s} type="button" aria-pressed={s === value} disabled={s === disabled} onClick={() => onChange(s)}
            className={cn('rounded-full border px-2.5 py-1 text-[12px] transition disabled:cursor-not-allowed disabled:opacity-30', s === value ? 'border-siren-500 bg-siren-500 text-white' : 'border-ink-900/10 bg-white text-ink-600 hover:border-ink-900/25')}>
            {s}
          </button>
        ))}
      </div>
    </fieldset>
  )
}


function Swaps({ log, toast }) {
  const [offer, setOffer] = useState('Web development')
  const [want, setWant] = useState('Branding')
  const [proposed, setProposed] = useState({})
  const [draft, setDraft] = useState(null)
  const [scope, setScope] = useState('')
  const matches = swapProfiles
    .filter((p) => p.offers.includes(want))
    .map((p) => ({ ...p, complementary: p.wants.includes(offer), fit: p.wants.includes(offer) ? p.score : p.score - 24 }))
    .sort((a, b) => b.fit - a.fit)

  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-4 rounded-xl border border-ink-900/10 bg-white p-4">
        <Picker legend="I can offer" value={offer} onChange={(s) => { setOffer(s); if (s === want) setWant(SWAP_SKILLS.find((x) => x !== s)) }} />
        <div className="h-px bg-ink-900/10" />
        <Picker legend="I’m looking for" value={want} onChange={setWant} disabled={offer} />
      </div>
      <div>
        <p className="mb-2 text-[12.5px] text-ink-500" aria-live="polite">
          {matches.length ? `${matches.length} ${matches.length === 1 ? 'person offers' : 'people offer'} ${want.toLowerCase()}` : `No one offers ${want.toLowerCase()} in this sample yet`}
        </p>
        <ul className="space-y-2">
          {matches.map((m) => {
            const key = `${m.name}-${offer}-${want}`
            const done = proposed[key]
            return (
              <li key={m.name} className={cn('flex flex-col gap-3 rounded-xl border bg-white p-3.5 sm:flex-row sm:items-center', m.complementary ? 'border-signal-300' : 'border-ink-900/10')}>
                <div className="flex flex-1 items-start gap-3">
                  <Avatar initials={m.initials} tone={m.complementary ? 'signal' : 'ink'} />
                  <div className="min-w-0 text-[13px]">
                    <p className="font-medium text-ink-900">{m.name} <span className="font-normal text-ink-500">· {m.role}</span></p>
                    <p className="text-[12px] text-ink-500">Offers {m.offers.join(', ')} · Wants {m.wants.join(', ')}</p>
                    <p className={cn('mt-0.5 text-[12px]', m.complementary ? 'text-signal-700' : 'text-ink-400')}>
                      {m.complementary ? `Complementary: they’re looking for ${offer.toLowerCase()}.` : 'One-way fit: better as a paid project.'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1.5">
                  <span className="font-display text-xl font-semibold text-ink-900">{m.fit}%</span>
                  {done ? <StatusPill status="Proposed" /> : m.complementary ? (
                    <button type="button" className="btn-primary px-2.5 py-1.5 text-[12px]" onClick={() => { setDraft(m); setScope(`${offer} in exchange for ${want.toLowerCase()}, over 3 weeks.`) }}>
                      <ArrowLeftRight className="h-3.5 w-3.5" aria-hidden="true" /> Propose swap
                    </button>
                  ) : (
                    <button type="button" className="btn-ghost px-2.5 py-1.5 text-[12px]" onClick={() => toast(`Message drafts aren’t part of this demo. ${m.name} is shown as a paid-project fit.`)}>Message</button>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      {draft ? (
        <Modal title={`Propose a swap with ${draft.name}`} onClose={() => setDraft(null)} footer={
          <>
            <button type="button" className="btn-ghost px-3 py-2 text-[13px]" onClick={() => setDraft(null)}>Cancel</button>
            <button type="button" className="btn-primary px-3 py-2 text-[13px]" disabled={scope.trim().length < 10} onClick={() => {
              setProposed((p) => ({ ...p, [`${draft.name}-${offer}-${want}`]: true }))
              log('swap', `Swap proposed to ${draft.name}: ${offer} ↔ ${want}`)
              toast(`Proposal recorded in the demo for ${draft.name}.`)
              setDraft(null)
            }}>Send proposal</button>
          </>
        }>
          <div className="grid grid-cols-2 gap-2 text-[13px]">
            <div className="rounded-lg bg-paper-100 p-3"><p className="text-[11px] text-ink-500">You give</p><p className="font-medium text-ink-900">{offer}</p></div>
            <div className="rounded-lg bg-signal-50 p-3"><p className="text-[11px] text-ink-500">You receive</p><p className="font-medium text-ink-900">{want}</p></div>
          </div>
          <label htmlFor="swap-scope" className="field-label mt-4">Scope and timing</label>
          <textarea id="swap-scope" rows={3} value={scope} onChange={(e) => setScope(e.target.value)} className="field text-[14px]" />
          <p className="mt-2 text-[11.5px] text-ink-400">Demo only: nothing is sent to anyone.</p>
        </Modal>
      ) : null}
    </div>
  )
}

/* ---------- Review queue ---------- */
function Review({ log }) {
  const [apps, setApps] = useState(seedApplicants)
  const [tab, setTab] = useState('Pending')
  const [sel, setSel] = useState(seedApplicants[0].id)
  const counts = { Pending: 0, Shortlisted: 0, Declined: 0 }
  apps.forEach((a) => { counts[a.status] += 1 })
  const list = apps.filter((a) => a.status === tab).sort((a, b) => b.match - a.match)
  const current = apps.find((a) => a.id === sel) || list[0]
  function decide(id, status) {
    const a = apps.find((x) => x.id === id)
    setApps((s) => s.map((x) => (x.id === id ? { ...x, status } : x)))
    log('review', `${a.name} ${status === 'Pending' ? 'moved back to pending' : status.toLowerCase()} for Tidewater Labs`)
  }
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-ink-900/10 bg-white p-4">
        <p className="text-[11.5px] text-ink-500">Hiring view · {reviewBrief.org}</p>
        <p className="mt-1 font-medium text-ink-900">{reviewBrief.title}</p>
        <p className="mt-1 text-[13px] italic text-ink-600">{reviewBrief.brief}</p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[12px]">
          <Sparkles className="h-3.5 w-3.5 text-siren-500" aria-hidden="true" />
          {reviewBrief.interpreted.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="mb-2 flex gap-1" role="tablist" aria-label="Applicant status">
            {Object.keys(counts).map((t) => (
              <button key={t} type="button" role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
                className={cn('rounded-lg px-3 py-1.5 text-[12.5px] transition', tab === t ? 'bg-ink-900 text-paper' : 'text-ink-600 hover:bg-ink-900/5')}>
                {t} <span className="opacity-60">{counts[t]}</span>
              </button>
            ))}
          </div>
          <ul className="space-y-1.5" role="tabpanel">
            {list.map((a) => (
              <li key={a.id}>
                <button type="button" onClick={() => setSel(a.id)} aria-current={current?.id === a.id}
                  className={cn('flex w-full items-center gap-3 rounded-xl border bg-white px-3 py-2.5 text-left text-[13px] transition', current?.id === a.id ? 'border-siren-400 ring-2 ring-siren-500/10' : 'border-ink-900/10 hover:border-ink-900/25')}>
                  <Avatar initials={a.initials} size="sm" />
                  <span className="min-w-0 flex-1"><span className="block font-medium text-ink-900">{a.name}</span><span className="block truncate text-[11.5px] text-ink-500">{a.role} · {a.rate}</span></span>
                  <span className="font-display text-[15px] font-semibold">{a.match}%</span>
                  <ChevronRight className="h-4 w-4 text-ink-300" aria-hidden="true" />
                </button>
              </li>
            ))}
            {list.length === 0 ? <li className="rounded-xl border border-dashed border-ink-900/15 px-3 py-6 text-center text-[13px] text-ink-500">No applicants here.</li> : null}
          </ul>
        </div>
        {current ? (
          <div className="rounded-xl border border-ink-900/10 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3"><Avatar initials={current.initials} /><div><p className="font-medium text-ink-900">{current.name}</p><p className="text-[12px] text-ink-500">{current.role} · {current.rate}</p></div></div>
              <StatusPill status={current.status} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-[12.5px]">
              <div><p className="mb-1.5 font-medium text-ink-500">Strengths</p><ul className="space-y-1">{current.strengths.map((s) => <li key={s} className="flex items-center gap-1.5 text-ink-800"><Check className="h-3.5 w-3.5 text-signal-600" aria-hidden="true" />{s}</li>)}</ul></div>
              <div><p className="mb-1.5 font-medium text-ink-500">Gaps</p><ul className="space-y-1">{current.gaps.map((s) => <li key={s} className="flex items-center gap-1.5 text-ink-800"><X className="h-3.5 w-3.5 text-siren-500" aria-hidden="true" />{s}</li>)}</ul></div>
            </div>
            <p className="mt-4 rounded-lg bg-paper-100 p-3 text-[13px] leading-relaxed text-ink-700"><Sparkles className="mr-1 inline h-3.5 w-3.5 text-siren-500" aria-hidden="true" />{current.note}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {current.status !== 'Shortlisted' ? <button type="button" className="btn-primary px-3 py-1.5 text-[13px]" onClick={() => decide(current.id, 'Shortlisted')}><Check className="h-3.5 w-3.5" aria-hidden="true" />Shortlist</button> : null}
              {current.status !== 'Declined' ? <button type="button" className="btn-ghost px-3 py-1.5 text-[13px]" onClick={() => decide(current.id, 'Declined')}>Decline</button> : null}
              {current.status !== 'Pending' ? <button type="button" className="btn-ghost px-3 py-1.5 text-[13px]" onClick={() => decide(current.id, 'Pending')}><RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />Move to pending</button> : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

/* ---------- Profile ---------- */
function Profile() {
  const [focus, setFocus] = useState(null)
  return (
    <div className="grid gap-4 xl:grid-cols-[1.1fr_1fr]">
      <div className="rounded-xl border border-ink-900/10 bg-white">
        <div className="flex items-center justify-between border-b border-ink-900/10 px-4 py-2.5 text-[12px]">
          <span className="flex items-center gap-1.5 font-medium text-ink-700"><FileText className="h-3.5 w-3.5" aria-hidden="true" />{cvDocument.file}</span>
          <span className="text-ink-400">{cvDocument.pages} pages · parsed {cvDocument.parsed}</span>
        </div>
        <div className="space-y-4 p-4 sm:p-5">
          <div><p className="font-display text-lg font-semibold text-ink-950">{demoUser.name}</p><p className="text-[12.5px] text-ink-500">{demoUser.role}</p></div>
          {cvDocument.sections.map((sec) => (
            <div key={sec.heading}>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">{sec.heading}</p>
              <div className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-ink-600">
                {sec.lines.map((l, i) => (
                  <p key={i}>
                    {l.parts ? l.parts.map(([t, skill], j) => skill ? (
                      <mark key={j} className={cn('rounded px-0.5 transition', focus === skill ? 'bg-siren-500 text-white' : 'bg-siren-100 text-siren-700')}>{t}</mark>
                    ) : <span key={j}>{t}</span>) : l.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-ink-900/10 bg-white p-4">
        <p className="text-[13px] font-medium text-ink-800">Extracted skills</p>
        <p className="text-[11.5px] text-ink-500">Select a skill to highlight its source in the document.</p>
        <ul className="mt-3 space-y-1.5">
          {profileSkills.map((s) => (
            <li key={s.skill}>
              <button type="button" aria-pressed={focus === s.skill} onClick={() => setFocus(focus === s.skill ? null : s.skill)}
                className={cn('flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left text-[12.5px] transition', focus === s.skill ? 'border-siren-400 bg-siren-50' : 'border-ink-900/10 hover:border-ink-900/25')}>
                <span className="flex-1"><span className="block font-medium text-ink-900">{s.skill}</span><span className="text-[11px] text-ink-500">{s.source}</span></span>
                <span className="flex gap-0.5" aria-label={`${s.evidence} pieces of evidence`}>
                  {Array.from({ length: 7 }).map((_, i) => <span key={i} className={cn('h-3 w-1.5 rounded-sm', i < s.evidence ? 'bg-signal-400' : 'bg-ink-100')} />)}
                </span>
                <span className={cn('w-[68px] text-right text-[11px] font-medium', s.evidence <= 1 ? 'text-siren-600' : 'text-ink-600')}>{s.evidence <= 1 ? 'Needs proof' : s.level}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg bg-paper-100 p-3 text-[12.5px] text-ink-700">
          <p className="font-medium">Learning goals</p>
          <p className="mt-0.5 text-ink-500">{demoUser.learning.join(' · ')}: used to rank skill swaps and suggest projects that build evidence.</p>
        </div>
      </div>
    </div>
  )
}

/* ---------- Shell ---------- */
export function Workspace() {
  const [view, setView] = useState('overview')
  const [opps, setOpps] = useState(seedOpps)
  const [activity, setActivity] = useState(seedActivity)
  const [openId, setOpenId] = useState(null)
  const [toastMsg, setToastMsg] = useState('')
  const idRef = useRef(100)

  useEffect(() => {
    if (!toastMsg) return
    const t = setTimeout(() => setToastMsg(''), 3200)
    return () => clearTimeout(t)
  }, [toastMsg])

  function log(kind, text) {
    idRef.current += 1
    setActivity((a) => [{ id: idRef.current, kind, text, time: 'Just now' }, ...a])
  }
  function setStatus(id, status) {
    const o = opps.find((x) => x.id === id)
    setOpps((s) => s.map((x) => (x.id === id ? { ...x, status } : x)))
    const verbs = { Saved: ['save', 'Saved'], Applied: ['apply', o.type === 'Skill Swap' ? 'Swap proposed:' : 'Applied to'], Declined: ['decline', 'Dismissed'], New: ['match', 'Restored'] }
    const [kind, verb] = verbs[status] || ['match', status]
    log(kind, `${verb} ${o.title}`)
    setToastMsg(`${o.title}: ${status === 'New' ? 'restored' : status.toLowerCase()}.`)
    if (status === 'Applied' || status === 'Declined') setOpenId(null)
  }
  const openOpp = (id) => { setView('opportunities'); setOpenId(id) }
  const current = opps.find((o) => o.id === openId)
  const unread = activity.filter((a) => a.time === 'Just now').length

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-paper text-ink-900 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between gap-3 border-b border-ink-900/10 bg-white px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="hidden gap-1.5 sm:flex" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-ink-200" /><span className="h-2.5 w-2.5 rounded-full bg-ink-200" /><span className="h-2.5 w-2.5 rounded-full bg-ink-200" /></div>
          <span className="font-mono text-[11px] text-ink-400">app.skillsiren.site / workspace</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-amber-600">Sample data</span>
          <span className="relative" aria-label={`${unread} new activity items`}>
            <Bell className="h-4 w-4 text-ink-500" aria-hidden="true" />
            {unread ? <span className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-siren-500 px-1 text-[9px] font-semibold text-white">{unread}</span> : null}
          </span>
          <Avatar initials={demoUser.initials} size="sm" tone="signal" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <nav aria-label="Workspace" className="dash-scroll flex shrink-0 gap-1 overflow-x-auto border-b border-ink-900/10 bg-white/60 p-2 md:w-[188px] md:flex-col md:border-b-0 md:border-r md:p-3">
          {VIEWS.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" aria-current={view === id ? 'page' : undefined} onClick={() => setView(id)}
              className={cn('flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium transition', view === id ? 'bg-ink-900 text-paper' : 'text-ink-600 hover:bg-ink-900/5')}>
              <Icon className="h-4 w-4" aria-hidden="true" />{label}
            </button>
          ))}
          <div className="mt-auto hidden rounded-lg border border-ink-900/10 bg-white p-3 text-[11.5px] md:block">
            <p className="font-medium text-ink-800">{demoUser.name}</p>
            <p className="text-ink-500">{demoUser.availability}</p>
          </div>
        </nav>
        <div className="dash-scroll min-h-[560px] flex-1 overflow-y-auto p-3 sm:p-5 md:h-[620px]">
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <h3 className="text-[20px] font-semibold text-ink-950">{VIEWS.find((v) => v.id === view).label}</h3>
            <p className="hidden text-[12px] text-ink-400 sm:block">Week of Oct 12, 2026</p>
          </div>
          {view === 'overview' ? <Overview opps={opps} activity={activity} go={setView} openOpp={openOpp} /> : null}
          {view === 'opportunities' ? <Opportunities opps={opps} openOpp={setOpenId} /> : null}
          {view === 'swaps' ? <Swaps log={log} toast={setToastMsg} /> : null}
          {view === 'review' ? <Review log={log} /> : null}
          {view === 'profile' ? <Profile /> : null}
        </div>
      </div>
      {current ? <OppModal opp={current} onClose={() => setOpenId(null)} setStatus={setStatus} /> : null}
      <div aria-live="polite" className="pointer-events-none absolute bottom-4 left-1/2 z-40 -translate-x-1/2">
        {toastMsg ? <p className="animate-fadeUp rounded-xl bg-ink-900 px-4 py-2.5 text-[13px] text-paper shadow-lift">{toastMsg}</p> : null}
      </div>
    </div>
  )
}
