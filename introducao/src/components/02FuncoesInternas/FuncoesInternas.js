import React, { useState } from 'react';
import './style.css';

const FuncoesInternas = () => {
  const [numero01, setNumero01] = useState(10);
  const [numero02, setNumero02] = useState(5);
  const [operacao, setOperacao] = useState('soma');
  const [resultado, setResultado] = useState(0);
  const [botaoAtivo, setBotaoAtivo] = useState(null);

  const calcularResultado = () => {
    if (operacao === 'soma') {
      setResultado(somar(numero01, numero02));
    } else if (operacao === 'subtrair') {
      setResultado(subtrair(numero01, numero02));
    } else if (operacao === 'dividir') {
      setResultado(dividir(numero01, numero02));
    } else if (operacao === 'multiplicar') {
      setResultado(multiplicar(numero01, numero02));
    }
  };

  const somar = (x, y) => {
    return x + y;
  };

  const subtrair = (x, y) => {
    return x - y;
  };

  const dividir = (x, y) => {
    return x / y;
  };

  const multiplicar = (x, y) => {
    return x * y;
  };

  const handleButtonClick = (op) => {
    setOperacao(op);
    setBotaoAtivo(op);
  };

  return (
    <div>
      <h1>Calculadora</h1>

      <div>
        <div>
          <label>
            Número 1:
            <input
              type="number"
              value={numero01}
              onChange={(e) => setNumero01(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Número 2:
            <input
              type="number"
              value={numero02}
              onChange={(e) => setNumero02(Number(e.target.value))}
            />
          </label>
        </div>

        <div>
          <button
            className={`btn ${botaoAtivo === 'soma' ? 'active' : ''}`}
            onClick={() => handleButtonClick('soma')}
          >
            +
          </button>
          <button
            className={`btn ${botaoAtivo === 'subtrair' ? 'active' : ''}`}
            onClick={() => handleButtonClick('subtrair')}
          >
            -
          </button>
          <button
            className={`btn ${botaoAtivo === 'dividir' ? 'active' : ''}`}
            onClick={() => handleButtonClick('dividir')}
          >
            /
          </button>
          <button
            className={`btn ${botaoAtivo === 'multiplicar' ? 'active' : ''}`}
            onClick={() => handleButtonClick('multiplicar')}
          >
            *
          </button>
        </div>

        <h3>Resultado: {resultado}</h3>

        <button onClick={calcularResultado}>Calcular</button>
      </div>
    </div>
  );
};

export default FuncoesInternas;
