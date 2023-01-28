export interface INews {
    _id: string;
    name: string;
    text: string;
}

export interface NewsState {
    news: INews[];
    error: string;
    isLoading: boolean;
}
export enum NewsActionTypes {
    FETCH_NEWS_START = "FETCH_NEWS_START",
    FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
    FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",
}

interface FetchNewsActionStart {
    type: NewsActionTypes.FETCH_NEWS_START,
    payload: [],
}

interface FetchNewsActionSuccess {
    type: NewsActionTypes.FETCH_NEWS_SUCCESS,
    payload: INews[],
}

interface FetchNewsActionError {
    type: NewsActionTypes.FETCH_NEWS_ERROR,
    payload: string,
}

export type FetchNewsAction = FetchNewsActionStart | FetchNewsActionSuccess | FetchNewsActionError;
