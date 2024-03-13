import React from 'react';

const CompA = () => {
  const variavelDeA = 'Variável de A';
  return (
    <div>
      <h1>Sou pai de B e C</h1>
      <CompB variavelDeA={variavelDeA} />
      <CompC variavelDeA={variavelDeA} />
    </div>
  );
};
const CompB = ({ variavelDeA }) => {
  return (
    <div>
      <h3>B:{variavelDeA}</h3>
    </div>
  );
};
const CompC = ({ variavelDeA }) => {
  return (
    <div>
      <CompD variavelDeA={variavelDeA} />
    </div>
  );
};
const CompD = ({ variavelDeA }) => {
  return (
    <div>
      <CompE variavelDeA={variavelDeA} />
    </div>
  );
};
const CompE = ({ variavelDeA }) => {
  return (
    <div>
      <h3>E:{variavelDeA}</h3>
    </div>
  );
};

export { CompA, CompB, CompC, CompD, CompE };
