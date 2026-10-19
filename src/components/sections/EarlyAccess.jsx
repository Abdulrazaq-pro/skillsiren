import { CheckCircle2, CircleDashed, Loader } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { Reveal } from '../ui/Reveal.jsx'
import { Field, FormStatus, Honeypot, inputClass, SubmitButton } from '../ui/FormBits.jsx'
import { useForm } from '../../hooks/useForm.js'

const PROGRESS = [
  { state: 'done', title: 'Company founded', body: 'SkillSiren founded in 2026 by Ayokanmi Adesina Aina.' },
  { state: 'done', title: 'Product definition & public site', body: 'Matching model, workflows and this interactive preview published at skillsiren.site.' },
  { state: 'active', title: 'Initial web product', body: 'Profiles, opportunity matching, skill swaps and review queues in development.' },
  { state: 'next', title: 'Early-access onboarding', body: 'First members and hiring teams invited from the early-access list.' },
]
const ICON = { done: CheckCircle2, active: Loader, next: CircleDashed }

const INITIAL = { name: '', email: '', company: '', size: '', useCase: '', message: '', website: '' }
const RULES = {
  name: { required: true, message: 'Enter your full name.' },
  email: { required: true, email: true, message: 'Enter your business email.' },
  company: { required: true, message: 'Enter your company or “Independent”.' },
  size: { required: true, message: 'Select a company size.' },
  useCase: { required: true, message: 'Select a primary use case.' },
}

export function EarlyAccess() {
  const f = useForm('early-access', INITIAL, RULES)
  const showForm = f.status !== 'sent'
  return (
    <section id="early-access" aria-labelledby="ea-title" className="py-24 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            id="ea-title"
            eyebrow="Progress & early access"
            title="Where SkillSiren is today."
            description="SkillSiren is building its initial product. Early-access members help shape matching quality and are the first to be onboarded."
          />
          <Reveal as="ol" className="mt-10 space-y-5">
            {PROGRESS.map((p) => {
              const Icon = ICON[p.state]
              return (
                <li key={p.title} className="flex gap-4">
                  <Icon className={p.state === 'done' ? 'h-5 w-5 shrink-0 text-signal-500' : p.state === 'active' ? 'h-5 w-5 shrink-0 text-siren-500' : 'h-5 w-5 shrink-0 text-ink-300'} aria-hidden="true" />
                  <div>
                    <p className="font-medium text-ink-900">{p.title} <span className="ml-1 text-[12px] font-normal text-ink-400">{p.state === 'done' ? 'Complete' : p.state === 'active' ? 'In progress' : 'Next'}</span></p>
                    <p className="mt-0.5 text-[14.5px] text-ink-600">{p.body}</p>
                  </div>
                </li>
              )
            })}
          </Reveal>
        </div>

        <Reveal className="card relative p-6 sm:p-8">
          <h3 className="text-[22px] font-semibold text-ink-950">Request early access</h3>
          <p className="mt-1.5 text-[14.5px] text-ink-500">Tell us how you’d use SkillSiren. Fields marked optional can be left blank.</p>
          {showForm ? (
            <form noValidate onSubmit={f.onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <Honeypot bind={f.bind} />
              <Field label="Full name" id="early-access-name" error={f.errors.name}>
                <input autoComplete="name" className={inputClass(f.errors.name)} {...f.bind('name')} />
              </Field>
              <Field label="Business email" id="early-access-email" error={f.errors.email}>
                <input type="email" autoComplete="email" className={inputClass(f.errors.email)} {...f.bind('email')} />
              </Field>
              <Field label="Company" id="early-access-company" error={f.errors.company}>
                <input autoComplete="organization" className={inputClass(f.errors.company)} {...f.bind('company')} />
              </Field>
              <Field label="Company size" id="early-access-size" error={f.errors.size}>
                <select className={inputClass(f.errors.size)} {...f.bind('size')}>
                  <option value="">Select…</option>
                  <option>Just me (independent)</option>
                  <option>2–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>201+</option>
                </select>
              </Field>
              <Field label="Primary use case" id="early-access-useCase" error={f.errors.useCase} className="sm:col-span-2">
                <select className={inputClass(f.errors.useCase)} {...f.bind('useCase')}>
                  <option value="">Select…</option>
                  <option>Find freelance or contract work</option>
                  <option>Find a full-time role</option>
                  <option>Exchange skills (Skill Swap)</option>
                  <option>Hire project talent for my team</option>
                  <option>Find subcontractors for an agency</option>
                </select>
              </Field>
              <Field label="Message" id="early-access-message" optional className="sm:col-span-2">
                <textarea rows={4} className="field" {...f.bind('message')} />
              </Field>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[12.5px] text-ink-500">By submitting you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.</p>
                <SubmitButton status={f.status}>Request access</SubmitButton>
              </div>
              <div className="sm:col-span-2" aria-live="polite">
                <FormStatus status={f.status} subject="SkillSiren early access request" values={f.values} onReset={f.reset} />
              </div>
            </form>
          ) : (
            <div className="mt-6" aria-live="polite"><FormStatus status={f.status} values={f.values} onReset={f.reset} /></div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
