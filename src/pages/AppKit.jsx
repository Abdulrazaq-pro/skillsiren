import { AlertTriangle, Download } from 'lucide-react'
import { Logo, LogoMark } from '../components/ui/Logo.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'
import { company } from '../data/company.js'
import { linkedin } from '../data/linkedin.js'
import { activateAnswers, assumptions, businessDetails } from '../data/activate.js'
import { awsServices } from '../data/aws.js'

const ASSETS = [
  ['Logo (SVG)', '/brand/skillsiren-logo.svg'],
  ['Logo (PNG, 1200w)', '/brand/skillsiren-logo.png'],
  ['Logo mark (SVG)', '/brand/skillsiren-mark.svg'],
  ['LinkedIn logo 400×400 (PNG)', '/brand/skillsiren-logo-400.png'],
  ['Logo mark 512×512 (PNG)', '/brand/skillsiren-logo-512.png'],
  ['LinkedIn banner 1584×396 (PNG)', '/brand/linkedin-banner.png'],
  ['LinkedIn banner (SVG)', '/brand/linkedin-banner.svg'],
  ['Open Graph image 1200×630 (PNG)', '/brand/og-image.png'],
]

const CHECKLIST = [
  'Set VITE_FORM_ENDPOINT (Lambda Function URL or Formspree) and submit a test from both forms.',
  'Point www.skillsiren.site DNS to the host; redirect the apex domain to www.',
  'Confirm aina@skillsiren.site receives mail (MX records set).',
  'Upload the logo and banner to the LinkedIn page; paste tagline, overview and specialties.',
  'Fix the “assumed” items below, then rebuild and redeploy.',
  'Submit sitemap.xml in Google Search Console.',
  'Submit AWS Activate via HubSpot for Startups using the answers below.',
]

function Block({ id, title, children, copy }) {
  return (
    <section id={id} className="card p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[24px] font-semibold text-ink-950">{title}</h2>
        {copy ? <CopyButton text={copy} label="Copy all" /> : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Row({ label, value, flag, count }) {
  return (
    <div className="grid gap-2 border-t border-ink-900/10 py-3 sm:grid-cols-[200px_1fr_auto] sm:items-start">
      <p className="text-[13px] font-medium text-ink-500">{label}</p>
      <div>
        {value ? <p className="whitespace-pre-line text-[15px] text-ink-900">{value}</p> : null}
        {count ? <p className="mt-1 font-mono text-[11px] text-ink-400">{value.length} characters</p> : null}
        {flag ? <p className="mt-1 flex gap-1.5 text-[13px] text-amber-600"><AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />{flag}</p> : null}
      </div>
      {value ? <CopyButton text={value} /> : <span />}
    </div>
  )
}

export default function AppKit() {
  const activateText = activateAnswers.map((q) => `Q${q.n}. ${q.field}: ${q.answer.join(' | ')}`).join('\n')
  return (
    <div className="min-h-screen bg-paper-100/60">
      <div className="border-b border-ink-900/10 bg-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-5">
          <Logo />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">Application kit · not indexed</p>
        </div>
      </div>
      <div className="container-x max-w-5xl space-y-8 py-10">
        <div>
          <h1 className="text-[36px] font-semibold text-ink-950">SkillSiren application kit</h1>
          <p className="mt-2 max-w-2xl text-ink-600">Everything needed for the LinkedIn page and the AWS Activate application, generated from the same business record as the website. Every field has a copy button.</p>
          <nav className="mt-5 flex flex-wrap gap-2 text-[13px]">
            {[['#brand', 'Brand assets'], ['#linkedin', 'LinkedIn'], ['#activate', 'AWS Activate'], ['#record', 'Business record'], ['#assumed', 'To verify'], ['#checklist', 'Checklist']].map(([h, l]) => (
              <a key={h} href={h} className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-ink-700 hover:border-ink-900/30">{l}</a>
            ))}
          </nav>
        </div>

        <Block id="brand" title="Brand assets">
          <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
            <div className="flex items-center justify-center rounded-2xl border border-ink-900/10 bg-paper p-10"><Logo className="scale-150" /></div>
            <div className="flex items-center justify-center gap-6 rounded-2xl bg-ink-950 p-10"><LogoMark className="h-20 w-20" /><Logo tone="light" /></div>
          </div>
          <img src="/brand/linkedin-banner.png" alt="SkillSiren LinkedIn banner" width="1584" height="396" className="mt-4 w-full rounded-xl border border-ink-900/10" />
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {ASSETS.map(([l, href]) => (
              <li key={href}><a href={href} download className="flex items-center justify-between rounded-lg border border-ink-900/10 bg-white px-3 py-2 text-[14px] text-ink-800 hover:border-ink-900/30">{l}<Download className="h-4 w-4 text-ink-400" aria-hidden="true" /></a></li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] text-ink-500">Palette: {linkedin.banner.palette.join(' · ')}. Type: {linkedin.banner.type}. Banner safe zone: {linkedin.banner.safeZone}</p>
        </Block>

        <Block id="linkedin" title="LinkedIn company profile">
          {linkedin.info.map((r) => <Row key={r.label} {...r} />)}
          <Row label="Tagline (max 120)" value={linkedin.tagline} count />
          <Row label="Overview (max 2,000)" value={linkedin.overview} count />
          <Row label={`Specialties (${linkedin.specialties.length}/20)`} value={linkedin.specialties.join(', ')} />
        </Block>

        <Block id="activate" title="AWS Activate answers" copy={activateText}>
          <ol className="space-y-3">
            {activateAnswers.map((q) => {
              const text = q.answer.join(q.answer.length > 1 ? ', ' : '')
              return (
                <li key={q.n} className="rounded-xl border border-ink-900/10 bg-paper/60 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium text-ink-900">Q{q.n}. {q.field}</p>
                    <CopyButton text={text} />
                  </div>
                  {q.answer.length > 1 ? (
                    <ul className="mt-2 flex flex-wrap gap-1.5">{q.answer.map((a) => <li key={a} className="chip bg-white text-[13px]">{a}</li>)}</ul>
                  ) : (
                    <p className="mt-2 text-[15px] font-semibold text-siren-700">{text}</p>
                  )}
                  {q.countable ? <p className="mt-1 font-mono text-[11px] text-ink-400">{text.length} characters (limit 30–250)</p> : null}
                  <p className="mt-2 text-[13.5px] text-ink-600">{q.reason}</p>
                  {q.assumed ? <p className="mt-1.5 flex gap-1.5 text-[13px] text-amber-600"><AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />Assumed: {q.assumed}</p> : null}
                </li>
              )
            })}
          </ol>
        </Block>

        <Block id="record" title="Business record (for HubSpot for Startups)">
          <Row label="Business email" value={company.email} />
          <Row label="Website" value={company.url} />
          <Row label="Founded" value={String(company.founded)} />
          <Row label="Founder" value={`${company.founder.name}, ${company.founder.title}`} />
          <Row label="Short description" value={company.shortDescription} count />
          <Row label="Positioning" value={company.positioning} />
          {businessDetails.map((b) => <Row key={b.label} label={b.label} value={b.value} flag={b.assumed ? 'Assumed — verify before submitting.' : undefined} />)}
          <Row label="AWS services (proposed)" value={awsServices.map((s) => `${s.name}: ${s.purpose}`).join('\n')} />
        </Block>

        <Block id="assumed" title="Assumed — double-check before submitting">
          <ul className="space-y-2">{assumptions.map((a) => <li key={a} className="flex gap-2 text-[15px] text-ink-800"><AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />{a}</li>)}</ul>
        </Block>

        <Block id="checklist" title="Pre-deployment checklist">
          <ol className="list-decimal space-y-2 pl-5 text-[15px] text-ink-800">{CHECKLIST.map((c) => <li key={c}>{c}</li>)}</ol>
        </Block>
        <p className="pb-6 text-center text-[13px] text-ink-400">© {company.founded} {company.name}</p>
      </div>
    </div>
  )
}
