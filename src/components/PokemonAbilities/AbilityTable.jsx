import AbilityRow from "./AbilityRow";

export default function AbilityTable({ abilities }) {
    const abilityRows = abilities?.map((ability) => {
        return <AbilityRow key={ability.abilityId} ability={ability} />
      });
    console.log("Abilities:", abilities);

    return (
        <>
            {
                abilityRows && abilities.length > 0
                ? <h5 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>Possible Abilities</h5>
                : <h5 style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>No Abilities Listed</h5>
            }
            <table className="table">
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
        </>
    );
  }