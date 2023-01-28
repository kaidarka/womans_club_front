import {EventsActionTypes, EventsState, FetchEventsAction} from "../../types/entites/events";

const initialState: EventsState = {
    data: [],
    error: '',
    isLoading: false,
}

export const eventsReducer = (state = initialState, action:FetchEventsAction) => {
    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS_START:
            return { ...state, data: [], isLoading: true }
        case EventsActionTypes.FETCH_EVENTS_SUCCESS:
            return { ...state, data: action.payload, isLoading: false }
        case EventsActionTypes.FETCH_EVENTS_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state
    }
}
