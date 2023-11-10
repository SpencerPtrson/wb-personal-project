import { Link, useLoaderData } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import MoveTable from "../../components/General Data Viewing/MoveListViewer/MoveTable";

export default function AllPokemonMovesPage() {
  const { moves } = useLoaderData();

  return (
    <>
      <h1>All Moves</h1>
      <MoveTable moves={moves}/>
    </>
  );
}
