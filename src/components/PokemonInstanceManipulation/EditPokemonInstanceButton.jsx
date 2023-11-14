import { Button } from "react-bootstrap";

export default function EditPokemonInstanceButton({ pokemonInstanceId }) {
    return (
        <>
            <Button href={`/pokemoninstance/edit/${pokemonInstanceId}`}>Edit Pokemon</Button>
        </>
    );
}
  