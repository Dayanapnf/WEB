import React from 'react';
import ComPai from './ComPai';

const ComFilho = ({ mensagem, enviarMensagemProPai }) => {
  return (
    <div>
      <h2>Mensagem do pai: {mensagem}</h2>
      <button
        onClick={() => {
          enviarMensagemProPai('oi pai, tudo bom?');
        }}
      >
        Enviar mensagem para o pai
      </button>
    </div>
  );
};

export default ComFilho;
