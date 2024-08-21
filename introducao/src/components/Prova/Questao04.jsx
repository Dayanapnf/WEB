import React, { useEffect, useState } from 'react';

const Questao04 = () => {
  // Estado para armazenar a capital com menor e maior população
  const [capitais, setCapitais] = useState({ menor: '', maior: '' });

  // Função para retornar uma Promise com os dados das capitais
  const fetchDados = async () => {
    try {
      const data = await new Promise((resolve) => {
        resolve([
          { capital: ['Dublin'], population: 4994724 },
          { capital: ['Nicosia'], population: 1207361 },
          { capital: ['Madrid'], population: 47351567 },
        ]);
      });

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

export default Questao04;
