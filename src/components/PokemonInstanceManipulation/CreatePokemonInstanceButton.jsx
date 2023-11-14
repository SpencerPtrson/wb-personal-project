import { Button } from "react-bootstrap";

export default function CreatePokemonInstanceButton({teamId}) {
    return (
        <>
            <Button href={`/pokemoninstances/create/${teamId}`}>Add a Pokemon!</Button>
        </>
    );
}
  