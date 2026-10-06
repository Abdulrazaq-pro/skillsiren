import { ArrowLeftRight, Briefcase, Sparkles } from 'lucide-react'
import { Avatar } from './avatar'

type PersonProps = {
  initials: string
  name: string
  role: string
  offers: string
  wants: string
  openTo: string
  tone: 'primary' | 'signal'
}

function Person({ initials, name, role, offers, wants, openTo, tone }: PersonProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-background/60 p-4">
      <div className="flex items-center gap-3">
        <Avatar initials={initials} tone={tone} />
        <div>
          <p className="font-medium leading-tight">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <dl className="grid gap-2 text-sm">
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-muted-foreground">Offers</dt>
          <dd>{offers}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-muted-foreground">Looking for</dt>
          <dd>{wants}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-muted-foreground">Open to</dt>
          <dd>{openTo}</dd>
        </div>
      </dl>
    </div>
  )
}

export function HeroMatchCard() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-black/40 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="size-4 text-signal" aria-hidden="true" />
            SkillSiren Match
          </p>
          <p className="font-display text-2xl font-semibold text-signal">
            94%
          </p>
        </div>

        <div className="relative flex flex-col gap-3">
          <Person
            initials="DM"
            name="Daniel"
            role="Frontend Developer"
            offers="React, TypeScript, Next.js"
            wants="Brand identity design"
            openTo="Freelance + Skill Swap"
            tone="primary"
          />
          <div className="flex justify-center" aria-hidden="true">
            <span className="-my-5 z-10 flex size-9 items-center justify-center rounded-full border border-border bg-card text-signal">
              <ArrowLeftRight className="size-4 rotate-90" />
            </span>
          </div>
          <Person
            initials="SO"
            name="Sarah"
            role="Brand Designer"
            offers="Branding, Figma, visual identity"
            wants="Portfolio website development"
            openTo="Skill Swap"
            tone="signal"
          />
        </div>

        <p className="mt-4 rounded-lg bg-muted px-3 py-2.5 text-sm leading-relaxed text-muted-foreground">
          Each of you offers exactly what the other is looking for.
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <span className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground">
            <ArrowLeftRight className="size-4" aria-hidden="true" />
            Propose Skill Swap
          </span>
          <span className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium">
            Message Sarah
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-3 rounded-xl border border-border bg-card/80 p-4 backdrop-blur lg:ml-auto lg:w-fit">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <Briefcase className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-medium">Also recommended for Daniel</p>
          <p className="text-sm text-muted-foreground">
            Paid React project at Ledgerline · 96% match
          </p>
        </div>
      </div>
    </div>
  )
}
