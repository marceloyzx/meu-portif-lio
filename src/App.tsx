import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        {/* Cada Route liga um endereço (path) a uma página */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          {/* "*" captura qualquer endereço que não existe */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

