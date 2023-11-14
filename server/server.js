import express from "express";
import session from "express-session";
import ViteExpress from "vite-express";
import morgan from "morgan";

import { PokemonSpecies, PokemonMove, PokemonType, User } from '../src/database/models.js'

// create express instance
const app = express();
const PORT = 8000;

// setup middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(session({ 
  secret: 'ssshhhhh', 
  saveUninitialized: true, 
  resave: false 
}));

// Import handler functions
import handlerFunctions from "./controller.js"

// ENDPOINTS

  // Authenticate User
  function loginRequired(req, res, next) {
    console.log("Checking if currently logged in");
    if (!req.session.userId) res.status(401).json({ error: 'Unauthorized' });
    else {
      console.log("Authorized");
      next();
    } 
  }


  //#region users

    // Get all users
    app.get('/api/users', handlerFunctions.getUsers);

    // Get 1 User
    app.get('/api/users/:userId', handlerFunctions.getUserById);

    // Create new User
    app.post('/api/users/create', handlerFunctions.createUser);

    // Delete user
    app.delete('/api/users/delete', handlerFunctions.deleteUser);

  //#endregion users


  //#region AccountManagement

    // Login
    app.post('/api/auth', handlerFunctions.logIn);

    // Logout
    app.post('/api/logout', handlerFunctions.logOut);

    // Check if session id has corresponding user
    app.get('/userCheck', handlerFunctions.userCheck);

    // Delete Account
    app.delete('/api/users/delete/:userId', handlerFunctions.deleteUser)

  //#endregion AccountManagement


  //#region Teams

      // Get all Teams
      app.get('/api/teams', handlerFunctions.getTeams);

      // Get 1 Team
      app.get('/api/teams/:teamId', handlerFunctions.getTeamByTeamId);

      // Get all Teams for a user id
      app.get('/api/teams/teamsByUser/:userId', handlerFunctions.getTeamsByUserId);

      // Create a Team
      app.post('/api/teams/create/:userId', handlerFunctions.createTeam);

      // Edit a Team
      app.put('/api/teams/edit/:teamId', handlerFunctions.editTeam);

      // Delete a Team
      app.delete('/api/teams/delete', handlerFunctions.deleteTeam);

  //#endregion Teams


  //#region species

    // Get All Pokemon Species
    app.get('/api/pokemonspecies', handlerFunctions.getAllSpecies);

    // Get 1 Pokemon Species
    app.get('/api/pokemonspecies/:speciesId', handlerFunctions.getSpeciesById);

  //#endregion species


  //#region types

    // Get All Types
    app.get('/api/types', handlerFunctions.getPokemonTypes);

    // Get 1 Type
    app.get('/api/types/:typeId', handlerFunctions.getPokemonTypesById);
  
  //#endregion types


  //#region moves

    // Get All Moves
    app.get('/api/moves', handlerFunctions.getPokemonMoves);

    // Get 1 Move
    app.get('/api/moves/:moveId', handlerFunctions.getPokemonMovesById);

  //#endregion moves


  //#region abilities

    // Get All Abilities
    app.get('/api/abilities', handlerFunctions.getPokemonAbilities);

    // Get 1 Ability
    app.get('/api/abilities/:abilityId', handlerFunctions.getPokemonAbilitiesById);

  //#endregion abilities


  //#region PokemonInstances

    // Get All Pokemon Instances
    app.get('/api/pokemoninstances', handlerFunctions.getPokemonInstances);

    // Get 1 Pokemon Instance
    app.get('/api/pokemoninstances/:pokemonInstanceId', handlerFunctions.getPokemonInstanceByInstanceId);

    // Create a pokemon instance
    app.post('/api/pokemoninstances/create', handlerFunctions.createPokemonInstance);

    // Edit a pokemon instance
    app.put('/api/pokemoninstances/edit/:pokemonInstanceId', handlerFunctions.editPokemonInstance);

    // Delete a pokemon instance
    app.delete('/api/pokemoninstances/delete', handlerFunctions.deletePokemonInstance);
    
  //#endregion PokemonInstances


  

// Open Server
ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})