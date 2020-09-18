import React from 'react';
import './queries-item.css';

const QueriesItem = ({ name, text }) => {

    return (
        <li className="queries__item">
            <p className="queries__text">
                <span className="queries__text">Тема запроса: { text }</span> 
                <span className="queries__text">от сотрудникa:</span>
                <span className="queries__text queries__text--bold">{ name }</span>
            </p>    
        </li>
    )
}

export default QueriesItem;