import PokemonSpeciesRow from '../PokemonSpecies/PokemonSpeciesRow'
import EditPokemonInstanceSelectSpeciesRow from './EditPokemonInstanceSelectSpeciesRow';

export default function ScrollableSpeciesTable({ speciesList, state, setStateVals }) {
    const speciesRows = speciesList.map((species) => {
        return <EditPokemonInstanceSelectSpeciesRow key={species.speciesId} species={species} state={state} setStateVals={setStateVals} />
    });
    // return <div onClick={(e) => {
    //     console.log(`Clicked on Row with speciesId ${species.speciesId}, name ${species.name}, and sprite url ${species.sprite}`);
    //     let name = species.name.replace(species.name[0], species.name[0].toUpperCase());
    //     setStateVals({...state, speciesId: species.speciesId, name: name, imgUrl: species.sprite})
    // }}>
    //     <PokemonSpeciesRow key={species.speciesId} species={species}/>
    // </div>

    return (
        <div className='table-responsive scrollable' style={{border: '1px solid black'}}>
            <table className='table'>
                <thead>
                <tr>
                    <th>Sprite</th>
                    <th>Species</th>
                    <th>Typings</th>
                    <th>Base Stats</th>
                </tr>
                </thead>
                <tbody>
                {speciesRows}
                </tbody>
            </table>
        </div>
    );
  }