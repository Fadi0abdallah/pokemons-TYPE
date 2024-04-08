import './App.css';
import Header from './Header';
import PokemonsFeu from './PokemonsFeu';
import PokemonsEau from './PokemonsEau';
import PokemonsPlante from './pokemonsPlante';
import PokemonsAllType from './PokemonsAllType';
import { type } from '@testing-library/user-event/dist/type';
// import List100Pokemons from './List100Pokemons';
// import PokemonsType from './PokemonsType';


function App() {
  return (
    <>
      <Header type={"type"} />
      {/* <List100Pokemons /> */}
      {/* <PokemonsType /> */}
      {/* <PokemonsPlante />
      <PokemonsEau />
      <PokemonsFeu /> */}
      <PokemonsAllType type={"Eau"} />
      <PokemonsAllType type={"Feu"} />
      <PokemonsAllType type={"Plante"} />
      <PokemonsAllType type={"Acier"} />
    </>
  );
}

export default App;
