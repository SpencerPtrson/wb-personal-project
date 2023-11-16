export default function EditPokemonInstanceSelectAbilityRow({ ability, stateAbility, setStateAbility }) {
    let { abilityId, name, flavorText, shortDescription } = ability;
    name = name.replace(name[0], name[0].toUpperCase());

    return (
        <>
            <tr key={abilityId} onClick={(e) => setStateAbility({...stateAbility, abilityId: abilityId, abilityName: name})}>
                <td>{name}</td>
                <td>{flavorText}</td>
                <td>{shortDescription}</td>
            </tr>
        </>
    )
}