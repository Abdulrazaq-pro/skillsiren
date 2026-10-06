import { ArrowLeftRight, BadgeCheck, Wallet } from 'lucide-react'
import { SectionHeading } from './section-heading'

const PATHS = [
  {
    icon: Wallet,
    label: '01',
    title: 'Get paid',
    body: 'Freelance projects and contract work ranked by how well your proven skills fit the brief — not by keyword luck.',
  },
  {
    icon: BadgeCheck,
    label: '02',
    title: 'Get hired',
    body: 'Full-time roles that understand what you can actually do, with clear notes on where you fit and where the gaps are.',
  },
  {
    icon: ArrowLeftRight,
    label: '03',
    title: 'Exchange skills',
    body: 'Trade what you know for what you need. A developer builds a site; a designer delivers the brand. No invoices required.',
  },
]

export function ThreePaths() {
  return (
    <section aria-labelledby="paths-title" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          id="paths-title"
          eyebrow="Not another job board"
          title="Three ways to turn skills into opportunities."
          description="SkillSiren profiles describe what you can do, what you want to learn or receive, and how you want to work. Then every route forward opens from the same place."
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {PATHS.map(({ icon: Icon, label, title, body }) => (
            <li key={title} className="flex flex-col gap-5 bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-sm text-muted-foreground">
                  {label}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
