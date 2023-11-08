import { useLoaderData } from 'react-router-dom';
import PokemonInstanceTable from '../../components/General Data Viewing/PokemonInstanceListViewer/PokemonInstanceTable';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function TeamDetailsPage() {
  let { team } = useLoaderData();
  console.log(team);

  return (
    <>
      <h1>This is a team's Detail Page!</h1>
      <h1>Team Name: {team.teamName}</h1>
      <PokemonInstanceTable instanceList={team.pokemoninstances} isTeamView={true}/>
    </>
  );
}
