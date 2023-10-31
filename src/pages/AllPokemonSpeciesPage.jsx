import { Link, useLoaderData } from "react-router-dom";
import PokemonSpeciesTable from "../components/PokemonSelector/PokemonSpeciesTable";

export default function AllPokemonSpeciesPage() {
  const { pokemonspecies } = useLoaderData();

  const pokemonSpeciesListItems = pokemonspecies.map(species => {
    console.log("Listing pokemon species for All PokemonSpecies Page:", species.name)
    return <li key={species.speciesId}>
      <Link to={`/pokemonspecies/${species.speciesId}`} >{species.name}</Link>
      </li>;
  })

  return (
    <>
      {/* <h1>All Pokemon Species</h1>
      <ul>{pokemonSpeciesListItems}</ul> */}
      <h1>Pokemon Species Table</h1>
      <PokemonSpeciesTable speciesList={pokemonspecies}/>
    </>
  );
}
