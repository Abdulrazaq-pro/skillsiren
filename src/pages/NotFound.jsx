import { Link } from 'react-router-dom'
import { LogoMark } from '../components/ui/Logo.jsx'

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <LogoMark className="h-14 w-14" />
      <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-siren-600">404</p>
      <h1 className="mt-3 text-[40px] font-semibold text-ink-950">No signal on this page.</h1>
      <p className="mt-3 max-w-md text-ink-600">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex gap-3"><Link to="/" className="btn-primary">Back to home</Link><Link to="/#contact" className="btn-ghost">Contact us</Link></div>
    </section>
  )
}
