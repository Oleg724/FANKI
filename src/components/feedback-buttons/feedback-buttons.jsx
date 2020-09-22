import React from 'react';
import likeIcon from '../../assets/emote.png';
import smileIcon from '../../assets/smile.png';
import './feedback-buttons.css';

const FeedbackButtons = ({ clazz = "", likes, likes2 }) => {

    return (
        <div className="feedback-buttons">
            <div className={`feedback-buttons__item${ clazz }`} id="leftBtn" >
                <img src={ likeIcon } alt="emote" className="feedback-buttons__img"/>
                <p className="feedback-buttons__count">{ likes }</p>
            </div>
            <div className="feedback-buttons__item" id="rightBtn">
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