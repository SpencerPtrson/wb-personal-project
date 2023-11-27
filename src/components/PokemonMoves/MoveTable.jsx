import MoveRow from "./MoveRow";

export default function MoveTable({ moves }) {
    console.log("Moves", moves);
    const moveRows = moves.map((move) => {
        return <MoveRow key={move.moveId} move={move} />
      });
    console.log(moves);

    return (
        <>
            {
                moveRows && moves.length > 0
                ? <h5>Available Moves</h5>
                : <h5>No Moves Listed</h5>
            }
            <table className="table scrollable">
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
                    {
                        moveRows
                        ? moveRows
                        : <></>
                    }
                </tbody>
            </table>
        </>
    );
  }