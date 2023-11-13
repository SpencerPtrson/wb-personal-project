import { NavLink } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import DeleteTeamButton from "../../TeamManagement/DeleteTeamButton";

export default function TeamRow({ team }) {
    const { teamId, teamName, user, pokemoninstances } = team;
    const email = useSelector(state => state.user.email);

    const spriteImgs = pokemoninstances?.map(pokemonInstance => {
        return <td><img src={pokemonInstance.PokemonSpecy.sprite} alt={pokemonInstance.PokemonSpecy.name}/></td>
    });

    const pokemonNames = pokemoninstances?.map(pokemonInstance => {
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
                {email === team.user.email
                ? <td><DeleteTeamButton teamId={teamId}/></td> 
                : <></>}
            </tr>
        </>
    )
}