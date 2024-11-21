import React from 'react';
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
    </div>
  );
};

export default Estatisticas;
