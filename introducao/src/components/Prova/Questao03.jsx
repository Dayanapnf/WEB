import React, { useEffect, useState } from 'react';
const Questao03 = () => {
  // Estado para armazenar a capital com menor e maior população
  const [capitais, setCapitais] = useState({ menor: '', maior: '' });

  // Função para buscar os dados e calcular a capital com menor e maior população
  const fetchDados = async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/region/europe?fields=capital,population',
      );
      const data = await response.json();

      // Ordenando os dados de população
      const ordena = data.sort((a, b) => a.population - b.population);

      // Definindo a capital com menor população e a com maior população
      setCapitais({
        menor: ordena[0].capital[0],
        maior: ordena[ordena.length - 1].capital[0],
      });
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };
  useEffect(() => {
    fetchDados();
  }, []);

  return (
    <div className="container centralizar">
      {/* Exibindo a capital com menor população */}
      <h3>Capital com menor população: {capitais.menor}</h3>
      {/* Exibindo a capital com maior população */}
      <h3>Capital com maior população: {capitais.maior}</h3>
    </div>
  );
};

export default Questao03;
