import axios from "axios";
const initialState = {
    loading: false,
    movesList: []
};

const REQUEST_MOVES = 'REQUEST_MOVES';
const PENDING = 'PENDING';

export const requestMoves = async(dispatch) => {
    dispatch({type: PENDING});
    let movesList = await axios.get('/api/moves');
    console.log("Move Data:", movesList.data);
    dispatch({type: REQUEST_MOVES, payload: movesList});
}

export default function movesReducer(state = initialState, action) {
    switch(action.type) {
        case PENDING:
            return {...state, loading: true};
        case REQUEST_MOVES:
            return {loading: false, movesList: action.payload};
        default:
            return state;
    }
}