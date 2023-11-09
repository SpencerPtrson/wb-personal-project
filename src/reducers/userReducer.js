import axios from "axios";
const initialState = {
    loading: false,
    email: '',
    userId: null
};

const SET_EMAIL = 'SET_EMAIL';
const PENDING = 'PENDING';

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case PENDING:
            return {...state, loading: true};
        case SET_EMAIL:
            console.log("Reducer setting:", action.payload);
            return {...state, email: action.payload.email, userId: action.payload.userId};
            // return { ... state, email: action.payload}
        default:
            return state;
    }
}