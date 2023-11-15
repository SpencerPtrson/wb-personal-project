import PokemonSpeciesRow from '../PokemonSpecies/PokemonSpeciesRow'

export default function ScrollableSpeciesTable({ speciesList }) {
    const speciesRows = speciesList.map((species) => {
        return <PokemonSpeciesRow key={species.speciesId} species={species} />
      });

    return (
        <div className='table-responsive scrollable' style={{border: '1px solid black'}}>
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