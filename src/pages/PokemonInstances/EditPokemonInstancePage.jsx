import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EditPokemonInstanceForm from '../../components/PokemonInstanceManipulation/EditPokemonInstanceForm';


export default function EditPokemonInstancePage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { pokemonInstance } = useLoaderData();

  const handleEditPokemon = async(pokemonInstanceId) => {
    console.log("Handling Edit Pokemon");
    console.log("Editing pokemon instance: ", pokemonInstanceId);
    const res = await axios.post(`/api/pokemoninstances/create`, {speciesId: pokemonInstanceId, teamId: teamId});
    if (res.data.success) { 
      console.log("Edit pokemon succeeded");
      navigate('/pokemoninstances'); 
    }
    else {
      setErrorMessage("Failed to edit pokemon.");
      console.log("Edit Pokemon Instance failed");
      console.error(res.data.error);
    }
  }

  return (
    <>
      <h1>Edit Pokemon Page!</h1>
      <EditPokemonInstanceForm pokemonInstance={pokemonInstance}/>
    </>
  );
}
