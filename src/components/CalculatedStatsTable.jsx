export default function CalculatedStatsTable({ baseStats, IVs, EVs, level, nature }) {
  const natureModifer = 1.1;
  
  function calculateHPStat(baseHP, hpIV, hpEV, level) {
    return Math.floor((((2 * baseHP + hpIV + hpEV / 4) * level) / 100) + level + 10);
  }

  function calculateNonHPStat(baseStat, statIV, statEV, level) {
    const numerator = Math.floor(2 * baseStat + statIV + statEV / 4) * level;
    let result = Math.floor((numerator / 100) + 5)
    return Math.floor(result);
  }
  
  let hp = calculateHPStat(baseStats.baseHP, IVs.hpIV, EVs.hpEV, level);
  let atk = calculateNonHPStat(baseStats.baseATK, IVs.atkIV, EVs.atkEV, level);
  let def = calculateNonHPStat(baseStats.baseDEF, IVs.defIV, EVs.defEV, level);
  let spatk = calculateNonHPStat(baseStats.baseSPATK, IVs.spATKIV, EVs.spATKEV, level);
  let spdef = calculateNonHPStat(baseStats.baseSPDEF, IVs.spDEFIV, EVs.spDEFEV, level);
  let speed = calculateNonHPStat(baseStats.baseSPEED, IVs.speedIV, EVs.speedEV, level);

  switch (nature.increasedStat) {
    case "attack":
      atk = Math.floor(atk * natureModifer);
      break;
    case "defense":
      def = Math.floor(def * natureModifer);
      break;
    case "special-attack":
      spatk = Math.floor(spatk * natureModifer);
      break;
    case "special-defense":
      spdef = Math.floor(spdef * natureModifer);
      break;
    case "speed":
      speed = Math.floor(speed * natureModifer);
      break;
    default:
      break;
  }


  switch (nature.decreasedStat) {
    case "attack":
      atk = Math.floor(atk / natureModifer);
      break;
    case "defense":
      def = Math.floor(def / natureModifer);
      break;
    case "special-attack":
      spatk = Math.floor(spatk / natureModifer);
      break;
    case "special-defense":
      spdef = Math.floor(spdef / natureModifer);
      break;
    case "speed":
      speed = Math.floor(speed / natureModifer);
      break;
    default:
      break;
  }

  return (
      <>
        <table className="table" style={{ tableLayout: 'fixed'}}>
          <thead>
                <tr>
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
                    <td>{hp}</td>
                    <td>{atk}</td>
                    <td>{def}</td>
                    <td>{spatk}</td>
                    <td>{spdef}</td>
                    <td>{speed}</td>
                </tr>
            </tbody>
        </table>
      </>
  )
}