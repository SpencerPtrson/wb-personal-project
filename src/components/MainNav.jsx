import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

export default function MainNav({ brand, leftLinks, rightLinks }) {
  return (
    <>
      <Navbar expand='lg' className="bg-success navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#home">{brand}</Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className='me-auto'>
              {leftLinks.map(({ url, text }) => (
                <NavLink key={text} href={url}>
                {text}
              </NavLink>
              ))}
            </Nav>
            <Nav>
              {rightLinks.map(({ url, text }) => (
                <NavLink key={text} href={url}>
                  {text}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
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

        </Container>
      </Navbar>
    </>
  );
}
