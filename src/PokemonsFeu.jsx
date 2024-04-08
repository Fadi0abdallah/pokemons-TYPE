import { useState } from "react"
const PokemonsFeu = () => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Feu")
        .then((repons) => {
            return repons.json()
        }).then((data) => {
            setPokemonsFeu(data)
        })
    const [pokemonsFeu, setPokemonsFeu] = useState([])

    return (
        <section id="feu">
            <h1 className="h1title">POKEMON FEU</h1>

            {pokemonsFeu.map((elementFeu) => {
                return (
                    <article>
                        <h1 className="namePokemon" >{elementFeu.name}</h1>
                        {elementFeu.apiTypes.map((eleType) => {

                            return (
                                <div className="conte">
                                    <h2>TYPE : {eleType.name}</h2>
                                    <img className="imagetype" src={eleType.image} alt={eleType.name} />

                                </div>


                            )


                        })}
                        <img src={elementFeu.image} alt={elementFeu.name} />
                        <div className="uldiv">
                            <h1 className="h1stats">Stats</h1>
                            <h2>HP :{elementFeu.stats.hp}</h2>
                            <h2>Attack : {elementFeu.stats.attack}</h2>
                            <h2> Defense : {elementFeu.stats.defense}</h2>
                            <h2> special_attack : {elementFeu.stats.special_attack}</h2>
                            <h2>special_defense : {elementFeu.stats.special_defense}</h2>
                            <h2>speed : {elementFeu.stats.speed}</h2>
                        </div>


                    </article>

                )
            })
            }
        </section>


    )
}
export default PokemonsFeu