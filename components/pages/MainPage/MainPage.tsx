import React from 'react';
import styles from '../../../styles/MainPage.module.scss';
import {NewsState} from "../../../types/entites/news";
import {EventsState} from "../../../types/entites/events";
import Card from "../Card/Card";

interface IProps {
    news: NewsState;
    events: EventsState;
}

const MainPage = (props: IProps) => {
    const {news, events} = props;
    const myProps = {
        news: [{
            id: 1,
            title: 'Название новости',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam aspernatur consequuntur' +
                ' dolor, doloribus esse eum ex exercitationem,\n' +
                'fugit, incidunt iste maiores nemo neque nisi officia praesentium quas quidem ullam\n' +
                'voluptates. Accusantium aliquam autem beatae consequuntur cum exercitationem illo impedit\n' +
                'inventore labore neque pariatur rem sed, sint sit soluta.'
        }, {
            title: 'Название новости 2',
            body: 'Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam aspernatur consequuntur' +
                ' dolor, doloribus esse eum ex exercitationem,\n' +
                'fugit, incidunt iste maiores nemo neque nisi officia praesentium quas quidem ullam\n' +
                'voluptates. Accusantium aliquam autem beatae consequuntur cum exercitationem illo impedit\n' +
                'inventore labore neque pariatur rem sed, sint sit soluta.'
        },
        ]
    };
    console.log('mainp', news, events)
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.main}>
                    <div className={styles.main_info}></div>
                    <div className={styles.last_news}></div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.main_info}>Основная инфа и фоточка<img/></div>
                <div className={styles.last_news}>
                    <h2 className={styles.last_news__title}>Новости</h2>
                    <div className={styles.last_news__wrapper}>
                        {myProps.news.map(news => <Card key={news.id} title={news.title} body={news.body}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
