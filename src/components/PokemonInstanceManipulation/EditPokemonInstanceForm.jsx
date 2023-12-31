import PokemonSpriteImg from "../PokemonSpriteImg";
import ScrollableSpeciesTable from "./ScrollableTables/ScrollableSpeciesTable";
import ScrollableMoveTable from "./ScrollableTables/ScrollableMoveTable";
import { useEffect, useState } from "react";
import ScrollableAbilityTable from "./ScrollableTables/ScrollableAbilityTable";
import ScrollableNatureTable from "./ScrollableTables/ScrollableNatureTable";
import CalculatedStatsTable from "../CalculatedStatsTable";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function EditPokemonInstanceForm({ pokemonInstance, speciesList, movesList, abilityList, natureList, editPokemonFunction }) {
    const { hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
            hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV,
            PokemonSpecy, level} = pokemonInstance;


    const speciesId = PokemonSpecy.speciesId;
    const imgUrl = PokemonSpecy.sprite;
    let name = PokemonSpecy.name.replace(PokemonSpecy.name[0], PokemonSpecy.name[0].toUpperCase());


    // // STATE VARIABLES
    const [state, setState] = useState({ hpIV, atkIV, defIV, spATKIV, spDEFIV, speedIV,
                                         hpEV, atkEV, defEV, spATKEV, spDEFEV, speedEV, 
                                         speciesId, baseHP: PokemonSpecy.baseHP, baseATK: PokemonSpecy.baseATK, baseDEF:PokemonSpecy.baseDEF, 
                                                    baseSPATK: PokemonSpecy.baseSPATK, baseSPDEF: PokemonSpecy.baseSPDEF, baseSPEED: PokemonSpecy.baseSPEED,
                                         name, imgUrl, level
                                        });


    //#region IVS / EVS
    const maxIVValue = 31;
    const minIVValue = 0;
    const maxEVValue = 255;
    const minEVValue = 0;

    const ivArr = [["hpIV", hpIV], ["atkIV", atkIV], ["defIV", defIV], ["spATKIV", spATKIV], ["spDEFIV", spDEFIV], ["speedIV", speedIV]];
    const IVCells = ivArr.map(ivValue => {
        const key = ivValue[0];
        return <td key={key}>
            <input type="number" min={minIVValue} max={maxIVValue} defaultValue={ivValue[1]} id={ivValue[0]} placeholder="Anywhere from 0-31" onChange={(e) => {
                let val = +(e.target.value);
                if (val < minIVValue) val = minIVValue;
                if (val > maxIVValue) val = maxIVValue;
                document.getElementById(ivValue[0]).value = val;
                setState({...state, [key]: val})
            }}/>
        </td>
    });

    const evArr = [["hpEV", hpEV], ["atkEV", atkEV], ["defEV", defIV], ["spATKEV", spATKEV], ["spDEFEV", spDEFEV], ["speedEV", speedEV]];
    const EVCells = evArr.map(evValue => {
        const key = evValue[0];        

        return <td key={key} >
            <input type="number" min={minEVValue} max={maxEVValue} defaultValue={evValue[1]} id={evValue[0]} placeholder="Anywhere from 0-31" onChange={(e) => {
                let val = +(e.target.value);
                if (val < minEVValue) val = minEVValue;
                if (val > maxEVValue) val = maxEVValue;
                document.getElementById(evValue[0]).value = val;
                setState({...state, [key]: val})
            }}/>
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
            abilityName: null,
            abilityDesc: null,
        });
    //#endregion Abilities

    //#region Natures
        const [stateNature, setStateNature] = useState({
            natureId: 1,
            natureName: "Lonely",
            increasedStat: "Attack",
            decreasedStat: "Defense"
        });
    //#endregion Natures

    //#region DisplayFields
        const [displayFields, setDisplayFields] = useState({
            displaySpeciesList: false,
            displayStats: false,
            displayAbilityList: false,
            displayNatureList: false,
            displayMoveList: false,
        });
    //#endregion


    useEffect(() => {
        setSelectedMoves({
            move1Id: -1, move1Name: "",
            move2Id: -1, move2Name: "",
            move3Id: -1, move3Name: "",
            move4Id: -1, move4Name: "",
        });
        setStateAbility({
            abilityId: -1,
            abilityName: null,
            abilityDesc: null
        });
    }, [state.speciesId])


    return (
        <Container fluid>

            <Row style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', border: '1px solid white' }}>
                <Col className="align-baseline my-auto" align='center'>
                    <h1><PokemonSpriteImg name={state.name} sprite={state.imgUrl} width={200}/></h1>
                    <h1>{state.name}</h1>
                </Col>

                <Col className="align-baseline my-auto" align='center'>
                    <Row>
                        <Col align='center'>
                            Ability: {stateAbility.abilityName ?? "None"}
                            { <><br /> {stateAbility.abilityDesc}</> ?? "" }
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col align='center'>
                            Nature: {stateNature.natureName ?? "None"}
                            { <><br /> Increased Stat: {stateNature.increasedStat}</> ?? "None" }
                            { <><br /> Decreased Stat: {stateNature.decreasedStat}</> ?? "None" }
                        </Col>
                    </Row>
                </Col>

                <Col className="align-baseline my-auto" align='center'>
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
                </Col>

                <Col className="align-baseline my-auto" align='center'>
                    <Button onClick={e => {
                        e.preventDefault();
                        editPokemonFunction(pokemonInstance.pokemonInstanceId, {
                        speciesId: state.speciesId, abilityId: stateAbility.abilityId, natureId: stateNature.natureId, level: state.level, moves: selectedMoves,
                        hpIV: state.hpIV, atkIV: state.atkIV, defIV: state.defIV, spATKIV: state.spATKIV, spDEFIV: state.spDEFIV, speedIV: state.speedIV,
                        hpEV: state.hpEV, atkEV: state.atkEV, defEV: state.defEV, spATKEV: state.spATKEV, spDEFEV: state.spDEFEV, speedEV: state.speedEV,
                        });
                    }}>Save Changes</Button>
                </Col>
            </Row>




            <br />

            <CalculatedStatsTable 
                baseStats = {{baseHP: state.baseHP, baseATK: state.baseATK, baseDEF:state.baseDEF, 
                            baseSPATK: state.baseSPATK, baseSPDEF: state.baseSPDEF, baseSPEED: state.baseSPEED}}
                IVs = {{hpIV: state.hpIV, atkIV: state.atkIV, defIV: state.defIV, 
                        spATKIV: state.spATKIV, spDEFIV: state.spDEFIV, speedIV: state.speedIV,}}
                EVs = {{hpEV: state.hpEV, atkEV: state.atkEV, defEV: state.defEV, 
                        spATKEV: state.spATKEV, spDEFEV: state.spDEFEV, speedEV: state.speedEV}}
                level = {state.level}
                nature = {{ increasedStat: stateNature.increasedStat, decreasedStat: stateNature.decreasedStat}}        
            />

            <br />



            <Container fluid>
                <Row style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', border: '1px solid white', height: 'fit-content', padding: '10px' }} >
                <Col align="center" className="my-auto">
                        <label htmlFor="levelEditor">Level:</label>
                        <input type="number" min={1} max={100} defaultValue={state.level} id="levelMod" placeholder="Anywhere from 0-100" onChange={(e) => {
                            let val = +(e.target.value);
                            if (val < 1) val = 1;
                            if (val > 100) val = 100;
                            document.getElementById('levelMod').value = val;
                            setState({...state, level: val})
                        }}/>
                    </Col>

                    <Col align="center" className="my-auto">
                        <Button onClick={e => {
                            e.preventDefault();
                            setDisplayFields({
                                displaySpeciesList: true,
                                displayStats: false,
                                displayAbilityList: false,
                                displayNatureList: false,
                                displayMoveList: false,
                            });
                        }}>Species</Button>
                    </Col>

                    <Col align="center" className="my-auto">
                        <Button onClick={e => {
                            e.preventDefault();
                            setDisplayFields({
                                displaySpeciesList: false,
                                displayStats: true,
                                displayAbilityList: false,
                                displayNatureList: false,
                                displayMoveList: false,
                            })
                        }}>IVs and EVs</Button>
                    </Col>

                    <Col align="center" className="my-auto">
                        <Button onClick={e => {
                            e.preventDefault();
                            setDisplayFields({
                                displaySpeciesList: false,
                                displayStats: false,
                                displayAbilityList: true,
                                displayNatureList: false,
                                displayMoveList: false,
                            })
                        }}>Abilities</Button>
                    </Col>

                    <Col align="center" className="my-auto">
                        <Button onClick={e => {
                            e.preventDefault();
                            setDisplayFields({
                                displaySpeciesList: false,
                                displayStats: false,
                                displayAbilityList: false,
                                displayNatureList: true,
                                displayMoveList: false,
                            })
                        }}>Natures</Button>
                    </Col>

                    <Col align="center" className="my-auto">
                        <Button onClick={e => {
                            e.preventDefault();
                            setDisplayFields({
                                displaySpeciesList: false,
                                displayStats: false,
                                displayAbilityList: false,
                                displayNatureList: false,
                                displayMoveList: true,
                            })
                        }}>Moves</Button>
                    </Col>
                </Row>
            </Container>

            <br />
            <br />
            <hr />

            {/* Species */}
            {
                displayFields.displaySpeciesList
                ? <>
                {/* SPECIES EDITOR */}
                <h5 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>Click a row to change Species!</h5>
                <ScrollableSpeciesTable speciesList={speciesList} state={state} setStateVals={setState} />
                </>
                : <></>
            }

            {/* IVs and EVs */}
            {
                displayFields.displayStats
                ? <>
                   
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
                </>
                : <></>
            }


            {/* ABILITIES */}
            {
                displayFields.displayAbilityList
                ? <>
                    <h5 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }} >Available Abilities</h5>
                    <ScrollableAbilityTable currentSpeciesId={state.speciesId} abilityList={abilityList} stateAbility={stateAbility} setStateAbility={setStateAbility}/>
                </>
                : <></>
            }

            {/* NATURES */}
            {
                displayFields.displayNatureList
                ? <>
                    <h5 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>Natures</h5>
                    <ScrollableNatureTable natureList={natureList} stateNature={stateNature} setStateNature={setStateNature}/>
                </>
                : <></>
            }
  

            {/* Moves */}
            {
                displayFields.displayMoveList
                ? <>
                    <h5 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>Available Moves</h5>
                    <ScrollableMoveTable currentSpeciesId={state.speciesId} moveList={movesList} selectedMoves={selectedMoves} selectedMoveNum={currentSelectedMoveNum} setSelectedMove={setSelectedMoves}/>
                </>
                : <></>
            }

        </Container>
    )
}