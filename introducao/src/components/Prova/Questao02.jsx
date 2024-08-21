import React, { useState } from 'react';
const Questao02 = () => {
  // armazena a posicao do pokemon
  const [estadoPokemon, setEstadoPokemon] = useState(true);

  // URL da imagem de frente do pokemon
  const pokemonFrente =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png';
  // URL da imagem de costas do pokemon
  const pokemonCosta =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png';

  // a função para alterar a posição do pokemon
  const MudaPokemon = () => {
    setEstadoPokemon(!estadoPokemon);
  };
  return (
    <div className="container centralizar">
      <h1>Questão 02</h1>
      {/*rendenrizando o pokemon se true frente, se false costas*/}
      <img src={estadoPokemon ? pokemonFrente : pokemonCosta} alt="pokemon" />
      {/*o buton que ao clicar muda o estado do pokemon*/}
      <button onClick={MudaPokemon}>
        {estadoPokemon ? 'Mostrar Costas' : 'Mostrar Frente'}
      </button>
    </div>
  );
};

export default Questao02;
