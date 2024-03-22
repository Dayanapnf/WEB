import { useEffect, useState } from 'react';

const Efeito = () => {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(true);

  useEffect(() => {
    if (contador % 2 !== 0) {
      setNumero(false);
    } else {
      setNumero(true);
    }
  }, [contador]);
  return (
    <>
      <h3>Contador:{contador}</h3>
      <h3>É par:{' ' + numero + ''}</h3>
      <button onClick={() => setContador((anterior) => anterior + 1)}>
        aumentar
      </button>
    </>
  );
};

export default Efeito;
