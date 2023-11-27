import PokemonInstanceMoveRow from "./PokemonInstanceMoveRow";

export default function PokemonInstanceMoveTable({ moveList }) {
  console.log("Move List:", moveList);
  const moveRows = moveList?.map((move) => {
    return <PokemonInstanceMoveRow key={move.moveId} move={move} />
  });

  return (
    <>
      <table className="table-sm subtable">
        <tbody>
          { 
            moveRows && moveList.length > 0
            ? moveRows
            : <></>
          }
        </tbody>
      </table>
    </>
    );
  }