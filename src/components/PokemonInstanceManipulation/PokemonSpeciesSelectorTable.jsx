import PokemonSpeciesSelectableRow from './PokemonSpeciesSelectableRow';

export default function PokemonSpeciesSelectorTable({ speciesList, handleCreatePokemonFunction }) {


    const speciesRows = speciesList.map((species) => {
      return <PokemonSpeciesSelectableRow key={species.speciesId} species={species} handleCreatePokemon={handleCreatePokemonFunction}/>
    });

    return (
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
    );
  }