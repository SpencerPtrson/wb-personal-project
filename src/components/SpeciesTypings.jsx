export default function SpeciesTypings({ type1, type2 }) {
    type1 = type1.slice(0,1).toUpperCase() + type1.slice(1);
    if (type2) type2 = type2.slice(0,1).toUpperCase() + type2.slice(1);  
    
    return (
        <div style={{ backgroundColor: `rgba(129, 29, 29, 0.8)`, color: 'white', textAlign: 'center', border: '1px solid white' }}>Type(s): {type1} {type2}</div>
    )
}