import { User, PokemonTeam, PokemonSpecies, PokemonType, PokemonMove, PokemonNature, Ability, db, PokemonInstance } from "./models.js";


const { User } = await import('./src/database/models.js')
const users = await User.findAll();
console.log(users);
const firstUser = await User.findByPk(1);
console.log(firstUser);