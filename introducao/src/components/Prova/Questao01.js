const Questao01A = () => {
  //criando a lista
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
  ];

  return (
    <div className="container centralizar">
      <h1>Questão 01</h1>
      <Questao01B lista={lista} />
    </div>
  );
};

const Questao01B = ({ lista }) => {
  const maiorElemento = () => {
    let maiores = [];
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].a > lista[i].b && lista[i].a > lista[i].c)
        maiores[i] = lista[i].a;
      else if (lista[i].b > lista[i].a && lista[i].b > lista[i].c)
        maiores[i] = lista[i].b;
      else maiores[i] = lista[i].c;
    }
    return maiores;
  };

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
};

export default Questao01A;
