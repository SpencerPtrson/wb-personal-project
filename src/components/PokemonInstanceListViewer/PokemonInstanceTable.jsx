import PokemonInstanceRow from "./PokemonInstanceRow";

export default function PokemonInstanceTable({ instanceList }) {
    const instanceRows = instanceList.map((pokemonInstance) => {
        return <PokemonInstanceRow key={pokemonInstance.instanceId} pokemonInstance={pokemonInstance} 
    />});

    return (
      <table>
        <tr>
            <th>Team Name</th>
            <th>Set Creator</th>
            <th>Pokemon Sprite</th>
            <th>Pokemon Name</th>
        </tr>
        <tbody>
          {instanceRows}
        </tbody>
      </table>
    );
  }