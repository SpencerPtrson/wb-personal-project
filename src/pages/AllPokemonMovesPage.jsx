import { Link, useLoaderData } from "react-router-dom";


export default function AllPokemonMovesPage() {
  const { moves } = useLoaderData();

  const moveListItems = moves.map(move => {
    console.log("Listing move for All Moves Page:", move.name)
    return <li key={move.moveId}>
      <Link to={`/moves/${move.moveId}`} >{move.name}</Link>
      </li>;
  })

  return (
    <>
      <h1>All Moves</h1>
      <ul>{moveListItems}</ul>
    </>
  );
}
