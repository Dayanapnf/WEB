const Disciplina = ({ nome, cargaHoraria, periodo }) => {
  return (
    <div>
      <h3>Nome: {nome}</h3>
      <h3>Carga Horária: {cargaHoraria}</h3>
      <h3>Período: {periodo}</h3>
    </div>
  );
};

export default Disciplina;
