import { useState } from 'react';
import './styles.css'; // Importe um arquivo CSS para estilizar a página

function Vamosla() {
    // Estado para controlar o status de conclusão de cada tarefa
    const [tarefas, setTarefas] = useState([
        { id: 1, concluida: false, titulo: 'Reduzir o uso de plásticos descartáveis', descricao: 'Evitar o uso de plásticos descartáveis, como canudos, garrafas e sacolas plásticas. Optar por alternativas reutilizáveis, como garrafas de água e sacolas de pano.' },
        { id: 2, concluida: false, titulo: 'Participar de limpeza de praias e áreas costeiras', descricao: 'Organizar ou participar de eventos de limpeza de praias e outras áreas costeiras para remover o lixo e reduzir a poluição.' },
        { id: 3, concluida: false, titulo: 'Apoiar a pesca sustentável', descricao: 'Comprar peixe e frutos do mar provenientes de fontes sustentáveis e apoiar iniciativas que incentivam práticas de pesca responsáveis.' },
        { id: 4, concluida: false, titulo: 'Conservar áreas marinhas e costeiras', descricao: 'Apoiar iniciativas que incentivem a criação de áreas marinhas protegidas e respeitar as normas de preservação ao visitar essas áreas.' },
        { id: 5, concluida: false, titulo: 'Reduzir o consumo de produtos prejudiciais ao meio ambiente marinho', descricao: 'Optar por produtos sem microplásticos e evitar produtos químicos que possam ser descartados em águas que afetam os ecossistemas marinhos, como cosméticos e produtos de limpeza.' },
        { id: 6, concluida: false, titulo: 'Promover a educação ambiental', descricao: 'Organizar ou participar de palestras, workshops ou atividades educativas sobre a preservação dos oceanos, promovendo o conhecimento sobre o impacto da poluição marinha e as formas de agir.' },
        { id: 7, concluida: false, titulo: 'Reduzir a emissão de CO2', descricao: 'Adotar hábitos que reduzam a emissão de gases de efeito estufa, como usar transporte público, andar de bicicleta ou adotar fontes de energia renovável em casa.' },
        { id: 8, concluida: false, titulo: 'Utilizar produtos e serviços sustentáveis', descricao: 'Comprar de empresas que adotam práticas sustentáveis e que apoiam projetos de conservação marinha.' },
        { id: 9, concluida: false, titulo: 'Evitar o desperdício de alimentos marinhos', descricao: 'Evitar desperdícios de alimentos marinhos, como frutos do mar, e apoiar práticas responsáveis de consumo desses recursos.' },
    ]);

    // Função para alternar o status de conclusão de uma tarefa
    const concluirTarefa = (id) => {
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        ));
    };

  return (
    <div className="vamosla-container">
        <h1>Vamos Contribuir com a ODS 14!</h1>
        <p>Aqui estão algumas metas e tarefas que você pode fazer para ajudar a preservar a vida na água:</p>
        
        <div className="tasks-container">
            {tarefas.map((tarefa) => (
                <div key={tarefa.id} className={`task ${tarefa.concluida ? 'completed' : ''}`}>
                    <h3>{tarefa.id}. {tarefa.titulo}</h3>
                    <p>{tarefa.descricao}</p>
                    <button onClick={() => concluirTarefa(tarefa.id)}>
                        {tarefa.concluida ? 'Cancelar Tarefa' : 'Concluir Tarefa'}
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Vamosla;
