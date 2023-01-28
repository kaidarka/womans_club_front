import {FetchNewsAction, NewsActionTypes, NewsState} from "../../types/entites/news";


const initialState: NewsState = {
    news: [],
    error: '',
    isLoading: false,
}

export const newsReducer = (state = initialState, action:FetchNewsAction) => {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS_START:
            return { ...state, events: [], isLoading: true }
        case NewsActionTypes.FETCH_NEWS_SUCCESS:
            return { ...state, events: action.payload, isLoading: false }
        case NewsActionTypes.FETCH_NEWS_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state
    }
}
