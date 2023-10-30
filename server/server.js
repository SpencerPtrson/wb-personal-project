import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";

import { PokemonSpecies, User } from '../src/database/models.js'

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
})


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
})

// Logout
app.post('/api/logout', loginRequired, async (req, res) => {
  req.session.destroy();
  res.json({ success: true });
})



// Get All Ratings
app.get('/api/ratings', loginRequired, async (req, res) => {
  console.log("app.get: get all ratings started");
  const user = await User.findByPk(req.session.userId);
  const ratings = await user.getRatings({ 
      include: {
          model: Movie,
          attributes: ['title'],
      }
  });
  res.json(ratings);
})

// Rate a movie for the current user
app.post('/api/ratings', loginRequired, async (req, res) => {
  console.log("app.post: create rating started");
  const { movieId, score } = req.body;
  const user = await User.findByPk(req.session.userId);
  const newRating = await user.createRating({
      movieId: movieId,
      score: score,
  });
  res.json(newRating);
})


// ENDPOINTS

// POKEMON SPECIES

// POKEMON INSTANCES

// USERS

// MOVES

// ABILITIES

  

// Open Server
ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})