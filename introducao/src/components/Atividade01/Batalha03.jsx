import React from 'react';
const Hero = ({ name, img, arena }) => {
  return (
    <>
      <h3>Nome: {name} </h3>
      <p>Arena: {arena}</p>
      <img src={img} alt="hero" />
    </>
  );
};
const Enemy = ({ name, img, arena }) => {
  return (
    <>
      <h3>Nome: {name} </h3>
      <p>Arena: {arena}</p>
      <img src={img} alt="hero" />
    </>
  );
};
const Arena = ({ arena, children }) => {
  return (
    <div>
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
