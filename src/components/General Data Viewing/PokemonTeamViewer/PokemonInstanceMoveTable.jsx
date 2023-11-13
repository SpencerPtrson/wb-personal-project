import PokemonInstanceMoveRow from "./PokemonInstanceMoveRow";

export default function PokemonInstanceMoveTable({ moveList }) {
    const moveRows = moveList.map((move) => {
        return <PokemonInstanceMoveRow key={move.moveId} move={move} />
      });

    return (
      <table className="table-sm">
        <tbody>
          {moveRows}
        </tbody>
      </table>
    );
  }