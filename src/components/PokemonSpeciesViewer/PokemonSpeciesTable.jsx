
import { requestSpecies } from '../../reducers/pokemonSpeciesReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PokemonSpeciesRow from './PokemonSpeciesRow';

export default function PokemonSpeciesTable({ speciesList }) {
    // const loading = useSelector(state => state.pokemonSpecies.loading);
    // const speciesList = useSelector(state => state.pokemonSpecies.speciesList);
  
    // // gets species data from state, so it doesn't need props passed down

    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(requestSpecies);
    // }, []);
    
    const speciesRows = speciesList.map((species) => {
        return <PokemonSpeciesRow key={species.speciesId} species={species} 
    />});


    return (
      <table>
        <tbody>
          {speciesRows}
        </tbody>
      </table>
    );
  }