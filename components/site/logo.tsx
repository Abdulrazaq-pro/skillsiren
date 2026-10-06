import { AudioWaveform } from 'lucide-react'

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <AudioWaveform className="size-4.5" aria-hidden="true" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        SkillSiren
      </span>
    </span>
  )
}
