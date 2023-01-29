import {Dispatch} from "react";
import {FetchNewsAction, NewsActionTypes} from "../../types/entites/news";
import axios from "../../utils/axios";

export const fetchNews = () => {
    return async (dispatch: Dispatch<FetchNewsAction>) => {
        dispatch({type: NewsActionTypes.FETCH_NEWS_START, payload: []})
        try {
            const { data } = await axios.get('/news');
            dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR,
                payload: 'Произошла ошибка при загрузке новостей'
            })
        }
    }
}
