import React from 'react';
import Button from '../button';
import './list-item-info.css';

const ListItemInfo = ({ title, text }) => {
    return (
        <div className="list-item-info">
            <div className="list-item-info__item">
                <div className="list-item-info__title">{ title }</div>
                <div className="list-item-info__text">{ text }</div>
            </div>
            <div className="list-item-info__footer">
                <p className="list-item-info__text">Пропустить обучение</p>
                <Button text="Далее" />
            </div>
        </div>
    )
}

export default ListItemInfo;