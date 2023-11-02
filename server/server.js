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

  //#region users

    app.get('/api/users', handlerFunctions.getUsers);

    // Get 1 User
    app.get('/api/users/:userId', handlerFunctions.getUserById);

    // Authenticate User
    function loginRequired(req, res, next) {
      console.log("Checking if currently logged in");
      if (!req.session.userId) res.status(401).json({ error: 'Unauthorized' });
      else {
        console.log("Authorized");
        next();
      } 
    }

    // Login
    app.post('/api/auth', async(req, res) => {
      const { email, password } = req.body;
      console.log(email, password);
      const user = await User.findOne({
          where: { email: email }
      });

      if (user?.password === password) {
        req.session.userId = user.userId;
        res.json({ success: true });
      }
      else res.json({ success: false });
    });

    // Logout
    app.post('/api/logout', loginRequired, async (req, res) => {
      req.session.destroy();
      res.json({ success: true });
    });

    // 
    app.get('/userCheck', async (req, res) => {
      if (req.session.userId) {
        const user = await User.findByPk(req.session.userId)
        res.send({ email: user.email })
      }
    })


  //#endregion users


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


// POKEMON INSTANCES


  

// Open Server
ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})