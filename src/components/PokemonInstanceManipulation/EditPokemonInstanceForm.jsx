import PokemonSpriteImg from "../PokemonSpriteImg";
import PokemonInstanceMoveTable from "../PokemonInstances/PokemonInstanceMoveTable";
import ScrollableSpeciesTable from "./ScrollableSpeciesTable";
import { useState } from "react";
import { Button } from "react-bootstrap";


export default function EditPokemonInstanceForm({ pokemonInstance, speciesList, editPokemonFunction }) {
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonSpecy, PokemonMoves, abilityId, natureId,
            imgUrl } = pokemonInstance;
    const speciesId = PokemonSpecy.speciesId;
    console.log(pokemonInstance);

    // // STATE VARIABLES
    const [state, setState] = useState({ hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
                                         hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV, 
                                         speciesId, abilityId, natureId});


    
    let name = PokemonSpecy.name.replace(PokemonSpecy.name[0], PokemonSpecy.name[0].toUpperCase());

    console.log(pokemonInstance);
    console.log(speciesList);
    console.log("State:", state);

    const maxIVValue = 31;
    const minIVValue = 0;
    const maxEVValue = 255;
    const minEVValue = 0;

    const ivArr = [["hpIV", hpIV], ["atkIV", atkIV], ["defIV", defIV], ["spATKIV", spATKIV], ["spDEFIV", spDEFIV], ["speedIV", speedIV]];
    const IVCells = ivArr.map(ivValue => {
        const key = ivValue[0];
        return <td>
            <input type="number" min={minIVValue} max={maxIVValue} defaultValue={ivValue[1]} placeholder="Anywhere from 0-31" onChange={(e) => setState({...state, [key]: e.target.value})}/>
        </td>
    });

    const evArr = [["hpEV", hpEV], ["atkEV", atkEV], ["defEV", defIV], ["spATKEV", spATKEV], ["spDEFEV", spDEFEV], ["speedEV", speedEV]];
    const EVCells = evArr.map(evValue => {
        const key = evValue[0];
        return <td>
            <input type="number" min={minEVValue} max={maxEVValue} defaultValue={evValue[1]} placeholder="Anywhere from 0-31" onChange={(e) => setState({...state, [key]: e.target.value})}/>
        </td>
    });


    return (
        <form>
            <Button onClick={e => {
                e.preventDefault();
                editPokemonFunction(pokemonInstance.pokemonInstanceId, {

                });
            }}>
                Save Changes
            </Button>

            <h1><PokemonSpriteImg name={PokemonSpecy.name} sprite={PokemonSpecy.sprite} width={200}/></h1>
            <h1>{name}</h1>

            <ScrollableSpeciesTable speciesList={speciesList} setStateVals={setState} />

            {/* IV Editors */}
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

            {/* EV Editors */}
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

            <br />
            <br />

            <h5>Available Abilities</h5>


            <h5>Nature</h5>


            <PokemonInstanceMoveTable moveList={PokemonMoves}/>
        </form>
    )
}