import './App.css';
import Header from './Header';
import PokemonsFeu from './PokemonsFeu';
import PokemonsEau from './PokemonsEau';
import PokemonsPlante from './pokemonsPlante';
// import List100Pokemons from './List100Pokemons';
// import PokemonsType from './PokemonsType';


function App() {
  return (
    <>
      <Header />
      {/* <List100Pokemons /> */}
      {/* <PokemonsType /> */}
      <PokemonsPlante />
      <PokemonsEau />
      <PokemonsFeu />
    </>
  );
}

export default App;
