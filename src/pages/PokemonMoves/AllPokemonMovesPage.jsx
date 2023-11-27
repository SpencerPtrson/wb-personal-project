import { useLoaderData } from "react-router-dom";
import MoveTable from "../../components/PokemonMoves/MoveTable";
import ScrollableMoveTable from "../../components/PokemonInstanceManipulation/ScrollableTables/ScrollableMoveTable";

export default function AllPokemonMovesPage() {
  const { moves } = useLoaderData();

  return (
    <>
      <MoveTable moves={moves}/>
    </>
  );
}
