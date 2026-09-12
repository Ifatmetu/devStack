import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Components/Nav.tsx'
import Hero from './Components/hero.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Hero />
  </StrictMode>,
)
