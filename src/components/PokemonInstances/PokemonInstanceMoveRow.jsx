import { useSelector } from "react-redux/es/hooks/useSelector";

export default function PokemonInstanceMoveRow({ move }) {
    let { name } = move;
    name = name.replace(name[0], name[0].toUpperCase()) ?? null;

    return (
        <>
            <tr>
                <td>{name ?? ""}</td>
            </tr>
        </>
    )
}