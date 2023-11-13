const initialState = {
    email: '',
    userId: null
};

const SET_USERINFO = 'SET_USERINFO';

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERINFO:
            return {...state, email: action.payload.email, userId: action.payload.userId};
        default:
            return state;
    }
}