import { Row, Col, NavLink } from "react-bootstrap"


export default function MyLinkList() {
    return (
        <footer class="footer mt-auto py-3 bg-light">
            <p>Want to check out my other work? Here are some links!</p>
            <Row>
                <Col>
                    <NavLink style={{ textDecoration: 'underline'}}  href={'https://dev.azure.com/spetersonwi/'}>
                        Azure DevOps
                    </NavLink>                
                </Col>
                <Col>
                    <NavLink style={{ textDecoration: 'underline' }} href={'https://github.com/SpencerPtrson'}>
                        GitHub
                    </NavLink>
                </Col>
                <Col>
                    <NavLink style={{ color: 'blue', textDecoration: 'underline' }} href={'https://www.linkedin.com/in/spencer-peterson-9a81b6198/'}>
                        LinkedIn
                    </NavLink>
                </Col>
            </Row>
        </footer>
    )
}