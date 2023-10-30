import express from "express";
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

// Import handler functions
import handlerFunctions from "./controller.js"

// ENDPOINTS

  //#region users
    app.get('/api/users', async(req, res) => {
      const users = await User.findAll();
      res.json(users);
    });

    // Get 1 Move
    app.get('/api/users/:userId', async(req, res) => {
      const { userId } = req.params;
      const user = await PokemonMove.findByPk(userId);
      res.json(user);
    });
  //#endregion users


  //#region species
    // Get All Pokemon Species
    app.get('/api/pokemonspecies', async(req, res) => {
      const allPokemonSpecies = await PokemonSpecies.findAll();
      res.json(allPokemonSpecies);
    });

    // Get 1 Pokemon Species
    app.get('/api/pokemonspecies/:speciesId', async(req, res) => {
      const { speciesId } = req.params;
      const species = await PokemonSpecies.findByPk(speciesId);
      res.json(species);
    });
  //#endregion species


  //#region types
    // Get All Moves
    app.get('/api/types', async(req, res) => {
      const allTypes = await PokemonType.findAll();
      res.json(allTypes);
    });

    // Get 1 Move
    app.get('/api/types/:typeId', async(req, res) => {
      const { typeId } = req.params;
      const type = await PokemonMove.findByPk(typeId);
      res.json(type);
    });
  
  //#endregion types


  //#region moves
    // Get All Moves
    app.get('/api/moves', async(req, res) => {
      const allMoves = await PokemonMove.findAll();
      res.json(allMoves);
    });

    // Get 1 Move
    app.get('/api/moves/:moveId', async(req, res) => {
      const { moveId } = req.params;
      const move = await PokemonMove.findByPk(moveId);
      res.json(move);
    });
  //#endregion moves



// Authenticate User
function loginRequired(req, res, next) {
  if (!req.session.userId) res.status(401).json({ error: 'Unauthorized' });
  else next();
}

// Login
app.post('/api/auth', async(req, res) => {
  const { email, password } = req.body;
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



// POKEMON INSTANCES

// ABILITIES

  

// Open Server
ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})