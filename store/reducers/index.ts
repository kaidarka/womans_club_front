import {combineReducers} from "redux";
import {newsReducer} from "./newsReducer";
import {HYDRATE} from "next-redux-wrapper";

export const rootReducer = combineReducers({
    news: newsReducer,
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};


export type RootState = ReturnType<typeof rootReducer>