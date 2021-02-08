import {compose, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const allEnhancers = compose(applyMiddleware(thunk));

export default () => {
    return createStore(rootReducer, allEnhancers);
};