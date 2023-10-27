import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function Value({ title, description, action }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button>{action}</Button>
      </Card.Body>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <>
      <Container>
        <Row>
        {values.map(({ title, description, action }, index) => (
          <Col key={title}>
            <Value key={index} title={title} description={description} action={action} />
          </Col>
        ))}
        </Row>
      </Container>
    </>
  );
}
