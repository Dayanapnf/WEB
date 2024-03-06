import React from 'react';
import Planeta from './Planeta';

const SistemaSolar = ({ children, galaxia }) => {
  return (
    <>
      <h2>Sistema Solar da Galáxia {galaxia}</h2>
      {children}
    </>
  );
};

export default SistemaSolar;
