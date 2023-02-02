import React from 'react';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import MainPage from "../components/pages/MainPage/MainPage";
import {NewsState} from "../types/entites/news";
import {EventsState} from "../types/entites/events";
import {useMountEffect} from "../hooks/useMountEffect";
import {fetchNews as fetchNewsAction} from "../store/actionCreators/news";
import {fetchEvents as fetchEventsAction} from "../store/actionCreators/events";
import {makeSelectNews} from "../store/selectors/news";
import {makeSelectEvents} from "../store/selectors/events";

interface IProps {
    fetchNews: (params: object) => void;
    news: NewsState;
    fetchEvents: (params: object) => void;
    events: EventsState;
}

const Index  = (props: IProps) => {
    // Получение данных
    const { fetchNews, news, fetchEvents, events } = props;
    useMountEffect(() => {
        fetchNews({ limit: 5 });
        fetchEvents({ limit: 5 });
    })

    return (
        // Передача данных в верстку
        <MainPage news={news} events={events}/>
    );
};


const mapDispatchToProps = {
    fetchNews: fetchNewsAction,
    fetchEvents: fetchEventsAction,
};

const mapStateToProps = createStructuredSelector({
    news: makeSelectNews(),
    events: makeSelectEvents(),
});

export default  connect(mapStateToProps, mapDispatchToProps)(Index);
