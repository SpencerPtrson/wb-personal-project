import PokemonInstanceRow from "./PokemonInstanceRow";

export default function PokemonInstanceTable({ instanceList, isTeamView }) {
    const instanceRows = instanceList.map((pokemonInstance) => {
        return <PokemonInstanceRow key={pokemonInstance.instanceId} pokemonInstance={pokemonInstance} isTeamView={isTeamView} />
      });

    return (
      <table class="table">
        <thead>
          <tr>
            {isTeamView ? <>
            </> 
            : <>
              <th>Team Name</th>
              <th>Set Creator</th>
            </>
            }
            <th>Pokemon Sprite</th>
            <th>Pokemon Name</th>
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