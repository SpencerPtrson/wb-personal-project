import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../../PokemonSpriteImg";
import SpeciesTypings from "../../SpeciesTypings";

export default function TeamRow({ team }) {
    const { teamId, teamName, user, pokemoninstances } = team;

    const spriteImgs = pokemoninstances.map(pokemonInstance => {
        console.log(pokemonInstance);
        return <td><img src={pokemonInstance.PokemonSpecy.sprite} alt={pokemonInstance.PokemonSpecy.name}/></td>
    });

    const pokemonNames = pokemoninstances.map(pokemonInstance => {
        let name = pokemonInstance.PokemonSpecy.name;
        return <td>{name.slice(0,1).toUpperCase() + name.slice(1)}</td>
    })

    console.log(team);
    return (
        <>
            <tr>
                <td><NavLink key={teamName} href={`/teams/${teamId}`} className="nav">{teamName}</NavLink></td>
                <td>{user.email}</td>
                <td>
                    {
                        pokemoninstances.length > 0
                        ? <table className="table">
                            <tbody>
                                <tr>{spriteImgs}</tr>
                                <tr>{pokemonNames}</tr>
                            </tbody>
                        </table>
                        : "This Team Has No Pokemon Yet!"
                    }
                </td>
            </tr>
        </>
    )
}