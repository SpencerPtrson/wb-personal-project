import EditPokemonInstanceSelectMoveRow from './EditPokemonInstanceSelectMoveRow';

export default function ScrollableMoveTable({ currentSpeciesId, moveList, state, setStateVals }) {
    console.log("Scrollable Move Table - moveList data:", moveList);
    console.log("Current Species Id:", currentSpeciesId);

    moveList.forEach(move => {
        console.log(move);
        console.log("Pokemon Species associated with move:", move.PokemonSpecies);
    })

    moveList = moveList.filter(move => {
        const associatedSpecies = move.PokemonSpecies;
        for (const species of associatedSpecies) {
            if (species.speciesId === currentSpeciesId) return true;
        }
        return false;
    })

    const moveRows = moveList.map((move) => {
        return <EditPokemonInstanceSelectMoveRow key={move.moveId} move={move} state={state} setStateVals={setStateVals} />
    });

    return (
        <div className='table-responsive scrollable' style={{border: '1px solid black'}}>
            <table className='table'>
                <thead>
                <tr>
                    <th>AAAAAAA</th>
                </tr>
                </thead>
                <tbody>
                    {moveRows}
                </tbody>
            </table>
        </div>
    );
  }