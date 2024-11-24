import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importando o Router
import './index.css';
import App from './App.jsx';
import Vamosla from './pages/Vamosla/Vamosla.jsx'; // Importando a página "Vamos Lá"
import TabuaDeMare from './pages/Servicos/Previsao/Clima.jsx';
import Flappy from './pages/Servicos/Game/flappy.jsx';
import Estatisticas from './pages/Servicos/Estatisticas/Estatisticas.jsx';
import Equipe from './pages/Sobre/Equipe/equipe.jsx';
import Artigos from './pages/Informacoes/Artigos/Artigos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/vamosla" element={<Vamosla />} />
        <Route path="/tabua" element={<TabuaDeMare />} />
        <Route path="/flappy" element={<Flappy />} />
        <Route path="/estatisticas" element={<Estatisticas />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path='/artigos' element={<Artigos />} />
        

      </Routes>
    </Router>
  </StrictMode>
);
