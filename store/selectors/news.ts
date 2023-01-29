import {createSelector} from "reselect";
import {NewsState} from "../../types/entites/news";

export const getStateSelector = () => (state: { news: NewsState }) => {
    return state;
}

const stateSelector = getStateSelector();
export const makeSelectNews = () =>
    createSelector(stateSelector, (state) => {
        return state.news
    });
