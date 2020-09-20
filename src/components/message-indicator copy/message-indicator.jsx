import React from 'react';
import bellIcon from '../../assets/bell.png';
import './message-indicator.css';

const MessageIndicator = ({ number }) => {

    const text = number ? number : 'Сообщений нет';

    return (
        <div className="message-indicator">
            <img className="message-indicator__img" src={bellIcon} alt="bell"/>
            <p className="message-indicator__text">
                { text }
            </p>
        </div>
    )
}

export default MessageIndicator;