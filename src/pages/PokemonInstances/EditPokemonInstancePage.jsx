import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EditPokemonInstanceForm from '../../components/PokemonInstanceManipulation/EditPokemonInstanceForm';


export default function EditPokemonInstancePage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { pokemonInstance, speciesList, allMovesList } = useLoaderData();

  const handleEditPokemon = async(pokemonInstanceId, formData) => {
    console.log("Handling Edit Pokemon");
    console.log("Editing pokemon instance: ", pokemonInstanceId);
    console.log(formData)
    const res = await axios.post(`/api/pokemoninstances/edit/${pokemonInstanceId}`, formData);
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
      <EditPokemonInstanceForm pokemonInstance={pokemonInstance} speciesList={speciesList} allMovesList={allMovesList} editPokemonFunction={handleEditPokemon}/>
    </>
  );
}
