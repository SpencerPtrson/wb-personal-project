import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EditPokemonInstanceForm from "../../components/PokemonInstanceManipulation/EditPokemonInstanceForm";

export default function EditPokemonInstancePage() {
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { pokemonInstance, speciesList, movesList, abilityList, natureList } =
    useLoaderData();

  const handleEditPokemon = async (pokemonInstanceId, formData) => {
    console.log("Handling Edit Pokemon");
    console.log("Editing pokemon instance: ", pokemonInstanceId);
    console.log("Form Data:", formData);
    const res = await axios.put(`/api/pokemoninstances/edit/${pokemonInstanceId}`, formData);
    if (res.data.success) {
      console.log("Edit pokemon succeeded");
      navigate("/pokemoninstances");
    } else {
      setErrorMessage("Failed to edit pokemon.");
      console.log("Edit Pokemon Instance failed");
      alert(res.data.error);
      console.error(res.data.error);
    }
  };

  return (
    <>
      <h1>Edit Pokemon Page!</h1>
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
