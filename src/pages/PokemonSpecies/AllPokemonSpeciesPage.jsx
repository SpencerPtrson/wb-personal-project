import { useLoaderData } from "react-router-dom";
import PokemonSpeciesTable from "../../components/General Data Viewing/PokemonSpeciesListViewer/PokemonSpeciesTable";

export default function AllPokemonSpeciesPage() {
  const { pokemonspecies } = useLoaderData();

  return (
    <>
      <h1>Pokemon Species Table</h1>
      <PokemonSpeciesTable speciesList={pokemonspecies}/>
    </>
  );
}
