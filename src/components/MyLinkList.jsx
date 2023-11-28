import { Row, Col, NavLink } from "react-bootstrap"
import { ModalFooter } from "react-bootstrap"


export default function MyLinkList() {
    return (
        <ModalFooter className="footer fixed-bottom py-3" style={{backgroundColor: `rgba(129, 29, 29, 0.8)`, color: "white"}}>
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
        </ModalFooter>
    )
}