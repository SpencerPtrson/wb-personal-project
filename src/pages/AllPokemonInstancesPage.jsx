import { Link, useLoaderData } from "react-router-dom";
import PokemonInstanceTable from "../components/PokemonInstanceListViewer/PokemonInstanceTable";

export default function AllPokemonInstancesPage() {
  const { pokemoninstances } = useLoaderData();

  return (
    <>
      <h1>All Pokemon Instances Page</h1>
      <PokemonInstanceTable instanceList={pokemoninstances} />
      {/* <PokemonSpeciesTable instanceList={pokemoninstances}/> */}
    </>
  );
}
