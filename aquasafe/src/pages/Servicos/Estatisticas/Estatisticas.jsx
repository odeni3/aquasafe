import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './styles.css';

const Estatisticas = () => {
  const dadosEstatisticas = [
    {
      titulo: "Taxa de Poluição Marinha",
      valor: "80%",
      descricao: "Porcentagem de mares e oceanos com altos níveis de poluição.",
    },
    {
      titulo: "Morte de Animais Marinhos",
      valor: "1.000.000+",
      descricao: "Número estimado de animais marinhos mortos por poluição.",
    },
    {
      titulo: "Plástico nos Oceanos",
      valor: "8 milhões de toneladas",
      descricao: "Quantidade de plástico jogada nos oceanos anualmente.",
    },
    {
      titulo: "Áreas Marinhas Protegidas",
      valor: "7.5%",
      descricao: "Percentual de oceanos protegidos por áreas marinhas protegidas.",
    },
  ];

  const barChartData = [
    { name: 'Poluição', percent: 80 },
    { name: 'Áreas Protegidas', percent: 7.5 },
  ];

  const pieChartData = [
    { name: 'Animais Marinhos', value: 1000000 },
    { name: 'Outros Impactos', value: 500000 },
  ];

  const COLORS = ['#3B9A94', '#FFE156'];

  return (
    <div className="estatisticas-container">
      <h1>Estatísticas da ODS 14: Vida na Água</h1>

      <div className="estatisticas-cards">
        {dadosEstatisticas.map((item, index) => (
          <div className="estatistica-card" key={index}>
            <h2>{item.titulo}</h2>
            <p className="estatistica-valor">{item.valor}</p>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>

      <div className="graficos-container">
        <div className="grafico">
          <h2>Progresso de Poluição e Proteção</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percent" fill="#3B9A94" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grafico">
          <h2>Impactos nos Animais</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Estatisticas;
