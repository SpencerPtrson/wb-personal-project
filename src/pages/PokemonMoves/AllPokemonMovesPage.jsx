import { useLoaderData } from "react-router-dom";
import MoveTable from "../../components/PokemonMoves/MoveTable";

export default function AllPokemonMovesPage() {
  const { moves } = useLoaderData();

  return (
    <>
      <h1>All Moves</h1>
      <MoveTable moves={moves}/>
    </>
  );
}
