import axios from "axios";
import { User, PokemonSpecies, PokemonType, PokemonMove, Ability, db } from "./models.js";


await db.sync({force: true}); // Erases all previous data


//#region Species
    // Get pokemon from the API
    const dbSpeciesList = [];
    for (let i = 1; i <= 111; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        dbSpeciesList.push(response.data);
    }

    // create database entries for each pokemon gotten from API
    for(const pokemon of dbSpeciesList) {
        const { id, sprites, name, types, stats} = pokemon;
        const newEntry = await PokemonSpecies.create({
            speciesId: id,
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
//#endregion Species

//#region Types
    // Get types from the API
    const response = await axios.get(`https://pokeapi.co/api/v2/type`);
    const types = response.data.results;
    console.log(types);

    // Add types to database
    for (const type of types) {
        const id = type.url.replace('https://pokeapi.co/api/v2/type/', '').slice(0,-1);
        console.log(id);
        const newType = await PokemonType.create({
            typeId: id,
            name: type.name
        });
    }
//#endregion Types

//#region Moves
    // Get the first 20 moves from the API
    const moveList = [];
    for (let i = 1; i <= 20; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/move/${i}`);
        const move = response.data;
        moveList.push(response.data);
    }

    // create database entries for each move gotten from API
    for(const move of moveList) {
        const { id, name, damage_class, type, power, accuracy, pp, priority, effect_entries, flavor_text_entries} = move;
        const newEntry = await PokemonMove.create({
            moveId: id,
            name: name,
            moveClass: damage_class.name,
            type: type.name,
            power: power ? power : null,
            accuracy: accuracy ? accuracy : null,
            pp: pp,
            priority: priority,
            shortDescription: effect_entries.short_effect,
            flavorText: flavor_text_entries[0].flavor_text,
        });
    }
//#endregion Moves

//#region Abilities
    // Get the first 20 moves from the API
    const abilityList = [];
    for (let i = 1; i <= 1; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/ability/${i}`);
        const ability = response.data;
        // console.log("effect_entries:", move.effect_entries);
        // console.log("flavor_text_entries:", move.flavor_text_entries[0].flavor_text);
        abilityList.push(response.data);
    }

    // create database entries for each move gotten from API
    for(const ability of abilityList) {
        const { id, name, effect_entries, flavor_text_entries} = ability;
        const englishEffectDesc = effect_entries.filter(effect_entry => effect_entry.language.name === 'en')[0];
        const englishFlavorDesc = flavor_text_entries.filter(effect_entry => effect_entry.language.name === 'en')[0];

        const newEntry = await Ability.create({
            abilityId: id,
            name: name,
            shortDescription: englishEffectDesc.short_effect,
            flavorText: englishFlavorDesc.flavor_text
        });
    }
//#endregion Abilities


// //#region Foreign Key Data
// let specList = await PokemonSpecies.findAll({
//     order: [['speciesId', 'ASC']]
// });
// for (const species of specList) {
//     console.log("Checking if an ability lists", species.name, "as valid")
//     // for each species, check if their name appears in the abilities response from the api

//     for (let i = 0; i < abilityList.length; i++) {
//         const ability = abilityList[i];
//         console.log("Checking ability: ", ability.name)

//         for (const pokemonList of ability.pokemon) {
//             console.log("Ability is for:", pokemonList.pokemon.name);
//             if (pokemonList.pokemon.name === species.name) {
//                 console.log(`${species.name} has the ability ${ability.name}`)
//                 const pokemonToAlter = await PokemonSpecies.findByPk(species.speciesId)
//                 await pokemonToAlter.addAbility(ability);
//             }
//         }

//     }    
// }



// //#endregion Foreign Key Data



// Test User
const user = await User.create({
    email: 'test@test.com',
    password: 'test'
});


await db.close();