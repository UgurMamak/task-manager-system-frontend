import {actionTypes} from "./actions";

const initialState={
    auth:[]
};

export default function loginReducer(state=initialState,action){
    switch (action.type){
        case actionTypes.LOGIN_SUCCESS:
            console.log(action)
            return{
                ...state,
                auth:action.payload
            }
        default :
            return state;
    }
}