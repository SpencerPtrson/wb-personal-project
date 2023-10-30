import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <>
      <Navbar expand='lg' className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#home">PokePower</Navbar.Brand>
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
            
            <Nav>
              <NavLink key={"login"} href="/login">
                Login
              </NavLink>
              <NavLink key={"allpokemonspecies"} href="/pokemonspecies">
                All Pokemon Species
              </NavLink>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}
