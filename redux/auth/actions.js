import {API} from "../../helpers/url-info";
import axios from "axios";


//action type name definitions
const FETCH_LOGIN_PENDING = "FETCH_LOGIN_PENDING"; //started
const FETCH_LOGIN_FULFILLED = "FETCH_LOGIN_FULFILLED"; //successs return
const FETCH_LOGIN_REJECTED = "FETCH_LOGIN_REJECTED"; //error return


export const actionTypes = {
    FETCH_LOGIN_PENDING,
    FETCH_LOGIN_FULFILLED,
    FETCH_LOGIN_REJECTED
};

export const actionCreators = {
    //userLoginPending////redux promise middlaware olmasaydı bunu kullanmamız gerekirdi.
};


export const userLogin = (user) => {
    return dispatch => {
        dispatch({
            type: "FETCH_LOGIN",
            payload:
                axios.post(`${API}login`, user)
                    .then(result => Object.assign({}, result.data, {}))
        })
    }
}