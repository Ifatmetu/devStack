import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Components/Nav.tsx'
import Hero from './Components/hero.tsx'
import Techonologies from './Components/Techonologies.tsx'
import Footer from './Components/Footer.tsx'
import type { ITechnology } from './types/techonology.ts'


const techsFetch=async ():Promise<ITechnology[]> => {
  const response = await fetch('techonology.json');
  const data = await response.json();
  return data;
}

const users= techsFetch();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Hero />
    <Techonologies users={users } />
    <Footer />
  </StrictMode>,
)
