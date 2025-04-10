import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header.jsx'
import SecSatu from './Components/SecSatu.jsx'
import SecDua from './Components/SecDua.jsx'
import SecTiga from './Components/SecTiga.jsx'
import SecEmpat from './Components/SecEmpat.jsx'
import SecLima from './Components/SecLima.jsx'
import SecEnam from './Components/SecEnam.jsx'
import Footer from './Components/zFooter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <SecSatu />
    <SecDua />
    <SecTiga />
    <SecEmpat />
    <SecLima />
    <SecEnam />
    <Footer />
  </StrictMode>,
)
