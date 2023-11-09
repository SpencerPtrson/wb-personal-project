export default function BaseStatsList({ baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED }) {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th>Base Stat Total</th>
                        <th>HP</th>
                        <th>ATK</th>
                        <th>DEF</th>
                        <th>SPATK</th>
                        <th>SPDEF</th>
                        <th>SPEED</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{baseHP + baseATK + baseDEF + baseSPATK + baseSPDEF + baseSPEED}</td>
                        <td>{baseHP}</td>
                        <td>{baseATK}</td>
                        <td>{baseDEF}</td>
                        <td>{baseSPATK}</td>
                        <td>{baseSPDEF}</td>
                        <td>{baseSPEED}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}