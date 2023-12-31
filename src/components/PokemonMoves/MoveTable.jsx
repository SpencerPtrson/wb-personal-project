import MoveRow from "./MoveRow";

export default function MoveTable({ moves }) {
    const moveRows = moves.map((move) => {
        return <MoveRow key={move.moveId} move={move} />
    });

    return (
        <div className='table-responsive' style={{border: '1px solid black'}}>
            {
                moveRows && moves.length > 0
                ? <></>
                : <h5 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>No Moves Listed</h5>
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
        </div>
    );
  }