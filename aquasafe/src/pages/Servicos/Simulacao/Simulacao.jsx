import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './styles.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Simulacao = () => {
  const [plasticoDescartado, setPlasticoDescartado] = useState(50);
  const [pescaPredatoria, setPescaPredatoria] = useState(50);
  const [areasProtegidas, setAreasProtegidas] = useState(30);
  const [poluicaoQuimica, setPoluicaoQuimica] = useState(40);
  
  const [saudeOceano, setSaudeOceano] = useState(100);
  const [historicoSaude, setHistoricoSaude] = useState([100]);
  const [labels, setLabels] = useState(['Início']);

  useEffect(() => {
    // Calcula o impacto na saúde do oceano
    const calcularSaudeOceano = () => {
      const impactoPlastico = plasticoDescartado * 0.3;
      const impactoPesca = pescaPredatoria * 0.25;
      const beneficioAreas = areasProtegidas * 0.2;
      const impactoPoluicao = poluicaoQuimica * 0.25;

      const novaSaude = 100 - impactoPlastico - impactoPesca - impactoPoluicao + beneficioAreas;
      const saudeFinal = Math.max(0, Math.min(100, novaSaude));

      setSaudeOceano(saudeFinal);
      
      // Atualiza o histórico
      const novoLabel = `Simulação ${historicoSaude.length}`;
      setLabels(prev => [...prev, novoLabel]);
      setHistoricoSaude(prev => [...prev, saudeFinal]);
    };

    calcularSaudeOceano();
  }, [plasticoDescartado, pescaPredatoria, areasProtegidas, poluicaoQuimica]);

  const dadosGrafico = {
    labels: labels,
    datasets: [
      {
        label: 'Saúde do Oceano',
        data: historicoSaude,
        fill: false,
        borderColor: '#1E4C6B',
        tension: 0.4,
      },
    ],
  };

  const opcoesGrafico = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Evolução da Saúde do Oceano',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="simulacao-container">
      <h1>Simulação de Impacto Ambiental Marinho</h1>
      
      <div className="simulacao-content">
        <div className="controles-container">
          <div className="controle-item">
            <label>Descarte de Plástico (%)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={plasticoDescartado}
              onChange={(e) => setPlasticoDescartado(Number(e.target.value))}
            />
            <span className="valor-slider">{plasticoDescartado}%</span>
          </div>

          <div className="controle-item">
            <label>Pesca Predatória (%)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={pescaPredatoria}
              onChange={(e) => setPescaPredatoria(Number(e.target.value))}
            />
            <span className="valor-slider">{pescaPredatoria}%</span>
          </div>

          <div className="controle-item">
            <label>Áreas Marinhas Protegidas (%)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={areasProtegidas}
              onChange={(e) => setAreasProtegidas(Number(e.target.value))}
            />
            <span className="valor-slider">{areasProtegidas}%</span>
          </div>

          <div className="controle-item">
            <label>Poluição Química (%)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={poluicaoQuimica}
              onChange={(e) => setPoluicaoQuimica(Number(e.target.value))}
            />
            <span className="valor-slider">{poluicaoQuimica}%</span>
          </div>
        </div>

        <div className="resultado-container">
          <div className="indicador-saude">
            <h2>Saúde do Oceano</h2>
            <div className="medidor">
              <div 
                className="nivel" 
                style={{ 
                  width: `${saudeOceano}%`,
                  backgroundColor: `hsl(${saudeOceano * 1.2}, 70%, 50%)`
                }}
              ></div>
            </div>
            <span className="valor-saude">{saudeOceano.toFixed(1)}%</span>
          </div>

          <div className="grafico-container">
            <Line data={dadosGrafico} options={opcoesGrafico} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulacao; 