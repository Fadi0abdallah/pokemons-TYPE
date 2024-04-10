import { useEffect, useState } from "react";

const PokemonsResistance = () => {
    const [pokemons, setPokemons] = useState([])
    const [typePokempn, setTyepPokemon] = useState([])
    const handlSubmit = (event) => {
        event.preventDefault();
        const pokemonResistanceSelect = event.target.type.value
        console.log(pokemonResistanceSelect);
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + pokemonResistanceSelect)
            .then((response) => {
                return response.json()

            }).then((data) => {
                setPokemons(data)
            })
    }
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/types")
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                setTyepPokemon(data)
            })


    }, []);

    return (

        <section>
            <article>
                <form onSubmit={handlSubmit}>
                    <label >Choose Tyeps:</label>
                    <select name="type">
                        {
                            typePokempn.map((type) => {
                                return (
                                    <option value={type.name}>{type.name}</option>
                                )
                            })
                        }
                        {/* <option value="Feu">Feu</option>
                        <option value="Eau">Eau</option>
                        <option value="Plante">Plante</option>
                        <option value="Acier">Acier</option>
                        <option value="vol">Vol</option> */}
                    </select>
                    <input type="submit" />
                </form>
            </article>


            {pokemons.map((pokemon) => {
                return (
                    <article key={pokemon.id} >
                        <h2 className="namePokemon">{pokemon.name}</h2>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </article>

                )
            })}



        </section>

    )
}
export default PokemonsResistance