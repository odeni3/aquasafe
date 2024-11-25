import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const Estatisticas = () => {
  const dadosEstatisticas = [
    {
      titulo: "Poluição Marinha por Plástico",
      valor: "8 milhões de toneladas",
      descricao: "Quantidade de plástico que entra nos oceanos a cada ano.",
      dados: [8],
      cor: 'rgba(54, 162, 235, 0.6)',
      corBorda: 'rgba(54, 162, 235, 1)',
    },
    {
      titulo: "Áreas Marinhas Protegidas",
      valor: "7,66%",
      descricao: "Percentual de oceanos protegidos por áreas marinhas protegidas.",
      dados: [7.66, 92.34],
      legendas: ['Protegido', 'Não Protegido'],
      cor: ['rgba(75, 192, 192, 0.6)', 'rgba(192, 192, 192, 0.6)'],
      corBorda: ['rgba(75, 192, 192, 1)', 'rgba(192, 192, 192, 1)'],
    },
    {
      titulo: "Acidificação dos Oceanos",
      valor: "26% de aumento",
      descricao: "Aumento na acidificação dos oceanos desde a revolução industrial.",
      dados: [26],
      cor: 'rgba(255, 206, 86, 0.6)',
      corBorda: 'rgba(255, 206, 86, 1)',
    },
    {
      titulo: "Sobrepesca Global",
      valor: "34,2%",
      descricao: "Porcentagem de estoques pesqueiros explorados além do biologicamente sustentável.",
      dados: [34.2, 65.8],
      legendas: ['Sobrepesca', 'Sustentável'],
      cor: ['rgba(255, 99, 132, 0.6)', 'rgba(192, 192, 192, 0.6)'],
      corBorda: ['rgba(255, 99, 132, 1)', 'rgba(192, 192, 192, 1)'],
    },
  ];

  const renderGrafico = (dados, index) => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: dados.legendas ? true : false,
          position: 'bottom',
          labels: {
            font: { size: 10 }
          }
        }
      }
    };

    // Usar Doughnut para dados com duas partes (comparações)
    if (dados.legendas) {
      return (
        <Doughnut
          data={{
            labels: dados.legendas,
            datasets: [{
              data: dados.dados,
              backgroundColor: dados.cor,
              borderColor: dados.corBorda,
              borderWidth: 1
            }]
          }}
          options={options}
        />
      );
    }

    // Usar Bar para dados únicos
    return (
      <Bar
        data={{
          labels: [dados.titulo],
          datasets: [{
            label: dados.titulo,
            data: dados.dados,
            backgroundColor: dados.cor,
            borderColor: dados.corBorda,
            borderWidth: 1
          }]
        }}
        options={options}
      />
    );
  };

  return (
    <div className="estatisticas-container">
      <h1>Estatísticas da ODS 14: Vida na Água</h1>
      
      <div className="estatisticas-cards">
        {dadosEstatisticas.map((item, index) => (
          <div className="estatistica-card" key={index}>
            <h2>{item.titulo}</h2>
            <p className="estatistica-valor">{item.valor}</p>
            <p>{item.descricao}</p>
            <div className="grafico-individual">
              {renderGrafico(item, index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estatisticas;
