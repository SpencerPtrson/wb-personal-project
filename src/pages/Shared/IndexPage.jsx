import LoginButton from '../../components/AccountManagement/LoginButton';
import CreateAccountButton from "../../components/AccountManagement/CreateAccountButton";
import DeleteAccountButton from "../../components/AccountManagement/DeleteAccountButton";
import TeamTable from "../../components/Team/TeamTable";
import MyLinkList from "../../components/MyLinkList";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
export default function IndexPage() {
  const email = useSelector(state => state.user.email);
  const userId = useSelector(state => state.user.userId);

  const { teamSample } = useLoaderData();
  console.log(teamSample);


  return (
      <Container fluid>
          <br />
          <br />
          <br />

          <Row>
            <Col xs={{ span: 4, offset: 4}}  align='center' style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white' }}>
              { !email || email === ''
                ? <h4>Login or create an account!</h4>
                : <h4>Manage Your Stuff!</h4>
              }
            </Col>
          </Row>

          <br />

          <Row>
            {email === '' || !email
              ? <>
                  <Col xs={{span: 2, offset: 4}} align='center'>
                    <LoginButton />
                  </Col>
                  <Col xs={{span: 2}} align='center'>
                    <CreateAccountButton />
                  </Col>
                </>
              : <>
                <Col xs={{ span:2, offset: 4}} align='center'>
                  <Button href={`/teams/users/${userId}`}>My Teams</Button>
                </Col> 
                <Col xs={{ span:2 }} align='center'>
                  <DeleteAccountButton />
                </Col>
              </>
            }
          </Row>

        <br />
        <br />
        <br />


        <Row>
          <Col xs={{ span: 4, offset: 4}}  align='center' style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white' }}>
            Want ideas? Check out this team!
          </Col>
        </Row>

        <br />

        <Row>
            <Col>
              <TeamTable teamList={[teamSample]}/>
            </Col>
        </Row>

        <MyLinkList />
      </Container>
    );
  }
  