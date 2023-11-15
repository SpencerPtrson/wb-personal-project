import PokemonSpriteImg from "../../PokemonSpriteImg";
import EditPokemonInstanceButton from "../../PokemonInstanceManipulation/EditPokemonInstanceButton";
import DeletePokemonInstanceButton from '../../PokemonInstanceManipulation/DeletePokemonInstanceButton';
import PokemonInstanceMoveTable from "../PokemonTeamViewer/PokemonInstanceMoveTable";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function PokemonInstanceRow({ pokemonInstance, isTeamView }) {
    const email = useSelector(state => state.user.email);
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonTeam, PokemonSpecy, PokemonMoves, ability } = pokemonInstance;
    
    let name = PokemonSpecy.name.replace(PokemonSpecy.name[0], PokemonSpecy.name[0].toUpperCase());

    let abilityName = null;
    if (ability) abilityName = ability.name.replace(ability.name[0], ability.name[0].toUpperCase());

    console.log(pokemonInstance);
    return (
        <>
            <tr>
                {isTeamView ? <>
                    </>
                    : <>
                        <td>{PokemonTeam.teamName}</td>
                        <td>{pokemonInstance.PokemonTeam.user.email}</td>
                    </>
                }
                <td><PokemonSpriteImg name={PokemonSpecy.name} sprite={PokemonSpecy.sprite} width={150}/></td>
                <td>
                    {name}
                    { abilityName
                        ? <>
                            <br />
                            <br />
                            <h6>Ability</h6>
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
                {email === pokemonInstance.PokemonTeam.user.email
                ? <>
                    <td><EditPokemonInstanceButton pokemonInstanceId={pokemonInstance.pokemonInstanceId}/></td>
                    <td><DeletePokemonInstanceButton pokemonInstance={pokemonInstance.pokemonInstanceId}/></td>
                </>
                : <></>}
            </tr>
        </>
    )
}