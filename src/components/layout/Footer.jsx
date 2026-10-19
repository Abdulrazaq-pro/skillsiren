import { Link } from 'react-router-dom'
import { Linkedin, Mail } from 'lucide-react'
import { Logo } from '../ui/Logo.jsx'
import { company } from '../../data/company.js'

const COLS = [
  {
    title: 'Product',
    links: [
      ['Product', '/#product'],
      ['Features', '/#features'],
      ['Interactive demo', '/#demo'],
      ['Pricing', '/#pricing'],
    ],
  },
  {
    title: 'Solutions',
    links: [
      ['Who it’s for', '/#solutions'],
      ['How it works', '/#how-it-works'],
      ['Technology', '/#technology'],
      ['Early access', '/#early-access'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Team', '/#team'],
      ['Contact', '/#contact'],
      ['Privacy Policy', '/privacy'],
      ['Terms of Service', '/terms'],
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div className="max-w-sm">
          <Link to="/" aria-label="SkillSiren home"><Logo tone="light" /></Link>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-400">
            AI skills matching for freelancers, independent professionals and the small teams that hire them.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-ink-200 transition hover:border-white/25 hover:text-white">
              <Mail className="h-4 w-4" aria-hidden="true" /> {company.email}
            </a>
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-ink-200 transition hover:border-white/25 hover:text-white">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {COLS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="text-[15px] text-ink-300 transition hover:text-white">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x flex flex-col gap-2 py-6 text-[13px] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded} {company.name}. All rights reserved.</p>
          <p>{company.domain}</p>
        </div>
      </div>
    </footer>
  )
}
