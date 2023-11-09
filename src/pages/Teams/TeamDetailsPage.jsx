import { useLoaderData } from 'react-router-dom';
import PokemonInstanceTable from '../../components/General Data Viewing/PokemonInstanceListViewer/PokemonInstanceTable';

export default function TeamDetailsPage() {
  let { team } = useLoaderData();
  console.log("Team Details Page - team object:", team);
  return (
    <>
      <h1>This is a team's Detail Page!</h1>
      <h1>Team Name: {team.teamName}</h1>
      <h1>Team was created by: {team.user.email}</h1>
      <PokemonInstanceTable instanceList={team.pokemoninstances} isTeamView={true} user={team.user}/>
    </>
  );
}
