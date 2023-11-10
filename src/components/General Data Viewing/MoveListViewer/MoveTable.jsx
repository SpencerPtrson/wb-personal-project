import MoveRow from "./MoveRow";

export default function MoveTable({ moves }) {
    const moveRows = moves.map((move) => {
        return <MoveRow key={move.moveId} move={move} />
      });
    console.log(moves);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Move Name</th>
                    <th>Type</th>
                    <th>Power</th>
                    <th>Move Class</th>
                    <th>Flavor Text</th>
                </tr>
            </thead>
            <tbody>
                {moveRows}
            </tbody>
        </table>
    );
  }