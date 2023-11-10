import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../../PokemonSpriteImg";
import SpeciesTypings from "../../SpeciesTypings";
import BaseStatsList from '../IndividualSpeciesViewer/BaseStatsList'

export default function MoveRow({ move }) {
    // const movesLister = SpeciesMoves.map(move => {
    //     const name = move.name.slice(0,1).toUpperCase() + move.name.slice(1);
    //     const type = move.type.slice(0,1).toUpperCase() + move.type.slice(1);
    //     return (<tr>
    //         <td>{name}</td>
    //         <td>{type}</td>
    //         <td>{move.power ? move.power : "N/A"}</td>
    //         <td>{move.moveClass}</td>
    //         <td>{move.flavorText}</td>
    //     </tr>)
    // })



    const {name, type, power, moveClass, shortDescription, flavorText} = move;
    let fixedName = name.slice(0,1).toUpperCase() + name.slice(1);
    let fixedType = type.slice(0,1).toUpperCase() + type.slice(1);
    let fixedMoveClass = moveClass.slice(0,1).toUpperCase() + moveClass.slice(1);

    let fixedDesc = shortDescription.replace(/\$effect_chance%/g, '')

    return (
        <>
            <tr>
                <td>{fixedName}</td>
                <td>{fixedType}</td>
                <td>{power ? move.power : "N/A"}</td>
                <td>{fixedMoveClass}</td>
                <td>{fixedDesc}</td>
            </tr>
        </>
    )
}