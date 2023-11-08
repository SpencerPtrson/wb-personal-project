import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';


export default function CreatePokemonInstancePage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

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
      <h1>Create Pokemon</h1>
      {/* <CreatePokemonInstanceForm onCreatePokemon={handleCreatePokemon} />
      {errorMessage} */}
    </>
  );
}
