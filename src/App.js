import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './component/Header';
// import PokemonsFeu from './component/PokemonsFeu';
// import PokemonsEau from './component/PokemonsEau';
// import PokemonsPlante from './component/pokemonsPlante';
// import PokemonsAllType from './component/PokemonsAllType';
import { type } from '@testing-library/user-event/dist/type';

import HomePage from './Page/HomePage';
import Serchepage from './Page/SerchePage';
import PokemonResistancePage from './Page/PokemonResistancePage';
import GenerationPage from './Page/GenerationPage';
// import List100Pokemons from './List100Pokemons';
// import PokemonsType from './PokemonsType';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/serche" element={<Serchepage />} />
        <Route path="/ResistancePokemon" element={<PokemonResistancePage />} />
        <Route path="/Generation" element={<GenerationPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
{/* <Header type={"type"} gener={"gener"} /> */ }
{/* <List100Pokemons /> */ }
{/* <PokemonsType /> */ }
{/* <PokemonsPlante />
<PokemonsEau />
<PokemonsFeu /> */}
{/* <PokemonsAllType type={"Eau"} /> */ }
{/* <PokemonsAllType type={"Feu"} /> */ }
{/* <PokemonsAllType type={"Plante"} /> */ }
{/* <PokemonsAllType type={"Acier"} /> */ }
{/* <TeamPokemons /> */ }
{/* <Generation gener={1} />
<Generation gener={2} />
<Generation gener={3} /> */}
{/* <PokemonsCherche /> */ }
{/* <PokemonsResistance /> */ }