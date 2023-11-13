import { useLoaderData } from 'react-router-dom';
import TeamPokemonInstanceTable from '../../components/General Data Viewing/PokemonTeamViewer/TeamPokemonInstanceTable';

export default function TeamDetailsPage() {
  let { team } = useLoaderData();
  console.log("Team Details Page - team object:", team);
  return (
    <>
      <h1>Team Name: {team.teamName}</h1>
      { team.user
        ? <p>Team was created by: {team.user.email}</p>
        : <></>
      }
      <TeamPokemonInstanceTable instanceList={team.pokemoninstances} isTeamView={true} creatorEmail={team.user.email}/>
    </>
  );
}
