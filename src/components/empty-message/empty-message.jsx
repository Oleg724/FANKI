import React from 'react';
import './empty-message.css';

const EmptyMessage = ({ text, image }) => {
    return (
        <div className="empty-message">
            <img src={ image } alt="books" className="empty-message__image"/>
            <p className="empty-message__text">{ text }</p>
        </div>
    )
}

export default EmptyMessage;