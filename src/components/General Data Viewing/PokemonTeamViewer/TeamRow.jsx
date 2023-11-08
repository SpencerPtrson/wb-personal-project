import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../../PokemonSpriteImg";
import SpeciesTypings from "../../SpeciesTypings";

export default function TeamRow({ team }) {
    const { teamId, teamName } = team;
    return (
        <>
            <tr>
                <td><NavLink key={teamName} href={`/teams/${teamId}`}>{teamName}</NavLink></td>
            </tr>
        </>
    )
}