import PokemonSpeciesRow from './PokemonSpeciesRow';

export default function PokemonSpeciesTable({ speciesList }) {
    const speciesRows = speciesList.map((species) => {
        return <PokemonSpeciesRow key={species.speciesId} species={species} 
    />});

    return (
      <table>
        <tbody>
          {speciesRows}
        </tbody>
      </table>
    );
  }