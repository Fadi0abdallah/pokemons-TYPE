import { render } from "@testing-library/react"
import { useState } from "react"

const List100Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
        .then((response) => {
            return response.json();
        }).then((data) => {
            setPokemons(data);
        })


    return (
        <section>

            {pokemons.map((element) => {
                return (
                    <article>
                        <h1>{element.name}</h1>
                        <img src={element.image} alt={element.name} />


                    </article>
                )

            })}
        </section>

    )
}
export default List100Pokemons