import { User, PokemonSpecies, PokemonType, PokemonMove, Ability, PokemonInstance, PokemonTeam } from '../src/database/models.js'

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

        createUser: async(req, res) => {
            try {
                const { email, password } = req.body;
                console.log(`Creating user with email ${email} and password ${password}`);
                const newUser = await User.create({
                    email: email,
                    password: password
                });
                req.session.userId = newUser.userId;
                req.session.email = newUser.email;
                res.json(newUser);
            } catch (error) {
                console.log("Unable to create account");
                console.log("Error:", error);
                res.json({success: false, error: error});
            }
        },

    //#endregion Users


    //#region AccountManagement
    
        logIn: async(req, res) => {
            const { email, password } = req.body;
            console.log(email, password);
            const user = await User.findOne({
                where: { email: email }
            });
    
            if (user?.password === password) {
                req.session.userId = user.userId;
                req.session.email = user.email
                res.json({ success: true, userId: user.userId });
            }
            else res.json({ success: false });
        },

        logOut: async (req, res) => {
            req.session.destroy();
            res.json({ success: true });
        },

        userCheck: async (req, res) => {
            console.log("User Check called!");
            if (req.session.userId) {
                const user = await User.findByPk(req.session.userId);
                console.log("User check found user:", user);
                res.send({ email: user.email, userId: user.userId })
            }
            else {
                console.log("No session.userId found!")
                res.send({ email: null, userId: null })
            }
        },


    //#endregion AccountManagement


    //#region Teams
        getTeams: async(req, res) => {
            const teams = await PokemonTeam.findAll();
            res.json(teams);
        },

        getTeamByTeamId: async(req, res) => {
            const { teamId } = req.params;
            console.log(teamId);
            const team = await PokemonTeam.findByPk(teamId, {
                include: [
                    { model: PokemonInstance, include: { model: PokemonSpecies } },
                    { model: User }
                ]});
            res.json(team);
        },

        getTeamsByUserId: async(req, res) => {
            const { userId } = req.params;
            const teams = await PokemonTeam.findAll({
                where: { userId: userId}
            });
            res.json(teams);
        },
    //#endregion Teams


    //#region Species

        getAllSpecies: async(req, res) => {
            const allPokemonSpecies = await PokemonSpecies.findAll();
            res.json(allPokemonSpecies);
        },

        getSpeciesById: async(req, res) => {
            const { speciesId } = req.params;
            const species = await PokemonSpecies.findByPk(speciesId, {
                include: PokemonMove
            });
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


    //#region Abilities

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

    
    //#region PokemonInstances
        getPokemonInstances: async(req, res) => {
            const allPokemonInstances = await PokemonInstance.findAll({
                include: [
                    { model: PokemonTeam, include: { model: User } },
                    { model: PokemonSpecies }
                ]
            });
            res.json(allPokemonInstances);
        },

        getPokemonInstanceByInstanceId: async(req, res) => {
            const { pokemonInstanceId } =  req.params;
            const pokemonInstance = await PokemonInstance.findByPk(pokemonInstanceId, {
                include: PokemonSpecies
            });
            res.json(pokemonInstance);
        },

        createPokemonInstance: async(req, res) => {
            try {
                const { speciesId, teamId } = req.body;
                console.log("Creating new pokemon instance");
                const newPokemonInstance = await PokemonInstance.create({
                    speciesId: speciesId,
                    teamId: 0,
                    natureId: 0,
                    level: 0,
                    move1Id: 0,

                    hpIV: 31,
                    atkIV: 31,
                    defIV: 31,
                    spATKIV: 31,
                    spDEFIV: 31,
                    speedIV: 31,
            
                    hpEV: 0,
                    atkEV: 0,
                    defEV: 0,
                    spATKEV: 0,
                    spDEFEV: 0,
                    speedEV: 0,
                });
                res.json(newPokemonInstance);
            } catch (error) {
                console.log("Unable to create pokemon!");
                console.log(error);
                res.json({success: false, error: error})
            }
        },
    //#endregion PokemonInstances
}

export default handlerFunctions;