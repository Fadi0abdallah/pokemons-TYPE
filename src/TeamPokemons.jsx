import { useEffect, useState } from "react";
const TeamPokemons = () => {
    const [pokemonsTeam, setPokemons] = useState([])
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/random/team")
            .then((response) => {
                return response.json();
            }).then((data) => {
                setPokemons(data);
            })
    }, [])

    return (

        <section >
            <h1 className="h1title">POKEMON Team</h1>
            {pokemonsTeam.map((elementTeam) => {
                return (
                    <article key={elementTeam.id}>

                        <h1 className="namePokemon">{elementTeam.name}</h1>
                        {elementTeam.apiTypes.map((eleTeam) => {
                            return (
                                <div className="conte" key={eleTeam.id}>
                                    <h2> TYPE : {eleTeam.name}</h2>
                                    <img className="imagetype" src={eleTeam.image} alt={eleTeam.name} />

                                </div>

                            )
                        })}

                        <img src={elementTeam.image} alt={elementTeam.name} />
                        <div className="uldiv">
                            <h1 className="h1stats">Stats</h1>
                            <h2>HP :   {elementTeam.stats.HP}</h2>
                            <h2>Attack :     {elementTeam.stats.attack}</h2>
                            <h2> Defense :    {elementTeam.stats.defense}</h2>
                            <h2> special_attack :    {elementTeam.stats.special_attack}</h2>
                            <h2>special_defense :    {elementTeam.stats.special_defense}</h2>
                            <h2>speed :    {elementTeam.stats.speed}</h2>
                        </div>

                    </article>

                )
            })
            }
        </section>
    )
}
export default TeamPokemons