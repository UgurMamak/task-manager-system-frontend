import {combineReducers} from "redux";
import loginReducer from "./auth/loginReducer";

const reducers = {
    loginReducer
}

export const rootReducer = combineReducers(reducers);

/*
import {compose, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const allEnhancers=compose(
    composeWithDevTools(
        applyMiddleware(
            promise,thunk,logger
        )
    )
);

export default () => {
    return createStore(rootReducer, allEnhancers);
};*/
