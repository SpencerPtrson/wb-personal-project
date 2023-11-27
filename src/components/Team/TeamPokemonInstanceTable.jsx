import TeamPokemonInstanceRow from "../Team/TeamPokemonInstanceRow";

export default function TeamPokemonInstanceTable({ instanceList, creatorEmail }) {
  const instanceRows = instanceList.map((pokemonInstance) => {
    return <TeamPokemonInstanceRow key={pokemonInstance.pokemonInstanceId} pokemonInstance={pokemonInstance} creatorEmail={creatorEmail} />
  });


  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sprite</th>
          <th></th>
          <th>IVs</th>
          <th>EVs</th>
          <th>Moves</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {instanceRows}
      </tbody>
    </table>
  );
}