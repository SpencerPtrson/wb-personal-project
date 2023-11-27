import { useSelector } from "react-redux";
import LoginButton from '../../components/AccountManagement/LoginButton';
import CreateAccountButton from "../../components/AccountManagement/CreateAccountButton";
import DeleteAccountButton from "../../components/AccountManagement/DeleteAccountButton";
import { useLoaderData } from "react-router-dom";
import TeamTable from "../../components/Team/TeamTable";
import MyLinkList from "../../components/MyLinkList";
import { Container, Row, Col } from "react-bootstrap";
export default function IndexPage() {
  const email = useSelector(state => state.user.email);
  const { teamSample } = useLoaderData();
  console.log(teamSample);


  return (
      <Container fluid>
        <div className="bg-light container" style={{width: 500, border: '1px solid black'}}>
          <Row>
            <Col xs={{offset: 4}}>
              { !email || email === ''
                ? <>Login or create an account!</>
                : <>Manage Your Account!</>
              }
            </Col>
          </Row>
          <Row>
            {email === '' || !email
              ? <>
                  <Col xs={{ span:4, offset: 2}}>
                    <LoginButton />
                  </Col>
                  <Col xs={{ span: 4, offset: 1}}>
                    <CreateAccountButton />
                  </Col>
                </>
              : <>
                <Col xs={{ span:4, offset: 4}}>
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
  