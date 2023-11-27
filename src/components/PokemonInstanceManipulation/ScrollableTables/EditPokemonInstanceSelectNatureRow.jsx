export default function EditPokemonInstanceSelectNatureRow({
  nature,
  stateNature,
  setStateNature,
}) {
  let { natureId, name, increasedStat, decreasedStat } = nature;
  name = name.replace(name[0], name[0].toUpperCase());
  increasedStat = increasedStat?.replace(increasedStat[0], increasedStat[0].toUpperCase());
  decreasedStat = decreasedStat?.replace(decreasedStat[0], decreasedStat[0].toUpperCase());


  return (
    <>
      <tr
        key={natureId}
        onClick={(e) =>
          setStateNature({
            ...stateNature,
            natureId: natureId,
            natureName: name,
            increasedStat: increasedStat,
            decreasedStat: decreasedStat,
          })
        }
      >
        <td>{name}</td>
        <td>{increasedStat}</td>
        <td>{decreasedStat}</td>
      </tr>
    </>
  );
}
