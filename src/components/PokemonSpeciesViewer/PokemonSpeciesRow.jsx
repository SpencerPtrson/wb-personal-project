import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../PokemonDetails/PokemonSpriteImg";
import SpeciesTypings from "../PokemonDetails/SpeciesTypings";

export default function PokemonSpeciesRow({ species: {speciesId, name, sprite, type1, type2} }) {
    name = name.slice(0,1).toUpperCase() + name.slice(1);    
    return (
        <>
            <tr>
                <td><PokemonSpriteImg name={name} sprite={sprite}/></td>
                <td><NavLink key={name} href={`/pokemonspecies/${speciesId}`}>{name}</NavLink></td>
                <td width={100}></td>
                <SpeciesTypings type1={type1} type2={type2}/>
            </tr>
        </>
    )
}