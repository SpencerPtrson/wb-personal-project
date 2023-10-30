import { configureStore } from "@reduxjs/toolkit";
import pokemonSpeciesReducer from "./reducers/pokemonSpeciesReducer";
import movesReducer from "./reducers/moveReducer";

export default configureStore({
    reducer: {
        pokemonSpecies: pokemonSpeciesReducer,
        moves: movesReducer,
    }
});