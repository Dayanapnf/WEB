import React from 'react';

const Filho01 = ({ altura, peso }) => {
  const imc = () => {
    return peso / (altura * altura);
  };
  const resultado = () => {
    if (imc() < 18) {
      return <h3>Abaixo do peso</h3>;
    } else if (imc() > 25) {
      return <h3>Acima do peso</h3>;
    } else {
      return <h3>Peso ideal</h3>;
    }
  };
  return (
    <div className="container centralizar">
      <h1>Resultado</h1>
      <h3>Imc: {imc().toFixed(2)}</h3>
      {resultado()}
    </div>
  );
};

export default Filho01;
