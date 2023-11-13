import { useSelector } from "react-redux/es/hooks/useSelector";

export default function PokemonInstanceMoveRow({ move }) {
    let { name, type, moveClass } = move;
    name = name.slice(0,1).toUpperCase() + name.slice(1);
    type = type.slice(0,1).toUpperCase() + type.slice(1);
    moveClass = moveClass.slice(0,1).toUpperCase() + moveClass.slice(1);

    return (
        <>
            <tr>
                <td>{name}</td>
            </tr>
        </>
    )
}