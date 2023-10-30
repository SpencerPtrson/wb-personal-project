import axios from "axios";
import { User, PokemonSpecies, PokemonType, PokemonMove, db } from "./models.js";


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

// create database entries for each pokemon gotten from API
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
    });
}


// Get types from the API and create database entries for them
const response = await axios.get(`https://pokeapi.co/api/v2/type`);
const types = response.data.results;
for (const type of types) {
    const newType = await PokemonType.create({
        name: type.name
    });
}


// Get the first 20 moves from the API
const moveList = [];
for (let i = 1; i <= 20; i++) {
    const response = await axios.get(`https://pokeapi.co/api/v2/move/${i}`);
    const move = response.data;
    // console.log("effect_entries:", move.effect_entries);
    // console.log("flavor_text_entries:", move.flavor_text_entries[0].flavor_text);
    moveList.push(response.data);
}

// create database entries for each move gotten from API
for(const move of moveList) {
    const { name, damage_class, type, power, accuracy, pp, priority, effect_entries, flavor_text_entries} = move;
    const newEntry = await PokemonMove.create({
        name: name,
        moveClass: damage_class.name,
        type: type.name,
        power: power ? power : null,
        accuracy: accuracy ? accuracy : null,
        pp: pp,
        priority: priority,
        longDescription: effect_entries.effect,
        shortDescription: effect_entries.short_effect,
        flavorText: flavor_text_entries[0].flavor_text,
    });
}



// Test User
const user = await User.create({
    email: 'test@test.com',
    password: 'test'
});


await db.close();