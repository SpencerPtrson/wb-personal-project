import axios from "axios";
const initialState = {
    loading: false,
    speciesList: []
};

const REQUEST_SPECIES = 'REQUEST_SPECIES';
const PENDING = 'PENDING';

export const requestSpecies = async(dispatch) => {
    dispatch({type: PENDING});
    let speciesList = await axios.get('/api/pokemonspecies');
    console.log("Species Data:", speciesList.data);
    dispatch({type: REQUEST_SPECIES, payload: speciesList});
}

export default function pokemonSpeciesReducer(state = initialState, action) {
    switch(action.type) {
        case PENDING:
            return {...state, loading: true};
        case REQUEST_SPECIES:
            return {loading: false, speciesList: action.payload};
        default:
            return state;
    }
}