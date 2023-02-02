import React from 'react';
import cardStyles from "../../../styles/Card.module.scss";
interface IProps {
    title: string;
    body: string;
}
const Card = (props:IProps) => {
    // TODO ограничить максимальный выводимый текст в body карточки
    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.card__title}>{props.title}</div>
            <div className={cardStyles.card__body}>{props.body}</div>

        </div>
    );
};

export default Card;