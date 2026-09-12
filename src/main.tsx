import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Components/Nav.tsx'
import Hero from './Components/hero.tsx'
import Techonologies from './Components/Techonologies.tsx'
import Footer from './Components/Footer.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Hero />
    <Techonologies />
    <Footer />
  </StrictMode>,
)
