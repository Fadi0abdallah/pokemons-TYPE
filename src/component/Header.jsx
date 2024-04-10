
const Header = () => {
    return (
        <header>
            <ul>

                {<li><a href="http://localhost:3002/">Home Page</a></li>}
                <li><a href="">|</a></li>
                {<li><a href="http://localhost:3002/serche">Serche Pokemons </a></li>}
                <li><a href="">|</a></li>
                {<li><a href="http://localhost:3002/ResistancePokemon">Pokemons Resistance</a></li>}
                <li><a href="">|</a></li>
                {/* <li><a href="#Acier">Pokemons Acier</a></li> */}
                {<li><a href="http://localhost:3002/Generation">Pokemons Generation 5</a></li>
               /* <li><a href="">|</a></li>
                <li><a href="#2">Pokemons Generation 2</a></li>
                <li><a href="#3">Pokemons Generation 3</a></li> */}
            </ul>
            <img className="logoimage" src="https://i.pinimg.com/originals/c7/d7/02/c7d70249300e5473a14ded83c694d242.png" alt='logo' />

        </header>
    )
}
export default Header