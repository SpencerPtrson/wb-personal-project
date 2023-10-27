import { User, PokemonSpecies, db } from "./src/database/models.js";


await db.sync({force: true}); // Erases all previous data

const user = await User.create({
    email: 'test@test.com',
    password: 'test'
});


await db.close();