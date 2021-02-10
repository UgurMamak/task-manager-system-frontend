import {compose, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";

//const allEnhancers = compose(applyMiddleware(thunk));
const allEnhancers = composeWithDevTools(applyMiddleware(thunk,logger,promise));

export default () => {
    return createStore(rootReducer, allEnhancers);
};