import { useLoaderData } from "react-router-dom";
import PokemonInstanceTable from "../../components/PokemonInstances/PokemonInstanceTable";
import { Col, Container, Row } from "react-bootstrap";

export default function AllPokemonInstancesPage() {
  const { pokemoninstances } = useLoaderData();
  console.log("All Pokemon Instances Page - pokemoninstances data:", pokemoninstances);
  return (
    <Container fluid>
      <Row>
        <Col>
          <PokemonInstanceTable instanceList={pokemoninstances} isTeamView={false}/>
        </Col>
      </Row>
    </Container>
  );
}
