import './styles.css';

const Missao = () => {
  return (
    <div className="missao-container">
      <div className="missao-content">
        <h1>Nossa Missão</h1>
        <div className="missao-card">
          <p>
            Nosso propósito é contribuir para a preservação dos ecossistemas marinhos e promover a conscientização sobre a importância dos oceanos.
            Alinhados com a ODS 14, buscamos desenvolver projetos inovadores que ajudem a proteger a vida na água e incentivar práticas sustentáveis.
          </p>
          
          <p>
            Sabemos que os oceanos desempenham um papel fundamental no equilíbrio climático e na biodiversidade global. 
            Por isso, nosso grupo se dedica à pesquisa, educação ambiental e ao desenvolvimento de soluções tecnológicas 
            que possam mitigar os impactos negativos das atividades humanas nos mares e oceanos.
          </p>
          
          <p>
            Acreditamos que a conscientização é a chave para a mudança. Trabalhamos em parceria com comunidades locais, 
            instituições educacionais e organizações ambientais para promover a importância da preservação marinha. 
            Cada projeto que realizamos é um passo em direção a um futuro mais sustentável, onde a vida aquática seja protegida e respeitada.
          </p>
          
          <p className="missao-destaque">
            Junte-se a nós nessa jornada para preservar os oceanos e garantir um planeta saudável para as futuras gerações. 
            Unidos pela ODS 14, podemos fazer a diferença!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Missao;
