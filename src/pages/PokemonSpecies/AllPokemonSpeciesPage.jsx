import { useLoaderData } from "react-router-dom";
import PokemonSpeciesTable from "../../components/PokemonSpecies/PokemonSpeciesTable";
import ScrollableSpeciesTable from "../../components/PokemonInstanceManipulation/ScrollableTables/ScrollableSpeciesTable";

export default function AllPokemonSpeciesPage() {
  const { pokemonspecies } = useLoaderData();

  return (
    <>
      <PokemonSpeciesTable speciesList={pokemonspecies} />
      {/* <ScrollableSpeciesTable speciesList={pokemonspecies} /> */}
    </>
  );
}
