import './styles.css';
import { Link } from 'react-router-dom'; 
const Artigos = () => {
  const dadosArtigos = [
    {
      titulo: "Conservação da biodiversidade marinha e costeira no Brasil",
      autor: "ANTÔNIA CECÍLIA Z. AMARAL¹*, SÍLVIO JABLONSKI²",
      link: "https://portalidea.com.br/cursos/introduo--biologia-marinha-apostila05.pdf",
    },
    {
      titulo: "RESPONSABILIDADE INTERNACIONAL E POLUIÇÃO MARINHA",
      autor: "Eliane M. Octaviano Martins",
      link: "https://core.ac.uk/download/pdf/211930446.pdf",
    },
    {
      titulo: "O papel do oceano nas mudanças climáticas globais",
      autor: "Edmo J. D. Campos",
      link: "https://d1wqtxts1xzle7.cloudfront.net/91569091/268322245-libre.pdf?1664189788=&response-content-disposition=inline%3B+filename%3DO_Papel_do_Oceano_nas_Mudancas_Climatica.pdf&Expires=1732472272&Signature=L7cD0Vh7AZqANVT7aqjjYn0Tmfh~k4UXD0nrpsQWrRKElQ2fqBWHmD-jo4daiQp7tiyUS-D6cCLkI-KFPHq47XwYe6KWts1jeod~Vz7FGc4KJO-XLALJ-KpR3sYXAecnVt5kyRSMJs9Qc6RigqSvxu9oC44A3ERq-vTRWfP7iIa5L~W6ZpBaDhEAM3s2CrZSWtrV8KbrhNn2rK0pfApvt1gRsv3Llhz8n~OFCTeBmV6tJRE8MOm12eROPW7djan1TnklSwfFhiBsCzRsQtx58~WwdgrfGi8TvBK~Dti0iV0dzFX0jv01DsD5zqed5qlCLMXmc824tgwAQi7wN~eP4Q__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA",
    },
    {
      titulo: "AQUECIMENTO GLOBAL, OCEANOS & SOCIEDADE",
      autor: "Paulo Nobre",
      link: "http://www3.sp.senac.br/hotsites/blogs/InterfacEHS/wp-content/uploads/2013/07/art-1-2008-6.pdf",
    },
  ];

  return (
    <div className="artigos-container">
      <h1>Artigos Inspiradores sobre a ODS 14</h1>
      <div className="centraliza">
        <div className="botao">
          <Link to="/">
            <button>Início</button>
          </Link>
        </div>
      </div>
      <div className="artigos-lista">
        {dadosArtigos.map((artigo, index) => (
          <div className="artigo-card" key={index}>
            <h2>{artigo.titulo}</h2>
            <p className="artigo-autor">Por {artigo.autor}</p>
            {/* Botão para acessar o link */}
            <a
              href={artigo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="artigo-botao"
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

export default Artigos;
