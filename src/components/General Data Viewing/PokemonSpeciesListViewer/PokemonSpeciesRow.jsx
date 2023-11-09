import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../../PokemonSpriteImg";
import SpeciesTypings from "../../SpeciesTypings";
import BaseStatsList from '../IndividualSpeciesViewer/BaseStatsList'

export default function PokemonSpeciesRow({ species: {speciesId, name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED} }) {
    name = name.slice(0,1).toUpperCase() + name.slice(1);
    const statPad = 80;

    return (
        <>
            <tr>
                <td><PokemonSpriteImg name={name} sprite={sprite}/></td>
                <td><NavLink key={name} href={`/pokemonspecies/${speciesId}`}>{name}</NavLink></td>
                <SpeciesTypings type1={type1} type2={type2}/>
                <td>
                    <BaseStatsList baseHP={baseHP} baseATK={baseATK} baseDEF={baseDEF} baseSPATK={baseSPATK} baseSPDEF={baseSPDEF} baseSPEED={baseSPEED}/>
                </td>
            </tr>
        </>
    )
}