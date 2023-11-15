import PokemonSpriteImg from "../../PokemonSpriteImg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PokemonInstanceMoveTable from "./PokemonInstanceMoveTable";
import EditPokemonInstanceButton from "../../PokemonInstanceManipulation/EditPokemonInstanceButton";
import DeletePokemonInstanceButton from "../../PokemonInstanceManipulation/DeletePokemonInstanceButton";

export default function TeamPokemonInstanceRow({ pokemonInstance, creatorEmail }) {
    const email = useSelector(state => state.user.email);
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonSpecy, PokemonMoves, ability } = pokemonInstance;
    
    let name = PokemonSpecy.name.slice(0,1).toUpperCase() + PokemonSpecy.name.slice(1);
    console.log("TeamPokemonInstanceRow: instance Data:", pokemonInstance);
    console.log(`Ability for ${PokemonSpecy?.name}: ${ability?.name}`)
    
    let abilityName = null;
    if (ability) abilityName = ability.name.replace(ability.name[0], ability.name[0].toUpperCase()); 
    
    return (
        <>
            <tr>
                <td><PokemonSpriteImg name={PokemonSpecy.name} sprite={PokemonSpecy.sprite} width={150}/></td>
                <td>
                    {name}
                    <br />
                    <br />
                    { abilityName
                        ? <>
                            <h5>Ability</h5>
                            <p>{abilityName}</p>
                          </>
                        : <h6>No Specified Ability</h6>
                    }


                </td>
                <td>
                    <table className="table-sm">
                        <tbody>
                            <tr><td>HP: {hpIV}</td></tr>
                            <tr><td>Attack: {atkIV}</td></tr>
                            <tr><td>Defense: {defIV}</td></tr>
                            <tr><td>Special Attack: {spATKIV}</td></tr>
                            <tr><td>Special Defense: {spDEFIV}</td></tr>
                            <tr><td>Speed: {speedIV}</td></tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table className="table-sm">
                        <tbody>
                            <tr><td>HP: {hpEV}</td></tr>
                            <tr><td>Attack: {atkEV}</td></tr>
                            <tr><td>Defense: {defEV}</td></tr>
                            <tr><td>Special Attack: {spATKEV}</td></tr>
                            <tr><td>Special Defense: {spDEFEV}</td></tr>
                            <tr><td>Speed: {speedEV}</td></tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <PokemonInstanceMoveTable moveList={PokemonMoves}/>
                </td>
                <td>
                    {email === creatorEmail
                        ? <>
                            <br />
                            <EditPokemonInstanceButton pokemonInstanceId={pokemonInstance.pokemonInstanceId}/>
                            <br />
                            <br />
                            <DeletePokemonInstanceButton pokemonInstanceId={pokemonInstance.pokemonInstanceId}/>
                          </>
                        : <></>
                    }
                </td>
            </tr>
        </>
    )
}