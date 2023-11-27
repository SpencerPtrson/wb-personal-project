import PokemonSpriteImg from "../PokemonSpriteImg";
import EditPokemonInstanceButton from "../PokemonInstanceManipulation/EditPokemonInstanceButton";
import DeletePokemonInstanceButton from '../PokemonInstanceManipulation/DeletePokemonInstanceButton';
import PokemonInstanceMoveTable from "./PokemonInstanceMoveTable";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function PokemonInstanceRow({ pokemonInstance, isTeamView }) {
    const email = useSelector(state => state.user.email);
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonTeam, PokemonSpecy, PokemonMoves, ability, PokemonNature } = pokemonInstance;
    
    let name = PokemonSpecy.name.replace(PokemonSpecy.name[0], PokemonSpecy.name[0].toUpperCase());
    
    console.log("PokemonInstanceRow - PokemonTeam:", PokemonTeam);
    // console.log(`Pokemon Moves for pokemon instance: ${pokemonInstance.pokemonInstanceId}`);
    // console.log(PokemonMoves);

    let abilityName = null;
    let natureName = null;
    if (ability) abilityName = ability.name.replace(ability.name[0], ability.name[0].toUpperCase());
    if (PokemonNature) natureName = PokemonNature.name.replace(PokemonNature.name[0], PokemonNature.name[0].toUpperCase());

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
                
                {/* Name / Ability */}
                <td>
                    <h6>Name:</h6>
                    {name}
                    <br />
                    <br />
                    { abilityName
                        ? <>
                            <h5>Ability</h5>
                            <p>{abilityName}</p>
                          </>
                        : <h5>No Specified Ability</h5>
                    }
                    <br />
                    {
                        natureName
                        ? <>
                            <h5>Nature</h5>
                            <p>{natureName}</p>
                        </>
                        : <h5>No Specified Nature</h5>
                    }
                </td>

                {/* IVs */}
                <td>
                    <table className="table-sm subtable">
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

                {/* EVs */}
                <td>
                    <table className="table-sm subtable" >
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

                {/* Moves */}
                <td>
                    <PokemonInstanceMoveTable moveList={PokemonMoves} />
                </td>


                {email === pokemonInstance.PokemonTeam.user.email
                ? <>
                    <td><EditPokemonInstanceButton pokemonInstanceId={pokemonInstance.pokemonInstanceId}/></td>
                    <td><DeletePokemonInstanceButton pokemonInstanceId={pokemonInstance.pokemonInstanceId}/></td>
                </>
                : <>
                    <td></td>
                    <td></td>
                </>}
            </tr>
        </>
    )
}