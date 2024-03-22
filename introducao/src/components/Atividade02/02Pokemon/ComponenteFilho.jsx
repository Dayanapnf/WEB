import React from 'react';
import { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const ComponenteFilho = () => {
  //const { numero } = useContext(PokemonContext);
  const { contador } = useContext(PokemonContext);
  const url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  return (
    <div>
      <h2>Componente Filho</h2>
      <img src={url + (contador + 2) + '.png'} alt="pokemon3" />
    </div>
  );
};

export default ComponenteFilho;
