import React, { useContext } from 'react';
import ComponenteFilho from './ComponenteFilho';
import { PokemonContext } from './PokemonContext';

const ComponentePai = () => {
  //const { numero } = useContext(PokemonContext);
  const { contador } = useContext(PokemonContext);
  const url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  return (
    <div>
      <h2>Componente Pai</h2>
      <img src={url + (contador + 1) + '.png'} alt="pokemon" />
      <ComponenteFilho />
    </div>
  );
};

export default ComponentePai;
