import { useState } from "react"
const PokemonsPlante = () => {
    const [pokemonsPlante, setPokemonsPlante] = useState([])

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Plante")
        .then((repons) => {
            return repons.json()
        }).then((data) => {
            setPokemonsPlante(data)
        })
    return (
        <section id="plante">
            <h1 className="h1title">POKEMON PLANTE</h1>
            {pokemonsPlante.map((elementplante) => {
                return (
                    <article>

                        <h1 className="namePokemon">{elementplante.name}</h1>
                        {elementplante.apiTypes.map((eleType) => {
                            return (
                                <div className="conte">
                                    <h2> TYPE : {eleType.name}</h2>
                                    <img className="imagetype" src={eleType.image} alt={eleType.name} />

                                </div>

                            )
                        })}

                        <img src={elementplante.image} alt={elementplante.name} />
                        <div className="uldiv">
                            <h1 className="h1stats">Stats</h1>
                            <h2>HP :   {elementplante.stats.hp}</h2>
                            <h2>Attack :     {elementplante.stats.attack}</h2>
                            <h2> Defense :    {elementplante.stats.defense}</h2>
                            <h2> special_attack :    {elementplante.stats.special_attack}</h2>
                            <h2>special_defense :    {elementplante.stats.special_defense}</h2>
                            <h2>speed :    {elementplante.stats.speed}</h2>
                        </div>

                    </article>

                )
            })
            }
        </section>
    )

}
export default PokemonsPlante