import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './styles.css';
import { Link } from 'react-router-dom';
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

const SimulacaoTemperatura = () => {
  const [anosFuturo, setAnosFuturo] = useState(10);
  const [dadosTemperatura, setDadosTemperatura] = useState([
    { ano: 2000, temperatura: 14.1 },
    { ano: 2001, temperatura: 14.3 },
    { ano: 2002, temperatura: 14.5 },
    { ano: 2003, temperatura: 14.6 },
    { ano: 2004, temperatura: 14.8 },
    { ano: 2005, temperatura: 14.9 },
    { ano: 2006, temperatura: 15.0 },
    { ano: 2007, temperatura: 15.1 },
    { ano: 2008, temperatura: 15.2 },
    { ano: 2009, temperatura: 15.4 },
    { ano: 2010, temperatura: 15.6 },
    { ano: 2011, temperatura: 15.7 },
    { ano: 2012, temperatura: 15.9 },
    { ano: 2013, temperatura: 16.0 },
    { ano: 2014, temperatura: 16.1 },
    { ano: 2015, temperatura: 16.3 },
    { ano: 2016, temperatura: 16.5 },
    { ano: 2017, temperatura: 16.7 },
    { ano: 2018, temperatura: 16.9 },
    { ano: 2019, temperatura: 17.0 }
  ]);
  const [dadosFuturos, setDadosFuturos] = useState([]);
  const [fundoCor, setFundoCor] = useState('#33C1FF'); // Cor inicial de fundo
  const [alerta, setAlerta] = useState('');


  // Função de regressão linear
  const regressaoLinear = (dados) => {
    const n = dados.length;
    const somaX = dados.reduce((acc, curr) => acc + curr.ano, 0);
    const somaY = dados.reduce((acc, curr) => acc + curr.temperatura, 0);
    const somaXY = dados.reduce((acc, curr) => acc + (curr.ano * curr.temperatura), 0);
    const somaX2 = dados.reduce((acc, curr) => acc + (curr.ano * curr.ano), 0);

    const a = (n * somaXY - somaX * somaY) / (n * somaX2 - somaX * somaX);
    const b = (somaY - a * somaX) / n;

    return { a, b };
  };

  useEffect(() => {
    // Calculando os dados futuros com base na regressão linear
    const { a, b } = regressaoLinear(dadosTemperatura);
    const anosFuturosArr = [];
    
    for (let i = 1; i <= anosFuturo; i++) {
      const anoFuturo = 2023 + i;
      const temperaturaFutura = a * anoFuturo + b;
      anosFuturosArr.push({ ano: anoFuturo, temperatura: temperaturaFutura });
    }
  
    setDadosFuturos(anosFuturosArr);
  
    // Efeito de cor do fundo com base na temperatura máxima futura
    const tempMax = Math.max(...anosFuturosArr.map(item => item.temperatura));
    const corFundo = tempMax > 16 ? '#FF5733' : '#33C1FF'; // Vermelho se a temperatura for maior que 16°C
    setFundoCor(corFundo);
  
    // Definindo o alerta de impacto
    const temperaturaFutura = anosFuturosArr[anosFuturo - 1]?.temperatura;
  
    if (temperaturaFutura > 20) {
      setAlerta("Impacto severo: Aumento de mais de 5°C. Catastrófico para o clima e a biodiversidade!");
    } else if (temperaturaFutura > 19) {
      setAlerta("Impacto grave: Aumento de 4°C. Grandes mudanças no clima e perda de biodiversidade.");
    } else if (temperaturaFutura > 18) {
      setAlerta("Impacto significativo: Aumento de 3°C. Áreas agrícolas e costeiras serão severamente afetadas.");
    } else if (temperaturaFutura > 17) {
      setAlerta("Impacto moderado: Aumento de 2°C. Início de grandes mudanças climáticas.");
    } else {
      setAlerta("Aumento moderado de temperatura. Consequências a longo prazo, mas controláveis.");
    }
  }, [anosFuturo, dadosTemperatura]);
  
  
  

  const dadosGrafico = {
    labels: [
      ...dadosTemperatura.map(item => item.ano),
      ...dadosFuturos.map(item => item.ano)
    ],
    datasets: [
      {
        label: 'Temperatura Global (°C)',
        data: [
          ...dadosTemperatura.map(item => item.temperatura),
          ...dadosFuturos.map(item => item.temperatura)
        ],
        fill: false,
        borderColor: '#FF5733',
        tension: 0.4
      }
    ]
  };

  const opcoesGrafico = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw.toFixed(2)}°C`; // Formatação dos valores do gráfico
          }
        }
      },
      title: {
        display: true,
        text: 'Previsão de Aumento da Temperatura Global',
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ano',
          color: '#1E4C6B',
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperatura (°C)',
          color: '#1E4C6B',
          font: {
            size: 14,
          },
        },
        beginAtZero: false,
        min: 14,  // temperatura mínima
        max: 23,  // temperatura máxima, ajustado para valores mais altos
        ticks: {
          stepSize: 0.5,
          callback: function(value) {
            return `${value.toFixed(1)}°C`; // Exibir os valores no eixo Y
          }
        }
      }
    }
  };
  
  

  return (
    <div className="simulacao-container" style={{ backgroundColor: fundoCor }}>
      <div className="header-container centraliza">
        <h1 className="titulo-simulacao">
          Previsão de Aumento da Temperatura Global
        </h1>
      </div>

      <div className="simulacao-content centraliza">
        {/* Seção de controle para a quantidade de anos */}
        <div className="controle-container centraliza">
          <div className="controle-item">
            <label className="label-anos">Quantos anos à frente?</label>
            <input
              type="number"
              min="1"
              max="50"
              value={anosFuturo}
              onChange={(e) => setAnosFuturo(Number(e.target.value))}
              className="controle-slider"
            />
            <span className="valor-slider">{anosFuturo} anos</span>
          </div>
        </div>

        {/* Seção do gráfico */}
        <div className="grafico-container centraliza">
          <Line data={dadosGrafico} options={opcoesGrafico} />
        </div>

        {/* Seção de aviso sobre os impactos futuros */}
        <div className="impacto-container centraliza">
          {dadosFuturos.length > 0 && (
            <div className="impacto-info">
              <h2>Impacto Futuro</h2>
              <p>
                Se a temperatura continuar a subir a esse ritmo, dentro de{" "} 
                 { anosFuturo} anos, a temperatura global pode ultrapassar os
                limites seguros, afetando drasticamente o clima global.
              </p>
              <div
                className="alerta-temperatura"
                style={{
                  color: fundoCor === '#FF5733' ? '#fff' : '#000',
                  backgroundColor: fundoCor === '#FF5733' ? '#FF5733' : '#33C1FF',
                }}
              >
                {alerta}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Seção do botão para voltar ao início */}
      <div className="footer-container centraliza">
        <div className="botao">
          <Link to="/">
            <button className="botao-inicio">Voltar para Início</button>
          </Link>
        </div>
      </div>
    </div>

      );
    };

export default SimulacaoTemperatura;
