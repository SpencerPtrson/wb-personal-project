import { NavLink } from "react-bootstrap";
import PokemonSpriteImg from "../PokemonSpriteImg";
import SpeciesTypings from "../SpeciesTypings";

export default function PokemonSpeciesSelectableRow({ species: {speciesId, name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED} }) {
    name = name.slice(0,1).toUpperCase() + name.slice(1);
    const statPad = 80;
    return (
        <>
            <tr style={{borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                <td><PokemonSpriteImg name={name} sprite={sprite}/></td>
                <td><NavLink key={name} href={`/pokemonspecies/${speciesId}`}>{name}</NavLink></td>
                <td width={50}></td>
                <SpeciesTypings type1={type1} type2={type2}/>
                
                <td width={50}></td>
                <td>
                    <table>
                        <thead>
                            <tr>
                                <th style={{margin: statPad}} width={statPad}>Base Stat Total</th>
                                <th width={statPad}>HP</th>
                                <th width={statPad}>ATK</th>
                                <th width={statPad}>DEF</th>
                                <th width={statPad}>SPATK</th>
                                <th width={statPad}>SPDEF</th>
                                <th width={statPad}>SPEED</th>
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