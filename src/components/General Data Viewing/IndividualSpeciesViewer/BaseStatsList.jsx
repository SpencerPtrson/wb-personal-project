export default function BaseStatsList({ baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED }) {
    return (
        <>
            <p>Base Stats</p>
            <ul>
                <li>Base HP: {baseHP}</li>
                <li>Base Attack: {baseATK}</li>
                <li>Base Defense: {baseDEF}</li>
                <li>Base Special Attack: {baseSPATK}</li>
                <li>Base Special Defense: {baseSPDEF}</li>
                <li>Base Speed: {baseSPEED}</li>
            </ul>
        </>
    )
}