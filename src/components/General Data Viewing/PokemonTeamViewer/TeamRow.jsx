import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../../PokemonSpriteImg";
import SpeciesTypings from "../../SpeciesTypings";

export default function TeamRow({ team }) {
    console.log(team);
    const { teamId, teamName } = team;
    console.log(teamId);
    return (
        <>
            <tr>
                <td><NavLink key={teamName} href={`/teams/${teamId}`}>{teamName}</NavLink></td>
            </tr>
        </>
    )
}