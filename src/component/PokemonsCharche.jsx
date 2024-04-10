import { useState } from "react"


const PokemonsCherche = () => {
    const [charchePokemon, setCherchePokemon] = useState("")


    const namePokemonscherche = (e) => {
        e.preventDefault()
        let changeNamePokemon = e.target.changePokemon.value

        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + changeNamePokemon)
            .then((respons) => {
                if (respons.status === 200) {
                    return respons.json()
                } else {
                    return false
                }
            })
            .then((data) => {
                setCherchePokemon(data)
            })

    }

    return (
        <section >
            <article>


                {<form onSubmit={namePokemonscherche}>
                    <label htmlFor="site-search">Search the Pokemon:</label>
                    <input type="text" name="changePokemon" />
                    <input type="submit" />
                </form>
                }
            </article>

            {charchePokemon === false && <p>Pokemon non trouvé</p>}

            {charchePokemon &&
                <article key={charchePokemon.id} >
                    <h2 className="namePokemon">{charchePokemon.name}</h2>

                    <img src={charchePokemon.image} alt={charchePokemon.name} />
                </article>

            }





        </section>


    )


}
export default PokemonsCherche