import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '../../lib/cn.js'

export function CopyButton({ text, label = 'Copy', className }) {
  const [state, setState] = useState('idle')
  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.setAttribute('readonly', '')
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        ta.remove()
      }
      setState('done')
    } catch {
      setState('error')
    }
    setTimeout(() => setState('idle'), 1600)
  }
  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-ink-900/10 bg-white px-2.5 py-1.5 text-xs font-medium text-ink-700 transition hover:border-ink-900/25 hover:text-ink-900',
        state === 'done' && 'border-signal-400 text-signal-700',
        className,
      )}
      aria-live="polite"
    >
      {state === 'done' ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
      {state === 'done' ? 'Copied' : state === 'error' ? 'Copy failed' : label}
    </button>
  )
}
