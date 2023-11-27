import { useLoaderData } from "react-router-dom";
import PokemonSpeciesTable from "../../components/PokemonSpecies/PokemonSpeciesTable";
import ScrollableSpeciesTable from "../../components/PokemonInstanceManipulation/ScrollableTables/ScrollableSpeciesTable";

export default function AllPokemonSpeciesPage() {
  const { pokemonspecies } = useLoaderData();

  return (
    <>
      <h1>Pokemon Species Table</h1>
      <ScrollableSpeciesTable speciesList={pokemonspecies} />
    </>
  );
}
