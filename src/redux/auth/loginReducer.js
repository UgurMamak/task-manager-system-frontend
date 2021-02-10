import { actionTypes} from "./actions";

const initialState = {
    fetching: false,
    fetched: false,
    error: {},
    auth: {},
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_LOGIN_PENDING:
            return {
                ...state,
                fetching: true,
            }
        case actionTypes.FETCH_LOGIN_FULFILLED:
            return {
                ...state,
                fetching: false,
                auth: action.payload
            }
        case actionTypes.FETCH_LOGIN_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload.response
            }
        default :
            return state;
    }
}