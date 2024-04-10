import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <ul>

                {<li><Link to="/">Home Page</Link></li>}
                <li><a href="">|</a></li>
                {<li><Link to="/serche">Serche Pokemons </Link></li>}
                <li><a href="">|</a></li>
                {<li><Link to="/ResistancePokemon">Pokemons Resistance</Link></li>}
                <li><a href="">|</a></li>
                {/* <li><a href="#Acier">Pokemons Acier</a></li> */}
                {<li>< Link to="/Generation">Pokemons Generation 5</Link></li>
               /* <li><a href="">|</a></li>
                <li><a href="#2">Pokemons Generation 2</a></li>
                <li><a href="#3">Pokemons Generation 3</a></li> */}
            </ul>
            <img className="logoimage" src="https://i.pinimg.com/originals/c7/d7/02/c7d70249300e5473a14ded83c694d242.png" alt='logo' />

        </header>
    )
}
export default Header