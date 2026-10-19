import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from '../ui/Logo.jsx'
import { NAV } from '../../data/company.js'
import { cn } from '../../lib/cn.js'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={cn('sticky top-0 z-40 transition-colors duration-300', scrolled || open ? 'border-b border-ink-900/10 bg-paper/90 backdrop-blur-md' : 'border-b border-transparent bg-paper/0')}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-ink-900 focus:px-3 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <div className="container-x flex h-[68px] items-center justify-between gap-6">
        <Link to="/" aria-label="SkillSiren home" className="rounded-lg">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[14px] font-medium text-ink-700 transition hover:bg-ink-900/5 hover:text-ink-950">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/#demo" className="btn-ghost hidden whitespace-nowrap px-3.5 py-2 text-sm xl:inline-flex">Explore the Demo</Link>
          <Link to="/#early-access" className="btn-primary hidden whitespace-nowrap px-3.5 py-2 text-sm sm:inline-flex">Request Early Access</Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-900/10 bg-white text-ink-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div id="mobile-nav" hidden={!open} className="h-[calc(100dvh-68px)] overflow-y-auto border-t border-ink-900/10 bg-paper lg:hidden">
        <nav aria-label="Mobile" className="container-x py-4">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="flex items-center justify-between border-b border-ink-900/5 py-3.5 font-display text-xl font-medium text-ink-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <Link to="/#early-access" className="btn-primary">Request Early Access</Link>
            <Link to="/#demo" className="btn-ghost">Explore the Demo</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
