const Produto = (props) => {
  const { nome, categoria, valor } = props;
  return (
    <div>
      <h3>Nome: {nome}</h3>
      <h3>Categoria: {categoria}</h3>
      <h3>Preço: R$ {valor}</h3>
    </div>
  );
};
export default Produto;
