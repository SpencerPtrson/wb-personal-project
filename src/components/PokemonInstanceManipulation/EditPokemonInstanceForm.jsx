import PokemonSpriteImg from "../PokemonSpriteImg";
import PokemonInstanceMoveTable from "../General Data Viewing/PokemonTeamViewer/PokemonInstanceMoveTable";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PokemonSpeciesSelectorTable from "./PokemonSpeciesSelectorTable";

export default function EditPokemonInstanceForm({ pokemonInstance, speciesList, editPokemonFunction }) {
    const email = useSelector(state => state.user.email);
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonTeam, PokemonSpecy, PokemonMoves } = pokemonInstance;
    
    let name = PokemonSpecy.name.slice(0,1).toUpperCase() + PokemonSpecy.name.slice(1);

    console.log(pokemonInstance);
    console.log(speciesList);

    const maxIVValue = 31;
    const minIVValue = 0;
    const maxEVValue = 255;
    const minEVValue = 0;

    const IVs = [hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV];
    const IVCells = IVs.map(ivValue => {
        return <td><input type="number" min={minIVValue} max={maxIVValue} defaultValue={ivValue} placeholder="Anywhere from 0-31"/></td>
    });

    const EVs = [hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV];
    const EVCells = EVs.map(evValue => {
        return <td><input type="number" min={minEVValue} max={maxEVValue} defaultValue={evValue} placeholder="Anywhere from 0-31"/></td>
    });


    const selectOptions = speciesList.map(species => {
        <option value={species.speciesId} style={{backgroundImage: (species.sprite)}}>{species.name}</option>
    })

    return (
        <form>
            <h1><PokemonSpriteImg name={PokemonSpecy.name} sprite={PokemonSpecy.sprite} width={200}/></h1>
            <h1>{name}</h1>

            <select>
                {selectOptions}
            </select>

            <table className="table">
                <thead>
                    <tr>
                        <th>HP IV:</th>
                        <th>ATK IV:</th>
                        <th>DEF IV:</th>
                        <th>SPATK IV:</th>
                        <th>SPDEF IV:</th>
                        <th>SPEED IV:</th>
                    </tr>
                </thead>
                <tbody className="tr-bordered">
                    <tr>
                        {IVCells}
                    </tr>
                </tbody>
            </table>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>HP EV:</th>
                        <th>ATK EV:</th>
                        <th>DEF EV:</th>
                        <th>SPATK EV:</th>
                        <th>SPDEF EV:</th>
                        <th>SPEED EV:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {EVCells}
                    </tr>
                </tbody>
            </table>
            <PokemonInstanceMoveTable moveList={PokemonMoves}/>
        </form>
    )
}