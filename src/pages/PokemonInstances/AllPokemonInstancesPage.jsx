import { Link, useLoaderData } from "react-router-dom";
import PokemonInstanceTable from "../../components/General Data Viewing/PokemonInstanceListViewer/PokemonInstanceTable";

export default function AllPokemonInstancesPage() {
  const { pokemoninstances } = useLoaderData();
  console.log("All Pokemon Instances Page - pokemoninstances data:", pokemoninstances);
  return (
    <>
      <h1>All Pokemon Instances Page</h1>
      <PokemonInstanceTable instanceList={pokemoninstances} isTeamView={false}/>
    </>
  );
}
