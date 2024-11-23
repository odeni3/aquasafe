import { useState } from "react";
import "./styles.css"; // Importe o arquivo CSS atualizado
import checker from  '../../assets/check.svg';
import eye from '../../assets/eye.svg';
function Vamosla() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      concluida: false,
      titulo: "Reduzir o uso de plásticos descartáveis",
      descricao:
        "Evitar o uso de plásticos descartáveis, como canudos, garrafas e sacolas plásticas. Optar por alternativas reutilizáveis, como garrafas de água e sacolas de pano.",
      dicas: [
        "Utilize garrafas de água reutilizáveis feitas de aço inoxidável ou vidro.",
        "Substitua sacolas plásticas por sacolas de pano para compras.",
        "Prefira canudos reutilizáveis de metal, vidro ou bambu.",
      ],
    },
    {
      id: 2,
      concluida: false,
      titulo: "Participar de limpeza de praias e áreas costeiras",
      descricao:
        "Organizar ou participar de eventos de limpeza de praias e outras áreas costeiras para remover o lixo e reduzir a poluição.",
      dicas: [
        "Procure grupos ou ONGs locais que organizem eventos de limpeza.",
        "Leve luvas reutilizáveis e sacos recicláveis para o lixo recolhido.",
        "Convide amigos e familiares para participar e ampliar o impacto.",
      ],
    },
    {
      id: 3,
      concluida: false,
      titulo: "Apoiar a pesca sustentável",
      descricao:
        "Comprar peixe e frutos do mar provenientes de fontes sustentáveis e apoiar iniciativas que incentivam práticas de pesca responsáveis.",
      dicas: [
        "Procure por rótulos de certificação de pesca sustentável, como MSC (Marine Stewardship Council).",
        "Evite consumir espécies de peixe ameaçadas de extinção.",
        "Incentive mercados locais a oferecerem opções sustentáveis.",
      ],
    },
    {
      id: 4,
      concluida: false,
      titulo: "Conservar áreas marinhas e costeiras",
      descricao:
        "Apoiar iniciativas que incentivem a criação de áreas marinhas protegidas e respeitar as normas de preservação ao visitar essas áreas.",
      dicas: [
        "Informe-se sobre as áreas marinhas protegidas próximas de você.",
        "Respeite as regras de preservação, como não alimentar ou perturbar a vida marinha.",
        "Participe de campanhas de proteção de habitats marinhos.",
      ],
    },
    {
      id: 5,
      concluida: false,
      titulo:
        "Reduzir o consumo de produtos prejudiciais ao meio ambiente marinho",
      descricao:
        "Optar por produtos sem microplásticos e evitar produtos químicos que possam ser descartados em águas que afetam os ecossistemas marinhos, como cosméticos e produtos de limpeza.",
      dicas: [
        "Escolha cosméticos com rótulos indicando 'livre de microplásticos'.",
        "Evite produtos de limpeza com compostos químicos agressivos ao meio ambiente.",
        "Prefira marcas que promovam práticas de sustentabilidade.",
      ],
    },
    {
      id: 6,
      concluida: false,
      titulo: "Promover a educação ambiental",
      descricao:
        "Organizar ou participar de palestras, workshops ou atividades educativas sobre a preservação dos oceanos, promovendo o conhecimento sobre o impacto da poluição marinha e as formas de agir.",
      dicas: [
        "Participe de eventos locais sobre educação ambiental.",
        "Compartilhe informações nas redes sociais para conscientizar mais pessoas.",
        "Organize palestras na sua comunidade ou escola.",
      ],
    },
    {
      id: 7,
      concluida: false,
      titulo: "Reduzir a emissão de CO2",
      descricao:
        "Adotar hábitos que reduzam a emissão de gases de efeito estufa, como usar transporte público, andar de bicicleta ou adotar fontes de energia renovável em casa.",
      dicas: [
        "Use transporte público ou caronas compartilhadas sempre que possível.",
        "Invista em painéis solares ou outras fontes de energia renovável.",
        "Troque lâmpadas incandescentes por LEDs para economizar energia.",
      ],
    },
    {
      id: 8,
      concluida: false,
      titulo: "Utilizar produtos e serviços sustentáveis",
      descricao:
        "Comprar de empresas que adotam práticas sustentáveis e que apoiam projetos de conservação marinha.",
      dicas: [
        "Prefira empresas que utilizam materiais reciclados em seus produtos.",
        "Pesquise sobre iniciativas sustentáveis das empresas antes de consumir.",
        "Escolha serviços locais que reduzam a pegada de carbono no transporte.",
      ],
    },
    {
      id: 9,
      concluida: false,
      titulo: "Evitar o desperdício de alimentos marinhos",
      descricao:
        "Evitar desperdícios de alimentos marinhos, como frutos do mar, e apoiar práticas responsáveis de consumo desses recursos.",
      dicas: [
        "Compre apenas a quantidade necessária de frutos do mar para evitar desperdícios.",
        "Armazene corretamente alimentos marinhos para preservar sua qualidade.",
        "Apoie mercados locais que incentivem práticas de pesca responsáveis.",
      ],
    },
  ]);
  const [modalAberto, setModalAberto] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const [animandoSaida, setAnimandoSaida] = useState(false);

  // Abre o modal e define a tarefa selecionada
  const abrirModal = (tarefa) => {
    setTarefaSelecionada(tarefa);
    setModalAberto(true);
    setAnimandoSaida(false); // Garantir que a animação de saída não esteja ativa
  };

  // Fecha o modal com animação de saída
  const fecharModal = () => {
    setAnimandoSaida(true); // Ativa a animação de saída
    setTimeout(() => {
      setModalAberto(false);
      setTarefaSelecionada(null);
      setAnimandoSaida(false); // Reseta o estado para futuras aberturas
    }, 300); // O tempo deve coincidir com a duração da animação no CSS
  };

  // Concluir a tarefa
  const concluirTarefa = () => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === tarefaSelecionada.id
          ? { ...tarefa, concluida: true }
          : tarefa
      )
    );
    fecharModal();
  };

  return (
    <div className="vamosla-container">
      <h1>Vamos Contribuir com a ODS 14!</h1>
      <p>
        Aqui estão algumas metas e tarefas que você pode fazer para ajudar a
        preservar a vida na água:
      </p>

      <div className="tasks-container">
        {tarefas.map((tarefa) => (
          <div
            key={tarefa.id}
            className={`task ${tarefa.concluida ? "completed" : ""}`}
          >
            <h3>
              {tarefa.id}. {tarefa.titulo}
            </h3>
            <p>{tarefa.descricao}</p>
            <button  onClick={() => abrirModal(tarefa)}>
              <img className="imageSVG"
                src={tarefa.concluida ? checker : eye}
             
        
              />
              {tarefa.concluida ? "Vista " : "Ver Tarefa"}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className="modal-overlay">
          <div className={`modal-content ${animandoSaida ? "modal-exit" : ""}`}>
            <h2>{tarefaSelecionada?.titulo}</h2>
            <ul>
              {tarefaSelecionada?.dicas.map((dica, index) => (
                <li key={index}>{dica}</li>
              ))}
            </ul>
            <div className="modal-buttons">
              <button className="botao_confirma"onClick={concluirTarefa}>Marcar como visto</button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vamosla;
