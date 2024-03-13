import React, { useContext, useState } from 'react';
import { PokemonContexto } from './PokemonContexto';

const PokemonIncrementar = () => {
  const { id } = useContext(PokemonContexto);
  const { setId } = useContext(PokemonContexto);

  function evoluir() {
    setId(id + 1);
  }

  return (
    <div>
      <button onClick={evoluir} className="btn">
        +
      </button>
    </div>
  );
};

export default PokemonIncrementar;
