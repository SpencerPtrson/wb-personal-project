import { useLoaderData } from 'react-router-dom';
import TeamPokemonInstanceTable from '../../components/General Data Viewing/PokemonTeamViewer/TeamPokemonInstanceTable';

export default function TeamDetailsPage() {
  let { team } = useLoaderData();
  console.log("Team Details Page - team object:", team);
  return (
    <>
      <h1>This is a team's Detail Page!</h1>
      <h1>Team Name: {team.teamName}</h1>
      { team.user
        ? <h1>Team was created by: {team.user.email}</h1>
        : <></>
      }
      <TeamPokemonInstanceTable instanceList={team.pokemoninstances} isTeamView={true} creatorEmail={team.user.email}/>
    </>
  );
}
