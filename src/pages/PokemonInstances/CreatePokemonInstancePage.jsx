import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PokemonSpeciesSelectorTable from '../../components/PokemonInstanceManipulation/PokemonSpeciesSelectorTable';


export default function CreatePokemonInstancePage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { speciesList } = useLoaderData();

  const handleCreatePokemon = async(pokemonInstanceId, teamId) => {
    console.log("Handling Create Pokemon");
    console.log(pokemonInstanceId, teamId);
    const res = await axios.post(`/api/pokemoninstances/create`, {speciesId: pokemonInstanceId, teamId: teamId});
    if (res.data.success) { 
      console.log("Create pokemon succeeded");
      navigate('/pokemoninstances'); 
    }
    else {
      setErrorMessage("Failed to create pokemon. Please select a species.");
      console.log("Create Pokemon Instance failed");
      console.error(res.data.error);
    }
  }

  return (
    <>
      <h1>Choose a Pokemon to add to your team!</h1>
      <PokemonSpeciesSelectorTable speciesList={speciesList} handleCreatePokemonFunction={handleCreatePokemon}/>
      {errorMessage}
    </>
  );
}
