import React, { useState } from 'react';

const Pokemon = () => {
  let url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  const [contador, setContador] = useState(1);
  const [mensagem, setMensagem] = useState('');
  const [inputValue, setInputValue] = useState('');

  function evoluir() {
    setContador(contador + 1);
    setMensagem('');
  }
  function retroceder() {
    if (contador <= 1) {
      setContador(1);
      setMensagem('Não é possível voltar!');
    } else {
      setContador(contador - 1);
      setMensagem('');
    }
  }
  function pegarValorDoInput(e) {
    setInputValue(e.target.value);
  }
  function mudarContador() {
    const newValue = Number(inputValue);
    if (!isNaN(newValue) && newValue !== 0) {
      setContador(newValue);
    } else {
      setContador(1);
    }
  }
  return (
    <div className="container">
      <h3>{contador}</h3>
      <img src={url + contador + '.png'} alt="pokemon" width={200} />
      <button onClick={retroceder} className="btn">
        -
      </button>
      <button onClick={evoluir} className="btn">
        +
      </button>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <label>Digite um número:</label>
        <input name="myInput" value={inputValue} onChange={pegarValorDoInput} />
      </div>
      <div style={{ textAlign: 'right' }}>
        <button onClick={mudarContador}>Definir contador</button>
      </div>
      <p>{mensagem}</p>
    </div>
  );
};

export default Pokemon;
