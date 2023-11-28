import PokemonInstanceRow from "./PokemonInstanceRow";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function PokemonInstanceTable({ instanceList, isTeamView }) {
  const email = useSelector(state => state.user.email);


  const instanceRows = instanceList.map((pokemonInstance) => {
    return <PokemonInstanceRow key={pokemonInstance.pokemonInstanceId} pokemonInstance={pokemonInstance} isTeamView={isTeamView} />
  });

  console.log("PokemonInstanceTable - instanceList");
  console.log(instanceList);

  return (
    <table className="table">
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
          <th>Moves</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {instanceRows}
      </tbody>
    </table>
  );
}