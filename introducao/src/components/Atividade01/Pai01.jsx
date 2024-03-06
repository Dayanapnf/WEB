import React from 'react';
import Filho01 from './Filho01';

const Pai01 = () => {
  return (
    <div>
      <h1>Calculadora IMC!</h1>
      <Filho01 altura={1.8} peso={90} />
    </div>
  );
};

export default Pai01;
