import axios from "axios";
const initialState = {
    email: '',
};

const REQUEST_EMAIL = 'REQUEST_EMAIL';
const PENDING = 'PENDING';

export const requestEmail = async(dispatch) => {
    dispatch({type: PENDING});
    let email = await axios.get('/api/moves');
    console.log("Email Data:", email.data);
    dispatch({type: REQUEST_EMAIL, payload: email});
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case PENDING:
            return {...state, loading: true};
        case REQUEST_EMAIL:
            return {email: false, movesList: action.payload};
        default:
            return state;
    }
}