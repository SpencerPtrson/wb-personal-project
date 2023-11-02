import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function MainNav() {
  const email = useSelector(state => state.user.email);

  return (
    <>
      <Navbar expand='lg' className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Brand href="/">PokePower</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavLink style={{ color: 'lightblue' }} href={'https://dev.azure.com/spetersonwi/'}>
                Azure DevOps
              </NavLink>
              <NavLink style={{ color: 'white' }} href={'https://github.com/SpencerPtrson'}>
                GitHub
              </NavLink>
              <NavLink style={{ color: 'blue' }} href={'https://www.linkedin.com/in/spencer-peterson-9a81b6198/'}>
                LinkedIn
              </NavLink>
            </Nav>

            <Nav className="me-auto">
              <NavLink key={"allpokemonspecies"} href="/pokemonspecies">
                All Pokemon Species
              </NavLink>
              <NavLink key={"allpokemonmoves"} href="/moves">
                All Pokemon Moves
              </NavLink>
            </Nav>

            <Nav className="me-right">
              {email === '' || !email
                ? <>
                  <NavLink key={"login"} href="/login">Login</NavLink>
                  <NavLink key={"createAccount"} href="/createAccount">Create Account</NavLink>
                </> 
                : <>
                  <p style={{color: 'white'}}>{email}</p>
                  <NavLink key={"logout"} href="/logout">Logout</NavLink>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
