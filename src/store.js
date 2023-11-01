import { configureStore } from "@reduxjs/toolkit";
import pokemonSpeciesReducer from "./reducers/pokemonSpeciesReducer";
import movesReducer from "./reducers/moveReducer";
import userReducer from "./reducers/userReducer";

export default configureStore({
    reducer: {
        pokemonSpecies: pokemonSpeciesReducer,
        moves: movesReducer,
        user: userReducer,
    }
});