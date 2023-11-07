import { useLoaderData } from 'react-router-dom';
import PokemonSpriteImg from '../../components/PokemonSpriteImg'
import SpeciesTypings from '../../components/SpeciesTypings';
import BaseStatsList from '../../components/General Data Viewing/IndividualSpeciesViewer/BaseStatsList';
import SpeciesMovesList from '../../components/General Data Viewing/IndividualSpeciesViewer/SpeciesMovesList';

export default function PokemonSpeciesDetailsPage() {
  let { pokemonspecies: {name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED, PokemonMoves }} = useLoaderData();
  console.log(PokemonMoves);
  name = name.slice(0,1).toUpperCase() + name.slice(1);

  return (
    <>
      <h1>{name}</h1>
      <PokemonSpriteImg name={name} sprite={sprite} width={200}/>
      <SpeciesTypings type1={type1} type2={type2} />
      <BaseStatsList baseHP={baseHP} baseATK={baseATK} baseDEF={baseDEF} baseSPATK={baseSPATK} baseSPDEF={baseSPDEF} baseSPEED={baseSPEED}/>
      <SpeciesMovesList SpeciesMoves={PokemonMoves}/>
    </>
  );
}
