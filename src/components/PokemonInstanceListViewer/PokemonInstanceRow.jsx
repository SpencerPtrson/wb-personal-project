import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../PokemonSpriteImg";
import SpeciesTypings from "../SpeciesTypings";

export default function PokemonInstanceRow({ pokemonInstance }) {
    console.log(pokemonInstance);
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonTeam, PokemonSpecy } = pokemonInstance;
    
    let name = PokemonSpecy.name.slice(0,1).toUpperCase() + PokemonSpecy.name.slice(1);
    
    console.log(PokemonSpecy);

    return (
        <>
            <tr style={{ border: '1px solid black'}}>
                <td>{PokemonTeam.teamName}</td>
                <td>{PokemonTeam.user.email}</td>
                <PokemonSpriteImg name={PokemonSpecy.name} sprite={PokemonSpecy.sprite} width={150}/>
                <td>{name}</td>
            </tr>
        </>
    )
}