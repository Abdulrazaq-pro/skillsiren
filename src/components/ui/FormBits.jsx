import { AlertCircle, CheckCircle2, Loader2, Mail } from 'lucide-react'
import { cn } from '../../lib/cn.js'
import { mailtoFor } from '../../lib/submitForm.js'
import { company } from '../../data/company.js'

export function Field({ label, error, id, children, optional, className }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {optional ? <span className="ml-1 font-normal text-ink-400">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1 text-[13px] text-siren-700">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function inputClass(error) {
  return cn('field', error && 'field-error')
}

export function Honeypot({ bind }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input tabIndex={-1} autoComplete="off" {...bind('website')} />
      </label>
    </div>
  )
}

export function SubmitButton({ status, children, className }) {
  const sending = status === 'sending'
  return (
    <button type="submit" disabled={sending} className={cn('btn-primary', className)}>
      {sending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
      {sending ? 'Sending…' : children}
    </button>
  )
}

export function FormStatus({ status, subject, values, onReset }) {
  if (status === 'sent') {
    return (
      <div role="status" className="flex items-start gap-3 rounded-xl border border-signal-300 bg-signal-50 p-4 text-sm text-signal-700">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="font-medium">Thanks, your message has been received.</p>
          <p className="mt-1 text-signal-700/80">The SkillSiren team will reply to {values.email}.</p>
          <button type="button" onClick={onReset} className="mt-2 font-medium underline">Send another</button>
        </div>
      </div>
    )
  }
  if (status === 'unconfigured' || status === 'error') {
    return (
      <div role="alert" className="flex items-start gap-3 rounded-xl border border-amber-400/50 bg-amber-100/60 p-4 text-sm text-ink-800">
        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
        <div>
          <p className="font-medium">
            {status === 'error' ? 'Your message could not be sent.' : 'Online submission is not available yet.'}
          </p>
          <p className="mt-1 text-ink-600">
            Nothing has been sent. Your details are still in the form; you can email them to {company.email} instead.
          </p>
          <a href={mailtoFor(subject, values)} className="btn-dark mt-3 px-3 py-2 text-sm">
            <Mail className="h-4 w-4" aria-hidden="true" /> Email this request
          </a>
        </div>
      </div>
    )
  }
  return null
}
