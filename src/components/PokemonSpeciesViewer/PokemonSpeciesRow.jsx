import { NavLink } from "react-bootstrap";

export default function PokemonSpeciesRow({ species: {speciesId, name, sprite} }) {
    name = name.slice(0,1).toUpperCase() + name.slice(1);    
    return (
        <>
            <tr>
                <td><img src={sprite} alt={name}/></td>
                <td><NavLink key={name} href={`/pokemonspecies/${speciesId}`}>{name}</NavLink></td>
            </tr>
        </>
    )
}