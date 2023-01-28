//
//
// // create a makeStore function
// import {Context, createWrapper, MakeStore} from 'next-redux-wrapper';
// import {AnyAction, applyMiddleware, createStore} from "redux";
// import {reducer, RootState} from "./reducers";
// import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
//
// const makeStore: MakeStore<RootState>
//     = (context: Context) => createStore(reducer, applyMiddleware(thunk));
//
// // export an assembled wrapper
// export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
//
// export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import {eventsReducer} from "./reducers/eventsReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

// @ts-ignore
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    events: eventsReducer,
})

// @ts-ignore
const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
