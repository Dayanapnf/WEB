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
import Pai01 from './components/Atividade01/Pai01';
import SistemaSolar from './components/04Children/SistemaSolar';
import Planeta from './components/04Children/Planeta';
import Galaxia from './components/04Children/Galaxia';

import * as PC from './components/Atividade01/MeuPc02';
import { Arena, World, Hero, Enemy } from './components/Atividade01/Batalha03';

/* <HelloWorld />*/
function App() {
  return (
    <div className="App">
      {/* <FuncoesInternas /> */}
      {/* <Loja /> */}
      {/* <Curso /> */}
      {/* <hr />
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

      <Temperatura03 /> */}
      {/* <Pai01 /> */}
      <Galaxia nome={'Via láctea'} />
      {/* <PC.PlacaDeVideo nome={'placamaexr'} preco={100} />
      <PC.PlacaMae nome={'alguma-mae'} preco={150} />
      <PC.Memoria nome={'alguma-memoria'} preco={50} /> */}

      {/* <World>
        <Arena />
        <Arena />
        <Arena />
      </World> */}
      {/* <Arena arena="Tokio Dome – Underground Arena">
        <Hero name="Sicrano de Tal" img="hero.jpg" />
        <Enemy name="Fulano de Tal" img="enemy.png" />
      </Arena> */}
    </div>
  );
}

export default App;
