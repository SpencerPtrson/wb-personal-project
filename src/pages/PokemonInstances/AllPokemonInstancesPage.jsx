import { useLoaderData } from "react-router-dom";
import PokemonInstanceTable from "../../components/PokemonInstances/PokemonInstanceTable";

export default function AllPokemonInstancesPage() {
  const { pokemoninstances } = useLoaderData();
  console.log("All Pokemon Instances Page - pokemoninstances data:", pokemoninstances);
  return (
    <>
      <h1>Community Sets:</h1>
      <PokemonInstanceTable instanceList={pokemoninstances} isTeamView={false}/>
    </>
  );
}
