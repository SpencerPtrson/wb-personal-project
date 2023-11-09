import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../PokemonSpriteImg";
import SpeciesTypings from "../SpeciesTypings";

export default function PokemonSpeciesSelectableRow({ species: {speciesId, name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED} }) {
    name = name.slice(0,1).toUpperCase() + name.slice(1);
    return (
        <>
            <tr>
                <td><PokemonSpriteImg name={name} sprite={sprite}/></td>
                <td><NavLink key={name} href={`/pokemonspecies/${speciesId}`}>{name}</NavLink></td>
                <td width={50}></td>
                <SpeciesTypings type1={type1} type2={type2}/>
                
                <td width={50}></td>
                <td>
                    <table>
                        <thead>
                            <tr>
                                <th>Base Stat Total</th>
                                <th>HP</th>
                                <th>ATK</th>
                                <th>DEF</th>
                                <th>SPATK</th>
                                <th>SPDEF</th>
                                <th>SPEED</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{baseHP + baseATK + baseDEF + baseSPATK + baseSPDEF + baseSPEED}</td>
                                <td>{baseHP}</td>
                                <td>{baseATK}</td>
                                <td>{baseDEF}</td>
                                <td>{baseSPATK}</td>
                                <td>{baseSPDEF}</td>
                                <td>{baseSPEED}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </>
    )
}