import React, { useState } from 'react';
import ComponentePai from './ComponentePai';
import { PokemonContext } from './PokemonContext';

const ComponenteAvo = () => {
  //const [numero, setNumero] = useState(1);
  const [contador, setContador] = useState(1);
  const url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  return (
    <div className="container">
      <h2>Componente Avô</h2>
      <img src={url + contador + '.png'} alt="pokemon1" />
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      {/* <PokemonContext.Provider value={{ numero:contador }}> */}
      <PokemonContext.Provider value={{ contador }}>
        <ComponentePai />
      </PokemonContext.Provider>
    </div>
  );
};

export default ComponenteAvo;
