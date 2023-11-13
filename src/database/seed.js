import axios from "axios";
import { User, PokemonTeam, PokemonSpecies, PokemonType, PokemonMove, PokemonNature, Ability, db, PokemonInstance } from "./models.js";


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
        await PokemonSpecies.create({
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
        await PokemonType.create({
            typeId: id,
            name: type.name
        });
    }
//#endregion Types


//#region Moves
    // Get the first x moves from the API
    const apiMoves = [];
    for (let i = 1; i <= 30; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/move/${i}`);
        apiMoves.push(response.data);
    }

    // create database entries for each move gotten from API
    for(const move of apiMoves) {
        const { id, name, damage_class, type, power, accuracy, pp, priority, effect_entries, flavor_text_entries} = move;
        await PokemonMove.create({
            moveId: id,
            name: name,
            moveClass: damage_class.name,
            type: type.name,
            power: power ? power : null,
            accuracy: accuracy ? accuracy : null,
            pp: pp,
            priority: priority,
            shortDescription: effect_entries[0]?.short_effect,
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

        await Ability.create({
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
        await PokemonNature.create({
            natureId: id,
            name: name,
            increasedStat: increased_stat?.name,
            decreasedStat: decreased_stat?.name
        });
    }
//#endregion Natures


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


//#region teams
    // create a pokemon team for user 1
    const team1User1 = await PokemonTeam.create({
        userId: user1.userId,
        teamName: "User 1 Test 1"
    });

    const team2User1 = await PokemonTeam.create({
        userId: user1.userId,
        teamName: "User 1 Test 2"
    });

    const team1User2 = await PokemonTeam.create({
        userId: user2.userId,
        teamName: "User 2 Test 1"
    });
//#endregion teams


// function calculateHPStat(baseHP, hpIV, hpEV, level) {
// return Math.floor((((2 * baseHP + hpIV + hpEV / 4) * level) / 100) + level + 10);
// }

// function calculateNonHPStat(baseStat, statIV, statEV, level, natureModifer) {
//   const numerator = Math.floor(2 * baseStat + statIV + statEV / 4) * level;
//   let result = Math.floor((numerator / 100) + 5)
//   if (natureModifer) result *= natureModifer;
//   console.log(result)
//   return Math.floor(result);
// }


//#region Foreign Key Data
      let dbSpecies = await PokemonSpecies.findAll();
      let dbMoves = await PokemonMove.findAll();
  
      // SPECIES - ABILITIES
      for (const species of dbSpecies) {
          for (let i = 0; i < apiAbilities.length; i++) {
              const abilityPokemonList = apiAbilities[i].pokemon.filter(abilityListing => abilityListing.pokemon.name === species.name);
              if (abilityPokemonList.length > 0) {
                  const abilityToAdd = await Ability.findOne({
                      where: { name: apiAbilities[i].name }
                  });
                  species.addAbility(abilityToAdd);
              }
          }
      }
  
      // SPECIES - MOVES
      for (const species of dbSpecies) {
          for (let i = 0; i < apiMoves.length; i++) {
              const movePokemonList = apiMoves[i].learned_by_pokemon.filter(moveListing => moveListing.name === species.name);
              if (movePokemonList.length > 0) {
                  const moveToAdd = await PokemonMove.findOne({
                      where: { name: apiMoves[i].name }
                  });
                  species.addPokemonMove(moveToAdd);
              }
          }
      }
  
      // SPECIES - TYPES
      for (const species of dbSpecies) {
          const typeList = apiTypes.filter(typeListing => species.type1 === typeListing.name || species.type2 === typeListing.name);
          for (let i = 0; i < typeList.length; i++) {
              const typeToAdd = await PokemonType.findOne({
                  where: { name: typeList[i].name }
              });
              species.addPokemonType(typeToAdd);
          }
      }

      // MOVES - TYPES
      for (const move of dbMoves) {
          const typeList = apiTypes.filter(typeListing => move.type === typeListing.name);
          for (let i = 0; i < typeList.length; i++) {
              const typeToSet = await PokemonType.findOne({
                  where: { name: typeList[i].name }
              });
              move.setPokemonType(typeToSet);
          }
      }
  //#endregion Foreign Key Data


//#region PokemonInstances
    // Get first pokemon from database
    // Create an instance of it with EVs and IVs set to 0 and level set to 1
    const speciesToInstance = dbSpecies[0];
    const moveToAssign = dbMoves[0];
    const dbNatures = await PokemonNature.findAll();
    console.log(moveToAssign);
    // console.log("Species to Instance:", speciesToInstance);
    const instance1 = await PokemonInstance.create({
        speciesId: speciesToInstance.speciesId,
        natureId: dbNatures[0].natureId,
        teamId: 1,
        level: 100,
        move1Id: moveToAssign.moveId,

        hpIV: 31,
        atkIV: 21,
        defIV: 5,
        spATKIV: 9,
        spDEFIV: 29,
        speedIV: 15,

        hpEV: 235,
        atkEV: 101,
        defEV: 4,
        spATKEV: 5,
        spDEFEV: 88,
        speedEV: 79,
    });

    const instance2 = await PokemonInstance.create({
        speciesId: dbSpecies[1].speciesId,
        natureId: dbNatures[0].natureId,
        teamId: 1,
        level: 100,
        move1Id: moveToAssign.moveId,

        hpIV: 21,
        atkIV: 19,
        defIV: 26,
        spATKIV: 1,
        spDEFIV: 22,
        speedIV: 9,

        hpEV: 16,
        atkEV: 252,
        defEV: 4,
        spATKEV: 40,
        spDEFEV: 153,
        speedEV: 1,
    });

    const instance3 = await PokemonInstance.create({
        speciesId: dbSpecies[6].speciesId,
        natureId: dbNatures[0].natureId,
        teamId: 2,
        level: 100,
        move1Id: moveToAssign.moveId,

        hpIV: 21,
        atkIV: 19,
        defIV: 26,
        spATKIV: 1,
        spDEFIV: 22,
        speedIV: 9,
        
        hpEV: 16,
        atkEV: 252,
        defEV: 4,
        spATKEV: 40,
        spDEFEV: 153,
        speedEV: 1,
    });



//#endregion PokemonInstances




// POKEMON INSTANCES - MOVES
let dbInstances = await PokemonInstance.findAll({
    include: {
        model: PokemonSpecies,
        include: {model: PokemonMove }
    }
});
for (const instance of dbInstances) {
    // get the pokemon species of the instance
    // get the moves of the species
    const speciesMoveList = instance.PokemonSpecy.PokemonMoves;
    // set the first four moves of the species to the first four moves of the instance
    for (let i = 0; i < 4; i++) {
        if (speciesMoveList[i]) {
            console.log(`Setting Pokemon Instance ${instance.pokemonInstanceId} to have a moveId of ${speciesMoveList[i].moveId} (${speciesMoveList[i].name})`)
            await instance.addPokemonMove(speciesMoveList[i]);
        }
    }
    await instance.save();
}



await db.close();