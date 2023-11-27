import { Row, Col, NavLink } from "react-bootstrap"
import { ModalFooter } from "react-bootstrap"


export default function MyLinkList() {
    return (
        <ModalFooter class="footer fixed-bottom py-3 bg-light" style={{opacity: 0.5}}>
            <Row>
                <Col align='center'>
                    Want to check out my other work? Here are some links!
                </Col>
            </Row>
            <Row>
                <Col align='center'>
                    <NavLink style={{ color: 'blue', textDecoration: 'underline'}}  href={'https://dev.azure.com/spetersonwi/'}>
                        Azure DevOps
                    </NavLink>                
                </Col>
                <Col align='center'>
                    <NavLink style={{ color: 'blue', textDecoration: 'underline' }} href={'https://github.com/SpencerPtrson'}>
                        GitHub
                    </NavLink>
                </Col>
                <Col align='center'>
                    <NavLink style={{ color: 'blue', textDecoration: 'underline' }} href={'https://www.linkedin.com/in/spencer-peterson-9a81b6198/'}>
                        LinkedIn
                    </NavLink>
                </Col>
            </Row>
        </ModalFooter>
    )
}