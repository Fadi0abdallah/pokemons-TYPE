import { useState } from "react"

const PokemonsType = () => {
    const [typePokemons, setTypepokemons] = useState([])
    fetch("https://pokebuildapi.fr/api/v1/types")
        .then((repons) => {
            return repons.json()
        })
        .then((data) => {
            setTypepokemons(data)
        })
    console.log(typePokemons);
    return (

        typePokemons.map((element) => {
            return (
                <h1>{element.englishName}</h1>
            )

        })
    )

}
export default PokemonsType