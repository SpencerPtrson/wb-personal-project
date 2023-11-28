export default function SpeciesTypings({ type1, type2 }) {
    type1 = type1.slice(0,1).toUpperCase() + type1.slice(1);
    if (type2) type2 = type2.slice(0,1).toUpperCase() + type2.slice(1);  
    
    return (
        <>Type(s): {type1} {type2}</>
    )
}