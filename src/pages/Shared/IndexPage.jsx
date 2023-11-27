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
        <div className="container">
          <Row>
            <Col xs={{offset: 4}}>
              { !email || email === ''
                ? <>Login or create an account!</>
                : <>Manage Your Stuff!</>
              }
            </Col>
          </Row>
          <Row>
            {email === '' || !email
              ? <>
                  <Col xs={{}}>
                    <LoginButton />
                  </Col>
                  <Col>
                    <CreateAccountButton />
                  </Col>
                </>
              : <>
                <Col xs={{ span:4, offset: 4}}>
                  <Button href={`/teams/users/${userId}`}>My Teams</Button>
                  <DeleteAccountButton />
                </Col> 
              </>
            }
          </Row>
        </div>

        <br />
        <Row>
          <Col xs={{ offset: 5}}>
            Want Ideas? Check out this team!
          </Col>
        </Row>
        <Row>
            <Col>
              <TeamTable teamList={[teamSample]}/>
            </Col>
        </Row>

        <MyLinkList />
      </Container>
    );
  }
  