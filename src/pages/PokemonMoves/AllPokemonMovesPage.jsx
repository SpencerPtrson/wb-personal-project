import { Link, useLoaderData } from "react-router-dom";
import { NavLink } from "react-bootstrap";

export default function AllPokemonMovesPage() {
  const { moves } = useLoaderData();

  const moveListItems = moves.map(move => {
    // console.log("Listing move for All Moves Page:", move.name)
    return <li key={move.moveId}>
        <NavLink href={`/moves/${move.moveId}`} >{move.name}</NavLink>
      </li>;
  })

  return (
    <>
      <h1>All Moves</h1>
      <ul>{moveListItems}</ul>
    </>
  );
}
