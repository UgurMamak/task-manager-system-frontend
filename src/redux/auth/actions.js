import {API} from "../url-info";
import axios from "axios";
const LOGIN_SUCCESS="LOGIN_SUCCESS"

export const actionTypes={
    LOGIN_SUCCESS
};

function userLoginSucces(data){
    return{
        type:actionTypes.LOGIN_SUCCESS,
        payload:data
    }
}
export const userLogin=(user)=>{
    return (dispatch)=>{
        axios.post(`${API}login`,user)
            .then(result=>{console.log(result);

            console.log(result.headers);
                dispatch(userLoginSucces(result.data));
            })

            .catch(error=>{
                console.log("burda",error.response)
            })
    }
}
