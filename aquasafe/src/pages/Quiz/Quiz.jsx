import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const perguntasQuiz = [
    {
      pergunta: "Qual é a porcentagem de oxigênio produzida pelos oceanos?",
      opcoes: ["50%", "70%", "30%", "90%"],
      respostaCorreta: "70%",
      curiosidade:
        "Os oceanos produzem cerca de 70% do oxigênio que respiramos, principalmente por meio do fitoplâncton.",
    },
    {
      pergunta: "Quantos milhões de toneladas de plástico são descartadas no oceano anualmente?",
      opcoes: ["4 milhões", "6 milhões", "8 milhões", "10 milhões"],
      respostaCorreta: "8 milhões",
      curiosidade:
        "Cerca de 8 milhões de toneladas de plástico são descartadas nos oceanos todos os anos, afetando diretamente a vida marinha.",
    },
    {
      pergunta: "O que é uma área marinha protegida?",
      opcoes: [
        "Uma zona sem atividades humanas",
        "Uma área que restringe atividades para preservar a biodiversidade",
        "Uma praia limpa",
        "Um local turístico próximo ao oceano",
      ],
      respostaCorreta:
        "Uma área que restringe atividades para preservar a biodiversidade",
      curiosidade:
        "Áreas marinhas protegidas ajudam a conservar espécies marinhas e ecossistemas vulneráveis.",
    },
    {
      pergunta: "Qual é o maior oceano do mundo?",
      opcoes: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
      respostaCorreta: "Oceano Pacífico",
      curiosidade:
        "O Oceano Pacífico cobre mais de 30% da superfície terrestre e é o maior oceano do mundo.",
    },
    {
      pergunta: "Qual das opções é uma consequência do aumento da temperatura dos oceanos?",
      opcoes: [
        "Destruição dos recifes de coral",
        "Aumento na quantidade de fitoplâncton",
        "Maior salinidade das águas",
        "Crescimento das populações de peixes",
      ],
      respostaCorreta: "Destruição dos recifes de coral",
      curiosidade:
        "O aumento da temperatura dos oceanos causa o branqueamento dos corais, ameaçando ecossistemas marinhos inteiros.",
    },
    {
      pergunta: "Qual país produz a maior quantidade de lixo plástico?",
      opcoes: ["China", "Estados Unidos", "Índia", "Indonésia"],
      respostaCorreta: "Estados Unidos",
      curiosidade:
        "Os Estados Unidos geram mais de 40 milhões de toneladas de lixo plástico por ano, mais do que qualquer outro país.",
    },
    {
      pergunta: "O que é o 'vórtice de lixo do Pacífico'?",
      opcoes: [
        "Uma corrente oceânica limpa",
        "Uma enorme ilha de lixo flutuante",
        "Uma zona de pesca",
        "Uma área de conservação ambiental",
      ],
      respostaCorreta: "Uma enorme ilha de lixo flutuante",
      curiosidade:
        "O vórtice de lixo do Pacífico é a maior concentração de plástico nos oceanos, cobrindo uma área de mais de 1,6 milhão de km².",
    },
];
  

const QuizEducativo = () => {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [feedback, setFeedback] = useState("");
  
    const handleResposta = (resposta) => {
      const perguntaAtual = perguntasQuiz[indiceAtual];
  
      if (resposta === perguntaAtual.respostaCorreta) {
        setPontuacao(pontuacao + 1);
        setFeedback(`Correto! ${perguntaAtual.curiosidade}`);
      } else {
        setFeedback(`Errado! ${perguntaAtual.curiosidade}`);
      }
  
      setTimeout(() => {
        setFeedback("");
        if (indiceAtual + 1 < perguntasQuiz.length) {
          setIndiceAtual(indiceAtual + 1);
        } else {
          setMostrarResultado(true);
        }
      }, 3000);
    };
  
    return (
      <div className="quiz-container">
        <h1>Quiz Educativo: ODS 14</h1>

        <div className="centraliza">
        <div className="botao">
          <Link to="/">
            <button>Início</button>
          </Link>
        </div>
      </div>
        {mostrarResultado ? (
          <div className="quiz-score">
            <h2>Você concluiu o quiz!</h2>
            <p>
              Sua pontuação: <strong>{pontuacao}</strong> de {perguntasQuiz.length}
            </p>
          </div>
        ) : (
          <div className="quiz-question">
            <h2>{perguntasQuiz[indiceAtual].pergunta}</h2>
            <div className="quiz-options">
              {perguntasQuiz[indiceAtual].opcoes.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() => handleResposta(opcao)}
                  className="quiz-option"
                >
                  {opcao}
                </button>
              ))}
            </div>
            {feedback && <div className="quiz-feedback">{feedback}</div>}
          </div>
        )}
 

        
      </div>

      
    );
};
  
export default QuizEducativo;