import PokemonSpriteImg from "../../PokemonSpriteImg";
import PokemonInstanceEditButton from "../../PokemonInstanceManipulation/PokemonInstanceEditButton";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function PokemonInstanceRow({ pokemonInstance, isTeamView }) {
    const email = useSelector(state => state.user.email);
    console.log("Pokemon Instance Row:", email);
    console.log(pokemonInstance);
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonTeam, PokemonSpecy } = pokemonInstance;
    
    let name = PokemonSpecy.name.slice(0,1).toUpperCase() + PokemonSpecy.name.slice(1);
    
    console.log(PokemonSpecy);
    console.log("Pokemon Instance Row - Team", PokemonTeam);
    console.log("Pokemon Instance was created by username - ", PokemonTeam.user.email)


    return (
        <>
            <tr style={{ border: '1px solid black'}}>
                {isTeamView ? <td>
                    </td>
                    : <>
                        <td>{PokemonTeam.teamName}</td>
                        <td>{PokemonTeam.user.email}</td>
                    </>
                }
                <td><PokemonSpriteImg name={PokemonSpecy.name} sprite={PokemonSpecy.sprite} width={150}/></td>
                <td>{name}</td>
                <td>
                    <table>
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
                    <table>
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
                {email === PokemonTeam.user.email
                ? <PokemonInstanceEditButton /> 
                : <></>}
            </tr>
        </>
    )
}