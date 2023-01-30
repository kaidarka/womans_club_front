import React from 'react';
import {fetchEvents as fetchEventsAction} from "../../store/actionCreators/events";
import {connect} from "react-redux";
import {EventsState} from "../../types/entites/events";
import {createStructuredSelector} from "reselect";
import {makeSelectEvents} from "../../store/selectors/events";
import {useMountEffect} from "../../hooks/useMountEffect";
import { isEmpty } from 'lodash';

interface IProps {
    fetchEvents: () => void;
    events: EventsState
}

const Index = (props: IProps) => {
    const {fetchEvents, events} = props;
    console.log(events)
    useMountEffect(() => {
        fetchEvents();
    })


    return (
            <>
            События
            {!isEmpty(events.data) && events.data.map((item) => {
                console.log(item)
                return(
                    <div key={item._id}>{item.text}</div>
                )
            })}
            </>
    );
};


const mapDispatchToProps = {
    fetchEvents: fetchEventsAction,
};

const mapStateToProps = createStructuredSelector({
    events: makeSelectEvents(),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Index);
