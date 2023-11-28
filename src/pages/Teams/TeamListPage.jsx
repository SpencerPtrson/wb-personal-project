import axios from 'axios'
import { useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import TeamTable from '../../components/Team/TeamTable';  
import CreateTeamForm from "../../components/Team/CreateTeamForm";
import { Col, Container, Row } from 'react-bootstrap';

export default function TeamListPage() {
  const email = useSelector(state => state.user.email)
  const navigate = useNavigate();
  const { teams } = useLoaderData();

  const handleCreateTeam = async(event, formData) => {
    console.log("Handling Create Team");
    console.log("Form Data:", formData);
    const res = await axios.post('/api/teams/create/', formData);
    console.log(res.data);
    if (res.data.success) { 
      console.log("Create Team succeeded");
      console.log("New Team", res.data.newTeam)
      navigate(`/teams/${res.data.newTeam.teamId}`); 
    }
    else {
      setErrorMessage("Failed to create team.");
      console.log("Create Team failed");
      console.error(res.data.error);
    }
  }


  return (
    <>
      { email
        ? <>
            <Container style={{backgroundColor: `rgba(129, 29, 29, 0.8)`, color: "white", border: '1px solid white'}}>
              <Row>
                <Col align='center'>
                  Want to submit a team? Enter a name below and then add some pokemon!
                </Col>
              </Row>

              <Row>
                <Col align='center'>
                  <CreateTeamForm onCreateTeam={handleCreateTeam} />
                </Col>
              </Row>
            </Container>
          <hr />
        </>
        : <></>
      }
      <TeamTable teamList={teams}/>
    </>
  );
}
