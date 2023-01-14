import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchEvents} from "../../store/actionCreators/events";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Index = () => {
    const {events, error} = useTypedSelector(state => state.events)
    console.log(events)
    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }


    return (
        <MainLayout>
            События
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res }) => {
            await store.dispatch(fetchEvents());
        });
