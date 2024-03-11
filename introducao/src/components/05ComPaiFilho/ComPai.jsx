import ComFilho from './ComFilho';

const ComPai = () => {
  function receberMensagemDoFilho(mensagem) {
    alert('Recebi do meu filho: ' + mensagem);
  }
  return (
    <>
      <ComFilho
        mensagem={'Oi,filho'}
        enviarMensagemProPai={receberMensagemDoFilho}
      />
    </>
  );
};

export default ComPai;
