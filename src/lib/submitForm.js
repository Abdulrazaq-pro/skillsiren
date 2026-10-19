import { company } from '../data/company.js'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''

export const formConfigured = Boolean(ENDPOINT)

// Sends a form payload as JSON to VITE_FORM_ENDPOINT.
// Returns { status: 'sent' } | { status: 'unconfigured' } | throws on failure.
export async function submitForm(formName, data) {
  if (!ENDPOINT) return { status: 'unconfigured' }
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 15000)
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ form: formName, ...data, page: typeof location !== 'undefined' ? location.href : '' }),
      signal: controller.signal,
    })
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
    return { status: 'sent' }
  } finally {
    clearTimeout(timer)
  }
}

export function mailtoFor(subject, fields) {
  const body = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
