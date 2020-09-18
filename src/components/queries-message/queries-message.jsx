import React from 'react';
import './queries-message.css';

const QueriesMessage = ({ text, names }) => {
    return (
        <p className="queries__text">

            <span>У вас</span> 

            <span className="queries__text queries__text--orange">
                { text }
            </span> 

            <span>от сотрудников:</span>

            <span className="queries__text queries__text--bold">
                { names }
            </span>
        </p>   
    )
}

export default QueriesMessage;