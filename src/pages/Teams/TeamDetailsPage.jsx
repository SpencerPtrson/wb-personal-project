import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import TeamPokemonInstanceTable from '../../components/Team/TeamPokemonInstanceTable';
import CreatePokemonInstanceButton from '../../components/PokemonInstanceManipulation/CreatePokemonInstanceButton';

export default function TeamDetailsPage() {
  const email = useSelector(state => state.user.email);
  const userId = useSelector(state => state.user.userId);
  let { team } = useLoaderData();
  
  return (
    <>
      <h1>Team Name: {team.teamName}</h1>
      { team.user
        ? <p>Team was created by: {team.user.email}</p>
        : <></>
      }
      { team.user.email === email && team.pokemoninstances.length < 6
        ? <CreatePokemonInstanceButton teamId={team.teamId}/>
        : <></>
      }
      <TeamPokemonInstanceTable instanceList={team.pokemoninstances} isTeamView={true} creatorEmail={team.user.email}/>
      <Button href='/teams'>Return to All Teams</Button>
      {
        userId
        ? <Button href={`/teams/users/${userId}`}>Return to My Teams</Button>
        : <></>
      }
    </>
  );
}
