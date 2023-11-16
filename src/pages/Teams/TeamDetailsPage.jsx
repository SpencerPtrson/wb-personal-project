import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeamPokemonInstanceTable from '../../components/Team/TeamPokemonInstanceTable';
import CreatePokemonInstanceButton from '../../components/PokemonInstanceManipulation/CreatePokemonInstanceButton';

export default function TeamDetailsPage() {
  const email = useSelector(state => state.user.email);
  let { team } = useLoaderData();
  
  return (
    <>
      <h1>Team Name: {team.teamName}</h1>
      { team.user
        ? <p>Team was created by: {team.user.email}</p>
        : <></>
      }
      { team.user.email === email && team.pokemoninstances.length <= 6
        ? <CreatePokemonInstanceButton teamId={team.teamId}/>
        : <></>
      }
      <TeamPokemonInstanceTable instanceList={team.pokemoninstances} isTeamView={true} creatorEmail={team.user.email}/>
    </>
  );
}
