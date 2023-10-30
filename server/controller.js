const handlerFunctions = {
    // Get 1 Pokemon Species
    getPokemonSpeciesById: (req, res) => {
        const { id } = req.params;
        const index = BOARD_GAME_DATA.findIndex(game => game.id === +id);
        res.send(BOARD_GAME_DATA[index]);
    },

    // Get all pokemon species
    getBoardGames: (req, res) => {
        res.send(BOARD_GAME_DATA);
    },

    // Get favorite board games
    getFavoriteBoardGames: (req, res) => {
        res.send(BOARD_GAME_DATA.filter(game => game.isFavorite));
    },
    
    // Create Board Game
    createBoardGame: (req, res) => {
        const { name, averagePlayTime, minPlayers, maxPlayers, isFavorite, imageURL } = req.body;
        
        const newGame = {
            id: globalId,
            name: name ? name: "Game Name",
            averagePlayTime: +averagePlayTime ? +averagePlayTime : 0,
            minPlayers: +minPlayers ? +minPlayers : 0,
            maxPlayers: +maxPlayers ? +maxPlayers : 0,
            isFavorite: isFavorite ? isFavorite : false,
            imageURL: imageURL ? imageURL : "No image supplied."
        }

        BOARD_GAME_DATA.push(newGame);
        globalId++;
        
        res.send(newGame);
    },

    // Edit Board Game
    editBoardGame: (req, res) => {
        console.log("Editing Initial Data:", req.body)

        const { id } = req.params;
        const { imageURL, name, playtime, minPlayers, maxPlayers, isFavorite } = req.body;

        const index = BOARD_GAME_DATA.findIndex(game => game.id === +id);
        const game = BOARD_GAME_DATA[index];

        game.imageURL = imageURL;
        game.name = name;
        game.averagePlayTime = +playtime;
        game.minPlayers = +minPlayers;
        game.maxPlayers = +maxPlayers;
        game.isFavorite = isFavorite;
        
        // return the edited game
        res.send(game);
    },

    // Delete Board Game
    deleteBoardGame: (req, res) => {
        console.log("Attempting to delete:", +(req.params.id))
        BOARD_GAME_DATA = BOARD_GAME_DATA.filter((game) => game.id !== +(req.params.id));
        res.send(BOARD_GAME_DATA);
    }
}

export default handlerFunctions;