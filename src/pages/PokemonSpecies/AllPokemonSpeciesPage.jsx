import { useLoaderData } from "react-router-dom";
import PokemonSpeciesTable from "../../components/PokemonSpecies/PokemonSpeciesTable";
import { Container, Row, Col } from "react-bootstrap";

export default function AllPokemonSpeciesPage() {
  const { pokemonspecies } = useLoaderData();

  return (
    <Container fluid>
      <Row>
        <Col>
          <PokemonSpeciesTable speciesList={pokemonspecies} />
        </Col>
      </Row>
    </Container>
  );
}
