import PokemonSpeciesSelectableRow from './PokemonSpeciesSelectableRow';

export default function PokemonSpeciesSelectorTable({ speciesList }) {
    const speciesRows = speciesList.map((species) => {
        return <PokemonSpeciesSelectableRow key={species.speciesId} species={species} />
    });

    return (
      <table>
        <tbody>
          {speciesRows}
        </tbody>
      </table>
    );
  }