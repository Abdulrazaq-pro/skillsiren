import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'
import AppKit from './pages/AppKit.jsx'

export default function App() {
  const { pathname } = useLocation()
  return (
    <Layout bare={pathname.replace(/\/$/, '') === '/app'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/app" element={<AppKit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
