import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeamPokemonInstanceTable from '../../components/General Data Viewing/PokemonTeamViewer/TeamPokemonInstanceTable';
import CreatePokemonInstanceButton from '../../components/PokemonInstanceManipulation/CreatePokemonInstanceButton';

export default function TeamDetailsPage() {
  const email = useSelector(state => state.user.email);

  let { team } = useLoaderData();
  console.log("Team Details Page - team object:", team);
  console.log("Team Pokemon Instances:", team.pokemonInstances);
  return (
    <>
      <h1>Team Name: {team.teamName}</h1>
      { team.user
        ? <p>Team was created by: {team.user.email}</p>
        : <></>
      }
      <TeamPokemonInstanceTable instanceList={team.pokemoninstances} isTeamView={true} creatorEmail={team.user.email}/>
      { team.user.email === email
        ? <CreatePokemonInstanceButton teamId={team.teamId}/>
        : <></>
      }
    </>
  );
}
