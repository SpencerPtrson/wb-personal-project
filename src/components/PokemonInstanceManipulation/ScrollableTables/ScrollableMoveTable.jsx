import EditPokemonInstanceSelectMoveRow from './EditPokemonInstanceSelectMoveRow';

export default function ScrollableMoveTable({ currentSpeciesId, moveList, selectedMoves, selectedMoveNum, setSelectedMove }) {

    moveList = moveList.filter(move => {
        const associatedSpecies = move.PokemonSpecies;
        for (const species of associatedSpecies) {
            if (species.speciesId === currentSpeciesId) return true;
        }
        return false;
    })
    console.log("ScrollableMoveTable - currentlySelectedMoveNum:", selectedMoveNum);

    const moveRows = moveList.map((move) => {
        return <EditPokemonInstanceSelectMoveRow key={move.moveId} move={move} selectedMoves={selectedMoves} selectedMoveNum={selectedMoveNum} setSelectedMove={setSelectedMove} />
    });

    return (
        <>
            {
                moveList?.length > 0
                ?  <div className='table-responsive scrollable' style={{border: '1px solid black'}}>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Move</th>
                            <th>Type</th>
                            <th>Power</th>
                            <th>Move Class</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                            {moveRows}
                        </tbody>
                    </table>
                </div>
                : <h6 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>No Legal Moves</h6>
            }
        </>
    );
  }