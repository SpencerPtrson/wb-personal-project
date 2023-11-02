import { User, PokemonSpecies, PokemonType, PokemonMove, Ability } from '../src/database/models.js'


const handlerFunctions = {


    //#region Users

        getUsers: async (req, res) => {
            const users = await User.findAll();
            res.json(users);
        },

        getUserById: async(req, res) => {
            const { userId } = req.params;
            const user = await User.findByPk(userId);
            res.json(user);
        },

    //#endregion Users


    //#region Species

        getAllSpecies: async(req, res) => {
            const allPokemonSpecies = await PokemonSpecies.findAll();
            res.json(allPokemonSpecies);
        },

        getSpeciesById: async(req, res) => {
            const { speciesId } = req.params;
            const species = await PokemonSpecies.findByPk(speciesId);
            res.json(species);
        },

    //#endregion Species


    //#region Types

        getPokemonTypes: async(req, res) => {
            const allTypes = await PokemonType.findAll();
            res.json(allTypes);
        },

        getPokemonTypesById: async(req, res) => {
            const { typeId } = req.params;
            const type = await PokemonType.findByPk(typeId);
            res.json(type);
        },

    //#endregion Types


    //#region Moves

        getPokemonMoves: async(req, res) => {
            const allMoves = await PokemonMove.findAll();
            res.json(allMoves);
        },

        getPokemonMovesById: async(req, res) => {
            const { moveId } = req.params;
            const move = await PokemonMove.findByPk(moveId);
            res.json(move);
        },

    //#endregion Moves


    //#region ABILITIES

        getPokemonAbilities: async(req, res) => {
            const allAbilities = await Ability.findAll();
            res.json(allAbilities);
        },

        getPokemonAbilitiesById: async(req, res) => {
            const { abilityId } = req.params;
            const ability = await Ability.findByPk(abilityId);
            res.json(ability);
        },


    //#endregion Abilities

}

export default handlerFunctions;