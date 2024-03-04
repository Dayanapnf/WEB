import Disciplina from './Disciplina';

const Curso = () => {
  return (
    <div>
      <h1>SISTEMAS DE INFORMAÇÃO</h1>
      <hr />
      <Disciplina nome="web" cargaHoraria={96} periodo={2024.1} />
      <hr />
      <Disciplina nome="mobile" cargaHoraria={96} periodo={2023.1} />
    </div>
  );
};

export default Curso;
