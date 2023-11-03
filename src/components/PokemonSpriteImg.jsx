export default function PokemonSpriteImg({name, sprite, width}) {
    return (
        <img src={sprite} alt={name + " Sprite"} width={width}></img>
    )
}