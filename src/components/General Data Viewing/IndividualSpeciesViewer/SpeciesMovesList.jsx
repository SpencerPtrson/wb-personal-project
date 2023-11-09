export default function SpeciesMovesList({ SpeciesMoves }) {
    const movesLister = SpeciesMoves.map(move => {
        const name = move.name.slice(0,1).toUpperCase() + move.name.slice(1);
        const type = move.type.slice(0,1).toUpperCase() + move.type.slice(1);
        return (<tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>{move.power ? move.power : "N/A"}</td>
            <td>{move.moveClass}</td>
            <td>{move.flavorText}</td>
        </tr>)
    })
    
    
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
                {movesLister}
            </tbody>
        </table>
    )
}