import {Dispatch} from "react";
import {FetchEventsAction, EventsActionTypes} from "../../types/entites/events";
import axios from "../../utils/axios";

// TODO make params for request

export const fetchEvents = () => {
    return async (dispatch: Dispatch<FetchEventsAction>) => {
        dispatch({type: EventsActionTypes.FETCH_EVENTS_START, payload: []})
        try {
            const { data } = await axios.get('/events');
            dispatch({type: EventsActionTypes.FETCH_EVENTS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: EventsActionTypes.FETCH_EVENTS_ERROR,
                payload: 'Произошла ошибка при загрузке событий'
            })
        }
    }
}
