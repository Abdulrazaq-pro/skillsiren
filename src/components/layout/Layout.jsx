import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { applyMeta } from '../../lib/meta.js'

function useScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    applyMeta(pathname)
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

export function Layout({ children, bare = false }) {
  useScrollManager()
  return (
    <>
      {bare ? null : <Header />}
      <main id="main">{children}</main>
      {bare ? null : <Footer />}
    </>
  )
}
