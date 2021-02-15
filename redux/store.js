/*https://github.com/vercel/next.js/tree/canary/examples/with-redux-thunk   (KAYNAK)*/
import {useMemo} from 'react'
import {compose, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./index"

const allEnhancers = compose(
    composeWithDevTools(
        applyMiddleware(
            promise, thunk, logger
        )
    )
);

let store;

function initStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        allEnhancers
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}