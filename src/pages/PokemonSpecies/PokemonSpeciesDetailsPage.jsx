import { useLoaderData } from 'react-router-dom';
import PokemonSpriteImg from '../../components/PokemonSpriteImg'
import SpeciesTypings from '../../components/SpeciesTypings';
import BaseStatsList from '../../components/BaseStatsList';
import MoveTable from '../../components/PokemonMoves/MoveTable';
import AbilityTable from '../../components/PokemonAbilities/AbilityTable';
import { Col, Container, NavLink, Row } from 'react-bootstrap';

export default function PokemonSpeciesDetailsPage() {
  let { pokemonspecies: { speciesId, name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED, PokemonMoves, abilities } } = useLoaderData();
  name = name.slice(0,1).toUpperCase() + name.slice(1);

  let previousSpeciesId = speciesId;
  let nextSpeciesId = speciesId + 1;
  if (speciesId > 1) previousSpeciesId = speciesId - 1;

  return (
    <Container fluid>
      <Row style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>
        <Col align='center' className='my-auto'>
          {
            speciesId > 1
            ? <NavLink href={`/pokemonspecies/${previousSpeciesId}`}>
                Previous Species
              </NavLink>
            : <></>
          }
        </Col>

        <Col align='center' className='my-auto'>
          <h1 style={{textDecoration: 'underline'}}>#{speciesId}: {name}</h1>
        </Col>
        
        <Col align='center' className='my-auto'>
          {
            speciesId < 20
            ?  <NavLink href={`/pokemonspecies/${nextSpeciesId}`}>
                Next Species
              </NavLink>
            : <></>
          }
        </Col>
      </Row>
      
      <Row>
        <Col align='center'>
          <PokemonSpriteImg name={name} sprite={sprite} width={200}/>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <SpeciesTypings type1={type1} type2={type2} />
        </Col>
      </Row>

      <Row>
        <Col>
          <BaseStatsList baseHP={baseHP} baseATK={baseATK} baseDEF={baseDEF} baseSPATK={baseSPATK} baseSPDEF={baseSPDEF} baseSPEED={baseSPEED}/>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col>
          <MoveTable moves={PokemonMoves} />
        </Col>
      </Row>

      <hr />
      <Row>
        <Col>
          <AbilityTable abilities={abilities}/>
        </Col>
      </Row>

      <Row>
        <Col align='center' xs={{span: 2, offset: 5}} style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>
          <NavLink href='/pokemonspecies'>
            Return To All Species
          </NavLink>
        </Col>
      </Row>

    </Container>
  );
}

