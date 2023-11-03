import { useLoaderData, useNavigate } from 'react-router-dom';
import PokemonSpriteImg from '../components/PokemonDetails/PokemonSpriteImg'
import axios from 'axios';
import BaseStatsList from '../components/PokemonDetails/BaseStatsList';
import SpeciesTypings from '../components/PokemonDetails/SpeciesTypings';

export default function MovieDetailPage() {
  let { pokemonspecies: {name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED }} = useLoaderData();

  return (
    <>
      <h1>{name}</h1>
      <PokemonSpriteImg name={name} sprite={sprite} width={200}/>
      <SpeciesTypings type1={type1} type2={type2} />
      <BaseStatsList baseHP={baseHP} baseATK={baseATK} baseDEF={baseDEF} baseSPATK={baseSPATK} baseSPDEF={baseSPDEF} baseSPEED={baseSPEED}/>
    </>
  );
}
