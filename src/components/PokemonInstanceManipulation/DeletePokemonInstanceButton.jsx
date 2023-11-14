import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DeletePokemonInstanceButton({ pokemonInstanceId }) {
    const navigate = useNavigate();

    const handleDeletePokemonInstance = async () => {
        console.log("Attempting to Delete pokemon")

        const verified = confirm("Are you sure you want to delete this pokemon? It can't be recovered if you do!");
        if (verified) {
            const res = await axios.delete('/api/pokemoninstances/delete', { data: { pokemonInstanceId: pokemonInstanceId }});
            if (res.data.success) {
                console.log("Succeeded in Deleting Pokemon");
                navigate(0);
            }
            else {
                console.log(res.data);
                console.log("Failed to Delete Pokemon");
            }
        }
    }
    
    return (
        <>
            <Button onClick={handleDeletePokemonInstance}>Delete Pokemon</Button>
        </>
    );
}