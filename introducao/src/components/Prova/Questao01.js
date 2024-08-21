const Questao01A = () => {
  // Lista de objetos
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
  ];

  return (
    <div className="container centralizar">
      <h1>Questão 01</h1>
      {/* Passa a lista como prop para o componente Questao01B */}
      <Questao01B lista={lista} />
    </div>
  );
};

function Questao01B({ lista }) {
  // Função para encontrar o maior elemento de cada objeto na lista
  const maiorElemento = () => {
    let maiores = [];
    for (let i = 0; i < lista.length; i++) {
      // Compara as propriedades a, b e c para encontrar o maior valor
      if (lista[i].a > lista[i].b && lista[i].a > lista[i].c)
        maiores[i] = lista[i].a;
      else if (lista[i].b > lista[i].a && lista[i].b > lista[i].c)
        maiores[i] = lista[i].b;
      else maiores[i] = lista[i].c;
    }
    return maiores;
  };

  // Componente para exibir os maiores números encontrados
  const Maiores = () => {
    let maiores = maiorElemento();

    return (
      <div>
        <h3>
          Maiores Números: {maiores[0]}, {maiores[1]}, {maiores[2]}
        </h3>
      </div>
    );
  };

  return <div>{Maiores()}</div>;
}

export default Questao01A;
