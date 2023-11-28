import { useLoaderData } from 'react-router-dom';
import PokemonSpriteImg from '../../components/PokemonSpriteImg'
import SpeciesTypings from '../../components/SpeciesTypings';
import BaseStatsList from '../../components/BaseStatsList';
import MoveTable from '../../components/PokemonMoves/MoveTable';
import AbilityTable from '../../components/PokemonAbilities/AbilityTable';
import { Col, Container, Row } from 'react-bootstrap';

export default function PokemonSpeciesDetailsPage() {
  let { pokemonspecies: {name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED, PokemonMoves, abilities } } = useLoaderData();
  name = name.slice(0,1).toUpperCase() + name.slice(1);
  console.log("Abilities - Details Page:", abilities);

  return (
    <Container fluid>
      <h1 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>{name}</h1>
      <Row>
        <Col align='center'>
          <PokemonSpriteImg name={name} sprite={sprite} width={200}/>
        </Col>
      </Row>
      
      
      <SpeciesTypings type1={type1} type2={type2} />
      <BaseStatsList baseHP={baseHP} baseATK={baseATK} baseDEF={baseDEF} baseSPATK={baseSPATK} baseSPDEF={baseSPDEF} baseSPEED={baseSPEED}/>
      <MoveTable moves={PokemonMoves} />
      <br />
      <AbilityTable abilities={abilities}/>
    </Container>
  );
}
