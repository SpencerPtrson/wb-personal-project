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

        // NEED TO LEARN HOW DELETING THIS IMPACTS FOREIGN KEY TABLES, LIKE USER
        deleteUser: async(req, res) => {
            try {
                const { userId } = req.body;
                console.log(userId);
                const userToDelete = await User.destroy({
                    where: { userId: userId }
                });
                res.json({success: true, deletedUser: userToDelete});
            } catch (error) {
                console.log("Delete User Failed! Here's the error:", error);
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
            try {
                console.log("User Check called!");
                if (req.session.userId) {
                    console.log("Session UserId is:", req.session.userId);
                    const user = await User.findByPk(req.session.userId);
                    console.log("User check found user:", user);
                    res.send({ email: user?.email ?? null, userId: user?.userId ?? null })
                }
                else {
                    console.log("No session.userId found!")
                    res.send({ email: null, userId: null })
                }
            } catch (error) {
                console.log("User check failed!");
                console.log("Error:", error);
            }
        },


    //#endregion AccountManagement


    //#region Teams
        getTeams: async(req, res) => {
            const teams = await PokemonTeam.findAll({
                include: [
                    { 
                        model: PokemonInstance, 
                        attributes: ['pokemonInstanceId'],
                        include: [{
                            model: PokemonSpecies,
                            attributes: ['sprite', 'name']
                        }],
                    },
                    {
                        model: User,
                        attributes: ['email']
                    }
                ],
                order: [
                    ['userId', 'ASC'],
                    ['teamName', 'ASC']
                ]
            });
            res.json(teams);
        },

        getTeamByTeamId: async(req, res) => {
            const { teamId } = req.params;
            const team = await PokemonTeam.findByPk(teamId, {
                include: [
                    {
                        model: PokemonInstance, include: [
                            { model: PokemonSpecies },
                            { model: PokemonMove },
                            { model: Ability }
                        ]},
                        { model: User }
                    ]
                }
            );
            res.json(team);
        },

        getTeamsByUserId: async(req, res) => {
            const { userId } = req.params;
            const teams = await PokemonTeam.findAll({
                where: { userId: userId},
                include: [
                    { 
                        model: PokemonInstance, 
                        attributes: ['pokemonInstanceId'],
                        include: [{
                            model: PokemonSpecies,
                            attributes: ['sprite', 'name']
                        }],
                    },
                    {
                        model: User,
                        attributes: ['email']
                    }
                ],
                order: [
                    ['userId', 'ASC'],
                    ['teamName', 'ASC']
                ]
            });
            res.json(teams);
        },

        createTeam: async (req, res) => {
            try {
                const { userId, teamName } = req.body;
                console.log(`Creating a team for user: ${userId} with teamName ${teamName}`)
                const newTeam = await PokemonTeam.create({
                    userId: userId,
                    teamName: teamName
                });
                res.json({success: true, newTeam: newTeam});
            } catch (error) {
                console.log("Create Team Failed! Here's the error:", error);
                res.json({success: false, error: error});
            }
        },

        editTeam: async (req, res) => {
            try {
                const { teamId } = req.params;
                const { teamName } = req.body;
                const teamToEdit = await PokemonTeam.findByPk(teamId);
                teamToEdit.teamName = teamName;
                teamToEdit.save();
                res.json({success: true, editedTeam: teamToEdit});
            } catch (error) {
                console.log("Edit Team Failed! Here's the error:", error);
                res.json({success: false, error: error});
            }
        },

        deleteTeam: async (req, res) => {
            try {
                const { teamId } = req.body;
                const teamToDelete = await PokemonTeam.destroy({
                    where: { teamId: teamId }
                });
                res.json({success: true, deletedTeam: teamToDelete})
            } catch (error) {
                console.log("Delete Team Failed! Here's the error:", error);
                res.json({success: false, error: error});
            }
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
                    { model: PokemonSpecies },
                    { model: PokemonMove }
                ]
            });
            res.json(allPokemonInstances);
        },

        getPokemonInstanceByInstanceId: async(req, res) => {
            const { pokemonInstanceId } =  req.params;
            const pokemonInstance = await PokemonInstance.findByPk(pokemonInstanceId, {
                include: [
                    { model: PokemonSpecies },
                    { model: PokemonMove }
                ]
            });
            res.json(pokemonInstance);
        },



        createPokemonInstance: async(req, res) => {
            try {
                const { speciesId, teamId } = req.body;
                console.log("Create Pokemon Instance - teamId: ", teamId)
                console.log(`Creating new pokemon instance with speciesId ${speciesId} and teamId ${teamId}`);
                const newPokemonInstance = await PokemonInstance.create({
                    speciesId: speciesId,
                    teamId: teamId,
                    natureId: 0,
                    level: 100,
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
                res.json({success: true});
            } catch (error) {
                console.log("Unable to create pokemon!");
                console.log(error);
                res.json({success: false, error: error})
            }
        },

        editPokemonInstance: async(req, res) => {
            try {
                const { pokemonInstanceId } = req.params;
                const { } = req.body;

                console.log(`Editing pokemon instance with pokemonInstanceId ${pokemonInstanceId}`);
                const pokemonToEdit = await PokemonInstance.findByPk(pokemonInstanceId);

                if (pokemonToEdit) {
                    pokemonToEdit.speciesId = speciesId ?? pokemonToEdit.speciesId;
                    pokemonToEdit.natureId = natureId ?? pokemonToEdit.natureId;
                    pokemonToEdit.level = level ?? pokemonToEdit.level;

                    // Moves
                    pokemonToEdit.move1Id = move1Id ?? pokemonToEdit.move1Id;
                    pokemonToEdit.move2Id = move2Id ?? pokemonToEdit.move2Id;
                    pokemonToEdit.move3Id = move3Id ?? pokemonToEdit.move3Id;
                    pokemonToEdit.move4Id = move4Id ?? pokemonToEdit.move4Id;

                    // IVs
                    pokemonToEdit.hpIV = hpIV ?? pokemonToEdit.hpIV;
                    pokemonToEdit.atkIV = atkIV ?? pokemonToEdit.atkIV;
                    pokemonToEdit.defIV = defIV ?? pokemonToEdit.defIV;
                    pokemonToEdit.spATKIV = spATKIV ?? pokemonToEdit.spATKIV;
                    pokemonToEdit.spDEFIV = spDEFIV ?? pokemonToEdit.spDEFIV;
                    pokemonToEdit.speedIV = speedIV ?? pokemonToEdit.speedIV;

                    // EVs
                    pokemonToEdit.hpEV = hpEV ?? pokemonToEdit.hpEV;
                    pokemonToEdit.atkEV = atkEV ?? pokemonToEdit.atkEV;
                    pokemonToEdit.defEV = defEV ?? pokemonToEdit.defEV;
                    pokemonToEdit.spATKEV = spATKEV ?? pokemonToEdit.spATKEV;
                    pokemonToEdit.spDEFEV = spDEFEV ?? pokemonToEdit.spDEFEV;
                    pokemonToEdit.speedEV = speedEV ?? pokemonToEdit.speedEV;

                    await pokemonToEdit.save();
                }
                else console.log("No pokemon was found with that instance id!");

                res.json({success: true});
            } catch (error) {
                console.log("Unable to create pokemon!");
                console.log(error);
                res.json({success: false, error: error})
            }
        },

        deletePokemonInstance: async(req, res) => {
            try {
                const { pokemonInstanceId } = req.body;
                const pokemonInstanceToDelete = await PokemonInstance.destroy({
                    where: { pokemonInstanceId: pokemonInstanceId }
                });
                res.json({success: 'true', deletedPokemonInstance: pokemonInstanceToDelete});
            } catch (error) {
                console.log("Unable to delete pokemon!");
                console.log(error);
                res.json({success: false, error: error})
            }
        }
    //#endregion PokemonInstances
}

export default handlerFunctions;