import { useContext, useState } from 'react';
import { PokemonContexto } from './PokemonContexto';

const PokemonDecrementar = ({ retroceder }) => {
  const { id } = useContext(PokemonContexto);
  const { setId } = useContext(PokemonContexto);

  function retroceder() {
    if (id <= 1) {
      setId(1);
    } else {
      setId(id - 1);
    }
  }
  return (
    <div>
      <button onClick={retroceder} className="btn">
        -
      </button>
    </div>
  );
};

export default PokemonDecrementar;
