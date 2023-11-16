import PokemonSpriteImg from "../PokemonSpriteImg";
import PokemonInstanceMoveTable from "../PokemonInstances/PokemonInstanceMoveTable";
import ScrollableSpeciesTable from "./ScrollableSpeciesTable";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ScrollableMoveTable from "./ScrollableMoveTable";


export default function EditPokemonInstanceForm({ pokemonInstance, speciesList, allMovesList, editPokemonFunction }) {
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonSpecy, PokemonMoves, abilityId, natureId} = pokemonInstance;

    const speciesId = PokemonSpecy.speciesId;
    const imgUrl = PokemonSpecy.sprite;
    let name = PokemonSpecy.name.replace(PokemonSpecy.name[0], PokemonSpecy.name[0].toUpperCase());


    // // STATE VARIABLES
    const [state, setState] = useState({ hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
                                         hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV, 
                                         speciesId, name, imgUrl,
                                         abilityId, natureId});

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
    const [selectedMoves, setSelectedMoves] = useState({
        move1Id: -1, move1Name: "",
        move2Id: -1, move2Name: "",
        move3Id: -1, move3Name: "",
        move4Id: -1, move4Name: "",
    });
    const [currentSelectedMoveNum, setCurrentSelectedMoveNum] = useState(1);
    console.log("Current Selected Move Id:", currentSelectedMoveNum);
    console.log("Selected Move Values:", selectedMoves)

    return (
        <form>
            <Button onClick={e => {
                e.preventDefault();
                editPokemonFunction(pokemonInstance.pokemonInstanceId, {

                });
            }}>Save Changes</Button>

            <h1><PokemonSpriteImg name={state.name} sprite={state.imgUrl} width={200}/></h1>
            <h1>{state.name}</h1>
            <br />

            {/* SPECIES EDITOR */}
            <p>Click a row to change Species!</p>
            <ScrollableSpeciesTable speciesList={speciesList} state={state} setStateVals={setState} />

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

            <h5>Moves</h5>
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

                <ScrollableMoveTable currentSpeciesId={state.speciesId} moveList={allMovesList} selectedMoves={selectedMoves} selectedMoveNum={currentSelectedMoveNum} setSelectedMove={setSelectedMoves}/>
        </form>
    )
}