import React from 'react';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import MainPage from "../components/pages/mainPage";
import {NewsState} from "../types/entites/news";
import {EventsState} from "../types/entites/events";
import {useMountEffect} from "../hooks/useMountEffect";

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
};

const mapStateToProps = createStructuredSelector({
});

export default  connect(mapStateToProps, mapDispatchToProps)(Index);
