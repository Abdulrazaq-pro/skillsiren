import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
// Hydrate only when the prerendered HTML belongs to this route (hosts may fall
// back to another page's HTML); otherwise render fresh.
const path = location.pathname.replace(/\/$/, '') || '/'
if (root.hasChildNodes() && root.dataset.route === path) hydrateRoot(root, app)
else {
  root.innerHTML = ''
  createRoot(root).render(app)
}
