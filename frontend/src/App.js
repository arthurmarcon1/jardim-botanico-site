import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mapa from './pages/Mapa';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import "leaflet/dist/leaflet.css"; // Importando os estilos do Leaflet

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
