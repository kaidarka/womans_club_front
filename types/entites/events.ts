export interface IEvent {
    _id: string;
    name: string;
    text: string;
    tags: [string];
    user: string
    date: {
        start: number;
        end: number;
    },
    viewsCount: number;
    imageUrls: [string];
    members: [string];
    withRegistration: boolean;
}

export interface EventsState {
    events: IEvent[];
    error: string;
    isLoading: boolean;
}
export enum EventsActionTypes {
    FETCH_EVENTS_START = "FETCH_EVENTS_START",
    FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS",
    FETCH_EVENTS_ERROR = "FETCH_EVENTS_ERROR",
}

interface FetchEventsActionStart {
    type: EventsActionTypes.FETCH_EVENTS_START,
    payload: [],
}

interface FetchEventsActionSuccess {
    type: EventsActionTypes.FETCH_EVENTS_SUCCESS,
    payload: IEvent[],
}

interface FetchEventsActionError {
    type: EventsActionTypes.FETCH_EVENTS_ERROR,
    payload: string,
}

export type FetchEventsAction = FetchEventsActionStart | FetchEventsActionSuccess | FetchEventsActionError;
