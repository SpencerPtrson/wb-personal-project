import EditPokemonInstanceSelectSpeciesRow from './EditPokemonInstanceSelectSpeciesRow';

export default function ScrollableSpeciesTable({ speciesList, state, setStateVals }) {
    const speciesRows = speciesList.map((species) => {
        return <EditPokemonInstanceSelectSpeciesRow key={species.speciesId} species={species} state={state} setStateVals={setStateVals} />
    });

    return (
        <div className='table-responsive speciesScrollable' style={{border: '1px solid black'}}>
            <table className='table'>
                <thead>
                <tr>
                    <th>Sprite</th>
                    <th>Species</th>
                    <th>Typings</th>
                    <th>Base Stats</th>
                </tr>
                </thead>
                <tbody>
                {speciesRows}
                </tbody>
            </table>
        </div>
    );
  }