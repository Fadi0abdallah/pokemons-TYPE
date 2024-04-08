import { useEffect, useState } from "react"
const PokemonsAllType = ({ type }) => {
    const [pokemonsType, setPokemonsType] = useState([])
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
            .then((repons) => {
                return repons.json()
            }).then((data) => {
                setPokemonsType(data)
            })
        console.log("render");
    }, [])

    return (
        <section id={type}>
            <h1 className="h1title">POKEMON {type}</h1>
            {pokemonsType.map((elementtype) => {
                return (
                    <article>

                        <h1 className="namePokemon">{elementtype.name}</h1>
                        {elementtype.apiTypes.map((eleType) => {
                            return (
                                <div className="conte">
                                    <h2> TYPE : {eleType.name}</h2>
                                    <img className="imagetype" src={eleType.image} alt={eleType.name} />

                                </div>

                            )
                        })}

                        <img src={elementtype.image} alt={elementtype.name} />
                        <div className="uldiv">
                            <h1 className="h1stats">Stats</h1>
                            <h2>HP :   {elementtype.stats.hp}</h2>
                            <h2>Attack :     {elementtype.stats.attack}</h2>
                            <h2> Defense :    {elementtype.stats.defense}</h2>
                            <h2> special_attack :    {elementtype.stats.special_attack}</h2>
                            <h2>special_defense :    {elementtype.stats.special_defense}</h2>
                            <h2>speed :    {elementtype.stats.speed}</h2>
                        </div>

                    </article>

                )
            })
            }
        </section>
    )

}
export default PokemonsAllType