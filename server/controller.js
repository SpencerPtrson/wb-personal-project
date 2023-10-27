// Initial Data
let BOARD_GAME_DATA = [
    { id: 0, name: "Catan", averagePlayTime: 60, minPlayers: 3, maxPlayers: 4, isFavorite: true, imageURL:"https://cf.geekdo-images.com/uHsUu5mFIPe2QMGLTon-LQ__imagepage/img/x2MbbI4PvUcuCoC8VD_ktbiQOZo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2838574.jpg"},
    { id: 1, name: "Risk", averagePlayTime: 200, minPlayers: 2, maxPlayers: 6, isFavorite: false, imageURL:"https://images-na.ssl-images-amazon.com/images/I/51ZgePtlYhL._SL160_.jpg"},
    { id: 2, name: "Scrabble", averagePlayTime: 90, minPlayers: 2, maxPlayers: 4, isFavorite: false, imageURL:"https://th.bing.com/th/id/R.96d07f5b257fce1ee0e0e06cc25665d5?rik=fojYwL0HSBl63Q&riu=http%3a%2f%2fwww.rgamereview.com%2fwp-content%2fuploads%2f2013%2f06%2fScrabble-Game-Online-for-PC-and-Mac-150x150.jpg%3f23e039&ehk=npH70ygAog%2fTWu%2fi1w%2b9D8QjB6jtzrubeWjlDxMbHTU%3d&risl=&pid=ImgRaw&r=0"},
    { id: 3, name: "Monopoly", averagePlayTime: 120, minPlayers: 2, maxPlayers: 6, isFavorite: false, imageURL:"https://th.bing.com/th/id/R.b5a0e3f7096e0f0f032a756a3b0fe475?rik=TToBuN%2f3mty7dA&riu=http%3a%2f%2fmedia.gamestats.com%2fgg%2fimage%2fobject%2f764%2f764742%2fMonopoly_2000_PCBOX_CUECKEDboxart_160w.jpg&ehk=%2fuxFtoU1Wyumq%2fB6iCILOMwK0xvkWG7SQ1gQkYMv2t4%3d&risl=&pid=ImgRaw&r=0"},
    { id: 4, name: "Clue", averagePlayTime: 45, minPlayers: 3, maxPlayers: 6, isFavorite: false, imageURL:"https://th.bing.com/th/id/OIP.ErAN9JwrsLcxKunuB0yyLgAAAA?pid=ImgDet&rs=1"},
    { id: 5, name: "Machi Koro", averagePlayTime: 30, minPlayers: 2, maxPlayers: 4, isFavorite: false, imageURL:"https://th.bing.com/th/id/OIP.wcD6CS313jyBsZ8S-JKKJQAAAA?pid=ImgDet&rs=1"},
    { id: 6, name: "Curses", averagePlayTime: 25, minPlayers: 3, maxPlayers: 6, isFavorite: true, imageURL:"https://www.theboardgamefamily.com/wp-content/uploads/2009/12/curses-box1-100x81.jpg"},
    { id: 7, name: "Mice and Mystics", averagePlayTime: 120, minPlayers: 1, maxPlayers: 4, isFavorite: false, imageURL:"https://www.boardgamequest.com/wp-content/uploads/2013/05/Mice-And-Mystics-Cover-150x150.jpg"},
    { id: 8, name: "Code Names", averagePlayTime: 25, minPlayers: 4, maxPlayers: 8, isFavorite: false, imageURL:"https://th.bing.com/th/id/OIP.azw75JDoMemAlhAJz1UyOAAAAA?pid=ImgDet&rs=1"},
    { id: 9, name: "Agricola", averagePlayTime: 45, minPlayers: 1, maxPlayers: 4, isFavorite: false, imageURL:"https://th.bing.com/th/id/OIP.IBzyvZ_92TXjKn4S3UM7kAAAAA?w=144&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    { id: 10, name: "Takenoko", averagePlayTime: 45, minPlayers: 2, maxPlayers: 4, isFavorite: false, imageURL:"https://th.bing.com/th/id/OIP.yPq-honu9tdNIERgjPm9lQAAAA?w=103&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    { id: 11, name: "King of Tokyo", averagePlayTime: 30, minPlayers: 2, maxPlayers: 6, isFavorite: false, imageURL:"https://th.bing.com/th/id/OIP.PxBs0M6T4UYzlTf8Ud7m4wAAAA?pid=ImgDet&rs=1"}
]

let globalId = BOARD_GAME_DATA.length;

const handlerFunctions = {
    // Get 1 Board Game
    getBoardGameById: (req, res) => {
        const { id } = req.params;
        const index = BOARD_GAME_DATA.findIndex(game => game.id === +id);
        res.send(BOARD_GAME_DATA[index]);
    },

    // Get all board games
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