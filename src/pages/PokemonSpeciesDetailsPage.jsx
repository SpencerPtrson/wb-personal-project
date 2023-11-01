import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetailPage() {
  let { pokemonspecies: {name, sprite, type1, type2, baseHP, baseATK, baseDEF, baseSPATK, baseSPDEF, baseSPEED }} = useLoaderData();
  name = name.slice(0,1).toUpperCase() + name.slice(1);
  type1 = type1.slice(0,1).toUpperCase() + type1.slice(1);
  if (type2) type2 = type2.slice(0,1).toUpperCase() + type2.slice(1);
 

  return (
    <>
      <h1>This is a pokemon species details page!</h1>
      <h1>{name}</h1>
      <img src={sprite} alt={name} style={{ width: '200px' }} />
      <p>Typings: {type1} {type2}</p>
      <p>Base Stats</p>
        <ul>
            <li>Base HP: {baseHP}</li>
            <li>Base Attack: {baseATK}</li>
            <li>Base Defense: {baseDEF}</li>
            <li>Base Special Attack: {baseSPATK}</li>
            <li>Base Special Defense: {baseSPDEF}</li>
            <li>Base Speed: {baseSPEED}</li>
        </ul>
      
    </>
  );
}
