import Produto from './Produto';
const Loja = () => {
  return (
    <div>
      <h1>Supermercado Quixadá</h1>
      <hr />
      <Produto nome="sabão" categoria="Higiene" valor={10.99} />
      <hr />
      <Produto nome="bife bovino" categoria="frios" valor={27.0} />
      <hr />
      <Produto nome="abacate" categoria="hortifrut" valor={7.0} />
    </div>
  );
};
export default Loja;
