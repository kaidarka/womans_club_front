import {FetchNewsAction, NewsActionTypes, NewsState} from "../../types/entites/news";


const initialState: NewsState = {
    data: [],
    error: '',
    isLoading: false,
}

export const newsReducer = (state = initialState, action:FetchNewsAction) => {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS_START:
            return { ...state, data: [], isLoading: true }
        case NewsActionTypes.FETCH_NEWS_SUCCESS:
            return { ...state, data: action.payload, isLoading: false }
        case NewsActionTypes.FETCH_NEWS_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state
    }
}
