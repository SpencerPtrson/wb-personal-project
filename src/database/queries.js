import { User, PokemonTeam, PokemonSpecies, PokemonType, PokemonMove, PokemonNature, Ability, db, PokemonInstance } from "./models.js";


const { User, PokemonTeam } = await import('./src/database/models.js')
const users = await User.findAll();
console.log(users);
const firstUser = await User.findByPk(1);
console.log(firstUser);


let teams = await PokemonTeam.findAll();
console.log(teams);

const newTeam = await PokemonTeam.create({
    userId: 1,
    teamName: "Test Name"
});
console.log(newTeam);

teams = await PokemonTeam.findAll();
console.log(teams);

await PokemonTeam.destroy({
    where: {
        teamId: 4
    }
})

const deletedUser = await User.destroy({
    where: {
        userId: 1
    }
});
console.log(deletedUser);