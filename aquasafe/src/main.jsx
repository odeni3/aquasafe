import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';
import Vamosla from './pages/Vamosla/Vamosla.jsx'; 
import TabuaDeMare from './pages/Servicos/Previsao/Clima.jsx';
import Flappy from './pages/Servicos/Game/flappy.jsx';
import Estatisticas from './pages/Servicos/Estatisticas/Estatisticas.jsx';
import Simulacao from './pages/Servicos/Simulacao/Simulacao.jsx';
import Equipe from './pages/Sobre/Equipe/equipe.jsx';
import Artigos from './pages/Informacoes/Artigos/Artigos.jsx'
import Missao from './pages/Sobre/Missao/missao.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/vamosla" element={<Vamosla />} />
        <Route path="/tabua" element={<TabuaDeMare />} />
        <Route path="/flappy" element={<Flappy />} />
        <Route path="/estatisticas" element={<Estatisticas />} />
        <Route path="/simulacao" element={<Simulacao />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path='/artigos' element={<Artigos />} />
        <Route path="/missao" element={<Missao />} />
      </Routes>
    </Router>
  </StrictMode>
);
