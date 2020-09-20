import React from 'react';
import './queries-message.css';

const QueriesMessage = ({ text, names }) => {
    return (
        <div className="queries-message">
            <p className="queries-message__text">
                У вас 
                <span className="queries-message__text queries-message__text--orange">
                    { text }
                </span> 
            </p>
            <p className="queries-message__text">
                от сотрудников:
                <span className="queries-message__text queries-message__text--bold">
                    { names }
                </span>
            </p>
        </div>   
    )
}

export default QueriesMessage;