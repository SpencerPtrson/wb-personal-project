import axios from "axios";
import { User, PokemonSpecies, db } from "./models.js";


await db.sync({force: true}); // Erases all previous data

// Get the first 20 pokemon from the API
const pokemonSpeciesList = [];
for (let i = 1; i <= 20; i++) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    // const pokemon = response.data;
    // console.log("Type 1:", pokemon.types[0].type.name);
    // console.log("Type 2:", pokemon.types[1]?.type.name);
    // console.log("Stats:", pokemon.stats);

    pokemonSpeciesList.push(response.data);
}


// 
for(const pokemon of pokemonSpeciesList) {
    const { sprites, name, types, stats} = pokemon;
    const newEntry = await PokemonSpecies.create({
        sprite: sprites.front_default,
        name: name,
        type1: types[0].type.name,
        type2: types[1]?.type.name,
        baseHP: stats[0].base_stat,
        baseATK: stats[1].base_stat,
        baseDEF: stats[2].base_stat,
        baseSPATK: stats[3].base_stat,
        baseSPDEF: stats[4].base_stat,
        baseSPEED: stats[5].base_stat,
    })
}

const user = await User.create({
    email: 'test@test.com',
    password: 'test'
});


await db.close();