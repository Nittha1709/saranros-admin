import { LOGINSUCCESS } from "../actions/login";

const initialState = {
    token : '',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGINSUCCESS:
        console.log('loginOKKKKK')
            return {
                ...state,
                token: action.token
            };
            break;
        default:
            return state
    }
}
