import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import LogoutButton from "./AccountManagement/LogoutButton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function MainNav({ email }) {
  console.log(email);

  return (
    <>
      <Navbar expand='lg' className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Brand href="/">PokePower</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            {/* Personal Links */}
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
