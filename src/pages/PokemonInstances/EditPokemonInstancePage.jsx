import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EditPokemonInstanceForm from "../../components/PokemonInstanceManipulation/EditPokemonInstanceForm";

export default function EditPokemonInstancePage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { pokemonInstance, speciesList, movesList, abilityList, natureList } = useLoaderData();

  console.log("Pokemon Instance:", pokemonInstance)


  const handleEditPokemon = async (pokemonInstanceId, formData) => {
    console.log("Handling Edit Pokemon");
    console.log("Editing pokemon instance: ", pokemonInstanceId);
    console.log("Form Data:", formData);
    const res = await axios.put(`/api/pokemoninstances/edit/${pokemonInstanceId}`, formData);
    if (res.data.success) {
      console.log("Edit pokemon succeeded");
      navigate(`/teams/${pokemonInstance.teamId}`);
    } else {
      setErrorMessage("Failed to edit pokemon.");
      console.log("Edit Pokemon Instance failed");
      alert("There was an error validating your changes!");
      console.error(res.data.error);
    }
  };

  return (
    <>
      <EditPokemonInstanceForm
        pokemonInstance={pokemonInstance}
        speciesList={speciesList}
        movesList={movesList}
        abilityList={abilityList}
        natureList={natureList}
        editPokemonFunction={handleEditPokemon}
      />
    </>
  );
}
