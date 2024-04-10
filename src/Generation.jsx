import { useEffect, useState } from "react"

const Generation = ({ gener }) => {
    const [generation, setGeneration] = useState([])
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + gener)
            .then((repons) => {
                return repons.json()
                    .then((data) => {
                        setGeneration(data)
                    })
            })
    }, [])
    return (
        <section id={gener}>
            <h1 className="h1title">Pokemons Generation {gener}</h1>
            {
                generation.map((elementGen) => {
                    return (
                        <article key={elementGen.id}>
                            <h2 className="namePokemon">{elementGen.name}</h2>

                            <img src={elementGen.image} alt={elementGen.name} />

                            {elementGen.apiTypes.map((eleType) => {
                                return <h2> type is : {eleType.name}</h2>
                            })}
                            <h2>Generation {elementGen.apiGeneration} </h2>
                        </article>

                    )
                })
            }

        </section>

    )
}
export default Generation