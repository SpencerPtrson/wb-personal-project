import axios from "axios";
const initialState = {
    loading: false,
    email: '',
};

const REQUEST_EMAIL = 'REQUEST_EMAIL';
const SET_EMAIL = 'SET_EMAIL';
const PENDING = 'PENDING';

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case PENDING:
            return {...state, loading: true};
        case SET_EMAIL:
            return {...state, email: action.payload};
        default:
            return state;
    }
}