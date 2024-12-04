import './styles.css';
import { Link } from 'react-router-dom'; 
const Fontes = () => {
  const dadosFontes = [
    {
      titulo: "OCEANOS TÊM MAIS DE 170 TRILHÕES DE PARTÍCULAS DE PLÁSTICO",
      autor: "CNN BRASIL ",
      link: "https://www.cnnbrasil.com.br/internacional/oceanos-tem-mais-de-170-trilhoes-de-particulas-de-plastico-diz-estudo/",
    },
    {
      titulo: "DESENVOLVIMENTO SUSTENTÁVEL",
      autor: "Paloma Guitarrara",
      link: "https://brasilescola.uol.com.br/geografia/desenvolvimento-sustentavel.htm",
    },
    {
      titulo: "ODS 14 - VIDA NA ÁGUA",
      autor: "Nações Unidas Brasil",
      link: "https://brasil.un.org/pt-br/sdgs/14",
    },
  ];

  return (
    <div className="fontes-container">
      <h1>Fontes utilizadas</h1>
      <div className="centraliza">
        <div className="botao">
          <Link to="/">
            <button>Início</button>
          </Link>
        </div>
      </div>
      <div className="fontes-lista">
        {dadosFontes.map((fonte, index) => (
          <div className="fonte-card" key={index}>
            <h2>{fonte.titulo}</h2>
            <p className="fonte-autor">Por {fonte.autor}</p>
            {/* Botão para acessar o link */}
            <a
              href={fonte.link}
              target="_blank"
              rel="noopener noreferrer"
              className="fonte-botao"
            >
              Acessar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
/**/ 

export default Fontes;
