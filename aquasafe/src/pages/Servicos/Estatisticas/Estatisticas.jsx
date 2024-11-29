import "./styles.css";
import { Bar, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Estatisticas = () => {
  const dadosEstatisticas = [
    {
      titulo: "Taxa de Poluição Marinha",
      valor: "80%",
      descricao: "Porcentagem de mares e oceanos com altos níveis de poluição.",
      titulo: "Poluição Marinha por Plástico",
      valor: "8 milhões de toneladas",
      descricao: "Quantidade de plástico que entra nos oceanos a cada ano.",
      dados: [8],
      cor: "rgba(54, 162, 235, 0.6)",
      corBorda: "rgba(54, 162, 235, 1)",
    },
    {
      titulo: "Morte de Animais Marinhos",
      valor: "1.000.000+",
      descricao: "Número estimado de animais marinhos mortos por poluição.",
      titulo: "Áreas Marinhas Protegidas",
      valor: "7,66%",
      descricao:
        "Percentual de oceanos protegidos por áreas marinhas protegidas.",
      dados: [7.66, 92.34],
      legendas: ["Protegido", "Não Protegido"],
      cor: ["rgba(75, 192, 192, 0.6)", "rgba(192, 192, 192, 0.6)"],
      corBorda: ["rgba(75, 192, 192, 1)", "rgba(192, 192, 192, 1)"],
    },
    {
      titulo: "Plástico nos Oceanos",
      valor: "8 milhões de toneladas",
      descricao: "Quantidade de plástico jogada nos oceanos anualmente.",
      titulo: "Acidificação dos Oceanos",
      valor: "26% de aumento",
      descricao:
        "Aumento na acidificação dos oceanos desde a revolução industrial.",
      dados: [26],
      cor: "rgba(255, 206, 86, 0.6)",
      corBorda: "rgba(255, 206, 86, 1)",
    },
    {
      titulo: "Áreas Marinhas Protegidas",
      valor: "7.5%",
      descricao:
        "Percentual de oceanos protegidos por áreas marinhas protegidas.",
      titulo: "Sobrepesca Global",
      valor: "34,2%",
      descricao:
        "Porcentagem de estoques pesqueiros explorados além do biologicamente sustentável.",
      dados: [34.2, 65.8],
      legendas: ["Sobrepesca", "Sustentável"],
      cor: ["rgba(255, 99, 132, 0.6)", "rgba(192, 192, 192, 0.6)"],
      corBorda: ["rgba(255, 99, 132, 1)", "rgba(192, 192, 192, 1)"],
    },
    {
      titulo: "Temperaturas globais 2014-2024",
      descricao: "Temperatura do planeta nos últimos 10 anos.",
      titulo: "Temperaturas do planeta",

      dados: [0.74, 0.9, 1.02, 0.93, 0.85, 0.98, 1.02, 0.87, 0.89, 1.04, 1.15],
      legendas: [
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ],
      cor: ["rgba(255, 99, 132, 0.6)"],
      corBorda: ["rgba(255, 99, 132, 1)", "rgba(192, 192, 192, 1)"],
      bar: true,
    },

    {
      titulo: "Temperaturas dos oceanos 2014-2023",
      descricao: "Temperatura dos oceanos nos últimos 10 anos.",
      titulo: "Temperaturas dos oceanos",

      dados: [0.58, 0.61, 0.64, 0.62, 0.6, 0.66, 0.68, 0.63, 0.65, 0.69],
      legendas: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      cor: ["rgba(255, 99, 132, 0.6)"],
      corBorda: ["rgba(255, 99, 132, 1)", "rgba(192, 192, 192, 1)"],
      bar: true,
    },
  ];

  const renderGrafico = (dados, index) => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: dados.legendas ? true : false,
          position: "bottom",
          labels: {
            font: { size: 10 },
          },
        },
      },
    };

    // Usar Doughnut para dados com duas partes (comparações)
    if (dados.bar) {
      return (
        <Bar
          data={{
            labels: dados.legendas,
            datasets: [
              {
                label: dados.titulo,
                data: dados.dados,
                backgroundColor: dados.cor,
                borderColor: dados.corBorda,
                borderWidth: 1,
              },
            ],
          }}
          options={options}
        />
      );
    }
    if (dados.legendas) {
      return (
        <Doughnut
          data={{
            labels: dados.legendas,
            datasets: [
              {
                data: dados.dados,
                backgroundColor: dados.cor,
                borderColor: dados.corBorda,
                borderWidth: 1,
              },
            ],
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
          datasets: [
            {
              label: dados.titulo,
              data: dados.dados,
              backgroundColor: dados.cor,
              borderColor: dados.corBorda,
              borderWidth: 1,
            },
          ],
        }}
        options={options}
      />
    );
  };
  return (
    <div className="estatisticas-container">
      <h1>Estatísticas da ODS 14: Vida na Água</h1>
      <div className="centraliza">
        <div className="botao">
          <Link to="/">
            <button>Início</button>
          </Link>
        </div>
      </div>
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
