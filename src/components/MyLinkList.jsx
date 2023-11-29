import { Container, Row, Col, NavLink } from "react-bootstrap"
import { ModalFooter } from "react-bootstrap"


export default function MyLinkList() {
    return (
        <Container className="footer fixed-bottom my-auto py-3" style={{backgroundColor: `rgba(129, 29, 29, 0.8)`, color: "white", border: '1px solid white'}}>
            <Row>
                <Col align='center'>
                    Want to check out my other work? Here are some links!
                </Col>
            </Row>
            <Row>
                <Col align='center'>
                    <NavLink style={{ color: 'white', textDecoration: 'underline' }} href={'https://github.com/SpencerPtrson'}>
                        GitHub
                    </NavLink>
                </Col>
                <Col align='center'>
                    <NavLink style={{ color: 'white', textDecoration: 'underline' }} href={'https://www.linkedin.com/in/spencer-peterson-9a81b6198/'}>
                        LinkedIn
                    </NavLink>
                </Col>
            </Row>
            <Row>
                <Col align='center'>
                    <NavLink style={{ color: 'white', textDecoration: 'underline', fontSize: '12px' }} href={'https://www.rpgfan.com/wp-content/uploads/2020/10/Pokemon-Mystery-Dungeon-Explorers-of-Sky-Artwork-003.jpg'}>
                        Background image sourced from RPGFan.com
                    </NavLink>
                </Col>
            </Row>
        </Container>
    )
}