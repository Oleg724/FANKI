import React from 'react';
import likeIcon from '../../assets/emote.png';
import smileIcon from '../../assets/smile.png';
import './feedback-buttons.css';

const FeedbackButtons = ({ likes = 0, likes2 = 0, clazz = '' }) => {

    return (
        <div className="feedback-buttons">
            <div className={`feedback-buttons__item${ clazz }`}>
                <img src={ likeIcon } alt="emote" className="feedback-buttons__img"/>
                <p className="feedback-buttons__count">{ likes }</p>
            </div>
            <div className="feedback-buttons__item">
                <img src={ likeIcon } alt="emote" className="feedback-buttons__img"/>  
                <p className="feedback-buttons__count">{ likes2 }</p> 
            </div>
            <div className="feedback-buttons__item">
                <img src={ smileIcon } alt="smile" className="feedback-buttons__img"/>    
            </div>
        </div>
    )
}

export default FeedbackButtons;