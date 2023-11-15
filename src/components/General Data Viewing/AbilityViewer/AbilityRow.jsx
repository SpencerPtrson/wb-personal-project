import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../../PokemonSpriteImg";
import SpeciesTypings from "../../SpeciesTypings";
import BaseStatsList from '../IndividualSpeciesViewer/BaseStatsList'

export default function AbilityRow({ ability }) {
    console.log(ability);
    let { name, flavorText, shortDescription } = ability;
    name = name.replace(name[0], name[0].toUpperCase());

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{flavorText}</td>
                <td>{shortDescription}</td>
            </tr>
        </>
    );
}