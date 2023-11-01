import { Link, useLoaderData } from "react-router-dom";
import PokemonSpeciesTable from "../components/PokemonSpeciesViewer/PokemonSpeciesTable";

export default function AllPokemonSpeciesPage() {
  const { pokemonspecies } = useLoaderData();

  console.log("All Pokemon Species Page");
  return (
    <>
      <h1>Pokemon Species Table</h1>
      <PokemonSpeciesTable speciesList={pokemonspecies}/>
    </>
  );
}
