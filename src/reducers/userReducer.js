const initialState = {
    email: '',
    userId: null
};

const SET_EMAIL = 'SET_EMAIL';

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_EMAIL:
            return {...state, email: action.payload.email, userId: action.payload.userId};
        default:
            return state;
    }
}