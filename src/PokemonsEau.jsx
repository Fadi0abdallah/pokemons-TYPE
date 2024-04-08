import { useState } from "react"

const PokemonsEau = () => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau")
        .then((repons) => {
            return repons.json()
        }).then((data) => {
            setPokemonsEau(data)
        })
    const [pokemonsEau, setPokemonsEau] = useState([])


    return (

        <section id="eau">
            <h1 className="h1title">POKEMONS EAU</h1>

            {pokemonsEau.map((elementEau) => {
                return (
                    <article>
                        <h1 className="namePokemon">{elementEau.name}</h1>
                        {elementEau.apiTypes.map((eleType) => {
                            return (
                                <div className="conte">
                                    <h2>TYPE : {eleType.name}</h2>
                                    <img className="imagetype" src={eleType.image} alt={eleType.name} />

                                </div>

                            )
                        })}

                        <img src={elementEau.image} alt={elementEau.name} />
                        <div className="uldiv">
                            <h1 className="h1stats">Stats</h1>
                            <h2>HP :{elementEau.stats.hp}</h2>
                            <h2>Attack : {elementEau.stats.attack}</h2>
                            <h2> Defense : {elementEau.stats.defense}</h2>
                            <h2> special_attack : {elementEau.stats.special_attack}</h2>
                            <h2>special_defense : {elementEau.stats.special_defense}</h2>
                            <h2>speed : {elementEau.stats.speed}</h2>
                        </div>


                    </article>

                )
            })
            }
        </section>
    )
}
export default PokemonsEau