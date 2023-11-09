import { Button } from "react-bootstrap";

export default function PokemonInstanceEditButton({ pokemonInstanceId }) {
    return (
        <>
            <Button href={`/pokemoninstance/edit/${pokemonInstanceId}`}>Edit Pokemon Instance</Button>
        </>
    );
}
  