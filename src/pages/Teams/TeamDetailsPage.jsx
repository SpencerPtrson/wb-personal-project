import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Container, Row, Col } from 'react-bootstrap';
import TeamPokemonInstanceTable from '../../components/Team/TeamPokemonInstanceTable';
import CreatePokemonInstanceButton from '../../components/PokemonInstanceManipulation/CreatePokemonInstanceButton';

export default function TeamDetailsPage() {
  const email = useSelector(state => state.user.email);
  const userId = useSelector(state => state.user.userId);
  let { team } = useLoaderData();
  
  return (
    <Container fluid>
      <Row>
        <Col align='center'>
          <h1 style={{backgroundColor: `rgba(129, 29, 29, 0.8)`, color: "white", border: '1px solid white'}}>Team Name: {team.teamName}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={{span: 4, offset: 4}} align='center'>
          { team.user
            ? <p style={{backgroundColor: `rgba(129, 29, 29, 0.8)`, color: "white", border: '1px solid white'}}>Team was created by: {team.user.email}</p>
            : <></>
          }
        </Col>
      </Row>

      { team?.user?.email === email && team.pokemoninstances.length < 6
            ? <CreatePokemonInstanceButton teamId={team.teamId}/>
            : <></>
      }
      <br />
      <br />

      <TeamPokemonInstanceTable instanceList={team.pokemoninstances} isTeamView={true} creatorEmail={team.user.email}/>
      <Button href='/teams'>Return to All Teams</Button>
      {
        userId
        ? <Button href={`/teams/users/${userId}`}>Return to My Teams</Button>
        : <></>
      }
    </Container>
  );
}
