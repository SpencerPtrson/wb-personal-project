import PokemonSpriteImg from "../PokemonSpriteImg";
import ScrollableSpeciesTable from "./ScrollableTables/ScrollableSpeciesTable";
import ScrollableMoveTable from "./ScrollableTables/ScrollableMoveTable";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ScrollableAbilityTable from "./ScrollableTables/ScrollableAbilityTable";


export default function EditPokemonInstanceForm({ pokemonInstance, speciesList, movesList, abilityList, editPokemonFunction }) {
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonSpecy, abilityId, natureId} = pokemonInstance;

    const speciesId = PokemonSpecy.speciesId;
    const imgUrl = PokemonSpecy.sprite;
    let name = PokemonSpecy.name.replace(PokemonSpecy.name[0], PokemonSpecy.name[0].toUpperCase());


    // // STATE VARIABLES
    const [state, setState] = useState({ hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
                                         hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV, 
                                         speciesId, name, imgUrl,
                                         abilityId, natureId});


    useEffect(() => {
        setSelectedMoves({
            move1Id: -1, move1Name: "",
            move2Id: -1, move2Name: "",
            move3Id: -1, move3Name: "",
            move4Id: -1, move4Name: "",
        });
        setStateAbility({
            abilityId: -1,
            abilityName: null
        });
        // Set Selected Ability

    }, [state.speciesId])


    //#region IVS / EVS
    const maxIVValue = 31;
    const minIVValue = 0;
    const maxEVValue = 255;
    const minEVValue = 0;

    const ivArr = [["hpIV", hpIV], ["atkIV", atkIV], ["defIV", defIV], ["spATKIV", spATKIV], ["spDEFIV", spDEFIV], ["speedIV", speedIV]];
    const IVCells = ivArr.map(ivValue => {
        const key = ivValue[0];
        return <td key={key}>
            <input type="number" min={minIVValue} max={maxIVValue} defaultValue={ivValue[1]} placeholder="Anywhere from 0-31" onChange={(e) => setState({...state, [key]: e.target.value})}/>
        </td>
    });

    const evArr = [["hpEV", hpEV], ["atkEV", atkEV], ["defEV", defIV], ["spATKEV", spATKEV], ["spDEFEV", spDEFEV], ["speedEV", speedEV]];
    const EVCells = evArr.map(evValue => {
        const key = evValue[0];
        return <td key={key}>
            <input type="number" min={minEVValue} max={maxEVValue} defaultValue={evValue[1]} placeholder="Anywhere from 0-31" onChange={(e) => setState({...state, [key]: e.target.value})}/>
        </td>
    });
    //#endregion IVS / EVS
    
    
    //#region Moves
        const [selectedMoves, setSelectedMoves] = useState({
            move1Id: -1, move1Name: "",
            move2Id: -1, move2Name: "",
            move3Id: -1, move3Name: "",
            move4Id: -1, move4Name: "",
        });
        const [currentSelectedMoveNum, setCurrentSelectedMoveNum] = useState(1);
    //#endregion Moves

    //#region Abilities
        const [stateAbility, setStateAbility] = useState({
            abilityId: -1,
            abilityName: null
        });
    //#endregion Abilities

    return (
        <form>
            <Button onClick={e => {
                e.preventDefault();

                editPokemonFunction(pokemonInstance.pokemonInstanceId, {

                });
            }}>Save Changes</Button>

            {/* Species */}
            <>
                <h1><PokemonSpriteImg name={state.name} sprite={state.imgUrl} width={200}/></h1>
                <h1>{state.name}</h1>
                <br />

                {/* SPECIES EDITOR */}
                <p>Click a row to change Species!</p>
                <ScrollableSpeciesTable speciesList={speciesList} state={state} setStateVals={setState} />
            </>


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

            {/* ABILITIES */}
            <h5>Selected Ability: {stateAbility.abilityName ?? "None"}</h5>
            <h5>Available Abilities</h5>
                <ScrollableAbilityTable currentSpeciesId={state.speciesId} abilityList={abilityList} stateAbility={stateAbility} setStateAbility={setStateAbility}/>
                <br />
                <br />

            {/* NATURES */}
            <h5>Nature</h5>
                <br />
                <br />


            {/* Moves */}
            <>
                <h5>Selected Moves</h5>
                    <label htmlFor="move1">Move 1: </label>
                    <input readOnly={true} value={selectedMoves.move1Name} type="text" id="move1" onSelect={(e) => setCurrentSelectedMoveNum(1)}/>
                    <br />
                    <label htmlFor="move2">Move 2: </label>
                    <input readOnly={true} value={selectedMoves.move2Name} type="text" id="move2" onSelect={(e) => setCurrentSelectedMoveNum(2)}/>
                    <br />
                    <label htmlFor="move3">Move 3: </label>
                    <input readOnly={true} value={selectedMoves.move3Name} type="text" id="move3" onSelect={(e) => setCurrentSelectedMoveNum(3)}/>
                    <br />
                    <label htmlFor="move4">Move 4: </label>
                    <input readOnly={true} value={selectedMoves.move4Name} type="text" id="move4" onSelect={(e) => setCurrentSelectedMoveNum(4)}/>
                    <br />
                    <br />
                <h5>Available Moves</h5>
                <ScrollableMoveTable currentSpeciesId={state.speciesId} moveList={movesList} selectedMoves={selectedMoves} selectedMoveNum={currentSelectedMoveNum} setSelectedMove={setSelectedMoves}/>
            </>

        </form>
    )
}