import React, {ComponentType} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {fetchEvents as fetchEventsAction} from "../../store/actionCreators/events";
import {connect, Matching} from "react-redux";
import {EventsState} from "../../types/entites/events";
import {createStructuredSelector} from "reselect";
import {makeSelectEvents} from "../../store/selectors/events";
import {useMountEffect} from "../../hooks/useMountEffect";
import { isEmpty } from 'lodash';

interface IProps {
    fetchEvents: () => void;
    events: EventsState
}

const Index: ComponentType<Matching<{ events: EventsState } & { fetchEvents: () => Promise<void>; }, IProps>> = (props: IProps) => {
    const {fetchEvents, events} = props;
    console.log(events)
    useMountEffect(() => {
        fetchEvents();
    })


    return (
        <MainLayout>
            <>
            События
            {!isEmpty(events.data) && events.data.map((item) => {
                console.log(item)
                return(
                    <div key={item._id}>{item.text}</div>
                )
            })}
            </>
        </MainLayout>
    );
};


const mapDispatchToProps = {
    fetchEvents: fetchEventsAction,
};

const mapStateToProps = createStructuredSelector({
    events: makeSelectEvents(),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Index);
