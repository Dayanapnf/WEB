import React, { useContext, useEffect, useState } from 'react';
import PokemonIncrementar from '../09PokemonContexto/PokemonIncrementar';
import PokemonDecrementar from '../09PokemonContexto/PokemonDecrementar';
import { PokemonContexto } from './PokemonContexto';

const PoKemonImagem = () => {
  const { id } = useContext(PokemonContexto);
  const [mensagem, setMensagem] = useState('');
  const url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  useEffect(() => {
    if (id == 1) {
      setMensagem('Não é possível voltar');
    } else {
      setMensagem('');
    }
  }, [id]);
  return (
    <div className="container">
      <h3>{id}</h3>
      <img src={url + id + '.png'} alt="pokemon" width={200} />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <PokemonDecrementar />
        <PokemonIncrementar />
      </div>

      <p>{mensagem}</p>
    </div>
  );
};

export default PoKemonImagem;
