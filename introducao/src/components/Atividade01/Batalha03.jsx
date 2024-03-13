import React from 'react';
const Hero = ({ name, img, arena }) => {
  return (
    <>
      <h3>Nome: {name} </h3>
      <p>Arena: {arena}</p>
      <div className="centralizar">
        <img style={{ width: 200, height: 300 }} src={img} alt="hero" />
      </div>
    </>
  );
};
const Enemy = ({ name, img, arena }) => {
  return (
    <>
      <h3>Nome: {name} </h3>
      <p>Arena: {arena}</p>
      <div className="centralizar">
        <img style={{ width: 200, height: 300 }} src={img} alt="enemy" />
      </div>
    </>
  );
};
const Arena = ({ arena, children }) => {
  return (
    <div>
      <h2>Arena: {arena}</h2>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { arena });
      })}
    </div>
  );
};

const World = ({ children }) => {
  return children;
};
export { Hero, Arena, Enemy, World };
