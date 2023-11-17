import PokemonSpriteImg from "../../PokemonSpriteImg";
import SpeciesTypings from "../../SpeciesTypings";
import BaseStatsList from '../../BaseStatsList'

export default function EditPokemonInstanceSelectSpeciesRow({ species: {speciesId, name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED}, state, setStateVals }) {
    name = name.slice(0,1).toUpperCase() + name.slice(1);
    return (
        <>
            <tr key={speciesId} onClick={(e) => setStateVals({...state, speciesId: speciesId, name: name, imgUrl: sprite, 
                                                                baseHP: baseHP, baseATK: baseATK, baseDEF: baseDEF, baseSPATK: baseSPATK, baseSPDEF, baseSPDEF, baseSPEED, baseSPEED})}>
                <td><PokemonSpriteImg name={name} sprite={sprite}/></td>
                <td>{name}</td>
                <SpeciesTypings type1={type1} type2={type2}/>
                <td>
                    <BaseStatsList baseHP={baseHP} baseATK={baseATK} baseDEF={baseDEF} baseSPATK={baseSPATK} baseSPDEF={baseSPDEF} baseSPEED={baseSPEED}/>
                </td>
            </tr>
        </>
    )
}