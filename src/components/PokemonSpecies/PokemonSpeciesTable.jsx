import PokemonSpeciesRow from './PokemonSpeciesRow';

export default function PokemonSpeciesTable({ speciesList }) {
    const speciesRows = speciesList.map((species) => {
        return <PokemonSpeciesRow key={species.speciesId} species={species} />
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