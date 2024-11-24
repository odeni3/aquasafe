import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Equipe.css';

const Equipe = () => {

  const alunos = [
    { nome: "Bruno Protásio", idade: 20, curso: "Engenharia de Computação", formação: "Graduando da UPE" },
    { nome: "Daniel Guilherme", idade: 21, curso: "Engenharia de Computação", formação: "Graduando da UPE" },
    { nome: "Marcus Vinicius", idade: 20, curso: "Engenharia de Computação", formação: "Graduando da UPE" },
    { nome: "Paulo Carvalho", idade: 21, curso: "Engenharia de Computação", formação: "Graduando da UPE" },
    { nome: "Pedro Henrique", idade: 20, curso: "Engenharia de Computação", formação: "Graduando da UPE" },
    { nome: "Vinicyus Manoel", idade: 20, curso: "Engenharia de Computação", formação: "Graduando da UPE" },
  ];

  const professores = [
    { nome: "Hemir da Cunha", ocupacao: "Docente da UPE" },
  ];

  return (
    <div className="equipe-container">
      <h1>Equipe</h1>

      <h2>Alunos</h2>
      <div className="alunos-lista">
        {alunos.map((aluno, index) => (
          <div key={index} className="aluno-card">
            <h2>{aluno.nome}</h2>
            <p>Idade: {aluno.idade}</p>
            <p>Curso: {aluno.curso}</p>
            <p>Formação: {aluno.formação}</p>
          </div>
        ))}
      </div>

      <h2>Professores</h2>
      <div className="professores-lista">
        {professores.map((professor, index) => (
          <div key={index} className="professores-card">
            <h2>{professor.nome}</h2>
            <p>{professor.ocupacao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipe;
