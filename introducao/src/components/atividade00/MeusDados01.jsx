import React from 'react';
const MeusDados = () => {
  return (
    <div>
      <h1 className="titulo">Arrow</h1>
      <h1>Nome: Dayana Priscilla N F Costa</h1>
      <h1>Curso: Sistemas de Informação</h1>
      <h1>Universidade: UFC - Quixadá</h1>
    </div>
  );
};

const MeusDadosArrowS = () => (
  <div>
    <h1 className="titulo">Arrow sem return</h1>
    <h1>Nome: Dayana Priscilla N F Costa</h1>
    <h1>Curso: Sistemas de Informação</h1>
    <h1>Universidade: UFC - Quixadá</h1>
  </div>
);

function MeusDadosFunction() {
  return (
    <div>
      <h1 className="titulo">Function</h1>
      <h1>Nome: Dayana Priscilla N F Costa</h1>
      <h1>Curso: Sistemas de Informação</h1>
      <h1>Universidade: UFC - Quixadá</h1>
    </div>
  );
}

class MeusDadosClass extends React.Component {
  render() {
    return (
      <div>
        <h1 className="titulo">Class</h1>
        <h1>Nome: Dayana Priscilla N F Costa</h1>
        <h1>Curso: Sistemas de Informação</h1>
        <h1>Universidade: UFC - Quixadá</h1>
      </div>
    );
  }
}

export { MeusDados, MeusDadosArrowS, MeusDadosFunction, MeusDadosClass };
