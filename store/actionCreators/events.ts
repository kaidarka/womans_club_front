import {Dispatch} from "react";
import {FetchEventsAction, EventsActionTypes} from "../../types/entites/events";
import axios from "axios";
import {api} from "../../utils/constants";
import warning from "react-redux/es/utils/warning";

export const fetchEvents = () => {
    return async (dispatch: Dispatch<FetchEventsAction>) => {
        try {
            // TODO create axios file with configuration
            const response = {data: [{_id: 'asd', text: 'fadsgdas'}]}
            // await axios.get(`${api}/events`)
            dispatch({type: EventsActionTypes.FETCH_EVENTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: EventsActionTypes.FETCH_EVENTS_ERROR,
                payload: 'Произошла ошибка при загрузке событий'
            })
        }
    }
}
