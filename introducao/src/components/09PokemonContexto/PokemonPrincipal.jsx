import React, { useState } from 'react';
import { useContext } from 'react';
import { PokemonContexto } from '../09PokemonContexto/PokemonContexto';
import PokemonImagem from './PokemonImagem';

const PokemonPrincipal = () => {
  const [id, setId] = useState(1);
  return (
    <div>
      <PokemonContexto.Provider value={{ id, setId }}>
        <PokemonImagem />
      </PokemonContexto.Provider>
    </div>
  );
};

export default PokemonPrincipal;
