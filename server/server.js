import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";

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

    // BOARD GAME ENDPOINTS
    // Get 1 Board Game
    app.get('/games/:id', handlerFunctions.getBoardGameById);

    // Get All Board Games
    app.get('/games', handlerFunctions.getBoardGames);

    // Get Favorite Board Games
    app.get('/favorites', handlerFunctions.getFavoriteBoardGames);

    // Create Board Game
    app.post('/createGame', handlerFunctions.createBoardGame);
    
    // Edit Board Game
    app.put('/editBoardGame/:id', handlerFunctions.editBoardGame);

    // Delete Board Game
    app.delete('/deleteBoardGame/:id', handlerFunctions.deleteBoardGame);



// Open Server
ViteExpress.listen(app, PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})