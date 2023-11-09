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

  const handleCreatePokemon = async(event, formData) => {
    console.log("Handling Create Pokemon");
    const res = await axios.post('/api/pokemoninstances/create', formData);
    if (res.data.userId) { 
    //   console.log("Create Account succeeded");
    //   console.log(formData.email);
    //   navigate('/'); 
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
      <PokemonSpeciesSelectorTable speciesList={speciesList}/>
      {errorMessage}
    </>
  );
}
