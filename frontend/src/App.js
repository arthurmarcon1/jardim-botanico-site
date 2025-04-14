import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mapa from './pages/Mapa';
import Sobre from './pages/Sobre';
import Animais from './pages/Animais';
import ConteudoMapa from './pages/ConteudoMapa';
import TelhadoVerde from './pages/TelhadoVerde';
import AnimalDetalhe from './pages/AnimalDetalhe';
import Footer from './components/Footer';
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/animais" element={<Animais />} />
          <Route path="/animal/:id" element={<AnimalDetalhe />} />
          <Route path="/conteudo" element={<ConteudoMapa />} />
          <Route path="/telhado-verde" element={<TelhadoVerde />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
