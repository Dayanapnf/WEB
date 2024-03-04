import { useState } from 'react';
import './style.css';

const Temperatura03 = () => {
  let c;
  const celsiusParaFahrenheit = (c) => c * 1.8 + 32;

  const fahrenheitParaCelsius = (f) => {
    return (c = ((f - 32) * 5) / 9);
  };
  const kelvin = (k) => {
    const c = k - 273;
    const f = 1.8 * (k - 273) + 32;
    return { fahrenheit: f, celsius: c };
  };
  return (
    <div className="container centralizar">
      <h1>Resultado Celsius para Fahrenheit = {celsiusParaFahrenheit(23)}</h1>
      <h1>Resultado Fahrenheit para Celsius= {fahrenheitParaCelsius(230)}</h1>
      <h1> Resutlado kelvin para Fahrenheit = {kelvin(550).fahrenheit}</h1>
      <h1> Resultado de kelvin para Celsius = {kelvin(550).celsius}</h1>
    </div>
  );
};

export default Temperatura03;
