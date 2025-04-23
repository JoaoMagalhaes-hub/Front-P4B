import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import Faculdade from './pages/Faculdade'
import  Navbar  from './Components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <h1> Titulo da pagina </h1>
      <Navbar></Navbar>

      <Routes>

      <Route path="/" element={<Inicial/>} />
      <Route path="/contato" element={<Contato/>} />
      <Route path="/dpo-lgpd" element={<DpoLgpd/>} />
      <Route path="/noticias" element={<Noticias/>} />
      <Route path="/a-faculdade" element={<Faculdade/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
