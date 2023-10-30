import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

export default function MainNav() {
  return (
    <>
      <Navbar expand='lg' className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#home">Personal Links</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav>
              <NavLink style={{ color: 'lightblue' }} href={'https://dev.azure.com/spetersonwi/'}>
                Azure DevOps
              </NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: 'white' }} href={'https://github.com/SpencerPtrson'}>
                GitHub
              </NavLink>
            </Nav>
            <Nav>
              <NavLink style={{ color: 'blue' }} href={'https://www.linkedin.com/in/spencer-peterson-9a81b6198/'}>
                LinkedIn
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavLink key={"login"} to="/login">
                Login
              </NavLink>
              <NavLink key={"allpokemonspecies"} to="/pokemonspecies">
                All Pokemon Species
              </NavLink>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}
