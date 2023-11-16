
export default function EditPokemonInstanceSelectMoveRow({ move, selectedMoves, selectedMoveNum, setSelectedMove }) {
    const { moveId, name, type, power, moveClass, shortDescription } = move;
    let fixedName = name.slice(0,1).toUpperCase() + name.slice(1);
    let fixedType = type.slice(0,1).toUpperCase() + type.slice(1);
    let fixedMoveClass = moveClass.slice(0,1).toUpperCase() + moveClass.slice(1);
    let fixedDesc = shortDescription.replace(/\$effect_chance%/g, '');

    let idKey = "move" + selectedMoveNum + "Id";
    let nameKey = "move" + selectedMoveNum + "Name";

    return (
        <>
            <tr key={moveId} onClick={(e) => setSelectedMove({...selectedMoves, [idKey]: moveId, [nameKey]: fixedName})}>
                <td>{fixedName}</td>
                <td>{fixedType}</td>
                <td>{power ? move.power : "N/A"}</td>
                <td>{fixedMoveClass}</td>
                <td>{fixedDesc}</td>
            </tr>
        </>
    );
}