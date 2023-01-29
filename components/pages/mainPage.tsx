import React from 'react';
import styles from '../../styles/MainPage.module.scss';
import {NewsState} from "../../types/entites/news";
import {EventsState} from "../../types/entites/events";

interface IProps {
    news: NewsState;
    events: EventsState;
}

const MainPage = (props: IProps) => {
    const { news, events } = props;
    console.log(news, events)
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.main}>
                    <div className={styles.main_info}></div>
                    <div className={styles.last_news}></div>
                </div>
            </div>
            <div className={styles.section}>
                asd
            </div>
        </div>
    );
};

export default MainPage;
