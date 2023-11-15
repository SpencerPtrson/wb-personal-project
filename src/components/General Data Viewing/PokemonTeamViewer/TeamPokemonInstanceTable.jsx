import TeamPokemonInstanceRow from "./TeamPokemonInstanceRow";

export default function TeamPokemonInstanceTable({ instanceList, creatorEmail }) {
    const instanceRows = instanceList.map((pokemonInstance) => {
        return <TeamPokemonInstanceRow key={pokemonInstance.pokemonInstanceId} pokemonInstance={pokemonInstance} creatorEmail={creatorEmail} />
      });

    console.log("Team Pokemon Instance Table - data passed in:", instanceList);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Sprite</th>
            <th></th>
            <th>IVs</th>
            <th>EVs</th>
          </tr>
        </thead>
        <tbody>
          {instanceRows}
        </tbody>
      </table>
    );
  }