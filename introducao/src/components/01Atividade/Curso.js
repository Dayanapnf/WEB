import Disciplina from './Disciplina';
import { useState } from 'react';

const Curso = () => {
  const [disciplinas] = useState([
    {
      id: 1,
      nome: 'Desenvolvimento web',
      cargaHoraria: '96h',
      periodo: 2024.1,
    },
    {
      id: 2,
      nome: 'Desenvolvimento mobile',
      cargaHoraria: '96h',
      periodo: 2024.1,
    },
    { id: 3, nome: 'TCC', cargaHoraria: '32h', periodo: 2024.1 },
  ]);
  return (
    <div>
      <h1>SISTEMAS DE INFORMAÇÃO</h1>
      <hr />
      <Disciplina nome="web" cargaHoraria={96} periodo={2024.1} />
      <hr />
      <Disciplina nome="mobile" cargaHoraria={96} periodo={2024.1} />
      <hr />
      <Disciplina nome="tcc" cargaHoraria={32} periodo={2024.1} />
      <hr />
      <ul>
        {disciplinas.map((disc) => (
          <li key={disc.id}>
            <h5>
              Nome: {disc.nome}
              /Carga horária: {disc.cargaHoraria}
              /Período: {disc.periodo}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Curso;
