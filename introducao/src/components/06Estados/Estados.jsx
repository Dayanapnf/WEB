import { useState } from 'react';

const Estados = () => {
  const [contador, setContador] = useState(0);

  function cont() {
    setContador(contador + 1);
  }
  return (
    <div>
      <h2>Contador: {contador} </h2>
      <button onClick={cont}>Incrementar</button>
    </div>
  );
};

export default Estados;
