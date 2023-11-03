export default function SpeciesMovesList({ SpeciesMoves }) {
    const movesLister = SpeciesMoves.map(move => {
        const name = move.name.slice(0,1).toUpperCase() + move.name.slice(1);
        const type = move.type.slice(0,1).toUpperCase() + move.type.slice(1);
        return (<tr style={{border: '1px solid black'}}>
            <td style={{border: '1px solid black'}}>{name}</td>
            <td style={{border: '1px solid black'}}>Type: {type}</td>
            <td style={{border: '1px solid black'}}>{move.power ? "Power: " + move.power : "N/A"}</td>
            <td style={{border: '1px solid black'}}>{move.moveClass}</td>
            <td style={{border: '1px solid black'}}>{move.flavorText}</td>
        </tr>)
    })
    
    
    return (
        <table style={{border: '1px solid black', width:"600px"}}>
            <tr>
                <th>Move Name</th>
                <th>Type</th>
                <th>Power</th>
                <th>Move Class</th>
                <th>Flavor Text</th>
            </tr>
            <tbody>
                {movesLister}
            </tbody>
        </table>
    )
}