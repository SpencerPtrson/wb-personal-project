import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PokemonSpeciesSelectorTable from '../../components/PokemonInstanceManipulation/PokemonSpeciesSelectorTable';


export default function CreatePokemonInstancePage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { speciesList, teamId } = useLoaderData();

  const handleCreatePokemon = async(pokemonInstanceId) => {
    console.log("Handling Create Pokemon");
    console.log(pokemonInstanceId, +teamId);
    const res = await axios.post(`/api/pokemoninstances/create`, {speciesId: pokemonInstanceId, teamId: +teamId});
    if (res.data.success) { 
      console.log("Create pokemon succeeded");
      navigate(`/teams/${teamId}`); 
    }
    else {
      setErrorMessage("Failed to create pokemon. Please select a species.");
      console.log("Create Pokemon Instance failed");
      console.error(res.data.error);
    }
  }

  return (
    <>
      <h1 style={{backgroundColor: `rgba(129, 29, 29, 0.8)`, color: "white", border: '1px solid white', textAlign: 'center'}}>Choose a Pokemon to add to your team!</h1>
      <PokemonSpeciesSelectorTable speciesList={speciesList} handleCreatePokemonFunction={handleCreatePokemon}/>
      {errorMessage}
    </>
  );
}
