import './styles.css';
import { Link } from 'react-router-dom'; 
const Equipe = () => {

  const alunos = [
    { nome: "Bruno Protásio",    },
    { nome: "Daniel Guilherme",    },
    { nome: "Marcus Vinicius",    },
    { nome: "Paulo Carvalho",    },
    { nome: "Pedro Henrique",    },
    { nome: "Vinicyus Manoel",    },
  ];

  const professores = [
    { nome: "Hemir da Cunha", ocupacao: "Docente da UPE" },
  ];

  return (
    <div className="equipe-container">
      <div className="centraliza">
        <div className="botao">
          <Link to="/">
            <button>Início</button>
          </Link>
        </div>
      </div>
      <h1>Equipe</h1>

      <h2>Alunos</h2>
      <div className="alunos-lista">
        {alunos.map((aluno, index) => (
          <div key={index} className="aluno-card">
            <h2>{aluno.nome}</h2>
           
           
          </div>
        ))}
      </div>

      <h2>Professores</h2>
      <div className="professores-lista">
        {professores.map((professor, index) => (
          <div key={index} className="professores-card">
            <h2>{professor.nome}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipe;
