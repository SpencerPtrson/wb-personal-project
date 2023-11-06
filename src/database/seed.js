import axios from "axios";
import { User, PokemonSpecies, PokemonType, PokemonMove, PokemonNature, Ability, db } from "./models.js";


await db.sync({force: true}); // Erases all previous data


//#region Species
    // Get pokemon from the API
    const apiSpeciesList = [];
    for (let i = 1; i <= 11; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        apiSpeciesList.push(response.data);
    }

    // create database entries for each pokemon gotten from API
    for(const pokemon of apiSpeciesList) {
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
    const responseTypes = await axios.get(`https://pokeapi.co/api/v2/type`);
    const apiTypes = responseTypes.data.results;

    // Add types to database
    for (const type of apiTypes) {
        const id = type.url.replace('https://pokeapi.co/api/v2/type/', '').slice(0,-1);
        const newType = await PokemonType.create({
            typeId: id,
            name: type.name
        });
    }
//#endregion Types


//#region Moves
    // Get the first 20 moves from the API
    const apiMoves = [];
    for (let i = 1; i <= 20; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/move/${i}`);
        apiMoves.push(response.data);
    }

    // create database entries for each move gotten from API
    for(const move of apiMoves) {
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
    const apiAbilities = [];
    for (let i = 1; i <= 1; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/ability/${i}`);
        apiAbilities.push(response.data);
    }

    // create database entries for each move gotten from API
    for(const ability of apiAbilities) {
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


//#region Natures
const apiNatures = [];
for (let i = 1; i <= 25; i++) {
    const response = await axios.get(`https://pokeapi.co/api/v2/nature/${i}`);
    apiNatures.push(response.data);
}

// create database entries for each move gotten from API
for(const nature of apiNatures) {
    const { id, name, decreased_stat, increased_stat } = nature;
    console.log(`Creating Nature: ${name}`);
    const newEntry = await PokemonNature.create({
        natureId: id,
        name: name,
        increasedStat: increased_stat?.name,
        decreasedStat: decreased_stat?.name
    });
}
//#endregion Natures


//#region Foreign Key Data
    let dbSpecies = await PokemonSpecies.findAll();
    let dbMoves = await PokemonMove.findAll();

    // SPECIES - ABILITIES
    // console.log(apiAbilities);
    for (const species of dbSpecies) {
        for (let i = 0; i < apiAbilities.length; i++) {
            const abilityPokemonList = apiAbilities[i].pokemon.filter(abilityListing => abilityListing.pokemon.name === species.name);
            if (abilityPokemonList.length > 0) {
                // console.log(abilityPokemonList);
                const abilityToAdd = await Ability.findOne({
                    where: { name: apiAbilities[i].name }
                })
                // console.log(abilityToAdd);
                // console.log(`Adding ${abilityToAdd.name} to ${species}`);
                // console.log(species);
                species.addAbility(abilityToAdd);
                // console.log(`Added the ability ${abilityToAdd.name} to ${species.name}`)
            }
            // else console.log(`${species.name} does not have the ability ${apiAbilities[i].name}`);
        }
    }

    // SPECIES - MOVES
    // console.log(apiMoves);
    for (const species of dbSpecies) {
        for (let i = 0; i < apiMoves.length; i++) {
            const movePokemonList = apiMoves[i].learned_by_pokemon.filter(moveListing => moveListing.name === species.name);
            if (movePokemonList.length > 0) {
                // console.log(movePokemonList);
                const moveToAdd = await PokemonMove.findOne({
                    where: { name: apiMoves[i].name }
                })
                // console.log(moveToAdd);
                // console.log(`Adding ${moveToAdd.name} to ${species}`);
                // console.log(species);
                species.addPokemonMove(moveToAdd);
                // console.log(`Added the move ${moveToAdd.name} to ${species.name}`)
            }
            // else console.log(`${species.name} does not have the move ${apiMoves[i].name}`);
        }
    }

    // SPECIES - TYPES
    // console.log("API TYPES:", apiTypes);
    for (const species of dbSpecies) {
        const typeList = apiTypes.filter(typeListing => species.type1 === typeListing.name || species.type2 === typeListing.name);
        for (let i = 0; i < typeList.length; i++) {
            const typeToAdd = await PokemonType.findOne({
                where: { name: typeList[i].name }
            });
            species.addPokemonType(typeToAdd);
            console.log(`Added the type ${typeToAdd.name} to ${species.name}`)
        }
    }

    // MOVES - TYPES
    // console.log("API TYPES:", apiTypes);
    for (const move of dbMoves) {
        const typeList = apiTypes.filter(typeListing => move.type === typeListing.name);
        for (let i = 0; i < typeList.length; i++) {
            const typeToSet = await PokemonType.findOne({
                where: { name: typeList[i].name }
            });
            move.setPokemonType(typeToSet);
            console.log(`Added the type ${typeToSet.name} to ${move.name}`)
        }
    }
//#endregion Foreign Key Data


//#region  Users
    // Create Test UsersTest User
    const user1 = await User.create({
        email: '1@test.com',
        password: 'test'
    });
    const user2 = await User.create({
        email: '2@test.com',
        password: 'test'
    });
//#endregion Users

await db.close();