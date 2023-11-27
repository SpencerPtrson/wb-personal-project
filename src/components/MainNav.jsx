import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import LogoutButton from "./AccountManagement/LogoutButton";
import { useSelector, useDispatch } from "react-redux";

export default function MainNav() {
  const email = useSelector(state => state.user.email);
  const userId = useSelector(state => state.user.userId);
  return (
    <>
      <Navbar expand='lg' className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Brand href="/">PokePower</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>


            {/* Site Navigation */}
            <Nav className="me-auto">
              <NavLink key={"allpokemonspecies"} href="/pokemonspecies">
                All Pokemon Species
              </NavLink>
              <NavLink key={"allpokemonmoves"} href="/moves">
                All Pokemon Moves
              </NavLink>
              <NavLink key={"allpokemoninstances"} href="/pokemoninstances">
                All Pokemon Instances
              </NavLink>
              <NavLink key={"allteams"} href="/teams">
                All Teams
              </NavLink>

              {!email || email === ''
                ? <>
                </> 
                : <>
                  <NavLink key={"userTeams"} href={`/teams/users/${userId}`}>My Teams</NavLink>
                </>
              }
            </Nav>

            {/* Account Management */}
            <Nav className="me-right">
              {!email || email === ''
                ? <>
                  <NavLink key={"login"} href="/login">Login</NavLink>
                  <NavLink key={"createAccount"} href="/createAccount">Create Account</NavLink>
                </> 
                : <>
                  <p style={{color: 'white'}}>{email}</p>
                  <LogoutButton />
                </>
              }
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}
