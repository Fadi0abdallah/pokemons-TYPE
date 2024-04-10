import './App.css';
import Header from './Header';
import PokemonsFeu from './PokemonsFeu';
import PokemonsEau from './PokemonsEau';
import PokemonsPlante from './pokemonsPlante';
import PokemonsAllType from './PokemonsAllType';
import { type } from '@testing-library/user-event/dist/type';
import TeamPokemons from './TeamPokemons';
import Generation from './Generation';
import PokemonsCherche from './PokemonsCharche';
import PokemonsResistance from './PokemonsResistance';
// import List100Pokemons from './List100Pokemons';
// import PokemonsType from './PokemonsType';


function App() {
  return (
    <>
      <Header type={"type"} gener={"gener"} />
      {/* <List100Pokemons /> */}
      {/* <PokemonsType /> */}
      {/* <PokemonsPlante />
      <PokemonsEau />
      <PokemonsFeu /> */}
      {/* <PokemonsAllType type={"Eau"} /> */}
      {/* <PokemonsAllType type={"Feu"} /> */}
      {/* <PokemonsAllType type={"Plante"} /> */}
      {/* <PokemonsAllType type={"Acier"} /> */}
      {/* <TeamPokemons /> */}
      {/* <Generation gener={1} />
      <Generation gener={2} />
      <Generation gener={3} /> */}
      {/* <PokemonsCherche /> */}
      <PokemonsResistance />
    </>
  );
}

export default App;
