import {compose, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";

//const allEnhancers = compose(applyMiddleware(thunk));
//const allEnhancers = composeWithDevTools(applyMiddleware(promise,thunk,logger));
const allEnhancers=compose(
    composeWithDevTools(
        applyMiddleware(
            promise,thunk,logger
        )
    )
);

export default () => {
    return createStore(rootReducer, allEnhancers);
};