import PokemonSpriteImg from "../../PokemonSpriteImg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PokemonInstanceMoveTable from "./PokemonInstanceMoveTable";
import DeleteTeamButton from "../../TeamManagement/DeleteTeamButton";
import EditPokemonInstanceButton from "../../PokemonInstanceManipulation/EditPokemonInstanceButton";
import DeletePokemonInstanceButton from "../../PokemonInstanceManipulation/DeletePokemonInstanceButton";

export default function TeamPokemonInstanceRow({ pokemonInstance, creatorEmail }) {
    const email = useSelector(state => state.user.email);
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonSpecy, PokemonMoves } = pokemonInstance;
    
    let name = PokemonSpecy.name.slice(0,1).toUpperCase() + PokemonSpecy.name.slice(1);

    console.log("TeamPokemonInstanceRow: instance Data:", pokemonInstance);

    return (
        <>
            <tr>
                <td><PokemonSpriteImg name={PokemonSpecy.name} sprite={PokemonSpecy.sprite} width={150}/></td>
                <td>{name}</td>
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
                {email === creatorEmail
                ? <>
                    <td><EditPokemonInstanceButton pokemonInstanceId={pokemonInstance.pokemonInstanceId}/></td> 
                    <td><DeletePokemonInstanceButton pokemonInstanceId={pokemonInstance.pokemonInstanceId}/></td>
                </>
                 
                : <></>}
            </tr>
        </>
    )
}