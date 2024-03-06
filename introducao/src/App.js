import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/01HelloWorld/HelloWorld';
import FuncoesInternas from './components/02FuncoesInternas/FuncoesInternas';
import Loja from './components/03Props/Loja';
import Curso from './components/01Atividade/Curso';
import {
  MeusDados,
  MeusDadosArrowS,
  MeusDadosClass,
  MeusDadosFunction,
} from './components/Atividade00/MeusDados01';
import MeusDados02 from './components/Atividade00/MeusDados02';
import Temperatura03 from './components/Atividade00/Temperatura03';

/* <HelloWorld />*/
function App() {
  return (
    <div className="App">
      {/* <FuncoesInternas /> */}
      {/* <Loja /> */}
      <Curso />
      <hr />
      <MeusDados />
      <hr />
      <MeusDadosArrowS />
      <hr />
      <MeusDadosFunction />
      <hr />
      <MeusDadosClass />
      <hr />
      <MeusDados02
        nome="Dayana Priscilla Nunes F Costa"
        curso="SI"
        universidade="UFC"
      />
      <hr />

      <Temperatura03 />
    </div>
  );
}

export default App;
