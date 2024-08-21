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
import ComPai from './components/05ComPaiFilho/ComPai';
import Estados from './components/06Estados/Estados';
import Pokemon from './components/06Estados/Pokemon';
import {
  CompA,
  CompB,
  CompC,
  CompD,
  CompE,
} from './components/08Contexto/Contexto';
import PokemonPrincipal from './components/09PokemonContexto/PokemonPrincipal';
import Efeito from './components/10Efeito/Efeito';

import ComponentePromessa from './components/11Promessas/MinhaPromessa';
import ComponentePai from './components/Atividade02/02Pokemon/ComponentePai';
import ComponenteAvo from './components/Atividade02/02Pokemon/ComponenteAvo';
import ComponenteFilho from './components/Atividade02/02Pokemon/ComponenteFilho';

import Main from './components/CRUD/Main';
import Questao01 from './components/Prova/Questao01';
import Questao02 from './components/Prova/Questao02';

function App() {
  return (
    <div>
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
      {/* <Galaxia nome={'Via láctea'} /> */}
      {/* <CompA /> */}
      {/* <Pai01 />
      <div className="container ">
        <h1 className="centralizar">Meu PC</h1>
        <ul>
          <li>
            <PC.PlacaDeVideo nome={'alguma-placa-mae'} preco={100} />
          </li>
          <li>
            <PC.PlacaMae nome={'alguma-mae'} preco={150} />
          </li>
          <li>
            {' '}
            <PC.Memoria nome={'alguma-memoria'} preco={50} />
          </li>
        </ul>
      </div>
      <div className="container centralizar">
        <World>
          <Arena arena="Tokio Dome – Underground Arena">
            <Hero
              name="Herói  de Tal"
              img="./img/istockphoto-178366909-612x612.jpg"
            />
            <Enemy name="Inimigo de Tal" img="./img/download.jpg" />
          </Arena>
        </World>
      </div> */}

      {/* <ComPai /> */}
      {/* <Estados /> */}
      {/* <div style={{ marginTop: 20 }}>
        <Pokemon />
      </div>
      <PokemonPrincipal /> */}
      {/* <Efeito /> */}
      {/* <ComponentePromessa /> */}
      {/*<ComponenteAvo />*/}
      {/*<Main />*/}
      <Questao01 />
      <Questao02 />
    </div>
  );
}

export default App;
