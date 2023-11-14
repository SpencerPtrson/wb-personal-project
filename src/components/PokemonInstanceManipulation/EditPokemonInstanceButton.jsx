import { Button } from "react-bootstrap";

export default function EditPokemonInstanceButton({ pokemonInstanceId }) {
    return (
        <>
            <Button href={`/pokemoninstances/edit/${pokemonInstanceId}`}>Edit Pokemon</Button>
        </>
    );
}
  