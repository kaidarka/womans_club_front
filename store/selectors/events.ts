import {createSelector} from "reselect";
import {EventsState} from "../../types/entites/events";

export const getStateSelector = () => (state: { events: EventsState }) => {
    return state;
}

const stateSelector = getStateSelector();
export const makeSelectEvents = () =>
    createSelector(stateSelector, (state) => {
        return state.events
    });
