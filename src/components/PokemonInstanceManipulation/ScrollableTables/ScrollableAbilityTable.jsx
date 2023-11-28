import EditPokemonInstanceSelectAbilityRow from './EditPokemonInstanceSelectAbilityRow';

export default function ScrollableAbilityTable({ currentSpeciesId, abilityList, stateAbility, setStateAbility }) {
    abilityList = abilityList.filter(ability => {
        const associatedSpecies = ability.PokemonSpecies;
        for (const species of associatedSpecies) {
            if (species.speciesId === currentSpeciesId) return true;
        }
        return false;
    });

    const abilityRows = abilityList.map((ability) => {
        return <EditPokemonInstanceSelectAbilityRow key={ability.abilityId} ability={ability} stateAbility={stateAbility} setStateAbility={setStateAbility}/>
    });

    return (
        <div className='table-responsive scrollable' style={{border: '1px solid black'}}>
            {
                abilityList?.length > 0
                ?<table className="table">
                    <thead>
                        <tr>
                            <th>Ability</th>
                            <th>Flavor Text</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            abilityRows
                            ? abilityRows
                            : <></>
                        }
                    </tbody>
                </table>
                : <h6 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>No Legal Abilities</h6>
            }
            
        </div>
    );
  }